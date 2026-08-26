# Model Compilation

## When To Read

Requests in the Model Compilation family of the Model Deployment and Optimization area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on model compilation.

## Repo Skill Options

<!-- DISCO_SCENARIO:model-compilation:START -->
### `chainer`

Role: Routes Chainer workflows for training, export, distributed learning, ChainerX, and checkout maintenance.
Read when: The request names `chainer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chainerx, distributed, export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chainer/SKILL.md`, `chainer/sub-skills/chainerx/`, `chainer/sub-skills/distributed/`, `chainer/sub-skills/export/`, `chainer/sub-skills/training/`, `chainer/references/api-overview.md`.

### `comfyui-to-python-extension`

Role: Route ComfyUI Save As Script and workflow export tasks into the CLI and Web UI sub-skills.
Read when: The request names `comfyui-to-python-extension` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli export and web ui extension.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `comfyui-to-python-extension/SKILL.md`, `comfyui-to-python-extension/sub-skills/cli-export/`, `comfyui-to-python-extension/sub-skills/web-ui-extension/`, `comfyui-to-python-extension/references/api-reference.md`, `comfyui-to-python-extension/references/configuration.md`, `comfyui-to-python-extension/references/install-and-setup.md`.

### `composer`

Role: Use MosaicML Composer for PyTorch training loops, speedup methods, loggers, checkpoints, distributed launch, profiling, and model export.
Read when: The request names `composer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed, inference export, methods, observability, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `composer/SKILL.md`, `composer/sub-skills/distributed/`, `composer/sub-skills/inference-export/`, `composer/sub-skills/methods/`, `composer/sub-skills/observability/`, `composer/sub-skills/training/`, `composer/references/installation-and-package-map.md`.

### `coremltools`

Role: Operate Core ML Tools workflows for model conversion, Core ML artifact I/O, optimization, MIL debugging, and platform-aware troubleshooting.
Read when: The request names `coremltools` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: convert models, mil and debugging, model io and prediction, and optimize models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `coremltools/SKILL.md`, `coremltools/sub-skills/convert-models/`, `coremltools/sub-skills/mil-and-debugging/`, `coremltools/sub-skills/model-io-and-prediction/`, `coremltools/sub-skills/optimize-models/`, `coremltools/references/capability-map.md`.

### `damo-yolo`

Role: Training, inference, and deployment workflows for DAMO-YOLO object detection.
Read when: The request names `damo-yolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `damo-yolo/SKILL.md`, `damo-yolo/sub-skills/deployment/`, `damo-yolo/sub-skills/inference/`, `damo-yolo/sub-skills/training/`, `damo-yolo/references/api-reference.md`, `damo-yolo/references/model-overview.md`.

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

### `hummingbird`

Role: Use Hummingbird to convert trained traditional ML models into tensor backends, validate parity, choose backends, and troubleshoot optional dependencies.
Read when: The request names `hummingbird` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced backends and performance, core conversion, onnx and model io, optional source models, and sklearn pipelines and operators.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hummingbird/SKILL.md`, `hummingbird/sub-skills/advanced-backends-and-performance/`, `hummingbird/sub-skills/core-conversion/`, `hummingbird/sub-skills/onnx-and-model-io/`, `hummingbird/sub-skills/optional-source-models/`, `hummingbird/sub-skills/sklearn-pipelines-and-operators/`, `hummingbird/references/api-overview.md`.

### `m2cgen`

Role: Use m2cgen to transpile fitted Python machine-learning models into standalone C, C#, Dart, Elixir, F#, Go, Haskell, Java, JavaScript, PHP, PowerShell, Python, R, Ruby, Rust, or Visual Basic code through its API or CLI.
Read when: The request names `m2cgen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `m2cgen/SKILL.md`, `m2cgen/sub-skills/model-export/`, `m2cgen/references/repo-provenance.md`, `m2cgen/references/troubleshooting.md`.

### `mmdeploy`

Role: Route MMDeploy model deployment, backend setup, SDK runtime, extensibility, and validation workflows for OpenMMLab/PyTorch models.
Read when: The request names `mmdeploy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends, conversion, extensibility, sdk, and validation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmdeploy/SKILL.md`, `mmdeploy/sub-skills/backends/`, `mmdeploy/sub-skills/conversion/`, `mmdeploy/sub-skills/extensibility/`, `mmdeploy/sub-skills/sdk/`, `mmdeploy/sub-skills/validation/`, `mmdeploy/references/repo-provenance.md`.

### `mmyolo`

Role: Use MMYOLO for OpenMMLab YOLO object detection configs, datasets, training/testing, inference, model APIs, and deployment conversion.
Read when: The request names `mmyolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config customization, data tools, deployment conversion, inference visualization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmyolo/SKILL.md`, `mmyolo/sub-skills/config-customization/`, `mmyolo/sub-skills/data-tools/`, `mmyolo/sub-skills/deployment-conversion/`, `mmyolo/sub-skills/inference-visualization/`, `mmyolo/sub-skills/model-api/`, `mmyolo/references/installation.md`.

### `onnx`

Role: Routes ONNX model-format, Python API, validation, reference-evaluator, backend-test, and operator-spec maintenance workflows.
Read when: The request names `onnx` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model authoring, operator spec maintenance, reference and backend tests, and validation and conversion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onnx/SKILL.md`, `onnx/sub-skills/model-authoring/`, `onnx/sub-skills/operator-spec-maintenance/`, `onnx/sub-skills/reference-and-backend-tests/`, `onnx/sub-skills/validation-and-conversion/`, `onnx/references/build-test-troubleshooting.md`.

### `onnxsim`

Role: Repo skill for ONNX Simplifier: ONNX model simplification, graph rewriting, metrics, profiling, packaging, and bindings.
Read when: The request names `onnxsim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced graph control, bindings and packaging, and python simplification.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onnxsim/SKILL.md`, `onnxsim/sub-skills/advanced-graph-control/`, `onnxsim/sub-skills/bindings-and-packaging/`, `onnxsim/sub-skills/python-simplification/`, `onnxsim/references/package-overview.md`, `onnxsim/references/repo-provenance.md`.

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

### `paddleocr`

Role: Routes PaddleOCR users to local OCR, structured document parsing, hosted API, and training/deployment workflows.
Read when: The request names `paddleocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud api and integrations, document parsing and conversion, local ocr pipelines, and training export and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddleocr/SKILL.md`, `paddleocr/sub-skills/cloud-api-and-integrations/`, `paddleocr/sub-skills/document-parsing-and-conversion/`, `paddleocr/sub-skills/local-ocr-pipelines/`, `paddleocr/sub-skills/training-export-and-deployment/`, `paddleocr/references/installation-and-backends.md`.

### `pinto-model-zoo`

Role: Use PINTO_model_zoo for model catalog search, artifact acquisition, conversion planning, inference demo preparation, and edge/backend troubleshooting.
Read when: The request names `pinto-model-zoo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion and deployment, inference demos, model acquisition, and model catalog.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pinto-model-zoo/SKILL.md`, `pinto-model-zoo/sub-skills/conversion-and-deployment/`, `pinto-model-zoo/sub-skills/inference-demos/`, `pinto-model-zoo/sub-skills/model-acquisition/`, `pinto-model-zoo/sub-skills/model-catalog/`, `pinto-model-zoo/references/model-catalog.json`.

### `spikingjelly`

Role: Operate the SpikingJelly package for SNN modeling, datasets, ANN-to-SNN conversion, backend performance, training scale-out, and deployment exchange.
Read when: The request names `spikingjelly` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ann2snn, core snn, datasets, deployment exchange, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `spikingjelly/SKILL.md`, `spikingjelly/sub-skills/ann2snn/`, `spikingjelly/sub-skills/core-snn/`, `spikingjelly/sub-skills/datasets/`, `spikingjelly/sub-skills/deployment-exchange/`, `spikingjelly/sub-skills/performance-and-analysis/`, `spikingjelly/references/package-overview.md`.

### `torch-tensorrt`

Role: Use the `torch-tensorrt` skill for Torch-TensorRT tasks: compiling PyTorch models with TensorRT, dynamic-shape/export workflows, runtime optimization, Triton/C++/distributed deployment, debugging unsupported ops, and maintaining source builds.
Read when: The request names `torch-tensorrt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: build and maintenance, compilation and export, deployment and distributed, extensibility and debugging, and runtime optimization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torch-tensorrt/SKILL.md`, `torch-tensorrt/sub-skills/build-and-maintenance/`, `torch-tensorrt/sub-skills/compilation-and-export/`, `torch-tensorrt/sub-skills/deployment-and-distributed/`, `torch-tensorrt/sub-skills/extensibility-and-debugging/`, `torch-tensorrt/sub-skills/runtime-optimization/`, `torch-tensorrt/references/api-surface-map.md`.

### `tvm`

Role: Guides Apache TVM install/build, Relax compilation, TIRx kernel authoring, S-TIR tuning, and RPC deployment workflows.
Read when: The request names `tvm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install build, relax compile, rpc deployment, s tir tuning, and tirx kernels.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tvm/SKILL.md`, `tvm/sub-skills/install-build/`, `tvm/sub-skills/relax-compile/`, `tvm/sub-skills/rpc-deployment/`, `tvm/sub-skills/s-tir-tuning/`, `tvm/sub-skills/tirx-kernels/`, `tvm/references/repo-provenance.md`.

### `wenet`

Role: Use WeNet for ASR package transcription, data preparation, training and decoding recipes, model export, and production runtime deployment.
Read when: The request names `wenet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model export, package transcription, runtime deployment, and training and decoding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `wenet/SKILL.md`, `wenet/sub-skills/data-preparation/`, `wenet/sub-skills/model-export/`, `wenet/sub-skills/package-transcription/`, `wenet/sub-skills/runtime-deployment/`, `wenet/sub-skills/training-and-decoding/`, `wenet/references/repo-provenance.md`.

### `yolov3`

Role: Operate Ultralytics YOLOv3 detection workflows: inference, training, validation, architecture, export, and maintenance.
Read when: The request names `yolov3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export deployment, inference, model architecture, repo maintenance, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolov3/SKILL.md`, `yolov3/sub-skills/export-deployment/`, `yolov3/sub-skills/inference/`, `yolov3/sub-skills/model-architecture/`, `yolov3/sub-skills/repo-maintenance/`, `yolov3/sub-skills/training/`, `yolov3/references/package-and-environment.md`.

### `yolov7-d2`

Role: Operate YOLOv7-d2, a Detectron2-based repository for YOLO-family, SparseInst, DETR-family training, inference, evaluation, and ONNX deployment workflows.
Read when: The request names `yolov7-d2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and export, inference and evaluation, and training and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolov7-d2/SKILL.md`, `yolov7-d2/sub-skills/deployment-and-export/`, `yolov7-d2/sub-skills/inference-and-evaluation/`, `yolov7-d2/sub-skills/training-and-configuration/`, `yolov7-d2/references/installation-and-environment.md`, `yolov7-d2/references/model-family-overview.md`.

<!-- DISCO_SCENARIO:model-compilation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
