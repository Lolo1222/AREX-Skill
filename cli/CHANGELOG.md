# Changelog

## 0.1.1 - 2026-08-03

- Fork Pi coding-agent v0.83.0 into the DisCo package.
- Supersede the legacy DisCo `0.0.x` release line and the internal
  `@auto-ml-skills/disco-agent-core`, `@auto-ml-skills/disco-ai`, and
  `@auto-ml-skills/disco-tui` packages. Users should upgrade to
  `@auto-ml-skills/disco@latest`.
- Isolate DisCo configuration and resources under `.disco` and `DISCO_*`.
- Preserve Creator/Researcher modes, dynamic workflows, bundled skills, SDK
  exports, and the interactive splash experience.
- Add `disco repo-skills install|update|status` for commit-tracked installation
  and safe updates of the published repository collection while preserving
  Creator/user repo skills and backing up forced conflict resolution; offline
  status checks include managed drift and live router coverage.
- Add `disco repo-skills router enable|disable`; disabled routers leave automatic
  model selection but remain explicitly invocable, and the setting persists
  across individual imports and full collection updates.

## 0.0.4

- Hardened `repo-skills-router` generation against routing metadata residue by
  stripping rendered field labels, rejecting numeric role artifacts, and
  failing on generated `N more sub-skills` entry-point placeholders.
- Documented routing metadata hygiene in the bundled create/verify repo-skill
  workflows so imported skills provide data-shaped fields instead of rendered
  router Markdown.
- Added genomics HTS file and speech/audio modeling scenarios to the bundled
  router registry template for future repo-skill imports.
- Synchronized package versions for the `0.0.4` release.

## 0.0.3

- Added Codex-target export handling for imported repo skills by writing
  target-side `agents/openai.yaml` policies that keep non-router repo skill
  descriptions out of Codex implicit invocation while preserving
  `repo-skills-router` as the routing entry point.
- Clarified repo-skill creation, extension, verification, and architecture docs
  so source repo skills stay agent-neutral; Codex-specific policy files are
  added only during `import-repo-skills-to-agent`.
- Synchronized package versions for the `0.0.3` release.

## 0.0.2

- Initial DisCo release under the `@auto-ml-skills` npm scope.
- Derived from PI `0.79.1`; DisCo uses its own package version series
  starting at `0.0.2`.
- Rebranded the adapted coding-agent runtime as DisCo.
- Bundled DisCo meta-skills for repo skill creation, environment
  preparation, repo-drift refresh, existing skill extension, imported
  repo-skill routing, and explicit export into other agent tools.
- Generated and refreshed repo skills now include `references/repo-provenance.md`
  so future agents can compare source commit, dirty state, package version, and
  evidence paths before deciding whether a skill is stale.
- Repo skill creation now requires complete per-sub-skill briefs for workflow
  subagents, canonical sub-skill id/name consistency, and main-agent review
  against explicit depth, evidence, routing, self-containment, and artifact
  boundary rubrics before integration.
- Added structured import confirmation and DisCo-first
  `repo-skills-router` updates after a user approves importing a verified
  repo-specific skill. Exporting DisCo's managed skill library into other
  agent tools is handled by the explicit `import-repo-skills-to-agent` meta skill.
- Removed default calls to upstream update and install telemetry endpoints.
- Fixed source builds when the optional interactive assets directory is absent
  in a fresh checkout.
