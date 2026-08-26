# Object Detection Models

## When To Read

Requests in the Object Detection Models family of the Computer Vision area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on object detection models.

## Repo Skill Options

<!-- DISCO_SCENARIO:object-detection-models:START -->
### `bev-former`

Role: Routes BEVFormer camera-only 3D detection workflows, from install/import and config inspection through nuScenes data prep, distributed training and evaluation, and log analysis.
Read when: The request names `bev-former` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and utilities, dataset preparation, installation and configs, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bev-former/SKILL.md`, `bev-former/sub-skills/analysis-and-utilities/`, `bev-former/sub-skills/dataset-preparation/`, `bev-former/sub-skills/installation-and-configs/`, `bev-former/sub-skills/training-and-evaluation/`, `bev-former/references/model-zoo-and-configs.md`.

### `centernet`

Role: Routes CenterNet object-detection training, evaluation, configuration, and setup workflows.
Read when: The request names `centernet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `centernet/SKILL.md`, `centernet/references/cli-reference.md`, `centernet/references/configuration.md`, `centernet/references/data-layout.md`, `centernet/references/repo-provenance.md`, `centernet/references/troubleshooting.md`.

### `d-fine`

Role: Route D-FINE object-detection setup, training, architecture inspection, inference, export, and troubleshooting workflows.
Read when: The request names `d-fine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture api, data and configs, inference export, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `d-fine/SKILL.md`, `d-fine/sub-skills/architecture-api/`, `d-fine/sub-skills/data-and-configs/`, `d-fine/sub-skills/inference-export/`, `d-fine/sub-skills/training-evaluation/`, `d-fine/references/install-and-environment.md`.

### `damo-yolo`

Role: Training, inference, and deployment workflows for DAMO-YOLO object detection.
Read when: The request names `damo-yolo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `damo-yolo/SKILL.md`, `damo-yolo/sub-skills/deployment/`, `damo-yolo/sub-skills/inference/`, `damo-yolo/sub-skills/training/`, `damo-yolo/references/api-reference.md`, `damo-yolo/references/model-overview.md`.

### `darkflow`

Role: Routes Darkflow object-detection, training, and export workflows for the legacy YOLO package.
Read when: The request names `darkflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `darkflow/SKILL.md`, `darkflow/sub-skills/inference/`, `darkflow/sub-skills/training/`, `darkflow/references/api-reference.md`, `darkflow/references/cli-reference.md`, `darkflow/references/installation.md`.

### `dino`

Role: Routes DINO DETR object-detection setup, COCO data validation, CUDA deformable-attention preparation, training, evaluation, inference, visualization, and bounded benchmarking tasks.
Read when: The request names `dino` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data model setup, inference evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dino/SKILL.md`, `dino/sub-skills/data-model-setup/`, `dino/sub-skills/inference-evaluation/`, `dino/sub-skills/training/`, `dino/references/repo-provenance.md`, `dino/references/troubleshooting.md`.

### `fcos`

Role: Routes FCOS object-detection repo tasks for inference demos, config/data setup, training/evaluation, ONNX export, and legacy PyTorch internals.
Read when: The request names `fcos` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data configs, inference demo, internals maintenance, onnx export, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fcos/SKILL.md`, `fcos/sub-skills/data-configs/`, `fcos/sub-skills/inference-demo/`, `fcos/sub-skills/internals-maintenance/`, `fcos/sub-skills/onnx-export/`, `fcos/sub-skills/training-evaluation/`, `fcos/references/repo-provenance.md`.

### `mask-rcnn`

Role: Guides Matterport Mask_RCNN package workflows for instance segmentation, dataset preparation, training, inference, visualization, and evaluation.
Read when: The request names `mask-rcnn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core apis, data preparation, inference evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mask-rcnn/SKILL.md`, `mask-rcnn/sub-skills/core-apis/`, `mask-rcnn/sub-skills/data-preparation/`, `mask-rcnn/sub-skills/inference-evaluation/`, `mask-rcnn/sub-skills/training/`, `mask-rcnn/references/installation-and-compatibility.md`.

### `nanodet`

Role: Routes NanoDet users to dataset/config, training/evaluation, and inference/export workflows for the NanoDet object-detection repository.
Read when: The request names `nanodet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset config, inference export, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nanodet/SKILL.md`, `nanodet/sub-skills/dataset-config/`, `nanodet/sub-skills/inference-export/`, `nanodet/sub-skills/training/`, `nanodet/references/api-reference.md`, `nanodet/references/model-overview.md`.

### `python-mini-project`

Role: Route and safely maintain the ndleah Python Mini Projects collection of standalone beginner Python scripts, games, web apps, automation tools, data/media demos, and ML/CV examples.
Read when: The request names `python-mini-project` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli algorithms and utilities, contribution and project maintenance, data media ml and vision, games gui and desktop, and web network and automation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `python-mini-project/SKILL.md`, `python-mini-project/sub-skills/cli-algorithms-and-utilities/`, `python-mini-project/sub-skills/contribution-and-project-maintenance/`, `python-mini-project/sub-skills/data-media-ml-and-vision/`, `python-mini-project/sub-skills/games-gui-and-desktop/`, `python-mini-project/sub-skills/web-network-and-automation/`, `python-mini-project/references/dependency-and-safety-map.md`.

### `pytorch-yolo-v3`

Role: Route pytorch-yolo-v3 Darknet cfg, image detection, video camera demo, preprocessing, NMS, and legacy PyTorch YOLOv3 troubleshooting tasks.
Read when: The request names `pytorch-yolo-v3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: image detection, model and config, and video camera demos.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-yolo-v3/SKILL.md`, `pytorch-yolo-v3/sub-skills/image-detection/`, `pytorch-yolo-v3/sub-skills/model-and-config/`, `pytorch-yolo-v3/sub-skills/video-camera-demos/`, `pytorch-yolo-v3/references/repo-provenance.md`, `pytorch-yolo-v3/references/troubleshooting.md`.

### `rf-detr`

Role: Use and maintain RF-DETR for real-time object detection, instance segmentation, keypoint preview, training, export, deployment, and repository development.
Read when: The request names `rf-detr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export and deployment, inference and models, repository development, and training and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rf-detr/SKILL.md`, `rf-detr/sub-skills/export-and-deployment/`, `rf-detr/sub-skills/inference-and-models/`, `rf-detr/sub-skills/repository-development/`, `rf-detr/sub-skills/training-and-cli/`, `rf-detr/references/model-overview.md`.

### `scaled-yolov4`

Role: Repo-specific guidance for ScaledYOLOv4 data preparation, training, evaluation, inference, and export workflows.
Read when: The request names `scaled-yolov4` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, export, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scaled-yolov4/SKILL.md`, `scaled-yolov4/sub-skills/data-preparation/`, `scaled-yolov4/sub-skills/evaluation/`, `scaled-yolov4/sub-skills/export/`, `scaled-yolov4/sub-skills/inference/`, `scaled-yolov4/sub-skills/training/`, `scaled-yolov4/references/cli-reference.md`.

### `ssd-keras`

Role: Router for SSD300, SSD512, and SSD7 Keras detection workflows.
Read when: The request names `ssd-keras` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ssd-keras/SKILL.md`, `ssd-keras/sub-skills/data-preparation/`, `ssd-keras/sub-skills/inference-evaluation/`, `ssd-keras/sub-skills/training/`, `ssd-keras/references/compatibility.md`, `ssd-keras/references/data-formats.md`.

### `ssd-pytorch`

Role: Operate the amdegroot SSD.PyTorch repository for SSD300 model construction, VOC/COCO training, evaluation, and demos.
Read when: The request names `ssd-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data training, evaluation demos, and model inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ssd-pytorch/SKILL.md`, `ssd-pytorch/sub-skills/data-training/`, `ssd-pytorch/sub-skills/evaluation-demos/`, `ssd-pytorch/sub-skills/model-inference/`, `ssd-pytorch/references/installation-and-compatibility.md`, `ssd-pytorch/references/repo-provenance.md`.

### `stardist`

Role: Self-contained operating guidance for StarDist 0.9.2: CPU-verified 2D/3D instance segmentation, geometry/evaluation, and optional deployment integrations.
Read when: The request names `stardist` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: 2d workflows, 3d workflows, deployment integration, and evaluation geometry.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stardist/SKILL.md`, `stardist/sub-skills/2d-workflows/`, `stardist/sub-skills/3d-workflows/`, `stardist/sub-skills/deployment-integration/`, `stardist/sub-skills/evaluation-geometry/`, `stardist/references/api-overview.md`.

### `tensorflow-yolov3`

Role: Guides legacy TensorFlow 1.x YOLOv3 workflows for data preparation, checkpoint conversion, frozen-graph inference, training, and Pascal VOC mAP evaluation.
Read when: The request names `tensorflow-yolov3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-yolov3/SKILL.md`, `tensorflow-yolov3/sub-skills/conversion/`, `tensorflow-yolov3/sub-skills/data-preparation/`, `tensorflow-yolov3/sub-skills/evaluation/`, `tensorflow-yolov3/sub-skills/inference/`, `tensorflow-yolov3/sub-skills/training/`, `tensorflow-yolov3/references/architecture.md`.

### `tensorflow-yolov4-tflite`

Role: Guides TensorFlow YOLOv3/YOLOv4 conversion, inference, training data, evaluation, TensorRT, and Android TFLite workflows for hunglc007/tensorflow-yolov4-tflite.
Read when: The request names `tensorflow-yolov4-tflite` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: android deployment, inference evaluation, model conversion, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-yolov4-tflite/SKILL.md`, `tensorflow-yolov4-tflite/sub-skills/android-deployment/`, `tensorflow-yolov4-tflite/sub-skills/inference-evaluation/`, `tensorflow-yolov4-tflite/sub-skills/model-conversion/`, `tensorflow-yolov4-tflite/sub-skills/training-data/`, `tensorflow-yolov4-tflite/references/compatibility.md`.

### `tensorrt-demos`

Role: Guide TensorRT demo construction, GPU inference, matting, legacy Caffe models, and COCO evaluation for the tensorrt_demos repository with explicit version, hardware, artifact, and safety gates.
Read when: The request names `tensorrt-demos` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: detection inference, engine building, evaluation, legacy models, and matting inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorrt-demos/SKILL.md`, `tensorrt-demos/sub-skills/detection-inference/`, `tensorrt-demos/sub-skills/engine-building/`, `tensorrt-demos/sub-skills/evaluation/`, `tensorrt-demos/sub-skills/legacy-models/`, `tensorrt-demos/sub-skills/matting-inference/`, `tensorrt-demos/references/repo-provenance.md`.

### `tf-faster-rcnn`

Role: Route TensorFlow 1.x Faster R-CNN tasks for install/build, VOC/COCO assets, pretrained demo inference, training/evaluation, and architecture/API modification in the deprecated tf-faster-rcnn repository.
Read when: The request names `tf-faster-rcnn` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api and architecture, dataset and assets, inference and demo, installation and configuration, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tf-faster-rcnn/SKILL.md`, `tf-faster-rcnn/sub-skills/api-and-architecture/`, `tf-faster-rcnn/sub-skills/dataset-and-assets/`, `tf-faster-rcnn/sub-skills/inference-and-demo/`, `tf-faster-rcnn/sub-skills/installation-and-configuration/`, `tf-faster-rcnn/sub-skills/training-and-evaluation/`, `tf-faster-rcnn/references/capability-map.md`.

### `ultralyticspro`

Role: Routes UltralyticsPro workflows for YOLO and RT-DETR training, prediction, and preset selection from the repository's wrapper scripts and model notes.
Read when: The request names `ultralyticspro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: prediction and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ultralyticspro/SKILL.md`, `ultralyticspro/sub-skills/prediction/`, `ultralyticspro/sub-skills/training/`, `ultralyticspro/references/README.md`, `ultralyticspro/references/interface-reference.md`, `ultralyticspro/references/model-family-map.md`.

### `yolop`

Role: Guides YOLOP multi-task driving perception workflows for BDD100K data preparation, training, evaluation, PyTorch demo inference, ONNX export, and TensorRT deployment planning.
Read when: The request names `yolop` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, export, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolop/SKILL.md`, `yolop/sub-skills/data-preparation/`, `yolop/sub-skills/export/`, `yolop/sub-skills/inference/`, `yolop/sub-skills/training/`, `yolop/references/configuration.md`.

### `yolov3`

Role: Operate Ultralytics YOLOv3 detection workflows: inference, training, validation, architecture, export, and maintenance.
Read when: The request names `yolov3` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export deployment, inference, model architecture, repo maintenance, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolov3/SKILL.md`, `yolov3/sub-skills/export-deployment/`, `yolov3/sub-skills/inference/`, `yolov3/sub-skills/model-architecture/`, `yolov3/sub-skills/repo-maintenance/`, `yolov3/sub-skills/training/`, `yolov3/references/package-and-environment.md`.

### `yolov5`

Role: Use the `yolov5` skill for clone-run Ultralytics YOLOv5 workflows: detection, segmentation, classification, export, benchmarks, datasets, weights, and Flask REST serving.
Read when: The request names `yolov5` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, detection, export, segmentation, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolov5/SKILL.md`, `yolov5/sub-skills/classification/`, `yolov5/sub-skills/detection/`, `yolov5/sub-skills/export/`, `yolov5/sub-skills/segmentation/`, `yolov5/sub-skills/serving/`, `yolov5/references/datasets-and-weights.md`.

### `yolox`

Role: Use YOLOX for object-detection inference, training/data experiments, and checkpoint export/deployment workflows.
Read when: The request names `yolox` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export and deployment, inference and api, and training and data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yolox/SKILL.md`, `yolox/sub-skills/export-and-deployment/`, `yolox/sub-skills/inference-and-api/`, `yolox/sub-skills/training-and-data/`, `yolox/references/installation-and-environment.md`, `yolox/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:object-detection-models:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
