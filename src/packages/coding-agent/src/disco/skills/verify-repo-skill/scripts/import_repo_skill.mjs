#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const DEFAULT_TIMEOUT_SECONDS = 900;
const CANONICAL_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SCRIPT_PATH = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_PATH);

class ImportError extends Error {
	constructor(message) {
		super(message);
		this.name = "ImportError";
	}
}

function defaultAgentDir() {
	return process.env.DISCO_CODING_AGENT_DIR || path.join(os.homedir(), ".disco", "agent");
}

function expandHome(value) {
	return value.replace(/^~(?=$|[\\/])/, os.homedir());
}

function pathExists(filePath) {
	try {
		fs.lstatSync(filePath);
		return true;
	} catch (error) {
		if (error?.code === "ENOENT") return false;
		throw error;
	}
}

function isWithin(parent, candidate) {
	const relative = path.relative(parent, candidate);
	return relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative));
}

function optionValue(argv, index, option) {
	const value = argv[index + 1];
	if (!value || value.startsWith("--")) throw new ImportError(`${option} requires a value`);
	return value;
}

function parseArgs(argv) {
	const args = {
		agentDir: defaultAgentDir(),
		sourceDir: undefined,
		overwrite: false,
		alreadyLocked: false,
		timeout: DEFAULT_TIMEOUT_SECONDS,
	};

	for (let index = 0; index < argv.length; index += 1) {
		const item = argv[index];
		if (item === "--agent-dir") {
			args.agentDir = optionValue(argv, index, item);
			index += 1;
		} else if (item === "--timeout") {
			args.timeout = Number(optionValue(argv, index, item));
			index += 1;
		} else if (item === "--overwrite") {
			args.overwrite = true;
		} else if (item === "--already-locked") {
			args.alreadyLocked = true;
		} else if (item === "-h" || item === "--help") {
			printHelp();
			process.exit(0);
		} else if (item.startsWith("-")) {
			throw new ImportError(`unknown argument: ${item}`);
		} else if (args.sourceDir) {
			throw new ImportError("provide exactly one runtime repo skill directory");
		} else {
			args.sourceDir = item;
		}
	}

	if (!args.sourceDir) {
		throw new ImportError("provide one verified runtime repo skill directory");
	}
	if (!Number.isFinite(args.timeout) || args.timeout <= 0) {
		throw new ImportError("--timeout must be a positive number");
	}
	return args;
}

function printHelp() {
	console.log(`Usage: node import_repo_skill.mjs [options] RUNTIME_SKILL_DIR

Options:
  --agent-dir DIR       DisCo agent directory
  --overwrite           Replace the same repo skill after explicit approval
  --already-locked      Assert the global import lock is already held
  --timeout SECONDS     Seconds to wait for the global import lock`);
}

function parseFrontmatter(skillFile) {
	const content = fs.readFileSync(skillFile, "utf8");
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
	if (!match?.[1]) throw new ImportError(`${skillFile} is missing YAML frontmatter`);
	let frontmatter;
	try {
		frontmatter = parse(match[1]);
	} catch (error) {
		throw new ImportError(
			`${skillFile} has invalid YAML frontmatter: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
		throw new ImportError(`${skillFile} frontmatter must be a mapping`);
	}
	return { frontmatter, frontmatterText: match[1] };
}

function collectPortableFiles(root, files = []) {
	const stat = fs.lstatSync(root);
	if (!stat.isDirectory() || stat.isSymbolicLink()) {
		throw new ImportError(`runtime repo skill must be a real directory: ${root}`);
	}
	for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
		const entryPath = path.join(root, entry.name);
		if (entry.isSymbolicLink()) {
			throw new ImportError(`runtime repo skill contains a symbolic link: ${entryPath}`);
		}
		if (entry.isDirectory()) {
			collectPortableFiles(entryPath, files);
		} else if (entry.isFile()) {
			files.push(entryPath);
		} else {
			throw new ImportError(`runtime repo skill contains a non-regular file: ${entryPath}`);
		}
	}
	return files;
}

function validateSkillFile(skillFile, seenNames) {
	const { frontmatter, frontmatterText } = parseFrontmatter(skillFile);
	const name = frontmatter.name;
	if (typeof name !== "string" || !CANONICAL_NAME.test(name) || name.length > 64) {
		throw new ImportError(`${skillFile} must declare a canonical lowercase-hyphen name`);
	}
	if (name !== path.basename(path.dirname(skillFile))) {
		throw new ImportError(`${skillFile} name must match its directory basename`);
	}
	if (seenNames.has(name)) {
		throw new ImportError(`repo skill contains duplicate skill name: ${name}`);
	}
	seenNames.add(name);

	if (typeof frontmatter.description !== "string" || !frontmatter.description.trim()) {
		throw new ImportError(`${skillFile} frontmatter must contain a non-empty description`);
	}
	if (!/^description:\s*"(?:[^"\\]|\\.)*"\s*$/m.test(frontmatterText)) {
		throw new ImportError(`${skillFile} frontmatter description must be double-quoted`);
	}
	if (frontmatter["disable-model-invocation"] !== true) {
		throw new ImportError(`${skillFile} frontmatter must contain disable-model-invocation: true`);
	}
	const metadata = frontmatter.metadata;
	const role =
		typeof metadata === "object" && metadata !== null && !Array.isArray(metadata)
			? metadata["disco-role"]
			: undefined;
	if (role !== "operating") {
		throw new ImportError(`${skillFile} metadata.disco-role must be operating`);
	}
	return name;
}

function validateMarkdownLinks(skillRoot, markdownFiles) {
	for (const filePath of markdownFiles) {
		const content = fs.readFileSync(filePath, "utf8");
		for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
			let target = match[1]?.trim();
			if (!target || target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target)) continue;
			if (target.startsWith("<") && target.endsWith(">")) target = target.slice(1, -1);
			target = target.split("#", 1)[0]?.split("?", 1)[0] ?? "";
			if (!target) continue;
			let decodedTarget;
			try {
				decodedTarget = decodeURIComponent(target);
			} catch {
				throw new ImportError(`${filePath} contains an invalid encoded Markdown link: ${target}`);
			}
			const resolvedTarget = path.resolve(path.dirname(filePath), decodedTarget);
			if (!isWithin(skillRoot, resolvedTarget)) {
				throw new ImportError(`${filePath} contains a relative link outside the repo skill: ${target}`);
			}
			if (!pathExists(resolvedTarget)) {
				throw new ImportError(`${filePath} contains a broken relative link: ${target}`);
			}
		}
	}
}

function validateRoutingMetadata(skillRoot, skillId) {
	const metadataFile = path.join(skillRoot, "references", "repo-routing-metadata.json");
	if (!pathExists(metadataFile) || !fs.lstatSync(metadataFile).isFile()) {
		throw new ImportError(`runtime repo skill is missing ${metadataFile}`);
	}
	let data;
	try {
		data = JSON.parse(fs.readFileSync(metadataFile, "utf8"));
	} catch (error) {
		throw new ImportError(
			`${metadataFile} is invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
	if (!data || typeof data !== "object" || Array.isArray(data)) {
		throw new ImportError(`${metadataFile} must contain a JSON object`);
	}
	if (!data.skills || typeof data.skills !== "object" || Array.isArray(data.skills) || !data.skills[skillId]) {
		throw new ImportError(`${metadataFile} must contain routing metadata for ${skillId}`);
	}
}

function validateRepoSkill(skillRoot) {
	const files = collectPortableFiles(skillRoot);
	const rootSkillFile = path.join(skillRoot, "SKILL.md");
	if (!files.includes(rootSkillFile)) {
		throw new ImportError(`runtime repo skill is missing a regular root SKILL.md: ${rootSkillFile}`);
	}

	const seenNames = new Set();
	const markdownFiles = [];
	for (const file of files) {
		if (path.basename(file) === "SKILL.md") validateSkillFile(file, seenNames);
		if (path.extname(file).toLowerCase() === ".md") markdownFiles.push(file);
	}
	const skillId = parseFrontmatter(rootSkillFile).frontmatter.name;
	if (skillId === "repo-skills" || skillId === "repo-skills-router") {
		throw new ImportError(`${skillId} is reserved for the managed repo-skill library`);
	}
	validateRoutingMetadata(skillRoot, skillId);
	validateMarkdownLinks(skillRoot, markdownFiles);
	return skillId;
}

function withImportLockScript() {
	return path.join(SCRIPT_DIR, "with_import_lock.mjs");
}

function routerUpdaterScript() {
	return path.join(SCRIPT_DIR, "update_repo_skills_router.mjs");
}

function runUnderLock(argv, agentDir, timeout) {
	const lockScript = withImportLockScript();
	if (!pathExists(lockScript)) throw new ImportError(`global import lock helper not found: ${lockScript}`);
	const command = [
		process.execPath,
		lockScript,
		"--agent-dir",
		agentDir,
		"--timeout",
		String(timeout),
		"--",
		process.execPath,
		SCRIPT_PATH,
		...argv.filter((item) => item !== "--already-locked"),
		"--already-locked",
	];
	const completed = spawnSync(command[0], command.slice(1), { stdio: "inherit" });
	if (completed.error) throw completed.error;
	return completed.status ?? 1;
}

function runRouterUpdater(agentDir) {
	const updater = routerUpdaterScript();
	if (!pathExists(updater)) throw new ImportError(`repo-skills-router updater not found: ${updater}`);
	const completed = spawnSync(process.execPath, [updater, "--agent-dir", agentDir, "--already-locked"], {
		encoding: "utf8",
		env: process.env,
	});
	if (completed.stdout) process.stdout.write(completed.stdout);
	if (completed.stderr) process.stderr.write(completed.stderr);
	if (completed.error) throw completed.error;
	if (completed.status !== 0) {
		throw new ImportError(`repo-skills-router updater failed with exit code ${completed.status ?? 1}`);
	}
}

function maybeInjectTestFailure(stage) {
	if (process.env.NODE_ENV !== "test") return;
	if (process.env.DISCO_TEST_FAIL_REPO_IMPORT_AT === stage) {
		throw new ImportError(`injected repo-skill import failure at ${stage}`);
	}
}

function rollbackImport({ targetDir, targetBackup, routerDir, routerBackup, routerExisted }) {
	const errors = [];
	try {
		fs.rmSync(targetDir, { recursive: true, force: true });
		if (pathExists(targetBackup)) fs.renameSync(targetBackup, targetDir);
	} catch (error) {
		errors.push(`could not restore repo skill: ${error instanceof Error ? error.message : String(error)}`);
	}
	try {
		fs.rmSync(routerDir, { recursive: true, force: true });
		if (routerExisted && pathExists(routerBackup)) fs.renameSync(routerBackup, routerDir);
	} catch (error) {
		errors.push(`could not restore repo-skills-router: ${error instanceof Error ? error.message : String(error)}`);
	}
	return errors;
}

function importRepoSkill(args) {
	const agentDir = path.resolve(expandHome(args.agentDir));
	const skillsRoot = path.join(agentDir, "skills");
	const repoSkillsRoot = path.join(skillsRoot, "repo-skills");
	const routerDir = path.join(skillsRoot, "repo-skills-router");
	const sourceDir = path.resolve(expandHome(args.sourceDir));
	if (!pathExists(sourceDir)) throw new ImportError(`runtime repo skill directory does not exist: ${sourceDir}`);
	if (isWithin(skillsRoot, sourceDir)) {
		throw new ImportError(
			`runtime repo skill must be staged outside the live DisCo skills root before import: ${skillsRoot}`,
		);
	}

	const skillId = validateRepoSkill(sourceDir);
	const targetDir = path.join(repoSkillsRoot, skillId);
	if (pathExists(targetDir) && !args.overwrite) {
		throw new ImportError(
			`live repo skill already exists: ${targetDir}. Obtain separate overwrite approval, then rerun with --overwrite`,
		);
	}

	fs.mkdirSync(repoSkillsRoot, { recursive: true });
	const transactionId = `${process.pid}.${Date.now()}.${Math.random().toString(36).slice(2)}`;
	const transactionDir = path.join(skillsRoot, `.repo-skill-import.${transactionId}`);
	const stagedDir = path.join(transactionDir, "staged", skillId);
	const targetBackup = path.join(transactionDir, "backups", "previous-skill");
	const routerBackup = path.join(transactionDir, "backups", "previous-router");
	let mutationStarted = false;
	let preserveTransaction = false;
	let routerExisted = false;

	try {
		fs.mkdirSync(path.dirname(stagedDir), { recursive: true });
		fs.mkdirSync(path.dirname(targetBackup), { recursive: true });
		fs.cpSync(sourceDir, stagedDir, { recursive: true, errorOnExist: true, force: false });
		if (validateRepoSkill(stagedDir) !== skillId) {
			throw new ImportError("staged repo skill identity changed during copy");
		}

		const targetExists = pathExists(targetDir);
		if (targetExists && !args.overwrite) {
			throw new ImportError(
				`live repo skill appeared during import: ${targetDir}. Obtain separate overwrite approval, then rerun with --overwrite`,
			);
		}
		routerExisted = pathExists(routerDir);
		if (routerExisted) fs.cpSync(routerDir, routerBackup, { recursive: true, errorOnExist: true, force: false });
		if (targetExists) fs.renameSync(targetDir, targetBackup);
		mutationStarted = true;
		fs.renameSync(stagedDir, targetDir);
		validateRepoSkill(targetDir);
		maybeInjectTestFailure("after-install");

		runRouterUpdater(agentDir);
		if (!pathExists(path.join(targetDir, "SKILL.md"))) {
			throw new ImportError(`installed repo skill disappeared before commit: ${targetDir}`);
		}
		if (!pathExists(path.join(routerDir, "SKILL.md"))) {
			throw new ImportError(`repo-skills-router was not created or updated: ${routerDir}`);
		}
		maybeInjectTestFailure("after-router-update");

		console.log(`imported and routed repo skill ${skillId} at ${targetDir}`);
		console.log("Start a new /researcher session to use the updated managed repo skill; no cross-agent export is required.");
		return 0;
	} catch (error) {
		if (mutationStarted) {
			const rollbackErrors = rollbackImport({
				targetDir,
				targetBackup,
				routerDir,
				routerBackup,
				routerExisted,
			});
			if (rollbackErrors.length > 0) {
				preserveTransaction = true;
				throw new ImportError(
					`${error instanceof Error ? error.message : String(error)}; rollback failed:\n${rollbackErrors.join("\n")}\nRecovery artifacts remain at ${transactionDir}`,
				);
			}
		}
		throw error;
	} finally {
		if (!preserveTransaction) {
			try {
				fs.rmSync(transactionDir, { recursive: true, force: true });
			} catch (error) {
				console.warn(
					`warning: could not remove repo-skill transaction directory ${transactionDir}: ${
						error instanceof Error ? error.message : String(error)
					}`,
				);
			}
		}
	}
}

function main(argv) {
	let args;
	try {
		args = parseArgs(argv);
	} catch (error) {
		console.error(`import_repo_skill.mjs: ${error instanceof Error ? error.message : String(error)}`);
		return 2;
	}

	const agentDir = path.resolve(expandHome(args.agentDir));
	if (args.alreadyLocked && !process.env.DISCO_IMPORT_LOCK_PATH) {
		console.error(
			"import_repo_skill.mjs: --already-locked requires DISCO_IMPORT_LOCK_PATH; run normally or through with_import_lock.mjs",
		);
		return 2;
	}
	if (!args.alreadyLocked && !process.env.DISCO_IMPORT_LOCK_PATH) {
		try {
			return runUnderLock(argv, agentDir, args.timeout);
		} catch (error) {
			console.error(`import_repo_skill.mjs: ${error instanceof Error ? error.message : String(error)}`);
			return 1;
		}
	}

	try {
		return importRepoSkill(args);
	} catch (error) {
		console.error(`import_repo_skill.mjs: ${error instanceof Error ? error.message : String(error)}`);
		return error instanceof ImportError ? 2 : 1;
	}
}

process.exitCode = main(process.argv.slice(2));
