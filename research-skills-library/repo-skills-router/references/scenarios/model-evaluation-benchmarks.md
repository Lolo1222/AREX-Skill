# Model Evaluation Benchmarks

## When To Read

Requests in the Model Evaluation Benchmarks family of the LLM Models, Training, and Alignment area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on model evaluation benchmarks.

## Repo Skill Options

<!-- DISCO_SCENARIO:model-evaluation-benchmarks:START -->
### `align-anything`

Role: Operate the Align-Anything multimodal alignment package, including training, serving, remote reward models, and satellite projects.
Read when: The request names `align-anything` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: multimodal serving, project workflows, remote reward models, and training and alignment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `align-anything/SKILL.md`, `align-anything/sub-skills/multimodal-serving/`, `align-anything/sub-skills/project-workflows/`, `align-anything/sub-skills/remote-reward-models/`, `align-anything/sub-skills/training-and-alignment/`, `align-anything/references/installation-and-environment.md`.

### `baichuan-7b`

Role: Operate Baichuan-7B model loading, architecture inspection, C-Eval/MMLU evaluation preflights, and DeepSpeed pretraining setup from self-contained repo guidance.
Read when: The request names `baichuan-7b` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture and loading, evaluation workflows, and pretraining and deepspeed.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `baichuan-7b/SKILL.md`, `baichuan-7b/sub-skills/architecture-and-loading/`, `baichuan-7b/sub-skills/evaluation-workflows/`, `baichuan-7b/sub-skills/pretraining-and-deepspeed/`, `baichuan-7b/references/api-reference.md`, `baichuan-7b/references/repo-provenance.md`.

### `deep-research`

Role: Operate Tongyi DeepResearch and its WebAgent family: ReAct inference setup, rollout validation, benchmark evaluation, and variant routing.
Read when: The request names `deep-research` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark evaluation, react inference, and webagent family.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-research/SKILL.md`, `deep-research/sub-skills/benchmark-evaluation/`, `deep-research/sub-skills/react-inference/`, `deep-research/sub-skills/webagent-family/`, `deep-research/references/configuration.md`, `deep-research/references/model-and-repo-overview.md`.

### `harbor`

Role: Use Harbor to evaluate agents and language models in sandboxed tasks, author benchmark datasets and verifiers, run map-reduce jobs, inspect trajectories and artifacts, publish results, or extend Harbor with custom integrations.
Read when: The request names `harbor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analyze publish, author benchmarks, exec map reduce, integrations, and run evaluate.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `harbor/SKILL.md`, `harbor/sub-skills/analyze-publish/`, `harbor/sub-skills/author-benchmarks/`, `harbor/sub-skills/exec-map-reduce/`, `harbor/sub-skills/integrations/`, `harbor/sub-skills/run-evaluate/`, `harbor/references/architecture.md`.

### `huatuo-llama-med-chinese`

Role: Guides Huatuo-Llama-Med-Chinese / BenTsao Chinese medical LLM inference, LoRA fine-tuning, prompt/data formats, and checkpoint export workflows.
Read when: The request names `huatuo-llama-med-chinese` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpoint export, finetuning, inference, and prompt data formats.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `huatuo-llama-med-chinese/SKILL.md`, `huatuo-llama-med-chinese/sub-skills/checkpoint-export/`, `huatuo-llama-med-chinese/sub-skills/finetuning/`, `huatuo-llama-med-chinese/sub-skills/inference/`, `huatuo-llama-med-chinese/sub-skills/prompt-data-formats/`, `huatuo-llama-med-chinese/references/installation.md`.

### `jarvis`

Role: Use JARVIS, HuggingGPT, EasyTool, and TaskBench for agent tool orchestration, multimodal model routing, concise tool instruction, and task-automation evaluation workflows.
Read when: The request names `jarvis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: easytool, hugginggpt chat, and taskbench.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jarvis/SKILL.md`, `jarvis/sub-skills/easytool/`, `jarvis/sub-skills/hugginggpt-chat/`, `jarvis/sub-skills/taskbench/`, `jarvis/references/repo-overview.md`, `jarvis/references/repo-provenance.md`.

### `llm-foundry`

Role: Use MosaicML LLM Foundry for LLM data preparation, Composer training and fine-tuning YAMLs, ICL evaluation, inference/export, registries, MPT/HF model configuration, and workflow troubleshooting.
Read when: The request names `llm-foundry` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference conversion, package apis configuration, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llm-foundry/SKILL.md`, `llm-foundry/sub-skills/data-preparation/`, `llm-foundry/sub-skills/evaluation/`, `llm-foundry/sub-skills/inference-conversion/`, `llm-foundry/sub-skills/package-apis-configuration/`, `llm-foundry/sub-skills/training-finetuning/`, `llm-foundry/references/repo-provenance.md`.

### `llm4decompile`

Role: Route requests for LLM4Decompile training, direct decompilation, Ghidra refinement, and SK²Decompile workflows.
Read when: The request names `llm4decompile` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, ghidra refine, sk2decompile, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llm4decompile/SKILL.md`, `llm4decompile/sub-skills/evaluation/`, `llm4decompile/sub-skills/ghidra-refine/`, `llm4decompile/sub-skills/sk2decompile/`, `llm4decompile/sub-skills/training/`, `llm4decompile/references/model-overview.md`.

### `lmms-eval`

Role: Router for using lmms-eval to run evaluations, inspect models and tasks, and operate its server and UI.
Read when: The request names `lmms-eval` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and workflows, model backends, service ops, and task authoring.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lmms-eval/SKILL.md`, `lmms-eval/sub-skills/cli-and-workflows/`, `lmms-eval/sub-skills/model-backends/`, `lmms-eval/sub-skills/service-ops/`, `lmms-eval/sub-skills/task-authoring/`, `lmms-eval/references/api-reference.md`.

### `nlp-progress`

Role: Routes tasks for using NLP-progress as a multilingual NLP benchmark/SOTA catalog, structured Markdown export source, and static-content maintenance workflow.
Read when: The request names `nlp-progress` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark catalog, content maintenance, and structured export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nlp-progress/SKILL.md`, `nlp-progress/sub-skills/benchmark-catalog/`, `nlp-progress/sub-skills/content-maintenance/`, `nlp-progress/sub-skills/structured-export/`, `nlp-progress/references/corpus-overview.md`, `nlp-progress/references/repo-provenance.md`.

### `open-flamingo`

Role: Use OpenFlamingo for vision-language model initialization, image-conditioned generation, distributed training, benchmark evaluation, RICES, MMC4/WebDataset conversion, and VQA-style result preparation.
Read when: The request names `open-flamingo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, model usage, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-flamingo/SKILL.md`, `open-flamingo/sub-skills/data-preparation/`, `open-flamingo/sub-skills/evaluation/`, `open-flamingo/sub-skills/model-usage/`, `open-flamingo/sub-skills/training/`, `open-flamingo/references/model-zoo-and-compatibility.md`.

### `openchat`

Role: Use OpenChat/ochat for prompt formatting, OpenAI-compatible serving, and benchmark evaluation of conversational LLMs.
Read when: The request names `openchat` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, prompting, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openchat/SKILL.md`, `openchat/sub-skills/evaluation/`, `openchat/sub-skills/prompting/`, `openchat/sub-skills/serving/`, `openchat/references/installation-and-backends.md`, `openchat/references/repo-provenance.md`.

### `pointllm`

Role: Guide PointLLM point-cloud language-model installation, data preparation, CUDA inference, two-stage training, demos, and benchmark evaluation.
Read when: The request names `pointllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference serving, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pointllm/SKILL.md`, `pointllm/sub-skills/data-preparation/`, `pointllm/sub-skills/evaluation/`, `pointllm/sub-skills/inference-serving/`, `pointllm/sub-skills/training/`, `pointllm/references/repo-provenance.md`.

### `qwen-vl`

Role: Route Qwen-VL multimodal inference, serving, finetuning, and official evaluation workflows.
Read when: The request names `qwen-vl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, finetuning, inference, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `qwen-vl/SKILL.md`, `qwen-vl/sub-skills/evaluation/`, `qwen-vl/sub-skills/finetuning/`, `qwen-vl/sub-skills/inference/`, `qwen-vl/sub-skills/serving/`, `qwen-vl/references/installation.md`.

### `rwkv-lm`

Role: Routes RWKV-LM repository tasks for RWKV training data, RWKV-7 inference/evaluation, architecture comparison, and RWKV-8 ROSA experiments.
Read when: The request names `rwkv-lm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture reference, inference evaluation, rosa experiments, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rwkv-lm/SKILL.md`, `rwkv-lm/sub-skills/architecture-reference/`, `rwkv-lm/sub-skills/inference-evaluation/`, `rwkv-lm/sub-skills/rosa-experiments/`, `rwkv-lm/sub-skills/training-data/`, `rwkv-lm/references/compatibility-and-history.md`.

### `skywork-r1v`

Role: Route Skywork-R1V3 local inference, R1V4 API batch testing, and benchmark reproduction workflows to the right bundled sub-skill.
Read when: The request names `skywork-r1v` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation reproduction, local inference, and r1v4 api testing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `skywork-r1v/SKILL.md`, `skywork-r1v/sub-skills/evaluation-reproduction/`, `skywork-r1v/sub-skills/local-inference/`, `skywork-r1v/sub-skills/r1v4-api-testing/`, `skywork-r1v/references/model-and-backend-overview.md`, `skywork-r1v/references/repo-provenance.md`.

### `vlm-eval-kit`

Role: Use VLMEvalKit (`vlmeval`) for vision-language model evaluation, model/API configuration, benchmark authoring, result inspection, and troubleshooting.
Read when: The request names `vlm-eval-kit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark authoring, evaluation, and model development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vlm-eval-kit/SKILL.md`, `vlm-eval-kit/sub-skills/benchmark-authoring/`, `vlm-eval-kit/sub-skills/evaluation/`, `vlm-eval-kit/sub-skills/model-development/`, `vlm-eval-kit/references/installation-and-environment.md`, `vlm-eval-kit/references/repo-provenance.md`.

<!-- DISCO_SCENARIO:model-evaluation-benchmarks:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
