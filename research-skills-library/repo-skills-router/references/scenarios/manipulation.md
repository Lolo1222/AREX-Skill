# Manipulation

## When To Read

Requests in the Manipulation family of the Robotics and Embodied AI area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on manipulation.

## Repo Skill Options

<!-- DISCO_SCENARIO:manipulation:START -->
### `act-plus-plus`

Role: Routes ACT++, ACT, Diffusion Policy, VINN, and MuJoCo simulation workflows for bimanual ALOHA episode data and imitation-learning tasks.
Read when: The request names `act-plus-plus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: policy training, simulation data, and vinn offline.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `act-plus-plus/SKILL.md`, `act-plus-plus/sub-skills/policy-training/`, `act-plus-plus/sub-skills/simulation-data/`, `act-plus-plus/sub-skills/vinn-offline/`, `act-plus-plus/references/api-reference.md`, `act-plus-plus/references/cli-reference.md`.

### `curobo`

Role: Guides CUDA-accelerated cuRobo v2 robotics workflows for robot models, differentiable kinematics, collision-aware IK and motion planning, trajectory optimization, MPC, perception mapping, and motion retargeting.
Read when: The request names `curobo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: collision scenes, ik, motion planning, mpc optimization, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `curobo/SKILL.md`, `curobo/sub-skills/collision-scenes/`, `curobo/sub-skills/ik/`, `curobo/sub-skills/motion-planning/`, `curobo/sub-skills/mpc-optimization/`, `curobo/sub-skills/perception/`, `curobo/references/api-map.md`.

### `diffusion-policy`

Role: Use Diffusion Policy for robot imitation-learning configs, zarr replay data, policy/model interfaces, training/evaluation workflows, and safety-gated real robot operations.
Read when: The request names `diffusion-policy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and replay buffers, policies and models, real robot operations, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `diffusion-policy/SKILL.md`, `diffusion-policy/sub-skills/data-and-replay-buffers/`, `diffusion-policy/sub-skills/policies-and-models/`, `diffusion-policy/sub-skills/real-robot-operations/`, `diffusion-policy/sub-skills/training-and-evaluation/`, `diffusion-policy/references/overview-and-installation.md`.

### `dm-control`

Role: Use DeepMind dm_control for MuJoCo simulation, Control Suite environments, PyMJCF models, Composer tasks, rendering, and high-level locomotion/manipulation workflows.
Read when: The request names `dm-control` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: composer environments, locomotion manipulation, mjcf mujoco models, rendering viewer assets, and suite rl workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dm-control/SKILL.md`, `dm-control/sub-skills/composer-environments/`, `dm-control/sub-skills/locomotion-manipulation/`, `dm-control/sub-skills/mjcf-mujoco-models/`, `dm-control/sub-skills/rendering-viewer-assets/`, `dm-control/sub-skills/suite-rl-workflows/`, `dm-control/references/installation-and-backends.md`.

### `ikpy`

Role: Use IKPy for Python robot kinematics: construct or import chains, compute forward/inverse kinematics, handle URDF/MJCF/DH models, validate transforms, use the optional JAX backend, and create headless diagnostics.
Read when: The request names `ikpy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chain kinematics, jax backend, robot model import, and visualization geometry.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ikpy/SKILL.md`, `ikpy/sub-skills/chain-kinematics/`, `ikpy/sub-skills/jax-backend/`, `ikpy/sub-skills/robot-model-import/`, `ikpy/sub-skills/visualization-geometry/`, `ikpy/references/api-overview.md`.

### `lerobot`

Role: Route LeRobot robotics workflows for datasets, policies, training, evaluation, simulation, physical robot control, and package extensions with verified configuration and safety gates.
Read when: The request names `lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset workflows, extensions and services, policy training inference, robot control data collection, and simulation and rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lerobot/SKILL.md`, `lerobot/sub-skills/dataset-workflows/`, `lerobot/sub-skills/extensions-and-services/`, `lerobot/sub-skills/policy-training-inference/`, `lerobot/sub-skills/robot-control-data-collection/`, `lerobot/sub-skills/simulation-and-rl/`, `lerobot/references/quick-reference.md`.

### `mani-skill`

Role: Use ManiSkill 3 for Gymnasium robot simulation, custom task authoring, trajectories, demos, and robot-learning baselines.
Read when: The request names `mani-skill` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom environments, environment usage, learning and baselines, and trajectories and datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mani-skill/SKILL.md`, `mani-skill/sub-skills/custom-environments/`, `mani-skill/sub-skills/environment-usage/`, `mani-skill/sub-skills/learning-and-baselines/`, `mani-skill/sub-skills/trajectories-and-datasets/`, `mani-skill/references/repo-provenance.md`.

### `motus`

Role: Use Motus, a unified latent-action world model, for robot-video/action data preparation, CUDA inference, RoboTwin evaluation, and distributed training configuration.
Read when: The request names `motus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `motus/SKILL.md`, `motus/sub-skills/data-preparation/`, `motus/sub-skills/model-inference/`, `motus/sub-skills/training/`, `motus/references/repo-provenance.md`, `motus/references/troubleshooting.md`.

### `myosuite`

Role: Use MyoSuite's MuJoCo musculoskeletal environments, task registry, model and kinematics tools, reference-motion utilities, optional MJX acceleration, rendering, and bounded reinforcement-learning integrations.
Read when: The request names `myosuite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environments, mjx acceleration, model editing kinematics, reference motion, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `myosuite/SKILL.md`, `myosuite/sub-skills/environments/`, `myosuite/sub-skills/mjx-acceleration/`, `myosuite/sub-skills/model-editing-kinematics/`, `myosuite/sub-skills/reference-motion/`, `myosuite/sub-skills/simulation-rendering/`, `myosuite/references/installation-and-assets.md`.

### `promptcraft-robotics`

Role: Route PromptCraft-Robotics requests to the AirSim sample workflow or the markdown robotics prompt library.
Read when: The request names `promptcraft-robotics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: airsim simulator and prompt examples.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `promptcraft-robotics/SKILL.md`, `promptcraft-robotics/sub-skills/airsim-simulator/`, `promptcraft-robotics/sub-skills/prompt-examples/`, `promptcraft-robotics/references/repo-overview.md`, `promptcraft-robotics/references/repo-provenance.md`, `promptcraft-robotics/references/troubleshooting.md`.

### `robocasa`

Role: Guides Researchers through RoboCasa365 embodied-AI simulation, kitchen task and scene selection, demonstration datasets, teleoperation, and safe validation.
Read when: The request names `robocasa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets demonstrations, simulation environments, tasks scenes assets, and teleoperation and collection.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `robocasa/SKILL.md`, `robocasa/sub-skills/datasets-demonstrations/`, `robocasa/sub-skills/simulation-environments/`, `robocasa/sub-skills/tasks-scenes-assets/`, `robocasa/sub-skills/teleoperation-and-collection/`, `robocasa/references/repo-provenance.md`.

### `robosuite`

Role: Use robosuite for MuJoCo robot manipulation environments, controllers, teleoperation demos, rendering/camera workflows, and custom MJCF modeling.
Read when: The request names `robosuite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: controllers, environments, modeling, rendering, and teleoperation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `robosuite/SKILL.md`, `robosuite/sub-skills/controllers/`, `robosuite/sub-skills/environments/`, `robosuite/sub-skills/modeling/`, `robosuite/sub-skills/rendering/`, `robosuite/sub-skills/teleoperation/`, `robosuite/references/api-registry.md`.

### `robotwin`

Role: Use RoboTwin bimanual manipulation simulation, data, task authoring, and XPolicyLab policy-evaluation workflows.
Read when: The request names `robotwin` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data pipeline, policy eval, simulation core, and task authoring.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `robotwin/SKILL.md`, `robotwin/sub-skills/data-pipeline/`, `robotwin/sub-skills/policy-eval/`, `robotwin/sub-skills/simulation-core/`, `robotwin/sub-skills/task-authoring/`, `robotwin/references/install-and-submodules.md`.

### `roboverse`

Role: Routes RoboVerse research and engineering tasks across simulation, task authoring, learning, benchmark integrations, and cross-simulator parity.
Read when: The request names `roboverse` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark integrations, learning pipelines, parity and tooling, simulation workflows, and task development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `roboverse/SKILL.md`, `roboverse/sub-skills/benchmark-integrations/`, `roboverse/sub-skills/learning-pipelines/`, `roboverse/sub-skills/parity-and-tooling/`, `roboverse/sub-skills/simulation-workflows/`, `roboverse/sub-skills/task-development/`, `roboverse/references/installation-and-boundaries.md`.

### `visual-pushing-grasping`

Role: Route Visual Pushing and Grasping workflows for RGB-D robotic manipulation, including VPG model training/testing, heightmap geometry, CoppeliaSim simulation, session evaluation, and guarded UR5/RealSense operation.
Read when: The request names `visual-pushing-grasping` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, perception geometry, real robot, simulation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `visual-pushing-grasping/SKILL.md`, `visual-pushing-grasping/sub-skills/evaluation/`, `visual-pushing-grasping/sub-skills/perception-geometry/`, `visual-pushing-grasping/sub-skills/real-robot/`, `visual-pushing-grasping/sub-skills/simulation/`, `visual-pushing-grasping/sub-skills/training/`, `visual-pushing-grasping/references/repo-provenance.md`.

### `vla-adapter`

Role: Guides VLA-Adapter tiny-scale vision-language-action model setup, fine-tuning, evaluation, deployment, and package API workflows.
Read when: The request names `vla-adapter` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, evaluation, package apis, setup and data, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vla-adapter/SKILL.md`, `vla-adapter/sub-skills/deployment/`, `vla-adapter/sub-skills/evaluation/`, `vla-adapter/sub-skills/package-apis/`, `vla-adapter/sub-skills/setup-and-data/`, `vla-adapter/sub-skills/training/`, `vla-adapter/references/package-overview.md`.

<!-- DISCO_SCENARIO:manipulation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
