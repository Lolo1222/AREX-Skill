# MLOps — General

## When To Read

MLOps requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:mlops-general:START -->
### `agent-starter-pack`

Role: Routes Agent Starter Pack tasks to the right workflow for creating, maintaining, and deploying generated agent projects.
Read when: The request names `agent-starter-pack` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment ops, project maintenance, and project scaffolding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agent-starter-pack/SKILL.md`, `agent-starter-pack/sub-skills/deployment-ops/`, `agent-starter-pack/sub-skills/project-maintenance/`, `agent-starter-pack/sub-skills/project-scaffolding/`, `agent-starter-pack/references/cli-reference.md`, `agent-starter-pack/references/package-overview.md`.

### `aim`

Role: Use Aim for experiment tracking SDK instrumentation, local/remote run storage, CLI/UI/server workflows, storage maintenance, and ML framework logging integrations.
Read when: The request names `aim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and services, framework integrations, and tracking sdk.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aim/SKILL.md`, `aim/sub-skills/cli-and-services/`, `aim/sub-skills/framework-integrations/`, `aim/sub-skills/tracking-sdk/`, `aim/references/package-overview.md`, `aim/references/repo-provenance.md`.

### `any4lerobot`

Role: Guides Any4LeRobot dataset conversions, LeRobot-to-RLDS export, and LeRobot v1.6-v3.0 format migrations with schema validation, version-aware environments, and safe publication boundaries.
Read when: The request names `any4lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agibot conversion, generic conversion, libero conversion, openx conversion, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `any4lerobot/SKILL.md`, `any4lerobot/sub-skills/agibot-conversion/`, `any4lerobot/sub-skills/generic-conversion/`, `any4lerobot/sub-skills/libero-conversion/`, `any4lerobot/sub-skills/openx-conversion/`, `any4lerobot/sub-skills/rlds-export/`, `any4lerobot/references/repo-provenance.md`.

### `anylabeling`

Role: Operate AnyLabeling desktop annotation, auto-labeling model, dataset export, install, packaging, and release workflows for the PyQt6/ONNX image-labeling package.
Read when: The request names `anylabeling` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotation ui and data, auto labeling models, and packaging release.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `anylabeling/SKILL.md`, `anylabeling/sub-skills/annotation-ui-and-data/`, `anylabeling/sub-skills/auto-labeling-models/`, `anylabeling/sub-skills/packaging-release/`, `anylabeling/references/installation-and-cli.md`, `anylabeling/references/repo-provenance.md`.

### `argilla`

Role: Use Argilla 2.x for human-feedback dataset annotation, Python SDK dataset workflows, server deployment/operations, webhooks, and legacy v1/Rubrix migration.
Read when: The request names `argilla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: legacy migration, python sdk, and server ops.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `argilla/SKILL.md`, `argilla/sub-skills/legacy-migration/`, `argilla/sub-skills/python-sdk/`, `argilla/sub-skills/server-ops/`, `argilla/references/package-overview.md`, `argilla/references/repo-provenance.md`.

### `autodistill`

Role: Guides core Autodistill workflows for foundation-model auto-labeling, target-model distillation, CLI/plugin registry use, custom model interfaces, and utilities.
Read when: The request names `autodistill` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and model registry, dataset labeling, ontologies and model interfaces, and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autodistill/SKILL.md`, `autodistill/sub-skills/cli-and-model-registry/`, `autodistill/sub-skills/dataset-labeling/`, `autodistill/sub-skills/ontologies-and-model-interfaces/`, `autodistill/sub-skills/utilities/`, `autodistill/references/package-overview.md`.

### `autoviz`

Role: Routes AutoViz users to automated EDA, data-quality, and text/wordcloud workflows.
Read when: The request names `autoviz` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data quality fixes, eda visualization, and text wordclouds.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autoviz/SKILL.md`, `autoviz/sub-skills/data-quality-fixes/`, `autoviz/sub-skills/eda-visualization/`, `autoviz/sub-skills/text-wordclouds/`, `autoviz/references/api-reference.md`, `autoviz/references/chart-formats.md`.

### `cleanlab`

Role: Routes cleanlab data-centric AI workflows for finding label errors, dataset issues, outliers, annotator quality, and task-specific label-quality problems.
Read when: The request names `cleanlab` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, datalab, experimental, multiannotator, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cleanlab/SKILL.md`, `cleanlab/sub-skills/classification/`, `cleanlab/sub-skills/datalab/`, `cleanlab/sub-skills/experimental/`, `cleanlab/sub-skills/multiannotator/`, `cleanlab/sub-skills/outlier/`, `cleanlab/references/repo-provenance.md`.

### `cookiecutter-data-science`

Role: Use Cookiecutter Data Science to generate, configure, validate, and troubleshoot reproducible data-science project templates and generated project workflows.
Read when: The request names `cookiecutter-data-science` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generated project workflows, project generation cli, and template options and hooks.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cookiecutter-data-science/SKILL.md`, `cookiecutter-data-science/sub-skills/generated-project-workflows/`, `cookiecutter-data-science/sub-skills/project-generation-cli/`, `cookiecutter-data-science/sub-skills/template-options-and-hooks/`, `cookiecutter-data-science/references/compatibility.md`, `cookiecutter-data-science/references/repo-provenance.md`.

### `cube-studio`

Role: Route CubeStudio MLOps platform deployment, customization, and operation tasks.
Read when: The request names `cube-studio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and configuration, compute notebooks and images, data metadata and sqllab, deploy and operate, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cube-studio/SKILL.md`, `cube-studio/sub-skills/backend-and-configuration/`, `cube-studio/sub-skills/compute-notebooks-and-images/`, `cube-studio/sub-skills/data-metadata-and-sqllab/`, `cube-studio/sub-skills/deploy-and-operate/`, `cube-studio/sub-skills/pipelines-and-job-templates/`, `cube-studio/references/configuration-and-catalogs.md`.

### `cvat`

Role: Operate CVAT for computer-vision annotation, dataset workflows, SDK/CLI automation, auto-annotation, and self-hosted deployment.
Read when: The request names `cvat` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auto annotation, cli automation, dataset ops, deployment admin, and sdk automation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cvat/SKILL.md`, `cvat/sub-skills/auto-annotation/`, `cvat/sub-skills/cli-automation/`, `cvat/sub-skills/dataset-ops/`, `cvat/sub-skills/deployment-admin/`, `cvat/sub-skills/sdk-automation/`, `cvat/references/cvat-overview.md`.

### `data-designer-repo-skill`

Role: Use when you need to design DataDesigner configs, run preview/create/validate workflows, inspect the CLI or agent context, work with plugins or MCP tools, or adapt documented recipes and integrations for synthetic dataset generation.
Read when: The request names `data-designer-repo-skill`, `data-designer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and agent tools, config authoring, generation runtime, plugins and extensions, and recipes and integrations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-designer-repo-skill/SKILL.md`, `data-designer-repo-skill/sub-skills/cli-and-agent-tools/`, `data-designer-repo-skill/sub-skills/config-authoring/`, `data-designer-repo-skill/sub-skills/generation-runtime/`, `data-designer-repo-skill/sub-skills/plugins-and-extensions/`, `data-designer-repo-skill/sub-skills/recipes-and-integrations/`, `data-designer-repo-skill/references/package-overview.md`.

### `data-juicer`

Role: Data-Juicer repo router for local recipes, Ray recovery, and service/MCP workflows.
Read when: The request names `data-juicer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ray and recovery, recipes and ops, and service mcp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-juicer/SKILL.md`, `data-juicer/sub-skills/ray-and-recovery/`, `data-juicer/sub-skills/recipes-and-ops/`, `data-juicer/sub-skills/service-mcp/`, `data-juicer/references/api-reference.md`, `data-juicer/references/cli-reference.md`.

### `datachain`

Role: Routes DataChain operating guidance for Python SDK pipelines, query expressions, CLI and Studio commands, agent-harness knowledge workflows, and repository maintenance.
Read when: The request names `datachain` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent harness, cli and studio, query engine, repo development, and sdk pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `datachain/SKILL.md`, `datachain/sub-skills/agent-harness/`, `datachain/sub-skills/cli-and-studio/`, `datachain/sub-skills/query-engine/`, `datachain/sub-skills/repo-development/`, `datachain/sub-skills/sdk-pipelines/`, `datachain/references/repo-provenance.md`.

### `deepchecks`

Role: Route Deepchecks package tasks for ML data/model validation across tabular, NLP, vision, result export, and integration workflows.
Read when: The request names `deepchecks` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: nlp validation, results and integrations, tabular validation, and vision validation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepchecks/SKILL.md`, `deepchecks/sub-skills/nlp-validation/`, `deepchecks/sub-skills/results-and-integrations/`, `deepchecks/sub-skills/tabular-validation/`, `deepchecks/sub-skills/vision-validation/`, `deepchecks/references/package-overview.md`.

### `doccano`

Role: Operate doccano for text annotation, dataset import/export, auto-labeling, deployment, and repo maintenance.
Read when: The request names `doccano` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auto labeling, data transfer, project annotation, and setup and deploy.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `doccano/SKILL.md`, `doccano/sub-skills/auto-labeling/`, `doccano/sub-skills/data-transfer/`, `doccano/sub-skills/project-annotation/`, `doccano/sub-skills/setup-and-deploy/`, `doccano/references/cli-reference.md`.

### `fastdup`

Role: Route fastdup workflows for visual dataset curation, annotation-driven analysis, embeddings and search, and video or exchange plumbing.
Read when: The request names `fastdup` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset curation, media and exchange, model enrichment, and structured datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fastdup/SKILL.md`, `fastdup/sub-skills/dataset-curation/`, `fastdup/sub-skills/media-and-exchange/`, `fastdup/sub-skills/model-enrichment/`, `fastdup/sub-skills/structured-datasets/`, `fastdup/references/api-reference.md`.

### `h2o-llmstudio`

Role: Use H2O LLM Studio for no-code and CLI LLM fine-tuning, dataset/config preparation, training diagnostics, evaluation, prompting, export, and the Wave GUI runtime.
Read when: The request names `h2o-llmstudio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app and ui, configuration and data, export and prompt, modeling and evaluation, and training and experiments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `h2o-llmstudio/SKILL.md`, `h2o-llmstudio/sub-skills/app-and-ui/`, `h2o-llmstudio/sub-skills/configuration-and-data/`, `h2o-llmstudio/sub-skills/export-and-prompt/`, `h2o-llmstudio/sub-skills/modeling-and-evaluation/`, `h2o-llmstudio/sub-skills/training-and-experiments/`, `h2o-llmstudio/references/repo-provenance.md`.

### `instill-core`

Role: Guides Instill Core Docker Compose, Helm, integration-test, and release-maintenance workflows.
Read when: The request names `instill-core` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: helm deployment, integration tests, local compose, and release maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `instill-core/SKILL.md`, `instill-core/sub-skills/helm-deployment/`, `instill-core/sub-skills/integration-tests/`, `instill-core/sub-skills/local-compose/`, `instill-core/sub-skills/release-maintenance/`, `instill-core/references/configuration.md`.

### `kubeflow-pipelines`

Role: Route Kubeflow Pipelines SDK, client, Kubernetes-addon, and repository-maintenance workflows to the right sub-skill.
Read when: The request names `kubeflow-pipelines` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client and registry, compiler and cli, kubernetes platform, pipeline authoring, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kubeflow-pipelines/SKILL.md`, `kubeflow-pipelines/sub-skills/client-and-registry/`, `kubeflow-pipelines/sub-skills/compiler-and-cli/`, `kubeflow-pipelines/sub-skills/kubernetes-platform/`, `kubeflow-pipelines/sub-skills/pipeline-authoring/`, `kubeflow-pipelines/sub-skills/repo-development/`, `kubeflow-pipelines/references/package-overview.md`.

### `labelme`

Role: Routes labelme image annotation, Annotation File, dataset export, AI-assisted annotation, configuration, and repository-maintenance workflows.
Read when: The request names `labelme` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ai assisted annotation, annotation data, cli and config, dataset export, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `labelme/SKILL.md`, `labelme/sub-skills/ai-assisted-annotation/`, `labelme/sub-skills/annotation-data/`, `labelme/sub-skills/cli-and-config/`, `labelme/sub-skills/dataset-export/`, `labelme/sub-skills/repo-development/`, `labelme/references/public-interface-and-scope.md`.

### `labml`

Role: Guides labml experiment tracking, helper training, remote execution, and app-server workflows.
Read when: The request names `labml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: helpers, remote, server, and tracking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `labml/SKILL.md`, `labml/sub-skills/helpers/`, `labml/sub-skills/remote/`, `labml/sub-skills/server/`, `labml/sub-skills/tracking/`, `labml/references/package-map.md`.

### `leptonai`

Role: Use the LeptonAI Python SDK and lep CLI for NVIDIA DGX Cloud Lepton workspaces, endpoint calls, workloads, storage, secrets, ingress routing, and safe cloud-operation planning.
Read when: The request names `leptonai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, sdk client, storage secrets ingress, workload management, and workspace and auth.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `leptonai/SKILL.md`, `leptonai/sub-skills/cli-operations/`, `leptonai/sub-skills/sdk-client/`, `leptonai/sub-skills/storage-secrets-ingress/`, `leptonai/sub-skills/workload-management/`, `leptonai/sub-skills/workspace-and-auth/`, `leptonai/references/package-overview.md`.

### `lerobot`

Role: Route LeRobot robotics workflows for datasets, policies, training, evaluation, simulation, physical robot control, and package extensions with verified configuration and safety gates.
Read when: The request names `lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset workflows, extensions and services, policy training inference, robot control data collection, and simulation and rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lerobot/SKILL.md`, `lerobot/sub-skills/dataset-workflows/`, `lerobot/sub-skills/extensions-and-services/`, `lerobot/sub-skills/policy-training-inference/`, `lerobot/sub-skills/robot-control-data-collection/`, `lerobot/sub-skills/simulation-and-rl/`, `lerobot/references/quick-reference.md`.

### `lightning-hydra-template`

Role: Operate Lightning-Hydra-Template projects: Hydra configs, Lightning training/evaluation, data/model customization, tests, CI, and template maintenance.
Read when: The request names `lightning-hydra-template` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configure experiments, customize data model, test maintain template, and train evaluate.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightning-hydra-template/SKILL.md`, `lightning-hydra-template/sub-skills/configure-experiments/`, `lightning-hydra-template/sub-skills/customize-data-model/`, `lightning-hydra-template/sub-skills/test-maintain-template/`, `lightning-hydra-template/sub-skills/train-evaluate/`, `lightning-hydra-template/references/quickstart-and-environment.md`.

### `metaflow`

Role: Guides Metaflow workflow authoring, local and remote execution, client/data access, cards, dependency environments, deployment orchestration, and repository maintenance.
Read when: The request names `metaflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cards and observability, client and data, dependency environments, deployment orchestration, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `metaflow/SKILL.md`, `metaflow/sub-skills/cards-and-observability/`, `metaflow/sub-skills/client-and-data/`, `metaflow/sub-skills/dependency-environments/`, `metaflow/sub-skills/deployment-orchestration/`, `metaflow/sub-skills/flow-authoring/`, `metaflow/references/api-and-cli-overview.md`.

### `modal`

Role: Guides modAL-python active-learning workflows, query strategies, committees, Bayesian optimization, and optional deep integrations.
Read when: The request names `modal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bayesian optimization, deep and optional integrations, learners and committees, and query strategies.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `modal/SKILL.md`, `modal/sub-skills/bayesian-optimization/`, `modal/sub-skills/deep-and-optional-integrations/`, `modal/sub-skills/learners-and-committees/`, `modal/sub-skills/query-strategies/`, `modal/references/package-overview.md`.

### `modelscope`

Role: Use ModelScope SDK workflows for Hub access, pipelines, datasets, training, serving, export, customization, and repository contribution without relying on a source checkout.
Read when: The request names `modelscope` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: customization and development, datasets config, hub and cli, pipelines and models, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `modelscope/SKILL.md`, `modelscope/sub-skills/customization-and-development/`, `modelscope/sub-skills/datasets-config/`, `modelscope/sub-skills/hub-and-cli/`, `modelscope/sub-skills/pipelines-and-models/`, `modelscope/sub-skills/serving-export-and-tools/`, `modelscope/references/package-overview.md`.

### `nannyml`

Role: Use NannyML to monitor tabular ML models with performance estimation/calculation, drift detection, data-quality checks, chunking, thresholds, and CLI automation.
Read when: The request names `nannyml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and automation, data setup, drift monitoring, and performance monitoring.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nannyml/SKILL.md`, `nannyml/sub-skills/cli-and-automation/`, `nannyml/sub-skills/data-setup/`, `nannyml/sub-skills/drift-monitoring/`, `nannyml/sub-skills/performance-monitoring/`, `nannyml/references/datasets.md`.

### `openllm`

Role: Guides OpenLLM installation, model catalog management, local OpenAI-compatible serving, BentoCloud deployment, and operational troubleshooting for self-hosted LLM workflows.
Read when: The request names `openllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud deployment, environment maintenance, local serving, and model repositories.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openllm/SKILL.md`, `openllm/sub-skills/cloud-deployment/`, `openllm/sub-skills/environment-maintenance/`, `openllm/sub-skills/local-serving/`, `openllm/sub-skills/model-repositories/`, `openllm/references/cli-overview.md`.

### `pycaret`

Role: Routes PyCaret monorepo tasks across engine workflows, backend API work, web UI edits, deployment operations, and maintainer workflows.
Read when: The request names `pycaret` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control plane api, engine workflows, platform operations, repo development, and web ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pycaret/SKILL.md`, `pycaret/sub-skills/control-plane-api/`, `pycaret/sub-skills/engine-workflows/`, `pycaret/sub-skills/platform-operations/`, `pycaret/sub-skills/repo-development/`, `pycaret/sub-skills/web-ui/`, `pycaret/references/package-overview.md`.

### `sacred`

Role: Use Sacred to configure, run, log, observe, and reproduce Python ML experiments with experiment, configuration, CLI, observer, and reproducibility workflows.
Read when: The request names `sacred` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and cli, experiment core, observers and logging, and reproducibility and capture.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sacred/SKILL.md`, `sacred/sub-skills/configuration-and-cli/`, `sacred/sub-skills/experiment-core/`, `sacred/sub-skills/observers-and-logging/`, `sacred/sub-skills/reproducibility-and-capture/`, `sacred/references/package-overview.md`.

### `sagemaker-python-sdk`

Role: Route SageMaker Python SDK v3 tasks to self-contained guidance for core resources, training, model customization, serving, MLOps, migration, and troubleshooting.
Read when: The request names `sagemaker-python-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core resources, mlops, model customization, serving, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sagemaker-python-sdk/SKILL.md`, `sagemaker-python-sdk/sub-skills/core-resources/`, `sagemaker-python-sdk/sub-skills/mlops/`, `sagemaker-python-sdk/sub-skills/model-customization/`, `sagemaker-python-sdk/sub-skills/serving/`, `sagemaker-python-sdk/sub-skills/training/`, `sagemaker-python-sdk/references/api-signature-summary.md`.

### `sdv`

Role: Use the Synthetic Data Vault (SDV) Python package for tabular synthetic data preparation, constraints, synthesis, and evaluation workflows.
Read when: The request names `sdv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: constraints, data preparation, evaluation, multi table, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sdv/SKILL.md`, `sdv/sub-skills/constraints/`, `sdv/sub-skills/data-preparation/`, `sdv/sub-skills/evaluation/`, `sdv/sub-skills/multi-table/`, `sdv/sub-skills/sequential/`, `sdv/references/api-reference.md`.

### `snorkel`

Role: Operate Snorkel weak-supervision, data transform, classification, and slicing workflows.
Read when: The request names `snorkel` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, data transforms, labeling, and slicing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `snorkel/SKILL.md`, `snorkel/sub-skills/classification/`, `snorkel/sub-skills/data-transforms/`, `snorkel/sub-skills/labeling/`, `snorkel/sub-skills/slicing/`, `snorkel/references/installation-and-optional-dependencies.md`.

### `swanlab`

Role: Use SwanLab for ML experiment tracking, logging, media charts, modes, CLI/Open API, sync/converters, integrations, plugins, and troubleshooting.
Read when: The request names `swanlab` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: experiment tracking, integrations and plugins, media and custom charts, open api and cli, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `swanlab/SKILL.md`, `swanlab/sub-skills/experiment-tracking/`, `swanlab/sub-skills/integrations-and-plugins/`, `swanlab/sub-skills/media-and-custom-charts/`, `swanlab/sub-skills/open-api-and-cli/`, `swanlab/sub-skills/settings-and-modes/`, `swanlab/references/installation-and-environment.md`.

### `synthetic-data-generator`

Role: Use SDGX/Synthetic Data Generator for tabular synthetic data, metadata inspection, relationship metadata, CLI fit/sample, LLM synthesis, evaluation metrics, and plugin-oriented extension workflows.
Read when: The request names `synthetic-data-generator` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, llm synthesis, and single table synthesis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `synthetic-data-generator/SKILL.md`, `synthetic-data-generator/sub-skills/data-preparation/`, `synthetic-data-generator/sub-skills/evaluation/`, `synthetic-data-generator/sub-skills/llm-synthesis/`, `synthetic-data-generator/sub-skills/single-table-synthesis/`, `synthetic-data-generator/references/component-map.md`.

### `tensorboard-x`

Role: Router for tensorboardX logging, summaries, graph/projector workflows, and integration-safe writer usage.
Read when: The request names `tensorboard-x` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: graph and embedding plugins, logging core, remote and parallel integrations, and rich media summaries.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorboard-x/SKILL.md`, `tensorboard-x/sub-skills/graph-and-embedding-plugins/`, `tensorboard-x/sub-skills/logging-core/`, `tensorboard-x/sub-skills/remote-and-parallel-integrations/`, `tensorboard-x/sub-skills/rich-media-summaries/`, `tensorboard-x/references/install-and-routing.md`.

### `tensorflow-datasets`

Role: Use TensorFlow Datasets for dataset loading, builder authoring, tfds CLI workflows, external/community formats, Beam scaling, and TFDS-specific troubleshooting.
Read when: The request names `tensorflow-datasets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: beam and performance, cli workflows, data loading, dataset authoring, and formats and community.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-datasets/SKILL.md`, `tensorflow-datasets/sub-skills/beam-and-performance/`, `tensorflow-datasets/sub-skills/cli-workflows/`, `tensorflow-datasets/sub-skills/data-loading/`, `tensorflow-datasets/sub-skills/dataset-authoring/`, `tensorflow-datasets/sub-skills/formats-and-community/`, `tensorflow-datasets/references/api-overview.md`.

### `tensorflow-hub`

Role: Use TensorFlow Hub to resolve, load, wrap, and export Hub-compatible TensorFlow SavedModels.
Read when: The request names `tensorflow-hub` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export and save and load and wrap.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-hub/SKILL.md`, `tensorflow-hub/sub-skills/export-and-save/`, `tensorflow-hub/sub-skills/load-and-wrap/`, `tensorflow-hub/references/repo-provenance.md`, `tensorflow-hub/references/troubleshooting.md`.

### `tensorflow-project-template`

Role: Guides agents in adapting TensorFlow Project Template training-project structure, configs, models, trainers, data loaders, TensorBoard logging, checkpoints, and safe smoke checks.
Read when: The request names `tensorflow-project-template` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-project-template/SKILL.md`, `tensorflow-project-template/references/api-reference.md`, `tensorflow-project-template/references/configuration.md`, `tensorflow-project-template/references/extension-workflow.md`, `tensorflow-project-template/references/repo-provenance.md`, `tensorflow-project-template/references/troubleshooting.md`.

### `tensorflow-template-application`

Role: Route TensorFlow template application workflows for data preparation, TF1 training/export, and serving/client tasks.
Read when: The request names `tensorflow-template-application` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, serving and clients, and training and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-template-application/SKILL.md`, `tensorflow-template-application/sub-skills/data-preparation/`, `tensorflow-template-application/sub-skills/serving-and-clients/`, `tensorflow-template-application/sub-skills/training-and-export/`, `tensorflow-template-application/references/installation.md`, `tensorflow-template-application/references/repo-provenance.md`.

### `transformerlab-app`

Role: Operate on the Transformer Lab application monorepo: React web UI, FastAPI backend, task/job compute providers, Typer CLI, and Python SDK workflows.
Read when: The request names `transformerlab-app` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend api services, cli sdk workflows, frontend web app, and task execution compute.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transformerlab-app/SKILL.md`, `transformerlab-app/sub-skills/backend-api-services/`, `transformerlab-app/sub-skills/cli-sdk-workflows/`, `transformerlab-app/sub-skills/frontend-web-app/`, `transformerlab-app/sub-skills/task-execution-compute/`, `transformerlab-app/references/development-commands.md`.

### `xinference`

Role: Use Xinference for local and distributed model serving, Python clients, OpenAI-compatible APIs, model backend selection, and production operations.
Read when: The request names `xinference` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client and api, models and backends, operations and security, and serving and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xinference/SKILL.md`, `xinference/sub-skills/client-and-api/`, `xinference/sub-skills/models-and-backends/`, `xinference/sub-skills/operations-and-security/`, `xinference/sub-skills/serving-and-cli/`, `xinference/references/installation-and-environment.md`.

<!-- DISCO_SCENARIO:mlops-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
