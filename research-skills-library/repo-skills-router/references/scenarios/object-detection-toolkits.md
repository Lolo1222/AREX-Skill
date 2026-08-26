# Object Detection Toolkits

## When To Read

Requests in the Object Detection Toolkits family of the Computer Vision area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on object detection toolkits.

## Repo Skill Options

<!-- DISCO_SCENARIO:object-detection-toolkits:START -->
### `adelai-det`

Role: Routes AdelaiDet users through legacy-compatible setup, model config selection, training/evaluation, demos, text spotting, dataset preparation, and export/conversion workflows.
Read when: The request names `adelai-det` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data prep, demo visualize, export convert, setup build, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `adelai-det/SKILL.md`, `adelai-det/sub-skills/data-prep/`, `adelai-det/sub-skills/demo-visualize/`, `adelai-det/sub-skills/export-convert/`, `adelai-det/sub-skills/setup-build/`, `adelai-det/sub-skills/text-spotting/`, `adelai-det/references/api-reference.md`.

### `cvnets`

Role: Router for CVNets training, evaluation, registry, data, and export workflows.
Read when: The request names `cvnets` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion and profiling, data and config, models and architectures, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cvnets/SKILL.md`, `cvnets/sub-skills/conversion-and-profiling/`, `cvnets/sub-skills/data-and-config/`, `cvnets/sub-skills/models-and-architectures/`, `cvnets/sub-skills/training-and-evaluation/`, `cvnets/references/api-reference.md`.

### `deepstream-yolo`

Role: Routes DeepStream-Yolo deployment, model conversion, multi-GIE, and INT8 workflows for supported YOLO-family models.
Read when: The request names `deepstream-yolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, int8 benchmarking, model conversion, and multi gie.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepstream-yolo/SKILL.md`, `deepstream-yolo/sub-skills/deployment/`, `deepstream-yolo/sub-skills/int8-benchmarking/`, `deepstream-yolo/sub-skills/model-conversion/`, `deepstream-yolo/sub-skills/multi-gie/`, `deepstream-yolo/references/installation.md`.

### `det3d`

Role: Guide Det3D PyTorch 3D object-detection workflows across configuration, KITTI/nuScenes/Lyft data preparation, GPU training and evaluation, custom CUDA operations, and visualization.
Read when: The request names `det3d` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and models, datasets and preprocessing, runtime ops, training and evaluation, and visualization and analysis.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `det3d/SKILL.md`, `det3d/sub-skills/configuration-and-models/`, `det3d/sub-skills/datasets-and-preprocessing/`, `det3d/sub-skills/runtime-ops/`, `det3d/sub-skills/training-and-evaluation/`, `det3d/sub-skills/visualization-and-analysis/`, `det3d/references/compatibility.md`.

### `detrex`

Role: Use detrex for detection-transformer configs, training/evaluation, demos, model zoo conversion, and package API debugging.
Read when: The request names `detrex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model zoo and converters, package apis, tools and demos, and training and configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `detrex/SKILL.md`, `detrex/sub-skills/model-zoo-and-converters/`, `detrex/sub-skills/package-apis/`, `detrex/sub-skills/tools-and-demos/`, `detrex/sub-skills/training-and-configs/`, `detrex/references/environment-and-installation.md`.

### `easycv`

Role: Routes EasyCV training, evaluation, prediction, export, and data workflows.
Read when: The request names `easycv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, export and optimization, prediction and inference, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `easycv/SKILL.md`, `easycv/sub-skills/data-preparation/`, `easycv/sub-skills/export-and-optimization/`, `easycv/sub-skills/prediction-and-inference/`, `easycv/sub-skills/training-and-evaluation/`, `easycv/references/cli-reference.md`.

### `fcos`

Role: Routes FCOS object-detection repo tasks for inference demos, config/data setup, training/evaluation, ONNX export, and legacy PyTorch internals.
Read when: The request names `fcos` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data configs, inference demo, internals maintenance, onnx export, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fcos/SKILL.md`, `fcos/sub-skills/data-configs/`, `fcos/sub-skills/inference-demo/`, `fcos/sub-skills/internals-maintenance/`, `fcos/sub-skills/onnx-export/`, `fcos/sub-skills/training-evaluation/`, `fcos/references/repo-provenance.md`.

### `gluon-cv`

Role: Use GluonCV for computer-vision model-zoo, dataset, transform, training-script, AutoML, and deployment workflows across MXNet and PyTorch backends.
Read when: The request names `gluon-cv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automl deployment export, data transforms datasets, mxnet model zoo, torch video workflows, and training evaluation scripts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gluon-cv/SKILL.md`, `gluon-cv/sub-skills/automl-deployment-export/`, `gluon-cv/sub-skills/data-transforms-datasets/`, `gluon-cv/sub-skills/mxnet-model-zoo/`, `gluon-cv/sub-skills/torch-video-workflows/`, `gluon-cv/sub-skills/training-evaluation-scripts/`, `gluon-cv/references/install-and-backends.md`.

### `image-ai`

Role: Use ImageAI 3.x PyTorch computer-vision workflows for classification, object detection, video detection, and custom training.
Read when: The request names `image-ai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification workflows, custom training and data, object detection workflows, and video detection workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `image-ai/SKILL.md`, `image-ai/sub-skills/classification-workflows/`, `image-ai/sub-skills/custom-training-and-data/`, `image-ai/sub-skills/object-detection-workflows/`, `image-ai/sub-skills/video-detection-workflows/`, `image-ai/references/installation-and-model-assets.md`.

### `intern-image`

Role: Guides InternImage vision foundation-model workflows across image classification, object detection, semantic segmentation, autonomous driving, DCNv3 operators, and TensorRT deployment.
Read when: The request names `intern-image` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: autonomous driving, classification, deployment, detection, and segmentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `intern-image/SKILL.md`, `intern-image/sub-skills/autonomous-driving/`, `intern-image/sub-skills/classification/`, `intern-image/sub-skills/deployment/`, `intern-image/sub-skills/detection/`, `intern-image/sub-skills/segmentation/`, `intern-image/references/model-and-config-overview.md`.

### `luminoth`

Role: Routes Luminoth object-detection dataset, training, prediction, and checkpoint workflows.
Read when: The request names `luminoth` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpoints, dataset preparation, prediction, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `luminoth/SKILL.md`, `luminoth/sub-skills/checkpoints/`, `luminoth/sub-skills/dataset-preparation/`, `luminoth/sub-skills/prediction/`, `luminoth/sub-skills/training/`, `luminoth/references/installation.md`.

### `medical-detection-toolkit`

Role: Route MedicalDetectionToolkit research tasks across experiment configuration, medical-image data preparation, detector architecture, prediction/evaluation, and legacy CUDA compatibility while preserving the repository's unmaintained and version-sensitive boundaries.
Read when: The request names `medical-detection-toolkit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and experiments, cuda extensions, data and preprocessing, inference and evaluation, and models and architectures.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-detection-toolkit/SKILL.md`, `medical-detection-toolkit/sub-skills/configuration-and-experiments/`, `medical-detection-toolkit/sub-skills/cuda-extensions/`, `medical-detection-toolkit/sub-skills/data-and-preprocessing/`, `medical-detection-toolkit/sub-skills/inference-and-evaluation/`, `medical-detection-toolkit/sub-skills/models-and-architectures/`, `medical-detection-toolkit/references/repo-provenance.md`.

### `mmdetection3d`

Role: Use MMDetection3D for 3D detection, segmentation, dataset preparation, configs, training, evaluation, visualization, customization, and serving workflows.
Read when: The request names `mmdetection3d` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration model zoo, customization extensions, data preparation, inference, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmdetection3d/SKILL.md`, `mmdetection3d/sub-skills/configuration-model-zoo/`, `mmdetection3d/sub-skills/customization-extensions/`, `mmdetection3d/sub-skills/data-preparation/`, `mmdetection3d/sub-skills/inference/`, `mmdetection3d/sub-skills/serving-tools/`, `mmdetection3d/references/backend-compatibility.md`.

### `mmyolo`

Role: Use MMYOLO for OpenMMLab YOLO object detection configs, datasets, training/testing, inference, model APIs, and deployment conversion.
Read when: The request names `mmyolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: config customization, data tools, deployment conversion, inference visualization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmyolo/SKILL.md`, `mmyolo/sub-skills/config-customization/`, `mmyolo/sub-skills/data-tools/`, `mmyolo/sub-skills/deployment-conversion/`, `mmyolo/sub-skills/inference-visualization/`, `mmyolo/sub-skills/model-api/`, `mmyolo/references/installation.md`.

### `nanodet`

Role: Routes NanoDet users to dataset/config, training/evaluation, and inference/export workflows for the NanoDet object-detection repository.
Read when: The request names `nanodet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset config, inference export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nanodet/SKILL.md`, `nanodet/sub-skills/dataset-config/`, `nanodet/sub-skills/inference-export/`, `nanodet/sub-skills/training/`, `nanodet/references/api-reference.md`, `nanodet/references/model-overview.md`.

### `openpcdet`

Role: Operate OpenPCDet 3D object detection workflows across runtime setup, dataset preparation, training/evaluation, inference/custom data, and model/config extension.
Read when: The request names `openpcdet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference and custom data, models and configs, runtime and ops, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openpcdet/SKILL.md`, `openpcdet/sub-skills/data-preparation/`, `openpcdet/sub-skills/inference-and-custom-data/`, `openpcdet/sub-skills/models-and-configs/`, `openpcdet/sub-skills/runtime-and-ops/`, `openpcdet/sub-skills/training-and-evaluation/`, `openpcdet/references/openpcdet-overview.md`.

### `paddle-detection`

Role: Guides PaddleDetection object detection, segmentation, keypoint, multi-object tracking, configuration, training, evaluation, inference, export, deployment, and PP-Human/PP-Vehicle pipeline workflows.
Read when: The request names `paddle-detection` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, deployment and export, industrial pipelines, model zoo and configuration, and training evaluation inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddle-detection/SKILL.md`, `paddle-detection/sub-skills/data-preparation/`, `paddle-detection/sub-skills/deployment-and-export/`, `paddle-detection/sub-skills/industrial-pipelines/`, `paddle-detection/sub-skills/model-zoo-and-configuration/`, `paddle-detection/sub-skills/training-evaluation-inference/`, `paddle-detection/references/install-and-environment.md`.

### `paddlevit`

Role: Guide PaddleViT computer-vision workflows for transformer and MLP image classification, object detection, semantic segmentation, DINO self-supervision, GANs, configuration, distributed/AMP execution, and Paddle deployment with explicit data, backend, and checkpoint boundaries.
Read when: The request names `paddlevit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, deployment and operations, detection, generative, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlevit/SKILL.md`, `paddlevit/sub-skills/classification/`, `paddlevit/sub-skills/deployment-and-operations/`, `paddlevit/sub-skills/detection/`, `paddlevit/sub-skills/generative/`, `paddlevit/sub-skills/segmentation/`, `paddlevit/references/configuration.md`.

### `pytorch-wildlife`

Role: Use Pytorch-Wildlife for conservation AI workflows involving camera-trap and overhead image detection, wildlife classification, bioacoustic audio pipelines, result post-processing, video demos, and legacy fine-tuning data preparation.
Read when: The request names `pytorch-wildlife` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bioacoustics, classification, data and postprocessing, detection, and fine tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-wildlife/SKILL.md`, `pytorch-wildlife/sub-skills/bioacoustics/`, `pytorch-wildlife/sub-skills/classification/`, `pytorch-wildlife/sub-skills/data-and-postprocessing/`, `pytorch-wildlife/sub-skills/detection/`, `pytorch-wildlife/sub-skills/fine-tuning/`, `pytorch-wildlife/references/api-boundaries.md`.

### `simpledet`

Role: Guides SimpleDet MXNet object detection and instance-recognition workflows, including legacy CUDA setup, roidb preparation, configurable training and evaluation, inference benchmarking, and detector customization.
Read when: The request names `simpledet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, detection workflows, model customization, and setup and operations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `simpledet/SKILL.md`, `simpledet/sub-skills/data-preparation/`, `simpledet/sub-skills/detection-workflows/`, `simpledet/sub-skills/model-customization/`, `simpledet/sub-skills/setup-and-operations/`, `simpledet/references/coverage-notes.md`.

### `solo`

Role: Operate the SOLO repository's legacy PyTorch/MMDetection workflows for object detection and instance segmentation, including inference, data/configuration, model customization, training, and evaluation.
Read when: The request names `solo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data config, inference, model configs, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `solo/SKILL.md`, `solo/sub-skills/data-config/`, `solo/sub-skills/inference/`, `solo/sub-skills/model-configs/`, `solo/sub-skills/training-evaluation/`, `solo/references/installation-and-compatibility.md`.

### `x-anylabeling`

Role: Use X-AnyLabeling for AI-assisted visual and multimodal annotation, XLABEL conversion, model configuration, training, packaging, and repository workflows.
Read when: The request names `x-anylabeling` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotation ui, auto labeling models, conversion cli, and developer workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `x-anylabeling/SKILL.md`, `x-anylabeling/sub-skills/annotation-ui/`, `x-anylabeling/sub-skills/auto-labeling-models/`, `x-anylabeling/sub-skills/conversion-cli/`, `x-anylabeling/sub-skills/developer-workflows/`, `x-anylabeling/references/install-and-runtime.md`.

### `yolov7-d2`

Role: Operate YOLOv7-d2, a Detectron2-based repository for YOLO-family, SparseInst, DETR-family training, inference, evaluation, and ONNX deployment workflows.
Read when: The request names `yolov7-d2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and export, inference and evaluation, and training and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolov7-d2/SKILL.md`, `yolov7-d2/sub-skills/deployment-and-export/`, `yolov7-d2/sub-skills/inference-and-evaluation/`, `yolov7-d2/sub-skills/training-and-configuration/`, `yolov7-d2/references/installation-and-environment.md`, `yolov7-d2/references/model-family-overview.md`.

<!-- DISCO_SCENARIO:object-detection-toolkits:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
