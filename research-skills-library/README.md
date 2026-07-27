# Research Skills Library

The Research Skills Library is the reusable skill layer for ML research and
software work. The concept is broader than a Python package catalog: it can
contain repository skills, task- or benchmark-specific operating skills, paper-
derived workflows, and future collections contributed for a research domain.
This checkout currently publishes the repository-skill collection described
below; it does not claim that future task or benchmark collections are already
present.

## Current Contents

This checkout contains 170 repository skill graphs and one maintained router:

```text
research-skills-library/
  README.md
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
Each graph has a root router, optional focused sub-skills, provenance and
routing metadata, references, and executable helpers. `repo-skills-router/` is
the model-visible two-layer router: it maps practical usage scenarios to the
small set of repository skills that should be read next. The router is not a
repository skill and must remain a sibling of the collection.

All repository roots, sub-skills, and the router declare
`metadata.disco-role: operating`. They are loaded in DisCo Researcher mode;
Creator mode exposes construction meta skills instead. See the [architecture
guide](../docs/architecture.md) for the role and visibility contract, and the
[repository catalog](../docs/imported-repo-skills.md) for the current list.

## Install Into DisCo

The following command copies exactly the two runtime directories. It does not
copy this README into the managed skills root:

```bash
git clone https://github.com/VectorSpaceLab/Auto-ML-Skills.git
cd Auto-ML-Skills
mkdir -p ~/.disco/agent/skills
cp -R \
  research-skills-library/repo-skills \
  research-skills-library/repo-skills-router \
  ~/.disco/agent/skills/
```

The resulting layout is:

```text
~/.disco/agent/skills/
  repo-skills/
    <repository-skill-id>/
  repo-skills-router/
```

Restart DisCo or run `/reload` after an install. Approved task-specific skills
and Creator meta skills may coexist as separate top-level directories under
`~/.disco/agent/skills/`; they are not part of this repository-skill
collection.

## Contributing

Use `create-repo-skill`, `verify-repo-skill`, and the locked router updater when
adding or refreshing a repository graph. Keep structured
`references/repo-routing-metadata.json` inside each repository skill and rebuild
the sibling router rather than editing generated Markdown. The [contribution
guide](../CONTRIBUTING.md) describes validation and review requirements.

The library layout is intentionally extensible. A future task-related or
benchmark-specific collection can be added as a sibling collection with its
own documented ownership and installation rules; do not represent it as a
Python package merely because it contains executable helpers.
