# Speech Synthesis

## When To Read

Requests in the Speech Synthesis family of the Speech and Audio area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on speech synthesis.

## Repo Skill Options

<!-- DISCO_SCENARIO:speech-synthesis:START -->
### `espnet`

Role: Use when working with ESPnet speech AI toolkit: installation, ESPnet2 recipes and training, pretrained inference/model zoo, ESPnet3 stage workflows, and repository testing.
Read when: The request names `espnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: development and testing, espnet2 training, espnet3 workflows, inference and model zoo, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `espnet/SKILL.md`, `espnet/sub-skills/development-and-testing/`, `espnet/sub-skills/espnet2-training/`, `espnet/sub-skills/espnet3-workflows/`, `espnet/sub-skills/inference-and-model-zoo/`, `espnet/sub-skills/installation-and-diagnostics/`, `espnet/references/repo-provenance.md`.

### `hifi-gan`

Role: Routes HiFi-GAN training, fine-tuning, waveform inference, and checkpoint/config troubleshooting.
Read when: The request names `hifi-gan` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hifi-gan/SKILL.md`, `hifi-gan/sub-skills/inference/`, `hifi-gan/sub-skills/training/`, `hifi-gan/references/configuration.md`, `hifi-gan/references/model-overview.md`, `hifi-gan/references/repo-provenance.md`.

### `mlx-audio`

Role: Use MLX Audio for local TTS, STT, speech enhancement, VAD, realtime speech routing, API serving, and conversion workflows.
Read when: The request names `mlx-audio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: server and conversion, speech transforms vad, stt transcription, and tts generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mlx-audio/SKILL.md`, `mlx-audio/sub-skills/server-and-conversion/`, `mlx-audio/sub-skills/speech-transforms-vad/`, `mlx-audio/sub-skills/stt-transcription/`, `mlx-audio/sub-skills/tts-generation/`, `mlx-audio/references/api-reference.md`.

### `moss-tts`

Role: Route MOSS-TTS family speech, voice-agent, sound-effect, llama.cpp, streaming, and fine-tuning workflows.
Read when: The request names `moss-tts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: finetuning data prep, hf family workflows, llama cpp backend, local v15 streaming, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moss-tts/SKILL.md`, `moss-tts/sub-skills/finetuning-data-prep/`, `moss-tts/sub-skills/hf-family-workflows/`, `moss-tts/sub-skills/llama-cpp-backend/`, `moss-tts/sub-skills/local-v15-streaming/`, `moss-tts/sub-skills/realtime-voice-agent/`, `moss-tts/references/installation-profiles.md`.

### `paddlespeech`

Role: Use PaddleSpeech for ASR, speech translation, Whisper, SSL, TTS, punctuation restoration, audio classification, speaker vectors, keyword spotting, and PaddleSpeech server/client workflows.
Read when: The request names `paddlespeech` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio analysis, deployment serving, speech to text, text processing, and text to speech.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlespeech/SKILL.md`, `paddlespeech/sub-skills/audio-analysis/`, `paddlespeech/sub-skills/deployment-serving/`, `paddlespeech/sub-skills/speech-to-text/`, `paddlespeech/sub-skills/text-processing/`, `paddlespeech/sub-skills/text-to-speech/`, `paddlespeech/references/cli-reference.md`.

### `speech-to-speech`

Role: Operate and troubleshoot Hugging Face speech-to-speech, a modular VAD, STT, LLM, and TTS voice-agent pipeline with an OpenAI Realtime-compatible API and browser demo.
Read when: The request names `speech-to-speech` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: browser demo, cli and server, components and backends, and realtime api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `speech-to-speech/SKILL.md`, `speech-to-speech/sub-skills/browser-demo/`, `speech-to-speech/sub-skills/cli-and-server/`, `speech-to-speech/sub-skills/components-and-backends/`, `speech-to-speech/sub-skills/realtime-api/`, `speech-to-speech/references/install-and-runtime.md`.

### `speechbrain`

Role: Guides SpeechBrain package use, pretrained inference, recipes, audio pipelines, model components, metrics, and repo maintenance for speech and conversational-AI workflows.
Read when: The request names `speechbrain` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: components metrics, data audio pipelines, pretrained inference, recipe training, and repo maintenance.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `speechbrain/SKILL.md`, `speechbrain/sub-skills/components-metrics/`, `speechbrain/sub-skills/data-audio-pipelines/`, `speechbrain/sub-skills/pretrained-inference/`, `speechbrain/sub-skills/recipe-training/`, `speechbrain/sub-skills/repo-maintenance/`, `speechbrain/references/installation-and-environment.md`.

### `style-tts2`

Role: Use StyleTTS2 source-checkout workflows for TTS data/config preparation, staged CUDA training, fine-tuning, pretrained inference, and troubleshooting.
Read when: The request names `style-tts2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and config, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `style-tts2/SKILL.md`, `style-tts2/sub-skills/data-and-config/`, `style-tts2/sub-skills/inference/`, `style-tts2/sub-skills/training/`, `style-tts2/references/repo-provenance.md`, `style-tts2/references/runtime-overview.md`.

### `tacotron`

Role: Guides the legacy TensorFlow 1.x Tacotron repository for text normalization, speech-data preprocessing, Tacotron graph inspection, training, checkpoint synthesis, evaluation, and the Falcon demo server.
Read when: The request names `tacotron` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model architecture, synthesis serving, text normalization, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tacotron/SKILL.md`, `tacotron/sub-skills/data-preparation/`, `tacotron/sub-skills/model-architecture/`, `tacotron/sub-skills/synthesis-serving/`, `tacotron/sub-skills/text-normalization/`, `tacotron/sub-skills/training/`, `tacotron/references/installation.md`.

### `tts`

Role: Use Coqui TTS for released-model inference, the tts and tts-server commands, training and fine-tuning plans, vocoder/audio tooling, and FreeVC voice conversion workflows.
Read when: The request names `tts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and model zoo, server and cli, training config data, vocoder and audio tools, and voice conversion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tts/SKILL.md`, `tts/sub-skills/inference-and-model-zoo/`, `tts/sub-skills/server-and-cli/`, `tts/sub-skills/training-config-data/`, `tts/sub-skills/vocoder-and-audio-tools/`, `tts/sub-skills/voice-conversion/`, `tts/references/package-overview.md`.

### `vits`

Role: Routes VITS text-to-speech workflows for data preparation, training, synthesis, and voice conversion.
Read when: The request names `vits` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vits/SKILL.md`, `vits/sub-skills/data-preparation/`, `vits/sub-skills/inference/`, `vits/sub-skills/training/`, `vits/references/api-reference.md`, `vits/references/configuration.md`.

### `vllm-omni`

Role: Use vLLM-Omni for omni-modality model inference and serving: local Omni APIs, OpenAI-compatible --omni servers, stage deploy configs, model recipes, and model integration workflows.
Read when: The request names `vllm-omni` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model integration, model recipes, offline inference, online serving, and stage configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vllm-omni/SKILL.md`, `vllm-omni/sub-skills/model-integration/`, `vllm-omni/sub-skills/model-recipes/`, `vllm-omni/sub-skills/offline-inference/`, `vllm-omni/sub-skills/online-serving/`, `vllm-omni/sub-skills/stage-configuration/`, `vllm-omni/references/install-and-backends.md`.

<!-- DISCO_SCENARIO:speech-synthesis:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
