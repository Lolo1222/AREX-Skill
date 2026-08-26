# Training Data Pipelines

## When To Read

Requests in the Training Data Pipelines family of the Training Infrastructure area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on training data pipelines.

## Repo Skill Options

<!-- DISCO_SCENARIO:training-data-pipelines:START -->
### `alphafold3-pytorch`

Role: Use AlphaFold 3 PyTorch for protein and biomolecular structure-prediction workflows, heterogeneous molecule inputs, PDB/mmCIF/MSA/template preparation, bounded model inference, training configuration, and local CLI or Gradio operation.
Read when: The request names `alphafold3-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli serving, data pipeline, input representation, model inference, and training configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alphafold3-pytorch/SKILL.md`, `alphafold3-pytorch/sub-skills/cli-serving/`, `alphafold3-pytorch/sub-skills/data-pipeline/`, `alphafold3-pytorch/sub-skills/input-representation/`, `alphafold3-pytorch/sub-skills/model-inference/`, `alphafold3-pytorch/sub-skills/training-configuration/`, `alphafold3-pytorch/references/environment-and-dependencies.md`.

### `data-juicer`

Role: Data-Juicer repo router for local recipes, Ray recovery, and service/MCP workflows.
Read when: The request names `data-juicer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ray and recovery, recipes and ops, and service mcp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `data-juicer/SKILL.md`, `data-juicer/sub-skills/ray-and-recovery/`, `data-juicer/sub-skills/recipes-and-ops/`, `data-juicer/sub-skills/service-mcp/`, `data-juicer/references/api-reference.md`, `data-juicer/references/cli-reference.md`.

### `dataflow`

Role: Route DataFlow workflows for pipelines, text and document processing, serving, evaluation, and Ray acceleration.
Read when: The request names `dataflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: document vision rag, pipeline foundations, rayorch acceleration, serving cli, and text workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dataflow/SKILL.md`, `dataflow/sub-skills/document-vision-rag/`, `dataflow/sub-skills/pipeline-foundations/`, `dataflow/sub-skills/rayorch-acceleration/`, `dataflow/sub-skills/serving-cli/`, `dataflow/sub-skills/text-workflows/`, `dataflow/references/api-overview.md`.

### `deep-filter-net`

Role: Route DeepFilterNet speech enhancement, Python API/CLI, training data, model export/evaluation, and Rust/LADSPA realtime workflows.
Read when: The request names `deep-filter-net` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model export evaluation, python enhancement, rust realtime deployment, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-filter-net/SKILL.md`, `deep-filter-net/sub-skills/model-export-evaluation/`, `deep-filter-net/sub-skills/python-enhancement/`, `deep-filter-net/sub-skills/rust-realtime-deployment/`, `deep-filter-net/sub-skills/training-data/`, `deep-filter-net/references/installation-and-package-map.md`.

### `ffcv`

Role: Use FFCV to convert datasets into .beton files, build fast PyTorch loader pipelines, handle image and custom fields/transforms, and tune cache, traversal, and throughput behavior.
Read when: The request names `ffcv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset writing, loader pipelines, and performance tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ffcv/SKILL.md`, `ffcv/sub-skills/dataset-writing/`, `ffcv/sub-skills/loader-pipelines/`, `ffcv/sub-skills/performance-tuning/`, `ffcv/references/api-reference.md`, `ffcv/references/installation.md`.

### `img2dataset`

Role: Create, restart, audit, and scale img2dataset runs for turning URL tables into image datasets.
Read when: The request names `img2dataset` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core download, distributed execution, image processing, and input output formats.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `img2dataset/SKILL.md`, `img2dataset/sub-skills/core-download/`, `img2dataset/sub-skills/distributed-execution/`, `img2dataset/sub-skills/image-processing/`, `img2dataset/sub-skills/input-output-formats/`, `img2dataset/references/dataset-recipes.md`.

### `lerobot`

Role: Route LeRobot robotics workflows for datasets, policies, training, evaluation, simulation, physical robot control, and package extensions with verified configuration and safety gates.
Read when: The request names `lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset workflows, extensions and services, policy training inference, robot control data collection, and simulation and rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lerobot/SKILL.md`, `lerobot/sub-skills/dataset-workflows/`, `lerobot/sub-skills/extensions-and-services/`, `lerobot/sub-skills/policy-training-inference/`, `lerobot/sub-skills/robot-control-data-collection/`, `lerobot/sub-skills/simulation-and-rl/`, `lerobot/references/quick-reference.md`.

### `nuplan-devkit`

Role: Use for Motional nuPlan autonomous-driving planning workflows: dataset and map access, scenario filtering, planner implementation, open- or closed-loop simulation, metrics, nuBoard, training/preprocessing, nuplan_cli, and submission packaging.
Read when: The request names `nuplan-devkit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core geometry, data and maps, simulation and evaluation, submission and cli, and training and preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nuplan-devkit/SKILL.md`, `nuplan-devkit/sub-skills/core-geometry/`, `nuplan-devkit/sub-skills/data-and-maps/`, `nuplan-devkit/sub-skills/simulation-and-evaluation/`, `nuplan-devkit/sub-skills/submission-and-cli/`, `nuplan-devkit/sub-skills/training-and-preprocessing/`, `nuplan-devkit/references/installation-and-environment.md`.

### `petastorm`

Role: Routes Petastorm workflows for reading, writing, and converting Parquet-backed datasets for TensorFlow, PyTorch, Spark, and plain Python.
Read when: The request names `petastorm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: create datasets, read datasets, and spark converter.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `petastorm/SKILL.md`, `petastorm/sub-skills/create-datasets/`, `petastorm/sub-skills/read-datasets/`, `petastorm/sub-skills/spark-converter/`, `petastorm/references/filesystems-and-paths.md`, `petastorm/references/install-and-prereqs.md`.

### `physicsnemo`

Role: Route PhysicsNeMo users to the right model, data, scaling, mesh, diffusion, active-learning, or deployment workflow.
Read when: The request names `physicsnemo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: active learning and deployment, datapipes, diffusion and generative, distributed and domain parallel, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `physicsnemo/SKILL.md`, `physicsnemo/sub-skills/active-learning-and-deployment/`, `physicsnemo/sub-skills/datapipes/`, `physicsnemo/sub-skills/diffusion-and-generative/`, `physicsnemo/sub-skills/distributed-and-domain-parallel/`, `physicsnemo/sub-skills/mesh-and-geometry/`, `physicsnemo/references/install-and-environment.md`.

### `scenic`

Role: Use Scenic, Google Research's JAX/Flax computer-vision research codebase, for configs, training, datasets, models, layers, baselines, and project-specific workflows.
Read when: The request names `scenic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: baselines and projects, data pipelines, modeling and layers, and running and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scenic/SKILL.md`, `scenic/sub-skills/baselines-and-projects/`, `scenic/sub-skills/data-pipelines/`, `scenic/sub-skills/modeling-and-layers/`, `scenic/sub-skills/running-and-training/`, `scenic/references/common-utilities.md`.

### `star-vla`

Role: Operate StarVLA for vision-language-action model development, training plans, LeRobot data integration, benchmark evaluation, and policy deployment.
Read when: The request names `star-vla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark evaluation, data integration, model frameworks, policy deployment, and training config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `star-vla/SKILL.md`, `star-vla/sub-skills/benchmark-evaluation/`, `star-vla/sub-skills/data-integration/`, `star-vla/sub-skills/model-frameworks/`, `star-vla/sub-skills/policy-deployment/`, `star-vla/sub-skills/training-config/`, `star-vla/references/installation-and-environment.md`.

### `swin-transformer`

Role: Use this repo skill for Microsoft Swin-Transformer image-classification model, config, data, checkpoint, SimMIM, Swin-MoE, and optional CUDA acceleration workflows.
Read when: The request names `swin-transformer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core models, data and checkpoints, moe and acceleration, simmim workflows, and training eval cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `swin-transformer/SKILL.md`, `swin-transformer/sub-skills/core-models/`, `swin-transformer/sub-skills/data-and-checkpoints/`, `swin-transformer/sub-skills/moe-and-acceleration/`, `swin-transformer/sub-skills/simmim-workflows/`, `swin-transformer/sub-skills/training-eval-cli/`, `swin-transformer/references/configuration.md`.

### `tensorflow-datasets`

Role: Use TensorFlow Datasets for dataset loading, builder authoring, tfds CLI workflows, external/community formats, Beam scaling, and TFDS-specific troubleshooting.
Read when: The request names `tensorflow-datasets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: beam and performance, cli workflows, data loading, dataset authoring, and formats and community.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-datasets/SKILL.md`, `tensorflow-datasets/sub-skills/beam-and-performance/`, `tensorflow-datasets/sub-skills/cli-workflows/`, `tensorflow-datasets/sub-skills/data-loading/`, `tensorflow-datasets/sub-skills/dataset-authoring/`, `tensorflow-datasets/sub-skills/formats-and-community/`, `tensorflow-datasets/references/api-overview.md`.

### `tensorpack`

Role: Use Tensorpack, a TF1-compatible TensorFlow training interface with DataFlow, trainers, callbacks, prediction, checkpoints, export, and example workflow guidance.
Read when: The request names `tensorpack` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataflow, inference export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorpack/SKILL.md`, `tensorpack/sub-skills/dataflow/`, `tensorpack/sub-skills/inference-export/`, `tensorpack/sub-skills/training/`, `tensorpack/references/examples-catalog.md`, `tensorpack/references/repo-overview.md`.

### `webdataset`

Role: Guide WebDataset shard loading, shard writing, and opener/cache/security workflows for shard-based data pipelines.
Read when: The request names `webdataset` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: io caching security, reading pipelines, and shard writing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `webdataset/SKILL.md`, `webdataset/sub-skills/io-caching-security/`, `webdataset/sub-skills/reading-pipelines/`, `webdataset/sub-skills/shard-writing/`, `webdataset/references/api-reference.md`, `webdataset/references/configuration.md`.

<!-- DISCO_SCENARIO:training-data-pipelines:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
