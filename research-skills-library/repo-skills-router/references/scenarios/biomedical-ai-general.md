# Biomedical AI — General

## When To Read

Biomedical AI requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:biomedical-ai-general:START -->
### `attention-gated-networks`

Role: Guides Attention-Gated Networks PyTorch medical imaging workflows for ultrasound classification, attention-gated U-Net segmentation, data layout, CUDA setup, and visualization helpers.
Read when: The request names `attention-gated-networks` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification and segmentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `attention-gated-networks/SKILL.md`, `attention-gated-networks/sub-skills/classification/`, `attention-gated-networks/sub-skills/segmentation/`, `attention-gated-networks/references/package-overview.md`, `attention-gated-networks/references/repo-provenance.md`, `attention-gated-networks/references/troubleshooting.md`.

### `braindecode`

Role: Routes EEG, ECoG, MEG, and related electrophysiology deep-learning workflows through the braindecode Python package, including dataset construction, preprocessing, model training, augmentation, and interpretation.
Read when: The request names `braindecode` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: augmentation and sampling, datasets and windowing, interpretation and visualization, models and training, and preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `braindecode/SKILL.md`, `braindecode/sub-skills/augmentation-and-sampling/`, `braindecode/sub-skills/datasets-and-windowing/`, `braindecode/sub-skills/interpretation-and-visualization/`, `braindecode/sub-skills/models-and-training/`, `braindecode/sub-skills/preprocessing/`, `braindecode/references/api-reference.md`.

### `deepmedic`

Role: Guide DeepMedic 0.8.4 workflows for multi-modal 3D NIFTI medical-image segmentation, including data preparation, model configuration, training, checkpoint continuation, inference, and CPU/CUDA troubleshooting.
Read when: The request names `deepmedic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, model architecture, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepmedic/SKILL.md`, `deepmedic/sub-skills/data-preparation/`, `deepmedic/sub-skills/inference/`, `deepmedic/sub-skills/model-architecture/`, `deepmedic/sub-skills/training/`, `deepmedic/references/repo-provenance.md`.

### `dltk`

Role: Route DLTK 0.2.1 medical-imaging workflows across legacy TensorFlow 1.x data, models, Estimators, and deployment utilities.
Read when: The request names `dltk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data pipelines, inference and deployment, model building, and training and estimators.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dltk/SKILL.md`, `dltk/sub-skills/data-pipelines/`, `dltk/sub-skills/inference-and-deployment/`, `dltk/sub-skills/model-building/`, `dltk/sub-skills/training-and-estimators/`, `dltk/references/compatibility-and-installation.md`.

### `medical-detection-toolkit`

Role: Route MedicalDetectionToolkit research tasks across experiment configuration, medical-image data preparation, detector architecture, prediction/evaluation, and legacy CUDA compatibility while preserving the repository's unmaintained and version-sensitive boundaries.
Read when: The request names `medical-detection-toolkit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and experiments, cuda extensions, data and preprocessing, inference and evaluation, and models and architectures.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-detection-toolkit/SKILL.md`, `medical-detection-toolkit/sub-skills/configuration-and-experiments/`, `medical-detection-toolkit/sub-skills/cuda-extensions/`, `medical-detection-toolkit/sub-skills/data-and-preprocessing/`, `medical-detection-toolkit/sub-skills/inference-and-evaluation/`, `medical-detection-toolkit/sub-skills/models-and-architectures/`, `medical-detection-toolkit/references/repo-provenance.md`.

### `medical-sam-adapter`

Role: Use Medical-SAM-Adapter to prepare medical segmentation inputs, train SAM-family adapters, evaluate compatible checkpoints, and run the documented standalone MobileSAMv2 inference preflight.
Read when: The request names `medical-sam-adapter` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, mobile inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-sam-adapter/SKILL.md`, `medical-sam-adapter/sub-skills/data-preparation/`, `medical-sam-adapter/sub-skills/evaluation/`, `medical-sam-adapter/sub-skills/mobile-inference/`, `medical-sam-adapter/sub-skills/training/`, `medical-sam-adapter/references/repo-provenance.md`.

### `medical-zoo-pytorch`

Role: Operate MedicalZooPytorch 3D medical image segmentation, data loading, losses, training, inference, and COVID 2D classification workflows.
Read when: The request names `medical-zoo-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: covid 2d classification, data loading preprocessing, losses and metrics, and segmentation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-zoo-pytorch/SKILL.md`, `medical-zoo-pytorch/sub-skills/covid-2d-classification/`, `medical-zoo-pytorch/sub-skills/data-loading-preprocessing/`, `medical-zoo-pytorch/sub-skills/losses-and-metrics/`, `medical-zoo-pytorch/sub-skills/segmentation-workflows/`, `medical-zoo-pytorch/references/repo-provenance.md`.

### `medmnist`

Role: Use MedMNIST for standardized 2D and 3D biomedical image dataset loading, local NPZ inspection, safe export, and task-aware evaluation workflows.
Read when: The request names `medmnist` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset loading and evaluation and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medmnist/SKILL.md`, `medmnist/sub-skills/dataset-loading/`, `medmnist/sub-skills/evaluation-and-export/`, `medmnist/references/api-overview.md`, `medmnist/references/repo-provenance.md`, `medmnist/references/troubleshooting.md`.

### `medrax`

Role: Use MedRAX for chest-X-ray reasoning workflows, selective model-tool orchestration, DICOM/image preparation, Gradio interaction, and bounded ChestAgentBench evaluation with explicit resource and safety checks.
Read when: The request names `medrax` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent orchestration, benchmark evaluation, chest xray analysis, image data utilities, and web interface.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medrax/SKILL.md`, `medrax/sub-skills/agent-orchestration/`, `medrax/sub-skills/benchmark-evaluation/`, `medrax/sub-skills/chest-xray-analysis/`, `medrax/sub-skills/image-data-utilities/`, `medrax/sub-skills/web-interface/`, `medrax/references/repo-provenance.md`.

### `medsegdiff`

Role: Guide MedSegDiff medical-image segmentation workflows for dataset preparation, diffusion-model training, checkpoint sampling, ensemble aggregation, and evaluation.
Read when: The request names `medsegdiff` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medsegdiff/SKILL.md`, `medsegdiff/sub-skills/data-preparation/`, `medsegdiff/sub-skills/inference-evaluation/`, `medsegdiff/sub-skills/training/`, `medsegdiff/references/api-reference.md`, `medsegdiff/references/repo-provenance.md`.

### `mne-python`

Role: Route MNE-Python neurophysiology I/O, preprocessing, visualization, source modeling, analysis, CLI, datasets, and repository-development workflows.
Read when: The request names `mne-python` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli datasets config, io raw data, preprocessing epochs evoked, repo development, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mne-python/SKILL.md`, `mne-python/sub-skills/cli-datasets-config/`, `mne-python/sub-skills/io-raw-data/`, `mne-python/sub-skills/preprocessing-epochs-evoked/`, `mne-python/sub-skills/repo-development/`, `mne-python/sub-skills/source-modeling-inverse/`, `mne-python/references/installation-and-environment.md`.

### `moabb`

Role: Guide MOABB EEG and BCI benchmarking workflows: choose datasets, configure paradigms and sklearn pipelines, run leakage-aware evaluations, and analyze reproducible results.
Read when: The request names `moabb` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis and visualization, dataset management, evaluations and benchmarks, and paradigms and pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moabb/SKILL.md`, `moabb/sub-skills/analysis-and-visualization/`, `moabb/sub-skills/dataset-management/`, `moabb/sub-skills/evaluations-and-benchmarks/`, `moabb/sub-skills/paradigms-and-pipelines/`, `moabb/references/api-overview.md`.

### `nitrain`

Role: Routes Nitrain medical-imaging dataset, preprocessing, training, and prediction workflows.
Read when: The request names `nitrain` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets readers, models training, prediction and explanation, and preprocessing and loading.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nitrain/SKILL.md`, `nitrain/sub-skills/datasets-readers/`, `nitrain/sub-skills/models-training/`, `nitrain/sub-skills/prediction-and-explanation/`, `nitrain/sub-skills/preprocessing-and-loading/`, `nitrain/references/installation.md`.

### `pyhealth`

Role: Guides PyHealth 2.0 healthcare-AI workflows for clinical datasets, task construction, preprocessing, models, training, evaluation, medical-code mapping, and multimodal data.
Read when: The request names `pyhealth` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clinical tasks, data pipelines, evaluation interpretability, medical code text, and models training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyhealth/SKILL.md`, `pyhealth/sub-skills/clinical-tasks/`, `pyhealth/sub-skills/data-pipelines/`, `pyhealth/sub-skills/evaluation-interpretability/`, `pyhealth/sub-skills/medical-code-text/`, `pyhealth/sub-skills/models-training/`, `pyhealth/references/installation-and-environment.md`.

### `rppg-toolbox`

Role: Guide remote photoplethysmography workflows with rPPG-Toolbox, including dataset preparation, supervised and unsupervised inference, evaluation, visualization, and safe extension.
Read when: The request names `rppg-toolbox` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation and visualization, setup and config, supervised models, and unsupervised methods.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rppg-toolbox/SKILL.md`, `rppg-toolbox/sub-skills/data-preparation/`, `rppg-toolbox/sub-skills/evaluation-and-visualization/`, `rppg-toolbox/sub-skills/setup-and-config/`, `rppg-toolbox/sub-skills/supervised-models/`, `rppg-toolbox/sub-skills/unsupervised-methods/`, `rppg-toolbox/references/installation.md`.

### `stardist`

Role: Self-contained operating guidance for StarDist 0.9.2: CPU-verified 2D/3D instance segmentation, geometry/evaluation, and optional deployment integrations.
Read when: The request names `stardist` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: 2d workflows, 3d workflows, deployment integration, and evaluation geometry.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stardist/SKILL.md`, `stardist/sub-skills/2d-workflows/`, `stardist/sub-skills/3d-workflows/`, `stardist/sub-skills/deployment-integration/`, `stardist/sub-skills/evaluation-geometry/`, `stardist/references/api-overview.md`.

### `unet-plus-plus`

Role: Routes UNet++ work across the official PyTorch nnU-Net stack and the legacy Keras segmentation-models stack.
Read when: The request names `unet-plus-plus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: keras and nnunet.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `unet-plus-plus/SKILL.md`, `unet-plus-plus/sub-skills/keras/`, `unet-plus-plus/sub-skills/nnunet/`, `unet-plus-plus/references/overview.md`, `unet-plus-plus/references/repo-provenance.md`, `unet-plus-plus/references/troubleshooting.md`.

### `voxelmorph`

Role: Use VoxelMorph's current PyTorch image-registration package for dense transforms, VxmPairwise registration models, VoxelMorph data generators, and medical-volume workflow troubleshooting.
Read when: The request names `voxelmorph` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data generators, pairwise registration, and transform ops.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `voxelmorph/SKILL.md`, `voxelmorph/sub-skills/data-generators/`, `voxelmorph/sub-skills/pairwise-registration/`, `voxelmorph/sub-skills/transform-ops/`, `voxelmorph/references/install-and-compatibility.md`, `voxelmorph/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:biomedical-ai-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
