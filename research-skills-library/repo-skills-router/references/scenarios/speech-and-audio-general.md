# Speech and Audio — General

## When To Read

Speech and Audio requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:speech-and-audio-general:START -->
### `asteroid`

Role: Route Asteroid tasks to the right sub-skill for pretrained inference, training recipes, custom model building, and model sharing.
Read when: The request names `asteroid` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom models, model sharing, pretrained inference, and training recipes.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `asteroid/SKILL.md`, `asteroid/sub-skills/custom-models/`, `asteroid/sub-skills/model-sharing/`, `asteroid/sub-skills/pretrained-inference/`, `asteroid/sub-skills/training-recipes/`, `asteroid/references/installation.md`.

### `clearer-voice-studio`

Role: Route ClearerVoice-Studio tasks for ClearVoice inference, SpeechScore metrics, and speech-model training or data-preparation workflows.
Read when: The request names `clearer-voice-studio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clearvoice inference, speechscore metrics, and training and data prep.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clearer-voice-studio/SKILL.md`, `clearer-voice-studio/sub-skills/clearvoice-inference/`, `clearer-voice-studio/sub-skills/speechscore-metrics/`, `clearer-voice-studio/sub-skills/training-and-data-prep/`, `clearer-voice-studio/references/package-and-component-overview.md`, `clearer-voice-studio/references/repo-provenance.md`.

### `deep-filter-net`

Role: Route DeepFilterNet speech enhancement, Python API/CLI, training data, model export/evaluation, and Rust/LADSPA realtime workflows.
Read when: The request names `deep-filter-net` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model export evaluation, python enhancement, rust realtime deployment, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-filter-net/SKILL.md`, `deep-filter-net/sub-skills/model-export-evaluation/`, `deep-filter-net/sub-skills/python-enhancement/`, `deep-filter-net/sub-skills/rust-realtime-deployment/`, `deep-filter-net/sub-skills/training-data/`, `deep-filter-net/references/installation-and-package-map.md`.

### `funclip`

Role: Guide FunClip ASR video/audio clipping, LLM-assisted clipping providers, and release packaging workflows.
Read when: The request names `funclip` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clip workflows, llm providers, and release packaging.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funclip/SKILL.md`, `funclip/sub-skills/clip-workflows/`, `funclip/sub-skills/llm-providers/`, `funclip/sub-skills/release-packaging/`, `funclip/references/installation-and-runtime.md`, `funclip/references/repo-provenance.md`.

### `maante`

Role: Repo-specific operating guidance for MaaNTE Neverness to Everness MaaFramework automation tasks, pipeline JSON, Python custom actions, navigation, audio, minigame, and maintainer workflows.
Read when: The request names `maante` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom actions, gameplay tasks, media minigames, navigation realtime, and pipeline development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maante/SKILL.md`, `maante/sub-skills/custom-actions/`, `maante/sub-skills/gameplay-tasks/`, `maante/sub-skills/media-minigames/`, `maante/sub-skills/navigation-realtime/`, `maante/sub-skills/pipeline-development/`, `maante/references/maa-framework-patterns.md`.

### `muzic`

Role: Route Microsoft Muzic research workflows for music understanding, retrieval, symbolic generation, songwriting, and MusicAgent orchestration.
Read when: The request names `muzic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: lyric melody songwriting, music agent workflows, music understanding retrieval, and symbolic generation structure.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `muzic/SKILL.md`, `muzic/sub-skills/lyric-melody-songwriting/`, `muzic/sub-skills/music-agent-workflows/`, `muzic/sub-skills/music-understanding-retrieval/`, `muzic/sub-skills/symbolic-generation-structure/`, `muzic/references/project-map.md`.

### `py-audio-analysis`

Role: Use pyAudioAnalysis for audio feature extraction, classical audio classification/regression, segmentation, diarization, legacy CLI commands, and audio I/O troubleshooting.
Read when: The request names `py-audio-analysis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification regression, cli and io, feature extraction, and segmentation diarization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `py-audio-analysis/SKILL.md`, `py-audio-analysis/sub-skills/classification-regression/`, `py-audio-analysis/sub-skills/cli-and-io/`, `py-audio-analysis/sub-skills/feature-extraction/`, `py-audio-analysis/sub-skills/segmentation-diarization/`, `py-audio-analysis/references/package-overview.md`.

### `pytorch-wildlife`

Role: Use Pytorch-Wildlife for conservation AI workflows involving camera-trap and overhead image detection, wildlife classification, bioacoustic audio pipelines, result post-processing, video demos, and legacy fine-tuning data preparation.
Read when: The request names `pytorch-wildlife` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: bioacoustics, classification, data and postprocessing, detection, and fine tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pytorch-wildlife/SKILL.md`, `pytorch-wildlife/sub-skills/bioacoustics/`, `pytorch-wildlife/sub-skills/classification/`, `pytorch-wildlife/sub-skills/data-and-postprocessing/`, `pytorch-wildlife/sub-skills/detection/`, `pytorch-wildlife/sub-skills/fine-tuning/`, `pytorch-wildlife/references/api-boundaries.md`.

### `spleeter`

Role: Route Spleeter source-separation CLI, Python API, training, and MUSDB evaluation workflows.
Read when: The request names `spleeter` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, separation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `spleeter/SKILL.md`, `spleeter/sub-skills/evaluation/`, `spleeter/sub-skills/separation/`, `spleeter/sub-skills/training/`, `spleeter/references/cli-reference.md`, `spleeter/references/installation-and-runtime.md`.

<!-- DISCO_SCENARIO:speech-and-audio-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
