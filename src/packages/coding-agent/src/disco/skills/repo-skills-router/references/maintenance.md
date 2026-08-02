# Maintenance Guide

## Purpose

Read this when adding, refreshing, renaming, replacing, merging, or removing an
imported repo skill from `repo-skills-router`. The goal is progressive
disclosure: keep the root router small, route first by practical usage scenario,
and put repo-level differences and selection guidance on the relevant scenario
pages.

## Update Workflow

Use the live DisCo user copy at
`~/.disco/agent/skills/repo-skills-router/` as the primary writable router.
Do not update another same-named `repo-skills-router` directory before this live
copy has been updated. Do not push router changes into another agent tool from
this maintenance workflow. Export or merge into another agent only through the
dedicated `import-repo-skills-to-agent` workflow skill after the user explicitly asks for
that target tool.

The live router is model-visible by default. Users control automatic selection
with `disco repo-skills router disable|enable`; disabling leaves explicit
`/skill:repo-skills-router` invocation available. Live router rebuilds preserve
that policy. Canonical library and external-agent router output remains enabled.
Do not hand-edit frontmatter to implement the toggle.

For an approved or auto-authorized add, replacement, or refresh, use the
`verify-repo-skill` workflow skill's dedicated importer:

```bash
node <verify-repo-skill>/scripts/import_repo_skill.mjs \
  --agent-dir <agent-dir> \
  [--overwrite] \
  <verified-runtime-skill-dir>
```

Omit `--overwrite` for a new skill. Use it only after approval to replace that
exact existing repo skill. The importer acquires the global lock at
`<agent-dir>/locks/repo-skills-import.lockdir`, stages and recursively validates
the runtime tree, installs it under `repo-skills/<skill-id>/`, invokes the
lower-level router updater, and restores both the previous skill and router if
the transaction fails. The verified runtime tree must contain
`references/repo-routing-metadata.json` for that skill.

Do not hand-edit router Markdown as the import mechanism, and do not manually
combine a copy command with `scripts/update_repo_skills_router.mjs`. Use the
lower-level lock and updater directly only for an intentional router-only repair
or a removal/rename transaction that cannot be expressed as an import. That
maintenance must hold the same global lock across the live skill mutation and
router rebuild.

## Scenario Registry

`references/scenario-registry.json` is the authoritative organization layer.
It defines canonical scenario IDs, aliases for overly narrow or historical
scenario IDs, and scenario-level selection guidance. During import, the updater
normalizes metadata scenario IDs through this registry before rendering
Markdown. If the registry has `enforce_known_scenarios: true`, new scenario IDs
are rejected unless the import metadata declares the scenario under top-level
`scenarios` with `allow_new: true`, `why_not_existing`, and
`expected_future_reuse`.

Prefer reusing a canonical scenario when a new repo overlaps an existing task
family. Create a new scenario only for a reusable task family that would be
misleading inside every existing scenario.

## Routing Metadata Shape

Each imported repo skill should include this generated metadata file:

```json
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
          "selection_guidance": "Choose `example-skill` for example-package setup, workflow, API, config, artifact, or troubleshooting tasks, even when the user describes the task without naming the package."
        }
      ]
    }
  }
}
```

The managed updater also accepts an aggregate metadata file at
`<repo-skills-root>/.repo-skills-router-metadata.json` for batch recovery workflows.
That aggregate file uses the same top-level `skills` object and may also include
a top-level `scenarios` object for shared scenario titles and selection
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

- `SKILL.md`: generated compact usage scenario quick map and routing
  instructions.
- `references/usage-scenarios.md`: generated scenario table, naming guidance,
  and page template.
- `references/scenario-registry.json`: generated or preserved canonical
  scenario registry used to normalize future imports.
- `references/scenarios/*.md`: generated scenario-specific repo skill entries,
  similar skill differences, and selection guidelines.
- `references/maintenance.md`: generated copy of this guide.

Do not put full repo skill documentation here. Name the repo skill and the entry
points to read; then read that repo skill's own `SKILL.md` for operational
details.
