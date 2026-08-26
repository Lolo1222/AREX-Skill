# Robot Simulation

## When To Read

Requests in the Robot Simulation family of the Robotics and Embodied AI area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on robot simulation.

## Repo Skill Options

<!-- DISCO_SCENARIO:robot-simulation:START -->
### `act-plus-plus`

Role: Routes ACT++, ACT, Diffusion Policy, VINN, and MuJoCo simulation workflows for bimanual ALOHA episode data and imitation-learning tasks.
Read when: The request names `act-plus-plus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: policy training, simulation data, and vinn offline.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `act-plus-plus/SKILL.md`, `act-plus-plus/sub-skills/policy-training/`, `act-plus-plus/sub-skills/simulation-data/`, `act-plus-plus/sub-skills/vinn-offline/`, `act-plus-plus/references/api-reference.md`, `act-plus-plus/references/cli-reference.md`.

### `agibot-x1-train`

Role: Guide agents through AgiBot X1 humanoid reinforcement-learning training, checkpoint playback, policy export, and MuJoCo sim2sim workflows with verified configuration contracts and explicit Isaac Gym limits.
Read when: The request names `agibot-x1-train` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export, playback, sim2sim, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agibot-x1-train/SKILL.md`, `agibot-x1-train/sub-skills/export/`, `agibot-x1-train/sub-skills/playback/`, `agibot-x1-train/sub-skills/sim2sim/`, `agibot-x1-train/sub-skills/training/`, `agibot-x1-train/references/repo-provenance.md`.

### `asap`

Role: Use ASAP to train humanoid policies, retarget SMPL motions, and run sim2sim or sim2real deployment workflows for humanoidverse-based robots.
Read when: The request names `asap` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: motion retargeting, sim2real deployment, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `asap/SKILL.md`, `asap/sub-skills/motion-retargeting/`, `asap/sub-skills/sim2real-deployment/`, `asap/sub-skills/training-and-evaluation/`, `asap/references/configuration-map.md`, `asap/references/install-and-backends.md`.

### `behavior-1k`

Role: CPU-only operating guidance for the BEHAVIOR-1K BDDL 3.7.0 package: symbolic activity definitions, condition parsing/evaluation, object taxonomy, and generated-data-backed knowledge-base inspection.
Read when: The request names `behavior-1k` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: knowledge base and symbolic tasks.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `behavior-1k/SKILL.md`, `behavior-1k/sub-skills/knowledge-base/`, `behavior-1k/sub-skills/symbolic-tasks/`, `behavior-1k/references/api-overview.md`, `behavior-1k/references/repo-provenance.md`, `behavior-1k/references/troubleshooting.md`.

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

### `drl-robot-navigation`

Role: Guide ROS/Gazebo Velodyne mobile-robot navigation with the DRL-robot-navigation TD3 implementation, including simulator setup, environment contracts, bounded training, checkpoints, and policy evaluation.
Read when: The request names `drl-robot-navigation` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: navigation environment, policy evaluation, simulation setup, and td3 training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `drl-robot-navigation/SKILL.md`, `drl-robot-navigation/sub-skills/navigation-environment/`, `drl-robot-navigation/sub-skills/policy-evaluation/`, `drl-robot-navigation/sub-skills/simulation-setup/`, `drl-robot-navigation/sub-skills/td3-training/`, `drl-robot-navigation/references/repo-provenance.md`.

### `go2-omniverse`

Role: Guides Isaac Sim and IsaacLab workflows for Unitree Go2 and G1 simulation, ROS 2 telemetry, headless rendering, and the real-robot digital-twin bridge.
Read when: The request names `go2-omniverse` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: digital twin, ros2 telemetry, and simulation launch.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `go2-omniverse/SKILL.md`, `go2-omniverse/sub-skills/digital-twin/`, `go2-omniverse/sub-skills/ros2-telemetry/`, `go2-omniverse/sub-skills/simulation-launch/`, `go2-omniverse/references/repo-provenance.md`, `go2-omniverse/references/troubleshooting.md`.

### `gym-pybullet-drones`

Role: Use gym-pybullet-drones for PyBullet quadrotor simulation, PID/MRAC control examples, Gymnasium PPO hover workflows, and Betaflight SITL preflight guidance.
Read when: The request names `gym-pybullet-drones` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: betaflight sitl, control simulation, and rl workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gym-pybullet-drones/SKILL.md`, `gym-pybullet-drones/sub-skills/betaflight-sitl/`, `gym-pybullet-drones/sub-skills/control-simulation/`, `gym-pybullet-drones/sub-skills/rl-workflows/`, `gym-pybullet-drones/references/package-overview.md`, `gym-pybullet-drones/references/repo-provenance.md`.

### `humanoid-gym`

Role: Guide Humanoid-Gym users through PPO training, XBot-L environment customization, and MuJoCo sim-to-sim deployment.
Read when: The request names `humanoid-gym` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment customization, sim2sim deployment, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `humanoid-gym/SKILL.md`, `humanoid-gym/sub-skills/environment-customization/`, `humanoid-gym/sub-skills/sim2sim-deployment/`, `humanoid-gym/sub-skills/training-and-evaluation/`, `humanoid-gym/references/installation-and-backends.md`, `humanoid-gym/references/repo-provenance.md`.

### `ir-sim`

Role: This skill routes agents through IR-SIM's YAML robot simulation, navigation, sensing, mapping, planning, rendering, and extension workflows.
Read when: The request names `ir-sim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: extension and control, navigation and planning, scene configuration, sensing and mapping, and simulation environments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ir-sim/SKILL.md`, `ir-sim/sub-skills/extension-and-control/`, `ir-sim/sub-skills/navigation-and-planning/`, `ir-sim/sub-skills/scene-configuration/`, `ir-sim/sub-skills/sensing-and-mapping/`, `ir-sim/sub-skills/simulation-environments/`, `ir-sim/references/api-surface.md`.

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

### `mani-skill`

Role: Use ManiSkill 3 for Gymnasium robot simulation, custom task authoring, trajectories, demos, and robot-learning baselines.
Read when: The request names `mani-skill` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom environments, environment usage, learning and baselines, and trajectories and datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mani-skill/SKILL.md`, `mani-skill/sub-skills/custom-environments/`, `mani-skill/sub-skills/environment-usage/`, `mani-skill/sub-skills/learning-and-baselines/`, `mani-skill/sub-skills/trajectories-and-datasets/`, `mani-skill/references/repo-provenance.md`.

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

### `mujoco-menagerie`

Role: Use MuJoCo Menagerie robot MJCF assets: choose models, load XML scenes, edit variants, and run contributor validation workflows.
Read when: The request names `mujoco-menagerie` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: contribution maintenance, model catalog, model editing, and model loading.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mujoco-menagerie/SKILL.md`, `mujoco-menagerie/sub-skills/contribution-maintenance/`, `mujoco-menagerie/sub-skills/model-catalog/`, `mujoco-menagerie/sub-skills/model-editing/`, `mujoco-menagerie/sub-skills/model-loading/`, `mujoco-menagerie/references/repo-provenance.md`.

### `myosuite`

Role: Use MyoSuite's MuJoCo musculoskeletal environments, task registry, model and kinematics tools, reference-motion utilities, optional MJX acceleration, rendering, and bounded reinforcement-learning integrations.
Read when: The request names `myosuite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environments, mjx acceleration, model editing kinematics, reference motion, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `myosuite/SKILL.md`, `myosuite/sub-skills/environments/`, `myosuite/sub-skills/mjx-acceleration/`, `myosuite/sub-skills/model-editing-kinematics/`, `myosuite/sub-skills/reference-motion/`, `myosuite/sub-skills/simulation-rendering/`, `myosuite/references/installation-and-assets.md`.

### `newton`

Role: Use Newton physics engine APIs for robotics simulation, solvers, contacts, asset import/export, sensors, viewers, examples, and repository maintenance.
Read when: The request names `newton` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: asset import export, modeling simulation, robotics control, sensors visualization, and solvers contacts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `newton/SKILL.md`, `newton/sub-skills/asset-import-export/`, `newton/sub-skills/modeling-simulation/`, `newton/sub-skills/robotics-control/`, `newton/sub-skills/sensors-visualization/`, `newton/sub-skills/solvers-contacts/`, `newton/references/development-maintenance.md`.

### `promptcraft-robotics`

Role: Route PromptCraft-Robotics requests to the AirSim sample workflow or the markdown robotics prompt library.
Read when: The request names `promptcraft-robotics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: airsim simulator and prompt examples.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `promptcraft-robotics/SKILL.md`, `promptcraft-robotics/sub-skills/airsim-simulator/`, `promptcraft-robotics/sub-skills/prompt-examples/`, `promptcraft-robotics/references/repo-overview.md`, `promptcraft-robotics/references/repo-provenance.md`, `promptcraft-robotics/references/troubleshooting.md`.

### `protomotions`

Role: Use the `protomotions` skill for ProtoMotions 3 humanoid simulation, motion-learning, retargeting, simulator-backend, training, inference, and deployment workflows.
Read when: The request names `protomotions` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and robots, installation and backends, retargeting and motion data, simulator foundations, and training and experiments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `protomotions/SKILL.md`, `protomotions/sub-skills/deployment-and-robots/`, `protomotions/sub-skills/installation-and-backends/`, `protomotions/sub-skills/retargeting-and-motion-data/`, `protomotions/sub-skills/simulator-foundations/`, `protomotions/sub-skills/training-and-experiments/`, `protomotions/references/cli-and-config.md`.

### `rex-gym`

Role: Operate the legacy Rex-Gym quadruped reinforcement-learning package for PyBullet environments, kinematics and gait modeling, PPO training setup, and packaged policy playback.
Read when: The request names `rex-gym` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: locomotion modeling, simulation environments, and training policy.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rex-gym/SKILL.md`, `rex-gym/sub-skills/locomotion-modeling/`, `rex-gym/sub-skills/simulation-environments/`, `rex-gym/sub-skills/training-policy/`, `rex-gym/references/repo-provenance.md`, `rex-gym/references/troubleshooting.md`.

### `rl-mpc-locomotion`

Role: Guide quadruped locomotion workflows built from Python convex MPC, FSM and gait control, NVIDIA Isaac Gym simulation, Hydra/RSL-RL training, learned MPC-weight policies, robot assets, and CUDA or solver troubleshooting.
Read when: The request names `rl-mpc-locomotion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: isaac gym simulation, mpc control, rl training, and setup and diagnostics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rl-mpc-locomotion/SKILL.md`, `rl-mpc-locomotion/sub-skills/isaac-gym-simulation/`, `rl-mpc-locomotion/sub-skills/mpc-control/`, `rl-mpc-locomotion/sub-skills/rl-training/`, `rl-mpc-locomotion/sub-skills/setup-and-diagnostics/`, `rl-mpc-locomotion/references/architecture-overview.md`.

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

### `walk-these-ways`

Role: Guide static and backend-aware Walk These Ways Go1 simulation configuration, PPO/PPO-CSE policy workflows, actuator-network data handling, and safe Unitree Go1 deployment preparation.
Read when: The request names `walk-these-ways` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: actuator network, robot deployment, simulation environment, and training and policy.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `walk-these-ways/SKILL.md`, `walk-these-ways/sub-skills/actuator-network/`, `walk-these-ways/sub-skills/robot-deployment/`, `walk-these-ways/sub-skills/simulation-environment/`, `walk-these-ways/sub-skills/training-and-policy/`, `walk-these-ways/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:robot-simulation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
