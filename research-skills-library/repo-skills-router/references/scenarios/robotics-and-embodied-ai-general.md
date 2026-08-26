# Robotics and Embodied AI — General

## When To Read

Robotics and Embodied AI requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:robotics-and-embodied-ai-general:START -->
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

### `drl-robot-navigation`

Role: Guide ROS/Gazebo Velodyne mobile-robot navigation with the DRL-robot-navigation TD3 implementation, including simulator setup, environment contracts, bounded training, checkpoints, and policy evaluation.
Read when: The request names `drl-robot-navigation` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: navigation environment, policy evaluation, simulation setup, and td3 training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `drl-robot-navigation/SKILL.md`, `drl-robot-navigation/sub-skills/navigation-environment/`, `drl-robot-navigation/sub-skills/policy-evaluation/`, `drl-robot-navigation/sub-skills/simulation-setup/`, `drl-robot-navigation/sub-skills/td3-training/`, `drl-robot-navigation/references/repo-provenance.md`.

### `evo`

Role: Routes evo trajectory-evaluation workflows for APE/RPE, trajectory I/O, result analysis, configuration, and programmatic usage.
Read when: The request names `evo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration, metrics, python api, result analysis, and trajectory data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `evo/SKILL.md`, `evo/sub-skills/configuration/`, `evo/sub-skills/metrics/`, `evo/sub-skills/python-api/`, `evo/sub-skills/result-analysis/`, `evo/sub-skills/trajectory-data/`, `evo/references/repo-provenance.md`.

### `gaussian-slam`

Role: Use Gaussian-SLAM for CUDA RGB-D dense SLAM, Gaussian-splatting mapping, dataset/configuration preflight, checkpoint evaluation, reconstruction metrics, and global-map refinement.
Read when: The request names `gaussian-slam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and configuration, evaluation and mapping, and slam runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gaussian-slam/SKILL.md`, `gaussian-slam/sub-skills/datasets-and-configuration/`, `gaussian-slam/sub-skills/evaluation-and-mapping/`, `gaussian-slam/sub-skills/slam-runtime/`, `gaussian-slam/references/repo-provenance.md`, `gaussian-slam/references/troubleshooting.md`.

### `go2-omniverse`

Role: Guides Isaac Sim and IsaacLab workflows for Unitree Go2 and G1 simulation, ROS 2 telemetry, headless rendering, and the real-robot digital-twin bridge.
Read when: The request names `go2-omniverse` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: digital twin, ros2 telemetry, and simulation launch.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `go2-omniverse/SKILL.md`, `go2-omniverse/sub-skills/digital-twin/`, `go2-omniverse/sub-skills/ros2-telemetry/`, `go2-omniverse/sub-skills/simulation-launch/`, `go2-omniverse/references/repo-provenance.md`, `go2-omniverse/references/troubleshooting.md`.

### `gradslam`

Role: Routes GradSLAM package workflows for RGB-D structures, tensor geometry, odometry and SLAM, dataset adapters, and CfgNode configuration on a CPU-first installation.
Read when: The request names `gradslam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration, datasets, geometry, odometry slam, and structures.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gradslam/SKILL.md`, `gradslam/sub-skills/configuration/`, `gradslam/sub-skills/datasets/`, `gradslam/sub-skills/geometry/`, `gradslam/sub-skills/odometry-slam/`, `gradslam/sub-skills/structures/`, `gradslam/references/api-surface.md`.

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

### `mast3r-slam`

Role: Guides MASt3R-SLAM installation, CUDA backend setup, visual SLAM runs on video/live/dataset inputs, and benchmark evaluation.
Read when: The request names `mast3r-slam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, run slam, and setup and backends.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mast3r-slam/SKILL.md`, `mast3r-slam/sub-skills/evaluation/`, `mast3r-slam/sub-skills/run-slam/`, `mast3r-slam/sub-skills/setup-and-backends/`, `mast3r-slam/references/overview.md`, `mast3r-slam/references/repo-provenance.md`.

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

### `mono-gs`

Role: Use MonoGS for CUDA Gaussian-splatting SLAM, dataset/config setup, offline evaluation, and RealSense live demos.
Read when: The request names `mono-gs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configs, environment setup, evaluation and results, live demo, and offline slam.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mono-gs/SKILL.md`, `mono-gs/sub-skills/data-and-configs/`, `mono-gs/sub-skills/environment-setup/`, `mono-gs/sub-skills/evaluation-and-results/`, `mono-gs/sub-skills/live-demo/`, `mono-gs/sub-skills/offline-slam/`, `mono-gs/references/architecture.md`.

### `protomotions`

Role: Use the `protomotions` skill for ProtoMotions 3 humanoid simulation, motion-learning, retargeting, simulator-backend, training, inference, and deployment workflows.
Read when: The request names `protomotions` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and robots, installation and backends, retargeting and motion data, simulator foundations, and training and experiments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `protomotions/SKILL.md`, `protomotions/sub-skills/deployment-and-robots/`, `protomotions/sub-skills/installation-and-backends/`, `protomotions/sub-skills/retargeting-and-motion-data/`, `protomotions/sub-skills/simulator-foundations/`, `protomotions/sub-skills/training-and-experiments/`, `protomotions/references/cli-and-config.md`.

### `pypose`

Role: Use PyPose for differentiable robotics with PyTorch: Lie-group geometry, state estimation and control modules, dense or sparse nonlinear optimization, projection/spline utilities, and trajectory evaluation; route each task to the matching workflow and backend contract.
Read when: The request names `pypose` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: geometry evaluation, lie tensor, optimization, and robotics modules.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pypose/SKILL.md`, `pypose/sub-skills/geometry-evaluation/`, `pypose/sub-skills/lie-tensor/`, `pypose/sub-skills/optimization/`, `pypose/sub-skills/robotics-modules/`, `pypose/references/repo-provenance.md`.

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

### `splatam`

Role: Routes agents working with SplaTAM RGB-D SLAM, Gaussian-splat reconstruction, iPhone/NeRFCapture capture, evaluation, export, and troubleshooting workflows.
Read when: The request names `splatam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: capture and reconstruction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `splatam/SKILL.md`, `splatam/sub-skills/capture/`, `splatam/sub-skills/reconstruction/`, `splatam/references/data-and-configs.md`, `splatam/references/environment.md`, `splatam/references/repo-provenance.md`.

### `walk-these-ways`

Role: Guide static and backend-aware Walk These Ways Go1 simulation configuration, PPO/PPO-CSE policy workflows, actuator-network data handling, and safe Unitree Go1 deployment preparation.
Read when: The request names `walk-these-ways` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: actuator network, robot deployment, simulation environment, and training and policy.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `walk-these-ways/SKILL.md`, `walk-these-ways/sub-skills/actuator-network/`, `walk-these-ways/sub-skills/robot-deployment/`, `walk-these-ways/sub-skills/simulation-environment/`, `walk-these-ways/sub-skills/training-and-policy/`, `walk-these-ways/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:robotics-and-embodied-ai-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
