# Generative Media — General

## When To Read

Generative Media requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:generative-media-general:START -->
### `audio-diffusion-pytorch`

Role: Use audio-diffusion-pytorch for PyTorch waveform diffusion generators, text-conditioned audio generation, inpainting, upsampling, vocoding, and diffusion autoencoding.
Read when: The request names `audio-diffusion-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conditioning and generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `audio-diffusion-pytorch/SKILL.md`, `audio-diffusion-pytorch/sub-skills/conditioning/`, `audio-diffusion-pytorch/sub-skills/generation/`, `audio-diffusion-pytorch/references/repo-provenance.md`, `audio-diffusion-pytorch/references/troubleshooting.md`, `audio-diffusion-pytorch/scripts/check_install.py`.

### `comfyui-ltxvideo`

Role: Operate ComfyUI-LTXVideo custom nodes for LTX-2 video, audio, IC-LoRA, prompt-conditioning, and advanced ComfyUI workflows.
Read when: The request names `comfyui-ltxvideo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced control, core generation, prompt conditioning, and specialized workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `comfyui-ltxvideo/SKILL.md`, `comfyui-ltxvideo/sub-skills/advanced-control/`, `comfyui-ltxvideo/sub-skills/core-generation/`, `comfyui-ltxvideo/sub-skills/prompt-conditioning/`, `comfyui-ltxvideo/sub-skills/specialized-workflows/`, `comfyui-ltxvideo/references/model-and-backend-requirements.md`.

### `dalle-pytorch`

Role: Operate lucidrains DALLE-pytorch for DALL-E style VAE training, transformer training, generation, CLIP ranking, and backend troubleshooting.
Read when: The request names `dalle-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dalle training, distributed and backends, generation and ranking, and vae training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dalle-pytorch/SKILL.md`, `dalle-pytorch/sub-skills/dalle-training/`, `dalle-pytorch/sub-skills/distributed-and-backends/`, `dalle-pytorch/sub-skills/generation-and-ranking/`, `dalle-pytorch/sub-skills/vae-training/`, `dalle-pytorch/references/api-reference.md`.

### `deep-motion-editing`

Role: Guides DeepMotionEditing BVH animation, skeleton-aware motion retargeting, motion style transfer, and Blender visualization workflows for research use.
Read when: The request names `deep-motion-editing` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: animation data, blender visualization, motion retargeting, and motion style transfer.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-motion-editing/SKILL.md`, `deep-motion-editing/sub-skills/animation-data/`, `deep-motion-editing/sub-skills/blender-visualization/`, `deep-motion-editing/sub-skills/motion-retargeting/`, `deep-motion-editing/sub-skills/motion-style-transfer/`, `deep-motion-editing/references/architecture-overview.md`.

### `deepjazz`

Role: Use deepjazz for legacy MIDI jazz generation with music21 preprocessing, abstract grammar tokens, Keras/Theano LSTM training, safe diagnostics, and modernization guidance.
Read when: The request names `deepjazz` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: grammar and qa, lstm generation, and midi preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepjazz/SKILL.md`, `deepjazz/sub-skills/grammar-and-qa/`, `deepjazz/sub-skills/lstm-generation/`, `deepjazz/sub-skills/midi-preprocessing/`, `deepjazz/references/dependency-environment.md`, `deepjazz/references/repo-provenance.md`.

### `denoising-diffusion-pytorch`

Role: Use denoising-diffusion-pytorch for PyTorch DDPM/DDIM image diffusion, 1D sequence diffusion, conditioning and guidance, and advanced diffusion variants.
Read when: The request names `denoising-diffusion-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced variants, conditioning guidance, image diffusion, and sequence diffusion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `denoising-diffusion-pytorch/SKILL.md`, `denoising-diffusion-pytorch/sub-skills/advanced-variants/`, `denoising-diffusion-pytorch/sub-skills/conditioning-guidance/`, `denoising-diffusion-pytorch/sub-skills/image-diffusion/`, `denoising-diffusion-pytorch/sub-skills/sequence-diffusion/`, `denoising-diffusion-pytorch/references/package-overview.md`.

### `dpm-solver`

Role: Use DPM-Solver and DPM-Solver++ single-file samplers for diffusion ODE sampling, PyTorch/JAX integration, ScoreSDE/DDPM examples, and Stable Diffusion acceleration.
Read when: The request names `dpm-solver` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core api, jax examples, stable diffusion, and torch examples.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dpm-solver/SKILL.md`, `dpm-solver/sub-skills/core-api/`, `dpm-solver/sub-skills/jax-examples/`, `dpm-solver/sub-skills/stable-diffusion/`, `dpm-solver/sub-skills/torch-examples/`, `dpm-solver/references/api-summary.md`.

### `dream-textures`

Role: Use and troubleshoot the Dream Textures Blender add-on for Stable Diffusion image generation, texture projection, render passes, model setup, and backend APIs.
Read when: The request names `dream-textures` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and api, generation workflows, scene integration, and setup and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dream-textures/SKILL.md`, `dream-textures/sub-skills/backend-and-api/`, `dream-textures/sub-skills/generation-workflows/`, `dream-textures/sub-skills/scene-integration/`, `dream-textures/sub-skills/setup-and-models/`, `dream-textures/references/repo-provenance.md`.

### `dreamcraft3d`

Role: Use DreamCraft3D for image-conditioned 3D generation, staged optimization, texture boosting, export, and CUDA troubleshooting.
Read when: The request names `dreamcraft3d` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bootstrapped texture, export and evaluation, generation pipeline, image preparation, and interfaces and monitoring.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamcraft3d/SKILL.md`, `dreamcraft3d/sub-skills/bootstrapped-texture/`, `dreamcraft3d/sub-skills/export-and-evaluation/`, `dreamcraft3d/sub-skills/generation-pipeline/`, `dreamcraft3d/sub-skills/image-preparation/`, `dreamcraft3d/sub-skills/interfaces-and-monitoring/`, `dreamcraft3d/references/config-reference.md`.

### `gaussian-slam`

Role: Use Gaussian-SLAM for CUDA RGB-D dense SLAM, Gaussian-splatting mapping, dataset/configuration preflight, checkpoint evaluation, reconstruction metrics, and global-map refinement.
Read when: The request names `gaussian-slam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and configuration, evaluation and mapping, and slam runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gaussian-slam/SKILL.md`, `gaussian-slam/sub-skills/datasets-and-configuration/`, `gaussian-slam/sub-skills/evaluation-and-mapping/`, `gaussian-slam/sub-skills/slam-runtime/`, `gaussian-slam/references/repo-provenance.md`, `gaussian-slam/references/troubleshooting.md`.

### `gaussian-splatting`

Role: Routes official 3D Gaussian Splatting setup, data preparation, training, rendering, evaluation, and viewer workflows.
Read when: The request names `gaussian-splatting` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, rendering evaluation, setup and backends, training, and viewers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gaussian-splatting/SKILL.md`, `gaussian-splatting/sub-skills/data-preparation/`, `gaussian-splatting/sub-skills/rendering-evaluation/`, `gaussian-splatting/sub-skills/setup-and-backends/`, `gaussian-splatting/sub-skills/training/`, `gaussian-splatting/sub-skills/viewers/`, `gaussian-splatting/references/repo-provenance.md`.

### `helios`

Role: Route Helios video-generation, data-preparation, and training workflows.
Read when: The request names `helios` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `helios/SKILL.md`, `helios/sub-skills/data-preparation/`, `helios/sub-skills/inference/`, `helios/sub-skills/training/`, `helios/references/api-reference.md`, `helios/references/compatibility.md`.

### `hunyuan3d-2`

Role: Route Hunyuan3D-2 repo-specific shape, texture, service, and backend workflows.
Read when: The request names `hunyuan3d-2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: environment and model setup, services and integrations, shape generation, and texture and mesh.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuan3d-2/SKILL.md`, `hunyuan3d-2/sub-skills/environment-and-model-setup/`, `hunyuan3d-2/sub-skills/services-and-integrations/`, `hunyuan3d-2/sub-skills/shape-generation/`, `hunyuan3d-2/sub-skills/texture-and-mesh/`, `hunyuan3d-2/references/repo-provenance.md`.

### `kaolin`

Role: Route NVIDIA Kaolin repository workflows for 3D deep learning geometry I/O, operations, rendering, physics, visualization, installation, and backend troubleshooting.
Read when: The request names `kaolin` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: geometry io representations, ops metrics conversions, physics simulation, rendering cameras lighting, and visualization workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kaolin/SKILL.md`, `kaolin/sub-skills/geometry-io-representations/`, `kaolin/sub-skills/ops-metrics-conversions/`, `kaolin/sub-skills/physics-simulation/`, `kaolin/sub-skills/rendering-cameras-lighting/`, `kaolin/sub-skills/visualization-workflows/`, `kaolin/references/api-overview.md`.

### `latent-sync`

Role: Route LatentSync video generation, raw-video preprocessing, training, and evaluation workflows to the right sub-skill.
Read when: The request names `latent-sync` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `latent-sync/SKILL.md`, `latent-sync/sub-skills/data-preparation/`, `latent-sync/sub-skills/evaluation/`, `latent-sync/sub-skills/inference/`, `latent-sync/sub-skills/training/`, `latent-sync/references/api-reference.md`.

### `llamagen`

Role: Router for LlamaGen autoregressive image-generation workflows, including tokenizers, data preparation, class-conditional generation, and text-conditional generation.
Read when: The request names `llamagen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: class conditional, data preparation, text conditional, and tokenizers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llamagen/SKILL.md`, `llamagen/sub-skills/class-conditional/`, `llamagen/sub-skills/data-preparation/`, `llamagen/sub-skills/text-conditional/`, `llamagen/sub-skills/tokenizers/`, `llamagen/references/repo-provenance.md`.

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

### `lumina-t2x`

Role: Routes Lumina-T2X tasks across text-to-image generation, image training, audio/music demos, visual anagrams, and ImageNet benchmark training.
Read when: The request names `lumina-t2x` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio music, image generation, image training, imagenet training, and visual anagrams.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lumina-t2x/SKILL.md`, `lumina-t2x/sub-skills/audio-music/`, `lumina-t2x/sub-skills/image-generation/`, `lumina-t2x/sub-skills/image-training/`, `lumina-t2x/sub-skills/imagenet-training/`, `lumina-t2x/sub-skills/visual-anagrams/`, `lumina-t2x/references/overview.md`.

### `make-it-3d`

Role: Use this repo skill for Make-It-3D single-image 3D creation, including CUDA asset setup, alpha-image validation, coarse NeRF optimization, refinement, rendering, export, and troubleshooting.
Read when: The request names `make-it-3d` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: coarse training, environment and inputs, and refinement and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `make-it-3d/SKILL.md`, `make-it-3d/sub-skills/coarse-training/`, `make-it-3d/sub-skills/environment-and-inputs/`, `make-it-3d/sub-skills/refinement-and-export/`, `make-it-3d/references/backend-and-assets.md`, `make-it-3d/references/quickstart.md`.

### `mmaudio`

Role: Route MMAudio video-to-audio, text-to-audio, data preparation, CUDA training, and evaluation workflows.
Read when: The request names `mmaudio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmaudio/SKILL.md`, `mmaudio/sub-skills/data-preparation/`, `mmaudio/sub-skills/evaluation/`, `mmaudio/sub-skills/inference/`, `mmaudio/sub-skills/training/`, `mmaudio/references/configuration.md`.

### `mmgeneration`

Role: Routes MMGeneration tasks across sampling, training, evaluation, configuration, and latent-editing workflows.
Read when: The request names `mmgeneration` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: applications and deployment, configuration and extension, evaluation and metrics, inference and sampling, and training and distribution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mmgeneration/SKILL.md`, `mmgeneration/sub-skills/applications-and-deployment/`, `mmgeneration/sub-skills/configuration-and-extension/`, `mmgeneration/sub-skills/evaluation-and-metrics/`, `mmgeneration/sub-skills/inference-and-sampling/`, `mmgeneration/sub-skills/training-and-distribution/`, `mmgeneration/references/api-reference.md`.

### `mono-gs`

Role: Use MonoGS for CUDA Gaussian-splatting SLAM, dataset/config setup, offline evaluation, and RealSense live demos.
Read when: The request names `mono-gs` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configs, environment setup, evaluation and results, live demo, and offline slam.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mono-gs/SKILL.md`, `mono-gs/sub-skills/data-and-configs/`, `mono-gs/sub-skills/environment-setup/`, `mono-gs/sub-skills/evaluation-and-results/`, `mono-gs/sub-skills/live-demo/`, `mono-gs/sub-skills/offline-slam/`, `mono-gs/references/architecture.md`.

### `moss-tts`

Role: Route MOSS-TTS family speech, voice-agent, sound-effect, llama.cpp, streaming, and fine-tuning workflows.
Read when: The request names `moss-tts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: finetuning data prep, hf family workflows, llama cpp backend, local v15 streaming, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moss-tts/SKILL.md`, `moss-tts/sub-skills/finetuning-data-prep/`, `moss-tts/sub-skills/hf-family-workflows/`, `moss-tts/sub-skills/llama-cpp-backend/`, `moss-tts/sub-skills/local-v15-streaming/`, `moss-tts/sub-skills/realtime-voice-agent/`, `moss-tts/references/installation-profiles.md`.

### `muzic`

Role: Route Microsoft Muzic research workflows for music understanding, retrieval, symbolic generation, songwriting, and MusicAgent orchestration.
Read when: The request names `muzic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: lyric melody songwriting, music agent workflows, music understanding retrieval, and symbolic generation structure.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `muzic/SKILL.md`, `muzic/sub-skills/lyric-melody-songwriting/`, `muzic/sub-skills/music-agent-workflows/`, `muzic/sub-skills/music-understanding-retrieval/`, `muzic/sub-skills/symbolic-generation-structure/`, `muzic/references/project-map.md`.

### `nerfstudio`

Role: Routes Nerfstudio NeRF, Gaussian Splatting, camera-pose, dataset conversion, training, viewer, evaluation, rendering, export, and plugin-extension tasks using its typed CLI and Python APIs.
Read when: The request names `nerfstudio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api extension, cli workflows, data preparation, training and configs, and visualization and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nerfstudio/SKILL.md`, `nerfstudio/sub-skills/api-extension/`, `nerfstudio/sub-skills/cli-workflows/`, `nerfstudio/sub-skills/data-preparation/`, `nerfstudio/sub-skills/training-and-configs/`, `nerfstudio/sub-skills/visualization-and-export/`, `nerfstudio/references/architecture-overview.md`.

### `papers-in-100-lines-of-code`

Role: Routes Papers-in-100-Lines-of-Code catalog lookup, compact ML paper implementation adaptation, dependency planning, backend safety, and troubleshooting.
Read when: The request names `papers-in-100-lines-of-code` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generative models, neural rendering 3d, optimization meta rl, and paper catalog and execution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `papers-in-100-lines-of-code/SKILL.md`, `papers-in-100-lines-of-code/sub-skills/generative-models/`, `papers-in-100-lines-of-code/sub-skills/neural-rendering-3d/`, `papers-in-100-lines-of-code/sub-skills/optimization-meta-rl/`, `papers-in-100-lines-of-code/sub-skills/paper-catalog-and-execution/`, `papers-in-100-lines-of-code/references/dependency-and-backend-guide.md`.

### `protomotions`

Role: Use the `protomotions` skill for ProtoMotions 3 humanoid simulation, motion-learning, retargeting, simulator-backend, training, inference, and deployment workflows.
Read when: The request names `protomotions` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and robots, installation and backends, retargeting and motion data, simulator foundations, and training and experiments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `protomotions/SKILL.md`, `protomotions/sub-skills/deployment-and-robots/`, `protomotions/sub-skills/installation-and-backends/`, `protomotions/sub-skills/retargeting-and-motion-data/`, `protomotions/sub-skills/simulator-foundations/`, `protomotions/sub-skills/training-and-experiments/`, `protomotions/references/cli-and-config.md`.

### `py-torch-studio-gan`

Role: Use PyTorch-StudioGAN for GAN image-synthesis training, YAML configuration, checkpoint sampling and analysis, and IS/FID/PRDC evaluation workflows.
Read when: The request names `py-torch-studio-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation metrics, sampling and analysis, and training and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `py-torch-studio-gan/SKILL.md`, `py-torch-studio-gan/sub-skills/evaluation-metrics/`, `py-torch-studio-gan/sub-skills/sampling-and-analysis/`, `py-torch-studio-gan/sub-skills/training-and-configuration/`, `py-torch-studio-gan/references/repo-overview.md`, `py-torch-studio-gan/references/repo-provenance.md`.

### `pyramid-flow`

Role: Use Pyramid-Flow for video generation, data precomputation, Causal Video VAE, distributed training, and reusable model-component inspection.
Read when: The request names `pyramid-flow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core components, data preparation, generation inference, and training workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyramid-flow/SKILL.md`, `pyramid-flow/sub-skills/core-components/`, `pyramid-flow/sub-skills/data-preparation/`, `pyramid-flow/sub-skills/generation-inference/`, `pyramid-flow/sub-skills/training-workflows/`, `pyramid-flow/references/installation.md`.

### `pytorch-fid`

Role: Use pytorch-fid to compute Frechet Inception Distance for image directories or saved activation statistics, precompute .npz stats, validate inputs, and troubleshoot PyTorch Inception FID workflows.
Read when: The request names `pytorch-fid` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-fid/SKILL.md`, `pytorch-fid/references/api-reference.md`, `pytorch-fid/references/cli-reference.md`, `pytorch-fid/references/data-formats.md`, `pytorch-fid/references/repo-provenance.md`, `pytorch-fid/references/troubleshooting.md`.

### `pytorch-vae`

Role: Routes PyTorch-VAE tasks to config-driven training and model API workflows for the collection of variational autoencoders.
Read when: The request names `pytorch-vae` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model reference and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-vae/SKILL.md`, `pytorch-vae/sub-skills/model-reference/`, `pytorch-vae/sub-skills/training/`, `pytorch-vae/references/model-overview.md`, `pytorch-vae/references/repo-provenance.md`, `pytorch-vae/references/troubleshooting.md`.

### `splatam`

Role: Routes agents working with SplaTAM RGB-D SLAM, Gaussian-splat reconstruction, iPhone/NeRFCapture capture, evaluation, export, and troubleshooting workflows.
Read when: The request names `splatam` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: capture and reconstruction.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `splatam/SKILL.md`, `splatam/sub-skills/capture/`, `splatam/sub-skills/reconstruction/`, `splatam/references/data-and-configs.md`, `splatam/references/environment.md`, `splatam/references/repo-provenance.md`.

### `stability-ai-generative-models`

Role: Use Stability AI's generative-models package for SDXL inference APIs, SVD/SV3D/SV4D video sampling, config-driven training, demos, and watermarking workflows.
Read when: The request names `stability-ai-generative-models` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demos and watermarking, inference api, training and configs, and video sampling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stability-ai-generative-models/SKILL.md`, `stability-ai-generative-models/sub-skills/demos-and-watermarking/`, `stability-ai-generative-models/sub-skills/inference-api/`, `stability-ai-generative-models/sub-skills/training-and-configs/`, `stability-ai-generative-models/sub-skills/video-sampling/`, `stability-ai-generative-models/references/repo-provenance.md`.

### `torchmetrics`

Role: Use TorchMetrics to choose, inspect, and combine metric families for PyTorch evaluation, including core API, domain metrics, model-based metrics, and wrappers.
Read when: The request names `torchmetrics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio text metrics, basic metric domains, collections wrappers plotting, core api, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `torchmetrics/SKILL.md`, `torchmetrics/sub-skills/audio-text-metrics/`, `torchmetrics/sub-skills/basic-metric-domains/`, `torchmetrics/sub-skills/collections-wrappers-plotting/`, `torchmetrics/sub-skills/core-api/`, `torchmetrics/sub-skills/model-based-metrics/`, `torchmetrics/references/metric-selection-cheatsheet.md`.

### `vector-quantize-pytorch`

Role: Route vector-quantize-pytorch tasks across PyTorch vector, residual, scalar, lookup-free, latent, SimVQ, and hierarchical quantizer workflows.
Read when: The request names `vector-quantize-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: lookup free and latent, residual quantizers, scalar quantizers, sim and hierarchical, and vector quantization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vector-quantize-pytorch/SKILL.md`, `vector-quantize-pytorch/sub-skills/lookup-free-and-latent/`, `vector-quantize-pytorch/sub-skills/residual-quantizers/`, `vector-quantize-pytorch/sub-skills/scalar-quantizers/`, `vector-quantize-pytorch/sub-skills/sim-and-hierarchical/`, `vector-quantize-pytorch/sub-skills/vector-quantization/`, `vector-quantize-pytorch/references/package-overview.md`.

### `vgen`

Role: Route VGen video-generation workflows for text-to-video, image-to-video, DreamVideo customization, and InstructVideo reward fine-tuning.
Read when: The request names `vgen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dreamvideo, image to video, instructvideo, and text to video.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vgen/SKILL.md`, `vgen/sub-skills/dreamvideo/`, `vgen/sub-skills/image-to-video/`, `vgen/sub-skills/instructvideo/`, `vgen/sub-skills/text-to-video/`, `vgen/references/configuration.md`.

### `worldgen`

Role: Guides WorldGen workflows for generating 3D scenes from text, images, panoramas, or the interactive demo, including Gaussian-splat and mesh outputs.
Read when: The request names `worldgen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: scene generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `worldgen/SKILL.md`, `worldgen/sub-skills/scene-generation/`, `worldgen/references/api-reference.md`, `worldgen/references/cli-reference.md`, `worldgen/references/repo-provenance.md`, `worldgen/references/troubleshooting.md`.

<!-- DISCO_SCENARIO:generative-media-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
