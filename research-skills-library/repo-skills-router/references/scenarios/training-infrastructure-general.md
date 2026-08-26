# Training Infrastructure — General

## When To Read

Training Infrastructure requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:training-infrastructure-general:START -->
### `autograd`

Role: Routes Autograd install, differentiation, wrapper, extension, and optimization workflows for NumPy-based scientific Python code.
Read when: The request names `autograd` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: differentiation core, extend primitives, numpy scipy primitives, and optimization workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autograd/SKILL.md`, `autograd/sub-skills/differentiation-core/`, `autograd/sub-skills/extend-primitives/`, `autograd/sub-skills/numpy-scipy-primitives/`, `autograd/sub-skills/optimization-workflows/`, `autograd/references/example-gallery.md`.

### `axlearn`

Role: Routes AXLearn training, language-model, vision, audio/ASR, and GCP CLI workflows.
Read when: The request names `axlearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio asr, cli cloud, language models, training core, and vision workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `axlearn/SKILL.md`, `axlearn/sub-skills/audio-asr/`, `axlearn/sub-skills/cli-cloud/`, `axlearn/sub-skills/language-models/`, `axlearn/sub-skills/training-core/`, `axlearn/sub-skills/vision-workflows/`, `axlearn/references/repo-provenance.md`.

### `chainer`

Role: Routes Chainer workflows for training, export, distributed learning, ChainerX, and checkout maintenance.
Read when: The request names `chainer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chainerx, distributed, export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chainer/SKILL.md`, `chainer/sub-skills/chainerx/`, `chainer/sub-skills/distributed/`, `chainer/sub-skills/export/`, `chainer/sub-skills/training/`, `chainer/references/api-overview.md`.

### `deepxde`

Role: Use DeepXDE for scientific machine learning, PINNs, DeepONet/operator learning, backend selection, training, and troubleshooting.
Read when: The request names `deepxde` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and configuration, operator learning, pinn problem setup, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxde/SKILL.md`, `deepxde/sub-skills/backend-and-configuration/`, `deepxde/sub-skills/operator-learning/`, `deepxde/sub-skills/pinn-problem-setup/`, `deepxde/sub-skills/training-workflows/`, `deepxde/references/backend-and-installation.md`.

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

### `jittor`

Role: Guide Jittor package workflows for tensor programming, training, data/model I/O, custom ops, runtime validation, and troubleshooting.
Read when: The request names `jittor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core api and autograd, custom op console and tools, datasets models and io, nn training workflows, and runtime and installation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jittor/SKILL.md`, `jittor/sub-skills/core-api-and-autograd/`, `jittor/sub-skills/custom-op-console-and-tools/`, `jittor/sub-skills/datasets-models-and-io/`, `jittor/sub-skills/nn-training-workflows/`, `jittor/sub-skills/runtime-and-installation/`, `jittor/references/api-map.md`.

### `learning-to-learn`

Role: Routes TensorFlow 1.x learning-to-learn meta-optimizer, optimizer-network, problem-factory, training, and evaluation workflows.
Read when: The request names `learning-to-learn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: meta optimizer api, optimizer networks, problem factories, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `learning-to-learn/SKILL.md`, `learning-to-learn/sub-skills/meta-optimizer-api/`, `learning-to-learn/sub-skills/optimizer-networks/`, `learning-to-learn/sub-skills/problem-factories/`, `learning-to-learn/sub-skills/training-evaluation/`, `learning-to-learn/references/overview.md`.

### `libmtl`

Role: Routes LibMTL installation, core APIs, customization, and benchmark workflows.
Read when: The request names `libmtl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core api, customization, office benchmarks, paws x, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `libmtl/SKILL.md`, `libmtl/sub-skills/core-api/`, `libmtl/sub-skills/customization/`, `libmtl/sub-skills/office-benchmarks/`, `libmtl/sub-skills/paws-x/`, `libmtl/sub-skills/qm9/`, `libmtl/references/api-reference.md`.

### `ludwig`

Role: Guides agents using Ludwig declarative machine learning configs, CLI commands, Python APIs, AutoML, HPO, serving, export, and deployment workflows.
Read when: The request names `ludwig` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automl and hyperopt, configuration and data, prediction evaluation and inspection, serving export and deployment, and training and experiments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ludwig/SKILL.md`, `ludwig/sub-skills/automl-and-hyperopt/`, `ludwig/sub-skills/configuration-and-data/`, `ludwig/sub-skills/prediction-evaluation-and-inspection/`, `ludwig/sub-skills/serving-export-and-deployment/`, `ludwig/sub-skills/training-and-experiments/`, `ludwig/references/api-reference.md`.

### `mars`

Role: Routes Mars and pymars users to the right local compute, remote execution, learning, and deployment workflows with verified install, import, and backend guidance.
Read when: The request names `mars` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and backends, learn and integrations, remote and scripts, and tensor dataframe core.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mars/SKILL.md`, `mars/sub-skills/deployment-and-backends/`, `mars/sub-skills/learn-and-integrations/`, `mars/sub-skills/remote-and-scripts/`, `mars/sub-skills/tensor-dataframe-core/`, `mars/references/repo-provenance.md`.

### `medical-sam-adapter`

Role: Use Medical-SAM-Adapter to prepare medical segmentation inputs, train SAM-family adapters, evaluate compatible checkpoints, and run the documented standalone MobileSAMv2 inference preflight.
Read when: The request names `medical-sam-adapter` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, mobile inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-sam-adapter/SKILL.md`, `medical-sam-adapter/sub-skills/data-preparation/`, `medical-sam-adapter/sub-skills/evaluation/`, `medical-sam-adapter/sub-skills/mobile-inference/`, `medical-sam-adapter/sub-skills/training/`, `medical-sam-adapter/references/repo-provenance.md`.

### `minkowski-engine`

Role: Helps with MinkowskiEngine install/build troubleshooting, sparse tensor workflows, sparse convolution and network construction, and the repo's training and demo patterns.
Read when: The request names `minkowski-engine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: build and install, layers and networks, sparse tensor data, and training and demos.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minkowski-engine/SKILL.md`, `minkowski-engine/sub-skills/build-and-install/`, `minkowski-engine/sub-skills/layers-and-networks/`, `minkowski-engine/sub-skills/sparse-tensor-data/`, `minkowski-engine/sub-skills/training-and-demos/`, `minkowski-engine/references/repo-provenance.md`.

### `modelscope`

Role: Use ModelScope SDK workflows for Hub access, pipelines, datasets, training, serving, export, customization, and repository contribution without relying on a source checkout.
Read when: The request names `modelscope` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: customization and development, datasets config, hub and cli, pipelines and models, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `modelscope/SKILL.md`, `modelscope/sub-skills/customization-and-development/`, `modelscope/sub-skills/datasets-config/`, `modelscope/sub-skills/hub-and-cli/`, `modelscope/sub-skills/pipelines-and-models/`, `modelscope/sub-skills/serving-export-and-tools/`, `modelscope/references/package-overview.md`.

### `onnxsim`

Role: Repo skill for ONNX Simplifier: ONNX model simplification, graph rewriting, metrics, profiling, packaging, and bindings.
Read when: The request names `onnxsim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced graph control, bindings and packaging, and python simplification.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onnxsim/SKILL.md`, `onnxsim/sub-skills/advanced-graph-control/`, `onnxsim/sub-skills/bindings-and-packaging/`, `onnxsim/sub-skills/python-simplification/`, `onnxsim/references/package-overview.md`, `onnxsim/references/repo-provenance.md`.

### `optax`

Role: Route Optax tasks across optimizer construction, loss and schedule workflows, and advanced utilities or contrib topics.
Read when: The request names `optax` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced topics, core optimization, and losses and schedules.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `optax/SKILL.md`, `optax/sub-skills/advanced-topics/`, `optax/sub-skills/core-optimization/`, `optax/sub-skills/losses-and-schedules/`, `optax/references/advanced-topics.md`, `optax/references/core-workflows.md`.

### `paddlecv`

Role: Use for PaddlePaddle models repo PaddleCV and ppcv inference, task-name pipelines, model catalog checks, and custom operator graph workflows.
Read when: The request names `paddlecv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom ops, single model inference, and system pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlecv/SKILL.md`, `paddlecv/sub-skills/custom-ops/`, `paddlecv/sub-skills/single-model-inference/`, `paddlecv/sub-skills/system-pipelines/`, `paddlecv/references/api-reference.md`, `paddlecv/references/repo-provenance.md`.

### `paddlex`

Role: Operate PaddleX 3.7.2 for low-code AI pipelines, module custom development, deployment, installation, and troubleshooting.
Read when: The request names `paddlex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, modules, and pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlex/SKILL.md`, `paddlex/sub-skills/deployment/`, `paddlex/sub-skills/modules/`, `paddlex/sub-skills/pipelines/`, `paddlex/references/deployment-overview.md`, `paddlex/references/installation.md`.

### `pfllib`

Role: Routes PFLlib tasks for dataset preparation, federated-learning experiments, and library extension.
Read when: The request names `pfllib` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, experiments, and extension.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pfllib/SKILL.md`, `pfllib/sub-skills/data-preparation/`, `pfllib/sub-skills/experiments/`, `pfllib/sub-skills/extension/`, `pfllib/references/repo-provenance.md`, `pfllib/references/troubleshooting.md`.

### `pinto-model-zoo`

Role: Use PINTO_model_zoo for model catalog search, artifact acquisition, conversion planning, inference demo preparation, and edge/backend troubleshooting.
Read when: The request names `pinto-model-zoo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion and deployment, inference demos, model acquisition, and model catalog.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pinto-model-zoo/SKILL.md`, `pinto-model-zoo/sub-skills/conversion-and-deployment/`, `pinto-model-zoo/sub-skills/inference-demos/`, `pinto-model-zoo/sub-skills/model-acquisition/`, `pinto-model-zoo/sub-skills/model-catalog/`, `pinto-model-zoo/references/model-catalog.json`.

### `pot`

Role: Use POT/Python Optimal Transport for optimal-transport solvers, Wasserstein distances, Sinkhorn, Gromov-Wasserstein, barycenters, unbalanced or partial OT, domain adaptation, Gaussian/GMM and backend-aware scientific ML workflows.
Read when: The request names `pot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and batch, barycenters, core solvers, domain adaptation, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pot/SKILL.md`, `pot/sub-skills/backend-and-batch/`, `pot/sub-skills/barycenters/`, `pot/sub-skills/core-solvers/`, `pot/sub-skills/domain-adaptation/`, `pot/sub-skills/gromov/`, `pot/references/package-overview.md`.

### `pytorch-summary`

Role: Use and maintain the legacy torchsummary PyTorch model-summary package, including summary calls, device and dtype handling, smoke checks, and focused repo tests.
Read when: The request names `pytorch-summary` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model summary usage and repo maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-summary/SKILL.md`, `pytorch-summary/sub-skills/model-summary-usage/`, `pytorch-summary/sub-skills/repo-maintenance/`, `pytorch-summary/references/repo-provenance.md`, `pytorch-summary/references/troubleshooting.md`, `pytorch-summary/scripts/check_install.py`.

### `roboflow-inference`

Role: Route Roboflow Inference users through CLI operations, SDK/WebRTC, workflow processing, and model runtime selection.
Read when: The request names `roboflow-inference` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, model runtime, sdk webrtc, and workflow processing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `roboflow-inference/SKILL.md`, `roboflow-inference/sub-skills/cli-operations/`, `roboflow-inference/sub-skills/model-runtime/`, `roboflow-inference/sub-skills/sdk-webrtc/`, `roboflow-inference/sub-skills/workflow-processing/`, `roboflow-inference/references/installation.md`.

### `snorkel`

Role: Operate Snorkel weak-supervision, data transform, classification, and slicing workflows.
Read when: The request names `snorkel` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, data transforms, labeling, and slicing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `snorkel/SKILL.md`, `snorkel/sub-skills/classification/`, `snorkel/sub-skills/data-transforms/`, `snorkel/sub-skills/labeling/`, `snorkel/sub-skills/slicing/`, `snorkel/references/installation-and-optional-dependencies.md`.

### `sonnet`

Role: Use DeepMind Sonnet for TensorFlow 2 modules, layers, training loops, functional transforms, serialization, and distribution workflows.
Read when: The request names `sonnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: functional transforms, layers and nets, module authoring, sequence and rnn, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sonnet/SKILL.md`, `sonnet/sub-skills/functional-transforms/`, `sonnet/sub-skills/layers-and-nets/`, `sonnet/sub-skills/module-authoring/`, `sonnet/sub-skills/sequence-and-rnn/`, `sonnet/sub-skills/serialization-and-distribution/`, `sonnet/references/package-overview.md`.

### `tensorflow-quantum`

Role: Guide TensorFlow Quantum workflows for circuit tensors, Keras quantum layers, differentiators, datasets, and tutorial recipes.
Read when: The request names `tensorflow-quantum` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and tutorials, differentiation and optimizers, keras quantum layers, and tensor ops and execution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-quantum/SKILL.md`, `tensorflow-quantum/sub-skills/datasets-and-tutorials/`, `tensorflow-quantum/sub-skills/differentiation-and-optimizers/`, `tensorflow-quantum/sub-skills/keras-quantum-layers/`, `tensorflow-quantum/sub-skills/tensor-ops-and-execution/`, `tensorflow-quantum/references/api-overview.md`.

### `tensorflow-template-application`

Role: Route TensorFlow template application workflows for data preparation, TF1 training/export, and serving/client tasks.
Read when: The request names `tensorflow-template-application` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, serving and clients, and training and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-template-application/SKILL.md`, `tensorflow-template-application/sub-skills/data-preparation/`, `tensorflow-template-application/sub-skills/serving-and-clients/`, `tensorflow-template-application/sub-skills/training-and-export/`, `tensorflow-template-application/references/installation.md`, `tensorflow-template-application/references/repo-provenance.md`.

### `tensorlayer`

Role: Routes TensorLayer model-building, data utilities, vision, text, reinforcement learning, and training workflows.
Read when: The request names `tensorlayer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core modeling, data and utilities, reinforcement learning, text and sequence, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorlayer/SKILL.md`, `tensorlayer/sub-skills/core-modeling/`, `tensorlayer/sub-skills/data-and-utilities/`, `tensorlayer/sub-skills/reinforcement-learning/`, `tensorlayer/sub-skills/text-and-sequence/`, `tensorlayer/sub-skills/training-and-cli/`, `tensorlayer/references/api-overview.md`.

### `tflearn`

Role: Use and troubleshoot TFLearn, a TensorFlow-v1-style high-level deep learning API for layers, data feeds, DNN training, checkpoints, and model recipes.
Read when: The request names `tflearn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced model recipes, data input pipelines, layers and ops, and training and persistence.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tflearn/SKILL.md`, `tflearn/sub-skills/advanced-model-recipes/`, `tflearn/sub-skills/data-input-pipelines/`, `tflearn/sub-skills/layers-and-ops/`, `tflearn/sub-skills/training-and-persistence/`, `tflearn/references/compatibility.md`.

### `towhee`

Role: Route Towhee pipeline, operator, data utility, service, Triton, training, and model-zoo tasks to self-contained workflow guidance.
Read when: The request names `towhee` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data utilities, operator hub and cli, pipeline programming, serving and triton, and training and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `towhee/SKILL.md`, `towhee/sub-skills/data-utilities/`, `towhee/sub-skills/operator-hub-and-cli/`, `towhee/sub-skills/pipeline-programming/`, `towhee/sub-skills/serving-and-triton/`, `towhee/sub-skills/training-and-models/`, `towhee/references/installation-and-compatibility.md`.

### `transfer-learning-library`

Role: Use Transfer Learning Library (TLLib) for PyTorch transfer learning, domain adaptation, domain generalization, task adaptation, self-training, model selection, and vision data/model workflows.
Read when: The request names `transfer-learning-library` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: domain adaptation, model selection, self training, task generalization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transfer-learning-library/SKILL.md`, `transfer-learning-library/sub-skills/domain-adaptation/`, `transfer-learning-library/sub-skills/model-selection/`, `transfer-learning-library/sub-skills/self-training/`, `transfer-learning-library/sub-skills/task-generalization/`, `transfer-learning-library/sub-skills/translation/`, `transfer-learning-library/references/capability-map.md`.

<!-- DISCO_SCENARIO:training-infrastructure-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
