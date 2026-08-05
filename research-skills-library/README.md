# Research Skills Library

The Research Skills Library is the reusable skill layer for ML research and
software work. The library has two parts: task-agnostic operating skills
distilled from widely used ML repositories, and task-oriented operating skills
constructed around specific research tasks rather than general package usage.
This checkout currently publishes more than 1,000 operating skills for a
curated set of 170 widely used ML and research repositories. This directory
therefore catalogs the task-agnostic repository collection, not the full
boundary of the library.

## Current Contents

This checkout contains 170 repository skill graphs, comprising more than 1,000
root and focused skills, plus one maintained router:

```text
research-skills-library/
  README.md
  README.zh-CN.md
  repo-skills/
    <repository-skill-id>/
      SKILL.md
      sub-skills/
      references/
      scripts/
  repo-skills-router/
    SKILL.md
    references/
```

`repo-skills/` contains one operating-skill graph per supported repository.
The **170** count refers to these repository roots; **1,000+** counts all root
and focused `SKILL.md` entries within them. Each graph has a root router,
optional focused sub-skills, provenance and routing metadata, references, and
executable helpers. `repo-skills-router/` is the two-layer discovery router: it
maps practical usage scenarios to the small set of repository skills that
should be read next. It is model-visible by default, but a DisCo user can turn
off automatic selection while retaining explicit invocation. The router is not
a repository skill and must remain a sibling of the collection.

All repository roots, sub-skills, and the router declare
`metadata.disco-role: operating`. They are loaded in DisCo Researcher mode;
Creator mode exposes construction meta skills instead. See the [architecture
guide](../docs/architecture.md) for the role and visibility contract, and the
[repository catalog](../docs/imported-repo-skills.md) for the current list.

## Install Into DisCo

Install the official runtime collection and router with:

```bash
disco repo-skills install
```

Git must be available locally. The manager records the official source commit
and can inspect or update the collection later:

```bash
disco repo-skills status
disco repo-skills update
```

`status` stays offline and verifies the recorded commit, managed digests,
router state, and coverage of the current live skill IDs. Use `update` to query
and apply the latest official commit.

The resulting layout is:

```text
~/.disco/agent/skills/
  repo-skills/
    <repository-skill-id>/
  repo-skills-router/
```

Start a new Researcher session after an install or update. Updates operate on
official managed skill IDs rather than replacing the whole directory, so local
Creator repo skills remain intact. Local changes to an official ID are reported
as drift and require an explicit `--force`; forced replacement preserves a
backup.

The router is enabled for automatic selection by default. Toggle that policy
without removing the collection:

```bash
disco repo-skills router disable
disco repo-skills router enable
```

A disabled router remains available as `/skill:repo-skills-router`. This
repository collection is the high-reuse managed special case: its graphs remain
nested under `repo-skills/` and are routed through the sibling
`repo-skills-router/`.

Other Creator outputs use a separate deployment decision. An approved new meta
skill is installed as Creator infrastructure at
`~/.disco/agent/skills/<meta-skill-id>/`. An operating graph tied to one task,
project, private dataset, evaluator, benchmark instance, or environment, or one
whose reuse is uncertain, defaults to
`<project-dir>/.agents/skills/<skill-id>/`. Only a self-contained,
provenance-backed graph with representative cross-project verification belongs
at the top level of `~/.disco/agent/skills/`. These outputs may be visible to
DisCo, but they are not part of the published repository collection in this
directory.

## Contributing

Use `create-repo-skill`, `verify-repo-skill`, and the locked router updater when
adding or refreshing a repository graph. Keep structured
`references/repo-routing-metadata.json` inside each repository skill and rebuild
the sibling router rather than editing generated Markdown. The [contribution
guide](../CONTRIBUTING.md) describes validation and review requirements.

The library layout is intentionally extensible. Additional task-agnostic
repository graphs can expand coverage across more domains, software stacks,
and programming languages. Task-oriented collections should be added as
sibling collections only when their task scope, source constraints, evaluation
protocol, verification conditions, ownership, and installation rules are
documented; do not represent them as Python packages merely because they
contain executable helpers.
