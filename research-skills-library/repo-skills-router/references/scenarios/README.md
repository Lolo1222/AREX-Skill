# Scenario Pages

Each file in this directory maps one practical usage scenario to the imported
repo skills that can handle it.

Scenario pages belong to the live user-managed `repo-skills-router`. They are
generated from structured routing metadata by
`verify-repo-skill/scripts/update_repo_skills_router.mjs`. For a normal add,
replacement, or refresh, update the verified staged skill's metadata and run
`verify-repo-skill/scripts/import_repo_skill.mjs`; do not hand-edit scenario
pages or run the updater separately as the import mechanism. Direct updater use
is reserved for intentional router-only maintenance under the global lock.
