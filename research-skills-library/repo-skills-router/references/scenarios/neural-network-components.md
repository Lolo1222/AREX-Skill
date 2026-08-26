# Neural Network Components

## When To Read

Requests in the Neural Network Components family of the Training Infrastructure area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on neural network components.

## Repo Skill Options

<!-- DISCO_SCENARIO:neural-network-components:START -->
### `attention-is-all-you-need-pytorch`

Role: Use jadore801120 attention-is-all-you-need-pytorch for Transformer architecture inspection, preprocessing, training, and checkpoint translation workflows.
Read when: The request names `attention-is-all-you-need-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model architecture, training, and translation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `attention-is-all-you-need-pytorch/SKILL.md`, `attention-is-all-you-need-pytorch/sub-skills/data-preparation/`, `attention-is-all-you-need-pytorch/sub-skills/model-architecture/`, `attention-is-all-you-need-pytorch/sub-skills/training/`, `attention-is-all-you-need-pytorch/sub-skills/translation/`, `attention-is-all-you-need-pytorch/references/package-overview.md`.

### `dm-haiku`

Role: Use DeepMind dm-haiku as a JAX neural-network library for transforms, modules, state/RNG, layers, advanced JAX interop, and optional Flax interop.
Read when: The request names `dm-haiku` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core transforms, flax interop, jax interop and advanced, modules and networks, and params state rng.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dm-haiku/SKILL.md`, `dm-haiku/sub-skills/core-transforms/`, `dm-haiku/sub-skills/flax-interop/`, `dm-haiku/sub-skills/jax-interop-and-advanced/`, `dm-haiku/sub-skills/modules-and-networks/`, `dm-haiku/sub-skills/params-state-rng/`, `dm-haiku/references/repo-provenance.md`.

### `einops`

Role: Use the einops Python package for readable tensor rearrangement, reductions, repetition, named-axis einsum, packing, framework layers, and repository maintenance workflows.
Read when: The request names `einops` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: framework integrations, named einsum and packing, repo development, and tensor operations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `einops/SKILL.md`, `einops/sub-skills/framework-integrations/`, `einops/sub-skills/named-einsum-and-packing/`, `einops/sub-skills/repo-development/`, `einops/sub-skills/tensor-operations/`, `einops/references/repo-provenance.md`.

### `equinox`

Role: Operating skill for the Equinox JAX neural-network and PyTree library.
Read when: The request names `equinox` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: diagnostics and serialization, filtered transformations, internal advanced, module and trees, and nn and state.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `equinox/SKILL.md`, `equinox/sub-skills/diagnostics-and-serialization/`, `equinox/sub-skills/filtered-transformations/`, `equinox/sub-skills/internal-advanced/`, `equinox/sub-skills/module-and-trees/`, `equinox/sub-skills/nn-and-state/`, `equinox/references/api-reference.md`.

### `flash-linear-attention`

Role: Operate Flash Linear Attention package workflows: setup, kernels, layers/models, KDA/context parallel, and benchmarking.
Read when: The request names `flash-linear-attention` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarking and optimization, kda and context parallel, layers and models, ops kernels and dispatch, and setup and backends.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flash-linear-attention/SKILL.md`, `flash-linear-attention/sub-skills/benchmarking-and-optimization/`, `flash-linear-attention/sub-skills/kda-and-context-parallel/`, `flash-linear-attention/sub-skills/layers-and-models/`, `flash-linear-attention/sub-skills/ops-kernels-and-dispatch/`, `flash-linear-attention/sub-skills/setup-and-backends/`, `flash-linear-attention/references/package-overview.md`.

### `keras-attention`

Role: Guides use of the Keras Attention Layer attention package for TensorFlow/Keras sequence models, save/load checks, debug-mode attention weights, and example workflow troubleshooting.
Read when: The request names `keras-attention` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-attention/SKILL.md`, `keras-attention/references/api-reference.md`, `keras-attention/references/compatibility.md`, `keras-attention/references/examples.md`, `keras-attention/references/repo-provenance.md`, `keras-attention/references/troubleshooting.md`.

### `lightly`

Role: Use LightlySSL for self-supervised computer-vision training, model components, CLIs, embeddings, data layout, evaluation, and repository maintenance.
Read when: The request names `lightly` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli data embedding, evaluation maintenance, ssl building blocks, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightly/SKILL.md`, `lightly/sub-skills/cli-data-embedding/`, `lightly/sub-skills/evaluation-maintenance/`, `lightly/sub-skills/ssl-building-blocks/`, `lightly/sub-skills/training-workflows/`, `lightly/references/package-overview.md`.

### `megatron-lm`

Role: Verified operating guidance for Megatron-LM and Megatron Core installation, distributed training, model parallelism, data, checkpoints, inference, optional RL/multimodal workflows, and repository maintenance.
Read when: The request names `megatron-lm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpointing and conversion, core models and parallelism, inference and serving, install and environment, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `megatron-lm/SKILL.md`, `megatron-lm/sub-skills/checkpointing-and-conversion/`, `megatron-lm/sub-skills/core-models-and-parallelism/`, `megatron-lm/sub-skills/inference-and-serving/`, `megatron-lm/sub-skills/install-and-environment/`, `megatron-lm/sub-skills/post-training-rl-and-multimodal/`, `megatron-lm/references/capability-map.md`.

### `minkowski-engine`

Role: Helps with MinkowskiEngine install/build troubleshooting, sparse tensor workflows, sparse convolution and network construction, and the repo's training and demo patterns.
Read when: The request names `minkowski-engine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: build and install, layers and networks, sparse tensor data, and training and demos.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minkowski-engine/SKILL.md`, `minkowski-engine/sub-skills/build-and-install/`, `minkowski-engine/sub-skills/layers-and-networks/`, `minkowski-engine/sub-skills/sparse-tensor-data/`, `minkowski-engine/sub-skills/training-and-demos/`, `minkowski-engine/references/repo-provenance.md`.

### `numpy-ml`

Role: Routes numpy-ml users to the right classical ML, preprocessing, neural-component, probabilistic, and RL workflows.
Read when: The request names `numpy-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bandits and reinforcement learning, neural network components, preprocessing and utilities, probabilistic and sequence models, and supervised and tabular models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `numpy-ml/SKILL.md`, `numpy-ml/sub-skills/bandits-and-reinforcement-learning/`, `numpy-ml/sub-skills/neural-network-components/`, `numpy-ml/sub-skills/preprocessing-and-utilities/`, `numpy-ml/sub-skills/probabilistic-and-sequence-models/`, `numpy-ml/sub-skills/supervised-and-tabular-models/`, `numpy-ml/references/api-overview.md`.

### `scenic`

Role: Use Scenic, Google Research's JAX/Flax computer-vision research codebase, for configs, training, datasets, models, layers, baselines, and project-specific workflows.
Read when: The request names `scenic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: baselines and projects, data pipelines, modeling and layers, and running and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scenic/SKILL.md`, `scenic/sub-skills/baselines-and-projects/`, `scenic/sub-skills/data-pipelines/`, `scenic/sub-skills/modeling-and-layers/`, `scenic/sub-skills/running-and-training/`, `scenic/references/common-utilities.md`.

### `sonnet`

Role: Use DeepMind Sonnet for TensorFlow 2 modules, layers, training loops, functional transforms, serialization, and distribution workflows.
Read when: The request names `sonnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: functional transforms, layers and nets, module authoring, sequence and rnn, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sonnet/SKILL.md`, `sonnet/sub-skills/functional-transforms/`, `sonnet/sub-skills/layers-and-nets/`, `sonnet/sub-skills/module-authoring/`, `sonnet/sub-skills/sequence-and-rnn/`, `sonnet/sub-skills/serialization-and-distribution/`, `sonnet/references/package-overview.md`.

### `transformer-engine`

Role: Route Transformer Engine installation/build, PyTorch, JAX, and shared precision/compatibility workflows.
Read when: The request names `transformer-engine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install build, jax, and pytorch.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transformer-engine/SKILL.md`, `transformer-engine/sub-skills/install-build/`, `transformer-engine/sub-skills/jax/`, `transformer-engine/sub-skills/pytorch/`, `transformer-engine/references/precision-recipes.md`, `transformer-engine/references/repo-provenance.md`.

### `x-transformers`

Role: Route x-transformers transformer construction, sequence wrappers, and recipe workflows through self-contained sub-skills.
Read when: The request names `x-transformers` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core models, sequence workflows, and training recipes.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `x-transformers/SKILL.md`, `x-transformers/sub-skills/core-models/`, `x-transformers/sub-skills/sequence-workflows/`, `x-transformers/sub-skills/training-recipes/`, `x-transformers/references/api-reference.md`, `x-transformers/references/compatibility.md`.

<!-- DISCO_SCENARIO:neural-network-components:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
