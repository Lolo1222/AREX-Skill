---
name: repo-skills-router
description: "Repository-skill discovery and selection router for DisCo Researcher. Read before planning or implementing a substantive ML/AI, data, or scientific-computing task whenever an existing package or repository may help, even if the user names no repo or asks only which tool, framework, or approach to use. Covers ML systems, distributed training, datasets/evaluation, AutoML/MLOps, data pipelines, reinforcement learning; language models, fine-tuning/RLHF, inference/serving, agents, RAG/document processing, embeddings/retrieval; computer vision, multimodal, speech/audio, image generation; protein modeling, molecular ML, chemistry/drug discovery, materials, bioinformatics/genomics/single-cell, and medical imaging. Use it to find candidates, compare overlapping packages, select the best-fit repo skill, and load only its relevant branch."
metadata:
  disco-role: operating
---

# Repo Skills Router

## Purpose

Use this skill as the maintained router for repo-specific skills imported into
DisCo's managed skill library. It helps DisCo Researcher pick a relevant repo
skill as guidance for a user request without reading every imported skill. An
explicitly exported compatible-agent copy can provide the same routing there,
but export is not required for DisCo because it uses its managed copy directly.

DisCo's bundled copy is only a template. The live writable router is the
user copy at `~/.disco/agent/skills/repo-skills-router/SKILL.md`, created
or updated after approved or auto-authorized imports. Do not edit the bundled
package copy as runtime state.

The router uses two-layer progressive disclosure:

1. `SKILL.md` gives a compact first-pass map from practical repository usage
   scenarios to scenario pages.
2. Each `references/scenarios/<scenario>.md` page explains which repo skills
   belong to that scenario, what each one is for, how similar repo skills differ,
   and how to choose among them.

## How To Route

1. Scan the usage scenario quick map below for the user's likely task family.
2. Read only the relevant scenario page listed in
   [references/usage-scenarios.md](references/usage-scenarios.md).
3. On that scenario page, compare the candidate repo skills by role,
   non-fit cases, overlap notes, and selection guideline.
4. Resolve the selected skill from the sibling collection as
   `../repo-skills/<skill-id>/SKILL.md`, read it in full, and then read only the sub-skills,
   references, or scripts needed for the request.
5. Use that guidance with the agent's normal file and command tools to complete
   and verify the user's task. Check provenance and current repository evidence
   before relying on version-sensitive details.
6. If no scenario fits, fall back to the available skill descriptions, project
   context, or repository evidence. Do not invent a router entry.

Use this router only for selection. A router entry is not a substitute for the
selected repo skill's detailed instructions.

## Maintenance After Skill Import

For a verified repo-specific skill approved or auto-authorized for import, use
the dedicated importer described in
[references/maintenance.md](references/maintenance.md). Do not hand-edit router
Markdown or manually copy a skill and run the updater as the import mechanism.
The importer validates and installs the skill, invokes the lower-level updater,
and can restore both the previous skill and router if the transaction fails.

Read [references/maintenance.md](references/maintenance.md), then:

1. Classify the imported skill into one or more practical usage scenarios in
   the skill's `references/repo-routing-metadata.json`. Reuse a canonical
   scenario or alias from
   [references/scenario-registry.json](references/scenario-registry.json)
   whenever one fits.
2. Include the repo skill's role, trigger terms, best-fit tasks, avoid-when
   notes, useful entry points, and selection guidance in that metadata.
3. Create a new scenario only when the registry would make the router
   misleading. In that case, declare the top-level `scenarios.<id>` entry with
   `allow_new: true`, `why_not_existing`, and `expected_future_reuse`.
4. Keep the verified runtime skill outside the live
   `~/.disco/agent/skills/` tree, then run
   `verify-repo-skill/scripts/import_repo_skill.mjs --agent-dir
   ~/.disco/agent [--overwrite] <verified-runtime-skill-dir>`. Use
   `--overwrite` only after approval to replace that exact skill.
5. Treat importer validation or router rebuild failure as import failure. Fix
   the staged runtime skill and retry; the importer restores the prior live
   skill and router before returning failure.

Use the lower-level updater directly only for an intentional router-only repair
or a removal/rename transaction that cannot be expressed as an import, following
the locking requirements in the maintenance guide.

## Usage Scenario Quick Map

Keep this section short. It should route a future agent to the right scenario
page, not document the repo skills in full.

<!-- DISCO_REPO_SKILLS_ROUTER_SCENARIOS:START -->
| Usage scenario | When to read | Scenario page | Representative repo skills |
| --- | --- | --- | --- |
<!-- DISCO_REPO_SKILLS_ROUTER_SCENARIOS:END -->
