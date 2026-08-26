# Pipeline Orchestration

## When To Read

Requests in the Pipeline Orchestration family of the MLOps area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on pipeline orchestration.

## Repo Skill Options

<!-- DISCO_SCENARIO:pipeline-orchestration:START -->
### `cube-studio`

Role: Route CubeStudio MLOps platform deployment, customization, and operation tasks.
Read when: The request names `cube-studio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and configuration, compute notebooks and images, data metadata and sqllab, deploy and operate, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cube-studio/SKILL.md`, `cube-studio/sub-skills/backend-and-configuration/`, `cube-studio/sub-skills/compute-notebooks-and-images/`, `cube-studio/sub-skills/data-metadata-and-sqllab/`, `cube-studio/sub-skills/deploy-and-operate/`, `cube-studio/sub-skills/pipelines-and-job-templates/`, `cube-studio/references/configuration-and-catalogs.md`.

### `fedml`

Role: Use FedML for setup, CLI operations, MLOps launch, distributed and federated training, model serving, and workflow orchestration.
Read when: The request names `fedml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed training, federated learning, launch and packaging, model serving, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fedml/SKILL.md`, `fedml/sub-skills/distributed-training/`, `fedml/sub-skills/federated-learning/`, `fedml/sub-skills/launch-and-packaging/`, `fedml/sub-skills/model-serving/`, `fedml/sub-skills/setup-and-cli/`, `fedml/references/api-reference.md`.

### `fugue`

Role: Operate Fugue workflows, FugueSQL, backend selection, and notebook magics for pandas and distributed dataframe execution.
Read when: The request names `fugue` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends, notebook, sql, and workflow.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fugue/SKILL.md`, `fugue/sub-skills/backends/`, `fugue/sub-skills/notebook/`, `fugue/sub-skills/sql/`, `fugue/sub-skills/workflow/`, `fugue/references/overview.md`.

### `instill-core`

Role: Guides Instill Core Docker Compose, Helm, integration-test, and release-maintenance workflows.
Read when: The request names `instill-core` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: helm deployment, integration tests, local compose, and release maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `instill-core/SKILL.md`, `instill-core/sub-skills/helm-deployment/`, `instill-core/sub-skills/integration-tests/`, `instill-core/sub-skills/local-compose/`, `instill-core/sub-skills/release-maintenance/`, `instill-core/references/configuration.md`.

### `jina-serve`

Role: Use Jina-serve to build, serve, orchestrate, call, observe, and deploy AI microservices and pipelines with the jina Python package.
Read when: The request names `jina-serve` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and configuration, client and protocols, executor service patterns, observability and production, and orchestration and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jina-serve/SKILL.md`, `jina-serve/sub-skills/cli-and-configuration/`, `jina-serve/sub-skills/client-and-protocols/`, `jina-serve/sub-skills/executor-service-patterns/`, `jina-serve/sub-skills/observability-and-production/`, `jina-serve/sub-skills/orchestration-and-deployment/`, `jina-serve/references/api-overview.md`.

### `kubeflow-pipelines`

Role: Route Kubeflow Pipelines SDK, client, Kubernetes-addon, and repository-maintenance workflows to the right sub-skill.
Read when: The request names `kubeflow-pipelines` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client and registry, compiler and cli, kubernetes platform, pipeline authoring, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kubeflow-pipelines/SKILL.md`, `kubeflow-pipelines/sub-skills/client-and-registry/`, `kubeflow-pipelines/sub-skills/compiler-and-cli/`, `kubeflow-pipelines/sub-skills/kubernetes-platform/`, `kubeflow-pipelines/sub-skills/pipeline-authoring/`, `kubeflow-pipelines/sub-skills/repo-development/`, `kubeflow-pipelines/references/package-overview.md`.

### `mage-ai`

Role: Mage AI repo skill for platform operations, pipeline authoring, integrations, dbt, streaming, and AI workflows.
Read when: The request names `mage-ai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ai workflows, batch integrations, dbt workflows, pipeline authoring, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mage-ai/SKILL.md`, `mage-ai/sub-skills/ai-workflows/`, `mage-ai/sub-skills/batch-integrations/`, `mage-ai/sub-skills/dbt-workflows/`, `mage-ai/sub-skills/pipeline-authoring/`, `mage-ai/sub-skills/platform-ops/`, `mage-ai/references/repo-provenance.md`.

### `meshroom`

Role: Guides Meshroom graph-engine, node-descriptor, plugin, CLI pipeline, PySide/QML UI, and local-farm submission workflows for agents working with Meshroom projects or the Meshroom Python package.
Read when: The request names `meshroom` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli pipeline execution, core graph engine, local farm submission, node descriptors, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `meshroom/SKILL.md`, `meshroom/sub-skills/cli-pipeline-execution/`, `meshroom/sub-skills/core-graph-engine/`, `meshroom/sub-skills/local-farm-submission/`, `meshroom/sub-skills/node-descriptors/`, `meshroom/sub-skills/plugin-system/`, `meshroom/references/repo-provenance.md`.

### `metaflow`

Role: Guides Metaflow workflow authoring, local and remote execution, client/data access, cards, dependency environments, deployment orchestration, and repository maintenance.
Read when: The request names `metaflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cards and observability, client and data, dependency environments, deployment orchestration, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `metaflow/SKILL.md`, `metaflow/sub-skills/cards-and-observability/`, `metaflow/sub-skills/client-and-data/`, `metaflow/sub-skills/dependency-environments/`, `metaflow/sub-skills/deployment-orchestration/`, `metaflow/sub-skills/flow-authoring/`, `metaflow/references/api-and-cli-overview.md`.

### `roboflow-inference`

Role: Route Roboflow Inference users through CLI operations, SDK/WebRTC, workflow processing, and model runtime selection.
Read when: The request names `roboflow-inference` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, model runtime, sdk webrtc, and workflow processing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `roboflow-inference/SKILL.md`, `roboflow-inference/sub-skills/cli-operations/`, `roboflow-inference/sub-skills/model-runtime/`, `roboflow-inference/sub-skills/sdk-webrtc/`, `roboflow-inference/sub-skills/workflow-processing/`, `roboflow-inference/references/installation.md`.

### `rocketride-server`

Role: Operate RocketRide Server workflows across pipeline authoring, SDK clients, node catalog, runtime deployment, IDE apps, MCP/n8n integrations, and contributor docs/build tasks.
Read when: The request names `rocketride-server` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: development build docs, ide and apps, mcp and integrations, nodes catalog, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rocketride-server/SKILL.md`, `rocketride-server/sub-skills/development-build-docs/`, `rocketride-server/sub-skills/ide-and-apps/`, `rocketride-server/sub-skills/mcp-and-integrations/`, `rocketride-server/sub-skills/nodes-catalog/`, `rocketride-server/sub-skills/pipeline-authoring/`, `rocketride-server/references/repo-overview.md`.

### `sagemaker-python-sdk`

Role: Route SageMaker Python SDK v3 tasks to self-contained guidance for core resources, training, model customization, serving, MLOps, migration, and troubleshooting.
Read when: The request names `sagemaker-python-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core resources, mlops, model customization, serving, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sagemaker-python-sdk/SKILL.md`, `sagemaker-python-sdk/sub-skills/core-resources/`, `sagemaker-python-sdk/sub-skills/mlops/`, `sagemaker-python-sdk/sub-skills/model-customization/`, `sagemaker-python-sdk/sub-skills/serving/`, `sagemaker-python-sdk/sub-skills/training/`, `sagemaker-python-sdk/references/api-signature-summary.md`.

### `secretflow`

Role: Guides SecretFlow workflows for runtime setup, federated data containers, the component CLI, preprocessing/statistics/classical ML, and privacy-oriented deployment tasks.
Read when: The request names `secretflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analytics, component cli, privacy orchestration, and runtime data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `secretflow/SKILL.md`, `secretflow/sub-skills/analytics/`, `secretflow/sub-skills/component-cli/`, `secretflow/sub-skills/privacy-orchestration/`, `secretflow/sub-skills/runtime-data/`, `secretflow/references/repo-provenance.md`.

### `towhee`

Role: Route Towhee pipeline, operator, data utility, service, Triton, training, and model-zoo tasks to self-contained workflow guidance.
Read when: The request names `towhee` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data utilities, operator hub and cli, pipeline programming, serving and triton, and training and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `towhee/SKILL.md`, `towhee/sub-skills/data-utilities/`, `towhee/sub-skills/operator-hub-and-cli/`, `towhee/sub-skills/pipeline-programming/`, `towhee/sub-skills/serving-and-triton/`, `towhee/sub-skills/training-and-models/`, `towhee/references/installation-and-compatibility.md`.

<!-- DISCO_SCENARIO:pipeline-orchestration:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
