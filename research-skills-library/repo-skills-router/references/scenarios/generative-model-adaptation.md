# Generative Model Adaptation

## When To Read

Requests in the Generative Model Adaptation family of the Generative Media area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on generative model adaptation.

## Repo Skill Options

<!-- DISCO_SCENARIO:generative-model-adaptation:START -->
### `any-door`

Role: Routes AnyDoor zero-shot object-level image customization workflows.
Read when: The request names `any-door` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and training, inference and demo, and setup and checkpoints.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `any-door/SKILL.md`, `any-door/sub-skills/data-and-training/`, `any-door/sub-skills/inference-and-demo/`, `any-door/sub-skills/setup-and-checkpoints/`, `any-door/references/checkpoints-and-configs.md`, `any-door/references/environment-and-installation.md`.

### `biggan-pytorch`

Role: Guides CUDA-based BigGAN-PyTorch training, checkpoint sampling, dataset preparation, metric preparation, model customization, and optional TensorFlow Hub weight conversion.
Read when: The request names `biggan-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, sampling, tfhub conversion, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `biggan-pytorch/SKILL.md`, `biggan-pytorch/sub-skills/data-preparation/`, `biggan-pytorch/sub-skills/sampling/`, `biggan-pytorch/sub-skills/tfhub-conversion/`, `biggan-pytorch/sub-skills/training/`, `biggan-pytorch/references/model-overview.md`.

### `custom-diffusion`

Role: Route Custom Diffusion workflows for concept data prep, diffusers training and SDXL, sample generation, delta tools, and CustomConcept101 evaluation.
Read when: The request names `custom-diffusion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarking, checkpoint tools, data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `custom-diffusion/SKILL.md`, `custom-diffusion/sub-skills/benchmarking/`, `custom-diffusion/sub-skills/checkpoint-tools/`, `custom-diffusion/sub-skills/data-preparation/`, `custom-diffusion/sub-skills/inference/`, `custom-diffusion/sub-skills/training/`, `custom-diffusion/references/repo-provenance.md`.

### `fast-style-transfer`

Role: Guides TensorFlow Fast Style Transfer training, image stylization, and video stylization workflows from checkpoints, VGG/COCO assets, and script-oriented CLIs.
Read when: The request names `fast-style-transfer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: image stylization, training, and video stylization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fast-style-transfer/SKILL.md`, `fast-style-transfer/sub-skills/image-stylization/`, `fast-style-transfer/sub-skills/training/`, `fast-style-transfer/sub-skills/video-stylization/`, `fast-style-transfer/references/repo-provenance.md`, `fast-style-transfer/references/setup-and-assets.md`.

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

### `hunyuanvideo-i2v`

Role: Guides HunyuanVideo-I2V image-to-video inference, LoRA training, and latent-extraction workflows, including checkpoint setup, CUDA/flash-attn requirements, and the safe bundled checks for this repository.
Read when: The request names `hunyuanvideo-i2v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and lora training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuanvideo-i2v/SKILL.md`, `hunyuanvideo-i2v/sub-skills/data-preparation/`, `hunyuanvideo-i2v/sub-skills/inference/`, `hunyuanvideo-i2v/sub-skills/lora-training/`, `hunyuanvideo-i2v/references/checkpoints.md`, `hunyuanvideo-i2v/references/model-overview.md`.

### `ic-edit`

Role: Route ICEdit image-editing, Gradio demo, and LoRA training workflows.
Read when: The request names `ic-edit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: gradio, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ic-edit/SKILL.md`, `ic-edit/sub-skills/gradio/`, `ic-edit/sub-skills/inference/`, `ic-edit/sub-skills/training/`, `ic-edit/references/installation.md`, `ic-edit/references/model-assets.md`.

### `img2img-turbo`

Role: Route img2img-turbo paired and unpaired image-to-image translation, training, dataset validation, and CUDA troubleshooting.
Read when: The request names `img2img-turbo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: paired inference, training, and unpaired inference.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `img2img-turbo/SKILL.md`, `img2img-turbo/sub-skills/paired-inference/`, `img2img-turbo/sub-skills/training/`, `img2img-turbo/sub-skills/unpaired-inference/`, `img2img-turbo/references/installation-and-environment.md`, `img2img-turbo/references/model-overview.md`.

### `latent-sync`

Role: Route LatentSync video generation, raw-video preprocessing, training, and evaluation workflows to the right sub-skill.
Read when: The request names `latent-sync` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `latent-sync/SKILL.md`, `latent-sync/sub-skills/data-preparation/`, `latent-sync/sub-skills/evaluation/`, `latent-sync/sub-skills/inference/`, `latent-sync/sub-skills/training/`, `latent-sync/references/api-reference.md`.

### `ltx-2`

Role: Routes LTX-2 audio-video generation, training, data preparation, core APIs, and performance-backend tasks across the ltx-core, ltx-pipelines, ltx-trainer, and ltx-kernels packages.
Read when: The request names `ltx-2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core components, data preparation, inference pipelines, performance backends, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ltx-2/SKILL.md`, `ltx-2/sub-skills/core-components/`, `ltx-2/sub-skills/data-preparation/`, `ltx-2/sub-skills/inference-pipelines/`, `ltx-2/sub-skills/performance-backends/`, `ltx-2/sub-skills/training-workflows/`, `ltx-2/references/model-assets.md`.

### `lumina-t2x`

Role: Routes Lumina-T2X tasks across text-to-image generation, image training, audio/music demos, visual anagrams, and ImageNet benchmark training.
Read when: The request names `lumina-t2x` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio music, image generation, image training, imagenet training, and visual anagrams.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lumina-t2x/SKILL.md`, `lumina-t2x/sub-skills/audio-music/`, `lumina-t2x/sub-skills/image-generation/`, `lumina-t2x/sub-skills/image-training/`, `lumina-t2x/sub-skills/imagenet-training/`, `lumina-t2x/sub-skills/visual-anagrams/`, `lumina-t2x/references/overview.md`.

### `mmaudio`

Role: Route MMAudio video-to-audio, text-to-audio, data preparation, CUDA training, and evaluation workflows.
Read when: The request names `mmaudio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmaudio/SKILL.md`, `mmaudio/sub-skills/data-preparation/`, `mmaudio/sub-skills/evaluation/`, `mmaudio/sub-skills/inference/`, `mmaudio/sub-skills/training/`, `mmaudio/references/configuration.md`.

### `moss-tts`

Role: Route MOSS-TTS family speech, voice-agent, sound-effect, llama.cpp, streaming, and fine-tuning workflows.
Read when: The request names `moss-tts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: finetuning data prep, hf family workflows, llama cpp backend, local v15 streaming, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moss-tts/SKILL.md`, `moss-tts/sub-skills/finetuning-data-prep/`, `moss-tts/sub-skills/hf-family-workflows/`, `moss-tts/sub-skills/llama-cpp-backend/`, `moss-tts/sub-skills/local-v15-streaming/`, `moss-tts/sub-skills/realtime-voice-agent/`, `moss-tts/references/installation-profiles.md`.

### `nunchaku`

Role: Route and operate the Nunchaku repo skill for CUDA-accelerated 4-bit Diffusers image-generation workflows, quantized transformers, LoRA/adapters, and performance controls.
Read when: The request names `nunchaku` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: flux pipelines, lora and adapters, performance and memory, qwen image workflows, and sana zimage sdxl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nunchaku/SKILL.md`, `nunchaku/sub-skills/flux-pipelines/`, `nunchaku/sub-skills/lora-and-adapters/`, `nunchaku/sub-skills/performance-and-memory/`, `nunchaku/sub-skills/qwen-image-workflows/`, `nunchaku/sub-skills/sana-zimage-sdxl/`, `nunchaku/references/api-and-entrypoints.md`.

### `photo2cartoon`

Role: Guide Photo2Cartoon portrait cartoonization workflows: assets, preprocessing, PyTorch or ONNX inference, dataset preparation, GAN training, model internals, and troubleshooting.
Read when: The request names `photo2cartoon` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and training, model internals, portrait inference, and preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `photo2cartoon/SKILL.md`, `photo2cartoon/sub-skills/data-and-training/`, `photo2cartoon/sub-skills/model-internals/`, `photo2cartoon/sub-skills/portrait-inference/`, `photo2cartoon/sub-skills/preprocessing/`, `photo2cartoon/references/repo-provenance.md`.

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

<!-- DISCO_SCENARIO:generative-model-adaptation:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
