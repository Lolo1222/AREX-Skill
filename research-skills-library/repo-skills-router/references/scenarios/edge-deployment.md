# Edge Deployment

## When To Read

Requests in the Edge Deployment family of the Model Deployment and Optimization area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on edge deployment.

## Repo Skill Options

<!-- DISCO_SCENARIO:edge-deployment:START -->
### `coremltools`

Role: Operate Core ML Tools workflows for model conversion, Core ML artifact I/O, optimization, MIL debugging, and platform-aware troubleshooting.
Read when: The request names `coremltools` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: convert models, mil and debugging, model io and prediction, and optimize models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `coremltools/SKILL.md`, `coremltools/sub-skills/convert-models/`, `coremltools/sub-skills/mil-and-debugging/`, `coremltools/sub-skills/model-io-and-prediction/`, `coremltools/sub-skills/optimize-models/`, `coremltools/references/capability-map.md`.

### `deep-filter-net`

Role: Route DeepFilterNet speech enhancement, Python API/CLI, training data, model export/evaluation, and Rust/LADSPA realtime workflows.
Read when: The request names `deep-filter-net` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model export evaluation, python enhancement, rust realtime deployment, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-filter-net/SKILL.md`, `deep-filter-net/sub-skills/model-export-evaluation/`, `deep-filter-net/sub-skills/python-enhancement/`, `deep-filter-net/sub-skills/rust-realtime-deployment/`, `deep-filter-net/sub-skills/training-data/`, `deep-filter-net/references/installation-and-package-map.md`.

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

### `lanenet-lane-detection`

Role: Route LaneNet lane-detection tasks across data preparation, training, inference, and export workflows.
Read when: The request names `lanenet-lane-detection` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference evaluation, model export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lanenet-lane-detection/SKILL.md`, `lanenet-lane-detection/sub-skills/data-preparation/`, `lanenet-lane-detection/sub-skills/inference-evaluation/`, `lanenet-lane-detection/sub-skills/model-export/`, `lanenet-lane-detection/sub-skills/training/`, `lanenet-lane-detection/references/configuration.md`.

### `mmdeploy`

Role: Route MMDeploy model deployment, backend setup, SDK runtime, extensibility, and validation workflows for OpenMMLab/PyTorch models.
Read when: The request names `mmdeploy` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends, conversion, extensibility, sdk, and validation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmdeploy/SKILL.md`, `mmdeploy/sub-skills/backends/`, `mmdeploy/sub-skills/conversion/`, `mmdeploy/sub-skills/extensibility/`, `mmdeploy/sub-skills/sdk/`, `mmdeploy/sub-skills/validation/`, `mmdeploy/references/repo-provenance.md`.

### `onnxsim`

Role: Repo skill for ONNX Simplifier: ONNX model simplification, graph rewriting, metrics, profiling, packaging, and bindings.
Read when: The request names `onnxsim` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced graph control, bindings and packaging, and python simplification.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onnxsim/SKILL.md`, `onnxsim/sub-skills/advanced-graph-control/`, `onnxsim/sub-skills/bindings-and-packaging/`, `onnxsim/sub-skills/python-simplification/`, `onnxsim/references/package-overview.md`, `onnxsim/references/repo-provenance.md`.

### `openmed`

Role: Route OpenMed local-first clinical NLP, PHI de-identification, healthcare interoperability, model runtime, multimodal intake, and privacy-risk workflows.
Read when: The request names `openmed` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clinical extraction grounding, deidentification privacy, interoperability serving, model runtimes mobile, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openmed/SKILL.md`, `openmed/sub-skills/clinical-extraction-grounding/`, `openmed/sub-skills/deidentification-privacy/`, `openmed/sub-skills/interoperability-serving/`, `openmed/sub-skills/model-runtimes-mobile/`, `openmed/sub-skills/multimodal-document-intake/`, `openmed/references/install-and-configuration.md`.

### `pocket-flow`

Role: Use PocketFlow for TensorFlow 1.x model compression, learner selection, custom model/data integration, execution setup, and deployment conversion workflows.
Read when: The request names `pocket-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: compression learners, custom models data, deployment conversion, and execution config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pocket-flow/SKILL.md`, `pocket-flow/sub-skills/compression-learners/`, `pocket-flow/sub-skills/custom-models-data/`, `pocket-flow/sub-skills/deployment-conversion/`, `pocket-flow/sub-skills/execution-config/`, `pocket-flow/references/overview.md`.

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

### `tvm`

Role: Guides Apache TVM install/build, Relax compilation, TIRx kernel authoring, S-TIR tuning, and RPC deployment workflows.
Read when: The request names `tvm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install build, relax compile, rpc deployment, s tir tuning, and tirx kernels.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tvm/SKILL.md`, `tvm/sub-skills/install-build/`, `tvm/sub-skills/relax-compile/`, `tvm/sub-skills/rpc-deployment/`, `tvm/sub-skills/s-tir-tuning/`, `tvm/sub-skills/tirx-kernels/`, `tvm/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:edge-deployment:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
