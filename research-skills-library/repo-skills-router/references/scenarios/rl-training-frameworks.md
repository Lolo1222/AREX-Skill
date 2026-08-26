# RL Training Frameworks

## When To Read

Requests in the RL Training Frameworks family of the Reinforcement Learning area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on rl training frameworks.

## Repo Skill Options

<!-- DISCO_SCENARIO:rl-training-frameworks:START -->
### `agent-lightning`

Role: Use this repo skill for Agent Lightning package tasks: authoring trainable agents, tracing rewards and spans, running LightningStore/Trainer loops, using agl CLI services, choosing examples, and troubleshooting optional backends.
Read when: The request names `agent-lightning` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent authoring, cli and services, examples and recipes, runner store training, and tracing and instrumentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agent-lightning/SKILL.md`, `agent-lightning/sub-skills/agent-authoring/`, `agent-lightning/sub-skills/cli-and-services/`, `agent-lightning/sub-skills/examples-and-recipes/`, `agent-lightning/sub-skills/runner-store-training/`, `agent-lightning/sub-skills/tracing-and-instrumentation/`, `agent-lightning/references/compatibility.md`.

### `agibot-x1-train`

Role: Guide agents through AgiBot X1 humanoid reinforcement-learning training, checkpoint playback, policy export, and MuJoCo sim2sim workflows with verified configuration contracts and explicit Isaac Gym limits.
Read when: The request names `agibot-x1-train` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export, playback, sim2sim, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agibot-x1-train/SKILL.md`, `agibot-x1-train/sub-skills/export/`, `agibot-x1-train/sub-skills/playback/`, `agibot-x1-train/sub-skills/sim2sim/`, `agibot-x1-train/sub-skills/training/`, `agibot-x1-train/references/repo-provenance.md`.

### `di-engine`

Role: Routes DI-engine users to the right workflow for CLI/config launches, serial and framework-based RL pipelines, and environment integration.
Read when: The request names `di-engine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli config, env integration, framework runtime, and serial pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `di-engine/SKILL.md`, `di-engine/sub-skills/cli-config/`, `di-engine/sub-skills/env-integration/`, `di-engine/sub-skills/framework-runtime/`, `di-engine/sub-skills/serial-pipelines/`, `di-engine/references/package-surface.md`.

### `dreamerv3`

Role: Use DreamerV3 for world-model reinforcement learning training, embodied environment dataflow, JAX model internals, result operations, and troubleshooting.
Read when: The request names `dreamerv3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embodied dataflow, jax models, results ops, and train configure.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamerv3/SKILL.md`, `dreamerv3/sub-skills/embodied-dataflow/`, `dreamerv3/sub-skills/jax-models/`, `dreamerv3/sub-skills/results-ops/`, `dreamerv3/sub-skills/train-configure/`, `dreamerv3/references/repo-provenance.md`.

### `drl-pytorch`

Role: Route DRL-Pytorch reinforcement-learning workflows for standalone PyTorch Q-learning, DQN-family, PPO, DDPG, TD3, SAC, Atari DQN, and Actor-Sharer-Learner scripts.
Read when: The request names `drl-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: atari and asl workflows, policy and actor critic control, and value based discrete control.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `drl-pytorch/SKILL.md`, `drl-pytorch/sub-skills/atari-and-asl-workflows/`, `drl-pytorch/sub-skills/policy-and-actor-critic-control/`, `drl-pytorch/sub-skills/value-based-discrete-control/`, `drl-pytorch/references/algorithm-index.md`, `drl-pytorch/references/quickstart-and-environment.md`.

### `keras-rl`

Role: Use legacy keras-rl reinforcement-learning agents, memories, policies, processors, callbacks, and safe smoke checks.
Read when: The request names `keras-rl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: continuous control, core extension and logging, and discrete control.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-rl/SKILL.md`, `keras-rl/sub-skills/continuous-control/`, `keras-rl/sub-skills/core-extension-and-logging/`, `keras-rl/sub-skills/discrete-control/`, `keras-rl/references/install-and-compatibility.md`, `keras-rl/references/repo-provenance.md`.

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

### `muzero-general`

Role: Guides MuZero General model-based reinforcement learning workflows, game/config customization, network and MCTS debugging, training CLI/API use, and checkpoint diagnostics.
Read when: The request names `muzero-general` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpoints and diagnostics, games and configs, models and mcts, and training and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `muzero-general/SKILL.md`, `muzero-general/sub-skills/checkpoints-and-diagnostics/`, `muzero-general/sub-skills/games-and-configs/`, `muzero-general/sub-skills/models-and-mcts/`, `muzero-general/sub-skills/training-and-cli/`, `muzero-general/references/architecture-overview.md`.

### `parl`

Role: Use PARL reinforcement-learning framework workflows, core Model/Algorithm/Agent APIs, built-in algorithms, xparl distributed execution, wrappers, Waymax-RL, and EvoKit safely.
Read when: The request names `parl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: algorithm recipes, core framework, environment utils, evo kit, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `parl/SKILL.md`, `parl/sub-skills/algorithm-recipes/`, `parl/sub-skills/core-framework/`, `parl/sub-skills/environment-utils/`, `parl/sub-skills/evo-kit/`, `parl/sub-skills/waymax-rl/`, `parl/references/backend-verification.md`.

### `ppo-pytorch`

Role: Routes PPO-PyTorch training, evaluation, and visualization workflows for the repository's PPO implementation.
Read when: The request names `ppo-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, training, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ppo-pytorch/SKILL.md`, `ppo-pytorch/sub-skills/evaluation/`, `ppo-pytorch/sub-skills/training/`, `ppo-pytorch/sub-skills/visualization/`, `ppo-pytorch/references/api-reference.md`, `ppo-pytorch/references/dependencies-and-environments.md`.

### `pytorch-a2c-ppo-acktr-gail`

Role: Operate the PyTorch A2C/PPO/ACKTR/GAIL reinforcement-learning repository, including training commands, model components, GAIL demos, and troubleshooting.
Read when: The request names `pytorch-a2c-ppo-acktr-gail` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: gail imitation, model components, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-a2c-ppo-acktr-gail/SKILL.md`, `pytorch-a2c-ppo-acktr-gail/sub-skills/gail-imitation/`, `pytorch-a2c-ppo-acktr-gail/sub-skills/model-components/`, `pytorch-a2c-ppo-acktr-gail/sub-skills/training-workflows/`, `pytorch-a2c-ppo-acktr-gail/references/cli-and-config-reference.md`, `pytorch-a2c-ppo-acktr-gail/references/data-and-artifacts.md`.

### `rl-baselines3-zoo`

Role: Operate RL Baselines3 Zoo package and CLI workflows for Stable-Baselines3 reinforcement-learning experiments.
Read when: The request names `rl-baselines3-zoo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config hyperparams, custom components, evaluation and artifacts, integrations hub tracking, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rl-baselines3-zoo/SKILL.md`, `rl-baselines3-zoo/sub-skills/config-hyperparams/`, `rl-baselines3-zoo/sub-skills/custom-components/`, `rl-baselines3-zoo/sub-skills/evaluation-and-artifacts/`, `rl-baselines3-zoo/sub-skills/integrations-hub-tracking/`, `rl-baselines3-zoo/sub-skills/plotting-benchmarking/`, `rl-baselines3-zoo/references/cli-command-map.md`.

### `rlinf`

Role: Routes RLinf repository tasks for distributed reinforcement learning setup, embodied and agentic workflows, extension development, evaluation operations, and debugging.
Read when: The request names `rlinf` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: embodied workflows, extension development, operations evaluation debugging, reasoning agent workflows, and setup and cluster.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rlinf/SKILL.md`, `rlinf/sub-skills/embodied-workflows/`, `rlinf/sub-skills/extension-development/`, `rlinf/sub-skills/operations-evaluation-debugging/`, `rlinf/sub-skills/reasoning-agent-workflows/`, `rlinf/sub-skills/setup-and-cluster/`, `rlinf/references/package-overview.md`.

### `skrl`

Role: Route public skrl 2.1.0 reinforcement-learning workflows across PyTorch, JAX, NVIDIA Warp, Gymnasium environments, multi-agent IPPO/MAPPO, runners, checkpoints, and experiment operations.
Read when: The request names `skrl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment integration, jax agent training, multi agent and runner, torch agent training, and warp agent training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `skrl/SKILL.md`, `skrl/sub-skills/environment-integration/`, `skrl/sub-skills/jax-agent-training/`, `skrl/sub-skills/multi-agent-and-runner/`, `skrl/sub-skills/torch-agent-training/`, `skrl/sub-skills/warp-agent-training/`, `skrl/references/framework-selection.md`.

### `tensorforce`

Role: Guide Tensorforce reinforcement-learning package workflows, including agents, environments, Runner execution, configuration modules, persistence, export, and troubleshooting.
Read when: The request names `tensorforce` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents and specifications, environments and interaction, modules and configuration, persistence export and recording, and runner and cli workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorforce/SKILL.md`, `tensorforce/sub-skills/agents-and-specifications/`, `tensorforce/sub-skills/environments-and-interaction/`, `tensorforce/sub-skills/modules-and-configuration/`, `tensorforce/sub-skills/persistence-export-and-recording/`, `tensorforce/sub-skills/runner-and-cli-workflows/`, `tensorforce/references/configuration.md`.

### `torchrl`

Role: Use TorchRL for TensorDict-first reinforcement-learning environments, collectors, replay buffers, modules, objectives, LLM/RLHF/VLA workflows, services, rendering, and maintainer-safe repository changes.
Read when: The request names `torchrl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: collectors and replay, development and testing, envs and transforms, llm vla and services, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torchrl/SKILL.md`, `torchrl/sub-skills/collectors-and-replay/`, `torchrl/sub-skills/development-and-testing/`, `torchrl/sub-skills/envs-and-transforms/`, `torchrl/sub-skills/llm-vla-and-services/`, `torchrl/sub-skills/modules-and-policies/`, `torchrl/references/backend-compatibility.md`.

<!-- DISCO_SCENARIO:rl-training-frameworks:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
