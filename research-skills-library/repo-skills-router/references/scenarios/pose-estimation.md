# Pose Estimation

## When To Read

Requests in the Pose Estimation family of the Computer Vision area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on pose estimation.

## Repo Skill Options

<!-- DISCO_SCENARIO:pose-estimation:START -->
### `3ddfa`

Role: Guide 3DDFA Python inference, geometry rendering, training/evaluation, and optional C++ ONNX workflows for 3D dense face alignment.
Read when: The request names `3ddfa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cpp onnx port, geometry rendering, python inference, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `3ddfa/SKILL.md`, `3ddfa/sub-skills/cpp-onnx-port/`, `3ddfa/sub-skills/geometry-rendering/`, `3ddfa/sub-skills/python-inference/`, `3ddfa/sub-skills/training-evaluation/`, `3ddfa/references/install-and-compatibility.md`.

### `3ddfa-v2`

Role: Routes 3DDFA_V2 face-alignment setup, still-image demos, video tracking, and ONNX benchmarking workflows.
Read when: The request names `3ddfa-v2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: onnx and benchmarking, setup and assets, still image demo, and video and tracking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `3ddfa-v2/SKILL.md`, `3ddfa-v2/sub-skills/onnx-and-benchmarking/`, `3ddfa-v2/sub-skills/setup-and-assets/`, `3ddfa-v2/sub-skills/still-image-demo/`, `3ddfa-v2/sub-skills/video-and-tracking/`, `3ddfa-v2/references/api-reference.md`.

### `curobo`

Role: Guides CUDA-accelerated cuRobo v2 robotics workflows for robot models, differentiable kinematics, collision-aware IK and motion planning, trajectory optimization, MPC, perception mapping, and motion retargeting.
Read when: The request names `curobo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: collision scenes, ik, motion planning, mpc optimization, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `curobo/SKILL.md`, `curobo/sub-skills/collision-scenes/`, `curobo/sub-skills/ik/`, `curobo/sub-skills/motion-planning/`, `curobo/sub-skills/mpc-optimization/`, `curobo/sub-skills/perception/`, `curobo/references/api-map.md`.

### `deeplabcut`

Role: Route DeepLabCut markerless pose-estimation workflows, project setup, PyTorch training/inference, maDLC tracking, Model Zoo, post-processing, 3D, and export tasks.
Read when: The request names `deeplabcut` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data labeling and training datasets, install and project setup, model zoo superanimal, multi animal tracking, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deeplabcut/SKILL.md`, `deeplabcut/sub-skills/data-labeling-and-training-datasets/`, `deeplabcut/sub-skills/install-and-project-setup/`, `deeplabcut/sub-skills/model-zoo-superanimal/`, `deeplabcut/sub-skills/multi-animal-tracking/`, `deeplabcut/sub-skills/postprocessing-3d-video-exports/`, `deeplabcut/references/api-index.md`.

### `face-alignment`

Role: Routes face-alignment installation, import checks, landmark-detection workflows, and detector-backend selection.
Read when: The request names `face-alignment` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: detectors and landmark detection.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `face-alignment/SKILL.md`, `face-alignment/sub-skills/detectors/`, `face-alignment/sub-skills/landmark-detection/`, `face-alignment/references/api-reference.md`, `face-alignment/references/repo-provenance.md`, `face-alignment/references/troubleshooting.md`.

### `face-evolve`

Role: Use face.evoLVe for high-performance face recognition workflows across alignment, data preparation, PyTorch training, feature verification, and Paddle deployment.
Read when: The request names `face-evolve` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, face alignment, feature extraction verification, paddle workflows, and pytorch training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `face-evolve/SKILL.md`, `face-evolve/sub-skills/data-preparation/`, `face-evolve/sub-skills/face-alignment/`, `face-evolve/sub-skills/feature-extraction-verification/`, `face-evolve/sub-skills/paddle-workflows/`, `face-evolve/sub-skills/pytorch-training/`, `face-evolve/references/quickstart-and-environment.md`.

### `face-recognition`

Role: Use face_recognition to detect faces, extract landmarks and encodings, compare identities, run the face_recognition and face_detection CLIs, and troubleshoot dlib/model installation.
Read when: The request names `face-recognition` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `face-recognition/SKILL.md`, `face-recognition/references/api-reference.md`, `face-recognition/references/cli-reference.md`, `face-recognition/references/deployment.md`, `face-recognition/references/repo-provenance.md`, `face-recognition/references/troubleshooting.md`.

### `imgclsmob`

Role: Guide imgclsmob image-classification model selection, CPU inference, dataset-aware training and evaluation plans, checkpoint conversion, and bounded multi-framework compatibility workflows.
Read when: The request names `imgclsmob` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, framework compatibility, model inference, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imgclsmob/SKILL.md`, `imgclsmob/sub-skills/conversion/`, `imgclsmob/sub-skills/framework-compatibility/`, `imgclsmob/sub-skills/model-inference/`, `imgclsmob/sub-skills/training-evaluation/`, `imgclsmob/references/repo-provenance.md`.

### `mimicmotion`

Role: Routes MimicMotion's CUDA-first local inference and Cog deployment workflows, including runtime preflight checks, sample-config generation, and MP4 output.
Read when: The request names `mimicmotion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mimicmotion/SKILL.md`, `mimicmotion/references/api-reference.md`, `mimicmotion/references/configuration.md`, `mimicmotion/references/environment.md`, `mimicmotion/references/repo-provenance.md`, `mimicmotion/references/troubleshooting.md`.

### `mmskeleton`

Role: Guides MMSkeleton skeleton-based action-recognition, skeleton-data preparation, config-driven applications, and optional detector-backed pose workflows with explicit legacy compatibility and verification gates.
Read when: The request names `mmskeleton` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, pose estimation, and recognition.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmskeleton/SKILL.md`, `mmskeleton/sub-skills/data-preparation/`, `mmskeleton/sub-skills/pose-estimation/`, `mmskeleton/sub-skills/recognition/`, `mmskeleton/references/compatibility.md`, `mmskeleton/references/repo-provenance.md`.

### `paddle-detection`

Role: Guides PaddleDetection object detection, segmentation, keypoint, multi-object tracking, configuration, training, evaluation, inference, export, deployment, and PP-Human/PP-Vehicle pipeline workflows.
Read when: The request names `paddle-detection` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, deployment and export, industrial pipelines, model zoo and configuration, and training evaluation inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddle-detection/SKILL.md`, `paddle-detection/sub-skills/data-preparation/`, `paddle-detection/sub-skills/deployment-and-export/`, `paddle-detection/sub-skills/industrial-pipelines/`, `paddle-detection/sub-skills/model-zoo-and-configuration/`, `paddle-detection/sub-skills/training-evaluation-inference/`, `paddle-detection/references/install-and-environment.md`.

### `rf-detr`

Role: Use and maintain RF-DETR for real-time object detection, instance segmentation, keypoint preview, training, export, deployment, and repository development.
Read when: The request names `rf-detr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: export and deployment, inference and models, repository development, and training and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rf-detr/SKILL.md`, `rf-detr/sub-skills/export-and-deployment/`, `rf-detr/sub-skills/inference-and-models/`, `rf-detr/sub-skills/repository-development/`, `rf-detr/sub-skills/training-and-cli/`, `rf-detr/references/model-overview.md`.

### `ultralyticspro`

Role: Routes UltralyticsPro workflows for YOLO and RT-DETR training, prediction, and preset selection from the repository's wrapper scripts and model notes.
Read when: The request names `ultralyticspro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: prediction and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ultralyticspro/SKILL.md`, `ultralyticspro/sub-skills/prediction/`, `ultralyticspro/sub-skills/training/`, `ultralyticspro/references/README.md`, `ultralyticspro/references/interface-reference.md`, `ultralyticspro/references/model-family-map.md`.

<!-- DISCO_SCENARIO:pose-estimation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
