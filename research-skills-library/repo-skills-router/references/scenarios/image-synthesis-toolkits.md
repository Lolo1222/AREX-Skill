# Image Synthesis Toolkits

## When To Read

Requests in the Image Synthesis Toolkits family of the Generative Media area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on image synthesis toolkits.

## Repo Skill Options

<!-- DISCO_SCENARIO:image-synthesis-toolkits:START -->
### `biggan-pytorch`

Role: Guides CUDA-based BigGAN-PyTorch training, checkpoint sampling, dataset preparation, metric preparation, model customization, and optional TensorFlow Hub weight conversion.
Read when: The request names `biggan-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, sampling, tfhub conversion, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `biggan-pytorch/SKILL.md`, `biggan-pytorch/sub-skills/data-preparation/`, `biggan-pytorch/sub-skills/sampling/`, `biggan-pytorch/sub-skills/tfhub-conversion/`, `biggan-pytorch/sub-skills/training/`, `biggan-pytorch/references/model-overview.md`.

### `contrastive-unpaired-translation`

Role: Routes CUT/FastCUT/SinCUT workflows, dataset preparation, and launcher presets for the contrastive-unpaired-translation repository.
Read when: The request names `contrastive-unpaired-translation` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, experiment launchers, and translation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `contrastive-unpaired-translation/SKILL.md`, `contrastive-unpaired-translation/sub-skills/data-preparation/`, `contrastive-unpaired-translation/sub-skills/experiment-launchers/`, `contrastive-unpaired-translation/sub-skills/translation-workflows/`, `contrastive-unpaired-translation/references/repo-provenance.md`, `contrastive-unpaired-translation/references/troubleshooting.md`.

### `dalle2-pytorch`

Role: Use the DALLE2-pytorch package for DALL-E 2 style text-to-image model APIs, diffusion prior/decoder training, WebDataset data layouts, and tracker/checkpoint workflows.
Read when: The request names `dalle2-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and tracking, generation and api, and training and configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dalle2-pytorch/SKILL.md`, `dalle2-pytorch/sub-skills/data-and-tracking/`, `dalle2-pytorch/sub-skills/generation-and-api/`, `dalle2-pytorch/sub-skills/training-and-configs/`, `dalle2-pytorch/references/repo-provenance.md`, `dalle2-pytorch/references/troubleshooting.md`.

### `denoising-diffusion-pytorch`

Role: Use denoising-diffusion-pytorch for PyTorch DDPM/DDIM image diffusion, 1D sequence diffusion, conditioning and guidance, and advanced diffusion variants.
Read when: The request names `denoising-diffusion-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced variants, conditioning guidance, image diffusion, and sequence diffusion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `denoising-diffusion-pytorch/SKILL.md`, `denoising-diffusion-pytorch/sub-skills/advanced-variants/`, `denoising-diffusion-pytorch/sub-skills/conditioning-guidance/`, `denoising-diffusion-pytorch/sub-skills/image-diffusion/`, `denoising-diffusion-pytorch/sub-skills/sequence-diffusion/`, `denoising-diffusion-pytorch/references/package-overview.md`.

### `i-gan`

Role: Operate the legacy iGAN repository for interactive GAN image generation, constrained synthesis, image projection, model artifacts, and DCGAN training workflows.
Read when: The request names `i-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: constraint generation, image projection, interactive ui, model inference, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `i-gan/SKILL.md`, `i-gan/sub-skills/constraint-generation/`, `i-gan/sub-skills/image-projection/`, `i-gan/sub-skills/interactive-ui/`, `i-gan/sub-skills/model-inference/`, `i-gan/sub-skills/training-data/`, `i-gan/references/repo-provenance.md`.

### `imagen-pytorch`

Role: Routes Imagen-Pytorch workflows for image and video diffusion, config-driven training, and CLI usage.
Read when: The request names `imagen-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and cli, data and text conditioning, image generation, training and checkpointing, and video and inpainting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imagen-pytorch/SKILL.md`, `imagen-pytorch/sub-skills/configuration-and-cli/`, `imagen-pytorch/sub-skills/data-and-text-conditioning/`, `imagen-pytorch/sub-skills/image-generation/`, `imagen-pytorch/sub-skills/training-and-checkpointing/`, `imagen-pytorch/sub-skills/video-and-inpainting/`, `imagen-pytorch/references/api-overview.md`.

### `keras-gan`

Role: Use Keras-GAN legacy Keras/TensorFlow GAN scripts for image generation, image-to-image translation, inpainting, PixelDA, and SRGAN workflows with safe inspection and troubleshooting.
Read when: The request names `keras-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: domain and restoration, image translation, and mnist generators.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-gan/SKILL.md`, `keras-gan/sub-skills/domain-and-restoration/`, `keras-gan/sub-skills/image-translation/`, `keras-gan/sub-skills/mnist-generators/`, `keras-gan/references/compatibility-and-install.md`, `keras-gan/references/model-catalog.md`.

### `light-x2v`

Role: Routes LightX2V generation, serving, disaggregation, and weight-preparation workflows.
Read when: The request names `light-x2v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, disagg, inference, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `light-x2v/SKILL.md`, `light-x2v/sub-skills/conversion/`, `light-x2v/sub-skills/disagg/`, `light-x2v/sub-skills/inference/`, `light-x2v/sub-skills/serving/`, `light-x2v/references/overview.md`.

### `mmgeneration`

Role: Routes MMGeneration tasks across sampling, training, evaluation, configuration, and latent-editing workflows.
Read when: The request names `mmgeneration` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: applications and deployment, configuration and extension, evaluation and metrics, inference and sampling, and training and distribution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmgeneration/SKILL.md`, `mmgeneration/sub-skills/applications-and-deployment/`, `mmgeneration/sub-skills/configuration-and-extension/`, `mmgeneration/sub-skills/evaluation-and-metrics/`, `mmgeneration/sub-skills/inference-and-sampling/`, `mmgeneration/sub-skills/training-and-distribution/`, `mmgeneration/references/api-reference.md`.

### `paddle-gan`

Role: Route PaddleGAN tasks to focused workflows for setup, data, training, media applications, and deployment.
Read when: The request names `paddle-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, deployment export, image and face apps, training configs, and video and audio apps.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddle-gan/SKILL.md`, `paddle-gan/sub-skills/data-preparation/`, `paddle-gan/sub-skills/deployment-export/`, `paddle-gan/sub-skills/image-and-face-apps/`, `paddle-gan/sub-skills/training-configs/`, `paddle-gan/sub-skills/video-and-audio-apps/`, `paddle-gan/references/install-and-setup.md`.

### `py-torch-studio-gan`

Role: Use PyTorch-StudioGAN for GAN image-synthesis training, YAML configuration, checkpoint sampling and analysis, and IS/FID/PRDC evaluation workflows.
Read when: The request names `py-torch-studio-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation metrics, sampling and analysis, and training and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `py-torch-studio-gan/SKILL.md`, `py-torch-studio-gan/sub-skills/evaluation-metrics/`, `py-torch-studio-gan/sub-skills/sampling-and-analysis/`, `py-torch-studio-gan/sub-skills/training-and-configuration/`, `py-torch-studio-gan/references/repo-overview.md`, `py-torch-studio-gan/references/repo-provenance.md`.

### `simple-tuner`

Role: Use SimpleTuner for diffusion model training, dataloaders, model/adaptor tooling, WebUI/API operations, and repository maintenance.
Read when: The request names `simple-tuner` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and config, model and adapter tooling, repo development, training workflows, and webui and operations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `simple-tuner/SKILL.md`, `simple-tuner/sub-skills/data-and-config/`, `simple-tuner/sub-skills/model-and-adapter-tooling/`, `simple-tuner/sub-skills/repo-development/`, `simple-tuner/sub-skills/training-workflows/`, `simple-tuner/sub-skills/webui-and-operations/`, `simple-tuner/references/install-and-entrypoints.md`.

### `stability-ai-generative-models`

Role: Use Stability AI's generative-models package for SDXL inference APIs, SVD/SV3D/SV4D video sampling, config-driven training, demos, and watermarking workflows.
Read when: The request names `stability-ai-generative-models` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demos and watermarking, inference api, training and configs, and video sampling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stability-ai-generative-models/SKILL.md`, `stability-ai-generative-models/sub-skills/demos-and-watermarking/`, `stability-ai-generative-models/sub-skills/inference-api/`, `stability-ai-generative-models/sub-skills/training-and-configs/`, `stability-ai-generative-models/sub-skills/video-sampling/`, `stability-ai-generative-models/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:image-synthesis-toolkits:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
