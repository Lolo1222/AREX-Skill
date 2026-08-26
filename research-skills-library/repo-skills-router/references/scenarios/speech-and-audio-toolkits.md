# Speech and Audio Toolkits

## When To Read

Requests in the Speech and Audio Toolkits family of the Speech and Audio area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on speech and audio toolkits.

## Repo Skill Options

<!-- DISCO_SCENARIO:speech-and-audio-toolkits:START -->
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

### `espnet`

Role: Use when working with ESPnet speech AI toolkit: installation, ESPnet2 recipes and training, pretrained inference/model zoo, ESPnet3 stage workflows, and repository testing.
Read when: The request names `espnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: development and testing, espnet2 training, espnet3 workflows, inference and model zoo, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `espnet/SKILL.md`, `espnet/sub-skills/development-and-testing/`, `espnet/sub-skills/espnet2-training/`, `espnet/sub-skills/espnet3-workflows/`, `espnet/sub-skills/inference-and-model-zoo/`, `espnet/sub-skills/installation-and-diagnostics/`, `espnet/references/repo-provenance.md`.

### `funasr`

Role: Router for FunASR speech workflows: local transcription, subtitles, services, vLLM, normalization, and training/export.
Read when: The request names `funasr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: llm asr and vllm, python asr pipelines, serving and runtime, text normalization, and training data and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funasr/SKILL.md`, `funasr/sub-skills/llm-asr-and-vllm/`, `funasr/sub-skills/python-asr-pipelines/`, `funasr/sub-skills/serving-and-runtime/`, `funasr/sub-skills/text-normalization/`, `funasr/sub-skills/training-data-and-export/`, `funasr/references/api-reference.md`.

### `genai-processors`

Role: Route GenAI Processors tasks to the right workflow guide.
Read when: The request names `genai-processors` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core composition, examples and apps, model backends, and multimodal i o.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `genai-processors/SKILL.md`, `genai-processors/sub-skills/core-composition/`, `genai-processors/sub-skills/examples-and-apps/`, `genai-processors/sub-skills/model-backends/`, `genai-processors/sub-skills/multimodal-i-o/`, `genai-processors/references/install.md`.

### `mlx-audio`

Role: Use MLX Audio for local TTS, STT, speech enhancement, VAD, realtime speech routing, API serving, and conversion workflows.
Read when: The request names `mlx-audio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: server and conversion, speech transforms vad, stt transcription, and tts generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mlx-audio/SKILL.md`, `mlx-audio/sub-skills/server-and-conversion/`, `mlx-audio/sub-skills/speech-transforms-vad/`, `mlx-audio/sub-skills/stt-transcription/`, `mlx-audio/sub-skills/tts-generation/`, `mlx-audio/references/api-reference.md`.

### `paddlespeech`

Role: Use PaddleSpeech for ASR, speech translation, Whisper, SSL, TTS, punctuation restoration, audio classification, speaker vectors, keyword spotting, and PaddleSpeech server/client workflows.
Read when: The request names `paddlespeech` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio analysis, deployment serving, speech to text, text processing, and text to speech.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlespeech/SKILL.md`, `paddlespeech/sub-skills/audio-analysis/`, `paddlespeech/sub-skills/deployment-serving/`, `paddlespeech/sub-skills/speech-to-text/`, `paddlespeech/sub-skills/text-processing/`, `paddlespeech/sub-skills/text-to-speech/`, `paddlespeech/references/cli-reference.md`.

### `py-audio-analysis`

Role: Use pyAudioAnalysis for audio feature extraction, classical audio classification/regression, segmentation, diarization, legacy CLI commands, and audio I/O troubleshooting.
Read when: The request names `py-audio-analysis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification regression, cli and io, feature extraction, and segmentation diarization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `py-audio-analysis/SKILL.md`, `py-audio-analysis/sub-skills/classification-regression/`, `py-audio-analysis/sub-skills/cli-and-io/`, `py-audio-analysis/sub-skills/feature-extraction/`, `py-audio-analysis/sub-skills/segmentation-diarization/`, `py-audio-analysis/references/package-overview.md`.

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

### `tts`

Role: Use Coqui TTS for released-model inference, the tts and tts-server commands, training and fine-tuning plans, vocoder/audio tooling, and FreeVC voice conversion workflows.
Read when: The request names `tts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference and model zoo, server and cli, training config data, vocoder and audio tools, and voice conversion.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tts/SKILL.md`, `tts/sub-skills/inference-and-model-zoo/`, `tts/sub-skills/server-and-cli/`, `tts/sub-skills/training-config-data/`, `tts/sub-skills/vocoder-and-audio-tools/`, `tts/sub-skills/voice-conversion/`, `tts/references/package-overview.md`.

### `wenet`

Role: Use WeNet for ASR package transcription, data preparation, training and decoding recipes, model export, and production runtime deployment.
Read when: The request names `wenet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, model export, package transcription, runtime deployment, and training and decoding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `wenet/SKILL.md`, `wenet/sub-skills/data-preparation/`, `wenet/sub-skills/model-export/`, `wenet/sub-skills/package-transcription/`, `wenet/sub-skills/runtime-deployment/`, `wenet/sub-skills/training-and-decoding/`, `wenet/references/repo-provenance.md`.

### `whisperx`

Role: Operate WhisperX speech transcription, forced alignment, diarization, VAD, and subtitle/output workflows through CLI and Python APIs.
Read when: The request names `whisperx` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: alignment timestamps, asr python api, diarization speakers, outputs subtitles, and transcription cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `whisperx/SKILL.md`, `whisperx/sub-skills/alignment-timestamps/`, `whisperx/sub-skills/asr-python-api/`, `whisperx/sub-skills/diarization-speakers/`, `whisperx/sub-skills/outputs-subtitles/`, `whisperx/sub-skills/transcription-cli/`, `whisperx/references/backend-and-environment.md`.

<!-- DISCO_SCENARIO:speech-and-audio-toolkits:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
