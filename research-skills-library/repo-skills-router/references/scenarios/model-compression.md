# Model Compression

## When To Read

Requests in the Model Compression family of the Model Deployment and Optimization area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on model compression.

## Repo Skill Options

<!-- DISCO_SCENARIO:model-compression:START -->
### `aimet`

Role: Route AIMET install, PyTorch/ONNX quantization, GenAILab, model access, cluster/Pod, Qualcomm SDK, optimization, export, and repository tasks to focused operating guidance.
Read when: The request names `aimet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cluster pod workflows, genai lab, install and build, model access and credentialed evaluation, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aimet/SKILL.md`, `aimet/sub-skills/cluster-pod-workflows/`, `aimet/sub-skills/genai-lab/`, `aimet/sub-skills/install-and-build/`, `aimet/sub-skills/model-access-and-credentialed-evaluation/`, `aimet/sub-skills/onnx-quantization/`, `aimet/references/api-overview.md`.

### `autodistill`

Role: Guides core Autodistill workflows for foundation-model auto-labeling, target-model distillation, CLI/plugin registry use, custom model interfaces, and utilities.
Read when: The request names `autodistill` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and model registry, dataset labeling, ontologies and model interfaces, and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autodistill/SKILL.md`, `autodistill/sub-skills/cli-and-model-registry/`, `autodistill/sub-skills/dataset-labeling/`, `autodistill/sub-skills/ontologies-and-model-interfaces/`, `autodistill/sub-skills/utilities/`, `autodistill/references/package-overview.md`.

### `coremltools`

Role: Operate Core ML Tools workflows for model conversion, Core ML artifact I/O, optimization, MIL debugging, and platform-aware troubleshooting.
Read when: The request names `coremltools` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: convert models, mil and debugging, model io and prediction, and optimize models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `coremltools/SKILL.md`, `coremltools/sub-skills/convert-models/`, `coremltools/sub-skills/mil-and-debugging/`, `coremltools/sub-skills/model-io-and-prediction/`, `coremltools/sub-skills/optimize-models/`, `coremltools/references/capability-map.md`.

### `cream`

Role: Routes DisCo Researcher to Cream-family vision NAS, compression, distillation, and relative-position-encoding workflows across the AutoFormer, AutoFormerV2, Cream, CDARTS, EfficientViT, MiniViT, TinyCLIP, TinyViT, and iRPE project families.
Read when: The request names `cream` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: efficientvit, irpe, minivit, nas search, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cream/SKILL.md`, `cream/sub-skills/efficientvit/`, `cream/sub-skills/irpe/`, `cream/sub-skills/minivit/`, `cream/sub-skills/nas-search/`, `cream/sub-skills/tinyclip/`, `cream/references/compatibility.md`.

### `damo-yolo`

Role: Training, inference, and deployment workflows for DAMO-YOLO object detection.
Read when: The request names `damo-yolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `damo-yolo/SKILL.md`, `damo-yolo/sub-skills/deployment/`, `damo-yolo/sub-skills/inference/`, `damo-yolo/sub-skills/training/`, `damo-yolo/references/api-reference.md`, `damo-yolo/references/model-overview.md`.

### `distil-whisper`

Role: Routes Distil-Whisper inference, PyTorch distillation training, and Flax reproduction workflows.
Read when: The request names `distil-whisper` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: flax reproduction, inference, and pytorch training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `distil-whisper/SKILL.md`, `distil-whisper/sub-skills/flax-reproduction/`, `distil-whisper/sub-skills/inference/`, `distil-whisper/sub-skills/pytorch-training/`, `distil-whisper/references/model-overview.md`, `distil-whisper/references/repo-provenance.md`.

### `executorch`

Role: Use ExecuTorch to export PyTorch models to edge runtime artifacts, build host/device runtimes, choose delegates, profile/debug execution, and operate specialized Qualcomm, Cortex-M, LLM, and binary-size workflows.
Read when: The request names `executorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend selection, binary size, cortex m, export runtime, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `executorch/SKILL.md`, `executorch/sub-skills/backend-selection/`, `executorch/sub-skills/binary-size/`, `executorch/sub-skills/cortex-m/`, `executorch/sub-skills/export-runtime/`, `executorch/sub-skills/llm-workflows/`, `executorch/references/package-overview.md`.

### `hls4ml`

Role: Convert, tune, and deploy hls4ml FPGA inference projects from Keras, PyTorch, and ONNX inputs.
Read when: The request names `hls4ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis, backends, extensions, and frontends.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hls4ml/SKILL.md`, `hls4ml/sub-skills/analysis/`, `hls4ml/sub-skills/backends/`, `hls4ml/sub-skills/extensions/`, `hls4ml/sub-skills/frontends/`, `hls4ml/references/install-and-environment.md`.

### `lightllm`

Role: Route LightLLM serving, deployment, and validation workflows into bundled references and sub-skills.
Read when: The request names `lightllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark validation, deployment topologies, model runtime, and serving api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightllm/SKILL.md`, `lightllm/sub-skills/benchmark-validation/`, `lightllm/sub-skills/deployment-topologies/`, `lightllm/sub-skills/model-runtime/`, `lightllm/sub-skills/serving-api/`, `lightllm/references/api-reference.md`.

### `mixtral-offloading`

Role: Use dvmazur/mixtral-offloading for source-only CUDA/HQQ/Triton Mixtral-8x7B expert offloading workflows.
Read when: The request names `mixtral-offloading` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: expert cache, inference workflow, and quantization kernels.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mixtral-offloading/SKILL.md`, `mixtral-offloading/sub-skills/expert-cache/`, `mixtral-offloading/sub-skills/inference-workflow/`, `mixtral-offloading/sub-skills/quantization-kernels/`, `mixtral-offloading/references/api-reference.md`, `mixtral-offloading/references/demo-workflow.md`.

### `mmdeploy`

Role: Route MMDeploy model deployment, backend setup, SDK runtime, extensibility, and validation workflows for OpenMMLab/PyTorch models.
Read when: The request names `mmdeploy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends, conversion, extensibility, sdk, and validation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmdeploy/SKILL.md`, `mmdeploy/sub-skills/backends/`, `mmdeploy/sub-skills/conversion/`, `mmdeploy/sub-skills/extensibility/`, `mmdeploy/sub-skills/sdk/`, `mmdeploy/sub-skills/validation/`, `mmdeploy/references/repo-provenance.md`.

### `nunchaku`

Role: Route and operate the Nunchaku repo skill for CUDA-accelerated 4-bit Diffusers image-generation workflows, quantized transformers, LoRA/adapters, and performance controls.
Read when: The request names `nunchaku` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: flux pipelines, lora and adapters, performance and memory, qwen image workflows, and sana zimage sdxl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nunchaku/SKILL.md`, `nunchaku/sub-skills/flux-pipelines/`, `nunchaku/sub-skills/lora-and-adapters/`, `nunchaku/sub-skills/performance-and-memory/`, `nunchaku/sub-skills/qwen-image-workflows/`, `nunchaku/sub-skills/sana-zimage-sdxl/`, `nunchaku/references/api-and-entrypoints.md`.

### `once-for-all`

Role: Routes Once-for-All/OFA pretrained model loading, subnet evaluation, and predictor-driven architecture-search workflows.
Read when: The request names `once-for-all` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and search.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `once-for-all/SKILL.md`, `once-for-all/sub-skills/inference/`, `once-for-all/sub-skills/search/`, `once-for-all/references/dependencies.md`, `once-for-all/references/repo-provenance.md`, `once-for-all/references/troubleshooting.md`.

### `optimate`

Role: Routes OptiMate workflows for Speedster inference optimization, NebullVM backend selection, Forward-Forward training, OpenAlphaTensor training, and ChatLLaMA RLHF setup.
Read when: The request names `optimate` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chatllama rlhf, forward forward training, nebullvm backends, open alpha tensor, and speedster optimization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `optimate/SKILL.md`, `optimate/sub-skills/chatllama-rlhf/`, `optimate/sub-skills/forward-forward-training/`, `optimate/sub-skills/nebullvm-backends/`, `optimate/sub-skills/open-alpha-tensor/`, `optimate/sub-skills/speedster-optimization/`, `optimate/references/installation-and-backends.md`.

### `optimum`

Role: Use Hugging Face Optimum for model export routing, accelerated pipeline dispatch, Torch FX graph workflows, GPTQ quantization planning, and utility/config support.
Read when: The request names `optimum` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: exporters and cli, fx graph workflows, gptq quantization, and utilities and configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `optimum/SKILL.md`, `optimum/sub-skills/exporters-and-cli/`, `optimum/sub-skills/fx-graph-workflows/`, `optimum/sub-skills/gptq-quantization/`, `optimum/sub-skills/utilities-and-configs/`, `optimum/references/repo-provenance.md`.

### `pinto-model-zoo`

Role: Use PINTO_model_zoo for model catalog search, artifact acquisition, conversion planning, inference demo preparation, and edge/backend troubleshooting.
Read when: The request names `pinto-model-zoo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion and deployment, inference demos, model acquisition, and model catalog.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pinto-model-zoo/SKILL.md`, `pinto-model-zoo/sub-skills/conversion-and-deployment/`, `pinto-model-zoo/sub-skills/inference-demos/`, `pinto-model-zoo/sub-skills/model-acquisition/`, `pinto-model-zoo/sub-skills/model-catalog/`, `pinto-model-zoo/references/model-catalog.json`.

### `pocket-flow`

Role: Use PocketFlow for TensorFlow 1.x model compression, learner selection, custom model/data integration, execution setup, and deployment conversion workflows.
Read when: The request names `pocket-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: compression learners, custom models data, deployment conversion, and execution config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pocket-flow/SKILL.md`, `pocket-flow/sub-skills/compression-learners/`, `pocket-flow/sub-skills/custom-models-data/`, `pocket-flow/sub-skills/deployment-conversion/`, `pocket-flow/sub-skills/execution-config/`, `pocket-flow/references/overview.md`.

### `qwen`

Role: Use QwenLM/Qwen for Qwen model loading, local generation, serving, fine-tuning, quantization, evaluation, system prompts, tool use, and tokenizer-aware workflows.
Read when: The request names `qwen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation reproduction, finetuning quantization, inference model loading, prompting tool use tokenization, and serving deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `qwen/SKILL.md`, `qwen/sub-skills/evaluation-reproduction/`, `qwen/sub-skills/finetuning-quantization/`, `qwen/sub-skills/inference-model-loading/`, `qwen/sub-skills/prompting-tool-use-tokenization/`, `qwen/sub-skills/serving-deployment/`, `qwen/references/model-family-overview.md`.

### `tensorflow-yolov4-tflite`

Role: Guides TensorFlow YOLOv3/YOLOv4 conversion, inference, training data, evaluation, TensorRT, and Android TFLite workflows for hunglc007/tensorflow-yolov4-tflite.
Read when: The request names `tensorflow-yolov4-tflite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: android deployment, inference evaluation, model conversion, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-yolov4-tflite/SKILL.md`, `tensorflow-yolov4-tflite/sub-skills/android-deployment/`, `tensorflow-yolov4-tflite/sub-skills/inference-evaluation/`, `tensorflow-yolov4-tflite/sub-skills/model-conversion/`, `tensorflow-yolov4-tflite/sub-skills/training-data/`, `tensorflow-yolov4-tflite/references/compatibility.md`.

### `torch-tensorrt`

Role: Use the `torch-tensorrt` skill for Torch-TensorRT tasks: compiling PyTorch models with TensorRT, dynamic-shape/export workflows, runtime optimization, Triton/C++/distributed deployment, debugging unsupported ops, and maintaining source builds.
Read when: The request names `torch-tensorrt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: build and maintenance, compilation and export, deployment and distributed, extensibility and debugging, and runtime optimization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torch-tensorrt/SKILL.md`, `torch-tensorrt/sub-skills/build-and-maintenance/`, `torch-tensorrt/sub-skills/compilation-and-export/`, `torch-tensorrt/sub-skills/deployment-and-distributed/`, `torch-tensorrt/sub-skills/extensibility-and-debugging/`, `torch-tensorrt/sub-skills/runtime-optimization/`, `torch-tensorrt/references/api-surface-map.md`.

### `transformer-engine`

Role: Route Transformer Engine installation/build, PyTorch, JAX, and shared precision/compatibility workflows.
Read when: The request names `transformer-engine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install build, jax, and pytorch.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `transformer-engine/SKILL.md`, `transformer-engine/sub-skills/install-build/`, `transformer-engine/sub-skills/jax/`, `transformer-engine/sub-skills/pytorch/`, `transformer-engine/references/precision-recipes.md`, `transformer-engine/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:model-compression:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
