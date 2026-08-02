import { createHash } from "node:crypto";
import {
	cpSync,
	lstatSync,
	mkdirSync,
	mkdtempSync,
	readFileSync,
	readdirSync,
	renameSync,
	rmSync,
	statSync,
	utimesSync,
	writeFileSync,
} from "node:fs";
import { hostname } from "node:os";
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from "node:path";
import { parse, parseDocument } from "yaml";
import { getAgentDir, getBundledSkillsDir } from "../config.ts";
import { spawnProcess, waitForChildProcess } from "../utils/child-process.ts";

const STATE_SCHEMA_VERSION = 1;
const OFFICIAL_REPOSITORY = "https://github.com/VectorSpaceLab/Auto-ML-Skills.git";
const LIBRARY_PATH = "research-skills-library";
const ROUTER_ID = "repo-skills-router";
const ROUTING_REGISTRY_PATH = join("references", "scenario-registry.json");
const LOCK_TIMEOUT_MS = 900_000;
const LOCK_STALE_MS = 3_600_000;
const LOCK_POLL_MS = 250;
const CANONICAL_SKILL_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MANUAL_INSTALL_URL =
	"https://github.com/VectorSpaceLab/Auto-ML-Skills#install-the-published-repository-collection";

export class RepoSkillsLibraryError extends Error {
	readonly exitCode: number;

	constructor(message: string, exitCode = 1) {
		super(message);
		this.name = "RepoSkillsLibraryError";
		this.exitCode = exitCode;
	}
}

export class RepoSkillsLibraryConflictError extends RepoSkillsLibraryError {
	readonly conflicts: string[];

	constructor(conflicts: string[]) {
		super(
			[
				"Repository skill installation has local conflicts:",
				...conflicts.map((conflict) => `- ${conflict}`),
				"Re-run with --force to replace only the conflicting official entries after creating a backup.",
			].join("\n"),
			2,
		);
		this.name = "RepoSkillsLibraryConflictError";
		this.conflicts = conflicts;
	}
}

interface ManagedTreeState {
	digest: string;
	fileCount: number;
}

interface RepoSkillsLibraryState {
	schemaVersion: 1;
	source: {
		repository: string;
		ref: "HEAD";
		commit: string;
	};
	installedAt: string;
	updatedAt: string;
	managedSkills: Record<string, ManagedTreeState>;
	managedRootFiles: Record<string, string>;
	sourceRouterDigest: string;
	liveTreeDigest: string;
	liveRouterDigest?: string;
}

interface SourceInventory {
	libraryRoot: string;
	repoSkillsRoot: string;
	routerDir: string;
	managedSkills: Map<string, ManagedTreeState>;
	managedRootFiles: Map<string, string>;
	routerDigest: string;
}

interface SourceSnapshot {
	commit: string;
	libraryRoot: string;
	cleanup(): void;
}

interface ProcessResult {
	code: number;
	stdout: string;
	stderr: string;
}

export type RepoSkillsTransactionPoint =
	| "before-install-repo-skills"
	| "before-install-router"
	| "before-install-state"
	| "before-restore-repo-skills"
	| "before-restore-router"
	| "before-restore-state";

export interface RepoSkillsLibraryManagerOptions {
	agentDir?: string;
	sourceRepository?: string;
	gitCommand?: string;
	bundledSkillsDir?: string;
	offline?: boolean;
	now?: () => Date;
	env?: NodeJS.ProcessEnv;
	/** Used by transaction recovery tests; the CLI never supplies this hook. */
	transactionFaultInjector?: (point: RepoSkillsTransactionPoint) => void;
}

export interface RepoSkillsInstallResult {
	operation: "install" | "update";
	commit?: string;
	managedSkills: number;
	localSkills: number;
	totalSkills: number;
	routerEnabled?: boolean;
	noop: boolean;
	backupPath?: string;
	issues: string[];
}

export interface RepoSkillsRouterToggleResult {
	enabled: boolean;
	changed: boolean;
}

export interface RepoSkillsLibraryStatus {
	installed: boolean;
	managed: boolean;
	sourceRepository?: string;
	commit?: string;
	installedAt?: string;
	updatedAt?: string;
	managedSkills: number;
	localSkills: number;
	totalSkills: number;
	totalFiles: number;
	routerPresent: boolean;
	routerEnabled?: boolean;
	issues: string[];
}

function isTruthyEnvironmentFlag(value: string | undefined): boolean {
	if (!value) return false;
	return value === "1" || value.toLowerCase() === "true" || value.toLowerCase() === "yes";
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}

function pathExists(path: string): boolean {
	try {
		lstatSync(path);
		return true;
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") return false;
		throw error;
	}
}

function isWithin(parent: string, candidate: string): boolean {
	const relativePath = relative(parent, candidate);
	return (
		relativePath === "" ||
		(!relativePath.startsWith(`..${sep}`) && relativePath !== ".." && !isAbsolute(relativePath))
	);
}

function toPosix(path: string): string {
	return path.split(sep).join("/");
}

function stableJson(value: unknown): string {
	return `${JSON.stringify(value, null, 2)}\n`;
}

function timestampForPath(date: Date): string {
	return date.toISOString().replace(/[:.]/g, "-");
}

function shortOutput(value: string): string {
	const trimmed = value.trim();
	return trimmed.length > 4_000 ? `${trimmed.slice(0, 4_000)}\n...` : trimmed;
}

async function runProcess(
	command: string,
	args: string[],
	options: { cwd?: string; env: NodeJS.ProcessEnv },
): Promise<ProcessResult> {
	let child;
	try {
		child = spawnProcess(command, args, {
			cwd: options.cwd,
			env: options.env,
			stdio: ["ignore", "pipe", "pipe"],
		});
	} catch (error) {
		throw new RepoSkillsLibraryError(
			`Could not start ${command}: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	let stdout = "";
	let stderr = "";
	child.stdout?.setEncoding("utf8");
	child.stderr?.setEncoding("utf8");
	child.stdout?.on("data", (chunk: string) => {
		stdout += chunk;
	});
	child.stderr?.on("data", (chunk: string) => {
		stderr += chunk;
	});
	let code: number | null;
	try {
		code = await waitForChildProcess(child);
	} catch (error) {
		throw new RepoSkillsLibraryError(
			`Could not run ${command}: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	return { code: code ?? 1, stdout, stderr };
}

function lockOwnerPayload(): object {
	return {
		pid: process.pid,
		host: hostname(),
		started_at: new Date().toISOString(),
		argv: process.argv,
	};
}

function lockIsStale(lockDir: string, staleAfterMs: number): boolean {
	try {
		return Date.now() - statSync(join(lockDir, "owner.json")).mtimeMs > staleAfterMs;
	} catch {
		return false;
	}
}

async function withDirectoryLock<T>(
	lockDir: string,
	callback: () => Promise<T>,
	options: { timeoutMs?: number; staleAfterMs?: number } = {},
): Promise<T> {
	const timeoutMs = options.timeoutMs ?? LOCK_TIMEOUT_MS;
	const staleAfterMs = options.staleAfterMs ?? LOCK_STALE_MS;
	const deadline = Date.now() + timeoutMs;
	let heartbeat: NodeJS.Timeout | undefined;

	for (;;) {
		try {
			mkdirSync(dirname(lockDir), { recursive: true });
			mkdirSync(lockDir);
			const ownerFile = join(lockDir, "owner.json");
			writeFileSync(ownerFile, stableJson(lockOwnerPayload()), "utf8");
			heartbeat = setInterval(() => {
				const now = new Date();
				try {
					utimesSync(ownerFile, now, now);
					utimesSync(lockDir, now, now);
				} catch {
					// Lock release may race the final heartbeat tick.
				}
			}, Math.max(1_000, Math.floor(staleAfterMs / 4)));
			heartbeat.unref();
			break;
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;
			if (lockIsStale(lockDir, staleAfterMs)) {
				rmSync(lockDir, { recursive: true, force: true });
				continue;
			}
			if (Date.now() >= deadline) {
				throw new RepoSkillsLibraryError(`Timed out waiting for repository skill lock at ${lockDir}`);
			}
			await sleep(LOCK_POLL_MS);
		}
	}

	try {
		return await callback();
	} finally {
		if (heartbeat) clearInterval(heartbeat);
		rmSync(lockDir, { recursive: true, force: true });
	}
}

function collectPortableFiles(root: string): string[] {
	if (!pathExists(root)) {
		throw new RepoSkillsLibraryError(`Required directory does not exist: ${root}`);
	}
	const rootStat = lstatSync(root);
	if (!rootStat.isDirectory() || rootStat.isSymbolicLink()) {
		throw new RepoSkillsLibraryError(`Expected a real directory: ${root}`);
	}
	const files: string[] = [];
	const visit = (directory: string): void => {
		for (const entry of readdirSync(directory, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
			const entryPath = join(directory, entry.name);
			if (entry.isSymbolicLink()) {
				throw new RepoSkillsLibraryError(`Repository skill data contains a symbolic link: ${entryPath}`);
			}
			if (entry.isDirectory()) {
				visit(entryPath);
			} else if (entry.isFile()) {
				files.push(entryPath);
			} else {
				throw new RepoSkillsLibraryError(`Repository skill data contains a non-regular file: ${entryPath}`);
			}
		}
	};
	visit(root);
	return files;
}

function digestTree(root: string): ManagedTreeState {
	const hash = createHash("sha256");
	const files = collectPortableFiles(root);
	for (const file of files) {
		const relativePath = toPosix(relative(root, file));
		const stat = lstatSync(file);
		hash.update(`file\0${relativePath}\0${stat.mode & 0o111}\0${stat.size}\0`);
		hash.update(readFileSync(file));
		hash.update("\0");
	}
	return { digest: `sha256:${hash.digest("hex")}`, fileCount: files.length };
}

function digestFile(file: string): string {
	const stat = lstatSync(file);
	if (!stat.isFile() || stat.isSymbolicLink()) {
		throw new RepoSkillsLibraryError(`Expected a regular file: ${file}`);
	}
	return `sha256:${createHash("sha256").update(readFileSync(file)).digest("hex")}`;
}

function sortJsonValue(value: unknown): unknown {
	if (Array.isArray(value)) return value.map(sortJsonValue);
	if (!value || typeof value !== "object") return value;
	return Object.fromEntries(
		Object.entries(value as Record<string, unknown>)
			.sort(([left], [right]) => left.localeCompare(right))
			.map(([key, entry]) => [key, sortJsonValue(entry)]),
	);
}

function parseSkillName(skillFile: string): string {
	const content = readFileSync(skillFile, "utf8");
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
	if (!match?.[1]) {
		throw new RepoSkillsLibraryError(`${skillFile} is missing YAML frontmatter`);
	}
	let frontmatter: unknown;
	try {
		frontmatter = parse(match[1]);
	} catch (error) {
		throw new RepoSkillsLibraryError(
			`${skillFile} has invalid YAML frontmatter: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
		throw new RepoSkillsLibraryError(`${skillFile} frontmatter must be a mapping`);
	}
	const name = (frontmatter as Record<string, unknown>).name;
	if (typeof name !== "string" || !CANONICAL_SKILL_ID.test(name) || name.length > 64) {
		throw new RepoSkillsLibraryError(`${skillFile} must declare a canonical lowercase-hyphen name`);
	}
	return name;
}

function validateSkillDirectory(skillDir: string): string {
	const skillFile = join(skillDir, "SKILL.md");
	if (!pathExists(skillFile) || !lstatSync(skillFile).isFile()) {
		throw new RepoSkillsLibraryError(`Repository skill is missing a regular SKILL.md: ${skillDir}`);
	}
	const skillId = parseSkillName(skillFile);
	if (skillId !== basename(skillDir)) {
		throw new RepoSkillsLibraryError(`${skillFile} name must match directory basename ${basename(skillDir)}`);
	}
	return skillId;
}

function inventorySource(libraryRoot: string): SourceInventory {
	const repoSkillsRoot = join(libraryRoot, "repo-skills");
	const routerDir = join(libraryRoot, ROUTER_ID);
	if (!pathExists(repoSkillsRoot) || !lstatSync(repoSkillsRoot).isDirectory()) {
		throw new RepoSkillsLibraryError(`Source snapshot is missing ${LIBRARY_PATH}/repo-skills`);
	}
	if (!pathExists(routerDir) || !lstatSync(routerDir).isDirectory()) {
		throw new RepoSkillsLibraryError(`Source snapshot is missing ${LIBRARY_PATH}/${ROUTER_ID}`);
	}
	if (parseSkillName(join(routerDir, "SKILL.md")) !== ROUTER_ID) {
		throw new RepoSkillsLibraryError("Source router SKILL.md has the wrong name");
	}
	const managedSkills = new Map<string, ManagedTreeState>();
	const lowerCaseIds = new Map<string, string>();
	const managedRootFiles = new Map<string, string>();
	for (const entry of readdirSync(repoSkillsRoot, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
		const entryPath = join(repoSkillsRoot, entry.name);
		if (entry.isSymbolicLink()) {
			throw new RepoSkillsLibraryError(`Source repo-skills contains a symbolic link: ${entryPath}`);
		}
		if (entry.isFile()) {
			managedRootFiles.set(entry.name, digestFile(entryPath));
			continue;
		}
		if (!entry.isDirectory()) {
			throw new RepoSkillsLibraryError(`Source repo-skills contains a non-portable entry: ${entryPath}`);
		}
		const skillId = validateSkillDirectory(entryPath);
		const lower = skillId.toLowerCase();
		const previous = lowerCaseIds.get(lower);
		if (previous && previous !== skillId) {
			throw new RepoSkillsLibraryError(`Source skill IDs collide on case-insensitive filesystems: ${previous}, ${skillId}`);
		}
		lowerCaseIds.set(lower, skillId);
		const digest = digestTree(entryPath);
		managedSkills.set(skillId, { digest: digest.digest, fileCount: digest.fileCount });
	}
	if (managedSkills.size === 0) {
		throw new RepoSkillsLibraryError("Source snapshot does not contain any repository skills");
	}
	const routerDigest = digestTree(routerDir).digest;
	return { libraryRoot, repoSkillsRoot, routerDir, managedSkills, managedRootFiles, routerDigest };
}

function assertState(value: unknown, statePath: string): RepoSkillsLibraryState {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new RepoSkillsLibraryError(`Managed repository skill state must be a JSON object: ${statePath}`);
	}
	const state = value as Partial<RepoSkillsLibraryState>;
	if (state.schemaVersion !== STATE_SCHEMA_VERSION) {
		throw new RepoSkillsLibraryError(`Unsupported repository skill state schema in ${statePath}`);
	}
	if (
		!state.source ||
		typeof state.source.repository !== "string" ||
		state.source.ref !== "HEAD" ||
		!/^[0-9a-fA-F]{40}$/.test(state.source.commit)
	) {
		throw new RepoSkillsLibraryError(`Invalid source metadata in ${statePath}`);
	}
	if (!state.managedSkills || typeof state.managedSkills !== "object" || Array.isArray(state.managedSkills)) {
		throw new RepoSkillsLibraryError(`Invalid managedSkills map in ${statePath}`);
	}
	for (const [skillId, entry] of Object.entries(state.managedSkills)) {
		if (
			!CANONICAL_SKILL_ID.test(skillId) ||
			!entry ||
			typeof entry.digest !== "string" ||
			!Number.isInteger(entry.fileCount) ||
			entry.fileCount < 1
		) {
			throw new RepoSkillsLibraryError(`Invalid managed skill entry ${skillId} in ${statePath}`);
		}
	}
	if (!state.managedRootFiles || typeof state.managedRootFiles !== "object" || Array.isArray(state.managedRootFiles)) {
		throw new RepoSkillsLibraryError(`Invalid managedRootFiles map in ${statePath}`);
	}
	for (const [relativePath, digest] of Object.entries(state.managedRootFiles)) {
		if (
			!relativePath ||
			relativePath === "." ||
			relativePath === ".." ||
			basename(relativePath) !== relativePath ||
			typeof digest !== "string"
		) {
			throw new RepoSkillsLibraryError(`Invalid managed root file entry ${relativePath} in ${statePath}`);
		}
	}
	if (typeof state.installedAt !== "string" || typeof state.updatedAt !== "string") {
		throw new RepoSkillsLibraryError(`Invalid timestamps in ${statePath}`);
	}
	if (typeof state.sourceRouterDigest !== "string") {
		throw new RepoSkillsLibraryError(`Invalid source router digest in ${statePath}`);
	}
	if (typeof state.liveTreeDigest !== "string") {
		throw new RepoSkillsLibraryError(`Invalid live tree digest in ${statePath}`);
	}
	if (state.liveRouterDigest !== undefined && typeof state.liveRouterDigest !== "string") {
		throw new RepoSkillsLibraryError(`Invalid live router digest in ${statePath}`);
	}
	return state as RepoSkillsLibraryState;
}

function readState(statePath: string): RepoSkillsLibraryState | undefined {
	if (!pathExists(statePath)) return undefined;
	try {
		return assertState(JSON.parse(readFileSync(statePath, "utf8")), statePath);
	} catch (error) {
		if (error instanceof RepoSkillsLibraryError) throw error;
		throw new RepoSkillsLibraryError(
			`Could not read managed repository skill state ${statePath}: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
}

function stateFromInventory(
	inventory: SourceInventory,
	commit: string,
	repository: string,
	now: Date,
	previous: RepoSkillsLibraryState | undefined,
	liveTreeDigest: string,
	liveRouterDigest: string,
): RepoSkillsLibraryState {
	return {
		schemaVersion: 1,
		source: { repository, ref: "HEAD", commit },
		installedAt: previous?.installedAt ?? now.toISOString(),
		updatedAt: now.toISOString(),
		managedSkills: Object.fromEntries([...inventory.managedSkills].sort(([left], [right]) => left.localeCompare(right))),
		managedRootFiles: Object.fromEntries(
			[...inventory.managedRootFiles].sort(([left], [right]) => left.localeCompare(right)),
		),
		sourceRouterDigest: inventory.routerDigest,
		liveTreeDigest,
		liveRouterDigest,
	};
}

function parseRouterFrontmatter(routerFile: string): {
	content: string;
	frontmatterEnd: number;
	newline: "\n" | "\r\n";
	document: ReturnType<typeof parseDocument>;
} {
	if (!pathExists(routerFile)) {
		throw new RepoSkillsLibraryError(`Repository skill router is missing ${routerFile}`);
	}
	const routerFileStat = lstatSync(routerFile);
	if (!routerFileStat.isFile() || routerFileStat.isSymbolicLink()) {
		throw new RepoSkillsLibraryError(`Repository skill router must use a regular SKILL.md: ${routerFile}`);
	}
	const content = readFileSync(routerFile, "utf8");
	const match = content.match(/^---(\r?\n)([\s\S]*?)\r?\n---(?:\r?\n|$)/);
	if (!match?.[2]) {
		throw new RepoSkillsLibraryError(`${routerFile} is missing YAML frontmatter`);
	}
	const document = parseDocument(match[2], { keepSourceTokens: true });
	if (document.errors.length > 0) {
		throw new RepoSkillsLibraryError(`${routerFile} has invalid YAML frontmatter: ${document.errors[0]?.message}`);
	}
	const value = document.toJS() as unknown;
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new RepoSkillsLibraryError(`${routerFile} frontmatter must be a mapping`);
	}
	if ((value as Record<string, unknown>).name !== ROUTER_ID) {
		throw new RepoSkillsLibraryError(`${routerFile} frontmatter name must be ${ROUTER_ID}`);
	}
	return {
		content,
		frontmatterEnd: match[0].length,
		newline: match[1] as "\n" | "\r\n",
		document,
	};
}

function assertRouterDirectory(routerDir: string): void {
	const routerStat = lstatSync(routerDir);
	if (!routerStat.isDirectory() || routerStat.isSymbolicLink()) {
		throw new RepoSkillsLibraryError(`Repository skill router must be a real directory: ${routerDir}`);
	}
}

function digestRouterTree(routerDir: string): string {
	assertRouterDirectory(routerDir);
	const hash = createHash("sha256");
	for (const file of collectPortableFiles(routerDir)) {
		const relativePath = toPosix(relative(routerDir, file));
		const stat = lstatSync(file);
		let content = readFileSync(file);
		if (relativePath === "SKILL.md") {
			const parsed = parseRouterFrontmatter(file);
			const frontmatter = parsed.document.toJS() as Record<string, unknown>;
			delete frontmatter["disable-model-invocation"];
			content = Buffer.from(
				`${JSON.stringify(sortJsonValue(frontmatter))}\n${parsed.content.slice(parsed.frontmatterEnd)}`,
				"utf8",
			);
		}
		hash.update(`file\0${relativePath}\0${stat.mode & 0o111}\0${content.byteLength}\0`);
		hash.update(content);
		hash.update("\0");
	}
	return `sha256:${hash.digest("hex")}`;
}

function routerCoverageIssues(routerDir: string, liveSkills: Map<string, ManagedTreeState>): string[] {
	const scenariosDir = join(routerDir, "references", "scenarios");
	if (!pathExists(scenariosDir)) return ["repo-skills-router is missing its generated scenario directory"];
	const scenariosStat = lstatSync(scenariosDir);
	if (!scenariosStat.isDirectory() || scenariosStat.isSymbolicLink()) {
		return ["repo-skills-router scenario path must be a real directory"];
	}
	const covered = new Set<string>();
	for (const entry of readdirSync(scenariosDir, { withFileTypes: true })) {
		if (entry.name === "README.md" || !entry.name.endsWith(".md")) continue;
		const scenarioFile = join(scenariosDir, entry.name);
		if (!entry.isFile() || entry.isSymbolicLink()) {
			return [`repo-skills-router contains a non-regular scenario page: ${entry.name}`];
		}
		for (const match of readFileSync(scenarioFile, "utf8").matchAll(/^### `([a-z0-9]+(?:-[a-z0-9]+)*)`\s*$/gm)) {
			if (match[1]) covered.add(match[1]);
		}
	}
	const liveIds = new Set(liveSkills.keys());
	const missing = [...liveIds].filter((skillId) => !covered.has(skillId)).sort();
	const stale = [...covered].filter((skillId) => !liveIds.has(skillId)).sort();
	const issues: string[] = [];
	if (missing.length > 0) issues.push(`repo-skills-router is missing skill coverage: ${missing.join(", ")}`);
	if (stale.length > 0) issues.push(`repo-skills-router references missing skills: ${stale.join(", ")}`);
	return issues;
}

function routerEnabled(routerDir: string): boolean | undefined {
	if (!pathExists(routerDir)) return undefined;
	assertRouterDirectory(routerDir);
	const routerFile = join(routerDir, "SKILL.md");
	if (!pathExists(routerFile)) return undefined;
	const { document } = parseRouterFrontmatter(routerFile);
	const value = document.toJS() as Record<string, unknown>;
	if (!("disable-model-invocation" in value)) return true;
	if (value["disable-model-invocation"] !== true) {
		throw new RepoSkillsLibraryError(`${routerFile} disable-model-invocation must be true when present`);
	}
	return false;
}

function writeRouterEnabled(routerDir: string, enabled: boolean): boolean {
	if (pathExists(routerDir)) assertRouterDirectory(routerDir);
	const routerFile = join(routerDir, "SKILL.md");
	if (!pathExists(routerFile)) {
		throw new RepoSkillsLibraryError(
			`Repository skill router is not installed at ${routerFile}. Run "disco repo-skills install" first.`,
			2,
		);
	}
	const parsed = parseRouterFrontmatter(routerFile);
	const currentValue = parsed.document.toJS() as Record<string, unknown>;
	if (
		"disable-model-invocation" in currentValue &&
		currentValue["disable-model-invocation"] !== true
	) {
		throw new RepoSkillsLibraryError(`${routerFile} disable-model-invocation must be true when present`);
	}
	const currentlyEnabled = !("disable-model-invocation" in currentValue);
	if (currentlyEnabled === enabled) return false;
	if (enabled) {
		parsed.document.delete("disable-model-invocation");
	} else {
		parsed.document.set("disable-model-invocation", true);
	}
	const serialized = parsed.document.toString({ lineWidth: 0 }).trimEnd().replace(/\n/g, parsed.newline);
	const body = parsed.content.slice(parsed.frontmatterEnd);
	const next = `---${parsed.newline}${serialized}${parsed.newline}---${parsed.newline}${body}`;
	const temporary = `${routerFile}.tmp.${process.pid}.${Date.now()}`;
	try {
		writeFileSync(temporary, next, "utf8");
		renameSync(temporary, routerFile);
	} finally {
		rmSync(temporary, { force: true });
	}
	return true;
}

function copyDirectory(source: string, destination: string): void {
	cpSync(source, destination, { recursive: true, errorOnExist: true, force: false, verbatimSymlinks: true });
}

function listLiveSkillTrees(repoSkillsRoot: string): Map<string, ManagedTreeState> {
	const result = new Map<string, ManagedTreeState>();
	if (!pathExists(repoSkillsRoot)) return result;
	const rootStat = lstatSync(repoSkillsRoot);
	if (!rootStat.isDirectory() || rootStat.isSymbolicLink()) {
		throw new RepoSkillsLibraryError(`Live repo-skills path must be a real directory: ${repoSkillsRoot}`);
	}
	const caseMap = new Map<string, string>();
	for (const entry of readdirSync(repoSkillsRoot, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
		if (entry.isSymbolicLink()) {
			throw new RepoSkillsLibraryError(`Live repo-skills contains a symbolic link: ${join(repoSkillsRoot, entry.name)}`);
		}
		if (!entry.isDirectory()) continue;
		const skillDir = join(repoSkillsRoot, entry.name);
		if (!pathExists(join(skillDir, "SKILL.md"))) continue;
		const skillId = validateSkillDirectory(skillDir);
		const lower = skillId.toLowerCase();
		const previous = caseMap.get(lower);
		if (previous && previous !== skillId) {
			throw new RepoSkillsLibraryError(`Live skill IDs collide on case-insensitive filesystems: ${previous}, ${skillId}`);
		}
		caseMap.set(lower, skillId);
		const digest = digestTree(skillDir);
		result.set(skillId, { digest: digest.digest, fileCount: digest.fileCount });
	}
	return result;
}

function mergeRouterRegistry(sourceRouter: string, liveRouter: string, stagedRouter: string): void {
	const sourceRegistry = join(sourceRouter, ROUTING_REGISTRY_PATH);
	const liveRegistry = join(liveRouter, ROUTING_REGISTRY_PATH);
	const stagedRegistry = join(stagedRouter, ROUTING_REGISTRY_PATH);
	if (!pathExists(liveRegistry)) return;
	let liveValue: unknown;
	try {
		liveValue = JSON.parse(readFileSync(liveRegistry, "utf8"));
	} catch (error) {
		throw new RepoSkillsLibraryError(
			`Live router scenario registry is invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	if (!pathExists(sourceRegistry)) {
		mkdirSync(dirname(stagedRegistry), { recursive: true });
		writeFileSync(stagedRegistry, stableJson(liveValue), "utf8");
		return;
	}
	const sourceValue = JSON.parse(readFileSync(sourceRegistry, "utf8")) as Record<string, unknown>;
	if (
		!liveValue ||
		typeof liveValue !== "object" ||
		Array.isArray(liveValue) ||
		!sourceValue ||
		typeof sourceValue !== "object" ||
		Array.isArray(sourceValue)
	) {
		throw new RepoSkillsLibraryError("Router scenario registries must be JSON objects");
	}
	const liveScenarios = (liveValue as Record<string, unknown>).scenarios;
	const sourceScenarios = sourceValue.scenarios;
	if (
		!liveScenarios ||
		typeof liveScenarios !== "object" ||
		Array.isArray(liveScenarios) ||
		!sourceScenarios ||
		typeof sourceScenarios !== "object" ||
		Array.isArray(sourceScenarios)
	) {
		throw new RepoSkillsLibraryError("Router scenario registries must contain scenario maps");
	}
	const merged = {
		...sourceValue,
		scenarios: { ...(liveScenarios as Record<string, unknown>), ...(sourceScenarios as Record<string, unknown>) },
	};
	writeFileSync(stagedRegistry, stableJson(merged), "utf8");
}

function rootFileDigest(repoSkillsRoot: string, relativePath: string): string | undefined {
	const target = resolve(repoSkillsRoot, relativePath);
	if (!isWithin(repoSkillsRoot, target) || !pathExists(target)) return undefined;
	return digestFile(target);
}

export class RepoSkillsLibraryManager {
	private readonly agentDir: string;
	private readonly sourceRepository: string;
	private readonly gitCommand: string;
	private readonly bundledSkillsDir: string;
	private readonly offline: boolean;
	private readonly now: () => Date;
	private readonly env: NodeJS.ProcessEnv;
	private readonly transactionFaultInjector?: (point: RepoSkillsTransactionPoint) => void;

	constructor(options: RepoSkillsLibraryManagerOptions = {}) {
		this.agentDir = resolve(options.agentDir ?? getAgentDir());
		this.sourceRepository = options.sourceRepository ?? OFFICIAL_REPOSITORY;
		this.gitCommand = options.gitCommand ?? "git";
		this.bundledSkillsDir = resolve(options.bundledSkillsDir ?? getBundledSkillsDir());
		this.env = options.env ?? process.env;
		this.offline = options.offline ?? isTruthyEnvironmentFlag(this.env.DISCO_OFFLINE);
		this.now = options.now ?? (() => new Date());
		this.transactionFaultInjector = options.transactionFaultInjector;
	}

	private get skillsRoot(): string {
		return join(this.agentDir, "skills");
	}

	private get repoSkillsRoot(): string {
		return join(this.skillsRoot, "repo-skills");
	}

	private get routerDir(): string {
		return join(this.skillsRoot, ROUTER_ID);
	}

	private get statePath(): string {
		return join(this.agentDir, "repo-skills-library.json");
	}

	private get liveLockPath(): string {
		return join(this.agentDir, "locks", "repo-skills-import.lockdir");
	}

	private get sourceLockPath(): string {
		return join(this.agentDir, "locks", "repo-skills-source.lockdir");
	}

	private get sourceCacheDir(): string {
		return join(this.agentDir, "cache", "repo-skills-source");
	}

	private async git(args: string[]): Promise<ProcessResult> {
		return runProcess(this.gitCommand, args, { env: this.env });
	}

	private async cloneSource(destination: string): Promise<void> {
		const partialArgs = [
			"clone",
			"--depth",
			"1",
			"--filter=blob:none",
			"--sparse",
			"--no-tags",
			this.sourceRepository,
			destination,
		];
		let result: ProcessResult;
		try {
			result = await this.git(partialArgs);
		} catch (error) {
			throw new RepoSkillsLibraryError(
				`Git is required to install repository skills. ${error instanceof Error ? error.message : String(error)}\nManual fallback: ${MANUAL_INSTALL_URL}`,
			);
		}
		if (result.code === 0) {
			const sparse = await this.git(["-C", destination, "sparse-checkout", "set", LIBRARY_PATH]);
			if (sparse.code === 0) return;
		}
		rmSync(destination, { recursive: true, force: true });
		const fallback = await this.git([
			"clone",
			"--depth",
			"1",
			"--no-tags",
			this.sourceRepository,
			destination,
		]);
		if (fallback.code !== 0) {
			throw new RepoSkillsLibraryError(
				`Could not clone the official repository skill source: ${shortOutput(fallback.stderr || result.stderr)}`,
			);
		}
	}

	private async refreshSourceCache(): Promise<string> {
		const cacheDir = this.sourceCacheDir;
		let cacheIsRealDirectory = false;
		if (pathExists(cacheDir)) {
			const cacheStat = lstatSync(cacheDir);
			cacheIsRealDirectory = cacheStat.isDirectory() && !cacheStat.isSymbolicLink();
		}
		if (cacheIsRealDirectory && pathExists(join(cacheDir, ".git"))) {
			const remote = await this.git(["-C", cacheDir, "config", "--get", "remote.origin.url"]);
			const fetch =
				remote.code === 0 && remote.stdout.trim() === this.sourceRepository
					? await this.git(["-C", cacheDir, "fetch", "--depth", "1", "--no-tags", "origin", "HEAD"])
					: undefined;
			if (fetch?.code === 0) {
				const reset = await this.git(["-C", cacheDir, "reset", "--hard", "FETCH_HEAD"]);
				const clean = reset.code === 0 ? await this.git(["-C", cacheDir, "clean", "-ffdx"]) : reset;
				if (reset.code === 0 && clean.code === 0) {
					await this.git(["-C", cacheDir, "sparse-checkout", "set", LIBRARY_PATH]);
					const rev = await this.git(["-C", cacheDir, "rev-parse", "HEAD"]);
					if (rev.code === 0 && /^[0-9a-f]{40}$/i.test(rev.stdout.trim())) return rev.stdout.trim();
				}
			}
		}

		mkdirSync(dirname(cacheDir), { recursive: true });
		const freshCache = `${cacheDir}.tmp.${process.pid}.${Date.now()}`;
		const oldCache = `${cacheDir}.old.${process.pid}.${Date.now()}`;
		rmSync(freshCache, { recursive: true, force: true });
		try {
			await this.cloneSource(freshCache);
		} catch (error) {
			rmSync(freshCache, { recursive: true, force: true });
			throw error;
		}
		const rev = await this.git(["-C", freshCache, "rev-parse", "HEAD"]);
		if (rev.code !== 0 || !/^[0-9a-f]{40}$/i.test(rev.stdout.trim())) {
			rmSync(freshCache, { recursive: true, force: true });
			throw new RepoSkillsLibraryError(`Could not resolve source commit: ${shortOutput(rev.stderr)}`);
		}
		try {
			if (pathExists(cacheDir)) renameSync(cacheDir, oldCache);
			renameSync(freshCache, cacheDir);
			rmSync(oldCache, { recursive: true, force: true });
		} catch (error) {
			if (!pathExists(cacheDir) && pathExists(oldCache)) renameSync(oldCache, cacheDir);
			rmSync(freshCache, { recursive: true, force: true });
			throw error;
		}
		return rev.stdout.trim();
	}

	private async prepareSourceSnapshot(): Promise<SourceSnapshot> {
		this.assertOnline();
		return withDirectoryLock(this.sourceLockPath, async () => {
			const commit = await this.refreshSourceCache();
			const sourceLibrary = join(this.sourceCacheDir, LIBRARY_PATH);
			if (!pathExists(sourceLibrary)) {
				throw new RepoSkillsLibraryError(`Source checkout is missing ${LIBRARY_PATH}`);
			}
			const snapshotsRoot = join(this.agentDir, "cache", "repo-skills-snapshots");
			mkdirSync(snapshotsRoot, { recursive: true });
			const snapshotRoot = mkdtempSync(join(snapshotsRoot, "snapshot-"));
			const libraryRoot = join(snapshotRoot, LIBRARY_PATH);
			copyDirectory(sourceLibrary, libraryRoot);
			return {
				commit,
				libraryRoot,
				cleanup: () => rmSync(snapshotRoot, { recursive: true, force: true }),
			};
		});
	}

	private assertOnline(): void {
		if (!this.offline) return;
		throw new RepoSkillsLibraryError(
			"Repository skill install/update is unavailable in offline mode. Re-run without --offline or DISCO_OFFLINE.",
			2,
		);
	}

	private async runRouterUpdater(
		libraryRoot: string,
		visibility: "preserve" | "enabled" | "disabled",
		templateDir?: string,
	): Promise<void> {
		const updater = join(this.bundledSkillsDir, "verify-repo-skill", "scripts", "update_repo_skills_router.mjs");
		if (!pathExists(updater)) {
			throw new RepoSkillsLibraryError(`Bundled repo-skills-router updater not found: ${updater}`);
		}
		const args = [
			updater,
			"--library-root",
			libraryRoot,
			"--router-visibility",
			visibility,
		];
		if (templateDir) args.push("--template-dir", templateDir);
		const result = await runProcess(process.execPath, args, { env: this.env });
		if (result.code !== 0) {
			throw new RepoSkillsLibraryError(
				`Repository skill router validation failed: ${shortOutput(result.stderr || result.stdout)}`,
			);
		}
	}

	private detectConflicts(
		state: RepoSkillsLibraryState | undefined,
		inventory: SourceInventory,
		liveSkills: Map<string, ManagedTreeState>,
	): string[] {
		const conflicts: string[] = [];
		for (const [skillId, desired] of inventory.managedSkills) {
			const current = liveSkills.get(skillId);
			if (!current) {
				if (pathExists(join(this.repoSkillsRoot, skillId))) {
					conflicts.push(`${skillId}: live path is not a valid repository skill directory`);
				} else if (state?.managedSkills[skillId]) {
					conflicts.push(`${skillId}: managed skill is missing locally`);
				}
				continue;
			}
			const previous = state?.managedSkills[skillId];
			if (!previous) {
				if (current.digest !== desired.digest) conflicts.push(`${skillId}: local skill uses an official skill ID`);
				continue;
			}
			if (current.digest !== previous.digest && current.digest !== desired.digest) {
				conflicts.push(`${skillId}: managed skill has local modifications`);
			}
		}
		if (state) {
			for (const [skillId, previous] of Object.entries(state.managedSkills)) {
				if (inventory.managedSkills.has(skillId)) continue;
				const current = liveSkills.get(skillId);
				const livePath = join(this.repoSkillsRoot, skillId);
				if (!current && pathExists(livePath)) {
					conflicts.push(`${skillId}: locally changed managed skill was removed upstream`);
				} else if (current && current.digest !== previous.digest) {
					conflicts.push(`${skillId}: locally modified managed skill was removed upstream`);
				}
			}
		}
		for (const [relativePath, desiredDigest] of inventory.managedRootFiles) {
			let currentDigest: string | undefined;
			try {
				currentDigest = rootFileDigest(this.repoSkillsRoot, relativePath);
			} catch {
				conflicts.push(`${relativePath}: local root path conflicts with the official collection`);
				continue;
			}
			if (!currentDigest) {
				if (state?.managedRootFiles[relativePath]) conflicts.push(`${relativePath}: managed root file is missing locally`);
				continue;
			}
			const previousDigest = state?.managedRootFiles[relativePath];
			if (!previousDigest && currentDigest !== desiredDigest) {
				conflicts.push(`${relativePath}: local root file conflicts with the official collection`);
			} else if (previousDigest && currentDigest !== previousDigest && currentDigest !== desiredDigest) {
				conflicts.push(`${relativePath}: managed root file has local modifications`);
			}
		}
		if (state) {
			for (const [relativePath, previousDigest] of Object.entries(state.managedRootFiles)) {
				if (inventory.managedRootFiles.has(relativePath)) continue;
				let currentDigest: string | undefined;
				try {
					currentDigest = rootFileDigest(this.repoSkillsRoot, relativePath);
				} catch {
					conflicts.push(`${relativePath}: locally changed managed root path was removed upstream`);
					continue;
				}
				if (currentDigest && currentDigest !== previousDigest) {
					conflicts.push(`${relativePath}: locally modified managed root file was removed upstream`);
				}
			}
		}
		return conflicts.sort();
	}

	private applyInventoryToStage(
		stagedRepoSkills: string,
		state: RepoSkillsLibraryState | undefined,
		inventory: SourceInventory,
	): void {
		mkdirSync(stagedRepoSkills, { recursive: true });
		for (const skillId of Object.keys(state?.managedSkills ?? {})) {
			if (!inventory.managedSkills.has(skillId)) {
				rmSync(join(stagedRepoSkills, skillId), { recursive: true, force: true });
			}
		}
		for (const skillId of inventory.managedSkills.keys()) {
			const target = join(stagedRepoSkills, skillId);
			rmSync(target, { recursive: true, force: true });
			copyDirectory(join(inventory.repoSkillsRoot, skillId), target);
		}
		for (const relativePath of Object.keys(state?.managedRootFiles ?? {})) {
			if (!inventory.managedRootFiles.has(relativePath)) {
				rmSync(join(stagedRepoSkills, relativePath), { recursive: true, force: true });
			}
		}
		for (const relativePath of inventory.managedRootFiles.keys()) {
			const target = join(stagedRepoSkills, relativePath);
			mkdirSync(dirname(target), { recursive: true });
			rmSync(target, { recursive: true, force: true });
			cpSync(join(inventory.repoSkillsRoot, relativePath), target, { force: true });
		}
	}

	private swapLiveTree(
		transactionRoot: string,
		stagedRepoSkills: string,
		stagedRouter: string,
		stagedState: string,
		preserveBackup: boolean,
	): string | undefined {
		const backupRoot = join(transactionRoot, "backup");
		const backupRepoSkills = join(backupRoot, "repo-skills");
		const backupRouter = join(backupRoot, ROUTER_ID);
		const backupState = join(backupRoot, "repo-skills-library.json");
		mkdirSync(backupRoot, { recursive: true });
		mkdirSync(this.skillsRoot, { recursive: true });
		const hadRepoSkills = pathExists(this.repoSkillsRoot);
		const hadRouter = pathExists(this.routerDir);
		const hadState = pathExists(this.statePath);
		let installedRepoSkills = false;
		let installedRouter = false;
		let installedState = false;
		try {
			if (hadRepoSkills) renameSync(this.repoSkillsRoot, backupRepoSkills);
			if (hadRouter) renameSync(this.routerDir, backupRouter);
			if (hadState) renameSync(this.statePath, backupState);
			this.transactionFaultInjector?.("before-install-repo-skills");
			renameSync(stagedRepoSkills, this.repoSkillsRoot);
			installedRepoSkills = true;
			this.transactionFaultInjector?.("before-install-router");
			renameSync(stagedRouter, this.routerDir);
			installedRouter = true;
			this.transactionFaultInjector?.("before-install-state");
			renameSync(stagedState, this.statePath);
			installedState = true;
		} catch (error) {
			const rollbackErrors: string[] = [];
			for (const [installed, livePath, backupPath, hadPrevious] of [
				[installedState, this.statePath, backupState, hadState],
				[installedRouter, this.routerDir, backupRouter, hadRouter],
				[installedRepoSkills, this.repoSkillsRoot, backupRepoSkills, hadRepoSkills],
			] as const) {
				try {
					if (installed) rmSync(livePath, { recursive: true, force: true });
					if (hadPrevious && pathExists(backupPath)) {
						const restorePoint =
							livePath === this.statePath
								? "before-restore-state"
								: livePath === this.routerDir
									? "before-restore-router"
									: "before-restore-repo-skills";
						this.transactionFaultInjector?.(restorePoint);
						renameSync(backupPath, livePath);
					}
				} catch (rollbackError) {
					rollbackErrors.push(
						`${livePath}: ${rollbackError instanceof Error ? rollbackError.message : String(rollbackError)}`,
					);
				}
			}
			if (rollbackErrors.length > 0) {
				throw new RepoSkillsLibraryError(
					`${error instanceof Error ? error.message : String(error)}; rollback failed:\n${rollbackErrors.join("\n")}\nRecovery artifacts remain at ${transactionRoot}`,
				);
			}
			rmSync(backupRoot, { recursive: true, force: true });
			throw error;
		}

		if (!preserveBackup || (!hadRepoSkills && !hadRouter && !hadState)) {
			rmSync(backupRoot, { recursive: true, force: true });
			return undefined;
		}
		const backupsRoot = join(this.agentDir, "backups", "repo-skills-library");
		mkdirSync(backupsRoot, { recursive: true });
		const destination = join(backupsRoot, timestampForPath(this.now()));
		try {
			renameSync(backupRoot, destination);
			return destination;
		} catch {
			return backupRoot;
		}
	}

	private async installSnapshot(
		operation: "install" | "update",
		snapshot: SourceSnapshot,
		force: boolean,
	): Promise<RepoSkillsInstallResult> {
		const inventory = inventorySource(snapshot.libraryRoot);
		return withDirectoryLock(this.liveLockPath, async () => {
			const previousState = readState(this.statePath);
			if (operation === "install" && previousState) {
				const status = this.statusUnlocked(previousState);
				return {
					operation,
					commit: status.commit,
					managedSkills: status.managedSkills,
					localSkills: status.localSkills,
					totalSkills: status.totalSkills,
					routerEnabled: status.routerEnabled,
					noop: true,
					issues: status.issues,
				};
			}
			if (operation === "update" && !previousState) {
				throw new RepoSkillsLibraryError(
					'Repository skills are not managed yet. Run "disco repo-skills install" to install or adopt them first.',
					2,
				);
			}
			const liveSkills = listLiveSkillTrees(this.repoSkillsRoot);
			const conflicts = this.detectConflicts(previousState, inventory, liveSkills);
			if (conflicts.length > 0 && !force) throw new RepoSkillsLibraryConflictError(conflicts);

			let visibility: "enabled" | "disabled" = "enabled";
			const currentRouterEnabled = routerEnabled(this.routerDir);
			if (currentRouterEnabled === false) visibility = "disabled";
			const currentLiveTreeDigest = pathExists(this.repoSkillsRoot) ? digestTree(this.repoSkillsRoot).digest : undefined;
			const currentLiveRouterDigest =
				currentRouterEnabled === undefined ? undefined : digestRouterTree(this.routerDir);
			if (
				operation === "update" &&
				previousState?.source.commit === snapshot.commit &&
				conflicts.length === 0 &&
				currentLiveTreeDigest === previousState.liveTreeDigest &&
				currentLiveRouterDigest === previousState.liveRouterDigest &&
				currentRouterEnabled !== undefined
			) {
				const localSkills = [...liveSkills.keys()].filter((skillId) => !inventory.managedSkills.has(skillId)).length;
				return {
					operation,
					commit: snapshot.commit,
					managedSkills: inventory.managedSkills.size,
					localSkills,
					totalSkills: liveSkills.size,
					routerEnabled: currentRouterEnabled,
					noop: true,
					issues: [],
				};
			}
			const transactionRoot = join(
				this.agentDir,
				`.repo-skills-library.${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}`,
			);
			const stagedSkillsRoot = join(transactionRoot, "stage", "skills");
			const stagedRepoSkills = join(stagedSkillsRoot, "repo-skills");
			const stagedRouter = join(stagedSkillsRoot, ROUTER_ID);
			const stagedState = join(transactionRoot, "stage", "repo-skills-library.json");
			let preserveTransaction = false;
			try {
				mkdirSync(stagedSkillsRoot, { recursive: true });
				if (pathExists(this.repoSkillsRoot)) copyDirectory(this.repoSkillsRoot, stagedRepoSkills);
				else mkdirSync(stagedRepoSkills, { recursive: true });
				if (pathExists(this.routerDir) && liveSkills.size > 0) {
					copyDirectory(this.routerDir, stagedRouter);
					await this.runRouterUpdater(stagedSkillsRoot, "preserve");
				}
				this.applyInventoryToStage(stagedRepoSkills, previousState, inventory);
				rmSync(stagedRouter, { recursive: true, force: true });
				copyDirectory(inventory.routerDir, stagedRouter);
				if (pathExists(this.routerDir)) mergeRouterRegistry(inventory.routerDir, this.routerDir, stagedRouter);
				await this.runRouterUpdater(stagedSkillsRoot, visibility, inventory.routerDir);

				for (const [skillId, expected] of inventory.managedSkills) {
					const actual = digestTree(join(stagedRepoSkills, skillId));
					if (actual.digest !== expected.digest) {
						throw new RepoSkillsLibraryError(`Staged official skill changed during validation: ${skillId}`);
					}
				}
				const stagedLiveTreeDigest = digestTree(stagedRepoSkills).digest;
				const stagedLiveRouterDigest = digestRouterTree(stagedRouter);
				const nextState = stateFromInventory(
					inventory,
					snapshot.commit,
					this.sourceRepository,
					this.now(),
					previousState,
					stagedLiveTreeDigest,
					stagedLiveRouterDigest,
				);
				mkdirSync(dirname(stagedState), { recursive: true });
				writeFileSync(stagedState, stableJson(nextState), "utf8");
				const finalSkills = listLiveSkillTrees(stagedRepoSkills);
				const localSkills = [...finalSkills.keys()].filter((skillId) => !inventory.managedSkills.has(skillId)).length;
				const backupPath = this.swapLiveTree(
					transactionRoot,
					stagedRepoSkills,
					stagedRouter,
					stagedState,
					force && conflicts.length > 0,
				);
				if (backupPath?.startsWith(transactionRoot)) preserveTransaction = true;
				return {
					operation,
					commit: snapshot.commit,
					managedSkills: inventory.managedSkills.size,
					localSkills,
					totalSkills: finalSkills.size,
					routerEnabled: visibility === "enabled",
					noop: false,
					backupPath,
					issues: [],
				};
			} catch (error) {
				if (pathExists(join(transactionRoot, "backup"))) preserveTransaction = true;
				throw error;
			} finally {
				if (!preserveTransaction) rmSync(transactionRoot, { recursive: true, force: true });
			}
		});
	}

	async install(options: { force?: boolean } = {}): Promise<RepoSkillsInstallResult> {
		this.assertOnline();
		const existingState = readState(this.statePath);
		if (existingState) {
			const status = this.statusUnlocked(existingState);
			return {
				operation: "install",
				commit: status.commit,
				managedSkills: status.managedSkills,
				localSkills: status.localSkills,
				totalSkills: status.totalSkills,
				routerEnabled: status.routerEnabled,
				noop: true,
				issues: status.issues,
			};
		}
		const snapshot = await this.prepareSourceSnapshot();
		try {
			return await this.installSnapshot("install", snapshot, options.force ?? false);
		} finally {
			snapshot.cleanup();
		}
	}

	async update(options: { force?: boolean } = {}): Promise<RepoSkillsInstallResult> {
		this.assertOnline();
		if (!readState(this.statePath)) {
			throw new RepoSkillsLibraryError(
				'Repository skills are not managed yet. Run "disco repo-skills install" to install or adopt them first.',
				2,
			);
		}
		const snapshot = await this.prepareSourceSnapshot();
		try {
			return await this.installSnapshot("update", snapshot, options.force ?? false);
		} finally {
			snapshot.cleanup();
		}
	}

	async setRouterEnabled(enabled: boolean): Promise<RepoSkillsRouterToggleResult> {
		return withDirectoryLock(this.liveLockPath, async () => {
			const changed = writeRouterEnabled(this.routerDir, enabled);
			return { enabled, changed };
		});
	}

	private statusUnlocked(state: RepoSkillsLibraryState | undefined): RepoSkillsLibraryStatus {
		const issues: string[] = [];
		let liveSkills = new Map<string, ManagedTreeState>();
		let totalFiles = 0;
		let currentLiveTreeDigest: string | undefined;
		try {
			liveSkills = listLiveSkillTrees(this.repoSkillsRoot);
			if (pathExists(this.repoSkillsRoot)) {
				const liveTree = digestTree(this.repoSkillsRoot);
				totalFiles = liveTree.fileCount;
				currentLiveTreeDigest = liveTree.digest;
			}
			if (pathExists(this.routerDir)) totalFiles += digestTree(this.routerDir).fileCount;
		} catch (error) {
			issues.push(error instanceof Error ? error.message : String(error));
		}
		if (state) {
			for (const [skillId, expected] of Object.entries(state.managedSkills)) {
				const current = liveSkills.get(skillId);
				if (!current) issues.push(`${skillId}: managed skill is missing`);
				else if (current.digest !== expected.digest) issues.push(`${skillId}: managed skill is modified`);
			}
			for (const [relativePath, expected] of Object.entries(state.managedRootFiles)) {
				try {
					const current = rootFileDigest(this.repoSkillsRoot, relativePath);
					if (!current) issues.push(`${relativePath}: managed root file is missing`);
					else if (current !== expected) issues.push(`${relativePath}: managed root file is modified`);
				} catch (error) {
					issues.push(error instanceof Error ? error.message : String(error));
				}
			}
		}
		let enabled: boolean | undefined;
		try {
			enabled = routerEnabled(this.routerDir);
			if (enabled === undefined && (state || liveSkills.size > 0)) issues.push("repo-skills-router is missing");
			else if (enabled !== undefined) {
				issues.push(...routerCoverageIssues(this.routerDir, liveSkills));
				if (
					state &&
					currentLiveTreeDigest === state.liveTreeDigest &&
					(!state.liveRouterDigest || digestRouterTree(this.routerDir) !== state.liveRouterDigest)
				) {
					issues.push("repo-skills-router is modified or stale");
				}
			}
		} catch (error) {
			issues.push(error instanceof Error ? error.message : String(error));
		}
		const managedIds = new Set(Object.keys(state?.managedSkills ?? {}));
		const localSkills = [...liveSkills.keys()].filter((skillId) => !managedIds.has(skillId)).length;
		return {
			installed: liveSkills.size > 0 && enabled !== undefined,
			managed: !!state,
			sourceRepository: state?.source.repository,
			commit: state?.source.commit,
			installedAt: state?.installedAt,
			updatedAt: state?.updatedAt,
			managedSkills: state ? Object.keys(state.managedSkills).length : 0,
			localSkills,
			totalSkills: liveSkills.size,
			totalFiles,
			routerPresent: enabled !== undefined,
			routerEnabled: enabled,
			issues: issues.sort(),
		};
	}

	status(): RepoSkillsLibraryStatus {
		try {
			return this.statusUnlocked(readState(this.statePath));
		} catch (error) {
			const status = this.statusUnlocked(undefined);
			return {
				...status,
				managed: pathExists(this.statePath),
				issues: [error instanceof Error ? error.message : String(error), ...status.issues].sort(),
			};
		}
	}
}
