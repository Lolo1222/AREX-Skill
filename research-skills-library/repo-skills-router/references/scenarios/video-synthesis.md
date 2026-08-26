# Video Synthesis

## When To Read

Requests in the Video Synthesis family of the Generative Media area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on video synthesis.

## Repo Skill Options

<!-- DISCO_SCENARIO:video-synthesis:START -->
### `comfyui-ltxvideo`

Role: Operate ComfyUI-LTXVideo custom nodes for LTX-2 video, audio, IC-LoRA, prompt-conditioning, and advanced ComfyUI workflows.
Read when: The request names `comfyui-ltxvideo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced control, core generation, prompt conditioning, and specialized workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `comfyui-ltxvideo/SKILL.md`, `comfyui-ltxvideo/sub-skills/advanced-control/`, `comfyui-ltxvideo/sub-skills/core-generation/`, `comfyui-ltxvideo/sub-skills/prompt-conditioning/`, `comfyui-ltxvideo/sub-skills/specialized-workflows/`, `comfyui-ltxvideo/references/model-and-backend-requirements.md`.

### `eccv2022-rife`

Role: Operate ECCV2022-RIFE video frame interpolation, benchmark evaluation, and training workflows from a source checkout.
Read when: The request names `eccv2022-rife` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, interpolation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `eccv2022-rife/SKILL.md`, `eccv2022-rife/sub-skills/evaluation/`, `eccv2022-rife/sub-skills/interpolation/`, `eccv2022-rife/sub-skills/training/`, `eccv2022-rife/references/model-api.md`, `eccv2022-rife/references/repo-provenance.md`.

### `fastvideo`

Role: Use this repo-specific skill when the current task touches FastVideo source, examples, tests, docs, scripts, or the Dreamverse app. It routes work to the right FastVideo subsystem, preserves the repo's two training stacks and per-directory AGENTS rules, and chooses bounded CUDA/test verification instead of running heavyweight model jobs by default.
Read when: The request names `fastvideo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fastvideo/SKILL.md`, `fastvideo/references/pitfalls.md`, `fastvideo/references/repository-evidence.md`, `fastvideo/references/runtime-and-tests.md`, `fastvideo/scripts/select_fastvideo_tests.py`, `fastvideo/scripts/verify_fastvideo_runtime.py`.

### `helios`

Role: Route Helios video-generation, data-preparation, and training workflows.
Read when: The request names `helios` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `helios/SKILL.md`, `helios/sub-skills/data-preparation/`, `helios/sub-skills/inference/`, `helios/sub-skills/training/`, `helios/references/api-reference.md`, `helios/references/compatibility.md`.

### `hunyuan-video`

Role: Use this operating skill for Tencent-Hunyuan/HunyuanVideo text-to-video setup, checkpoint layout, inference commands, Gradio launch, and CUDA/FP8/xDiT troubleshooting.
Read when: The request names `hunyuan-video` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpoint and setup, inference, parallel and optimization, and web demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuan-video/SKILL.md`, `hunyuan-video/sub-skills/checkpoint-and-setup/`, `hunyuan-video/sub-skills/inference/`, `hunyuan-video/sub-skills/parallel-and-optimization/`, `hunyuan-video/sub-skills/web-demo/`, `hunyuan-video/references/architecture-and-models.md`.

### `hunyuanvideo-i2v`

Role: Guides HunyuanVideo-I2V image-to-video inference, LoRA training, and latent-extraction workflows, including checkpoint setup, CUDA/flash-attn requirements, and the safe bundled checks for this repository.
Read when: The request names `hunyuanvideo-i2v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and lora training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuanvideo-i2v/SKILL.md`, `hunyuanvideo-i2v/sub-skills/data-preparation/`, `hunyuanvideo-i2v/sub-skills/inference/`, `hunyuanvideo-i2v/sub-skills/lora-training/`, `hunyuanvideo-i2v/references/checkpoints.md`, `hunyuanvideo-i2v/references/model-overview.md`.

### `imagen-pytorch`

Role: Routes Imagen-Pytorch workflows for image and video diffusion, config-driven training, and CLI usage.
Read when: The request names `imagen-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and cli, data and text conditioning, image generation, training and checkpointing, and video and inpainting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imagen-pytorch/SKILL.md`, `imagen-pytorch/sub-skills/configuration-and-cli/`, `imagen-pytorch/sub-skills/data-and-text-conditioning/`, `imagen-pytorch/sub-skills/image-generation/`, `imagen-pytorch/sub-skills/training-and-checkpointing/`, `imagen-pytorch/sub-skills/video-and-inpainting/`, `imagen-pytorch/references/api-overview.md`.

### `latent-sync`

Role: Route LatentSync video generation, raw-video preprocessing, training, and evaluation workflows to the right sub-skill.
Read when: The request names `latent-sync` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `latent-sync/SKILL.md`, `latent-sync/sub-skills/data-preparation/`, `latent-sync/sub-skills/evaluation/`, `latent-sync/sub-skills/inference/`, `latent-sync/sub-skills/training/`, `latent-sync/references/api-reference.md`.

### `light-x2v`

Role: Routes LightX2V generation, serving, disaggregation, and weight-preparation workflows.
Read when: The request names `light-x2v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, disagg, inference, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `light-x2v/SKILL.md`, `light-x2v/sub-skills/conversion/`, `light-x2v/sub-skills/disagg/`, `light-x2v/sub-skills/inference/`, `light-x2v/sub-skills/serving/`, `light-x2v/references/overview.md`.

### `ltx-2`

Role: Routes LTX-2 audio-video generation, training, data preparation, core APIs, and performance-backend tasks across the ltx-core, ltx-pipelines, ltx-trainer, and ltx-kernels packages.
Read when: The request names `ltx-2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core components, data preparation, inference pipelines, performance backends, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ltx-2/SKILL.md`, `ltx-2/sub-skills/core-components/`, `ltx-2/sub-skills/data-preparation/`, `ltx-2/sub-skills/inference-pipelines/`, `ltx-2/sub-skills/performance-backends/`, `ltx-2/sub-skills/training-workflows/`, `ltx-2/references/model-assets.md`.

### `ltx-video`

Role: Routes LTX-Video local inference, model/config selection, and direct pipeline/component diagnostics.
Read when: The request names `ltx-video` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: local inference, model configs, and pipeline components.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ltx-video/SKILL.md`, `ltx-video/sub-skills/local-inference/`, `ltx-video/sub-skills/model-configs/`, `ltx-video/sub-skills/pipeline-components/`, `ltx-video/references/development-and-tests.md`, `ltx-video/references/repo-provenance.md`.

### `magi-1`

Role: Operate MAGI-1 autoregressive video generation inference, ComfyUI nodes, configs, and prompt enhancement assets.
Read when: The request names `magi-1` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: comfyui and inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `magi-1/SKILL.md`, `magi-1/sub-skills/comfyui/`, `magi-1/sub-skills/inference/`, `magi-1/references/dify-prompt-enhancement.md`, `magi-1/references/installation-and-assets.md`, `magi-1/references/model-and-config-overview.md`.

### `mimicmotion`

Role: Routes MimicMotion's CUDA-first local inference and Cog deployment workflows, including runtime preflight checks, sample-config generation, and MP4 output.
Read when: The request names `mimicmotion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mimicmotion/SKILL.md`, `mimicmotion/references/api-reference.md`, `mimicmotion/references/configuration.md`, `mimicmotion/references/environment.md`, `mimicmotion/references/repo-provenance.md`, `mimicmotion/references/troubleshooting.md`.

### `motus`

Role: Use Motus, a unified latent-action world model, for robot-video/action data preparation, CUDA inference, RoboTwin evaluation, and distributed training configuration.
Read when: The request names `motus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `motus/SKILL.md`, `motus/sub-skills/data-preparation/`, `motus/sub-skills/model-inference/`, `motus/sub-skills/training/`, `motus/references/repo-provenance.md`, `motus/references/troubleshooting.md`.

### `paddle-gan`

Role: Route PaddleGAN tasks to focused workflows for setup, data, training, media applications, and deployment.
Read when: The request names `paddle-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, deployment export, image and face apps, training configs, and video and audio apps.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddle-gan/SKILL.md`, `paddle-gan/sub-skills/data-preparation/`, `paddle-gan/sub-skills/deployment-export/`, `paddle-gan/sub-skills/image-and-face-apps/`, `paddle-gan/sub-skills/training-configs/`, `paddle-gan/sub-skills/video-and-audio-apps/`, `paddle-gan/references/install-and-setup.md`.

### `pyramid-flow`

Role: Use Pyramid-Flow for video generation, data precomputation, Causal Video VAE, distributed training, and reusable model-component inspection.
Read when: The request names `pyramid-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core components, data preparation, generation inference, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyramid-flow/SKILL.md`, `pyramid-flow/sub-skills/core-components/`, `pyramid-flow/sub-skills/data-preparation/`, `pyramid-flow/sub-skills/generation-inference/`, `pyramid-flow/sub-skills/training-workflows/`, `pyramid-flow/references/installation.md`.

### `sana`

Role: Use and maintain Sana image, video, training, evaluation, and deployment workflows.
Read when: The request names `sana` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation conversion deployment, image generation, training data configs, and video world streaming.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sana/SKILL.md`, `sana/sub-skills/evaluation-conversion-deployment/`, `sana/sub-skills/image-generation/`, `sana/sub-skills/training-data-configs/`, `sana/sub-skills/video-world-streaming/`, `sana/references/repo-provenance.md`.

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

### `stable-diffusion-videos`

Role: Routes Stable Diffusion video, image, audio-synced interpolation, optional upsampling, and Gradio UI workflows for the stable_diffusion_videos package.
Read when: The request names `stable-diffusion-videos` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generation and ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stable-diffusion-videos/SKILL.md`, `stable-diffusion-videos/sub-skills/generation/`, `stable-diffusion-videos/sub-skills/ui/`, `stable-diffusion-videos/references/api-reference.md`, `stable-diffusion-videos/references/repo-provenance.md`, `stable-diffusion-videos/references/troubleshooting.md`.

### `turbo-diffusion`

Role: Use TurboDiffusion for accelerated Wan video generation, interactive serving, checkpoint conversion, CUDA acceleration backends, and TurboT2AV extension planning.
Read when: The request names `turbo-diffusion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acceleration backends, interactive serving, training and checkpoints, turbot2av extension, and video inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `turbo-diffusion/SKILL.md`, `turbo-diffusion/sub-skills/acceleration-backends/`, `turbo-diffusion/sub-skills/interactive-serving/`, `turbo-diffusion/sub-skills/training-and-checkpoints/`, `turbo-diffusion/sub-skills/turbot2av-extension/`, `turbo-diffusion/sub-skills/video-inference/`, `turbo-diffusion/references/installation-and-backends.md`.

### `vgen`

Role: Route VGen video-generation workflows for text-to-video, image-to-video, DreamVideo customization, and InstructVideo reward fine-tuning.
Read when: The request names `vgen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dreamvideo, image to video, instructvideo, and text to video.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vgen/SKILL.md`, `vgen/sub-skills/dreamvideo/`, `vgen/sub-skills/image-to-video/`, `vgen/sub-skills/instructvideo/`, `vgen/sub-skills/text-to-video/`, `vgen/references/configuration.md`.

### `vllm-omni`

Role: Use vLLM-Omni for omni-modality model inference and serving: local Omni APIs, OpenAI-compatible --omni servers, stage deploy configs, model recipes, and model integration workflows.
Read when: The request names `vllm-omni` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model integration, model recipes, offline inference, online serving, and stage configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vllm-omni/SKILL.md`, `vllm-omni/sub-skills/model-integration/`, `vllm-omni/sub-skills/model-recipes/`, `vllm-omni/sub-skills/offline-inference/`, `vllm-omni/sub-skills/online-serving/`, `vllm-omni/sub-skills/stage-configuration/`, `vllm-omni/references/install-and-backends.md`.

<!-- DISCO_SCENARIO:video-synthesis:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
