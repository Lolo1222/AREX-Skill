#!/usr/bin/env node
/**
 * Programmatically rebuild DisCo's repo-skills-router.
 *
 * This helper is intended to run as part of the locked repo-skill import
 * transaction. It treats repo-skills-router as generated state: it reads the
 * repo-skills collection, reads structured routing metadata, writes the
 * sibling two-layer router files, removes legacy side-channel router files,
 * and validates the result before returning success.
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const ROUTER_ID = "repo-skills-router";
const METADATA_PATH = path.join("references", "repo-routing-metadata.json");
const SCENARIO_REGISTRY_PATH = path.join("references", "scenario-registry.json");
const DEFAULT_TIMEOUT_SECONDS = 900;
const START_MARKER = "<!-- DISCO_REPO_SKILLS_ROUTER_SCENARIOS:START -->";
const END_MARKER = "<!-- DISCO_REPO_SKILLS_ROUTER_SCENARIOS:END -->";
const LEGACY_ROUTER_FILES = new Set([
	path.join("references", "repo-skill-index.md"),
	path.join("references", "repo-skill-scenarios.md"),
	path.join("references", "repo-skills.md"),
]);
const SCRIPT_PATH = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SCRIPT_PATH);

const SUGGESTED_SCENARIOS = [
	[
		"embedding-retrieval-workflows",
		"Embeddings, reranking, vector search, retrieval model training, corpus indexing, and search quality work.",
	],
	[
		"llm-serving-inference-workflows",
		"Model serving, inference APIs, batching, OpenAI-compatible endpoints, decoding, and deployment troubleshooting.",
	],
	[
		"training-finetuning-workflows",
		"Supervised training, fine-tuning, distributed training, adapters, checkpoints, and evaluation loops.",
	],
	[
		"data-preparation-evaluation-workflows",
		"Dataset conversion, validation, metrics, benchmark runners, data layouts, and eval harnesses.",
	],
	[
		"agent-tooling-workflows",
		"Agent frameworks, tool execution, workflow engines, memory systems, and orchestration utilities.",
	],
	[
		"ml-infrastructure-ops-workflows",
		"Deployment, monitoring, scaling, CUDA/backend setup, storage, queues, and operational troubleshooting.",
	],
	[
		"repo-maintenance-development-workflows",
		"Contributor workflows, code generation, testing policy, release maintenance, and docs upkeep.",
	],
];

class RouterError extends Error {
	constructor(message) {
		super(message);
		this.name = "RouterError";
	}
}

function defaultAgentDir() {
	return process.env.DISCO_CODING_AGENT_DIR || path.join(os.homedir(), ".disco", "agent");
}

function bundledRouterTemplateDir() {
	return path.resolve(SCRIPT_DIR, "..", "..", ROUTER_ID);
}

function withImportLockScript() {
	return path.join(SCRIPT_DIR, "with_import_lock.mjs");
}

function expandHome(value) {
	if (!value) {
		return value;
	}
	return value.replace(/^~(?=$|[\\/])/, os.homedir());
}

function readText(filePath) {
	return fs.readFileSync(filePath, "utf8");
}

function writeText(filePath, text) {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, text, "utf8");
}

function exists(filePath) {
	return fs.existsSync(filePath);
}

function isDirectory(filePath) {
	try {
		return fs.statSync(filePath).isDirectory();
	} catch {
		return false;
	}
}

function isFile(filePath) {
	try {
		return fs.statSync(filePath).isFile();
	} catch {
		return false;
	}
}

function loadJson(filePath) {
	try {
		return JSON.parse(readText(filePath));
	} catch (error) {
		if (error && error.code === "ENOENT") {
			throw new RouterError(`routing metadata file does not exist: ${filePath}`);
		}
		throw new RouterError(`routing metadata file is not valid JSON: ${filePath}: ${error.message}`);
	}
}

function stableJson(value) {
	return `${JSON.stringify(value, null, 2)}\n`;
}

function parseFrontmatter(text) {
	if (!text.startsWith("---\n")) {
		return {};
	}
	const end = text.indexOf("\n---\n", 4);
	if (end < 0) {
		return {};
	}
	const parsed = {};
	for (const line of text.slice(4, end).split(/\r?\n/)) {
		if (!line.includes(":") || /^[ \t]/.test(line)) {
			continue;
		}
		const index = line.indexOf(":");
		const key = line.slice(0, index).trim();
		let value = line.slice(index + 1).trim();
		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}
		parsed[key] = value;
	}
	return parsed;
}

function frontmatterBlock(text) {
	if (!text.startsWith("---\n")) {
		return "";
	}
	const end = text.indexOf("\n---\n", 4);
	return end < 0 ? "" : text.slice(4, end);
}

function hasDoubleQuotedFrontmatterValue(text, key) {
	const prefix = `${key}:`;
	for (const line of frontmatterBlock(text).split(/\r?\n/)) {
		if (line.startsWith(prefix)) {
			const value = line.slice(prefix.length).trim();
			return value.length >= 2 && value.startsWith('"') && value.endsWith('"');
		}
	}
	return false;
}

function hasFrontmatterValue(text, key, expected) {
	const prefix = `${key}:`;
	for (const line of frontmatterBlock(text).split(/\r?\n/)) {
		if (line.startsWith(prefix)) {
			return line.slice(prefix.length).trim().toLowerCase() === expected.toLowerCase();
		}
	}
	return false;
}

function routerIsModelDisabled(text, source = "router SKILL.md") {
	const block = frontmatterBlock(text);
	if (!block) {
		throw new RouterError(`${source} must contain YAML frontmatter`);
	}
	let frontmatter;
	try {
		frontmatter = parseYaml(block);
	} catch (error) {
		throw new RouterError(`${source} has invalid YAML frontmatter: ${error.message}`);
	}
	if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
		throw new RouterError(`${source} frontmatter must be a mapping`);
	}
	if (!("disable-model-invocation" in frontmatter)) {
		return false;
	}
	if (frontmatter["disable-model-invocation"] !== true) {
		throw new RouterError(`${source} disable-model-invocation must be true when present`);
	}
	return true;
}

function metadataFrontmatterValue(text, key) {
	const block = frontmatterBlock(text);
	if (!block) {
		return undefined;
	}
	try {
		const frontmatter = parseYaml(block);
		if (!frontmatter || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
			return undefined;
		}
		const metadata = frontmatter.metadata;
		if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
			return undefined;
		}
		return metadata[key];
	} catch {
		return undefined;
	}
}

function validateSkillFrontmatter(
	skillDir,
	{ requireDisabled, requireQuotedDescription = true, requireDiscoRole = true },
) {
	const skillMd = path.join(skillDir, "SKILL.md");
	if (!isFile(skillMd)) {
		throw new RouterError(`skill is missing SKILL.md: ${skillDir}`);
	}
	const text = readText(skillMd);
	const frontmatter = parseFrontmatter(text);
	if (!Object.keys(frontmatter).length) {
		throw new RouterError(`${skillMd} must contain YAML frontmatter`);
	}
	const name = frontmatter.name || "";
	const description = frontmatter.description || "";
	if (!name) {
		throw new RouterError(`${skillMd} frontmatter must contain name`);
	}
	if (name !== path.basename(skillDir)) {
		throw new RouterError(`${skillMd} frontmatter name must match directory basename ${JSON.stringify(path.basename(skillDir))}`);
	}
	if (!/^[a-z0-9][a-z0-9-]{0,63}$/.test(name) || name.startsWith("-") || name.endsWith("-") || name.includes("--")) {
		throw new RouterError(`${skillMd} frontmatter name must be a canonical lowercase-hyphen skill id`);
	}
	if (!description.trim()) {
		throw new RouterError(`${skillMd} frontmatter must contain a non-empty description`);
	}
	if (requireQuotedDescription && !hasDoubleQuotedFrontmatterValue(text, "description")) {
		throw new RouterError(`${skillMd} frontmatter description must be double-quoted`);
	}
	if (requireDisabled === true && !hasFrontmatterValue(text, "disable-model-invocation", "true")) {
		throw new RouterError(`${skillMd} frontmatter must contain disable-model-invocation: true`);
	}
	if (requireDisabled === false && hasFrontmatterValue(text, "disable-model-invocation", "true")) {
		throw new RouterError(`${skillMd} must stay model-visible and must not contain disable-model-invocation: true`);
	}
	if (requireDiscoRole && metadataFrontmatterValue(text, "disco-role") !== "operating") {
		throw new RouterError(`${skillMd} metadata.disco-role must be operating`);
	}
}

function validateLiveSkillTree(skillDir) {
	validateSkillFrontmatter(skillDir, { requireDisabled: true });
	const subskillsDir = path.join(skillDir, "sub-skills");
	if (!isDirectory(subskillsDir)) {
		return;
	}
	for (const name of fs.readdirSync(subskillsDir).sort()) {
		const subskillDir = path.join(subskillsDir, name);
		if (isDirectory(subskillDir) && isFile(path.join(subskillDir, "SKILL.md"))) {
			validateSkillFrontmatter(subskillDir, { requireDisabled: true });
		}
	}
}

function walkFiles(root) {
	const files = [];
	if (!isDirectory(root)) {
		return files;
	}
	for (const name of fs.readdirSync(root).sort()) {
		const current = path.join(root, name);
		if (isDirectory(current)) {
			files.push(...walkFiles(current));
		} else if (isFile(current)) {
			files.push(current);
		}
	}
	return files;
}

function toPosix(relativePath) {
	return relativePath.split(path.sep).join("/");
}

function readSkill(skillDir) {
	const skillMd = path.join(skillDir, "SKILL.md");
	const text = readText(skillMd);
	const frontmatter = parseFrontmatter(text);
	const subskillsDir = path.join(skillDir, "sub-skills");
	const subskills = isDirectory(subskillsDir)
		? fs.readdirSync(subskillsDir).filter((name) => isFile(path.join(subskillsDir, name, "SKILL.md"))).sort()
		: [];
	const referencesDir = path.join(skillDir, "references");
	const references = walkFiles(referencesDir).map((file) => toPosix(path.relative(skillDir, file))).sort();
	const scriptsDir = path.join(skillDir, "scripts");
	const scripts = walkFiles(scriptsDir).map((file) => toPosix(path.relative(skillDir, file))).sort();

	return {
		skillId: path.basename(skillDir),
		name: frontmatter.name || path.basename(skillDir),
		description: frontmatter.description || `Use the \`${path.basename(skillDir)}\` repo skill.`,
		subskills,
		references,
		scripts,
	};
}

function readLiveSkills(repoSkillsRoot, includeSkillIds = []) {
	if (!isDirectory(repoSkillsRoot)) {
		return new Map();
	}
	const includeSet = includeSkillIds.length ? new Set(includeSkillIds) : null;
	const skills = new Map();
	for (const name of fs.readdirSync(repoSkillsRoot).sort()) {
		const directory = path.join(repoSkillsRoot, name);
		if (!isDirectory(directory)) {
			continue;
		}
		if (name === ROUTER_ID) {
			throw new RouterError(`${ROUTER_ID} must be a sibling of repo-skills, not a member of ${repoSkillsRoot}`);
		}
		const skillFile = path.join(directory, "SKILL.md");
		if (!isFile(skillFile)) {
			continue;
		}
		if (metadataFrontmatterValue(readText(skillFile), "disco-role") === "meta") {
			throw new RouterError(`meta skill is not allowed in the repo-skills collection: ${directory}`);
		}
		if (includeSet && !includeSet.has(name)) {
			continue;
		}
		validateLiveSkillTree(directory);
		skills.set(name, readSkill(directory));
	}
	if (includeSet) {
		const missing = [...includeSet].filter((skillId) => !skills.has(skillId)).sort();
		if (missing.length) {
			throw new RouterError(`--include-skill references missing repo skills: ${missing.join(", ")}`);
		}
	}
	return skills;
}

function cleanSlug(value) {
	return String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function titleFromSlug(slug) {
	return slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function normalizeSentence(text, limit = 700) {
	text = String(text ?? "").split(/\s+/).filter(Boolean).join(" ");
	if (!text) {
		return "";
	}
	if (text.length > limit) {
		const truncated = text.slice(0, limit);
		const space = truncated.lastIndexOf(" ");
		text = (space >= 0 ? truncated.slice(0, space) : truncated).replace(/[.,;:]+$/g, "") + ".";
	}
	return text;
}

function splitSentences(text) {
	const normalized = String(text ?? "").split(/\s+/).filter(Boolean).join(" ");
	if (!normalized) {
		return [];
	}
	const sentences = [];
	let start = 0;
	for (let index = 0; index < normalized.length; index += 1) {
		const char = normalized[index];
		if (!/[.!?]/.test(char)) {
			continue;
		}
		const previous = normalized[index - 1] || "";
		const next = normalized[index + 1] || "";
		if (char === "." && /[A-Za-z0-9_]/.test(previous) && /[A-Za-z0-9_]/.test(next)) {
			continue;
		}
		if (next && !/\s|["')\]}]/.test(next)) {
			continue;
		}
		const sentence = normalizeSentence(normalized.slice(start, index + 1).trim(), 2000);
		if (sentence) {
			sentences.push(sentence);
		}
		start = index + 1;
	}
	const tail = normalizeSentence(normalized.slice(start).trim(), 2000);
	if (tail) {
		sentences.push(tail);
	}
	return sentences;
}

function isFragmentSentence(sentence) {
	const text = String(sentence ?? "").trim();
	if (!text) {
		return true;
	}
	const stripped = text.replace(/[.!?]+$/g, "").trim();
	if (!stripped) {
		return true;
	}
	if (/^(md|py|json|yaml|yml|toml|sh|txt)\b/i.test(stripped)) {
		return true;
	}
	if (/^(and|or|but|so|then|than|rather than)\b/i.test(stripped)) {
		return true;
	}
	if (/\b(and|or|for|when|with|to|by|from|only|route to|as|than|rather than)$/.test(stripped)) {
		return true;
	}
	return false;
}

function sentenceKey(text) {
	return normalizeSentence(text, 2000)
		.toLowerCase()
		.replace(/[`"'()[\]{}]/g, "")
		.replace(/[.,;:!?]+$/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function uniqueStrings(values) {
	const seen = new Set();
	const unique = [];
	for (const value of values) {
		const normalized = normalizeSentence(value);
		if (!normalized || seen.has(normalized)) {
			continue;
		}
		seen.add(normalized);
		unique.push(normalized);
	}
	return unique;
}

function uniqueSkillIds(values) {
	const seen = new Set();
	const unique = [];
	for (const value of values) {
		const skillId = cleanSlug(value);
		if (!skillId || seen.has(skillId)) {
			continue;
		}
		seen.add(skillId);
		unique.push(skillId);
	}
	return unique;
}

function mergeSentenceFields(values, limit = 900) {
	const seen = [];
	const sentences = [];
	for (const value of values) {
		for (const sentence of splitSentences(value)) {
			if (isFragmentSentence(sentence)) {
				continue;
			}
			const key = sentenceKey(sentence);
			if (!key) {
				continue;
			}
			const duplicate = seen.some((existing) => {
				if (existing === key) {
					return true;
				}
				const shorter = existing.length < key.length ? existing : key;
				const longer = existing.length < key.length ? key : existing;
				return shorter.length >= 80 && longer.startsWith(shorter);
			});
			if (duplicate) {
				continue;
			}
			const candidate = normalizeSentence(sentence, 2000);
			const nextLength = sentences.join(" ").length + (sentences.length ? 1 : 0) + candidate.length;
			if (sentences.length && nextLength > limit) {
				continue;
			}
			seen.push(key);
			sentences.push(candidate);
		}
	}
	if (sentences.length) {
		return sentences.join(" ");
	}
	return normalizeSentence(uniqueStrings(values).join(" "), limit);
}

function stripRenderedFieldPrefix(text, fieldName) {
	const labels = {
		role: ["role"],
		read_when: ["read when", "when to read"],
		best_for: ["best for"],
		avoid_when: ["avoid when"],
		selection_guidance: ["selection guidance", "how to choose"],
	};
	for (const label of labels[fieldName] || []) {
		const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
		text = text.replace(new RegExp(`^${escaped}\\s*:?\\s+`, "i"), "");
	}
	return text.trim();
}

function normalizeSkillReferenceText(value, skillId, { fieldName = "" } = {}) {
	let text = normalizeSentence(value, 1200);
	if (!text) {
		return "";
	}
	text = stripRenderedFieldPrefix(text, fieldName);
	text = text.replace(/\b(Choose|Use|Prefer|Select) this skill\b/gi, (_match, verb) => `${verb} \`${skillId}\``);
	text = text.replace(/\b(Choose|Use|Prefer|Select) it\b/gi, (_match, verb) => `${verb} \`${skillId}\``);
	text = text.replace(/\b[Rr]oute here\b/g, (match) => `${match[0] === "R" ? "Route" : "route"} to \`${skillId}\``);
	text = text
		.replace(/,\s*(and|or)\.$/i, ".")
		.replace(/\s+(and|or|but|so|then|than|rather than)\.$/i, ".")
		.replace(/\s+(and|or|for|when|with|to|by|from|only|route to|as|than|rather than)$/i, "")
		.trim();
	const stripped = text.replace(/[.!?]+$/g, "").trim();
	if (
		!stripped ||
		/^[).,:;]+/.test(stripped) ||
		/^(md|py|json|yaml|yml|toml|sh|txt|pth|app|main|viz|eval)\b/i.test(stripped)
	) {
		return "";
	}
	if (fieldName === "role" && /^\d+\b/.test(stripped)) {
		throw new RouterError(`routing metadata role for ${skillId} starts with a numeric artifact: ${text}`);
	}
	if (!/[.!?]$/.test(text)) {
		text = `${text}.`;
	}
	return text;
}

function normalizeScenarioGuidanceText(value) {
	let text = normalizeSentence(value, 1200);
	if (!text) {
		return "";
	}
	text = text.replace(/\b(Choose|Use|Prefer|Select) this skill\b/gi, (_match, verb) => `${verb} the matching repo skill`);
	text = text.replace(/\b(Choose|Use|Prefer|Select) it\b/gi, (_match, verb) => `${verb} the matching repo skill`);
	text = text.replace(/\b[Rr]oute here\b/g, (match) => `${match[0] === "R" ? "Route" : "route"} to the matching scenario`);
	return normalizeSentence(text, 1200);
}

function isLegacyDefaultReadWhen(text) {
	return /\bThe request names\b/.test(text)
		&& /\bpackage-specific APIs, CLIs, configs, artifacts, errors, or repository maintenance for that project\./.test(text);
}

function isLegacyDefaultAvoidWhen(text) {
	return /\banother repo skill in this scenario names the user's package, model family, data format, serving backend, or workflow more directly\./i.test(text);
}

function humanizeSlug(value) {
	return value.replace(/[-_]/g, " ");
}

function defaultEntryPoints(skill) {
	const entries = [`${skill.skillId}/SKILL.md`];
	for (const subskill of skill.subskills.slice(0, 5)) {
		entries.push(`${skill.skillId}/sub-skills/${subskill}/`);
	}
	for (const reference of skill.references) {
		if (reference === "references/repo-routing-metadata.json") {
			continue;
		}
		entries.push(`${skill.skillId}/${reference}`);
		if (entries.length >= 6) {
			break;
		}
	}
	if (entries.length < 6) {
		for (const script of skill.scripts.slice(0, 6 - entries.length)) {
			entries.push(`${skill.skillId}/${script}`);
		}
	}
	return entries;
}

function defaultBestFor(skill) {
	if (!skill.subskills.length) {
		return "the root workflow described in the skill.";
	}
	const names = skill.subskills.map(humanizeSlug);
	if (names.length === 1) {
		return `${names[0]}.`;
	}
	if (names.length === 2) {
		return `${names[0]} and ${names[1]}.`;
	}
	if (names.length <= 5) {
		return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}.`;
	}
	return `${names.slice(0, 4).join(", ")}, and ${names.length - 4} other focused workflows.`;
}

function defaultReadWhen(skill) {
	const names = [skill.name, skill.skillId, skill.skillId.replace("-repo-skill", "")];
	const seen = [];
	for (const name of names) {
		if (name && !seen.includes(name)) {
			seen.push(name);
		}
	}
	const terms = seen.slice(0, 4).map((name) => `\`${name}\``).join(", ");
	return `The request names ${terms} or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.`;
}

function defaultAvoidWhen() {
	return "another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.";
}

function coerceList(value, fieldName) {
	if (Array.isArray(value)) {
		return value;
	}
	if (value == null) {
		return [];
	}
	throw new RouterError(`${fieldName} must be a list`);
}

function coerceStr(value, fieldName, { required = false } = {}) {
	if (value == null) {
		if (required) {
			throw new RouterError(`${fieldName} is required`);
		}
		return "";
	}
	if (typeof value !== "string") {
		throw new RouterError(`${fieldName} must be a string`);
	}
	return normalizeSentence(value);
}

function coerceBool(value, fieldName, { defaultValue = false } = {}) {
	if (value == null) {
		return defaultValue;
	}
	if (typeof value !== "boolean") {
		throw new RouterError(`${fieldName} must be a boolean`);
	}
	return value;
}

function loadScenarioRegistry(routerDir, templateDir) {
	const liveRegistryPath = path.join(routerDir, SCENARIO_REGISTRY_PATH);
	const templateRegistryPath = path.join(templateDir, SCENARIO_REGISTRY_PATH);
	if (exists(liveRegistryPath)) {
		return normalizeScenarioRegistry(loadJson(liveRegistryPath), liveRegistryPath);
	}
	if (exists(templateRegistryPath)) {
		return normalizeScenarioRegistry(loadJson(templateRegistryPath), templateRegistryPath);
	}
	return null;
}

function normalizeScenarioRegistry(data, sourcePath) {
	if (!data || typeof data !== "object" || Array.isArray(data)) {
		throw new RouterError(`${sourcePath} must contain a JSON object`);
	}
	const rawScenarios = data.scenarios;
	if (!rawScenarios || typeof rawScenarios !== "object" || Array.isArray(rawScenarios)) {
		throw new RouterError(`${sourcePath}: scenarios must be an object keyed by canonical scenario id`);
	}
	const scenarios = new Map();
	const aliasToCanonical = new Map();
	const enforceKnownScenarios = coerceBool(data.enforce_known_scenarios, `${sourcePath}.enforce_known_scenarios`, {
		defaultValue: true,
	});

	for (const rawId of Object.keys(rawScenarios).sort()) {
		const scenarioId = cleanSlug(rawId);
		if (!scenarioId || scenarioId !== rawId) {
			throw new RouterError(`${sourcePath}: scenario id must already be canonical lowercase-hyphen: ${rawId}`);
		}
		const raw = rawScenarios[rawId];
		if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
			throw new RouterError(`${sourcePath}: scenario ${rawId} must be an object`);
		}
		const title = coerceStr(raw.title, `${sourcePath}.scenarios.${rawId}.title`, { required: true });
		const whenToRead = coerceStr(raw.when_to_read ?? raw.when, `${sourcePath}.scenarios.${rawId}.when_to_read`, {
			required: true,
		});
		const howToChoose = coerceStr(
			raw.how_to_choose ?? raw.selection_guidance,
			`${sourcePath}.scenarios.${rawId}.how_to_choose`,
			{ required: true },
		);
		const aliases = coerceList(raw.aliases, `${sourcePath}.scenarios.${rawId}.aliases`)
			.map((value) => cleanSlug(coerceStr(value, `${sourcePath}.scenarios.${rawId}.aliases[]`)))
			.filter(Boolean)
			.sort();
		scenarios.set(scenarioId, {
			scenarioId,
			title,
			whenToRead,
			howToChoose: normalizeScenarioGuidanceText(howToChoose),
			aliases,
			splitGuidance: normalizeScenarioGuidanceText(
				coerceStr(raw.split_guidance, `${sourcePath}.scenarios.${rawId}.split_guidance`),
			),
		});
	}

	for (const [scenarioId, scenario] of scenarios) {
		for (const alias of scenario.aliases) {
			if (alias === scenarioId) {
				throw new RouterError(`${sourcePath}: scenario ${scenarioId} lists itself as an alias`);
			}
			if (scenarios.has(alias)) {
				throw new RouterError(`${sourcePath}: alias ${alias} for ${scenarioId} is also a canonical scenario`);
			}
			const previous = aliasToCanonical.get(alias);
			if (previous && previous !== scenarioId) {
				throw new RouterError(`${sourcePath}: alias ${alias} maps to both ${previous} and ${scenarioId}`);
			}
			aliasToCanonical.set(alias, scenarioId);
		}
	}

	return { version: data.version || 1, enforceKnownScenarios, scenarios, aliasToCanonical };
}

function scenarioRegistryToJson(registry) {
	const scenarios = {};
	for (const [scenarioId, scenario] of [...registry.scenarios].sort((left, right) => left[0].localeCompare(right[0]))) {
		const entry = {
			title: scenario.title,
			when_to_read: scenario.whenToRead,
			how_to_choose: scenario.howToChoose,
		};
		if (scenario.aliases?.length) {
			entry.aliases = [...scenario.aliases].sort();
		}
		if (scenario.splitGuidance) {
			entry.split_guidance = scenario.splitGuidance;
		}
		scenarios[scenarioId] = entry;
	}
	return {
		version: registry.version || 1,
		enforce_known_scenarios: registry.enforceKnownScenarios,
		scenarios,
	};
}

function filterRegistryForSubset(registry, scenarios, excludedSkillIds, subsetMode) {
	if (!registry || !subsetMode) {
		return registry;
	}

	const nextScenarios = new Map();
	const nextAliasToCanonical = new Map();
	for (const scenarioId of scenarios.keys()) {
		const rendered = scenarios.get(scenarioId);
		const original = registry.scenarios.get(scenarioId) || {};
		const aliases = (original.aliases || [])
			.filter((alias) => !textMentionsAnySkillId(alias, excludedSkillIds))
			.sort();
		nextScenarios.set(scenarioId, {
			...original,
			title: filterSubsetText(rendered.title || original.title, excludedSkillIds, titleFromSlug(scenarioId)),
			whenToRead: filterSubsetText(
				rendered.whenToRead || original.whenToRead,
				excludedSkillIds,
				`Requests about ${humanizeSlug(scenarioId)}.`,
			),
			howToChoose: filterSubsetText(
				rendered.howToChoose || original.howToChoose,
				excludedSkillIds,
				"Choose among the selected repo skills by the task surface named by the request.",
			),
			aliases,
			splitGuidance: filterSubsetText(original.splitGuidance, excludedSkillIds, ""),
		});
		for (const alias of aliases) {
			nextAliasToCanonical.set(alias, scenarioId);
		}
	}

	return {
		...registry,
		scenarios: nextScenarios,
		aliasToCanonical: nextAliasToCanonical,
	};
}

function extendRegistryWithApprovedNewScenarios(registry, data) {
	if (!registry || !data.scenarios || typeof data.scenarios !== "object" || Array.isArray(data.scenarios)) {
		return registry;
	}
	const next = {
		version: registry.version,
		enforceKnownScenarios: registry.enforceKnownScenarios,
		scenarios: new Map(registry.scenarios),
		aliasToCanonical: new Map(registry.aliasToCanonical),
	};
	for (const rawId of Object.keys(data.scenarios).sort()) {
		const scenarioId = cleanSlug(rawId);
		if (!scenarioId || next.scenarios.has(scenarioId) || next.aliasToCanonical.has(scenarioId)) {
			continue;
		}
		const raw = data.scenarios[rawId];
		if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
			continue;
		}
		if (!raw.allow_new && !raw.allowNew && !raw.allow) {
			continue;
		}
		const title = coerceStr(raw.title, `scenarios.${rawId}.title`, { required: true });
		const whenToRead = coerceStr(raw.when_to_read ?? raw.when, `scenarios.${rawId}.when_to_read`, { required: true });
		const howToChoose = coerceStr(raw.how_to_choose ?? raw.selection_guidance, `scenarios.${rawId}.how_to_choose`, {
			required: true,
		});
		const whyNotExisting = coerceStr(raw.why_not_existing, `scenarios.${rawId}.why_not_existing`, { required: true });
		const expectedReuse = coerceStr(raw.expected_future_reuse, `scenarios.${rawId}.expected_future_reuse`, {
			required: true,
		});
		next.scenarios.set(scenarioId, {
			scenarioId,
			title,
			whenToRead,
			howToChoose: normalizeScenarioGuidanceText(howToChoose),
			aliases: [],
			splitGuidance: normalizeScenarioGuidanceText(mergeSentenceFields([whyNotExisting, expectedReuse])),
		});
	}
	return next;
}

function loadRoutingMetadata(skillsRoot, metadataFile) {
	const sourcePath = metadataFile || path.join(skillsRoot, ".repo-skills-router-metadata.json");
	if (!exists(sourcePath)) {
		throw new RouterError(
			`routing metadata file is required; pass --metadata-file or create ${path.join(skillsRoot, ".repo-skills-router-metadata.json")}`,
		);
	}
	const data = loadJson(sourcePath);
	if (!data || typeof data !== "object" || Array.isArray(data)) {
		throw new RouterError("routing metadata root must be an object");
	}
	return data;
}

function sectionText(text, heading) {
	const regex = new RegExp(`^## ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
	const match = regex.exec(text);
	if (!match) {
		return "";
	}
	const start = match.index + match[0].length;
	const rest = text.slice(start);
	const next = /^## /m.exec(rest);
	const end = next ? start + next.index : text.length;
	return normalizeSentence(text.slice(start, end));
}

function fieldValue(block, fieldName) {
	const regex = new RegExp(`^${fieldName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*(.+)$`, "m");
	const match = regex.exec(block);
	return match ? normalizeSentence(match[1]) : "";
}

function parseEntryPoints(value) {
	const backticked = [...value.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
	if (backticked.length) {
		return backticked.map((item) => normalizeSentence(item)).filter(Boolean);
	}
	return value.split(/,\s*/).map((item) => normalizeSentence(item)).filter(Boolean);
}

function normalizeRecoveredEntryPoints(skillId, values) {
	return values.map((value) => {
		if (value === "SKILL.md") {
			return `${skillId}/SKILL.md`;
		}
		if (value.startsWith("sub-skills/") || value.startsWith("references/") || value.startsWith("scripts/")) {
			return `${skillId}/${value}`;
		}
		return value;
	});
}

function parseExistingRouterMetadata(routerDir, liveSkills) {
	const scenariosDir = path.join(routerDir, "references", "scenarios");
	const recovered = { skills: {}, scenarios: {} };
	if (!isDirectory(scenariosDir)) {
		return recovered;
	}

	for (const fileName of fs.readdirSync(scenariosDir).sort()) {
		if (!fileName.endsWith(".md") || fileName === "README.md") {
			continue;
		}
		const page = path.join(scenariosDir, fileName);
		const scenarioId = cleanSlug(path.basename(fileName, ".md"));
		if (!scenarioId) {
			continue;
		}
		const text = readText(page);
		const titleMatch = /^#\s+(.+)$/m.exec(text);
		const title = titleMatch ? normalizeSentence(titleMatch[1]) : titleFromSlug(scenarioId);
		const whenToRead = sectionText(text, "When To Read") || `Requests about ${humanizeSlug(scenarioId)}.`;
		const howToChoose = sectionText(text, "How To Choose").split(/\s+###\s+/u, 1)[0].trim();
		recovered.scenarios[scenarioId] = { title, when_to_read: whenToRead, how_to_choose: howToChoose };

		const entryMatches = [...text.matchAll(/^### `([^`]+)`\s*$/gm)];
		for (let index = 0; index < entryMatches.length; index += 1) {
			const match = entryMatches[index];
			const skillId = match[1].trim();
			if (!liveSkills.has(skillId)) {
				continue;
			}
			const start = match.index + match[0].length;
			let end = index + 1 < entryMatches.length ? entryMatches[index + 1].index : text.length;
			const subBlock = text.slice(start, end);
			const howMatch = /^## How To Choose\s*$/m.exec(subBlock);
			if (howMatch) {
				end = start + howMatch.index;
			}
			const block = text.slice(start, end);
			const rawPoints = fieldValue(block, "Useful entry points");
			const readWhen = fieldValue(block, "Read when");
			const avoidWhen = fieldValue(block, "Avoid when");
			recovered.skills[skillId] ??= { scenarios: [] };
			recovered.skills[skillId].scenarios.push({
				id: scenarioId,
				title,
				when_to_read: whenToRead,
				role: fieldValue(block, "Role"),
				read_when: isLegacyDefaultReadWhen(readWhen) ? "" : readWhen,
				best_for: fieldValue(block, "Best for"),
				avoid_when: isLegacyDefaultAvoidWhen(avoidWhen) ? "" : avoidWhen,
				useful_entry_points: normalizeRecoveredEntryPoints(skillId, parseEntryPoints(rawPoints)),
			});
		}
	}

	return recovered;
}

function resolveScenarioId(scenarioId, registry, scenarioDefault, fieldPrefix) {
	if (!registry) {
		return scenarioId;
	}
	const canonical = registry.aliasToCanonical.get(scenarioId) || scenarioId;
	if (registry.scenarios.has(canonical)) {
		return canonical;
	}
	if (!registry.enforceKnownScenarios) {
		return canonical;
	}
	const allowNew = scenarioDefault?.allowNew || scenarioDefault?.allow_new || scenarioDefault?.allow;
	if (!allowNew) {
		const known = [...registry.scenarios.keys()].sort().join(", ");
		throw new RouterError(
			`${fieldPrefix}.id uses unknown scenario ${scenarioId}. Use a canonical scenario or alias from repo-skills-router/references/scenario-registry.json, or declare scenarios.${scenarioId}.allow_new with split rationale. Known canonical scenarios: ${known}`,
		);
	}
	const whyNotExisting = normalizeSentence(scenarioDefault?.why_not_existing || scenarioDefault?.why_not_canonical || "");
	const expectedReuse = normalizeSentence(scenarioDefault?.expected_future_reuse || scenarioDefault?.future_reuse || "");
	if (!whyNotExisting || !expectedReuse) {
		throw new RouterError(
			`scenarios.${scenarioId} declares a new router scenario but must include why_not_existing and expected_future_reuse`,
		);
	}
	return canonical;
}

function mergeRoutingEntry(left, right) {
	return {
		scenario: left.scenario,
		whenToRead: left.whenToRead || right.whenToRead,
		title: left.title || right.title,
		role: left.role || right.role,
		readWhen: mergeSentenceFields([left.readWhen, right.readWhen]),
		bestFor: mergeSentenceFields([left.bestFor, right.bestFor]),
		avoidWhen: mergeSentenceFields([left.avoidWhen, right.avoidWhen]),
		usefulEntryPoints: uniqueStrings([...(left.usefulEntryPoints || []), ...(right.usefulEntryPoints || [])]),
		selectionGuidance: mergeSentenceFields([left.selectionGuidance, right.selectionGuidance], 1200),
	};
}

function normalizeRoutingMetadata(data, liveSkills, registry) {
	const rawSkills = data.skills;
	if (rawSkills == null) {
		throw new RouterError("routing metadata must contain a 'skills' object");
	}
	if (!rawSkills || typeof rawSkills !== "object" || Array.isArray(rawSkills)) {
		throw new RouterError("routing metadata 'skills' must be an object keyed by skill id");
	}

	const normalized = new Map();
	for (const skillId of Object.keys(rawSkills).sort()) {
		const raw = rawSkills[skillId];
		if (typeof skillId !== "string" || !skillId) {
			throw new RouterError("routing metadata skill ids must be non-empty strings");
		}
		if (skillId === ROUTER_ID) {
			continue;
		}
		if (!liveSkills.has(skillId)) {
			throw new RouterError(`routing metadata references missing live skill: ${skillId}`);
		}
		if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
			throw new RouterError(`routing metadata for ${skillId} must be an object`);
		}
		const rawScenarios = coerceList(raw.scenarios, `skills.${skillId}.scenarios`);
		const entriesByScenario = new Map();
		for (let index = 0; index < rawScenarios.length; index += 1) {
			let rawEntry = rawScenarios[index];
			const fieldPrefix = `skills.${skillId}.scenarios[${index}]`;
			if (typeof rawEntry === "string") {
				rawEntry = { id: rawEntry };
			}
			if (!rawEntry || typeof rawEntry !== "object" || Array.isArray(rawEntry)) {
				throw new RouterError(`${fieldPrefix} must be an object or string`);
			}
			const scenarioId = cleanSlug(coerceStr(rawEntry.id || rawEntry.scenario, `${fieldPrefix}.id`, { required: true }));
			if (!scenarioId) {
				throw new RouterError(`${fieldPrefix}.id must normalize to a non-empty lowercase-hyphen id`);
			}
			const scenarioDefault = data.scenarios?.[scenarioId];
			const canonicalScenarioId = resolveScenarioId(scenarioId, registry, scenarioDefault, fieldPrefix);
			const rawPoints = rawEntry.useful_entry_points ?? rawEntry.entry_points;
			let usefulEntryPoints = coerceList(rawPoints, `${fieldPrefix}.useful_entry_points`)
				.map((value) => normalizeSentence(value))
				.filter(Boolean);
			const entry = {
				scenario: canonicalScenarioId,
				whenToRead: coerceStr(rawEntry.when_to_read ?? rawEntry.when, `${fieldPrefix}.when_to_read`),
				title: coerceStr(rawEntry.title, `${fieldPrefix}.title`),
				role: normalizeSkillReferenceText(coerceStr(rawEntry.role, `${fieldPrefix}.role`), skillId, { fieldName: "role" }),
				readWhen: normalizeSkillReferenceText(coerceStr(rawEntry.read_when, `${fieldPrefix}.read_when`), skillId, {
					fieldName: "read_when",
				}),
				bestFor: normalizeSkillReferenceText(coerceStr(rawEntry.best_for, `${fieldPrefix}.best_for`), skillId, {
					fieldName: "best_for",
				}),
				avoidWhen: normalizeSkillReferenceText(coerceStr(rawEntry.avoid_when, `${fieldPrefix}.avoid_when`), skillId, {
					fieldName: "avoid_when",
				}),
				usefulEntryPoints,
				selectionGuidance: normalizeSkillReferenceText(
					coerceStr(rawEntry.selection_guidance ?? rawEntry.how_to_choose, `${fieldPrefix}.selection_guidance`),
					skillId,
					{ fieldName: "selection_guidance" },
				),
			};
			const previous = entriesByScenario.get(canonicalScenarioId);
			entriesByScenario.set(canonicalScenarioId, previous ? mergeRoutingEntry(previous, entry) : entry);
		}
		const entries = [...entriesByScenario.values()];
		if (!entries.length) {
			throw new RouterError(`routing metadata for ${skillId} must include at least one scenario`);
		}
		normalized.set(skillId, { skillId, entries });
	}

	const missingMetadata = [...liveSkills.keys()].filter((skillId) => !normalized.has(skillId)).sort();
	if (missingMetadata.length) {
		throw new RouterError(
			`routing metadata is missing live repo skills: ${missingMetadata.join(", ")}. Add each skill to the metadata or remove stale skill directories before rebuilding.`,
		);
	}

	return normalized;
}

function scenarioDefaults(data, registry) {
	const defaults = new Map();
	if (registry) {
		for (const [scenarioId, scenario] of registry.scenarios) {
			defaults.set(scenarioId, {
				title: scenario.title,
				whenToRead: scenario.whenToRead,
				howToChoose: scenario.howToChoose,
			});
		}
	}
	const rawDefaults = data.scenarios || {};
	if (rawDefaults == null) {
		return defaults;
	}
	if (!rawDefaults || typeof rawDefaults !== "object" || Array.isArray(rawDefaults)) {
		throw new RouterError("routing metadata 'scenarios' must be an object when present");
	}
	for (const rawId of Object.keys(rawDefaults)) {
		const raw = rawDefaults[rawId];
		if (typeof rawId !== "string") {
			throw new RouterError("scenario metadata keys must be strings");
		}
		const scenarioId = cleanSlug(rawId);
		if (!scenarioId) {
			throw new RouterError(`scenario metadata key ${JSON.stringify(rawId)} normalizes to empty`);
		}
		const canonicalScenarioId = registry?.aliasToCanonical.get(scenarioId) || scenarioId;
		if (registry?.scenarios.has(canonicalScenarioId)) {
			continue;
		}
		if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
			throw new RouterError(`scenario metadata for ${rawId} must be an object`);
		}
		defaults.set(canonicalScenarioId, {
			title: coerceStr(raw.title, `scenarios.${rawId}.title`),
			whenToRead: coerceStr(raw.when_to_read ?? raw.when, `scenarios.${rawId}.when_to_read`),
			howToChoose: normalizeScenarioGuidanceText(
				coerceStr(raw.how_to_choose ?? raw.selection_guidance, `scenarios.${rawId}.how_to_choose`),
			),
		});
	}
	return defaults;
}

function buildScenarios(routing, defaults, liveSkills, excludedSkillIds = []) {
	const byScenario = new Map();
	for (const [skillId, skillRouting] of routing) {
		for (const entry of skillRouting.entries) {
			const list = byScenario.get(entry.scenario) || [];
			list.push([skillId, entry]);
			byScenario.set(entry.scenario, list);
		}
	}

	const scenarios = new Map();
	for (const scenarioId of [...byScenario.keys()].sort()) {
		const entries = byScenario.get(scenarioId).sort((left, right) => left[0].localeCompare(right[0]));
		const defaultsForScenario = defaults.get(scenarioId) || {};
		const title =
			filterSubsetText(
				defaultsForScenario.title,
				excludedSkillIds,
				titleFromSlug(scenarioId),
			) ||
			(entries.find(([, entry]) => entry.title)?.[1].title ?? "") ||
			titleFromSlug(scenarioId);
		const whenCandidates = [defaultsForScenario.whenToRead, ...entries.map(([, entry]) => entry.whenToRead)];
		if (excludedSkillIds.length) {
			whenCandidates.push(...entries.map(([, entry]) => entry.readWhen));
		}
		const whenToRead = firstSubsetText(
			whenCandidates,
			excludedSkillIds,
			`Requests about ${humanizeSlug(scenarioId)}.`,
		);
		const guidanceParts = entries
			.map(([skillId, entry]) =>
				filterSubsetText(entry.selectionGuidance, excludedSkillIds, defaultSubsetSelectionGuidance(skillId)),
			)
			.filter(Boolean);
		let howToChoose = mergeSentenceFields([defaultsForScenario.howToChoose, ...guidanceParts], 1400);
		howToChoose = filterSubsetText(howToChoose, excludedSkillIds, "");
		if (!howToChoose) {
			const skillNames = entries.map(([skillId]) => `\`${skillId}\``).join(", ");
			howToChoose = `Choose the repo skill whose task scope, package APIs, data or model format, command surface, error mode, or operational workflow most directly matches the user request. Current options: ${skillNames}.`;
		}
		scenarios.set(scenarioId, {
			scenarioId,
			title: filterSubsetText(title, excludedSkillIds, titleFromSlug(scenarioId)),
			whenToRead,
			skillIds: entries.map(([skillId]) => skillId).filter((skillId) => liveSkills.has(skillId)),
			howToChoose: filterSubsetText(howToChoose, excludedSkillIds, "Choose among the selected repo skills by the task surface named by the request."),
		});
	}
	return scenarios;
}

function validateEntryPoints(repoSkillsRoot, routing) {
	for (const [skillId, skillRouting] of routing) {
		const skillRoot = path.join(repoSkillsRoot, skillId);
		for (const entry of skillRouting.entries) {
			for (const value of entry.usefulEntryPoints) {
				if (/^\d+\s+more\s+sub-skills$/i.test(value)) {
					throw new RouterError(
						`useful entry point for ${skillId}/${entry.scenario} must be a concrete path, not a generated count placeholder: ${value}`,
					);
				}
				if (value.startsWith("http://") || value.startsWith("https://")) {
					continue;
				}
				if (!value.startsWith(`${skillId}/`)) {
					throw new RouterError(
						`useful entry point for ${skillId}/${entry.scenario} must be relative to the repo-skills collection root and start with ${skillId}/: ${value}`,
					);
				}
				const relative = value.slice(skillId.length + 1).replace(/\/+$/g, "");
				if (!relative) {
					throw new RouterError(`useful entry point for ${skillId}/${entry.scenario} is empty: ${value}`);
				}
				const target = path.join(skillRoot, relative);
				if (!exists(target)) {
					throw new RouterError(`useful entry point for ${skillId}/${entry.scenario} does not exist: ${value}`);
				}
			}
		}
	}
}

function markdownEscapeTableCell(value) {
	return value.replace(/\n/g, " ").replace(/\|/g, "\\|");
}

function markdownCodeList(values) {
	return values.map((value) => `\`${value}\``).join(", ");
}

function scenarioTable(scenarios, pagePrefix) {
	const lines = [
		"| Usage scenario | When to read | Scenario page | Representative repo skills |",
		"| --- | --- | --- | --- |",
	];
	for (const scenario of scenarios.values()) {
		const page = `${pagePrefix}${scenario.scenarioId}.md`;
		lines.push(
			`| \`${scenario.scenarioId}\` | ${markdownEscapeTableCell(scenario.whenToRead)} | \`${page}\` | ${markdownCodeList(scenario.skillIds)} |`,
		);
	}
	return lines.join("\n");
}

function renderRoot(scenarios, modelDisabled) {
	return `---
name: repo-skills-router
description: "Repository-skill discovery and selection router for DisCo Researcher. Read before planning or implementing a substantive ML/AI, data, or scientific-computing task whenever an existing package or repository may help, even if the user names no repo or asks only which tool, framework, or approach to use. Covers ML systems, distributed training, datasets/evaluation, AutoML/MLOps, data pipelines, reinforcement learning; language models, fine-tuning/RLHF, inference/serving, agents, RAG/document processing, embeddings/retrieval; computer vision, multimodal, speech/audio, image generation; protein modeling, molecular ML, chemistry/drug discovery, materials, bioinformatics/genomics/single-cell, and medical imaging. Use it to find candidates, compare overlapping packages, select the best-fit repo skill, and load only its relevant branch."
${modelDisabled ? "disable-model-invocation: true\n" : ""}metadata:
  disco-role: operating
---

# Repo Skills Router

## Purpose

Use this skill as the maintained router for repo-specific skills imported into
DisCo's managed skill library. It helps another agent pick a relevant repo
skill as guidance for a user request without reading every imported skill.

The router uses two-layer progressive disclosure:

1. \`SKILL.md\` gives a compact first-pass map from practical repository usage
   scenarios to scenario pages.
2. Each \`references/scenarios/<scenario>.md\` page explains which repo skills
   belong to that scenario, what each one is for, how similar repo skills differ,
   and how to choose among them.

## How To Route

1. Scan the usage scenario quick map below for the user's likely task family.
2. Read only the relevant scenario page listed in
   [references/usage-scenarios.md](references/usage-scenarios.md).
3. On that scenario page, compare the candidate repo skills by role,
   non-fit cases, overlap notes, and selection guideline.
4. Resolve the selected skill from the sibling collection as
   \`../repo-skills/<skill-id>/SKILL.md\`, read it in full, and then read only the sub-skills,
   references, or scripts needed for the request.
5. Use that guidance with the agent's normal file and command tools to complete
   and verify the user's task. Check provenance and current repository evidence
   before relying on version-sensitive details.
6. If no scenario fits, fall back to the available skill descriptions, project
   context, or repository evidence. Do not invent a router entry.

Use this router only for selection. A router entry is not a substitute for the
selected repo skill's detailed instructions.

## Maintenance After Skill Import

For an approved or auto-authorized add, replacement, or refresh, run
\`verify-repo-skill/scripts/import_repo_skill.mjs\` with the verified runtime
skill outside the live skills tree. The importer validates and installs the
skill, invokes this lower-level updater under the global lock, and restores both
the prior skill and router if the transaction fails. Do not hand-edit router
Markdown or manually combine a copy command with this updater. See
[references/maintenance.md](references/maintenance.md) for the importer command
and the narrowly scoped router-only maintenance procedure.

## Usage Scenario Quick Map

Keep this section short. It should route a future agent to the right scenario
page, not document the repo skills in full.

${START_MARKER}
${scenarioTable(scenarios, "references/scenarios/")}
${END_MARKER}
`;
}

function suggestedScenarioText() {
	return SUGGESTED_SCENARIOS.map(([scenarioId, description]) => `- \`${scenarioId}\`: ${description}`).join("\n");
}

function renderUsageScenarios(scenarios, registry) {
	const organizationSection = registry
		? `## Scenario Registry

Canonical scenario IDs and aliases are owned by
[\`scenario-registry.json\`](scenario-registry.json). When importing a new repo
skill, prefer an existing canonical scenario or one of its aliases. Create a new
scenario only when the request domain does not fit the registry and the metadata
declares an explicit split rationale.

## Legacy Suggested Scenario Names

These older defaults remain as examples only. The registry is authoritative for
current imports:
`
		: `## Suggested Scenario Names

Use these as defaults when they fit; create new lowercase-hyphen scenarios when
the imported skill library needs them:
`;
	return `# Usage Scenarios

## Purpose

Use this file after the top-level router identifies a likely task family. It
maps practical repository usage scenarios to the scenario pages that contain
repo-specific skill roles, differences, and selection guidance.

## Scenario Table

Add scenarios only when at least one imported repo skill belongs there. Prefer
user-facing task families over implementation taxonomy. A repo skill may appear
in multiple scenarios when it genuinely supports multiple kinds of requests.

${START_MARKER}
${scenarioTable(scenarios, "scenarios/")}
${END_MARKER}

${organizationSection}

${suggestedScenarioText()}

## Scenario Page Shape

Scenario pages under \`references/scenarios/<scenario>.md\` are generated by
\`verify-repo-skill/scripts/update_repo_skills_router.mjs\` from
structured routing metadata. For a normal add, replacement, or refresh, update
the verified staged skill's routing metadata and run
\`verify-repo-skill/scripts/import_repo_skill.mjs\`; it installs the skill and
invokes the updater inside one rollback-capable locked transaction. Do not
hand-edit generated pages or run the updater separately as the import mechanism.
Direct updater use is reserved for intentional router-only repair or a locked
removal/rename transaction described in the maintenance guide.

Each generated scenario page has this shape:

\`\`\`markdown
# <Scenario Title>

## When To Read
[Task descriptions that should route to this scenario.]

## Repo Skill Options
<!-- DISCO_SCENARIO:<scenario>:START -->
### \`<skill-name>\`

Role: [one-sentence practical role in this scenario.]
Read when: [user terms, repo names, task shapes, data/model/API signals.]
Best for: [specific workflows this skill should support.]
Avoid when: [clear non-fit or better scenario/skill.]
Useful entry points: [root SKILL.md, sub-skills, references, scripts.]
<!-- DISCO_SCENARIO:<scenario>:END -->

## How To Choose
[Compare similar repo skills in this same scenario.]
\`\`\`

Keep scenario pages compact enough for routing, but include the comparison
needed to choose among similar skills. Do not create a separate third layer for
similar-skill differences.
`;
}

function renderMaintenance() {
	return `# Maintenance Guide

## Purpose

Read this when adding, refreshing, renaming, replacing, merging, or removing an
imported repo skill from \`repo-skills-router\`. The goal is progressive
disclosure: keep the root router small, route first by practical usage scenario,
and put repo-level differences and selection guidance on the relevant scenario
pages.

## Update Workflow

Use the live DisCo user copy at
\`~/.disco/agent/skills/repo-skills-router/\` as the primary writable router.
Do not update another same-named \`repo-skills-router\` directory before this live
copy has been updated. Do not push router changes into another agent tool from
this maintenance workflow. Export or merge into another agent only through the
dedicated \`import-repo-skills-to-agent\` workflow skill after the user explicitly asks for
that target tool.

The live router is model-visible by default. Users control automatic selection
with \`disco repo-skills router disable|enable\`; disabling leaves explicit
\`/skill:repo-skills-router\` invocation available. Live router rebuilds preserve
that policy. Canonical library and external-agent router output remains enabled.
Do not hand-edit frontmatter to implement the toggle.

For an approved or auto-authorized add, replacement, or refresh, use the
\`verify-repo-skill\` workflow skill's dedicated importer:

\`\`\`bash
node <verify-repo-skill>/scripts/import_repo_skill.mjs \\
  --agent-dir <agent-dir> \\
  [--overwrite] \\
  <verified-runtime-skill-dir>
\`\`\`

Omit \`--overwrite\` for a new skill. Use it only after approval to replace that
exact existing repo skill. The importer acquires the global lock at
\`<agent-dir>/locks/repo-skills-import.lockdir\`, stages and recursively validates
the runtime tree, installs it under \`repo-skills/<skill-id>/\`, invokes the
lower-level router updater, and restores both the previous skill and router if
the transaction fails. The verified runtime tree must contain
\`references/repo-routing-metadata.json\` for that skill.

Do not hand-edit router Markdown as the import mechanism, and do not manually
combine a copy command with \`scripts/update_repo_skills_router.mjs\`. Use the
lower-level lock and updater directly only for an intentional router-only repair
or a removal/rename transaction that cannot be expressed as an import. That
maintenance must hold the same global lock across the live skill mutation and
router rebuild.

## Scenario Registry

\`references/scenario-registry.json\` is the authoritative organization layer.
It defines canonical scenario IDs, aliases for overly narrow or historical
scenario IDs, and scenario-level selection guidance. During import, the updater
normalizes metadata scenario IDs through this registry before rendering
Markdown. If the registry has \`enforce_known_scenarios: true\`, new scenario IDs
are rejected unless the import metadata declares the scenario under top-level
\`scenarios\` with \`allow_new: true\`, \`why_not_existing\`, and
\`expected_future_reuse\`.

Prefer reusing a canonical scenario when a new repo overlaps an existing task
family. Create a new scenario only for a reusable task family that would be
misleading inside every existing scenario.

## Routing Metadata Shape

Each imported repo skill should include this generated metadata file:

\`\`\`json
{
  "skills": {
    "example-skill": {
      "scenarios": [
        {
          "id": "example-workflows",
          "title": "Example Workflows",
          "when_to_read": "Requests about example repository workflows.",
          "role": "Explains how to use the example package for concrete tasks.",
          "read_when": "The request names the example package or asks for task patterns, APIs, CLIs, configs, artifacts, or errors owned by that package.",
          "best_for": "Setup, common workflows, and troubleshooting.",
          "avoid_when": "Another repo skill matches the user's task, package, data format, model family, or workflow more directly.",
          "useful_entry_points": ["example-skill/SKILL.md"],
          "selection_guidance": "Choose \`example-skill\` for example-package setup, workflow, API, config, artifact, or troubleshooting tasks, even when the user describes the task without naming the package."
        }
      ]
    }
  }
}
\`\`\`

The managed updater also accepts an aggregate metadata file at
\`<repo-skills-root>/.repo-skills-router-metadata.json\` for batch recovery workflows.
That aggregate file uses the same top-level \`skills\` object and may also include
a top-level \`scenarios\` object for shared scenario titles and selection
guidance.

## Entry Quality Bar

Each scenario entry should help a future agent decide quickly:

- what the repo skill does in this scenario;
- user terms, task intents, data/model formats, API/CLI surfaces, configs,
  artifacts, and errors that should route to it;
- when a different scenario or skill is better;
- which root/sub-skill/reference/script entry points to read next;
- how to choose among similar repo skills in the same scenario.

Do not make routing depend only on the user naming a package. Package names are
strong signals, but metadata should also describe the practical need or workflow
that implies the repo skill. Avoid ambiguous "Choose this skill" or "Choose it"
wording; name the concrete skill id or package in selection guidance.

## File Ownership

- \`SKILL.md\`: generated compact usage scenario quick map and routing
  instructions.
- \`references/usage-scenarios.md\`: generated scenario table, naming guidance,
  and page template.
- \`references/scenario-registry.json\`: generated or preserved canonical
  scenario registry used to normalize future imports.
- \`references/scenarios/*.md\`: generated scenario-specific repo skill entries,
  similar skill differences, and selection guidelines.
- \`references/maintenance.md\`: generated copy of this guide.

Do not put full repo skill documentation here. Name the repo skill and the entry
points to read; then read that repo skill's own \`SKILL.md\` for operational
details.
`;
}

function renderScenarioPage(scenario, routing, liveSkills, excludedSkillIds = []) {
	const lines = [
		`# ${scenario.title}`,
		"",
		"## When To Read",
		"",
		scenario.whenToRead,
		"",
		"## Repo Skill Options",
		"",
		`<!-- DISCO_SCENARIO:${scenario.scenarioId}:START -->`,
	];

	for (const skillId of scenario.skillIds) {
		const skill = liveSkills.get(skillId);
		const entries = routing.get(skillId).entries.filter((entry) => entry.scenario === scenario.scenarioId);
		const entry = entries[0] || { scenario: scenario.scenarioId };
		const role = filterSubsetText(
			entry.role || normalizeSentence(skill.description),
			excludedSkillIds,
			`Provides ${humanizeSlug(skillId)} repository workflow guidance.`,
		);
		const readWhen = filterSubsetText(
			entry.readWhen || defaultReadWhen(skill),
			excludedSkillIds,
			`The request names \`${skillId}\` or asks for workflows owned by this repository.`,
		);
		const bestFor = filterSubsetText(
			entry.bestFor || defaultBestFor(skill),
			excludedSkillIds,
			`the ${humanizeSlug(skillId)} repository workflows.`,
		);
		const avoidWhen = filterSubsetText(
			entry.avoidWhen || defaultAvoidWhen(),
			excludedSkillIds,
			"another selected repo skill matches the request more directly.",
		);
		const rawEntryPoints = entry.usefulEntryPoints?.length ? entry.usefulEntryPoints : defaultEntryPoints(skill);
		const entryPoints = rawEntryPoints.filter((value) => !textMentionsAnySkillId(value, excludedSkillIds));
		if (!entryPoints.length) {
			entryPoints.push(`${skillId}/SKILL.md`);
		}
		lines.push(
			`### \`${skillId}\``,
			"",
			`Role: ${role}`,
			`Read when: ${readWhen}`,
			`Best for: ${bestFor}`,
			`Avoid when: ${avoidWhen}`,
			`Useful entry points: ${markdownCodeList(entryPoints)}.`,
			"",
		);
	}

	lines.push(
		`<!-- DISCO_SCENARIO:${scenario.scenarioId}:END -->`,
		"",
		"## How To Choose",
		"",
		scenario.howToChoose,
		"",
	);
	return lines.join("\n");
}

function renderScenariosReadme() {
	return `# Scenario Pages

Each file in this directory maps one practical usage scenario to the imported
repo skills that can handle it.

Scenario pages belong to the live user-managed \`repo-skills-router\`. They are
generated from structured routing metadata by
\`verify-repo-skill/scripts/update_repo_skills_router.mjs\`. For a normal add,
replacement, or refresh, update the verified staged skill's metadata and run
\`verify-repo-skill/scripts/import_repo_skill.mjs\`; do not hand-edit scenario
pages or run the updater separately as the import mechanism. Direct updater use
is reserved for intentional router-only maintenance under the global lock.
`;
}

function mergeSkillMetadata(repoSkillsRoot, existingRouterData, aggregateData) {
	const merged = { skills: {}, scenarios: {} };
	if (existingRouterData) {
		Object.assign(merged.skills, existingRouterData.skills || {});
		Object.assign(merged.scenarios, existingRouterData.scenarios || {});
	}
	if (aggregateData) {
		Object.assign(merged.skills, aggregateData.skills || {});
		Object.assign(merged.scenarios, aggregateData.scenarios || {});
	}

	for (const name of fs.readdirSync(repoSkillsRoot).sort()) {
		const skillDir = path.join(repoSkillsRoot, name);
		if (!isDirectory(skillDir)) {
			continue;
		}
		const metadataFile = path.join(skillDir, METADATA_PATH);
		if (!exists(metadataFile)) {
			continue;
		}
		const data = loadJson(metadataFile);
		if (!data || typeof data !== "object" || Array.isArray(data)) {
			throw new RouterError(`${metadataFile} must contain a JSON object`);
		}
		if (data.scenarios && typeof data.scenarios === "object" && !Array.isArray(data.scenarios)) {
			Object.assign(merged.scenarios, data.scenarios);
		}
		if ("skills" in data) {
			if (!data.skills || typeof data.skills !== "object" || Array.isArray(data.skills)) {
				throw new RouterError(`${metadataFile}: 'skills' must be an object`);
			}
			Object.assign(merged.skills, data.skills);
		} else if ("scenario" in data || "scenarios" in data) {
			merged.skills[name] = {
				scenarios: Array.isArray(data.scenario) ? data.scenario : data.scenarios || [],
			};
		}
	}
	return merged;
}

function filterMetadataForSkills(data, includeSkillIds) {
	if (!includeSkillIds.length) {
		return data;
	}
	const excludedSkillIds = Object.keys(data.skills || {}).filter((skillId) => !includeSkillIds.includes(skillId));
	const filtered = { skills: {}, scenarios: {} };
	const referencedScenarios = new Set();
	for (const skillId of includeSkillIds) {
		const skillMetadata = data.skills?.[skillId];
		if (!skillMetadata) {
			continue;
		}
		filtered.skills[skillId] = skillMetadata;
		for (const rawEntry of coerceList(skillMetadata.scenarios, `skills.${skillId}.scenarios`)) {
			if (typeof rawEntry === "string") {
				const scenarioId = cleanSlug(rawEntry);
				if (scenarioId) {
					referencedScenarios.add(scenarioId);
				}
				continue;
			}
			if (rawEntry && typeof rawEntry === "object" && !Array.isArray(rawEntry)) {
				const scenarioId = cleanSlug(rawEntry.id || rawEntry.scenario || "");
				if (scenarioId) {
					referencedScenarios.add(scenarioId);
				}
			}
		}
	}
	for (const [rawId, scenario] of Object.entries(data.scenarios || {})) {
		const scenarioId = cleanSlug(rawId);
		if (referencedScenarios.has(scenarioId)) {
			filtered.scenarios[rawId] = pruneScenarioDefaultForExcludedSkills(scenario, excludedSkillIds);
		}
	}
	return filtered;
}

function textMentionsAnySkillId(value, skillIds) {
	if (typeof value !== "string" || !value || !skillIds.length) {
		return false;
	}
	return skillIds.some((skillId) => {
		const escaped = String(skillId).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:$|[^a-z0-9])`, "i").test(value);
	});
}

function filterSubsetText(value, excludedSkillIds, fallback = "") {
	const normalized = normalizeSentence(value, 2000);
	if (!excludedSkillIds.length) {
		return normalized;
	}
	if (!textMentionsAnySkillId(normalized, excludedSkillIds)) {
		return normalized || normalizeSentence(fallback, 1200);
	}

	const retained = splitSentences(normalized).filter((sentence) => !textMentionsAnySkillId(sentence, excludedSkillIds));
	const cleaned = mergeSentenceFields(retained, 1400);
	if (cleaned && !textMentionsAnySkillId(cleaned, excludedSkillIds)) {
		return cleaned;
	}
	const safeFallback = normalizeSentence(fallback, 1200);
	return textMentionsAnySkillId(safeFallback, excludedSkillIds) ? "" : safeFallback;
}

function firstSubsetText(values, excludedSkillIds, fallback = "") {
	for (const value of values) {
		const filtered = filterSubsetText(value, excludedSkillIds, "");
		if (filtered) {
			return filtered;
		}
	}
	return normalizeSentence(fallback, 1200);
}

function defaultSubsetSelectionGuidance(skillId) {
	return `Choose \`${skillId}\` when its package APIs, configuration, artifacts, errors, or repository workflows are central to the request.`;
}

function pruneScenarioDefaultForExcludedSkills(scenario, excludedSkillIds) {
	if (!scenario || typeof scenario !== "object" || Array.isArray(scenario) || !excludedSkillIds.length) {
		return scenario;
	}
	const pruned = { ...scenario };
	for (const field of ["how_to_choose", "selection_guidance", "split_guidance"]) {
		if (textMentionsAnySkillId(pruned[field], excludedSkillIds)) {
			delete pruned[field];
		}
	}
	return pruned;
}

function validateFilteredRouterDoesNotMentionExcludedSkills(routerDir, excludedSkillIds) {
	if (!excludedSkillIds.length) {
		return;
	}
	for (const filePath of walkFiles(routerDir)) {
		if (!/\.(md|json|ya?ml|txt)$/i.test(filePath)) {
			continue;
		}
		const text = readText(filePath);
		for (const skillId of excludedSkillIds) {
			if (textMentionsAnySkillId(text, [skillId])) {
				throw new RouterError(
					`filtered router unexpectedly mentions unselected source skill ${skillId}: ${toPosix(path.relative(routerDir, filePath))}`,
				);
			}
		}
	}
}

function normalizeFragment(value) {
	return String(value ?? "")
		.replace(/[`"'()[\]{}]/g, "")
		.replace(/\s+/g, " ")
		.replace(/[.,;:!?]+$/g, "")
		.trim();
}

function conciseEntryPointLabel(skillId, value) {
	const normalized = String(value ?? "").replace(new RegExp(`^${skillId}/`), "").replace(/\/+$/g, "");
	if (!normalized || normalized === "SKILL.md") {
		return "the root skill";
	}
	if (normalized.startsWith("sub-skills/")) {
		return humanizeSlug(path.basename(normalized));
	}
	if (normalized.startsWith("references/")) {
		return humanizeSlug(path.basename(normalized, path.extname(normalized)));
	}
	if (normalized.startsWith("scripts/")) {
		return humanizeSlug(path.basename(normalized, path.extname(normalized)));
	}
	return humanizeSlug(path.basename(normalized, path.extname(normalized)));
}

function formatInlineList(values) {
	if (!values.length) {
		return "";
	}
	if (values.length === 1) {
		return values[0];
	}
	if (values.length === 2) {
		return `${values[0]} or ${values[1]}`;
	}
	return `${values.slice(0, -1).join(", ")}, or ${values[values.length - 1]}`;
}

function polishRouteLabel(value) {
	return normalizeSentence(value)
		.replace(/\bapi\b/g, "API")
		.replace(/\bapis\b/g, "APIs")
		.replace(/\bcli\b/g, "CLI")
		.replace(/\bclis\b/g, "CLIs")
		.replace(/\bllm\b/g, "LLM")
		.replace(/\bvlm\b/g, "VLM")
		.replace(/\brag\b/g, "RAG")
		.replace(/\brlhf\b/g, "RLHF")
		.replace(/\bio\b/g, "I/O")
		.replace(/\bui\b/g, "UI")
		.replace(/\bmcp\b/g, "MCP");
}

function taskPhraseFromDescription(description) {
	let text = normalizeFragment(description);
	text = text
		.replace(/^Use this skill for\s+/i, "")
		.replace(/^Use this skill when\s+/i, "")
		.replace(/^Use\s+.+?\s+for\s+/i, "")
		.replace(/^Provides?\s+/i, "")
		.replace(/^Covers\s+/i, "")
		.replace(/^Route\s+/i, "");
	text = text
		.replace(/^Build\b/i, "building")
		.replace(/,\s*debug\b/i, ", debugging")
		.replace(/,\s*serialize\b/i, ", serializing")
		.replace(/,\s*integrate\b/i, ", integrating")
		.replace(/,\s*and integrate\b/i, ", and integrating");
	return text;
}

function defaultSelectionGuidance(skillId, entry, skill) {
	const names = uniqueStrings([skill.name, skillId, skillId.replace(/-repo-skill$/, "")].filter(Boolean)).map(
		(value) => `\`${value}\``,
	);
	const taskPhrase = taskPhraseFromDescription(skill.description);
	const scenario = humanizeSlug(entry.scenario);
	const entryPointLabels = uniqueStrings((entry.usefulEntryPoints || []).map((value) => polishRouteLabel(conciseEntryPointLabel(skillId, value))))
		.filter((value) => value !== "the root skill")
		.slice(0, 4);
	const routingDetail = entryPointLabels.length
		? `Then route to ${formatInlineList(entryPointLabels)} when those focused workflows match.`
		: "Then read the root skill before using package-specific commands or APIs.";
	return normalizeSkillReferenceText(
		`Choose \`${skillId}\` when the request names ${formatInlineList(names)}, centers on ${taskPhrase || scenario}, uses its APIs or CLIs, references its configs/artifacts/errors, or asks for repository workflows in ${scenario}. ${routingDetail}`,
		skillId,
	);
}

function metadataEntryFromRoutingEntry(entry, skillId, skill) {
	const metadata = { id: entry.scenario };
	const role = entry.role || normalizeSentence(skill.description);
	const selectionGuidance = entry.selectionGuidance || defaultSelectionGuidance(skillId, { ...entry, role }, skill);
	const fields = [
		["title", entry.title],
		["when_to_read", entry.whenToRead],
		["role", role],
		["read_when", entry.readWhen],
		["best_for", entry.bestFor],
		["avoid_when", entry.avoidWhen],
		["selection_guidance", selectionGuidance],
	];
	for (const [name, value] of fields) {
		if (value) {
			metadata[name] = value;
		}
	}
	if (entry.usefulEntryPoints?.length) {
		metadata.useful_entry_points = [...entry.usefulEntryPoints];
	}
	return metadata;
}

function backfillMissingSkillMetadata(repoSkillsRoot, routing, liveSkills) {
	let count = 0;
	for (const [skillId, skillRouting] of routing) {
		const metadataFile = path.join(repoSkillsRoot, skillId, METADATA_PATH);
		if (exists(metadataFile)) {
			continue;
		}
		const skill = liveSkills.get(skillId);
		const data = {
			skills: {
				[skillId]: {
					scenarios: skillRouting.entries.map((entry) => metadataEntryFromRoutingEntry(entry, skillId, skill)),
				},
			},
		};
		writeText(metadataFile, stableJson(data));
		count += 1;
	}
	return count;
}

function removeLegacyFiles(routerDir) {
	for (const relative of LEGACY_ROUTER_FILES) {
		fs.rmSync(path.join(routerDir, relative), { force: true });
	}
	const scenariosDir = path.join(routerDir, "references", "scenarios");
	if (isDirectory(scenariosDir)) {
		for (const fileName of fs.readdirSync(scenariosDir)) {
			if (fileName.endsWith(".md") && fileName !== "README.md") {
				fs.rmSync(path.join(scenariosDir, fileName), { force: true });
			}
		}
	}
}

function copyDir(src, dest) {
	fs.cpSync(src, dest, { recursive: true });
}

function ensureRouterTemplate(routerDir, templateDir) {
	if (exists(routerDir)) {
		return;
	}
	if (exists(templateDir)) {
		copyDir(templateDir, routerDir);
	} else {
		fs.mkdirSync(path.join(routerDir, "references", "scenarios"), { recursive: true });
	}
}

function writeRouterFiles(
	routerDir,
	routing,
	scenarios,
	liveSkills,
	templateDir,
	registry,
	excludedSkillIds = [],
	modelDisabled = false,
) {
	ensureRouterTemplate(routerDir, templateDir);
	fs.mkdirSync(path.join(routerDir, "references", "scenarios"), { recursive: true });
	removeLegacyFiles(routerDir);
	writeText(path.join(routerDir, "SKILL.md"), renderRoot(scenarios, modelDisabled));
	writeText(path.join(routerDir, "references", "usage-scenarios.md"), renderUsageScenarios(scenarios, registry));
	writeText(path.join(routerDir, "references", "maintenance.md"), renderMaintenance());
	if (registry) {
		writeText(path.join(routerDir, SCENARIO_REGISTRY_PATH), stableJson(scenarioRegistryToJson(registry)));
	}
	writeText(path.join(routerDir, "references", "scenarios", "README.md"), renderScenariosReadme());
	for (const scenario of scenarios.values()) {
		writeText(
			path.join(routerDir, "references", "scenarios", `${scenario.scenarioId}.md`),
			renderScenarioPage(scenario, routing, liveSkills, excludedSkillIds),
		);
	}
}

function writeRouter(
	repoSkillsRoot,
	routerDir,
	routing,
	scenarios,
	liveSkills,
	templateDir,
	registry,
	excludedSkillIds = [],
	modelDisabled = false,
) {
	const routerParent = path.dirname(routerDir);
	fs.mkdirSync(routerParent, { recursive: true });
	const tmpRouterDir = path.join(routerParent, `.${ROUTER_ID}.tmp.${process.pid}`);
	const backupRouterDir = path.join(routerParent, `.${ROUTER_ID}.backup.${process.pid}`);
	fs.rmSync(tmpRouterDir, { recursive: true, force: true });
	fs.rmSync(backupRouterDir, { recursive: true, force: true });
	try {
		writeRouterFiles(
			tmpRouterDir,
			routing,
			scenarios,
			liveSkills,
			templateDir,
			registry,
			excludedSkillIds,
			modelDisabled,
		);
		validateRouterDir(repoSkillsRoot, tmpRouterDir, scenarios, liveSkills, registry, modelDisabled);
		if (exists(routerDir)) {
			fs.renameSync(routerDir, backupRouterDir);
		}
		fs.renameSync(tmpRouterDir, routerDir);
		fs.rmSync(backupRouterDir, { recursive: true, force: true });
	} catch (error) {
		if (!exists(routerDir) && exists(backupRouterDir)) {
			fs.renameSync(backupRouterDir, routerDir);
		}
		throw error;
	} finally {
		fs.rmSync(tmpRouterDir, { recursive: true, force: true });
		fs.rmSync(backupRouterDir, { recursive: true, force: true });
	}
}

function assertRelativeLinkExists(routerDir, source, rawLink) {
	if (rawLink.startsWith("#") || rawLink.startsWith("http://") || rawLink.startsWith("https://") || rawLink.startsWith("mailto:")) {
		return;
	}
	if (rawLink.startsWith("<") && rawLink.endsWith(">")) {
		rawLink = rawLink.slice(1, -1);
	}
	const pathPart = rawLink.split("#", 1)[0].trim();
	if (!pathPart || pathPart.includes("://")) {
		return;
	}
	const target = path.resolve(path.dirname(source), pathPart);
	const routerResolved = path.resolve(routerDir);
	const relative = path.relative(routerResolved, target);
	if (relative === ".." || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
		throw new RouterError(`${toPosix(path.relative(routerDir, source))} links outside router tree: ${rawLink}`);
	}
	if (!exists(target)) {
		throw new RouterError(`${toPosix(path.relative(routerDir, source))} has broken relative link: ${rawLink}`);
	}
}

function countMatches(text, needle) {
	return text.split(needle).length - 1;
}

function assertScenarioPageQuality(pageText, scenarioId, scenarioPage) {
	const howToChoose = sectionText(pageText, "How To Choose");
	if (!howToChoose) {
		throw new RouterError(`scenario page is missing How To Choose guidance: ${scenarioPage}`);
	}
	if (/\b(Choose|Use|Prefer|Select) this skill\b|\b(Choose|Use|Prefer|Select) it\b|\broute here\b/i.test(pageText)) {
		throw new RouterError(`scenario page contains ambiguous skill reference wording: ${scenarioPage}`);
	}
	if (/### `|^Role:|^Read when:|^Best for:|^Avoid when:|^Useful entry points:/m.test(howToChoose)) {
		throw new RouterError(`scenario page How To Choose contains repo option content: ${scenarioId}`);
	}
}

function validateRouterDir(skillsRoot, routerDir, scenarios, liveSkills, registry, modelDisabled) {
	const root = path.join(routerDir, "SKILL.md");
	const usage = path.join(routerDir, "references", "usage-scenarios.md");
	const maintenance = path.join(routerDir, "references", "maintenance.md");
	const registryPath = path.join(routerDir, SCENARIO_REGISTRY_PATH);
	const scenarioDir = path.join(routerDir, "references", "scenarios");
	for (const requiredPath of [root, usage, maintenance, path.join(scenarioDir, "README.md")]) {
		if (!exists(requiredPath)) {
			throw new RouterError(`router output missing required file: ${requiredPath}`);
		}
	}
	if (registry && !exists(registryPath)) {
		throw new RouterError(`router output missing required registry file: ${registryPath}`);
	}

	const rootText = readText(root);
	const usageText = readText(usage);
	const frontmatter = parseFrontmatter(rootText);
	if (frontmatter.name !== ROUTER_ID) {
		throw new RouterError("router SKILL.md frontmatter name must be repo-skills-router");
	}
	if (!(frontmatter.description || "").trim()) {
		throw new RouterError("router SKILL.md frontmatter must contain description");
	}
	if (routerIsModelDisabled(rootText) !== modelDisabled) {
		throw new RouterError(
			modelDisabled
				? "router SKILL.md must contain disable-model-invocation: true"
				: "router SKILL.md must stay model-visible and must not contain disable-model-invocation",
		);
	}
	if (!hasDoubleQuotedFrontmatterValue(rootText, "description")) {
		throw new RouterError("router SKILL.md frontmatter description must be double-quoted");
	}
	if (metadataFrontmatterValue(rootText, "disco-role") !== "operating") {
		throw new RouterError("router SKILL.md metadata.disco-role must be operating");
	}
	if (countMatches(rootText, START_MARKER) !== 1 || countMatches(rootText, END_MARKER) !== 1) {
		throw new RouterError("router SKILL.md must contain exactly one balanced scenario table marker pair");
	}
	if (countMatches(usageText, START_MARKER) !== 1 || countMatches(usageText, END_MARKER) !== 1) {
		throw new RouterError("usage-scenarios.md must contain exactly one balanced scenario table marker pair");
	}
	if (rootText.split(/\r?\n/).length > 180) {
		throw new RouterError("router SKILL.md is no longer compact");
	}
	if (/^### `/m.test(rootText)) {
		throw new RouterError("router SKILL.md contains per-repo detail sections");
	}
	const renderedResiduePattern =
		/^(Role|Read when|Best for|Avoid when|Useful entry points):\s*(Role|Read when|Best for|Avoid when|Useful entry points)\b|^Role:\s*\d+\b|\b\d+\s+more\s+sub-skills\b/im;

	const covered = new Set();
	for (const scenario of scenarios.values()) {
		const scenarioPage = path.join(scenarioDir, `${scenario.scenarioId}.md`);
		if (!exists(scenarioPage)) {
			throw new RouterError(`scenario row references missing page: ${scenarioPage}`);
		}
		if (registry && !registry.scenarios.has(scenario.scenarioId)) {
			throw new RouterError(`generated scenario ${scenario.scenarioId} is not present in scenario-registry.json`);
		}
		const pageText = readText(scenarioPage);
		const renderedResidue = renderedResiduePattern.exec(pageText);
		if (renderedResidue) {
			throw new RouterError(
				`scenario page contains rendered metadata residue at ${scenarioPage}: ${renderedResidue[0]}`,
			);
		}
		const start = `<!-- DISCO_SCENARIO:${scenario.scenarioId}:START -->`;
		const end = `<!-- DISCO_SCENARIO:${scenario.scenarioId}:END -->`;
		if (countMatches(pageText, start) !== 1 || countMatches(pageText, end) !== 1) {
			throw new RouterError(`scenario page has unbalanced generated markers: ${scenarioPage}`);
		}
		assertScenarioPageQuality(pageText, scenario.scenarioId, scenarioPage);
		for (const skillId of scenario.skillIds) {
			if (!liveSkills.has(skillId)) {
				throw new RouterError(`scenario ${scenario.scenarioId} references missing skill ${skillId}`);
			}
			if (!isFile(path.join(skillsRoot, skillId, "SKILL.md"))) {
				throw new RouterError(`scenario ${scenario.scenarioId} references skill without SKILL.md: ${skillId}`);
			}
			if (!pageText.includes(`### \`${skillId}\``)) {
				throw new RouterError(`scenario page does not contain expected skill entry: ${scenario.scenarioId}/${skillId}`);
			}
			covered.add(skillId);
		}
	}

	const missingCoverage = [...liveSkills.keys()].filter((skillId) => !covered.has(skillId)).sort();
	if (missingCoverage.length) {
		throw new RouterError(`live skills are missing router scenario coverage: ${missingCoverage.join(", ")}`);
	}

	for (const relative of LEGACY_ROUTER_FILES) {
		if (exists(path.join(routerDir, relative))) {
			throw new RouterError(`legacy router file still exists: ${toPosix(relative)}`);
		}
	}

	const markdownFiles = [
		root,
		usage,
		maintenance,
		...fs.readdirSync(scenarioDir).filter((name) => name.endsWith(".md")).sort().map((name) => path.join(scenarioDir, name)),
	];
	for (const markdownFile of markdownFiles) {
		const text = readText(markdownFile);
		const renderedResidue = renderedResiduePattern.exec(text);
		if (renderedResidue) {
			throw new RouterError(
				`router markdown contains rendered metadata residue at ${markdownFile}: ${renderedResidue[0]}`,
			);
		}
		for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
			assertRelativeLinkExists(routerDir, markdownFile, match[1]);
		}
	}
}

function resolveRouterModelDisabled(routerVisibility, liveRouterDir) {
	if (routerVisibility === "enabled") {
		return false;
	}
	if (routerVisibility === "disabled") {
		return true;
	}
	const skillFile = path.join(liveRouterDir, "SKILL.md");
	return isFile(skillFile) ? routerIsModelDisabled(readText(skillFile), skillFile) : false;
}

function rebuildRouter(
	libraryRoot,
	metadataFile,
	templateDir,
	{ includeSkillIds = [], outputRouterDir, routerVisibility = "preserve" } = {},
) {
	const repoSkillsRoot = path.join(libraryRoot, "repo-skills");
	const liveRouterDir = path.join(libraryRoot, ROUTER_ID);
	if (!isDirectory(repoSkillsRoot)) {
		throw new RouterError(`repo-skills collection does not exist: ${repoSkillsRoot}`);
	}
	if (isFile(path.join(liveRouterDir, "SKILL.md"))) {
		validateSkillFrontmatter(liveRouterDir, {
			requireDisabled: undefined,
			requireQuotedDescription: false,
			requireDiscoRole: false,
		});
	}
	const modelDisabled = resolveRouterModelDisabled(routerVisibility, liveRouterDir);
	const liveSkills = readLiveSkills(repoSkillsRoot, includeSkillIds);
	if (liveSkills.size === 0) {
		const suffix = includeSkillIds.length ? ` matching --include-skill ${includeSkillIds.join(", ")}` : "";
		throw new RouterError(`no repo skills with SKILL.md${suffix} found under ${repoSkillsRoot}`);
	}

	const defaultMetadataFile = path.join(repoSkillsRoot, ".repo-skills-router-metadata.json");
	let aggregateData = metadataFile ? loadRoutingMetadata(repoSkillsRoot, metadataFile) : null;
	if (!metadataFile && exists(defaultMetadataFile)) {
		aggregateData = loadRoutingMetadata(repoSkillsRoot, defaultMetadataFile);
	}
	const baseRegistry = loadScenarioRegistry(liveRouterDir, templateDir);
	const existingRouterData = parseExistingRouterMetadata(liveRouterDir, liveSkills);
	const unfilteredMetadata = mergeSkillMetadata(repoSkillsRoot, existingRouterData, aggregateData);
	const excludedSkillIds = [
		...(includeSkillIds.length
			? Object.keys(unfilteredMetadata.skills || {}).filter((skillId) => !includeSkillIds.includes(skillId))
			: []),
	];
	const mergedMetadata = filterMetadataForSkills(unfilteredMetadata, includeSkillIds);
	const registry = extendRegistryWithApprovedNewScenarios(baseRegistry, mergedMetadata);
	const routing = normalizeRoutingMetadata(mergedMetadata, liveSkills, registry);
	validateEntryPoints(repoSkillsRoot, routing);
	const backfilled = backfillMissingSkillMetadata(repoSkillsRoot, routing, liveSkills);
	const defaults = scenarioDefaults(mergedMetadata, registry);
	const scenarios = buildScenarios(routing, defaults, liveSkills, excludedSkillIds);
	const outputRegistry = filterRegistryForSubset(registry, scenarios, excludedSkillIds, includeSkillIds.length > 0);
	const routerDir = outputRouterDir || liveRouterDir;
	writeRouter(
		repoSkillsRoot,
		routerDir,
		routing,
		scenarios,
		liveSkills,
		templateDir,
		outputRegistry,
		excludedSkillIds,
		modelDisabled,
	);
	validateRouterDir(repoSkillsRoot, routerDir, scenarios, liveSkills, outputRegistry, modelDisabled);
	validateFilteredRouterDoesNotMentionExcludedSkills(routerDir, excludedSkillIds);
	return { skills: liveSkills.size, scenarios: scenarios.size, backfilled, routerDir };
}

function parseArgs(argv) {
	const args = {
		agentDir: undefined,
		libraryRoot: undefined,
		metadataFile: undefined,
		templateDir: bundledRouterTemplateDir(),
		includeSkillIds: [],
		outputRouterDir: undefined,
		routerVisibility: undefined,
		alreadyLocked: false,
		timeout: DEFAULT_TIMEOUT_SECONDS,
	};
	for (let index = 0; index < argv.length; index += 1) {
		const item = argv[index];
		if (item === "--agent-dir") {
			args.agentDir = argv[++index];
		} else if (item === "--library-root") {
			args.libraryRoot = argv[++index];
		} else if (item === "--metadata-file") {
			args.metadataFile = argv[++index];
		} else if (item === "--template-dir") {
			args.templateDir = argv[++index];
		} else if (item === "--include-skill") {
			const value = argv[++index];
			if (!value) {
				throw new RouterError("--include-skill requires a skill id or comma-separated skill ids");
			}
			args.includeSkillIds.push(
				...value.split(",").map((skillId) => skillId.trim()).filter(Boolean),
			);
		} else if (item === "--output-router-dir") {
			args.outputRouterDir = argv[++index];
		} else if (item === "--router-visibility") {
			const value = argv[++index];
			if (!value || !["preserve", "enabled", "disabled"].includes(value)) {
				throw new RouterError("--router-visibility must be preserve, enabled, or disabled");
			}
			args.routerVisibility = value;
		} else if (item === "--already-locked") {
			args.alreadyLocked = true;
		} else if (item === "--timeout") {
			args.timeout = Number(argv[++index]);
		} else if (item === "-h" || item === "--help") {
			printHelp();
			process.exit(0);
		} else {
			throw new RouterError(`unknown argument: ${item}`);
		}
	}
	if (args.agentDir && args.libraryRoot) {
		throw new RouterError("use either --agent-dir or --library-root, not both");
	}
	if (!args.agentDir && !args.libraryRoot) {
		args.agentDir = defaultAgentDir();
	}
	if (args.libraryRoot && args.alreadyLocked) {
		throw new RouterError("--library-root cannot be combined with --already-locked");
	}
	args.routerVisibility ??= args.outputRouterDir || args.libraryRoot ? "enabled" : "preserve";
	return args;
}

function printHelp() {
	console.log(`Usage: node update_repo_skills_router.mjs [options]

Options:
  --agent-dir DIR       DisCo agent directory
  --library-root DIR    Library root containing repo-skills/ and the sibling
                        repo-skills-router/; updates directly without a live lock
  --metadata-file FILE  Optional aggregate router metadata JSON
  --template-dir DIR    Bundled repo-skills-router template directory
  --include-skill ID    Include only this repo skill in the generated router;
                        repeat or comma-separate for multiple skills
  --output-router-dir DIR
                        Write the generated router to DIR instead of
                        <agent-dir>/skills/repo-skills-router
  --router-visibility POLICY
                        preserve, enabled, or disabled; live updates default
                        to preserve, while library/export output defaults enabled
  --already-locked      Assert the global import lock is already held
  --timeout SECONDS     Seconds to wait for the lock when locking is needed`);
}

function runUnderLock(argv, agentDir, timeout) {
	const script = withImportLockScript();
	if (!exists(script)) {
		throw new RouterError(`with_import_lock.mjs not found next to updater: ${script}`);
	}
	const forwarded = argv.filter((item) => item !== "--already-locked");
	const command = [
		process.execPath,
		script,
		"--agent-dir",
		agentDir,
		"--timeout",
		String(timeout),
		"--",
		process.execPath,
		SCRIPT_PATH,
		...forwarded,
		"--already-locked",
	];
	const completed = spawnSync(command[0], command.slice(1), { stdio: "inherit" });
	if (completed.error) {
		throw completed.error;
	}
	return completed.status ?? 1;
}

function main(argv) {
	let args;
	try {
		args = parseArgs(argv);
	} catch (error) {
		console.error(`update_repo_skills_router.mjs: ${error.message}`);
		return 2;
	}

	const agentDir = args.agentDir ? path.resolve(expandHome(args.agentDir)) : undefined;
	const libraryRoot = args.libraryRoot
		? path.resolve(expandHome(args.libraryRoot))
		: path.join(agentDir, "skills");
	const metadataFile = args.metadataFile ? path.resolve(expandHome(args.metadataFile)) : undefined;
	const templateDir = path.resolve(expandHome(args.templateDir));
	const outputRouterDir = args.outputRouterDir ? path.resolve(expandHome(args.outputRouterDir)) : undefined;
	const includeSkillIds = uniqueSkillIds(args.includeSkillIds);

	if (agentDir && args.alreadyLocked && !process.env.DISCO_IMPORT_LOCK_PATH) {
		if (process.env.DISCO_ALLOW_UNLOCKED_ROUTER_UPDATE_FOR_TESTS !== "1") {
			console.error(
				"update_repo_skills_router.mjs: --already-locked requires DISCO_IMPORT_LOCK_PATH; run through with_import_lock.mjs or omit --already-locked",
			);
			return 2;
		}
	}

	if (agentDir && !args.alreadyLocked && !process.env.DISCO_IMPORT_LOCK_PATH) {
		return runUnderLock(argv, agentDir, args.timeout);
	}

	try {
		const counts = rebuildRouter(libraryRoot, metadataFile, templateDir, {
			includeSkillIds,
			outputRouterDir,
			routerVisibility: args.routerVisibility,
		});
		const backfillSummary = counts.backfilled ? `; backfilled ${counts.backfilled} routing metadata files` : "";
		const includeSummary = includeSkillIds.length ? ` for ${includeSkillIds.join(", ")}` : "";
		console.log(
			`updated ${counts.routerDir}${includeSummary}: ${counts.skills} skills across ${counts.scenarios} scenarios${backfillSummary}`,
		);
		return 0;
	} catch (error) {
		if (error instanceof RouterError) {
			console.error(`update_repo_skills_router.mjs: ${error.message}`);
			return 2;
		}
		console.error(error instanceof Error ? error.stack || error.message : String(error));
		return 1;
	}
}

process.exitCode = main(process.argv.slice(2));
