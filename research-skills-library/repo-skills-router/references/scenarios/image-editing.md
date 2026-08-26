# Image Editing

## When To Read

Requests in the Image Editing family of the Generative Media area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on image editing.

## Repo Skill Options

<!-- DISCO_SCENARIO:image-editing:START -->
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

### `contrastive-unpaired-translation`

Role: Routes CUT/FastCUT/SinCUT workflows, dataset preparation, and launcher presets for the contrastive-unpaired-translation repository.
Read when: The request names `contrastive-unpaired-translation` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, experiment launchers, and translation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `contrastive-unpaired-translation/SKILL.md`, `contrastive-unpaired-translation/sub-skills/data-preparation/`, `contrastive-unpaired-translation/sub-skills/experiment-launchers/`, `contrastive-unpaired-translation/sub-skills/translation-workflows/`, `contrastive-unpaired-translation/references/repo-provenance.md`, `contrastive-unpaired-translation/references/troubleshooting.md`.

### `dream-textures`

Role: Use and troubleshoot the Dream Textures Blender add-on for Stable Diffusion image generation, texture projection, render passes, model setup, and backend APIs.
Read when: The request names `dream-textures` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend and api, generation workflows, scene integration, and setup and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dream-textures/SKILL.md`, `dream-textures/sub-skills/backend-and-api/`, `dream-textures/sub-skills/generation-workflows/`, `dream-textures/sub-skills/scene-integration/`, `dream-textures/sub-skills/setup-and-models/`, `dream-textures/references/repo-provenance.md`.

### `dreamomni2`

Role: Routes DreamOmni2 image generation, image editing, and Gradio demo workflows.
Read when: The request names `dreamomni2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and web demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dreamomni2/SKILL.md`, `dreamomni2/sub-skills/inference/`, `dreamomni2/sub-skills/web-demo/`, `dreamomni2/references/model-setup.md`, `dreamomni2/references/repo-provenance.md`, `dreamomni2/references/troubleshooting.md`.

### `edge-connect`

Role: Route EdgeConnect requests for image inpainting setup, data preparation, training, checkpoint-backed testing, and evaluation.
Read when: The request names `edge-connect` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, testing, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `edge-connect/SKILL.md`, `edge-connect/sub-skills/data-preparation/`, `edge-connect/sub-skills/evaluation/`, `edge-connect/sub-skills/testing/`, `edge-connect/sub-skills/training/`, `edge-connect/references/installation.md`.

### `fast-style-transfer`

Role: Guides TensorFlow Fast Style Transfer training, image stylization, and video stylization workflows from checkpoints, VGG/COCO assets, and script-oriented CLIs.
Read when: The request names `fast-style-transfer` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: image stylization, training, and video stylization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fast-style-transfer/SKILL.md`, `fast-style-transfer/sub-skills/image-stylization/`, `fast-style-transfer/sub-skills/training/`, `fast-style-transfer/sub-skills/video-stylization/`, `fast-style-transfer/references/repo-provenance.md`, `fast-style-transfer/references/setup-and-assets.md`.

### `gimp-ml`

Role: Route GIMP-ML computer-vision plug-in, GIMP layer, local FastAPI image-generation, and legacy-host troubleshooting tasks with explicit model, runtime, credential, and verification boundaries.
Read when: The request names `gimp-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classical image ops, guided editing, setup and host, text generation service, and vision filters.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gimp-ml/SKILL.md`, `gimp-ml/sub-skills/classical-image-ops/`, `gimp-ml/sub-skills/guided-editing/`, `gimp-ml/sub-skills/setup-and-host/`, `gimp-ml/sub-skills/text-generation-service/`, `gimp-ml/sub-skills/vision-filters/`, `gimp-ml/references/architecture.md`.

### `gpt-image-cli`

Role: Use GPT-Image2-Skill and the gpt-image-cli package for OpenAI GPT Image 2 CLI/API workflows, prompt-gallery guidance, and repository maintenance.
Read when: The request names `gpt-image-cli` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and api, prompt gallery, and repo maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gpt-image-cli/SKILL.md`, `gpt-image-cli/sub-skills/cli-and-api/`, `gpt-image-cli/sub-skills/prompt-gallery/`, `gpt-image-cli/sub-skills/repo-maintenance/`, `gpt-image-cli/references/repo-provenance.md`, `gpt-image-cli/references/troubleshooting.md`.

### `hunyuan-image-3-0`

Role: Route HunyuanImage-3.0 local generation, prompt conditioning, package APIs, Gradio UI, and vLLM serving workflows.
Read when: The request names `hunyuan-image-3-0` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core apis and architecture, gradio app and prompt ui, local inference cli, prompt and image conditioning, and vllm serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuan-image-3-0/SKILL.md`, `hunyuan-image-3-0/sub-skills/core-apis-and-architecture/`, `hunyuan-image-3-0/sub-skills/gradio-app-and-prompt-ui/`, `hunyuan-image-3-0/sub-skills/local-inference-cli/`, `hunyuan-image-3-0/sub-skills/prompt-and-image-conditioning/`, `hunyuan-image-3-0/sub-skills/vllm-serving/`, `hunyuan-image-3-0/references/hardware-and-models.md`.

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

### `infinite-you`

Role: Routes InfiniteYou-FLUX identity-preserving photo recrafting tasks across self-contained local inference, model/demo setup, and pipeline-internal debugging.
Read when: The request names `infinite-you` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demo and model setup, local inference, and pipeline internals.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `infinite-you/SKILL.md`, `infinite-you/sub-skills/demo-and-model-setup/`, `infinite-you/sub-skills/local-inference/`, `infinite-you/sub-skills/pipeline-internals/`, `infinite-you/references/bundled-runtime.md`, `infinite-you/references/installation-and-models.md`.

### `intern-gpt`

Role: Operate InternGPT/InternChat multimodal agent deployments, visual-dialogue tools, cross-modal generation, DragGAN, and video workflows.
Read when: The request names `intern-gpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: app deployment, cross modal generation, video understanding, and visual dialogue tools.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `intern-gpt/SKILL.md`, `intern-gpt/sub-skills/app-deployment/`, `intern-gpt/sub-skills/cross-modal-generation/`, `intern-gpt/sub-skills/video-understanding/`, `intern-gpt/sub-skills/visual-dialogue-tools/`, `intern-gpt/references/repo-provenance.md`.

### `keras-gan`

Role: Use Keras-GAN legacy Keras/TensorFlow GAN scripts for image generation, image-to-image translation, inpainting, PixelDA, and SRGAN workflows with safe inspection and troubleshooting.
Read when: The request names `keras-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: domain and restoration, image translation, and mnist generators.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `keras-gan/SKILL.md`, `keras-gan/sub-skills/domain-and-restoration/`, `keras-gan/sub-skills/image-translation/`, `keras-gan/sub-skills/mnist-generators/`, `keras-gan/references/compatibility-and-install.md`, `keras-gan/references/model-catalog.md`.

### `krita-ai-diffusion`

Role: Routes Krita AI Diffusion plugin tasks across inference workflows, ComfyUI and cloud resources, Qt workspaces, custom graphs, and Krita document image state.
Read when: The request names `krita-ai-diffusion` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom graphs, document image state, inference workflows, server resources, and ui workspaces.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `krita-ai-diffusion/SKILL.md`, `krita-ai-diffusion/sub-skills/custom-graphs/`, `krita-ai-diffusion/sub-skills/document-image-state/`, `krita-ai-diffusion/sub-skills/inference-workflows/`, `krita-ai-diffusion/sub-skills/server-resources/`, `krita-ai-diffusion/sub-skills/ui-workspaces/`, `krita-ai-diffusion/references/development-and-testing.md`.

### `munit`

Role: Route NVlabs MUNIT legacy multimodal image-to-image translation setup, data, training, inference, evaluation, and model-internals tasks.
Read when: The request names `munit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and configuration, environment and setup, inference and evaluation, model internals, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `munit/SKILL.md`, `munit/sub-skills/data-and-configuration/`, `munit/sub-skills/environment-and-setup/`, `munit/sub-skills/inference-and-evaluation/`, `munit/sub-skills/model-internals/`, `munit/sub-skills/training/`, `munit/references/repo-provenance.md`.

### `neural-style-tf`

Role: Use the legacy TensorFlow neural-style-tf script for artistic image and video style transfer, command planning, runtime checks, and troubleshooting.
Read when: The request names `neural-style-tf` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: advanced controls, image stylization, and video stylization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `neural-style-tf/SKILL.md`, `neural-style-tf/sub-skills/advanced-controls/`, `neural-style-tf/sub-skills/image-stylization/`, `neural-style-tf/sub-skills/video-stylization/`, `neural-style-tf/references/cli-reference.md`, `neural-style-tf/references/repo-provenance.md`.

### `opengvlab-draggan`

Role: Routes DragGAN users to the browser demo and Python API workflows for point-based image editing, checkpoint loading, and CUDA troubleshooting.
Read when: The request names `opengvlab-draggan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: python api and web demo.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opengvlab-draggan/SKILL.md`, `opengvlab-draggan/sub-skills/python-api/`, `opengvlab-draggan/sub-skills/web-demo/`, `opengvlab-draggan/references/checkpoints.md`, `opengvlab-draggan/references/deployment.md`, `opengvlab-draggan/references/repo-provenance.md`.

### `photo2cartoon`

Role: Guide Photo2Cartoon portrait cartoonization workflows: assets, preprocessing, PyTorch or ONNX inference, dataset preparation, GAN training, model internals, and troubleshooting.
Read when: The request names `photo2cartoon` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and training, model internals, portrait inference, and preprocessing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `photo2cartoon/SKILL.md`, `photo2cartoon/sub-skills/data-and-training/`, `photo2cartoon/sub-skills/model-internals/`, `photo2cartoon/sub-skills/portrait-inference/`, `photo2cartoon/sub-skills/preprocessing/`, `photo2cartoon/references/repo-provenance.md`.

### `pix2pix-hd`

Role: Route pix2pixHD setup, training, inference, and feature-conditioned workflows.
Read when: The request names `pix2pix-hd` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference, instance features, setup and data, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pix2pix-hd/SKILL.md`, `pix2pix-hd/sub-skills/inference/`, `pix2pix-hd/sub-skills/instance-features/`, `pix2pix-hd/sub-skills/setup-and-data/`, `pix2pix-hd/sub-skills/training/`, `pix2pix-hd/references/api-reference.md`.

### `repaint`

Role: Routes RePaint inpainting, config, output-layout, and jump-schedule workflows.
Read when: The request names `repaint` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inpainting inference and schedule visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `repaint/SKILL.md`, `repaint/sub-skills/inpainting-inference/`, `repaint/sub-skills/schedule-visualization/`, `repaint/references/configuration.md`, `repaint/references/repo-provenance.md`, `repaint/references/troubleshooting.md`.

### `xingangpan-draggan`

Role: Guides DragGAN and StyleGAN-Human workflows for interactive point-based GAN editing, pretrained StyleGAN generation, human-image manipulation, and SHHQ training setup.
Read when: The request names `xingangpan-draggan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: draggan ui, stylegan generation, stylegan human manipulation, and stylegan training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xingangpan-draggan/SKILL.md`, `xingangpan-draggan/sub-skills/draggan-ui/`, `xingangpan-draggan/sub-skills/stylegan-generation/`, `xingangpan-draggan/sub-skills/stylegan-human-manipulation/`, `xingangpan-draggan/sub-skills/stylegan-training/`, `xingangpan-draggan/references/installation-and-assets.md`.

<!-- DISCO_SCENARIO:image-editing:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
