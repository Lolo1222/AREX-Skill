# Computer Vision — General

## When To Read

Computer Vision requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:computer-vision-general:START -->
### `3d-resnets-pytorch`

Role: Routes 3D ResNets PyTorch video action-recognition workflows across training, inference, and data preparation.
Read when: The request names `3d-resnets-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation and training and inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `3d-resnets-pytorch/SKILL.md`, `3d-resnets-pytorch/sub-skills/data-preparation/`, `3d-resnets-pytorch/sub-skills/training-and-inference/`, `3d-resnets-pytorch/references/cli-reference.md`, `3d-resnets-pytorch/references/repo-provenance.md`, `3d-resnets-pytorch/references/troubleshooting.md`.

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

### `anomalib`

Role: Use anomalib for anomaly-detection install, data/model selection, training and evaluation, deployment and inference, and benchmark pipelines.
Read when: The request names `anomalib` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and models, deployment and inference, install and cli, pipelines and benchmarks, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `anomalib/SKILL.md`, `anomalib/sub-skills/data-and-models/`, `anomalib/sub-skills/deployment-and-inference/`, `anomalib/sub-skills/install-and-cli/`, `anomalib/sub-skills/pipelines-and-benchmarks/`, `anomalib/sub-skills/training-and-evaluation/`, `anomalib/references/repo-provenance.md`.

### `augmentor`

Role: Use Augmentor for Pillow-based image augmentation pipelines, operation selection, mask-safe augmentation, array/generator workflows, and package-specific troubleshooting.
Read when: The request names `augmentor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generators and frameworks, masks and arrays, operation reference, and pipeline augmentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `augmentor/SKILL.md`, `augmentor/sub-skills/generators-and-frameworks/`, `augmentor/sub-skills/masks-and-arrays/`, `augmentor/sub-skills/operation-reference/`, `augmentor/sub-skills/pipeline-augmentation/`, `augmentor/references/quickstart.md`.

### `boxmot`

Role: Use BoxMOT for multi-object tracking, benchmark replay, ReID model lifecycle workflows, and native C++ tracker backends.
Read when: The request names `boxmot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark workflows, native cpp backends, reid lifecycle, and tracking and trackers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `boxmot/SKILL.md`, `boxmot/sub-skills/benchmark-workflows/`, `boxmot/sub-skills/native-cpp-backends/`, `boxmot/sub-skills/reid-lifecycle/`, `boxmot/sub-skills/tracking-and-trackers/`, `boxmot/references/install-and-inspect.md`.

### `cream`

Role: Routes DisCo Researcher to Cream-family vision NAS, compression, distillation, and relative-position-encoding workflows across the AutoFormer, AutoFormerV2, Cream, CDARTS, EfficientViT, MiniViT, TinyCLIP, TinyViT, and iRPE project families.
Read when: The request names `cream` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: efficientvit, irpe, minivit, nas search, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `cream/SKILL.md`, `cream/sub-skills/efficientvit/`, `cream/sub-skills/irpe/`, `cream/sub-skills/minivit/`, `cream/sub-skills/nas-search/`, `cream/sub-skills/tinyclip/`, `cream/references/compatibility.md`.

### `deep-person-reid`

Role: Route Torchreid deep-person-reid workflows for person re-identification training, evaluation, feature extraction, metrics, visualization, and model export.
Read when: The request names `deep-person-reid` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: feature extraction, model export, and training evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-person-reid/SKILL.md`, `deep-person-reid/sub-skills/feature-extraction/`, `deep-person-reid/sub-skills/model-export/`, `deep-person-reid/sub-skills/training-evaluation/`, `deep-person-reid/references/package-overview.md`, `deep-person-reid/references/repo-provenance.md`.

### `deepface`

Role: Use DeepFace for face recognition, verification, embeddings, face detection, demographic analysis, datastore search, API serving, model selection, and troubleshooting.
Read when: The request names `deepface` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api service, datastore search, detection and demography, model and backend selection, and recognition workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepface/SKILL.md`, `deepface/sub-skills/api-service/`, `deepface/sub-skills/datastore-search/`, `deepface/sub-skills/detection-and-demography/`, `deepface/sub-skills/model-and-backend-selection/`, `deepface/sub-skills/recognition-workflows/`, `deepface/references/package-overview.md`.

### `donut`

Role: Use Donut for OCR-free document understanding, checkpoint inference, fine-tuning, evaluation, and SynthDoG synthetic document generation.
Read when: The request names `donut` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference, synthdog, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `donut/SKILL.md`, `donut/sub-skills/inference/`, `donut/sub-skills/synthdog/`, `donut/sub-skills/training/`, `donut/references/api-reference.md`, `donut/references/repo-provenance.md`.

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

### `facenet`

Role: Use davidsandberg/facenet for TensorFlow 1.x face recognition workflows: MTCNN alignment, embeddings, classification, LFW evaluation, training, and model export.
Read when: The request names `facenet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and alignment, embeddings and classification, evaluation, model export and checkpoints, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `facenet/SKILL.md`, `facenet/sub-skills/data-and-alignment/`, `facenet/sub-skills/embeddings-and-classification/`, `facenet/sub-skills/evaluation/`, `facenet/sub-skills/model-export-and-checkpoints/`, `facenet/sub-skills/training/`, `facenet/references/compatibility-and-install.md`.

### `fast-reid`

Role: Operate FastReID setup, configuration, datasets, model/inference APIs, training/evaluation workflows, deployment/export paths, and extension projects for person and vehicle re-identification.
Read when: The request names `fast-reid` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and datasets, deployment and projects, modeling and inference, setup and configuration, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fast-reid/SKILL.md`, `fast-reid/sub-skills/data-and-datasets/`, `fast-reid/sub-skills/deployment-and-projects/`, `fast-reid/sub-skills/modeling-and-inference/`, `fast-reid/sub-skills/setup-and-configuration/`, `fast-reid/sub-skills/training-and-evaluation/`, `fast-reid/references/package-map.md`.

### `fastdup`

Role: Route fastdup workflows for visual dataset curation, annotation-driven analysis, embeddings and search, and video or exchange plumbing.
Read when: The request names `fastdup` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset curation, media and exchange, model enrichment, and structured datasets.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fastdup/SKILL.md`, `fastdup/sub-skills/dataset-curation/`, `fastdup/sub-skills/media-and-exchange/`, `fastdup/sub-skills/model-enrichment/`, `fastdup/sub-skills/structured-datasets/`, `fastdup/references/api-reference.md`.

### `ffcv`

Role: Use FFCV to convert datasets into .beton files, build fast PyTorch loader pipelines, handle image and custom fields/transforms, and tune cache, traversal, and throughput behavior.
Read when: The request names `ffcv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset writing, loader pipelines, and performance tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ffcv/SKILL.md`, `ffcv/sub-skills/dataset-writing/`, `ffcv/sub-skills/loader-pipelines/`, `ffcv/sub-skills/performance-tuning/`, `ffcv/references/api-reference.md`, `ffcv/references/installation.md`.

### `funclip`

Role: Guide FunClip ASR video/audio clipping, LLM-assisted clipping providers, and release packaging workflows.
Read when: The request names `funclip` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clip workflows, llm providers, and release packaging.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funclip/SKILL.md`, `funclip/sub-skills/clip-workflows/`, `funclip/sub-skills/llm-providers/`, `funclip/sub-skills/release-packaging/`, `funclip/references/installation-and-runtime.md`, `funclip/references/repo-provenance.md`.

### `gaussian-slam`

Role: Use Gaussian-SLAM for CUDA RGB-D dense SLAM, Gaussian-splatting mapping, dataset/configuration preflight, checkpoint evaluation, reconstruction metrics, and global-map refinement.
Read when: The request names `gaussian-slam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and configuration, evaluation and mapping, and slam runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gaussian-slam/SKILL.md`, `gaussian-slam/sub-skills/datasets-and-configuration/`, `gaussian-slam/sub-skills/evaluation-and-mapping/`, `gaussian-slam/sub-skills/slam-runtime/`, `gaussian-slam/references/repo-provenance.md`, `gaussian-slam/references/troubleshooting.md`.

### `gluon-cv`

Role: Use GluonCV for computer-vision model-zoo, dataset, transform, training-script, AutoML, and deployment workflows across MXNet and PyTorch backends.
Read when: The request names `gluon-cv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automl deployment export, data transforms datasets, mxnet model zoo, torch video workflows, and training evaluation scripts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gluon-cv/SKILL.md`, `gluon-cv/sub-skills/automl-deployment-export/`, `gluon-cv/sub-skills/data-transforms-datasets/`, `gluon-cv/sub-skills/mxnet-model-zoo/`, `gluon-cv/sub-skills/torch-video-workflows/`, `gluon-cv/sub-skills/training-evaluation-scripts/`, `gluon-cv/references/install-and-backends.md`.

### `hierarchical-localization`

Role: Use the hloc Hierarchical-Localization toolbox for visual localization, feature retrieval, matching, SfM mapping, dataset pipelines, and custom HDF5 interoperability.
Read when: The request names `hierarchical-localization` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom interop, dataset pipelines, feature retrieval, and mapping localization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hierarchical-localization/SKILL.md`, `hierarchical-localization/sub-skills/custom-interop/`, `hierarchical-localization/sub-skills/dataset-pipelines/`, `hierarchical-localization/sub-skills/feature-retrieval/`, `hierarchical-localization/sub-skills/mapping-localization/`, `hierarchical-localization/references/repo-provenance.md`.

### `img2dataset`

Role: Create, restart, audit, and scale img2dataset runs for turning URL tables into image datasets.
Read when: The request names `img2dataset` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core download, distributed execution, image processing, and input output formats.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `img2dataset/SKILL.md`, `img2dataset/sub-skills/core-download/`, `img2dataset/sub-skills/distributed-execution/`, `img2dataset/sub-skills/image-processing/`, `img2dataset/sub-skills/input-output-formats/`, `img2dataset/references/dataset-recipes.md`.

### `imgaug`

Role: Use when working with imgaug image augmentation pipelines, aligned annotations, stochastic parameters, dtype/data utilities, or multicore augmentation for computer-vision data.
Read when: The request names `imgaug` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: augmentables and batches, augmentation pipelines, multicore and diagnostics, and parameters random and utilities.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imgaug/SKILL.md`, `imgaug/sub-skills/augmentables-and-batches/`, `imgaug/sub-skills/augmentation-pipelines/`, `imgaug/sub-skills/multicore-and-diagnostics/`, `imgaug/sub-skills/parameters-random-and-utilities/`, `imgaug/references/package-overview.md`.

### `intern-image`

Role: Guides InternImage vision foundation-model workflows across image classification, object detection, semantic segmentation, autonomous driving, DCNv3 operators, and TensorRT deployment.
Read when: The request names `intern-image` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: autonomous driving, classification, deployment, detection, and segmentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `intern-image/SKILL.md`, `intern-image/sub-skills/autonomous-driving/`, `intern-image/sub-skills/classification/`, `intern-image/sub-skills/deployment/`, `intern-image/sub-skills/detection/`, `intern-image/sub-skills/segmentation/`, `intern-image/references/model-and-config-overview.md`.

### `intern-video`

Role: Routes InternVideo repository workflows for video foundation models, multimodal retrieval, video MLLMs, datasets, distributed training scripts, and troubleshooting.
Read when: The request names `intern-video` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets, legacy workflows, multi modality, next pretraining, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `intern-video/SKILL.md`, `intern-video/sub-skills/datasets/`, `intern-video/sub-skills/legacy-workflows/`, `intern-video/sub-skills/multi-modality/`, `intern-video/sub-skills/next-pretraining/`, `intern-video/sub-skills/series-map/`, `intern-video/references/installation-and-backends.md`.

### `internlm-xcomposer`

Role: Guides InternLM-XComposer multimodal inference, composition, fine-tuning, reward-model, OmniLive, evaluation, and related-project workflows.
Read when: The request names `internlm-xcomposer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation and projects, finetuning, model inference, omnilive, and reward model.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `internlm-xcomposer/SKILL.md`, `internlm-xcomposer/sub-skills/evaluation-and-projects/`, `internlm-xcomposer/sub-skills/finetuning/`, `internlm-xcomposer/sub-skills/model-inference/`, `internlm-xcomposer/sub-skills/omnilive/`, `internlm-xcomposer/sub-skills/reward-model/`, `internlm-xcomposer/references/installation.md`.

### `jittor`

Role: Guide Jittor package workflows for tensor programming, training, data/model I/O, custom ops, runtime validation, and troubleshooting.
Read when: The request names `jittor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core api and autograd, custom op console and tools, datasets models and io, nn training workflows, and runtime and installation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jittor/SKILL.md`, `jittor/sub-skills/core-api-and-autograd/`, `jittor/sub-skills/custom-op-console-and-tools/`, `jittor/sub-skills/datasets-models-and-io/`, `jittor/sub-skills/nn-training-workflows/`, `jittor/sub-skills/runtime-and-installation/`, `jittor/references/api-map.md`.

### `kornia`

Role: Use Kornia for differentiable computer vision, image processing, augmentation, geometry, features, models, losses, metrics, and deployment workflows.
Read when: The request names `kornia` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: augmentation pipelines, features and matching, geometry vision, image processing, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kornia/SKILL.md`, `kornia/sub-skills/augmentation-pipelines/`, `kornia/sub-skills/features-and-matching/`, `kornia/sub-skills/geometry-vision/`, `kornia/sub-skills/image-processing/`, `kornia/sub-skills/losses-and-metrics/`, `kornia/references/compile-and-performance.md`.

### `lightglue`

Role: Use LightGlue for local feature matching, extractor selection, matcher configuration, visualization, and benchmarking.
Read when: The request names `lightglue` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: extractors and features, image pair matching, matcher configuration, and performance and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightglue/SKILL.md`, `lightglue/sub-skills/extractors-and-features/`, `lightglue/sub-skills/image-pair-matching/`, `lightglue/sub-skills/matcher-configuration/`, `lightglue/sub-skills/performance-and-visualization/`, `lightglue/references/package-overview.md`.

### `maante`

Role: Repo-specific operating guidance for MaaNTE Neverness to Everness MaaFramework automation tasks, pipeline JSON, Python custom actions, navigation, audio, minigame, and maintainer workflows.
Read when: The request names `maante` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom actions, gameplay tasks, media minigames, navigation realtime, and pipeline development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maante/SKILL.md`, `maante/sub-skills/custom-actions/`, `maante/sub-skills/gameplay-tasks/`, `maante/sub-skills/media-minigames/`, `maante/sub-skills/navigation-realtime/`, `maante/sub-skills/pipeline-development/`, `maante/references/maa-framework-patterns.md`.

### `mambavision`

Role: Routes MambaVision users to classification, ImageNet training, and OpenMMLab backbone-adaptation workflows.
Read when: The request names `mambavision` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, object detection, semantic segmentation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mambavision/SKILL.md`, `mambavision/sub-skills/classification/`, `mambavision/sub-skills/object-detection/`, `mambavision/sub-skills/semantic-segmentation/`, `mambavision/sub-skills/training/`, `mambavision/references/installation.md`.

### `map`

Role: Evaluate detector outputs with VOC-style AP/mAP, convert annotations into evaluator text, and inspect or repair GT/DR file sets.
Read when: The request names `map` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, data validation, and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `map/SKILL.md`, `map/sub-skills/conversion/`, `map/sub-skills/data-validation/`, `map/sub-skills/evaluation/`, `map/references/repo-overview.md`, `map/references/repo-provenance.md`.

### `mast3r-slam`

Role: Guides MASt3R-SLAM installation, CUDA backend setup, visual SLAM runs on video/live/dataset inputs, and benchmark evaluation.
Read when: The request names `mast3r-slam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, run slam, and setup and backends.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mast3r-slam/SKILL.md`, `mast3r-slam/sub-skills/evaluation/`, `mast3r-slam/sub-skills/run-slam/`, `mast3r-slam/sub-skills/setup-and-backends/`, `mast3r-slam/references/overview.md`, `mast3r-slam/references/repo-provenance.md`.

### `mmaction2`

Role: Use MMAction2 for video understanding inference, datasets/configs, training/evaluation, models, registries, and deployment planning.
Read when: The request names `mmaction2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configs, inference and demos, models and extension, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmaction2/SKILL.md`, `mmaction2/sub-skills/data-and-configs/`, `mmaction2/sub-skills/inference-and-demos/`, `mmaction2/sub-skills/models-and-extension/`, `mmaction2/sub-skills/training-and-evaluation/`, `mmaction2/references/environment-and-installation.md`.

### `mmpretrain`

Role: Operate MMPreTrain model-zoo inference, config-driven training and evaluation, dataset/customization, analysis utilities, checkpoint conversion, and serving workflows.
Read when: The request names `mmpretrain` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and customization, model zoo inference, tools analysis and deployment, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmpretrain/SKILL.md`, `mmpretrain/sub-skills/datasets-and-customization/`, `mmpretrain/sub-skills/model-zoo-inference/`, `mmpretrain/sub-skills/tools-analysis-and-deployment/`, `mmpretrain/sub-skills/training-and-evaluation/`, `mmpretrain/references/installation-and-troubleshooting.md`.

### `mmskeleton`

Role: Guides MMSkeleton skeleton-based action-recognition, skeleton-data preparation, config-driven applications, and optional detector-backed pose workflows with explicit legacy compatibility and verification gates.
Read when: The request names `mmskeleton` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, pose estimation, and recognition.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmskeleton/SKILL.md`, `mmskeleton/sub-skills/data-preparation/`, `mmskeleton/sub-skills/pose-estimation/`, `mmskeleton/sub-skills/recognition/`, `mmskeleton/references/compatibility.md`, `mmskeleton/references/repo-provenance.md`.

### `neuralangelo`

Role: Operate Neuralangelo neural surface reconstruction workflows for data preparation, training, and mesh extraction.
Read when: The request names `neuralangelo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, mesh extraction, and training and configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `neuralangelo/SKILL.md`, `neuralangelo/sub-skills/data-preparation/`, `neuralangelo/sub-skills/mesh-extraction/`, `neuralangelo/sub-skills/training-and-configs/`, `neuralangelo/references/cross-skill-workflows.md`, `neuralangelo/references/installation-and-environment.md`.

### `object-detection-metrics`

Role: Guides legacy Object-Detection-Metrics PASCAL VOC AP/mAP evaluation from detection text folders and direct Python API classes.
Read when: The request names `object-detection-metrics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: file evaluation and python api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `object-detection-metrics/SKILL.md`, `object-detection-metrics/sub-skills/file-evaluation/`, `object-detection-metrics/sub-skills/python-api/`, `object-detection-metrics/references/repo-provenance.md`, `object-detection-metrics/references/troubleshooting.md`, `object-detection-metrics/references/workflow-map.md`.

### `pytorch-cifar100`

Role: Operate the script-based PyTorch CIFAR-100 model zoo, training, and checkpoint evaluation workflows.
Read when: The request names `pytorch-cifar100` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, model zoo, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-cifar100/SKILL.md`, `pytorch-cifar100/sub-skills/evaluation/`, `pytorch-cifar100/sub-skills/model-zoo/`, `pytorch-cifar100/sub-skills/training/`, `pytorch-cifar100/references/configuration.md`, `pytorch-cifar100/references/repo-provenance.md`.

### `resnest`

Role: Use ResNeSt split-attention CNN models across PyTorch, optional MXNet Gluon, and optional Detectron2 backbones with safe install checks, model routing, and troubleshooting.
Read when: The request names `resnest` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: detectron2 backbones, gluon models, and pytorch models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `resnest/SKILL.md`, `resnest/sub-skills/detectron2-backbones/`, `resnest/sub-skills/gluon-models/`, `resnest/sub-skills/pytorch-models/`, `resnest/references/model-overview.md`, `resnest/references/repo-provenance.md`.

### `sahi`

Role: Route SAHI sliced object-detection inference, model integration, postprocessing, COCO dataset utilities, prediction objects, CLI usage, and troubleshooting workflows.
Read when: The request names `sahi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotations and results, dataset tools, model integrations, postprocess backends, and sliced inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sahi/SKILL.md`, `sahi/sub-skills/annotations-and-results/`, `sahi/sub-skills/dataset-tools/`, `sahi/sub-skills/model-integrations/`, `sahi/sub-skills/postprocess-backends/`, `sahi/sub-skills/sliced-inference/`, `sahi/references/installation-and-optional-deps.md`.

### `scikit-image`

Role: Route scikit-image tasks across image I/O, enhancement, analysis, segmentation, geometric transforms, and registration.
Read when: The request names `scikit-image` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis, data io, enhancement, segmentation and shapes, and transform registration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scikit-image/SKILL.md`, `scikit-image/sub-skills/analysis/`, `scikit-image/sub-skills/data-io/`, `scikit-image/sub-skills/enhancement/`, `scikit-image/sub-skills/segmentation-and-shapes/`, `scikit-image/sub-skills/transform-registration/`, `scikit-image/references/experimental-api.md`.

### `simple-cv`

Role: Routes SimpleCV users to legacy install, image processing, acquisition/display, feature detection, segmentation/tracking, and machine-learning workflows.
Read when: The request names `simple-cv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acquisition display shell, feature detection, image processing basics, machine learning legacy, and segmentation tracking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `simple-cv/SKILL.md`, `simple-cv/sub-skills/acquisition-display-shell/`, `simple-cv/sub-skills/feature-detection/`, `simple-cv/sub-skills/image-processing-basics/`, `simple-cv/sub-skills/machine-learning-legacy/`, `simple-cv/sub-skills/segmentation-tracking/`, `simple-cv/references/api-reference.md`.

### `splatam`

Role: Routes agents working with SplaTAM RGB-D SLAM, Gaussian-splat reconstruction, iPhone/NeRFCapture capture, evaluation, export, and troubleshooting workflows.
Read when: The request names `splatam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: capture and reconstruction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `splatam/SKILL.md`, `splatam/sub-skills/capture/`, `splatam/sub-skills/reconstruction/`, `splatam/references/data-and-configs.md`, `splatam/references/environment.md`, `splatam/references/repo-provenance.md`.

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

### `stitching`

Role: Routes panorama stitching, the `stitch` CLI, `Stitcher` and `AffineStitcher` API usage, verbose diagnostics, feature-mask troubleshooting, and headless installation decisions for the stitching package.
Read when: The request names `stitching` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli, diagnostics, and python api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stitching/SKILL.md`, `stitching/sub-skills/cli/`, `stitching/sub-skills/diagnostics/`, `stitching/sub-skills/python-api/`, `stitching/references/installation.md`, `stitching/references/repo-provenance.md`.

### `super-glue-pretrained-network`

Role: Use Magic Leap SuperGluePretrainedNetwork for SuperPoint plus SuperGlue image matching, pair evaluation, live demos, and Python API workflows.
Read when: The request names `super-glue-pretrained-network` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: live demo and visualization, pair matching evaluation, and programmatic api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `super-glue-pretrained-network/SKILL.md`, `super-glue-pretrained-network/sub-skills/live-demo-and-visualization/`, `super-glue-pretrained-network/sub-skills/pair-matching-evaluation/`, `super-glue-pretrained-network/sub-skills/programmatic-api/`, `super-glue-pretrained-network/references/model-overview.md`, `super-glue-pretrained-network/references/repo-provenance.md`.

### `supervision`

Role: Route Supervision computer-vision package workflows for detections, annotators, datasets, tracking, metrics, and media utilities.
Read when: The request names `supervision` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: annotators, datasets, detection and zones, media utils, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `supervision/SKILL.md`, `supervision/sub-skills/annotators/`, `supervision/sub-skills/datasets/`, `supervision/sub-skills/detection-and-zones/`, `supervision/sub-skills/media-utils/`, `supervision/sub-skills/metrics/`, `supervision/references/overview.md`.

### `swin-transformer`

Role: Use this repo skill for Microsoft Swin-Transformer image-classification model, config, data, checkpoint, SimMIM, Swin-MoE, and optional CUDA acceleration workflows.
Read when: The request names `swin-transformer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core models, data and checkpoints, moe and acceleration, simmim workflows, and training eval cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `swin-transformer/SKILL.md`, `swin-transformer/sub-skills/core-models/`, `swin-transformer/sub-skills/data-and-checkpoints/`, `swin-transformer/sub-skills/moe-and-acceleration/`, `swin-transformer/sub-skills/simmim-workflows/`, `swin-transformer/sub-skills/training-eval-cli/`, `swin-transformer/references/configuration.md`.

### `t-rex`

Role: Use the T-Rex2 cloud API wrapper for visual-prompt object detection, embeddings, visualization, and the optional Gradio demo.
Read when: The request names `t-rex` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud api workflows and visualization and demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `t-rex/SKILL.md`, `t-rex/sub-skills/cloud-api-workflows/`, `t-rex/sub-skills/visualization-and-demo/`, `t-rex/references/repo-provenance.md`, `t-rex/references/troubleshooting.md`, `t-rex/scripts/check_trex_install.py`.

### `torchmetrics`

Role: Use TorchMetrics to choose, inspect, and combine metric families for PyTorch evaluation, including core API, domain metrics, model-based metrics, and wrappers.
Read when: The request names `torchmetrics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio text metrics, basic metric domains, collections wrappers plotting, core api, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torchmetrics/SKILL.md`, `torchmetrics/sub-skills/audio-text-metrics/`, `torchmetrics/sub-skills/basic-metric-domains/`, `torchmetrics/sub-skills/collections-wrappers-plotting/`, `torchmetrics/sub-skills/core-api/`, `torchmetrics/sub-skills/model-based-metrics/`, `torchmetrics/references/metric-selection-cheatsheet.md`.

### `unrealcv`

Role: Routes UnrealCV tasks across the Python client, plugin build, and maintenance workflows.
Read when: The request names `unrealcv` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: maintenance, plugin build, and python client.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `unrealcv/SKILL.md`, `unrealcv/sub-skills/maintenance/`, `unrealcv/sub-skills/plugin-build/`, `unrealcv/sub-skills/python-client/`, `unrealcv/references/repo-provenance.md`, `unrealcv/references/source-bundle-manifest.json`.

### `viseron`

Role: Guides Viseron self-hosted NVR deployment, camera recording, computer-vision detection, integrations, and backend extension workflows.
Read when: The request names `viseron` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automation and integrations, camera recording pipeline, configuration and deployment, detection and ai components, and developer extension.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `viseron/SKILL.md`, `viseron/sub-skills/automation-and-integrations/`, `viseron/sub-skills/camera-recording-pipeline/`, `viseron/sub-skills/configuration-and-deployment/`, `viseron/sub-skills/detection-and-ai-components/`, `viseron/sub-skills/developer-extension/`, `viseron/references/component-capability-index.md`.

### `vit-pytorch`

Role: Routes vit-pytorch Vision Transformer model construction, variable-resolution and video inputs, pretraining wrappers, attention introspection, and package troubleshooting.
Read when: The request names `vit-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: image architectures, introspection and customization, pretraining and adaptation, and variable shapes video.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vit-pytorch/SKILL.md`, `vit-pytorch/sub-skills/image-architectures/`, `vit-pytorch/sub-skills/introspection-and-customization/`, `vit-pytorch/sub-skills/pretraining-and-adaptation/`, `vit-pytorch/sub-skills/variable-shapes-video/`, `vit-pytorch/references/api-reference.md`.

### `vlm-r1`

Role: Use VLM-R1 for multimodal GRPO training, JSONL reward/data design, VLM module extension, REC/OVD evaluation, and Ascend inference deployment.
Read when: The request names `vlm-r1` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: ascend inference, data and rewards, evaluation, model modules, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vlm-r1/SKILL.md`, `vlm-r1/sub-skills/ascend-inference/`, `vlm-r1/sub-skills/data-and-rewards/`, `vlm-r1/sub-skills/evaluation/`, `vlm-r1/sub-skills/model-modules/`, `vlm-r1/sub-skills/training-workflows/`, `vlm-r1/references/installation-and-environment.md`.

### `weighted-boxes-fusion`

Role: Route Weighted-Boxes-Fusion tasks for 2D box ensembling, 1D span fusion, and 3D cuboid fusion with ensemble_boxes.
Read when: The request names `weighted-boxes-fusion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: box ensembling, line segment fusion, and three d box fusion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `weighted-boxes-fusion/SKILL.md`, `weighted-boxes-fusion/sub-skills/box-ensembling/`, `weighted-boxes-fusion/sub-skills/line-segment-fusion/`, `weighted-boxes-fusion/sub-skills/three-d-box-fusion/`, `weighted-boxes-fusion/references/benchmark-notes.md`, `weighted-boxes-fusion/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:computer-vision-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
