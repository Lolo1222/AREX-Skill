# Robot Learning Frameworks

## When To Read

Requests in the Robot Learning Frameworks family of the Robotics and Embodied AI area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on robot learning frameworks.

## Repo Skill Options

<!-- DISCO_SCENARIO:robot-learning-frameworks:START -->
### `act-plus-plus`

Role: Routes ACT++, ACT, Diffusion Policy, VINN, and MuJoCo simulation workflows for bimanual ALOHA episode data and imitation-learning tasks.
Read when: The request names `act-plus-plus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: policy training, simulation data, and vinn offline.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `act-plus-plus/SKILL.md`, `act-plus-plus/sub-skills/policy-training/`, `act-plus-plus/sub-skills/simulation-data/`, `act-plus-plus/sub-skills/vinn-offline/`, `act-plus-plus/references/api-reference.md`, `act-plus-plus/references/cli-reference.md`.

### `asap`

Role: Use ASAP to train humanoid policies, retarget SMPL motions, and run sim2sim or sim2real deployment workflows for humanoidverse-based robots.
Read when: The request names `asap` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: motion retargeting, sim2real deployment, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `asap/SKILL.md`, `asap/sub-skills/motion-retargeting/`, `asap/sub-skills/sim2real-deployment/`, `asap/sub-skills/training-and-evaluation/`, `asap/references/configuration-map.md`, `asap/references/install-and-backends.md`.

### `dexbotic`

Role: Use Dexbotic to prepare DexData, train and serve vision-language-action policies, evaluate checkpoints, and integrate explicitly external RL or robot backends.
Read when: The request names `dexbotic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation deployment, inference serving, rl backends, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dexbotic/SKILL.md`, `dexbotic/sub-skills/data-preparation/`, `dexbotic/sub-skills/evaluation-deployment/`, `dexbotic/sub-skills/inference-serving/`, `dexbotic/sub-skills/rl-backends/`, `dexbotic/sub-skills/training/`, `dexbotic/references/environment.md`.

### `diffusion-policy`

Role: Use Diffusion Policy for robot imitation-learning configs, zarr replay data, policy/model interfaces, training/evaluation workflows, and safety-gated real robot operations.
Read when: The request names `diffusion-policy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and replay buffers, policies and models, real robot operations, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `diffusion-policy/SKILL.md`, `diffusion-policy/sub-skills/data-and-replay-buffers/`, `diffusion-policy/sub-skills/policies-and-models/`, `diffusion-policy/sub-skills/real-robot-operations/`, `diffusion-policy/sub-skills/training-and-evaluation/`, `diffusion-policy/references/overview-and-installation.md`.

### `humanoid-gym`

Role: Guide Humanoid-Gym users through PPO training, XBot-L environment customization, and MuJoCo sim-to-sim deployment.
Read when: The request names `humanoid-gym` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment customization, sim2sim deployment, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `humanoid-gym/SKILL.md`, `humanoid-gym/sub-skills/environment-customization/`, `humanoid-gym/sub-skills/sim2sim-deployment/`, `humanoid-gym/sub-skills/training-and-evaluation/`, `humanoid-gym/references/installation-and-backends.md`, `humanoid-gym/references/repo-provenance.md`.

### `isaaclab`

Role: Use IsaacLab for robotics simulation, asset and sensor catalogs, task presets, RL wrappers, imitation learning, teleoperation, and repo tooling workflows.
Read when: The request names `isaaclab` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: assets and sensors, imitation and teleop, rl training, simulation core, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `isaaclab/SKILL.md`, `isaaclab/sub-skills/assets-and-sensors/`, `isaaclab/sub-skills/imitation-and-teleop/`, `isaaclab/sub-skills/rl-training/`, `isaaclab/sub-skills/simulation-core/`, `isaaclab/sub-skills/tasks-and-presets/`, `isaaclab/references/installation-and-cli.md`.

### `lerobot`

Role: Route LeRobot robotics workflows for datasets, policies, training, evaluation, simulation, physical robot control, and package extensions with verified configuration and safety gates.
Read when: The request names `lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset workflows, extensions and services, policy training inference, robot control data collection, and simulation and rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lerobot/SKILL.md`, `lerobot/sub-skills/dataset-workflows/`, `lerobot/sub-skills/extensions-and-services/`, `lerobot/sub-skills/policy-training-inference/`, `lerobot/sub-skills/robot-control-data-collection/`, `lerobot/sub-skills/simulation-and-rl/`, `lerobot/references/quick-reference.md`.

### `mimic-kit`

Role: Use MimicKit repo-specific guidance for motion imitation, physics-simulator RL training, motion conversion, and SMP prior workflows.
Read when: The request names `mimic-kit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adversarial control, motion imitation, motion tools, runner and backends, and smp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mimic-kit/SKILL.md`, `mimic-kit/sub-skills/adversarial-control/`, `mimic-kit/sub-skills/motion-imitation/`, `mimic-kit/sub-skills/motion-tools/`, `mimic-kit/sub-skills/runner-and-backends/`, `mimic-kit/sub-skills/smp/`, `mimic-kit/references/repo-provenance.md`.

### `mjlab`

Role: Use mjlab for MuJoCo Warp robot-learning environments, manager-based MDP configuration, RSL-RL training/playback, sensors, terrain, and debugging workflows.
Read when: The request names `mjlab` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment configuration, mdp components, perception terrain randomization, scene simulation assets, and training evaluation cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mjlab/SKILL.md`, `mjlab/sub-skills/environment-configuration/`, `mjlab/sub-skills/mdp-components/`, `mjlab/sub-skills/perception-terrain-randomization/`, `mjlab/sub-skills/scene-simulation-assets/`, `mjlab/sub-skills/training-evaluation-cli/`, `mjlab/references/installation-runtime.md`.

### `motus`

Role: Use Motus, a unified latent-action world model, for robot-video/action data preparation, CUDA inference, RoboTwin evaluation, and distributed training configuration.
Read when: The request names `motus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `motus/SKILL.md`, `motus/sub-skills/data-preparation/`, `motus/sub-skills/model-inference/`, `motus/sub-skills/training/`, `motus/references/repo-provenance.md`, `motus/references/troubleshooting.md`.

### `rlinf`

Role: Routes RLinf repository tasks for distributed reinforcement learning setup, embodied and agentic workflows, extension development, evaluation operations, and debugging.
Read when: The request names `rlinf` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embodied workflows, extension development, operations evaluation debugging, reasoning agent workflows, and setup and cluster.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rlinf/SKILL.md`, `rlinf/sub-skills/embodied-workflows/`, `rlinf/sub-skills/extension-development/`, `rlinf/sub-skills/operations-evaluation-debugging/`, `rlinf/sub-skills/reasoning-agent-workflows/`, `rlinf/sub-skills/setup-and-cluster/`, `rlinf/references/package-overview.md`.

### `roboverse`

Role: Routes RoboVerse research and engineering tasks across simulation, task authoring, learning, benchmark integrations, and cross-simulator parity.
Read when: The request names `roboverse` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark integrations, learning pipelines, parity and tooling, simulation workflows, and task development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `roboverse/SKILL.md`, `roboverse/sub-skills/benchmark-integrations/`, `roboverse/sub-skills/learning-pipelines/`, `roboverse/sub-skills/parity-and-tooling/`, `roboverse/sub-skills/simulation-workflows/`, `roboverse/sub-skills/task-development/`, `roboverse/references/installation-and-boundaries.md`.

### `star-vla`

Role: Operate StarVLA for vision-language-action model development, training plans, LeRobot data integration, benchmark evaluation, and policy deployment.
Read when: The request names `star-vla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark evaluation, data integration, model frameworks, policy deployment, and training config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `star-vla/SKILL.md`, `star-vla/sub-skills/benchmark-evaluation/`, `star-vla/sub-skills/data-integration/`, `star-vla/sub-skills/model-frameworks/`, `star-vla/sub-skills/policy-deployment/`, `star-vla/sub-skills/training-config/`, `star-vla/references/installation-and-environment.md`.

### `vla-adapter`

Role: Guides VLA-Adapter tiny-scale vision-language-action model setup, fine-tuning, evaluation, deployment, and package API workflows.
Read when: The request names `vla-adapter` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, evaluation, package apis, setup and data, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vla-adapter/SKILL.md`, `vla-adapter/sub-skills/deployment/`, `vla-adapter/sub-skills/evaluation/`, `vla-adapter/sub-skills/package-apis/`, `vla-adapter/sub-skills/setup-and-data/`, `vla-adapter/sub-skills/training/`, `vla-adapter/references/package-overview.md`.

<!-- DISCO_SCENARIO:robot-learning-frameworks:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
