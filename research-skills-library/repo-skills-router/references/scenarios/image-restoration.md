# Image Restoration

## When To Read

Requests in the Image Restoration family of the Computer Vision area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on image restoration.

## Repo Skill Options

<!-- DISCO_SCENARIO:image-restoration:START -->
### `colorization`

Role: Use richzhang/colorization PyTorch colorizers for automatic image colorization, Python API calls, preprocessing/postprocessing, and runtime troubleshooting.
Read when: The request names `colorization` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: automatic colorization and python api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `colorization/SKILL.md`, `colorization/sub-skills/automatic-colorization/`, `colorization/sub-skills/python-api/`, `colorization/references/installation.md`, `colorization/references/repo-provenance.md`, `colorization/references/troubleshooting.md`.

### `deblur-gan`

Role: Route DeblurGAN users to data preparation, training, and single-image inference workflows.
Read when: The request names `deblur-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deblur-gan/SKILL.md`, `deblur-gan/sub-skills/data-preparation/`, `deblur-gan/sub-skills/inference/`, `deblur-gan/sub-skills/training/`, `deblur-gan/references/api-reference.md`, `deblur-gan/references/installation.md`.

### `flashvsr`

Role: Routes official FlashVSR diffusion-based streaming video super-resolution setup, model preparation, and CUDA inference for v1 and v1.1.
Read when: The request names `flashvsr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and setup and weights.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `flashvsr/SKILL.md`, `flashvsr/sub-skills/inference/`, `flashvsr/sub-skills/setup-and-weights/`, `flashvsr/references/repo-provenance.md`, `flashvsr/references/troubleshooting.md`.

### `gfpgan`

Role: Use GFPGAN for face-restoration inference, model-version selection, training/data preparation, checkpoint conversion, and package troubleshooting.
Read when: The request names `gfpgan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gfpgan/SKILL.md`, `gfpgan/sub-skills/inference/`, `gfpgan/sub-skills/training/`, `gfpgan/references/installation.md`, `gfpgan/references/repo-provenance.md`, `gfpgan/references/troubleshooting.md`.

### `gimp-ml`

Role: Route GIMP-ML computer-vision plug-in, GIMP layer, local FastAPI image-generation, and legacy-host troubleshooting tasks with explicit model, runtime, credential, and verification boundaries.
Read when: The request names `gimp-ml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classical image ops, guided editing, setup and host, text generation service, and vision filters.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gimp-ml/SKILL.md`, `gimp-ml/sub-skills/classical-image-ops/`, `gimp-ml/sub-skills/guided-editing/`, `gimp-ml/sub-skills/setup-and-host/`, `gimp-ml/sub-skills/text-generation-service/`, `gimp-ml/sub-skills/vision-filters/`, `gimp-ml/references/architecture.md`.

### `image-super-resolution-via-iterative-refinement`

Role: Route Image Super-Resolution via Iterative Refinement SR3/DDPM dataset, config, training, inference, sampling, evaluation, and logging workflows.
Read when: The request names `image-super-resolution-via-iterative-refinement` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation and logging, inference and sampling, model configuration, and super resolution training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `image-super-resolution-via-iterative-refinement/SKILL.md`, `image-super-resolution-via-iterative-refinement/sub-skills/data-preparation/`, `image-super-resolution-via-iterative-refinement/sub-skills/evaluation-and-logging/`, `image-super-resolution-via-iterative-refinement/sub-skills/inference-and-sampling/`, `image-super-resolution-via-iterative-refinement/sub-skills/model-configuration/`, `image-super-resolution-via-iterative-refinement/sub-skills/super-resolution-training/`, `image-super-resolution-via-iterative-refinement/references/installation.md`.

### `interactive-deep-colorization`

Role: Routes agents using Interactive Deep Colorization for local-hints image colorization, model setup, GUI/API workflows, and Caffe global histogram transfer.
Read when: The request names `interactive-deep-colorization` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: global histogram transfer, interactive colorization, and setup and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `interactive-deep-colorization/SKILL.md`, `interactive-deep-colorization/sub-skills/global-histogram-transfer/`, `interactive-deep-colorization/sub-skills/interactive-colorization/`, `interactive-deep-colorization/sub-skills/setup-and-models/`, `interactive-deep-colorization/references/repo-provenance.md`, `interactive-deep-colorization/references/troubleshooting.md`.

### `kair`

Role: Repo-specific operating skill for KAIR image/video restoration: training configs, image testing, VRT/RVRT video workflows, dataset preparation, model downloads, and environment checks.
Read when: The request names `kair` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, image testing, image training, and video restoration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kair/SKILL.md`, `kair/sub-skills/data-preparation/`, `kair/sub-skills/image-testing/`, `kair/sub-skills/image-training/`, `kair/sub-skills/video-restoration/`, `kair/references/model-zoo-and-downloads.md`.

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

### `multidiffusion-upscaler-for-automatic1111`

Role: Use the Tiled Diffusion & VAE AUTOMATIC1111 WebUI extension for large-image txt2img/img2img, tiled VAE, regional prompts, noise inversion, ControlNet/StableSR interop, and DemoFusion workflows.
Read when: The request names `multidiffusion-upscaler-for-automatic1111` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: demofusion, tiled diffusion, and tiled vae.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `multidiffusion-upscaler-for-automatic1111/SKILL.md`, `multidiffusion-upscaler-for-automatic1111/sub-skills/demofusion/`, `multidiffusion-upscaler-for-automatic1111/sub-skills/tiled-diffusion/`, `multidiffusion-upscaler-for-automatic1111/sub-skills/tiled-vae/`, `multidiffusion-upscaler-for-automatic1111/references/repo-provenance.md`, `multidiffusion-upscaler-for-automatic1111/references/setup-and-compatibility.md`.

### `paddle-gan`

Role: Route PaddleGAN tasks to focused workflows for setup, data, training, media applications, and deployment.
Read when: The request names `paddle-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, deployment export, image and face apps, training configs, and video and audio apps.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddle-gan/SKILL.md`, `paddle-gan/sub-skills/data-preparation/`, `paddle-gan/sub-skills/deployment-export/`, `paddle-gan/sub-skills/image-and-face-apps/`, `paddle-gan/sub-skills/training-configs/`, `paddle-gan/sub-skills/video-and-audio-apps/`, `paddle-gan/references/install-and-setup.md`.

### `pytorch-cycle-gan-and-pix2pix`

Role: Guide CycleGAN and pix2pix image-to-image translation, colorization, dataset preparation, checkpoint inference, and custom model or dataset extensions in this PyTorch repository.
Read when: The request names `pytorch-cycle-gan-and-pix2pix` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: customization, data preparation, and translation workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-cycle-gan-and-pix2pix/SKILL.md`, `pytorch-cycle-gan-and-pix2pix/sub-skills/customization/`, `pytorch-cycle-gan-and-pix2pix/sub-skills/data-preparation/`, `pytorch-cycle-gan-and-pix2pix/sub-skills/translation-workflows/`, `pytorch-cycle-gan-and-pix2pix/references/installation.md`, `pytorch-cycle-gan-and-pix2pix/references/repo-provenance.md`.

### `quality-scaler`

Role: Routes QualityScaler tasks for Windows image and video upscaling, setup, and troubleshooting.
Read when: The request names `quality-scaler` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: image upscaling, setup runtime, and video upscaling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `quality-scaler/SKILL.md`, `quality-scaler/sub-skills/image-upscaling/`, `quality-scaler/sub-skills/setup-runtime/`, `quality-scaler/sub-skills/video-upscaling/`, `quality-scaler/references/repo-provenance.md`, `quality-scaler/references/shared-runtime-and-assets.md`.

### `scikit-image`

Role: Route scikit-image tasks across image I/O, enhancement, analysis, segmentation, geometric transforms, and registration.
Read when: The request names `scikit-image` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analysis, data io, enhancement, segmentation and shapes, and transform registration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `scikit-image/SKILL.md`, `scikit-image/sub-skills/analysis/`, `scikit-image/sub-skills/data-io/`, `scikit-image/sub-skills/enhancement/`, `scikit-image/sub-skills/segmentation-and-shapes/`, `scikit-image/sub-skills/transform-registration/`, `scikit-image/references/experimental-api.md`.

### `supir`

Role: Operate SUPIR for CUDA photo restoration, upscaling, caption-assisted enhancement, tiled restoration, face restoration, and safe checkpoint/configuration troubleshooting.
Read when: The request names `supir` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: batch restoration, interactive demos, and python api and config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `supir/SKILL.md`, `supir/sub-skills/batch-restoration/`, `supir/sub-skills/interactive-demos/`, `supir/sub-skills/python-api-and-config/`, `supir/references/checkpoints-and-environment.md`, `supir/references/configuration-reference.md`.

<!-- DISCO_SCENARIO:image-restoration:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
