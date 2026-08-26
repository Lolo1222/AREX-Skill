# Image Synthesis

## When To Read

Requests in the Image Synthesis family of the Generative Media area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on image synthesis.

## Repo Skill Options

<!-- DISCO_SCENARIO:image-synthesis:START -->
### `alae`

Role: Use the ALAE repository for Adversarial Latent Autoencoder data preparation, CUDA training, checkpoint-backed generation, latent editing, and legacy metrics.
Read when: The request names `alae` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, generation, metrics, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `alae/SKILL.md`, `alae/sub-skills/data-preparation/`, `alae/sub-skills/generation/`, `alae/sub-skills/metrics/`, `alae/sub-skills/training/`, `alae/references/configuration.md`.

### `any-door`

Role: Routes AnyDoor zero-shot object-level image customization workflows.
Read when: The request names `any-door` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and training, inference and demo, and setup and checkpoints.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `any-door/SKILL.md`, `any-door/sub-skills/data-and-training/`, `any-door/sub-skills/inference-and-demo/`, `any-door/sub-skills/setup-and-checkpoints/`, `any-door/references/checkpoints-and-configs.md`, `any-door/references/environment-and-installation.md`.

### `big-sleep`

Role: Routes Big Sleep text-to-image workflows, CUDA setup checks, prompt controls, and Python API usage for the `dream` CLI and `Imagine` API.
Read when: The request names `big-sleep` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `big-sleep/SKILL.md`, `big-sleep/references/api-reference.md`, `big-sleep/references/repo-provenance.md`, `big-sleep/references/troubleshooting.md`, `big-sleep/references/workflows.md`, `big-sleep/scripts/check_runtime.py`.

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

### `dalle-pytorch`

Role: Operate lucidrains DALLE-pytorch for DALL-E style VAE training, transformer training, generation, CLIP ranking, and backend troubleshooting.
Read when: The request names `dalle-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dalle training, distributed and backends, generation and ranking, and vae training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dalle-pytorch/SKILL.md`, `dalle-pytorch/sub-skills/dalle-training/`, `dalle-pytorch/sub-skills/distributed-and-backends/`, `dalle-pytorch/sub-skills/generation-and-ranking/`, `dalle-pytorch/sub-skills/vae-training/`, `dalle-pytorch/references/api-reference.md`.

### `dalle2-pytorch`

Role: Use the DALLE2-pytorch package for DALL-E 2 style text-to-image model APIs, diffusion prior/decoder training, WebDataset data layouts, and tracker/checkpoint workflows.
Read when: The request names `dalle2-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and tracking, generation and api, and training and configs.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dalle2-pytorch/SKILL.md`, `dalle2-pytorch/sub-skills/data-and-tracking/`, `dalle2-pytorch/sub-skills/generation-and-api/`, `dalle2-pytorch/sub-skills/training-and-configs/`, `dalle2-pytorch/references/repo-provenance.md`, `dalle2-pytorch/references/troubleshooting.md`.

### `deep-daze`

Role: Use deep-daze for CLIP-guided Siren image generation through the imagine CLI and Python APIs, with runtime inspection and troubleshooting.
Read when: The request names `deep-daze` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli workflows, python api, and runtime and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-daze/SKILL.md`, `deep-daze/sub-skills/cli-workflows/`, `deep-daze/sub-skills/python-api/`, `deep-daze/sub-skills/runtime-and-models/`, `deep-daze/references/repo-provenance.md`, `deep-daze/references/troubleshooting.md`.

### `denoising-diffusion-pytorch`

Role: Use denoising-diffusion-pytorch for PyTorch DDPM/DDIM image diffusion, 1D sequence diffusion, conditioning and guidance, and advanced diffusion variants.
Read when: The request names `denoising-diffusion-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced variants, conditioning guidance, image diffusion, and sequence diffusion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `denoising-diffusion-pytorch/SKILL.md`, `denoising-diffusion-pytorch/sub-skills/advanced-variants/`, `denoising-diffusion-pytorch/sub-skills/conditioning-guidance/`, `denoising-diffusion-pytorch/sub-skills/image-diffusion/`, `denoising-diffusion-pytorch/sub-skills/sequence-diffusion/`, `denoising-diffusion-pytorch/references/package-overview.md`.

### `dreamomni2`

Role: Routes DreamOmni2 image generation, image editing, and Gradio demo workflows.
Read when: The request names `dreamomni2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and web demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamomni2/SKILL.md`, `dreamomni2/sub-skills/inference/`, `dreamomni2/sub-skills/web-demo/`, `dreamomni2/references/model-setup.md`, `dreamomni2/references/repo-provenance.md`, `dreamomni2/references/troubleshooting.md`.

### `hunyuan-image-3-0`

Role: Route HunyuanImage-3.0 local generation, prompt conditioning, package APIs, Gradio UI, and vLLM serving workflows.
Read when: The request names `hunyuan-image-3-0` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core apis and architecture, gradio app and prompt ui, local inference cli, prompt and image conditioning, and vllm serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuan-image-3-0/SKILL.md`, `hunyuan-image-3-0/sub-skills/core-apis-and-architecture/`, `hunyuan-image-3-0/sub-skills/gradio-app-and-prompt-ui/`, `hunyuan-image-3-0/sub-skills/local-inference-cli/`, `hunyuan-image-3-0/sub-skills/prompt-and-image-conditioning/`, `hunyuan-image-3-0/sub-skills/vllm-serving/`, `hunyuan-image-3-0/references/hardware-and-models.md`.

### `i-gan`

Role: Operate the legacy iGAN repository for interactive GAN image generation, constrained synthesis, image projection, model artifacts, and DCGAN training workflows.
Read when: The request names `i-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: constraint generation, image projection, interactive ui, model inference, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `i-gan/SKILL.md`, `i-gan/sub-skills/constraint-generation/`, `i-gan/sub-skills/image-projection/`, `i-gan/sub-skills/interactive-ui/`, `i-gan/sub-skills/model-inference/`, `i-gan/sub-skills/training-data/`, `i-gan/references/repo-provenance.md`.

### `image-super-resolution-via-iterative-refinement`

Role: Route Image Super-Resolution via Iterative Refinement SR3/DDPM dataset, config, training, inference, sampling, evaluation, and logging workflows.
Read when: The request names `image-super-resolution-via-iterative-refinement` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation and logging, inference and sampling, model configuration, and super resolution training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `image-super-resolution-via-iterative-refinement/SKILL.md`, `image-super-resolution-via-iterative-refinement/sub-skills/data-preparation/`, `image-super-resolution-via-iterative-refinement/sub-skills/evaluation-and-logging/`, `image-super-resolution-via-iterative-refinement/sub-skills/inference-and-sampling/`, `image-super-resolution-via-iterative-refinement/sub-skills/model-configuration/`, `image-super-resolution-via-iterative-refinement/sub-skills/super-resolution-training/`, `image-super-resolution-via-iterative-refinement/references/installation.md`.

### `imagen-pytorch`

Role: Routes Imagen-Pytorch workflows for image and video diffusion, config-driven training, and CLI usage.
Read when: The request names `imagen-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration and cli, data and text conditioning, image generation, training and checkpointing, and video and inpainting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `imagen-pytorch/SKILL.md`, `imagen-pytorch/sub-skills/configuration-and-cli/`, `imagen-pytorch/sub-skills/data-and-text-conditioning/`, `imagen-pytorch/sub-skills/image-generation/`, `imagen-pytorch/sub-skills/training-and-checkpointing/`, `imagen-pytorch/sub-skills/video-and-inpainting/`, `imagen-pytorch/references/api-overview.md`.

### `infinite-you`

Role: Routes InfiniteYou-FLUX identity-preserving photo recrafting tasks across self-contained local inference, model/demo setup, and pipeline-internal debugging.
Read when: The request names `infinite-you` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demo and model setup, local inference, and pipeline internals.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `infinite-you/SKILL.md`, `infinite-you/sub-skills/demo-and-model-setup/`, `infinite-you/sub-skills/local-inference/`, `infinite-you/sub-skills/pipeline-internals/`, `infinite-you/references/bundled-runtime.md`, `infinite-you/references/installation-and-models.md`.

### `janus`

Role: Routes Janus, Janus-Pro, and JanusFlow workflows for multimodal understanding, text-to-image generation, and demo or service adaptation.
Read when: The request names `janus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demos and serving, image generation, janusflow workflows, and multimodal understanding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `janus/SKILL.md`, `janus/sub-skills/demos-and-serving/`, `janus/sub-skills/image-generation/`, `janus/sub-skills/janusflow-workflows/`, `janus/sub-skills/multimodal-understanding/`, `janus/references/installation-and-models.md`.

### `llamagen`

Role: Router for LlamaGen autoregressive image-generation workflows, including tokenizers, data preparation, class-conditional generation, and text-conditional generation.
Read when: The request names `llamagen` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: class conditional, data preparation, text conditional, and tokenizers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llamagen/SKILL.md`, `llamagen/sub-skills/class-conditional/`, `llamagen/sub-skills/data-preparation/`, `llamagen/sub-skills/text-conditional/`, `llamagen/sub-skills/tokenizers/`, `llamagen/references/repo-provenance.md`.

### `lumina-t2x`

Role: Routes Lumina-T2X tasks across text-to-image generation, image training, audio/music demos, visual anagrams, and ImageNet benchmark training.
Read when: The request names `lumina-t2x` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio music, image generation, image training, imagenet training, and visual anagrams.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lumina-t2x/SKILL.md`, `lumina-t2x/sub-skills/audio-music/`, `lumina-t2x/sub-skills/image-generation/`, `lumina-t2x/sub-skills/image-training/`, `lumina-t2x/sub-skills/imagenet-training/`, `lumina-t2x/sub-skills/visual-anagrams/`, `lumina-t2x/references/overview.md`.

### `min-dalle`

Role: Use the min(DALL·E) Python package for text-to-image generation, model asset/runtime setup, CLI-style requests, notebook/UI workflows, and Replicate/Cog deployment troubleshooting.
Read when: The request names `min-dalle` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and interfaces, model assets and runtime, and text to image generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `min-dalle/SKILL.md`, `min-dalle/sub-skills/deployment-and-interfaces/`, `min-dalle/sub-skills/model-assets-and-runtime/`, `min-dalle/sub-skills/text-to-image-generation/`, `min-dalle/references/repo-provenance.md`, `min-dalle/references/troubleshooting.md`.

### `ml-from-scratch`

Role: Route ML-From-Scratch educational supervised, unsupervised, deep-learning, and DQN workflows with install, utilities, and troubleshooting guidance.
Read when: The request names `ml-from-scratch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deep learning, reinforcement learning, supervised learning, and unsupervised learning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ml-from-scratch/SKILL.md`, `ml-from-scratch/sub-skills/deep-learning/`, `ml-from-scratch/sub-skills/reinforcement-learning/`, `ml-from-scratch/sub-skills/supervised-learning/`, `ml-from-scratch/sub-skills/unsupervised-learning/`, `ml-from-scratch/references/package-overview.md`.

### `munit`

Role: Route NVlabs MUNIT legacy multimodal image-to-image translation setup, data, training, inference, evaluation, and model-internals tasks.
Read when: The request names `munit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configuration, environment and setup, inference and evaluation, model internals, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `munit/SKILL.md`, `munit/sub-skills/data-and-configuration/`, `munit/sub-skills/environment-and-setup/`, `munit/sub-skills/inference-and-evaluation/`, `munit/sub-skills/model-internals/`, `munit/sub-skills/training/`, `munit/references/repo-provenance.md`.

### `ofa`

Role: Routes OFA workflows for multimodal pretraining, captioning, VQA, RefCOCO, OCR, ImageNet, image generation, Gigaword, GLUE, and MMSpeech, with safe setup and validation helpers.
Read when: The request names `ofa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data formats, image generation, language tasks, mmspeech, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ofa/SKILL.md`, `ofa/sub-skills/data-formats/`, `ofa/sub-skills/image-generation/`, `ofa/sub-skills/language-tasks/`, `ofa/sub-skills/mmspeech/`, `ofa/sub-skills/model-internals-and-extension/`, `ofa/references/repo-provenance.md`.

### `opengvlab-draggan`

Role: Routes DragGAN users to the browser demo and Python API workflows for point-based image editing, checkpoint loading, and CUDA troubleshooting.
Read when: The request names `opengvlab-draggan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: python api and web demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opengvlab-draggan/SKILL.md`, `opengvlab-draggan/sub-skills/python-api/`, `opengvlab-draggan/sub-skills/web-demo/`, `opengvlab-draggan/references/checkpoints.md`, `opengvlab-draggan/references/deployment.md`, `opengvlab-draggan/references/repo-provenance.md`.

### `papers-in-100-lines-of-code`

Role: Routes Papers-in-100-Lines-of-Code catalog lookup, compact ML paper implementation adaptation, dependency planning, backend safety, and troubleshooting.
Read when: The request names `papers-in-100-lines-of-code` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generative models, neural rendering 3d, optimization meta rl, and paper catalog and execution.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `papers-in-100-lines-of-code/SKILL.md`, `papers-in-100-lines-of-code/sub-skills/generative-models/`, `papers-in-100-lines-of-code/sub-skills/neural-rendering-3d/`, `papers-in-100-lines-of-code/sub-skills/optimization-meta-rl/`, `papers-in-100-lines-of-code/sub-skills/paper-catalog-and-execution/`, `papers-in-100-lines-of-code/references/dependency-and-backend-guide.md`.

### `pix2pix-hd`

Role: Route pix2pixHD setup, training, inference, and feature-conditioned workflows.
Read when: The request names `pix2pix-hd` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference, instance features, setup and data, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pix2pix-hd/SKILL.md`, `pix2pix-hd/sub-skills/inference/`, `pix2pix-hd/sub-skills/instance-features/`, `pix2pix-hd/sub-skills/setup-and-data/`, `pix2pix-hd/sub-skills/training/`, `pix2pix-hd/references/api-reference.md`.

### `pytorch-cycle-gan-and-pix2pix`

Role: Guide CycleGAN and pix2pix image-to-image translation, colorization, dataset preparation, checkpoint inference, and custom model or dataset extensions in this PyTorch repository.
Read when: The request names `pytorch-cycle-gan-and-pix2pix` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: customization, data preparation, and translation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-cycle-gan-and-pix2pix/SKILL.md`, `pytorch-cycle-gan-and-pix2pix/sub-skills/customization/`, `pytorch-cycle-gan-and-pix2pix/sub-skills/data-preparation/`, `pytorch-cycle-gan-and-pix2pix/sub-skills/translation-workflows/`, `pytorch-cycle-gan-and-pix2pix/references/installation.md`, `pytorch-cycle-gan-and-pix2pix/references/repo-provenance.md`.

### `sana`

Role: Use and maintain Sana image, video, training, evaluation, and deployment workflows.
Read when: The request names `sana` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation conversion deployment, image generation, training data configs, and video world streaming.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sana/SKILL.md`, `sana/sub-skills/evaluation-conversion-deployment/`, `sana/sub-skills/image-generation/`, `sana/sub-skills/training-data-configs/`, `sana/sub-skills/video-world-streaming/`, `sana/references/repo-provenance.md`.

### `stable-diffusion-videos`

Role: Routes Stable Diffusion video, image, audio-synced interpolation, optional upsampling, and Gradio UI workflows for the stable_diffusion_videos package.
Read when: The request names `stable-diffusion-videos` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generation and ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stable-diffusion-videos/SKILL.md`, `stable-diffusion-videos/sub-skills/generation/`, `stable-diffusion-videos/sub-skills/ui/`, `stable-diffusion-videos/references/api-reference.md`, `stable-diffusion-videos/references/repo-provenance.md`, `stable-diffusion-videos/references/troubleshooting.md`.

### `stylegan2-pytorch`

Role: Guides StyleGAN2 PyTorch image GAN training, checkpoint generation, interpolation, and programmatic sampling with the stylegan2_pytorch package.
Read when: The request names `stylegan2-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: programmatic api and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stylegan2-pytorch/SKILL.md`, `stylegan2-pytorch/sub-skills/programmatic-api/`, `stylegan2-pytorch/sub-skills/training/`, `stylegan2-pytorch/references/repo-provenance.md`, `stylegan2-pytorch/references/troubleshooting.md`, `stylegan2-pytorch/scripts/check_install.py`.

### `wiseodd-generative-models`

Role: Routes the legacy Generative Models script collection for GAN, VAE, RBM, and Helmholtz Machine MNIST workflows, catalog lookup, and compatibility troubleshooting.
Read when: The request names `wiseodd-generative-models` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: gan, helmholtz machine, rbm, and vae.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `wiseodd-generative-models/SKILL.md`, `wiseodd-generative-models/sub-skills/gan/`, `wiseodd-generative-models/sub-skills/helmholtz-machine/`, `wiseodd-generative-models/sub-skills/rbm/`, `wiseodd-generative-models/sub-skills/vae/`, `wiseodd-generative-models/references/compatibility.md`.

### `xingangpan-draggan`

Role: Guides DragGAN and StyleGAN-Human workflows for interactive point-based GAN editing, pretrained StyleGAN generation, human-image manipulation, and SHHQ training setup.
Read when: The request names `xingangpan-draggan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: draggan ui, stylegan generation, stylegan human manipulation, and stylegan training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xingangpan-draggan/SKILL.md`, `xingangpan-draggan/sub-skills/draggan-ui/`, `xingangpan-draggan/sub-skills/stylegan-generation/`, `xingangpan-draggan/sub-skills/stylegan-human-manipulation/`, `xingangpan-draggan/sub-skills/stylegan-training/`, `xingangpan-draggan/references/installation-and-assets.md`.

### `zero123plus`

Role: Guides Zero123Plus generation, ControlNet variants, demo launch, and Cog deployment workflows for single-image-to-multiview inference.
Read when: The request names `zero123plus` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `zero123plus/SKILL.md`, `zero123plus/sub-skills/deployment/`, `zero123plus/sub-skills/generation/`, `zero123plus/references/dependency-and-runtime.md`, `zero123plus/references/repo-provenance.md`, `zero123plus/references/troubleshooting.md`.

### `zi2zi`

Role: Operate zi2zi legacy Chinese/Japanese/Korean font style transfer workflows: paired glyph data preparation, TensorFlow 1.x training, inference, interpolation, and generator export.
Read when: The request names `zi2zi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference and export, and training and model.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `zi2zi/SKILL.md`, `zi2zi/sub-skills/data-preparation/`, `zi2zi/sub-skills/inference-and-export/`, `zi2zi/sub-skills/training-and-model/`, `zi2zi/references/compatibility.md`, `zi2zi/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:image-synthesis:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
