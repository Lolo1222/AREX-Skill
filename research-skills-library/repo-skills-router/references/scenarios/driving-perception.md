# Driving Perception

## When To Read

Requests in the Driving Perception family of the Autonomous Driving area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on driving perception.

## Repo Skill Options

<!-- DISCO_SCENARIO:driving-perception:START -->
### `bev-former`

Role: Routes BEVFormer camera-only 3D detection workflows, from install/import and config inspection through nuScenes data prep, distributed training and evaluation, and log analysis.
Read when: The request names `bev-former` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and utilities, dataset preparation, installation and configs, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bev-former/SKILL.md`, `bev-former/sub-skills/analysis-and-utilities/`, `bev-former/sub-skills/dataset-preparation/`, `bev-former/sub-skills/installation-and-configs/`, `bev-former/sub-skills/training-and-evaluation/`, `bev-former/references/model-zoo-and-configs.md`.

### `det3d`

Role: Guide Det3D PyTorch 3D object-detection workflows across configuration, KITTI/nuScenes/Lyft data preparation, GPU training and evaluation, custom CUDA operations, and visualization.
Read when: The request names `det3d` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and models, datasets and preprocessing, runtime ops, training and evaluation, and visualization and analysis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `det3d/SKILL.md`, `det3d/sub-skills/configuration-and-models/`, `det3d/sub-skills/datasets-and-preprocessing/`, `det3d/sub-skills/runtime-ops/`, `det3d/sub-skills/training-and-evaluation/`, `det3d/sub-skills/visualization-and-analysis/`, `det3d/references/compatibility.md`.

### `lanenet-lane-detection`

Role: Route LaneNet lane-detection tasks across data preparation, training, inference, and export workflows.
Read when: The request names `lanenet-lane-detection` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference evaluation, model export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lanenet-lane-detection/SKILL.md`, `lanenet-lane-detection/sub-skills/data-preparation/`, `lanenet-lane-detection/sub-skills/inference-evaluation/`, `lanenet-lane-detection/sub-skills/model-export/`, `lanenet-lane-detection/sub-skills/training/`, `lanenet-lane-detection/references/configuration.md`.

### `maptr`

Role: Guides agents through MapTR online vectorized HD-map workflows, including environment setup, nuScenes and Argoverse2 preparation, model configuration, training, evaluation, visualization, benchmarking, and compatibility troubleshooting.
Read when: The request names `maptr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model configuration, training evaluation, and visualization benchmarking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maptr/SKILL.md`, `maptr/sub-skills/data-preparation/`, `maptr/sub-skills/model-configuration/`, `maptr/sub-skills/training-evaluation/`, `maptr/sub-skills/visualization-benchmarking/`, `maptr/references/repo-provenance.md`.

### `opencda`

Role: Use OpenCDA for cooperative-driving automation research in CARLA, optional CARLA-SUMO co-simulation, single-CAV and platooning scenarios, configurable sensing/planning/control, V2X, customization, and offline evaluation.
Read when: The request names `opencda` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cooperative simulation, core driving stack, customization and analysis, data evaluation, and setup and scenarios.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opencda/SKILL.md`, `opencda/sub-skills/cooperative-simulation/`, `opencda/sub-skills/core-driving-stack/`, `opencda/sub-skills/customization-and-analysis/`, `opencda/sub-skills/data-evaluation/`, `opencda/sub-skills/setup-and-scenarios/`, `opencda/references/repo-provenance.md`.

### `openpcdet`

Role: Operate OpenPCDet 3D object detection workflows across runtime setup, dataset preparation, training/evaluation, inference/custom data, and model/config extension.
Read when: The request names `openpcdet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference and custom data, models and configs, runtime and ops, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openpcdet/SKILL.md`, `openpcdet/sub-skills/data-preparation/`, `openpcdet/sub-skills/inference-and-custom-data/`, `openpcdet/sub-skills/models-and-configs/`, `openpcdet/sub-skills/runtime-and-ops/`, `openpcdet/sub-skills/training-and-evaluation/`, `openpcdet/references/openpcdet-overview.md`.

### `openpilot`

Role: Guides development, route/log analysis, car-porting, runtime services, simulator, and visual-debug workflows for comma.ai openpilot.
Read when: The request names `openpilot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: car ports and controls, core services and runtime, development and testing, route log analysis, and simulator and visual tools.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openpilot/SKILL.md`, `openpilot/sub-skills/car-ports-and-controls/`, `openpilot/sub-skills/core-services-and-runtime/`, `openpilot/sub-skills/development-and-testing/`, `openpilot/sub-skills/route-log-analysis/`, `openpilot/sub-skills/simulator-and-visual-tools/`, `openpilot/references/repo-provenance.md`.

### `second-pytorch`

Role: Guide historical SECOND and PointPillars LiDAR 3D detection workflows for KITTI and NuScenes, including data contracts, configuration, geometry, evaluation, guarded training/inference, and the web viewer.
Read when: The request names `second-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, geometry and evaluation, training and inference, and visualization and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `second-pytorch/SKILL.md`, `second-pytorch/sub-skills/data-preparation/`, `second-pytorch/sub-skills/geometry-and-evaluation/`, `second-pytorch/sub-skills/training-and-inference/`, `second-pytorch/sub-skills/visualization-and-serving/`, `second-pytorch/references/compatibility.md`.

### `transfuser`

Role: Guides TransFuser autonomous-driving model training, multimodal CARLA sensor-agent operation, dataset and route preparation, Longest6 evaluation, and result analysis.
Read when: The request names `transfuser` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: carla evaluation, data and routes, model training, and sensor agent.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transfuser/SKILL.md`, `transfuser/sub-skills/carla-evaluation/`, `transfuser/sub-skills/data-and-routes/`, `transfuser/sub-skills/model-training/`, `transfuser/sub-skills/sensor-agent/`, `transfuser/references/installation-and-compatibility.md`.

### `ultra-fast-lane-detection`

Role: Routes Ultra-Fast-Lane-Detection workflows for data preparation, training, evaluation, export, and speed/deployment tasks.
Read when: The request names `ultra-fast-lane-detection` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and config, evaluation and visualization, export and speed, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ultra-fast-lane-detection/SKILL.md`, `ultra-fast-lane-detection/sub-skills/data-and-config/`, `ultra-fast-lane-detection/sub-skills/evaluation-and-visualization/`, `ultra-fast-lane-detection/sub-skills/export-and-speed/`, `ultra-fast-lane-detection/sub-skills/training/`, `ultra-fast-lane-detection/references/repo-provenance.md`.

### `uniad`

Role: Operate the UniAD repository for planning-oriented autonomous driving data preparation, configs, training/evaluation, checkpoints, and visualization workflows.
Read when: The request names `uniad` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config and model architecture, data preparation, training evaluation, and visualization and results.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `uniad/SKILL.md`, `uniad/sub-skills/config-and-model-architecture/`, `uniad/sub-skills/data-preparation/`, `uniad/sub-skills/training-evaluation/`, `uniad/sub-skills/visualization-and-results/`, `uniad/references/checkpoints-and-models.md`.

### `vad`

Role: Provides self-contained operating guidance for the VAD autonomous-driving repository, including legacy environment setup, nuScenes/CAN-bus data preparation, model/plugin configuration, training, single-GPU evaluation, and prediction visualization.
Read when: The request names `vad` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture configuration, data preparation, training evaluation, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vad/SKILL.md`, `vad/sub-skills/architecture-configuration/`, `vad/sub-skills/data-preparation/`, `vad/sub-skills/training-evaluation/`, `vad/sub-skills/visualization/`, `vad/references/environment-and-verification.md`.

### `waymo-open-dataset`

Role: Guides Waymo Open Dataset package workflows for autonomous-driving data schemas, perception and motion utilities, metrics, challenge submissions, and repository build/test tasks.
Read when: The request names `waymo-open-dataset` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: camera and segmentation, dataset utils, latency submissions, metrics evaluation, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `waymo-open-dataset/SKILL.md`, `waymo-open-dataset/sub-skills/camera-and-segmentation/`, `waymo-open-dataset/sub-skills/dataset-utils/`, `waymo-open-dataset/sub-skills/latency-submissions/`, `waymo-open-dataset/sub-skills/metrics-evaluation/`, `waymo-open-dataset/sub-skills/motion-sim-agents/`, `waymo-open-dataset/references/installation-and-environment.md`.

### `yolop`

Role: Guides YOLOP multi-task driving perception workflows for BDD100K data preparation, training, evaluation, PyTorch demo inference, ONNX export, and TensorRT deployment planning.
Read when: The request names `yolop` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, export, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolop/SKILL.md`, `yolop/sub-skills/data-preparation/`, `yolop/sub-skills/export/`, `yolop/sub-skills/inference/`, `yolop/sub-skills/training/`, `yolop/references/configuration.md`.

<!-- DISCO_SCENARIO:driving-perception:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
