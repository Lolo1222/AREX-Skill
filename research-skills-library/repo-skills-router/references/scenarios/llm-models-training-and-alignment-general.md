# LLM Models, Training, and Alignment — General

## When To Read

LLM Models, Training, and Alignment requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:llm-models-training-and-alignment-general:START -->
### `areal`

Role: Use AReaL for large-scale asynchronous LLM reinforcement learning, agentic RL, distributed post-training, inference/agent services, backend planning, and customization workflows.
Read when: The request names `areal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom data rewards workflows, distributed engines backends, post training experiments, and services cli operations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `areal/SKILL.md`, `areal/sub-skills/custom-data-rewards-workflows/`, `areal/sub-skills/distributed-engines-backends/`, `areal/sub-skills/post-training-experiments/`, `areal/sub-skills/services-cli-operations/`, `areal/references/configuration-cheatsheet.md`.

### `deep-analyze`

Role: Router for DeepAnalyze agentic data-science workflows.
Read when: The request names `deep-analyze` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api and clients, interactive frontends, model serving, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-analyze/SKILL.md`, `deep-analyze/sub-skills/api-and-clients/`, `deep-analyze/sub-skills/interactive-frontends/`, `deep-analyze/sub-skills/model-serving/`, `deep-analyze/sub-skills/training-and-evaluation/`, `deep-analyze/references/install-and-environment.md`.

### `lmflow`

Role: Routes LMFlow dataset, training, inference, evaluation, alignment, and multimodal workflows.
Read when: The request names `lmflow` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and templates, inference and evaluation, multimodal and extensions, post training alignment, and training and optimization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lmflow/SKILL.md`, `lmflow/sub-skills/data-and-templates/`, `lmflow/sub-skills/inference-and-evaluation/`, `lmflow/sub-skills/multimodal-and-extensions/`, `lmflow/sub-skills/post-training-alignment/`, `lmflow/sub-skills/training-and-optimization/`, `lmflow/references/api-map.md`.

### `minimind`

Role: Routes MiniMind LLM architecture, tokenizer, training, inference, serving, model conversion, RLHF, RLAIF, and Agentic RL workflows.
Read when: The request names `minimind` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference serving, rlhf agentic, and training basics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minimind/SKILL.md`, `minimind/sub-skills/inference-serving/`, `minimind/sub-skills/rlhf-agentic/`, `minimind/sub-skills/training-basics/`, `minimind/references/package-overview.md`, `minimind/references/repo-provenance.md`.

### `minimind-v`

Role: Routes MiniMind-V tiny vision-language model setup, data validation, architecture/API inspection, inference/WebUI, training, and checkpoint conversion workflows.
Read when: The request names `minimind-v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and resources, inference and serving, model architecture and api, model export and format conversion, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minimind-v/SKILL.md`, `minimind-v/sub-skills/data-and-resources/`, `minimind-v/sub-skills/inference-and-serving/`, `minimind-v/sub-skills/model-architecture-and-api/`, `minimind-v/sub-skills/model-export-and-format-conversion/`, `minimind-v/sub-skills/training/`, `minimind-v/references/installation-and-environment.md`.

### `pointllm`

Role: Guide PointLLM point-cloud language-model installation, data preparation, CUDA inference, two-stage training, demos, and benchmark evaluation.
Read when: The request names `pointllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference serving, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pointllm/SKILL.md`, `pointllm/sub-skills/data-preparation/`, `pointllm/sub-skills/evaluation/`, `pointllm/sub-skills/inference-serving/`, `pointllm/sub-skills/training/`, `pointllm/references/repo-provenance.md`.

### `train-llm-from-scratch`

Role: Route train-llm-from-scratch workflows for from-scratch PyTorch LLM pretraining, SFT, reward modeling, DPO/ORPO/KTO, PPO, GRPO/RLVR, evaluation, chat, configs, UI, and data validation.
Read when: The request names `train-llm-from-scratch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration ui, data preparation, evaluation chat, model pretraining, and post training rlhf.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `train-llm-from-scratch/SKILL.md`, `train-llm-from-scratch/sub-skills/configuration-ui/`, `train-llm-from-scratch/sub-skills/data-preparation/`, `train-llm-from-scratch/sub-skills/evaluation-chat/`, `train-llm-from-scratch/sub-skills/model-pretraining/`, `train-llm-from-scratch/sub-skills/post-training-rlhf/`, `train-llm-from-scratch/references/installation.md`.

### `xtuner`

Role: Use XTuner for large-model SFT, pretraining, MLLM fine-tuning, data preparation, model/backend configuration, RL/GRPO post-training, and legacy XTuner tooling.
Read when: The request names `xtuner` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and tools, data preparation, model backends, reinforcement learning, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xtuner/SKILL.md`, `xtuner/sub-skills/cli-and-tools/`, `xtuner/sub-skills/data-preparation/`, `xtuner/sub-skills/model-backends/`, `xtuner/sub-skills/reinforcement-learning/`, `xtuner/sub-skills/training/`, `xtuner/references/native-verification.md`.

<!-- DISCO_SCENARIO:llm-models-training-and-alignment-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
