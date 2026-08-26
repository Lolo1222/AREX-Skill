# Pretraining

## When To Read

Requests in the Pretraining family of the LLM Models, Training, and Alignment area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on pretraining.

## Repo Skill Options

<!-- DISCO_SCENARIO:pretraining:START -->
### `baichuan-7b`

Role: Operate Baichuan-7B model loading, architecture inspection, C-Eval/MMLU evaluation preflights, and DeepSpeed pretraining setup from self-contained repo guidance.
Read when: The request names `baichuan-7b` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture and loading, evaluation workflows, and pretraining and deepspeed.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `baichuan-7b/SKILL.md`, `baichuan-7b/sub-skills/architecture-and-loading/`, `baichuan-7b/sub-skills/evaluation-workflows/`, `baichuan-7b/sub-skills/pretraining-and-deepspeed/`, `baichuan-7b/references/api-reference.md`, `baichuan-7b/references/repo-provenance.md`.

### `bert-pytorch`

Role: Use BERT-pytorch for corpus preparation, vocabulary building, and tiny BERT pretraining workflows.
Read when: The request names `bert-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bert-pytorch/SKILL.md`, `bert-pytorch/sub-skills/data-preparation/`, `bert-pytorch/sub-skills/training/`, `bert-pytorch/references/api-reference.md`, `bert-pytorch/references/cli-reference.md`, `bert-pytorch/references/repo-provenance.md`.

### `chinese-llama-alpaca`

Role: Route Chinese-LLaMA-Alpaca model reconstruction, inference/deployment, training/fine-tuning, and evaluation workflows.
Read when: The request names `chinese-llama-alpaca` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation benchmarks, inference deployment, model reconstruction, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chinese-llama-alpaca/SKILL.md`, `chinese-llama-alpaca/sub-skills/evaluation-benchmarks/`, `chinese-llama-alpaca/sub-skills/inference-deployment/`, `chinese-llama-alpaca/sub-skills/model-reconstruction/`, `chinese-llama-alpaca/sub-skills/training-finetuning/`, `chinese-llama-alpaca/references/compliance-and-limitations.md`.

### `chinese-llama-alpaca-2`

Role: Routes Chinese-LLaMA-Alpaca-2 training, inference, serving, evaluation, and integration workflows.
Read when: The request names `chinese-llama-alpaca-2` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api serving, evaluation, hf inference, local integrations, and train and merge.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chinese-llama-alpaca-2/SKILL.md`, `chinese-llama-alpaca-2/sub-skills/api-serving/`, `chinese-llama-alpaca-2/sub-skills/evaluation/`, `chinese-llama-alpaca-2/sub-skills/hf-inference/`, `chinese-llama-alpaca-2/sub-skills/local-integrations/`, `chinese-llama-alpaca-2/sub-skills/train-and-merge/`, `chinese-llama-alpaca-2/references/model-overview.md`.

### `fengshenbang-lm`

Role: Operate the Fengshenbang-LM Fengshen package for pipelines, model families, data/training utilities, examples, and conversion planning.
Read when: The request names `fengshenbang-lm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data training, examples conversion, model zoo, and pipelines cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fengshenbang-lm/SKILL.md`, `fengshenbang-lm/sub-skills/data-training/`, `fengshenbang-lm/sub-skills/examples-conversion/`, `fengshenbang-lm/sub-skills/model-zoo/`, `fengshenbang-lm/sub-skills/pipelines-cli/`, `fengshenbang-lm/references/installation.md`.

### `gpt2-chinese`

Role: Routes GPT2-Chinese training, generation, perplexity evaluation, and tokenizer or vocabulary workflows.
Read when: The request names `gpt2-chinese` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: generation, tokenization, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gpt2-chinese/SKILL.md`, `gpt2-chinese/sub-skills/generation/`, `gpt2-chinese/sub-skills/tokenization/`, `gpt2-chinese/sub-skills/training/`, `gpt2-chinese/references/api-reference.md`, `gpt2-chinese/references/cli-reference.md`.

### `llm-foundry`

Role: Use MosaicML LLM Foundry for LLM data preparation, Composer training and fine-tuning YAMLs, ICL evaluation, inference/export, registries, MPT/HF model configuration, and workflow troubleshooting.
Read when: The request names `llm-foundry` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, inference conversion, package apis configuration, and training finetuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llm-foundry/SKILL.md`, `llm-foundry/sub-skills/data-preparation/`, `llm-foundry/sub-skills/evaluation/`, `llm-foundry/sub-skills/inference-conversion/`, `llm-foundry/sub-skills/package-apis-configuration/`, `llm-foundry/sub-skills/training-finetuning/`, `llm-foundry/references/repo-provenance.md`.

### `megatron-lm`

Role: Verified operating guidance for Megatron-LM and Megatron Core installation, distributed training, model parallelism, data, checkpoints, inference, optional RL/multimodal workflows, and repository maintenance.
Read when: The request names `megatron-lm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: checkpointing and conversion, core models and parallelism, inference and serving, install and environment, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `megatron-lm/SKILL.md`, `megatron-lm/sub-skills/checkpointing-and-conversion/`, `megatron-lm/sub-skills/core-models-and-parallelism/`, `megatron-lm/sub-skills/inference-and-serving/`, `megatron-lm/sub-skills/install-and-environment/`, `megatron-lm/sub-skills/post-training-rl-and-multimodal/`, `megatron-lm/references/capability-map.md`.

### `minimind`

Role: Routes MiniMind LLM architecture, tokenizer, training, inference, serving, model conversion, RLHF, RLAIF, and Agentic RL workflows.
Read when: The request names `minimind` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: inference serving, rlhf agentic, and training basics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minimind/SKILL.md`, `minimind/sub-skills/inference-serving/`, `minimind/sub-skills/rlhf-agentic/`, `minimind/sub-skills/training-basics/`, `minimind/references/package-overview.md`, `minimind/references/repo-provenance.md`.

### `open-flamingo`

Role: Use OpenFlamingo for vision-language model initialization, image-conditioned generation, distributed training, benchmark evaluation, RICES, MMC4/WebDataset conversion, and VQA-style result preparation.
Read when: The request names `open-flamingo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation, model usage, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-flamingo/SKILL.md`, `open-flamingo/sub-skills/data-preparation/`, `open-flamingo/sub-skills/evaluation/`, `open-flamingo/sub-skills/model-usage/`, `open-flamingo/sub-skills/training/`, `open-flamingo/references/model-zoo-and-compatibility.md`.

### `palm-rlhf-pytorch`

Role: Operate the PaLM-rlhf-pytorch package for PaLM modeling, reward modeling, and RLHF/post-training workflows.
Read when: The request names `palm-rlhf-pytorch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: palm modeling, policy optimization, and reward modeling.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `palm-rlhf-pytorch/SKILL.md`, `palm-rlhf-pytorch/sub-skills/palm-modeling/`, `palm-rlhf-pytorch/sub-skills/policy-optimization/`, `palm-rlhf-pytorch/sub-skills/reward-modeling/`, `palm-rlhf-pytorch/references/package-overview.md`, `palm-rlhf-pytorch/references/repo-provenance.md`.

### `rwkv-lm`

Role: Routes RWKV-LM repository tasks for RWKV training data, RWKV-7 inference/evaluation, architecture comparison, and RWKV-8 ROSA experiments.
Read when: The request names `rwkv-lm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: architecture reference, inference evaluation, rosa experiments, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rwkv-lm/SKILL.md`, `rwkv-lm/sub-skills/architecture-reference/`, `rwkv-lm/sub-skills/inference-evaluation/`, `rwkv-lm/sub-skills/rosa-experiments/`, `rwkv-lm/sub-skills/training-data/`, `rwkv-lm/references/compatibility-and-history.md`.

### `train-llm-from-scratch`

Role: Route train-llm-from-scratch workflows for from-scratch PyTorch LLM pretraining, SFT, reward modeling, DPO/ORPO/KTO, PPO, GRPO/RLVR, evaluation, chat, configs, UI, and data validation.
Read when: The request names `train-llm-from-scratch` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configuration ui, data preparation, evaluation chat, model pretraining, and post training rlhf.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `train-llm-from-scratch/SKILL.md`, `train-llm-from-scratch/sub-skills/configuration-ui/`, `train-llm-from-scratch/sub-skills/data-preparation/`, `train-llm-from-scratch/sub-skills/evaluation-chat/`, `train-llm-from-scratch/sub-skills/model-pretraining/`, `train-llm-from-scratch/sub-skills/post-training-rlhf/`, `train-llm-from-scratch/references/installation.md`.

### `xlnet`

Role: Operate the legacy TensorFlow 1.x XLNet repository for model APIs, classification, SQuAD, RACE, and pretraining workflows.
Read when: The request names `xlnet` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classification, data pretraining, model api, race reading comprehension, and squad qa.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xlnet/SKILL.md`, `xlnet/sub-skills/classification/`, `xlnet/sub-skills/data-pretraining/`, `xlnet/sub-skills/model-api/`, `xlnet/sub-skills/race-reading-comprehension/`, `xlnet/sub-skills/squad-qa/`, `xlnet/references/model-overview.md`.

<!-- DISCO_SCENARIO:pretraining:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
