# Speech Recognition

## When To Read

Requests in the Speech Recognition family of the Speech and Audio area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on speech recognition.

## Repo Skill Options

<!-- DISCO_SCENARIO:speech-recognition:START -->
### `asrt-speech-recognition`

Role: Operate ASRT SpeechRecognition Chinese ASR data, acoustic models, pinyin language model, and serving clients.
Read when: The request names `asrt-speech-recognition` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: acoustic models, data and features, language model, and serving clients.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `asrt-speech-recognition/SKILL.md`, `asrt-speech-recognition/sub-skills/acoustic-models/`, `asrt-speech-recognition/sub-skills/data-and-features/`, `asrt-speech-recognition/sub-skills/language-model/`, `asrt-speech-recognition/sub-skills/serving-clients/`, `asrt-speech-recognition/references/installation-and-runtime.md`.

### `distil-whisper`

Role: Routes Distil-Whisper inference, PyTorch distillation training, and Flax reproduction workflows.
Read when: The request names `distil-whisper` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: flax reproduction, inference, and pytorch training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `distil-whisper/SKILL.md`, `distil-whisper/sub-skills/flax-reproduction/`, `distil-whisper/sub-skills/inference/`, `distil-whisper/sub-skills/pytorch-training/`, `distil-whisper/references/model-overview.md`, `distil-whisper/references/repo-provenance.md`.

### `espnet`

Role: Use when working with ESPnet speech AI toolkit: installation, ESPnet2 recipes and training, pretrained inference/model zoo, ESPnet3 stage workflows, and repository testing.
Read when: The request names `espnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: development and testing, espnet2 training, espnet3 workflows, inference and model zoo, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `espnet/SKILL.md`, `espnet/sub-skills/development-and-testing/`, `espnet/sub-skills/espnet2-training/`, `espnet/sub-skills/espnet3-workflows/`, `espnet/sub-skills/inference-and-model-zoo/`, `espnet/sub-skills/installation-and-diagnostics/`, `espnet/references/repo-provenance.md`.

### `faster-whisper`

Role: Use the faster-whisper package for CTranslate2-backed Whisper transcription, model selection, CPU/CUDA setup, audio utilities, VAD, timestamps, and conversion guidance.
Read when: The request names `faster-whisper` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: transcription.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `faster-whisper/SKILL.md`, `faster-whisper/sub-skills/transcription/`, `faster-whisper/references/installation-and-backends.md`, `faster-whisper/references/model-management.md`, `faster-whisper/references/repo-provenance.md`, `faster-whisper/references/troubleshooting.md`.

### `funasr`

Role: Router for FunASR speech workflows: local transcription, subtitles, services, vLLM, normalization, and training/export.
Read when: The request names `funasr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: llm asr and vllm, python asr pipelines, serving and runtime, text normalization, and training data and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funasr/SKILL.md`, `funasr/sub-skills/llm-asr-and-vllm/`, `funasr/sub-skills/python-asr-pipelines/`, `funasr/sub-skills/serving-and-runtime/`, `funasr/sub-skills/text-normalization/`, `funasr/sub-skills/training-data-and-export/`, `funasr/references/api-reference.md`.

### `funclip`

Role: Guide FunClip ASR video/audio clipping, LLM-assisted clipping providers, and release packaging workflows.
Read when: The request names `funclip` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: clip workflows, llm providers, and release packaging.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funclip/SKILL.md`, `funclip/sub-skills/clip-workflows/`, `funclip/sub-skills/llm-providers/`, `funclip/sub-skills/release-packaging/`, `funclip/references/installation-and-runtime.md`, `funclip/references/repo-provenance.md`.

### `mlx-audio`

Role: Use MLX Audio for local TTS, STT, speech enhancement, VAD, realtime speech routing, API serving, and conversion workflows.
Read when: The request names `mlx-audio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: server and conversion, speech transforms vad, stt transcription, and tts generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mlx-audio/SKILL.md`, `mlx-audio/sub-skills/server-and-conversion/`, `mlx-audio/sub-skills/speech-transforms-vad/`, `mlx-audio/sub-skills/stt-transcription/`, `mlx-audio/sub-skills/tts-generation/`, `mlx-audio/references/api-reference.md`.

### `ofa`

Role: Routes OFA workflows for multimodal pretraining, captioning, VQA, RefCOCO, OCR, ImageNet, image generation, Gigaword, GLUE, and MMSpeech, with safe setup and validation helpers.
Read when: The request names `ofa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data formats, image generation, language tasks, mmspeech, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ofa/SKILL.md`, `ofa/sub-skills/data-formats/`, `ofa/sub-skills/image-generation/`, `ofa/sub-skills/language-tasks/`, `ofa/sub-skills/mmspeech/`, `ofa/sub-skills/model-internals-and-extension/`, `ofa/references/repo-provenance.md`.

### `paddlespeech`

Role: Use PaddleSpeech for ASR, speech translation, Whisper, SSL, TTS, punctuation restoration, audio classification, speaker vectors, keyword spotting, and PaddleSpeech server/client workflows.
Read when: The request names `paddlespeech` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio analysis, deployment serving, speech to text, text processing, and text to speech.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paddlespeech/SKILL.md`, `paddlespeech/sub-skills/audio-analysis/`, `paddlespeech/sub-skills/deployment-serving/`, `paddlespeech/sub-skills/speech-to-text/`, `paddlespeech/sub-skills/text-processing/`, `paddlespeech/sub-skills/text-to-speech/`, `paddlespeech/references/cli-reference.md`.

### `porcupine`

Role: Operate Picovoice Porcupine wake-word detection across Python, Node.js, Web, mobile, managed SDK, C, and embedded workflows.
Read when: The request names `porcupine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: c and embedded, custom keywords and assets, managed and mobile sdks, nodejs server, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `porcupine/SKILL.md`, `porcupine/sub-skills/c-and-embedded/`, `porcupine/sub-skills/custom-keywords-and-assets/`, `porcupine/sub-skills/managed-and-mobile-sdks/`, `porcupine/sub-skills/nodejs-server/`, `porcupine/sub-skills/python-and-cli/`, `porcupine/references/compatibility-and-assets.md`.

### `speech-recognition`

Role: Guides SpeechRecognition package workflows for audio loading, microphone capture, speech recognizer engines, CLI/model setup, and repository maintenance.
Read when: The request names `speech-recognition` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: audio data, capture listening, cli model setup, recognition engines, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `speech-recognition/SKILL.md`, `speech-recognition/sub-skills/audio-data/`, `speech-recognition/sub-skills/capture-listening/`, `speech-recognition/sub-skills/cli-model-setup/`, `speech-recognition/sub-skills/recognition-engines/`, `speech-recognition/sub-skills/repo-development/`, `speech-recognition/references/package-overview.md`.

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

### `stt`

Role: Operate the STT local speech-to-text app for setup, browser uploads, HTTP transcription APIs, and CUDA-aware troubleshooting.
Read when: The request names `stt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: setup and transcription.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `stt/SKILL.md`, `stt/sub-skills/setup/`, `stt/sub-skills/transcription/`, `stt/references/overview.md`, `stt/references/repo-provenance.md`, `stt/references/troubleshooting.md`.

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

<!-- DISCO_SCENARIO:speech-recognition:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
