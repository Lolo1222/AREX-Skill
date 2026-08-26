# Information Retrieval — General

## When To Read

Information Retrieval requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:information-retrieval-general:START -->
### `clip-as-service`

Role: Guides CLIP-as-service client, server, and CLIP search workflows for text/image embeddings, cross-modal ranking, and retrieval services.
Read when: The request names `clip-as-service` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client api, search retrieval, and server runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clip-as-service/SKILL.md`, `clip-as-service/sub-skills/client-api/`, `clip-as-service/sub-skills/search-retrieval/`, `clip-as-service/sub-skills/server-runtime/`, `clip-as-service/references/install-and-package-map.md`, `clip-as-service/references/repo-provenance.md`.

### `gerev`

Role: Route Gerev tasks across connector setup, search/indexing, and source or Docker runtime workflows.
Read when: The request names `gerev` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data source connectors, deployment runtime, and search indexing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gerev/SKILL.md`, `gerev/sub-skills/data-source-connectors/`, `gerev/sub-skills/deployment-runtime/`, `gerev/sub-skills/search-indexing/`, `gerev/references/deployment-runtime.md`, `gerev/references/frontend-api.md`.

### `pytorch-metric-learning`

Role: Routes PyTorch Metric Learning tasks across metric-learning components, training workflows, embedding evaluation, dataset loading, and sampling.
Read when: The request names `pytorch-metric-learning` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: components, data, evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-metric-learning/SKILL.md`, `pytorch-metric-learning/sub-skills/components/`, `pytorch-metric-learning/sub-skills/data/`, `pytorch-metric-learning/sub-skills/evaluation/`, `pytorch-metric-learning/sub-skills/training/`, `pytorch-metric-learning/references/repo-provenance.md`.

### `torchmetrics`

Role: Use TorchMetrics to choose, inspect, and combine metric families for PyTorch evaluation, including core API, domain metrics, model-based metrics, and wrappers.
Read when: The request names `torchmetrics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio text metrics, basic metric domains, collections wrappers plotting, core api, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torchmetrics/SKILL.md`, `torchmetrics/sub-skills/audio-text-metrics/`, `torchmetrics/sub-skills/basic-metric-domains/`, `torchmetrics/sub-skills/collections-wrappers-plotting/`, `torchmetrics/sub-skills/core-api/`, `torchmetrics/sub-skills/model-based-metrics/`, `torchmetrics/references/metric-selection-cheatsheet.md`.

<!-- DISCO_SCENARIO:information-retrieval-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
