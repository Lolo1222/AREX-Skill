import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";

const scriptPath = path.join(
	process.cwd(),
	"packages/coding-agent/src/disco/skills/verify-repo-skill/scripts/import_repo_skill.mjs",
);
const cleanupPaths: string[] = [];

type CandidateOptions = {
	scenarioId?: string;
	allowNewScenario?: boolean;
	nestedRole?: string;
};

function importerArgs(agentDir: string, candidate: string, extraArgs: string[] = []): string[] {
	return [scriptPath, "--agent-dir", agentDir, ...extraArgs, candidate];
}

function importerEnv(extraEnv: Record<string, string> = {}): NodeJS.ProcessEnv {
	return {
		...process.env,
		NODE_ENV: "test",
		DISCO_IMPORT_LOCK_PATH: "",
		...extraEnv,
	};
}

function runImporter(
	agentDir: string,
	candidate: string,
	extraArgs: string[] = [],
	extraEnv: Record<string, string> = {},
) {
	return spawnSync(process.execPath, importerArgs(agentDir, candidate, extraArgs), {
		encoding: "utf8",
		env: importerEnv(extraEnv),
	});
}

function runImporterAsync(agentDir: string, candidate: string): Promise<{ stdout: string; stderr: string; code: number }> {
	return new Promise((resolve, reject) => {
		const child = spawn(process.execPath, importerArgs(agentDir, candidate), {
			env: importerEnv(),
			stdio: ["ignore", "pipe", "pipe"],
		});
		let stdout = "";
		let stderr = "";
		child.stdout.on("data", (chunk) => {
			stdout += String(chunk);
		});
		child.stderr.on("data", (chunk) => {
			stderr += String(chunk);
		});
		child.on("error", reject);
		child.on("close", (code) => resolve({ stdout, stderr, code: code ?? -1 }));
	});
}

function routingMetadata(skillId: string, scenarioId: string, allowNewScenario: boolean) {
	return {
		...(allowNewScenario
			? {
				scenarios: {
					[scenarioId]: {
						title: "Repo Import Test Workflows",
						when_to_read: "Repository import test workflows and transaction verification.",
						how_to_choose: "Choose the repo skill that matches the named test package.",
						allow_new: true,
						why_not_existing: "This isolated test library has no suitable existing scenario.",
						expected_future_reuse: "Multiple importer test skills share this scenario.",
					},
				},
			}
			: {}),
		skills: {
			[skillId]: {
				scenarios: [
					{
						id: scenarioId,
						title: "Repo Import Test Workflows",
						when_to_read: "Repository import test workflows and transaction verification.",
						role: `Guides ${skillId} repository import tests.`,
						read_when: `The request names ${skillId} or asks about its importer test workflow.`,
						best_for: `${skillId} setup and transaction verification.`,
						avoid_when: "A different repository skill matches the requested package.",
						useful_entry_points: [`${skillId}/SKILL.md`],
						selection_guidance: `Choose \`${skillId}\` for ${skillId} importer test tasks.`,
					},
				],
			},
		},
	};
}

async function writeCandidate(
	draftRoot: string,
	skillId: string,
	revision: string,
	options: CandidateOptions = {},
): Promise<string> {
	const candidate = path.join(draftRoot, skillId);
	const nestedDir = path.join(candidate, "sub-skills", "setup");
	await mkdir(path.join(candidate, "references"), { recursive: true });
	await mkdir(nestedDir, { recursive: true });
	await writeFile(
		path.join(candidate, "SKILL.md"),
		[
			"---",
			`name: ${skillId}`,
			`description: "Use ${skillId} for verified repository import workflows (${revision})."`,
			"disable-model-invocation: true",
			"metadata:",
			"  disco-role: operating",
			"---",
			"",
			`# ${skillId} ${revision}`,
		].join("\n"),
		"utf8",
	);
	await writeFile(
		path.join(nestedDir, "SKILL.md"),
		[
			"---",
			"name: setup",
			'description: "Set up the repository import test workflow."',
			"disable-model-invocation: true",
			"metadata:",
			`  disco-role: ${options.nestedRole ?? "operating"}`,
			"---",
			"",
			"# Setup",
		].join("\n"),
		"utf8",
	);
	const scenarioId = options.scenarioId ?? "repo-import-test-workflows";
	await writeFile(
		path.join(candidate, "references", "repo-routing-metadata.json"),
		`${JSON.stringify(routingMetadata(skillId, scenarioId, options.allowNewScenario ?? true), null, 2)}\n`,
		"utf8",
	);
	return candidate;
}

async function readTextTree(root: string, relativeDir = ""): Promise<Record<string, string>> {
	const result: Record<string, string> = {};
	for (const entry of await readdir(path.join(root, relativeDir), { withFileTypes: true })) {
		const relativePath = path.join(relativeDir, entry.name);
		if (entry.isDirectory()) {
			Object.assign(result, await readTextTree(root, relativePath));
		} else if (entry.isFile()) {
			result[relativePath.split(path.sep).join("/")] = await readFile(path.join(root, relativePath), "utf8");
		}
	}
	return result;
}

async function transactionArtifacts(skillsRoot: string): Promise<string[]> {
	if (!existsSync(skillsRoot)) return [];
	return (await readdir(skillsRoot)).filter(
		(entry) => entry.startsWith(".repo-skill-import.") || entry.startsWith(".repo-skills-router."),
	);
}

describe("import_repo_skill.mjs", () => {
	afterEach(async () => {
		for (const cleanupPath of cleanupPaths.splice(0)) {
			await rm(cleanupPath, { recursive: true, force: true });
		}
	});

	it("imports a verified repo skill and rebuilds the sibling router", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const candidate = await writeCandidate(path.join(root, "draft"), "alpha-repo", "v1");

		const result = runImporter(agentDir, candidate);

		expect(result.status, result.stderr).toBe(0);
		expect(result.stdout).toContain("imported and routed repo skill alpha-repo");
		expect(result.stdout).toContain("no cross-agent export is required");
		expect(await readFile(path.join(agentDir, "skills", "repo-skills", "alpha-repo", "SKILL.md"), "utf8")).toContain(
			"# alpha-repo v1",
		);
		const routerPage = await readFile(
			path.join(
				agentDir,
				"skills",
				"repo-skills-router",
				"references",
				"scenarios",
				"repo-import-test-workflows.md",
			),
			"utf8",
		);
		expect(routerPage).toContain("`alpha-repo`");
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-import.lockdir"))).toBe(false);
	});

	it("preserves a disabled live router while importing another repo skill", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const draftRoot = path.join(root, "draft");
		const alpha = await writeCandidate(draftRoot, "alpha-repo", "v1");
		expect(runImporter(agentDir, alpha).status).toBe(0);
		const routerFile = path.join(agentDir, "skills", "repo-skills-router", "SKILL.md");
		const enabledRouter = await readFile(routerFile, "utf8");
		await writeFile(
			routerFile,
			enabledRouter.replace("metadata:\n", "disable-model-invocation: true\nmetadata:\n"),
			"utf8",
		);

		const beta = await writeCandidate(draftRoot, "beta-repo", "v1");
		const result = runImporter(agentDir, beta);

		expect(result.status).toBe(0);
		expect(await readFile(routerFile, "utf8")).toContain("disable-model-invocation: true");
	});

	it("requires explicit overwrite approval for an existing repo skill", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const draftRoot = path.join(root, "draft");
		const candidate = await writeCandidate(draftRoot, "alpha-repo", "v1");
		expect(runImporter(agentDir, candidate).status).toBe(0);
		await writeCandidate(draftRoot, "alpha-repo", "v2");

		const conflict = runImporter(agentDir, candidate);
		expect(conflict.status).toBe(2);
		expect(conflict.stderr).toContain("Obtain separate overwrite approval");
		const targetFile = path.join(agentDir, "skills", "repo-skills", "alpha-repo", "SKILL.md");
		expect(await readFile(targetFile, "utf8")).toContain("# alpha-repo v1");

		const overwrite = runImporter(agentDir, candidate, ["--overwrite"]);
		expect(overwrite.status, overwrite.stderr).toBe(0);
		expect(await readFile(targetFile, "utf8")).toContain("# alpha-repo v2");
	});

	it("recursively rejects a wrong-role descendant before changing the live library", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const candidate = await writeCandidate(path.join(root, "draft"), "wrong-role-repo", "v1", {
			nestedRole: "meta",
		});

		const result = runImporter(agentDir, candidate);

		expect(result.status).toBe(2);
		expect(result.stderr).toContain("metadata.disco-role must be operating");
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "wrong-role-repo"))).toBe(false);
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
	});

	it("rejects a runtime source staged inside the live DisCo skills root", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const liveCandidate = await writeCandidate(
			path.join(agentDir, "skills", "repo-skills"),
			"alpha-repo",
			"edited-live",
		);

		const result = runImporter(agentDir, liveCandidate, ["--overwrite"]);

		expect(result.status).toBe(2);
		expect(result.stderr).toContain("must be staged outside the live DisCo skills root before import");
		expect(existsSync(path.join(agentDir, "skills", "repo-skills-router"))).toBe(false);
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
	});

	it("rolls back a new skill when router validation fails", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const draftRoot = path.join(root, "draft");
		const baseline = await writeCandidate(draftRoot, "baseline-repo", "v1");
		expect(runImporter(agentDir, baseline).status).toBe(0);
		const routerDir = path.join(agentDir, "skills", "repo-skills-router");
		const routerBefore = await readTextTree(routerDir);
		const invalid = await writeCandidate(draftRoot, "invalid-repo", "v1", {
			scenarioId: "unknown-import-scenario",
			allowNewScenario: false,
		});

		const result = runImporter(agentDir, invalid);

		expect(result.status).toBe(2);
		expect(result.stderr).toContain("uses unknown scenario unknown-import-scenario");
		expect(result.stderr).toContain("repo-skills-router updater failed");
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "invalid-repo"))).toBe(false);
		expect(await readTextTree(routerDir)).toEqual(routerBefore);
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
	});

	it("restores both the old skill and old router after a post-update failure", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const draftRoot = path.join(root, "draft");
		const candidate = await writeCandidate(draftRoot, "alpha-repo", "v1");
		expect(runImporter(agentDir, candidate).status).toBe(0);
		const routerDir = path.join(agentDir, "skills", "repo-skills-router");
		const routerBefore = await readTextTree(routerDir);
		await writeCandidate(draftRoot, "alpha-repo", "v2", { scenarioId: "repo-import-v2-workflows" });

		const result = runImporter(agentDir, candidate, ["--overwrite"], {
			DISCO_TEST_FAIL_REPO_IMPORT_AT: "after-router-update",
		});

		expect(result.status).toBe(2);
		expect(result.stderr).toContain("injected repo-skill import failure at after-router-update");
		expect(
			await readFile(path.join(agentDir, "skills", "repo-skills", "alpha-repo", "SKILL.md"), "utf8"),
		).toContain("# alpha-repo v1");
		expect(await readTextTree(routerDir)).toEqual(routerBefore);
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
	});

	it("serializes concurrent imports without losing either router entry", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const draftRoot = path.join(root, "draft");
		const alpha = await writeCandidate(draftRoot, "alpha-repo", "v1");
		const beta = await writeCandidate(draftRoot, "beta-repo", "v1");

		const [alphaResult, betaResult] = await Promise.all([
			runImporterAsync(agentDir, alpha),
			runImporterAsync(agentDir, beta),
		]);

		expect(alphaResult.code, alphaResult.stderr).toBe(0);
		expect(betaResult.code, betaResult.stderr).toBe(0);
		const scenarioPage = await readFile(
			path.join(
				agentDir,
				"skills",
				"repo-skills-router",
				"references",
				"scenarios",
				"repo-import-test-workflows.md",
			),
			"utf8",
		);
		expect(scenarioPage).toContain("`alpha-repo`");
		expect(scenarioPage).toContain("`beta-repo`");
		expect(await transactionArtifacts(path.join(agentDir, "skills"))).toEqual([]);
	});

	it("requires proof of the global lock for --already-locked", async () => {
		const root = await mkdtemp(path.join(tmpdir(), "disco-repo-import-"));
		cleanupPaths.push(root);
		const agentDir = path.join(root, "agent");
		const candidate = await writeCandidate(path.join(root, "draft"), "alpha-repo", "v1");

		const result = runImporter(agentDir, candidate, ["--already-locked"]);

		expect(result.status).toBe(2);
		expect(result.stderr).toContain("--already-locked requires DISCO_IMPORT_LOCK_PATH");
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "alpha-repo"))).toBe(false);
	});
});
