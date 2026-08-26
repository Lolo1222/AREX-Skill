# Inference Serving

## When To Read

Requests in the Inference Serving family of the Model Deployment and Optimization area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on inference serving.

## Repo Skill Options

<!-- DISCO_SCENARIO:inference-serving:START -->
### `chatglm2-6b`

Role: Guides ChatGLM2-6B Transformers inference, local demos, FastAPI/OpenAI-compatible serving, C-Eval evaluation, and P-Tuning v2 fine-tuning.
Read when: The request names `chatglm2-6b` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api serving, chat and demos, evaluation, and ptuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `chatglm2-6b/SKILL.md`, `chatglm2-6b/sub-skills/api-serving/`, `chatglm2-6b/sub-skills/chat-and-demos/`, `chatglm2-6b/sub-skills/evaluation/`, `chatglm2-6b/sub-skills/ptuning/`, `chatglm2-6b/references/license-and-safety.md`.

### `colossal-ai`

Role: Use ColossalAI for distributed PyTorch training, large-model parallelism, Booster plugins, ShardFormer, Colossal-Inference, and first-party application workflow routing.
Read when: The request names `colossal-ai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: application recipes, booster training, inference and serving, installation and launch, and parallelism and sharding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `colossal-ai/SKILL.md`, `colossal-ai/sub-skills/application-recipes/`, `colossal-ai/sub-skills/booster-training/`, `colossal-ai/sub-skills/inference-and-serving/`, `colossal-ai/sub-skills/installation-and-launch/`, `colossal-ai/sub-skills/parallelism-and-sharding/`, `colossal-ai/references/installation.md`.

### `dexbotic`

Role: Use Dexbotic to prepare DexData, train and serve vision-language-action policies, evaluate checkpoints, and integrate explicitly external RL or robot backends.
Read when: The request names `dexbotic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, evaluation deployment, inference serving, rl backends, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `dexbotic/SKILL.md`, `dexbotic/sub-skills/data-preparation/`, `dexbotic/sub-skills/evaluation-deployment/`, `dexbotic/sub-skills/inference-serving/`, `dexbotic/sub-skills/rl-backends/`, `dexbotic/sub-skills/training/`, `dexbotic/references/environment.md`.

### `discoart`

Role: Use this repo skill for DiscoArt image generation, configuration/prompt scheduling, CLI, Jina serving, Docker runtime planning, and troubleshooting.
Read when: The request names `discoart` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: artwork generation, cli and serving, and configuration and prompts.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `discoart/SKILL.md`, `discoart/sub-skills/artwork-generation/`, `discoart/sub-skills/cli-and-serving/`, `discoart/sub-skills/configuration-and-prompts/`, `discoart/references/package-overview.md`, `discoart/references/repo-provenance.md`.

### `earth2studio`

Role: Guides Earth2Studio weather and climate inference workflows, data access, model and component selection, output/checkpoint handling, extension, and optional REST serving with backend-aware validation.
Read when: The request names `earth2studio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data sources, ensembles, installation discovery, io checkpointing, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `earth2studio/SKILL.md`, `earth2studio/sub-skills/data-sources/`, `earth2studio/sub-skills/ensembles/`, `earth2studio/sub-skills/installation-discovery/`, `earth2studio/sub-skills/io-checkpointing/`, `earth2studio/sub-skills/models-and-assimilation/`, `earth2studio/references/repo-provenance.md`.

### `fastvideo`

Role: Use this repo-specific skill when the current task touches FastVideo source, examples, tests, docs, scripts, or the Dreamverse app. It routes work to the right FastVideo subsystem, preserves the repo's two training stacks and per-directory AGENTS rules, and chooses bounded CUDA/test verification instead of running heavyweight model jobs by default.
Read when: The request names `fastvideo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fastvideo/SKILL.md`, `fastvideo/references/pitfalls.md`, `fastvideo/references/repository-evidence.md`, `fastvideo/references/runtime-and-tests.md`, `fastvideo/scripts/select_fastvideo_tests.py`, `fastvideo/scripts/verify_fastvideo_runtime.py`.

### `fedml`

Role: Use FedML for setup, CLI operations, MLOps launch, distributed and federated training, model serving, and workflow orchestration.
Read when: The request names `fedml` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: distributed training, federated learning, launch and packaging, model serving, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `fedml/SKILL.md`, `fedml/sub-skills/distributed-training/`, `fedml/sub-skills/federated-learning/`, `fedml/sub-skills/launch-and-packaging/`, `fedml/sub-skills/model-serving/`, `fedml/sub-skills/setup-and-cli/`, `fedml/references/api-reference.md`.

### `funasr`

Role: Router for FunASR speech workflows: local transcription, subtitles, services, vLLM, normalization, and training/export.
Read when: The request names `funasr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: llm asr and vllm, python asr pipelines, serving and runtime, text normalization, and training data and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `funasr/SKILL.md`, `funasr/sub-skills/llm-asr-and-vllm/`, `funasr/sub-skills/python-asr-pipelines/`, `funasr/sub-skills/serving-and-runtime/`, `funasr/sub-skills/text-normalization/`, `funasr/sub-skills/training-data-and-export/`, `funasr/references/api-reference.md`.

### `hivemind`

Role: Routes Hivemind workflows for decentralized DHTs, collaborative training, and remote experts.
Read when: The request names `hivemind` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: collaborative training, dht, and moe.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hivemind/SKILL.md`, `hivemind/sub-skills/collaborative-training/`, `hivemind/sub-skills/dht/`, `hivemind/sub-skills/moe/`, `hivemind/references/repo-provenance.md`, `hivemind/references/troubleshooting.md`.

### `hunyuan-image-3-0`

Role: Route HunyuanImage-3.0 local generation, prompt conditioning, package APIs, Gradio UI, and vLLM serving workflows.
Read when: The request names `hunyuan-image-3-0` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core apis and architecture, gradio app and prompt ui, local inference cli, prompt and image conditioning, and vllm serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `hunyuan-image-3-0/SKILL.md`, `hunyuan-image-3-0/sub-skills/core-apis-and-architecture/`, `hunyuan-image-3-0/sub-skills/gradio-app-and-prompt-ui/`, `hunyuan-image-3-0/sub-skills/local-inference-cli/`, `hunyuan-image-3-0/sub-skills/prompt-and-image-conditioning/`, `hunyuan-image-3-0/sub-skills/vllm-serving/`, `hunyuan-image-3-0/references/hardware-and-models.md`.

### `igel`

Role: Use Igel for classic tabular ML, FastAPI serving, and AutoKeras-backed Auto-ML workflows.
Read when: The request names `igel` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auto ml, deployment, and tabular workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `igel/SKILL.md`, `igel/sub-skills/auto-ml/`, `igel/sub-skills/deployment/`, `igel/sub-skills/tabular-workflows/`, `igel/references/package-overview.md`, `igel/references/repo-provenance.md`.

### `jina-serve`

Role: Use Jina-serve to build, serve, orchestrate, call, observe, and deploy AI microservices and pipelines with the jina Python package.
Read when: The request names `jina-serve` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and configuration, client and protocols, executor service patterns, observability and production, and orchestration and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jina-serve/SKILL.md`, `jina-serve/sub-skills/cli-and-configuration/`, `jina-serve/sub-skills/client-and-protocols/`, `jina-serve/sub-skills/executor-service-patterns/`, `jina-serve/sub-skills/observability-and-production/`, `jina-serve/sub-skills/orchestration-and-deployment/`, `jina-serve/references/api-overview.md`.

### `leptonai`

Role: Use the LeptonAI Python SDK and lep CLI for NVIDIA DGX Cloud Lepton workspaces, endpoint calls, workloads, storage, secrets, ingress routing, and safe cloud-operation planning.
Read when: The request names `leptonai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, sdk client, storage secrets ingress, workload management, and workspace and auth.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `leptonai/SKILL.md`, `leptonai/sub-skills/cli-operations/`, `leptonai/sub-skills/sdk-client/`, `leptonai/sub-skills/storage-secrets-ingress/`, `leptonai/sub-skills/workload-management/`, `leptonai/sub-skills/workspace-and-auth/`, `leptonai/references/package-overview.md`.

### `lerobot`

Role: Route LeRobot robotics workflows for datasets, policies, training, evaluation, simulation, physical robot control, and package extensions with verified configuration and safety gates.
Read when: The request names `lerobot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dataset workflows, extensions and services, policy training inference, robot control data collection, and simulation and rl.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lerobot/SKILL.md`, `lerobot/sub-skills/dataset-workflows/`, `lerobot/sub-skills/extensions-and-services/`, `lerobot/sub-skills/policy-training-inference/`, `lerobot/sub-skills/robot-control-data-collection/`, `lerobot/sub-skills/simulation-and-rl/`, `lerobot/references/quick-reference.md`.

### `lightllm`

Role: Route LightLLM serving, deployment, and validation workflows into bundled references and sub-skills.
Read when: The request names `lightllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark validation, deployment topologies, model runtime, and serving api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightllm/SKILL.md`, `lightllm/sub-skills/benchmark-validation/`, `lightllm/sub-skills/deployment-topologies/`, `lightllm/sub-skills/model-runtime/`, `lightllm/sub-skills/serving-api/`, `lightllm/references/api-reference.md`.

### `litserve`

Role: Serve custom AI APIs with LitServe, including general LitAPI and LitServer workflows, OpenAI-compatible endpoints, MCP tools, and deployment helpers.
Read when: The request names `litserve` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: mcp, openai specs, and server basics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `litserve/SKILL.md`, `litserve/sub-skills/mcp/`, `litserve/sub-skills/openai-specs/`, `litserve/sub-skills/server-basics/`, `litserve/references/installation.md`, `litserve/references/repo-provenance.md`.

### `llava`

Role: Guides LLaVA vision-language model inference, serving, training, fine-tuning, evaluation, benchmark conversion, checkpoint utilities, and troubleshooting.
Read when: The request names `llava` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: chat and serve, evaluate and benchmark, and train and finetune.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llava/SKILL.md`, `llava/sub-skills/chat-and-serve/`, `llava/sub-skills/evaluate-and-benchmark/`, `llava/sub-skills/train-and-finetune/`, `llava/references/install-and-compatibility.md`, `llava/references/model-overview.md`.

### `marqo`

Role: Marqo AI-native search service workflows for HTTP APIs, indexes, Vespa schemas, search/ranking, inference/model services, and local repository development.
Read when: The request names `marqo` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: documents and api, index and vespa, inference and models, local development, and search and ranking.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `marqo/SKILL.md`, `marqo/sub-skills/documents-and-api/`, `marqo/sub-skills/index-and-vespa/`, `marqo/sub-skills/inference-and-models/`, `marqo/sub-skills/local-development/`, `marqo/sub-skills/search-and-ranking/`, `marqo/references/package-map.md`.

### `mellea`

Role: Use Mellea to build, test, serve, evaluate, instrument, and extend typed generative Python programs across provider backends and agent workflows.
Read when: The request names `mellea` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends and models, generative programming, observability and extensions, sampling and evaluation, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mellea/SKILL.md`, `mellea/sub-skills/backends-and-models/`, `mellea/sub-skills/generative-programming/`, `mellea/sub-skills/observability-and-extensions/`, `mellea/sub-skills/sampling-and-evaluation/`, `mellea/sub-skills/serving-and-cli/`, `mellea/references/repo-provenance.md`.

### `nano-vllm`

Role: Use nano-vLLM for CUDA-backed offline Qwen3 text generation, batched inference, KV-cache and tensor-parallel tuning, throughput benchmarking, or maintenance of its lightweight vLLM-like runtime.
Read when: The request names `nano-vllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model internals, offline inference, and performance tuning.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nano-vllm/SKILL.md`, `nano-vllm/sub-skills/model-internals/`, `nano-vllm/sub-skills/offline-inference/`, `nano-vllm/sub-skills/performance-tuning/`, `nano-vllm/references/repo-provenance.md`, `nano-vllm/references/troubleshooting.md`.

### `ods`

Role: Route ODS repository work for local AI stack installers, GPU/model backends, Docker services and extensions, dashboard API/UI, operator CLI, host tools, and validation lanes.
Read when: The request names `ods` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dashboard and api, hardware and models, installers and platforms, ops cli and host tools, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ods/SKILL.md`, `ods/sub-skills/dashboard-and-api/`, `ods/sub-skills/hardware-and-models/`, `ods/sub-skills/installers-and-platforms/`, `ods/sub-skills/ops-cli-and-host-tools/`, `ods/sub-skills/services-and-extensions/`, `ods/references/architecture-map.md`.

### `openchat`

Role: Use OpenChat/ochat for prompt formatting, OpenAI-compatible serving, and benchmark evaluation of conversational LLMs.
Read when: The request names `openchat` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, prompting, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openchat/SKILL.md`, `openchat/sub-skills/evaluation/`, `openchat/sub-skills/prompting/`, `openchat/sub-skills/serving/`, `openchat/references/installation-and-backends.md`, `openchat/references/repo-provenance.md`.

### `openllm`

Role: Guides OpenLLM installation, model catalog management, local OpenAI-compatible serving, BentoCloud deployment, and operational troubleshooting for self-hosted LLM workflows.
Read when: The request names `openllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cloud deployment, environment maintenance, local serving, and model repositories.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openllm/SKILL.md`, `openllm/sub-skills/cloud-deployment/`, `openllm/sub-skills/environment-maintenance/`, `openllm/sub-skills/local-serving/`, `openllm/sub-skills/model-repositories/`, `openllm/references/cli-overview.md`.

### `opennmt-py`

Role: Routes OpenNMT-py workflows for data preparation, training, inference, server deployment, and checkpoint/model conversion.
Read when: The request names `opennmt-py` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion, data preparation, inference, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opennmt-py/SKILL.md`, `opennmt-py/sub-skills/conversion/`, `opennmt-py/sub-skills/data-preparation/`, `opennmt-py/sub-skills/inference/`, `opennmt-py/sub-skills/training/`, `opennmt-py/references/cli-reference.md`.

### `optillm`

Role: Use OptiLLM as an OpenAI-compatible optimizing inference proxy with approach routing, plugins, local inference, decoding, and safe troubleshooting guidance.
Read when: The request names `optillm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: local inference decoding, optimization approaches, plugins and tools, and proxy server.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `optillm/SKILL.md`, `optillm/sub-skills/local-inference-decoding/`, `optillm/sub-skills/optimization-approaches/`, `optillm/sub-skills/plugins-and-tools/`, `optillm/sub-skills/proxy-server/`, `optillm/references/api-surface.md`.

### `opyrator`

Role: Guide future agents through Opyrator's callable wrapping, FastAPI service, and Streamlit UI workflows.
Read when: The request names `opyrator` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api services, ui and components, and wrapping and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opyrator/SKILL.md`, `opyrator/sub-skills/api-services/`, `opyrator/sub-skills/ui-and-components/`, `opyrator/sub-skills/wrapping-and-cli/`, `opyrator/references/api-reference.md`, `opyrator/references/repo-provenance.md`.

### `petals`

Role: Use Petals for distributed large-language-model inference, prompt tuning, server swarms, block-level internals, benchmarks, and package troubleshooting.
Read when: The request names `petals` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarks maintenance, client inference, distributed blocks, prompt tuning, and server swarms.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `petals/SKILL.md`, `petals/sub-skills/benchmarks-maintenance/`, `petals/sub-skills/client-inference/`, `petals/sub-skills/distributed-blocks/`, `petals/sub-skills/prompt-tuning/`, `petals/sub-skills/server-swarms/`, `petals/references/installation-and-environment.md`.

### `pycaret`

Role: Routes PyCaret monorepo tasks across engine workflows, backend API work, web UI edits, deployment operations, and maintainer workflows.
Read when: The request names `pycaret` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: control plane api, engine workflows, platform operations, repo development, and web ui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pycaret/SKILL.md`, `pycaret/sub-skills/control-plane-api/`, `pycaret/sub-skills/engine-workflows/`, `pycaret/sub-skills/platform-operations/`, `pycaret/sub-skills/repo-development/`, `pycaret/sub-skills/web-ui/`, `pycaret/references/package-overview.md`.

### `rllm`

Role: Use rLLM for language-agent evaluation, dataset/task management, RL/SFT post-training, CLI setup, and gateway-backed rollout tracing.
Read when: The request names `rllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli ops, datasets, evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rllm/SKILL.md`, `rllm/sub-skills/cli-ops/`, `rllm/sub-skills/datasets/`, `rllm/sub-skills/evaluation/`, `rllm/sub-skills/training/`, `rllm/references/cli-command-map.md`.

### `roboflow-inference`

Role: Route Roboflow Inference users through CLI operations, SDK/WebRTC, workflow processing, and model runtime selection.
Read when: The request names `roboflow-inference` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, model runtime, sdk webrtc, and workflow processing.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `roboflow-inference/SKILL.md`, `roboflow-inference/sub-skills/cli-operations/`, `roboflow-inference/sub-skills/model-runtime/`, `roboflow-inference/sub-skills/sdk-webrtc/`, `roboflow-inference/sub-skills/workflow-processing/`, `roboflow-inference/references/installation.md`.

### `sagemaker-python-sdk`

Role: Route SageMaker Python SDK v3 tasks to self-contained guidance for core resources, training, model customization, serving, MLOps, migration, and troubleshooting.
Read when: The request names `sagemaker-python-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core resources, mlops, model customization, serving, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sagemaker-python-sdk/SKILL.md`, `sagemaker-python-sdk/sub-skills/core-resources/`, `sagemaker-python-sdk/sub-skills/mlops/`, `sagemaker-python-sdk/sub-skills/model-customization/`, `sagemaker-python-sdk/sub-skills/serving/`, `sagemaker-python-sdk/sub-skills/training/`, `sagemaker-python-sdk/references/api-signature-summary.md`.

### `star-vla`

Role: Operate StarVLA for vision-language-action model development, training plans, LeRobot data integration, benchmark evaluation, and policy deployment.
Read when: The request names `star-vla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark evaluation, data integration, model frameworks, policy deployment, and training config.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `star-vla/SKILL.md`, `star-vla/sub-skills/benchmark-evaluation/`, `star-vla/sub-skills/data-integration/`, `star-vla/sub-skills/model-frameworks/`, `star-vla/sub-skills/policy-deployment/`, `star-vla/sub-skills/training-config/`, `star-vla/references/installation-and-environment.md`.

### `tensorflow-template-application`

Role: Route TensorFlow template application workflows for data preparation, TF1 training/export, and serving/client tasks.
Read when: The request names `tensorflow-template-application` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, serving and clients, and training and export.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tensorflow-template-application/SKILL.md`, `tensorflow-template-application/sub-skills/data-preparation/`, `tensorflow-template-application/sub-skills/serving-and-clients/`, `tensorflow-template-application/sub-skills/training-and-export/`, `tensorflow-template-application/references/installation.md`, `tensorflow-template-application/references/repo-provenance.md`.

### `towhee`

Role: Route Towhee pipeline, operator, data utility, service, Triton, training, and model-zoo tasks to self-contained workflow guidance.
Read when: The request names `towhee` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data utilities, operator hub and cli, pipeline programming, serving and triton, and training and models.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `towhee/SKILL.md`, `towhee/sub-skills/data-utilities/`, `towhee/sub-skills/operator-hub-and-cli/`, `towhee/sub-skills/pipeline-programming/`, `towhee/sub-skills/serving-and-triton/`, `towhee/sub-skills/training-and-models/`, `towhee/references/installation-and-compatibility.md`.

### `triton-inference-server`

Role: Route NVIDIA Triton Inference Server tasks across server runtime, model repository configuration, KServe protocols, Python in-process frontends, and OpenAI-compatible LLM serving.
Read when: The request names `triton-inference-server` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client protocols, in process frontends, model repository and config, openai llm frontend, and server runtime and deployment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `triton-inference-server/SKILL.md`, `triton-inference-server/sub-skills/client-protocols/`, `triton-inference-server/sub-skills/in-process-frontends/`, `triton-inference-server/sub-skills/model-repository-and-config/`, `triton-inference-server/sub-skills/openai-llm-frontend/`, `triton-inference-server/sub-skills/server-runtime-and-deployment/`, `triton-inference-server/references/package-and-installation.md`.

### `vllm-omni`

Role: Use vLLM-Omni for omni-modality model inference and serving: local Omni APIs, OpenAI-compatible --omni servers, stage deploy configs, model recipes, and model integration workflows.
Read when: The request names `vllm-omni` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: model integration, model recipes, offline inference, online serving, and stage configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vllm-omni/SKILL.md`, `vllm-omni/sub-skills/model-integration/`, `vllm-omni/sub-skills/model-recipes/`, `vllm-omni/sub-skills/offline-inference/`, `vllm-omni/sub-skills/online-serving/`, `vllm-omni/sub-skills/stage-configuration/`, `vllm-omni/references/install-and-backends.md`.

### `x-turing`

Role: Route xTuring dataset preparation, model loading and inference, fine-tuning and DPO alignment, CLI/API/UI serving, and evaluation workflows.
Read when: The request names `x-turing` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli api ui, data prep and generation, evaluation, models and inference, and training and alignment.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `x-turing/SKILL.md`, `x-turing/sub-skills/cli-api-ui/`, `x-turing/sub-skills/data-prep-and-generation/`, `x-turing/sub-skills/evaluation/`, `x-turing/sub-skills/models-and-inference/`, `x-turing/sub-skills/training-and-alignment/`, `x-turing/references/repo-provenance.md`.

### `xinference`

Role: Use Xinference for local and distributed model serving, Python clients, OpenAI-compatible APIs, model backend selection, and production operations.
Read when: The request names `xinference` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: client and api, models and backends, operations and security, and serving and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `xinference/SKILL.md`, `xinference/sub-skills/client-and-api/`, `xinference/sub-skills/models-and-backends/`, `xinference/sub-skills/operations-and-security/`, `xinference/sub-skills/serving-and-cli/`, `xinference/references/installation-and-environment.md`.

<!-- DISCO_SCENARIO:inference-serving:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
