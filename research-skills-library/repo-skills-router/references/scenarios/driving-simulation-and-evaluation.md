# Driving Simulation and Evaluation

## When To Read

Requests in the Driving Simulation and Evaluation family of the Autonomous Driving area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on driving simulation and evaluation.

## Repo Skill Options

<!-- DISCO_SCENARIO:driving-simulation-and-evaluation:START -->
### `alpasim`

Role: Use AlpaSim repository guidance for autonomous-driving simulation setup, Hydra wizard runs, runtime services, ego drivers and plugins, ASL evaluation, controller/physics/traffic components, gRPC contracts, and operational troubleshooting.
Read when: The request names `alpasim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control physics traffic, drivers and plugins, evaluation and logs, grpc and developer tools, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alpasim/SKILL.md`, `alpasim/sub-skills/control-physics-traffic/`, `alpasim/sub-skills/drivers-and-plugins/`, `alpasim/sub-skills/evaluation-and-logs/`, `alpasim/sub-skills/grpc-and-developer-tools/`, `alpasim/sub-skills/runtime-services/`, `alpasim/references/coordinate-frames.md`.

### `diffusion-planner`

Role: Use Diffusion Planner for nuPlan autonomous-driving trajectory generation: prepare model-ready data, train or resume the diffusion model, configure closed-loop planning, and add differentiable collision or classifier guidance.
Read when: The request names `diffusion-planner` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: closed loop planning, data preparation, guidance, and model training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `diffusion-planner/SKILL.md`, `diffusion-planner/sub-skills/closed-loop-planning/`, `diffusion-planner/sub-skills/data-preparation/`, `diffusion-planner/sub-skills/guidance/`, `diffusion-planner/sub-skills/model-training/`, `diffusion-planner/references/repo-provenance.md`.

### `highway-env`

Role: Use Farama HighwayEnv for Gymnasium autonomous-driving environments, simulation configuration, road/vehicle dynamics, and bounded RL rollouts.
Read when: The request names `highway-env` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: observations actions rewards, road vehicle dynamics, simulation environments, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `highway-env/SKILL.md`, `highway-env/sub-skills/observations-actions-rewards/`, `highway-env/sub-skills/road-vehicle-dynamics/`, `highway-env/sub-skills/simulation-environments/`, `highway-env/sub-skills/training-and-evaluation/`, `highway-env/references/environment-catalog.md`.

### `navsim`

Role: Use NAVSIM v2 for autonomous-driving agent development, OpenScene data setup, learned-agent training, EPDMS evaluation, traffic-policy experiments, visualization, and leaderboard submission preparation.
Read when: The request names `navsim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents, evaluation, setup and data, training, and visualization and submission.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `navsim/SKILL.md`, `navsim/sub-skills/agents/`, `navsim/sub-skills/evaluation/`, `navsim/sub-skills/setup-and-data/`, `navsim/sub-skills/training/`, `navsim/sub-skills/visualization-and-submission/`, `navsim/references/repo-provenance.md`.

### `nuplan-devkit`

Role: Use for Motional nuPlan autonomous-driving planning workflows: dataset and map access, scenario filtering, planner implementation, open- or closed-loop simulation, metrics, nuBoard, training/preprocessing, nuplan_cli, and submission packaging.
Read when: The request names `nuplan-devkit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core geometry, data and maps, simulation and evaluation, submission and cli, and training and preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nuplan-devkit/SKILL.md`, `nuplan-devkit/sub-skills/core-geometry/`, `nuplan-devkit/sub-skills/data-and-maps/`, `nuplan-devkit/sub-skills/simulation-and-evaluation/`, `nuplan-devkit/sub-skills/submission-and-cli/`, `nuplan-devkit/sub-skills/training-and-preprocessing/`, `nuplan-devkit/references/installation-and-environment.md`.

### `opencda`

Role: Use OpenCDA for cooperative-driving automation research in CARLA, optional CARLA-SUMO co-simulation, single-CAV and platooning scenarios, configurable sensing/planning/control, V2X, customization, and offline evaluation.
Read when: The request names `opencda` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cooperative simulation, core driving stack, customization and analysis, data evaluation, and setup and scenarios.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opencda/SKILL.md`, `opencda/sub-skills/cooperative-simulation/`, `opencda/sub-skills/core-driving-stack/`, `opencda/sub-skills/customization-and-analysis/`, `opencda/sub-skills/data-evaluation/`, `opencda/sub-skills/setup-and-scenarios/`, `opencda/references/repo-provenance.md`.

### `openpilot`

Role: Guides development, route/log analysis, car-porting, runtime services, simulator, and visual-debug workflows for comma.ai openpilot.
Read when: The request names `openpilot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: car ports and controls, core services and runtime, development and testing, route log analysis, and simulator and visual tools.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openpilot/SKILL.md`, `openpilot/sub-skills/car-ports-and-controls/`, `openpilot/sub-skills/core-services-and-runtime/`, `openpilot/sub-skills/development-and-testing/`, `openpilot/sub-skills/route-log-analysis/`, `openpilot/sub-skills/simulator-and-visual-tools/`, `openpilot/references/repo-provenance.md`.

### `pykitti`

Role: Guide Python workflows for loading, validating, and interpreting KITTI raw, odometry, and tracking data with pykitti.
Read when: The request names `pykitti` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: odometry, raw data, and tracking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pykitti/SKILL.md`, `pykitti/sub-skills/odometry/`, `pykitti/sub-skills/raw-data/`, `pykitti/sub-skills/tracking/`, `pykitti/references/api-overview.md`, `pykitti/references/repo-provenance.md`.

### `smarts`

Role: Use SMARTS 2.0.1 for multi-agent autonomous-driving simulation, Gymnasium environments, scenario generation, sensor and Envision workflows, agent-zoo/RL integration, and the scl command-line tools.
Read when: The request names `smarts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli integrations, rl agent zoo, scenario studio, sensors visualization, and simulation environments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `smarts/SKILL.md`, `smarts/sub-skills/cli-integrations/`, `smarts/sub-skills/rl-agent-zoo/`, `smarts/sub-skills/scenario-studio/`, `smarts/sub-skills/sensors-visualization/`, `smarts/sub-skills/simulation-environments/`, `smarts/references/repo-provenance.md`.

### `transfuser`

Role: Guides TransFuser autonomous-driving model training, multimodal CARLA sensor-agent operation, dataset and route preparation, Longest6 evaluation, and result analysis.
Read when: The request names `transfuser` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: carla evaluation, data and routes, model training, and sensor agent.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transfuser/SKILL.md`, `transfuser/sub-skills/carla-evaluation/`, `transfuser/sub-skills/data-and-routes/`, `transfuser/sub-skills/model-training/`, `transfuser/sub-skills/sensor-agent/`, `transfuser/references/installation-and-compatibility.md`.

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

<!-- DISCO_SCENARIO:driving-simulation-and-evaluation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
