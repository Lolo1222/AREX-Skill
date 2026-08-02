import { execFileSync, spawn } from "node:child_process";
import { cpSync, existsSync, readFileSync, readdirSync } from "node:fs";
import { chmod, lstat, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
	RepoSkillsLibraryConflictError,
	RepoSkillsLibraryManager,
	type RepoSkillsLibraryManagerOptions,
	type RepoSkillsTransactionPoint,
} from "./repo-skills-library-manager.ts";

const temporaryRoots: string[] = [];
const bundledSkillsDir = path.join(process.cwd(), "packages", "coding-agent", "src", "disco", "skills");
const importRepoSkillScript = path.join(
	bundledSkillsDir,
	"verify-repo-skill",
	"scripts",
	"import_repo_skill.mjs",
);

async function makeTempRoot(): Promise<string> {
	const root = await mkdtemp(path.join(tmpdir(), "disco-repo-skills-manager-"));
	temporaryRoots.push(root);
	return root;
}

function git(repository: string, ...args: string[]): string {
	return execFileSync("git", ["-C", repository, ...args], { encoding: "utf8" }).trim();
}

async function writeRepoSkill(libraryRoot: string, skillId: string, marker: string): Promise<void> {
	const skillDir = path.join(libraryRoot, "repo-skills", skillId);
	await mkdir(path.join(skillDir, "references"), { recursive: true });
	await writeFile(
		path.join(skillDir, "SKILL.md"),
		[
			"---",
			`name: ${skillId}`,
			`description: "Use ${skillId} for focused repository workflows."`,
			"disable-model-invocation: true",
			"metadata:",
			"  disco-role: operating",
			"---",
			"",
			`# ${skillId}`,
			"",
			marker,
		].join("\n"),
		"utf8",
	);
	await writeFile(
		path.join(skillDir, "references", "repo-routing-metadata.json"),
		JSON.stringify(
			{
				skills: {
					[skillId]: {
						scenarios: [
							{
								id: "test-workflows",
								title: "Test Workflows",
								when_to_read: "Testing repository skill installation and updates.",
								role: `Handles ${skillId} test workflows.`,
								selection_guidance: `Choose ${skillId} when the request names ${skillId}.`,
							},
						],
					},
				},
			},
			null,
			2,
		),
		"utf8",
	);
}

async function writeRouterTemplate(libraryRoot: string): Promise<void> {
	const routerDir = path.join(libraryRoot, "repo-skills-router");
	await mkdir(path.join(routerDir, "references"), { recursive: true });
	await writeFile(
		path.join(routerDir, "SKILL.md"),
		[
			"---",
			"name: repo-skills-router",
			'description: "Select a repository skill for test workflows."',
			"metadata:",
			"  disco-role: operating",
			"---",
			"",
			"# Repo Skills Router",
		].join("\n"),
		"utf8",
	);
	await writeFile(
		path.join(routerDir, "references", "scenario-registry.json"),
		JSON.stringify(
			{
				version: 1,
				enforce_known_scenarios: true,
				scenarios: {
					"test-workflows": {
						title: "Test Workflows",
						when_to_read: "Testing repository skill installation and updates.",
						how_to_choose: "Choose the repository skill named by the request.",
					},
				},
			},
			null,
			2,
		),
		"utf8",
	);
}

async function createSourceRepository(root: string): Promise<{ repository: string; libraryRoot: string }> {
	const repository = path.join(root, "source");
	const libraryRoot = path.join(repository, "research-skills-library");
	await mkdir(repository, { recursive: true });
	execFileSync("git", ["init", "--initial-branch=main", repository]);
	git(repository, "config", "user.email", "test@example.com");
	git(repository, "config", "user.name", "DisCo Test");
	await writeRepoSkill(libraryRoot, "alpha-skill", "source-v1");
	await writeRouterTemplate(libraryRoot);
	git(repository, "add", "research-skills-library");
	git(repository, "commit", "-m", "source v1");
	return { repository, libraryRoot };
}

function manager(
	agentDir: string,
	sourceRepository: string,
	offline = false,
	overrides: Omit<RepoSkillsLibraryManagerOptions, "agentDir" | "sourceRepository" | "offline"> = {},
): RepoSkillsLibraryManager {
	const env = { ...(overrides.env ?? process.env) };
	delete env.DISCO_OFFLINE;
	return new RepoSkillsLibraryManager({
		...overrides,
		agentDir,
		sourceRepository,
		bundledSkillsDir,
		offline,
		env,
	});
}

async function waitForCondition(predicate: () => boolean, message: string, timeoutMs = 5_000): Promise<void> {
	const deadline = Date.now() + timeoutMs;
	while (!predicate()) {
		if (Date.now() >= deadline) throw new Error(message);
		await new Promise((resolve) => setTimeout(resolve, 20));
	}
}

function skillBody(content: string): string {
	return content.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, "");
}

function runImporter(agentDir: string, candidate: string): Promise<{ code: number; stdout: string; stderr: string }> {
	return new Promise((resolvePromise, reject) => {
		const child = spawn(process.execPath, [importRepoSkillScript, "--agent-dir", agentDir, candidate], {
			env: { ...process.env, NODE_ENV: "test", DISCO_IMPORT_LOCK_PATH: "" },
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
		child.on("close", (code) => resolvePromise({ code: code ?? -1, stdout, stderr }));
	});
}

afterEach(async () => {
	while (temporaryRoots.length > 0) {
		await rm(temporaryRoots.pop()!, { recursive: true, force: true });
	}
});

describe("RepoSkillsLibraryManager", () => {
	it("installs the official collection and records its source commit", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const result = await manager(agentDir, repository).install();

		expect(result.noop).toBe(false);
		expect(result.managedSkills).toBe(1);
		expect(result.localSkills).toBe(0);
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md"))).toBe(true);
		expect(existsSync(path.join(agentDir, "skills", "repo-skills-router", "references", "usage-scenarios.md"))).toBe(
			true,
		);
		const status = manager(agentDir, repository).status();
		expect(status.managed).toBe(true);
		expect(status.commit).toBe(git(repository, "rev-parse", "HEAD"));
		expect(status.issues).toEqual([]);
	});

	it("keeps repeated install and an unchanged update as true no-ops", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const stateFile = path.join(agentDir, "repo-skills-library.json");
		const before = await readFile(stateFile, "utf8");

		const repeatedInstall = await libraryManager.install();
		const unchangedUpdate = await libraryManager.update();

		expect(repeatedInstall.noop).toBe(true);
		expect(unchangedUpdate.noop).toBe(true);
		expect(await readFile(stateFile, "utf8")).toBe(before);
	});

	it("rebuilds a locally modified router instead of treating the update as a no-op", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const routerUsage = path.join(
			agentDir,
			"skills",
			"repo-skills-router",
			"references",
			"usage-scenarios.md",
		);
		await writeFile(routerUsage, `${await readFile(routerUsage, "utf8")}\nlocal router edit\n`, "utf8");

		expect(libraryManager.status().issues).toContain("repo-skills-router is modified or stale");
		const result = await libraryManager.update();

		expect(result.noop).toBe(false);
		expect(await readFile(routerUsage, "utf8")).not.toContain("local router edit");
		expect(libraryManager.status().issues).toEqual([]);
	});

	it("reports and repairs missing router coverage for a manually added local skill", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		await writeRepoSkill(path.join(agentDir, "skills"), "manual-local-skill", "manual-local-content");

		expect(libraryManager.status().issues).toContain(
			"repo-skills-router is missing skill coverage: manual-local-skill",
		);
		const result = await libraryManager.update();

		expect(result.noop).toBe(false);
		expect(result.localSkills).toBe(1);
		expect(libraryManager.status().issues).toEqual([]);
		expect(
			await readFile(
				path.join(agentDir, "skills", "repo-skills-router", "references", "scenarios", "test-workflows.md"),
				"utf8",
			),
		).toContain("manual-local-skill");
	});

	it("preserves Creator skills while updating official skills", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const liveLibrary = path.join(agentDir, "skills");
		await writeRepoSkill(liveLibrary, "creator-skill", "creator-content");

		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		await writeRepoSkill(libraryRoot, "beta-skill", "beta-v1");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const result = await libraryManager.update();

		expect(result.managedSkills).toBe(2);
		expect(result.localSkills).toBe(1);
		expect(await readFile(path.join(liveLibrary, "repo-skills", "creator-skill", "SKILL.md"), "utf8")).toContain(
			"creator-content",
		);
		expect(await readFile(path.join(liveLibrary, "repo-skills", "alpha-skill", "SKILL.md"), "utf8")).toContain(
			"source-v2",
		);
		expect(await readFile(path.join(liveLibrary, "repo-skills-router", "references", "scenarios", "test-workflows.md"), "utf8")).toContain(
			"creator-skill",
		);
	});

	it("keeps router disablement across a full update", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const routerFile = path.join(agentDir, "skills", "repo-skills-router", "SKILL.md");
		const routerBodyBeforeToggle = skillBody(await readFile(routerFile, "utf8"));
		const disabled = await libraryManager.setRouterEnabled(false);
		expect(disabled).toEqual({ enabled: false, changed: true });
		expect(await libraryManager.setRouterEnabled(false)).toEqual({ enabled: false, changed: false });
		expect(skillBody(await readFile(routerFile, "utf8"))).toBe(routerBodyBeforeToggle);
		expect(libraryManager.status().issues).toEqual([]);

		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const result = await libraryManager.update();

		expect(result.routerEnabled).toBe(false);
		const router = await readFile(routerFile, "utf8");
		expect(router).toContain("disable-model-invocation: true");
		expect(manager(agentDir, repository).status().routerEnabled).toBe(false);
		const enabled = await libraryManager.setRouterEnabled(true);
		expect(enabled).toEqual({ enabled: true, changed: true });
		expect(await libraryManager.setRouterEnabled(true)).toEqual({ enabled: true, changed: false });
		expect(await readFile(routerFile, "utf8")).not.toContain(
			"disable-model-invocation",
		);
		expect(skillBody(await readFile(routerFile, "utf8"))).toBe(skillBody(router));
		expect(libraryManager.status().issues).toEqual([]);
	});

	it.skipIf(process.platform === "win32")("refuses to toggle a router reached through a symbolic link", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const liveRouter = path.join(agentDir, "skills", "repo-skills-router");
		const externalRouter = path.join(root, "external-router");
		cpSync(liveRouter, externalRouter, { recursive: true });
		await rm(liveRouter, { recursive: true });
		await symlink(externalRouter, liveRouter, "dir");
		const externalSkill = path.join(externalRouter, "SKILL.md");
		const before = await readFile(externalSkill, "utf8");

		await expect(libraryManager.setRouterEnabled(false)).rejects.toThrow("must be a real directory");
		expect(await readFile(externalSkill, "utf8")).toBe(before);
	});

	it("removes clean official skills deleted upstream", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();

		await writeRepoSkill(libraryRoot, "beta-skill", "beta-v1");
		await rm(path.join(libraryRoot, "repo-skills", "alpha-skill"), { recursive: true });
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "replace official skill");

		const result = await libraryManager.update();
		expect(result.managedSkills).toBe(1);
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "alpha-skill"))).toBe(false);
		expect(existsSync(path.join(agentDir, "skills", "repo-skills", "beta-skill", "SKILL.md"))).toBe(true);
	});

	it("adds and updates official root metadata files", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const sourceRootFile = path.join(libraryRoot, "repo-skills", "README.md");
		const liveRootFile = path.join(agentDir, "skills", "repo-skills", "README.md");

		await writeFile(sourceRootFile, "root metadata v1\n", "utf8");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "add root metadata");
		await libraryManager.update();
		expect(await readFile(liveRootFile, "utf8")).toBe("root metadata v1\n");

		await writeFile(sourceRootFile, "root metadata v2\n", "utf8");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "update root metadata");
		await libraryManager.update();
		expect(await readFile(liveRootFile, "utf8")).toBe("root metadata v2\n");
		expect(libraryManager.status().issues).toEqual([]);
	});

	it("does not delete a locally changed managed skill removed upstream without force", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const liveAlpha = path.join(agentDir, "skills", "repo-skills", "alpha-skill");
		await rm(path.join(liveAlpha, "SKILL.md"));

		await writeRepoSkill(libraryRoot, "beta-skill", "beta-v1");
		await rm(path.join(libraryRoot, "repo-skills", "alpha-skill"), { recursive: true });
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "remove changed official skill");

		await expect(libraryManager.update()).rejects.toBeInstanceOf(RepoSkillsLibraryConflictError);
		expect(existsSync(liveAlpha)).toBe(true);
		const forced = await libraryManager.update({ force: true });
		expect(forced.backupPath).toBeDefined();
		expect(existsSync(path.join(forced.backupPath!, "repo-skills", "alpha-skill"))).toBe(true);
		expect(existsSync(liveAlpha)).toBe(false);
	});

	it("does not delete a locally modified managed root file removed upstream without force", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		await writeFile(path.join(libraryRoot, "repo-skills", "README.md"), "official root metadata\n", "utf8");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "add root metadata");
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const liveRootFile = path.join(agentDir, "skills", "repo-skills", "README.md");
		await writeFile(liveRootFile, "local root metadata edit\n", "utf8");
		await rm(path.join(libraryRoot, "repo-skills", "README.md"));
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "remove root metadata");

		await expect(libraryManager.update()).rejects.toBeInstanceOf(RepoSkillsLibraryConflictError);
		expect(await readFile(liveRootFile, "utf8")).toContain("local root metadata edit");
		const forced = await libraryManager.update({ force: true });
		expect(forced.backupPath).toBeDefined();
		expect(await readFile(path.join(forced.backupPath!, "repo-skills", "README.md"), "utf8")).toContain(
			"local root metadata edit",
		);
		expect(existsSync(liveRootFile)).toBe(false);
	});

	it("refuses managed local drift unless force creates a backup", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const skillFile = path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md");
		await writeFile(skillFile, `${await readFile(skillFile, "utf8")}\nlocal edit\n`, "utf8");

		await expect(libraryManager.update()).rejects.toBeInstanceOf(RepoSkillsLibraryConflictError);
		const forced = await libraryManager.update({ force: true });
		expect(forced.backupPath).toBeDefined();
		expect(existsSync(path.join(forced.backupPath!, "repo-skills", "alpha-skill", "SKILL.md"))).toBe(true);
		expect(readFileSync(skillFile, "utf8")).not.toContain("local edit");
	});

	it("adopts an existing manual copy without replacing additional local skills", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const liveSkills = path.join(agentDir, "skills");
		await mkdir(liveSkills, { recursive: true });
		cpSync(path.join(libraryRoot, "repo-skills"), path.join(liveSkills, "repo-skills"), { recursive: true });
		cpSync(path.join(libraryRoot, "repo-skills-router"), path.join(liveSkills, "repo-skills-router"), {
			recursive: true,
		});
		await writeRepoSkill(liveSkills, "local-skill", "local-content");

		const result = await manager(agentDir, repository).install();
		expect(result.managedSkills).toBe(1);
		expect(result.localSkills).toBe(1);
		expect(await readFile(path.join(liveSkills, "repo-skills", "local-skill", "SKILL.md"), "utf8")).toContain(
			"local-content",
		);
	});

	it.each(["repo-skills-only", "router-only"] as const)(
		"repairs and adopts a partial manual installation containing %s",
		async (layout) => {
			const root = await makeTempRoot();
			const { repository, libraryRoot } = await createSourceRepository(root);
			const agentDir = path.join(root, "agent");
			const liveSkills = path.join(agentDir, "skills");
			await mkdir(liveSkills, { recursive: true });
			if (layout === "repo-skills-only") {
				cpSync(path.join(libraryRoot, "repo-skills"), path.join(liveSkills, "repo-skills"), {
					recursive: true,
				});
			} else {
				const liveRouter = path.join(liveSkills, "repo-skills-router");
				cpSync(path.join(libraryRoot, "repo-skills-router"), liveRouter, { recursive: true });
				const routerFile = path.join(liveRouter, "SKILL.md");
				await writeFile(
					routerFile,
					(await readFile(routerFile, "utf8")).replace("metadata:\n", "disable-model-invocation: true\nmetadata:\n"),
					"utf8",
				);
			}

			const result = await manager(agentDir, repository).install();

			expect(result.managedSkills).toBe(1);
			expect(result.routerEnabled).toBe(layout !== "router-only");
			expect(existsSync(path.join(liveSkills, "repo-skills", "alpha-skill", "SKILL.md"))).toBe(true);
			expect(existsSync(path.join(liveSkills, "repo-skills-router", "references", "usage-scenarios.md"))).toBe(
				true,
			);
			expect(manager(agentDir, repository).status().issues).toEqual([]);
		},
	);

	it("requires force and keeps a backup for an unmanaged same-ID collision", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const liveSkills = path.join(agentDir, "skills");
		await writeRepoSkill(liveSkills, "alpha-skill", "local-collision");
		const libraryManager = manager(agentDir, repository);

		await expect(libraryManager.install()).rejects.toBeInstanceOf(RepoSkillsLibraryConflictError);
		const forced = await libraryManager.install({ force: true });

		expect(forced.backupPath).toBeDefined();
		expect(await readFile(path.join(forced.backupPath!, "repo-skills", "alpha-skill", "SKILL.md"), "utf8")).toContain(
			"local-collision",
		);
		expect(await readFile(path.join(liveSkills, "repo-skills", "alpha-skill", "SKILL.md"), "utf8")).toContain(
			"source-v1",
		);
	});

	it.skipIf(process.platform === "win32")(
		"falls back from sparse clone and passes configured proxy variables to Git",
		async () => {
			const root = await makeTempRoot();
			const { repository } = await createSourceRepository(root);
			const agentDir = path.join(root, "agent");
			const captureFile = path.join(root, "git-proxy.log");
			const gitWrapper = path.join(root, "git-wrapper.sh");
			await writeFile(
				gitWrapper,
				[
					"#!/bin/sh",
					`printf '%s\\n' "$HTTPS_PROXY" >> "${captureFile}"`,
					'for argument in "$@"; do',
					'  if [ "$argument" = "--filter=blob:none" ] || [ "$argument" = "--sparse" ]; then',
					"    exit 23",
					"  fi",
					"done",
					'exec git "$@"',
				].join("\n"),
				"utf8",
			);
			await chmod(gitWrapper, 0o755);
			const proxy = "http://proxy.example.invalid:18080";
			const env = { ...process.env, HTTP_PROXY: proxy, HTTPS_PROXY: proxy };

			const result = await manager(agentDir, repository, false, { env, gitCommand: gitWrapper }).install();

			expect(result.managedSkills).toBe(1);
			expect((await readFile(captureFile, "utf8")).split(/\r?\n/)).toContain(proxy);
			expect(existsSync(path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md"))).toBe(true);
		},
	);

	it("reports a missing Git executable without changing the live installation", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");

		await expect(
			manager(agentDir, repository, false, { gitCommand: path.join(root, "missing-git") }).install(),
		).rejects.toThrow("Manual fallback: https://github.com/VectorSpaceLab/Auto-ML-Skills");
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
		expect(existsSync(path.join(agentDir, "skills"))).toBe(false);
	});

	it("rebuilds a damaged source cache before applying an update", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const cacheGit = path.join(agentDir, "cache", "repo-skills-source", ".git");
		await rm(cacheGit, { recursive: true });
		await writeFile(cacheGit, "damaged cache marker\n", "utf8");

		const result = await libraryManager.update();

		expect(result.noop).toBe(true);
		expect(git(path.join(agentDir, "cache", "repo-skills-source"), "rev-parse", "HEAD")).toBe(
			git(repository, "rev-parse", "HEAD"),
		);
		expect(libraryManager.status().issues).toEqual([]);
	});

	it.skipIf(process.platform === "win32")("replaces a symlinked cache without cleaning its target", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const cacheDir = path.join(agentDir, "cache", "repo-skills-source");
		const externalCache = path.join(root, "external-cache");
		cpSync(cacheDir, externalCache, { recursive: true });
		const externalMarker = path.join(externalCache, "must-survive.txt");
		await writeFile(externalMarker, "do not clean this target\n", "utf8");
		await rm(cacheDir, { recursive: true });
		await symlink(externalCache, cacheDir, "dir");

		const result = await libraryManager.update();

		expect(result.noop).toBe(true);
		expect(existsSync(externalMarker)).toBe(true);
		expect((await lstat(cacheDir)).isSymbolicLink()).toBe(false);
		expect(git(cacheDir, "remote", "get-url", "origin")).toBe(repository);
	});

	it("rebuilds a managed cache whose origin no longer matches the official source", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const cacheDir = path.join(agentDir, "cache", "repo-skills-source");
		git(cacheDir, "remote", "set-url", "origin", path.join(root, "untrusted-source"));

		const result = await libraryManager.update();

		expect(result.noop).toBe(true);
		expect(git(cacheDir, "remote", "get-url", "origin")).toBe(repository);
		expect(libraryManager.status().issues).toEqual([]);
	});

	it("cleans a temporary cache after the official source cannot be cloned", async () => {
		const root = await makeTempRoot();
		const agentDir = path.join(root, "agent");
		const unavailableSource = path.join(root, "missing-source");

		await expect(manager(agentDir, unavailableSource).install()).rejects.toThrow(
			"Could not clone the official repository skill source",
		);
		const cacheParent = path.join(agentDir, "cache");
		const entries = existsSync(cacheParent) ? await readdir(cacheParent) : [];
		expect(entries.filter((name) => name.startsWith("repo-skills-source.tmp."))).toEqual([]);
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
	});

	it("serializes concurrent source-cache and live-tree updates", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await manager(agentDir, repository).install();
		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");

		const results = await Promise.all([
			manager(agentDir, repository).update(),
			manager(agentDir, repository).update(),
		]);

		expect(results.filter((result) => !result.noop)).toHaveLength(1);
		expect(results.filter((result) => result.noop)).toHaveLength(1);
		expect(manager(agentDir, repository).status().commit).toBe(git(repository, "rev-parse", "HEAD"));
		expect(manager(agentDir, repository).status().issues).toEqual([]);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-source.lockdir"))).toBe(false);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-import.lockdir"))).toBe(false);
	});

	it("serializes a full update with the real single-skill importer without losing either result", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const draftRoot = path.join(root, "draft");
		await writeRepoSkill(draftRoot, "concurrent-creator-skill", "creator-v1");
		const candidate = path.join(draftRoot, "repo-skills", "concurrent-creator-skill");

		const [updateResult, importResult] = await Promise.all([
			libraryManager.update(),
			runImporter(agentDir, candidate),
		]);

		expect(importResult.code, importResult.stderr).toBe(0);
		expect(updateResult.managedSkills).toBe(1);
		expect(await readFile(path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md"), "utf8")).toContain(
			"source-v2",
		);
		expect(
			await readFile(
				path.join(agentDir, "skills", "repo-skills", "concurrent-creator-skill", "SKILL.md"),
				"utf8",
			),
		).toContain("creator-v1");
		expect(
			await readFile(
				path.join(agentDir, "skills", "repo-skills-router", "references", "scenarios", "test-workflows.md"),
				"utf8",
			),
		).toContain("concurrent-creator-skill");
		expect(libraryManager.status().issues).toEqual([]);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-import.lockdir"))).toBe(false);
	});

	it("re-reads the live tree after download and preserves a Creator skill imported while waiting for the lock", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const liveLock = path.join(agentDir, "locks", "repo-skills-import.lockdir");
		await mkdir(liveLock, { recursive: true });
		await writeFile(path.join(liveLock, "owner.json"), JSON.stringify({ pid: process.pid }), "utf8");
		const snapshotsRoot = path.join(agentDir, "cache", "repo-skills-snapshots");
		const updatePromise = libraryManager.update();
		try {
			await waitForCondition(
				() => existsSync(snapshotsRoot) && readdirSync(snapshotsRoot).some((name) => name.startsWith("snapshot-")),
				"update did not finish its source snapshot before waiting for the live lock",
			);
			await writeRepoSkill(path.join(agentDir, "skills"), "late-creator-skill", "created-during-download");
		} finally {
			await rm(liveLock, { recursive: true, force: true });
		}

		const result = await updatePromise;
		const liveLibrary = path.join(agentDir, "skills");
		expect(result.localSkills).toBe(1);
		expect(await readFile(path.join(liveLibrary, "repo-skills", "late-creator-skill", "SKILL.md"), "utf8")).toContain(
			"created-during-download",
		);
		expect(await readFile(path.join(liveLibrary, "repo-skills-router", "references", "scenarios", "test-workflows.md"), "utf8")).toContain(
			"late-creator-skill",
		);
		expect(libraryManager.status().issues).toEqual([]);
	});

	it.each([
		"before-install-repo-skills",
		"before-install-router",
		"before-install-state",
	] as RepoSkillsTransactionPoint[])("rolls back the complete live installation when %s fails", async (faultPoint) => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await manager(agentDir, repository).install();
		const liveSkill = path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md");
		const liveRouter = path.join(agentDir, "skills", "repo-skills-router", "SKILL.md");
		const stateFile = path.join(agentDir, "repo-skills-library.json");
		const before = {
			skill: await readFile(liveSkill, "utf8"),
			router: await readFile(liveRouter, "utf8"),
			state: await readFile(stateFile, "utf8"),
		};
		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const faultyManager = manager(agentDir, repository, false, {
			transactionFaultInjector: (point) => {
				if (point === faultPoint) throw new Error(`injected ${faultPoint}`);
			},
		});

		await expect(faultyManager.update()).rejects.toThrow(`injected ${faultPoint}`);

		expect(await readFile(liveSkill, "utf8")).toBe(before.skill);
		expect(await readFile(liveRouter, "utf8")).toBe(before.router);
		expect(await readFile(stateFile, "utf8")).toBe(before.state);
		expect(manager(agentDir, repository).status().issues).toEqual([]);
		expect(readdirSync(agentDir).filter((name) => name.startsWith(".repo-skills-library."))).toEqual([]);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-import.lockdir"))).toBe(false);
	});

	it("retains recovery artifacts and reports their path when rollback itself fails", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await manager(agentDir, repository).install();
		await writeRepoSkill(libraryRoot, "alpha-skill", "source-v2");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "source v2");
		const faultyManager = manager(agentDir, repository, false, {
			transactionFaultInjector: (point) => {
				if (point === "before-install-router" || point === "before-restore-repo-skills") {
					throw new Error(`injected ${point}`);
				}
			},
		});

		let failure: unknown;
		try {
			await faultyManager.update();
		} catch (error) {
			failure = error;
		}

		expect(failure).toBeInstanceOf(Error);
		expect((failure as Error).message).toContain("rollback failed");
		expect((failure as Error).message).toContain("Recovery artifacts remain at");
		const recoveryRoots = readdirSync(agentDir).filter((name) => name.startsWith(".repo-skills-library."));
		expect(recoveryRoots).toHaveLength(1);
		expect(existsSync(path.join(agentDir, recoveryRoots[0], "backup", "repo-skills", "alpha-skill"))).toBe(true);
		expect(existsSync(path.join(agentDir, "locks", "repo-skills-import.lockdir"))).toBe(false);
	});

	it("keeps status and router toggles available offline", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await manager(agentDir, repository).install();
		const offlineManager = manager(agentDir, repository, true);

		expect(offlineManager.status().managed).toBe(true);
		expect(await offlineManager.setRouterEnabled(false)).toEqual({ enabled: false, changed: true });
		await expect(offlineManager.install()).rejects.toThrow("offline mode");
		await expect(offlineManager.update()).rejects.toThrow("offline mode");
	});

	it("reports managed drift, extra local skills, and a missing router through status", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const liveSkills = path.join(agentDir, "skills");
		await writeRepoSkill(liveSkills, "creator-skill", "creator-content");
		const managedSkill = path.join(liveSkills, "repo-skills", "alpha-skill", "SKILL.md");
		await writeFile(managedSkill, `${await readFile(managedSkill, "utf8")}\nlocal edit\n`, "utf8");
		await rm(path.join(liveSkills, "repo-skills-router"), { recursive: true });

		const status = libraryManager.status();

		expect(status.localSkills).toBe(1);
		expect(status.totalSkills).toBe(2);
		expect(status.routerPresent).toBe(false);
		expect(status.issues).toContain("alpha-skill: managed skill is modified");
		expect(status.issues).toContain("repo-skills-router is missing");
	});

	it("reports a corrupt managed state through status", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		await writeFile(path.join(agentDir, "repo-skills-library.json"), "{broken", "utf8");

		const status = libraryManager.status();

		expect(status.managed).toBe(true);
		expect(status.issues.join("\n")).toContain("Could not read managed repository skill state");
	});

	it("rejects malformed source skill frontmatter before creating live state", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await writeFile(path.join(libraryRoot, "repo-skills", "alpha-skill", "SKILL.md"), "# Missing frontmatter\n", "utf8");
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "break source frontmatter");

		await expect(manager(agentDir, repository).install()).rejects.toThrow("missing YAML frontmatter");
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
		expect(existsSync(path.join(agentDir, "skills"))).toBe(false);
	});

	it("rejects a source skill whose identity does not match its directory", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const skillFile = path.join(libraryRoot, "repo-skills", "alpha-skill", "SKILL.md");
		await writeFile(skillFile, (await readFile(skillFile, "utf8")).replace("name: alpha-skill", "name: beta-skill"));
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "break source identity");

		await expect(manager(agentDir, repository).install()).rejects.toThrow("name must match directory basename");
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
	});

	it.skipIf(process.platform === "win32")("rejects case-variant source skill paths before installation", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		cpSync(
			path.join(libraryRoot, "repo-skills", "alpha-skill"),
			path.join(libraryRoot, "repo-skills", "ALPHA-SKILL"),
			{ recursive: true },
		);
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "add case-variant source path");

		await expect(manager(agentDir, repository).install()).rejects.toThrow("name must match directory basename");
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
	});

	it.skipIf(process.platform === "win32")("rejects symbolic links in the source snapshot", async () => {
		const root = await makeTempRoot();
		const { repository, libraryRoot } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		await symlink(
			"../SKILL.md",
			path.join(libraryRoot, "repo-skills", "alpha-skill", "references", "linked-skill.md"),
		);
		git(repository, "add", "research-skills-library");
		git(repository, "commit", "-m", "add unsafe source symlink");

		await expect(manager(agentDir, repository).install()).rejects.toThrow("contains a symbolic link");
		expect(existsSync(path.join(agentDir, "repo-skills-library.json"))).toBe(false);
	});

	it.skipIf(process.platform === "win32")("rejects special files in the live tree before mutation", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const stateFile = path.join(agentDir, "repo-skills-library.json");
		const stateBefore = await readFile(stateFile, "utf8");
		const fifo = path.join(agentDir, "skills", "repo-skills", "alpha-skill", "references", "unsafe.fifo");
		execFileSync("mkfifo", [fifo]);

		await expect(libraryManager.update()).rejects.toThrow("contains a non-regular file");
		expect(await readFile(stateFile, "utf8")).toBe(stateBefore);
		expect(await readFile(path.join(agentDir, "skills", "repo-skills", "alpha-skill", "SKILL.md"), "utf8")).toContain(
			"source-v1",
		);
	});

	it("rejects path traversal in managed root file state", async () => {
		const root = await makeTempRoot();
		const { repository } = await createSourceRepository(root);
		const agentDir = path.join(root, "agent");
		const libraryManager = manager(agentDir, repository);
		await libraryManager.install();
		const stateFile = path.join(agentDir, "repo-skills-library.json");
		const state = JSON.parse(await readFile(stateFile, "utf8"));
		state.managedRootFiles["../outside"] = "sha256:invalid";
		await writeFile(stateFile, JSON.stringify(state), "utf8");

		const status = libraryManager.status();

		expect(status.issues.join("\n")).toContain("Invalid managed root file entry ../outside");
		await expect(libraryManager.update()).rejects.toThrow("Invalid managed root file entry ../outside");
	});
});
