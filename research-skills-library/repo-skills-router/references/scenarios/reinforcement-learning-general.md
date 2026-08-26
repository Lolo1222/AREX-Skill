# Reinforcement Learning — General

## When To Read

Reinforcement Learning requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:reinforcement-learning-general:START -->
### `ai-optimizer`

Role: Route AI-Optimizer reinforcement-learning collection tasks across model-based RL, easy-MARL, offline RL, safe command builders, and repository limitations.
Read when: The request names `ai-optimizer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model based rl, multi agent rl, and offline rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ai-optimizer/SKILL.md`, `ai-optimizer/sub-skills/model-based-rl/`, `ai-optimizer/sub-skills/multi-agent-rl/`, `ai-optimizer/sub-skills/offline-rl/`, `ai-optimizer/references/repo-provenance.md`, `ai-optimizer/references/repository-map.md`.

### `curobo`

Role: Guides CUDA-accelerated cuRobo v2 robotics workflows for robot models, differentiable kinematics, collision-aware IK and motion planning, trajectory optimization, MPC, perception mapping, and motion retargeting.
Read when: The request names `curobo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: collision scenes, ik, motion planning, mpc optimization, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `curobo/SKILL.md`, `curobo/sub-skills/collision-scenes/`, `curobo/sub-skills/ik/`, `curobo/sub-skills/motion-planning/`, `curobo/sub-skills/mpc-optimization/`, `curobo/sub-skills/perception/`, `curobo/references/api-map.md`.

### `dreamerv2`

Role: Use DreamerV2 2.2.0 for TensorFlow world-model reinforcement-learning training, custom Gym integration, typed experiment configuration, replay/checkpoint management, and JSONL/TensorBoard evaluation.
Read when: The request names `dreamerv2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration, environments, evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamerv2/SKILL.md`, `dreamerv2/sub-skills/configuration/`, `dreamerv2/sub-skills/environments/`, `dreamerv2/sub-skills/evaluation/`, `dreamerv2/sub-skills/training/`, `dreamerv2/references/repo-provenance.md`.

### `dreamerv3`

Role: Use DreamerV3 for world-model reinforcement learning training, embodied environment dataflow, JAX model internals, result operations, and troubleshooting.
Read when: The request names `dreamerv3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embodied dataflow, jax models, results ops, and train configure.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamerv3/SKILL.md`, `dreamerv3/sub-skills/embodied-dataflow/`, `dreamerv3/sub-skills/jax-models/`, `dreamerv3/sub-skills/results-ops/`, `dreamerv3/sub-skills/train-configure/`, `dreamerv3/references/repo-provenance.md`.

### `mctx`

Role: Use Mctx for JAX-native Monte Carlo tree search, MuZero/Gumbel MuZero policies, stochastic MuZero search, and search-tree inspection.
Read when: The request names `mctx` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mctx/SKILL.md`, `mctx/references/api-reference.md`, `mctx/references/repo-provenance.md`, `mctx/references/troubleshooting.md`, `mctx/references/workflows.md`, `mctx/scripts/check_install.py`.

### `muzero-general`

Role: Guides MuZero General model-based reinforcement learning workflows, game/config customization, network and MCTS debugging, training CLI/API use, and checkpoint diagnostics.
Read when: The request names `muzero-general` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpoints and diagnostics, games and configs, models and mcts, and training and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `muzero-general/SKILL.md`, `muzero-general/sub-skills/checkpoints-and-diagnostics/`, `muzero-general/sub-skills/games-and-configs/`, `muzero-general/sub-skills/models-and-mcts/`, `muzero-general/sub-skills/training-and-cli/`, `muzero-general/references/architecture-overview.md`.

### `neuromancer`

Role: Guide NeuroMANCER 1.5.6 differentiable scientific machine-learning workflows for constrained optimization, dynamics modeling, data and training, predictive control, simulation, and structured operators.
Read when: The request names `neuromancer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control simulation, data training, dynamics modeling, structured operators, and symbolic problems.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `neuromancer/SKILL.md`, `neuromancer/sub-skills/control-simulation/`, `neuromancer/sub-skills/data-training/`, `neuromancer/sub-skills/dynamics-modeling/`, `neuromancer/sub-skills/structured-operators/`, `neuromancer/sub-skills/symbolic-problems/`, `neuromancer/references/installation-and-overview.md`.

### `rl-mpc-locomotion`

Role: Guide quadruped locomotion workflows built from Python convex MPC, FSM and gait control, NVIDIA Isaac Gym simulation, Hydra/RSL-RL training, learned MPC-weight policies, robot assets, and CUDA or solver troubleshooting.
Read when: The request names `rl-mpc-locomotion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: isaac gym simulation, mpc control, rl training, and setup and diagnostics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rl-mpc-locomotion/SKILL.md`, `rl-mpc-locomotion/sub-skills/isaac-gym-simulation/`, `rl-mpc-locomotion/sub-skills/mpc-control/`, `rl-mpc-locomotion/sub-skills/rl-training/`, `rl-mpc-locomotion/sub-skills/setup-and-diagnostics/`, `rl-mpc-locomotion/references/architecture-overview.md`.

### `skrl`

Role: Route public skrl 2.1.0 reinforcement-learning workflows across PyTorch, JAX, NVIDIA Warp, Gymnasium environments, multi-agent IPPO/MAPPO, runners, checkpoints, and experiment operations.
Read when: The request names `skrl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment integration, jax agent training, multi agent and runner, torch agent training, and warp agent training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `skrl/SKILL.md`, `skrl/sub-skills/environment-integration/`, `skrl/sub-skills/jax-agent-training/`, `skrl/sub-skills/multi-agent-and-runner/`, `skrl/sub-skills/torch-agent-training/`, `skrl/sub-skills/warp-agent-training/`, `skrl/references/framework-selection.md`.

### `smarts`

Role: Use SMARTS 2.0.1 for multi-agent autonomous-driving simulation, Gymnasium environments, scenario generation, sensor and Envision workflows, agent-zoo/RL integration, and the scl command-line tools.
Read when: The request names `smarts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli integrations, rl agent zoo, scenario studio, sensors visualization, and simulation environments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `smarts/SKILL.md`, `smarts/sub-skills/cli-integrations/`, `smarts/sub-skills/rl-agent-zoo/`, `smarts/sub-skills/scenario-studio/`, `smarts/sub-skills/sensors-visualization/`, `smarts/sub-skills/simulation-environments/`, `smarts/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:reinforcement-learning-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
