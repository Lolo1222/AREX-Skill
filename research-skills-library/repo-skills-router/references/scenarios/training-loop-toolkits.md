# Training Loop Toolkits

## When To Read

Requests in the Training Loop Toolkits family of the Training Infrastructure area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on training loop toolkits.

## Repo Skill Options

<!-- DISCO_SCENARIO:training-loop-toolkits:START -->
### `alphafold3-pytorch`

Role: Use AlphaFold 3 PyTorch for protein and biomolecular structure-prediction workflows, heterogeneous molecule inputs, PDB/mmCIF/MSA/template preparation, bounded model inference, training configuration, and local CLI or Gradio operation.
Read when: The request names `alphafold3-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli serving, data pipeline, input representation, model inference, and training configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alphafold3-pytorch/SKILL.md`, `alphafold3-pytorch/sub-skills/cli-serving/`, `alphafold3-pytorch/sub-skills/data-pipeline/`, `alphafold3-pytorch/sub-skills/input-representation/`, `alphafold3-pytorch/sub-skills/model-inference/`, `alphafold3-pytorch/sub-skills/training-configuration/`, `alphafold3-pytorch/references/environment-and-dependencies.md`.

### `basic-ts`

Role: Routes BasicTS time-series training, dataset, model, and pipeline workflows through focused sub-skills.
Read when: The request names `basic-ts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model development, pipeline extension, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `basic-ts/SKILL.md`, `basic-ts/sub-skills/data-preparation/`, `basic-ts/sub-skills/model-development/`, `basic-ts/sub-skills/pipeline-extension/`, `basic-ts/sub-skills/training-evaluation/`, `basic-ts/references/repo-provenance.md`.

### `composer`

Role: Use MosaicML Composer for PyTorch training loops, speedup methods, loggers, checkpoints, distributed launch, profiling, and model export.
Read when: The request names `composer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed, inference export, methods, observability, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `composer/SKILL.md`, `composer/sub-skills/distributed/`, `composer/sub-skills/inference-export/`, `composer/sub-skills/methods/`, `composer/sub-skills/observability/`, `composer/sub-skills/training/`, `composer/references/installation-and-package-map.md`.

### `ignite`

Role: Routes PyTorch Ignite training, handlers, metrics, distributed, and legacy contrib workflows.
Read when: The request names `ignite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed, engine, handlers, and metrics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ignite/SKILL.md`, `ignite/sub-skills/distributed/`, `ignite/sub-skills/engine/`, `ignite/sub-skills/handlers/`, `ignite/sub-skills/metrics/`, `ignite/references/legacy-contrib.md`.

### `labml`

Role: Guides labml experiment tracking, helper training, remote execution, and app-server workflows.
Read when: The request names `labml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: helpers, remote, server, and tracking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `labml/SKILL.md`, `labml/sub-skills/helpers/`, `labml/sub-skills/remote/`, `labml/sub-skills/server/`, `labml/sub-skills/tracking/`, `labml/references/package-map.md`.

### `lightly`

Role: Use LightlySSL for self-supervised computer-vision training, model components, CLIs, embeddings, data layout, evaluation, and repository maintenance.
Read when: The request names `lightly` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli data embedding, evaluation maintenance, ssl building blocks, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightly/SKILL.md`, `lightly/sub-skills/cli-data-embedding/`, `lightly/sub-skills/evaluation-maintenance/`, `lightly/sub-skills/ssl-building-blocks/`, `lightly/sub-skills/training-workflows/`, `lightly/references/package-overview.md`.

### `lightning-hydra-template`

Role: Operate Lightning-Hydra-Template projects: Hydra configs, Lightning training/evaluation, data/model customization, tests, CI, and template maintenance.
Read when: The request names `lightning-hydra-template` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configure experiments, customize data model, test maintain template, and train evaluate.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightning-hydra-template/SKILL.md`, `lightning-hydra-template/sub-skills/configure-experiments/`, `lightning-hydra-template/sub-skills/customize-data-model/`, `lightning-hydra-template/sub-skills/test-maintain-template/`, `lightning-hydra-template/sub-skills/train-evaluate/`, `lightning-hydra-template/references/quickstart-and-environment.md`.

### `maestro`

Role: Use Maestro for vision-language model fine-tuning, dataset validation, model-specific CLI/API workflows, checkpoints, inference, and troubleshooting.
Read when: The request names `maestro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and metrics, florence 2, paligemma 2, and qwen 2 5 vl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maestro/SKILL.md`, `maestro/sub-skills/datasets-and-metrics/`, `maestro/sub-skills/florence-2/`, `maestro/sub-skills/paligemma-2/`, `maestro/sub-skills/qwen-2-5-vl/`, `maestro/references/installation-and-cli.md`.

### `modelscope`

Role: Use ModelScope SDK workflows for Hub access, pipelines, datasets, training, serving, export, customization, and repository contribution without relying on a source checkout.
Read when: The request names `modelscope` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: customization and development, datasets config, hub and cli, pipelines and models, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `modelscope/SKILL.md`, `modelscope/sub-skills/customization-and-development/`, `modelscope/sub-skills/datasets-config/`, `modelscope/sub-skills/hub-and-cli/`, `modelscope/sub-skills/pipelines-and-models/`, `modelscope/sub-skills/serving-export-and-tools/`, `modelscope/references/package-overview.md`.

### `pytorch-metric-learning`

Role: Routes PyTorch Metric Learning tasks across metric-learning components, training workflows, embedding evaluation, dataset loading, and sampling.
Read when: The request names `pytorch-metric-learning` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: components, data, evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-metric-learning/SKILL.md`, `pytorch-metric-learning/sub-skills/components/`, `pytorch-metric-learning/sub-skills/data/`, `pytorch-metric-learning/sub-skills/evaluation/`, `pytorch-metric-learning/sub-skills/training/`, `pytorch-metric-learning/references/repo-provenance.md`.

### `pytracking`

Role: Use PyTracking and LTR for visual object tracking, video object segmentation, tracker evaluation, result analysis, custom tracker development, and PyTorch training workflows.
Read when: The request names `pytracking` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and packaging, ltr training, tracker development, and tracking evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytracking/SKILL.md`, `pytracking/sub-skills/analysis-and-packaging/`, `pytracking/sub-skills/ltr-training/`, `pytracking/sub-skills/tracker-development/`, `pytracking/sub-skills/tracking-evaluation/`, `pytracking/references/configuration.md`.

### `scenic`

Role: Use Scenic, Google Research's JAX/Flax computer-vision research codebase, for configs, training, datasets, models, layers, baselines, and project-specific workflows.
Read when: The request names `scenic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: baselines and projects, data pipelines, modeling and layers, and running and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scenic/SKILL.md`, `scenic/sub-skills/baselines-and-projects/`, `scenic/sub-skills/data-pipelines/`, `scenic/sub-skills/modeling-and-layers/`, `scenic/sub-skills/running-and-training/`, `scenic/references/common-utilities.md`.

### `tensorflow-project-template`

Role: Guides agents in adapting TensorFlow Project Template training-project structure, configs, models, trainers, data loaders, TensorBoard logging, checkpoints, and safe smoke checks.
Read when: The request names `tensorflow-project-template` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-project-template/SKILL.md`, `tensorflow-project-template/references/api-reference.md`, `tensorflow-project-template/references/configuration.md`, `tensorflow-project-template/references/extension-workflow.md`, `tensorflow-project-template/references/repo-provenance.md`, `tensorflow-project-template/references/troubleshooting.md`.

### `tensorpack`

Role: Use Tensorpack, a TF1-compatible TensorFlow training interface with DataFlow, trainers, callbacks, prediction, checkpoints, export, and example workflow guidance.
Read when: The request names `tensorpack` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataflow, inference export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorpack/SKILL.md`, `tensorpack/sub-skills/dataflow/`, `tensorpack/sub-skills/inference-export/`, `tensorpack/sub-skills/training/`, `tensorpack/references/examples-catalog.md`, `tensorpack/references/repo-overview.md`.

### `tflearn`

Role: Use and troubleshoot TFLearn, a TensorFlow-v1-style high-level deep learning API for layers, data feeds, DNN training, checkpoints, and model recipes.
Read when: The request names `tflearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced model recipes, data input pipelines, layers and ops, and training and persistence.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tflearn/SKILL.md`, `tflearn/sub-skills/advanced-model-recipes/`, `tflearn/sub-skills/data-input-pipelines/`, `tflearn/sub-skills/layers-and-ops/`, `tflearn/sub-skills/training-and-persistence/`, `tflearn/references/compatibility.md`.

<!-- DISCO_SCENARIO:training-loop-toolkits:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
