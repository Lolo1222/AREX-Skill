# LLM Applications — General

## When To Read

LLM Applications requests whose task family has no dedicated scenario: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for the smaller repository families in this area.

## Repo Skill Options

<!-- DISCO_SCENARIO:llm-applications-general:START -->
### `agent-lightning`

Role: Use this repo skill for Agent Lightning package tasks: authoring trainable agents, tracing rewards and spans, running LightningStore/Trainer loops, using agl CLI services, choosing examples, and troubleshooting optional backends.
Read when: The request names `agent-lightning` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent authoring, cli and services, examples and recipes, runner store training, and tracing and instrumentation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agent-lightning/SKILL.md`, `agent-lightning/sub-skills/agent-authoring/`, `agent-lightning/sub-skills/cli-and-services/`, `agent-lightning/sub-skills/examples-and-recipes/`, `agent-lightning/sub-skills/runner-store-training/`, `agent-lightning/sub-skills/tracing-and-instrumentation/`, `agent-lightning/references/compatibility.md`.

### `agent-starter-pack`

Role: Routes Agent Starter Pack tasks to the right workflow for creating, maintaining, and deploying generated agent projects.
Read when: The request names `agent-starter-pack` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment ops, project maintenance, and project scaffolding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agent-starter-pack/SKILL.md`, `agent-starter-pack/sub-skills/deployment-ops/`, `agent-starter-pack/sub-skills/project-maintenance/`, `agent-starter-pack/sub-skills/project-scaffolding/`, `agent-starter-pack/references/cli-reference.md`, `agent-starter-pack/references/package-overview.md`.

### `detikzify`

Role: Load, generate, compile, rasterize, evaluate, train, and serve DeTikZify and Ti*k*Zero workflows.
Read when: The request names `detikzify` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: datasets and mcts, evaluation and metrics, inference and rendering, training and adapters, and webui.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `detikzify/SKILL.md`, `detikzify/sub-skills/datasets-and-mcts/`, `detikzify/sub-skills/evaluation-and-metrics/`, `detikzify/sub-skills/inference-and-rendering/`, `detikzify/sub-skills/training-and-adapters/`, `detikzify/sub-skills/webui/`, `detikzify/references/installation.md`.

### `giskard-oss`

Role: Routes Giskard OSS v3 package tasks across checks, LLM providers, agents, scans, runtime setup, troubleshooting, and maintainer validation.
Read when: The request names `giskard-oss` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents workflows, checks evals, llm providers, runtime setup, and scan redteam.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `giskard-oss/SKILL.md`, `giskard-oss/sub-skills/agents-workflows/`, `giskard-oss/sub-skills/checks-evals/`, `giskard-oss/sub-skills/llm-providers/`, `giskard-oss/sub-skills/runtime-setup/`, `giskard-oss/sub-skills/scan-redteam/`, `giskard-oss/references/development-and-testing.md`.

### `google-agents-cli`

Role: Use this repo skill when a task involves the Google Agents CLI (google-agents-cli / agents-cli) lifecycle for ADK agent projects: install/setup, requirements planning, scaffolding, ADK code patterns, evaluation, deployment, Gemini Enterprise publication, and observability.
Read when: The request names `google-agents-cli` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adk code, deploy, eval, observability, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `google-agents-cli/SKILL.md`, `google-agents-cli/sub-skills/adk-code/`, `google-agents-cli/sub-skills/deploy/`, `google-agents-cli/sub-skills/eval/`, `google-agents-cli/sub-skills/observability/`, `google-agents-cli/sub-skills/publish/`, `google-agents-cli/references/command-surface.md`.

### `gpt-academic`

Role: Operate GPT Academic chat, academic document, code analysis, agent tooling, and multimodal media workflows.
Read when: The request names `gpt-academic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: academic docs, agent tooling, conversation, multimodal media, and programming code.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gpt-academic/SKILL.md`, `gpt-academic/sub-skills/academic-docs/`, `gpt-academic/sub-skills/agent-tooling/`, `gpt-academic/sub-skills/conversation/`, `gpt-academic/sub-skills/multimodal-media/`, `gpt-academic/sub-skills/programming-code/`, `gpt-academic/references/api-reference.md`.

### `harbor`

Role: Use Harbor to evaluate agents and language models in sandboxed tasks, author benchmark datasets and verifiers, run map-reduce jobs, inspect trajectories and artifacts, publish results, or extend Harbor with custom integrations.
Read when: The request names `harbor` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: analyze publish, author benchmarks, exec map reduce, integrations, and run evaluate.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `harbor/SKILL.md`, `harbor/sub-skills/analyze-publish/`, `harbor/sub-skills/author-benchmarks/`, `harbor/sub-skills/exec-map-reduce/`, `harbor/sub-skills/integrations/`, `harbor/sub-skills/run-evaluate/`, `harbor/references/architecture.md`.

### `headroom`

Role: Use Headroom to compress LLM context, run a local proxy, wrap coding agents, manage memory and MCP retrieval, and integrate the Python or TypeScript SDK.
Read when: The request names `headroom` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: memory, ops, proxy wrap, and sdk.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `headroom/SKILL.md`, `headroom/sub-skills/memory/`, `headroom/sub-skills/ops/`, `headroom/sub-skills/proxy-wrap/`, `headroom/sub-skills/sdk/`, `headroom/references/api-reference.md`.

### `kag`

Role: Routes KAG knowledge-construction, question-answering, MCP, and benchmark workflows for the OpenSPG KAG package.
Read when: The request names `kag` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: knowledge construction, mcp and automation, and question answering.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kag/SKILL.md`, `kag/sub-skills/knowledge-construction/`, `kag/sub-skills/mcp-and-automation/`, `kag/sub-skills/question-answering/`, `kag/references/cli-reference.md`, `kag/references/configuration-and-registry.md`.

### `kiln`

Role: Use and maintain Kiln's AI development monorepo: Python library, REST/MCP server, desktop studio server, Svelte web UI, RAG, evals, fine-tuning, providers, tools, and repo checks.
Read when: The request names `kiln` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evals optimization finetuning, project datamodel, rag documents data, repo development, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `kiln/SKILL.md`, `kiln/sub-skills/evals-optimization-finetuning/`, `kiln/sub-skills/project-datamodel/`, `kiln/sub-skills/rag-documents-data/`, `kiln/sub-skills/repo-development/`, `kiln/sub-skills/server-desktop-web-api/`, `kiln/references/repo-development-overview.md`.

### `la-vague`

Role: Operate LaVague browser-agent, model-context, driver, Gradio/server, and QA automation workflows safely with bundled probes and troubleshooting.
Read when: The request names `la-vague` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: browser drivers, contexts and retrievers, core web agent, qa and test runner, and server extension gradio.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `la-vague/SKILL.md`, `la-vague/sub-skills/browser-drivers/`, `la-vague/sub-skills/contexts-and-retrievers/`, `la-vague/sub-skills/core-web-agent/`, `la-vague/sub-skills/qa-and-test-runner/`, `la-vague/sub-skills/server-extension-gradio/`, `la-vague/references/package-overview.md`.

### `langextract`

Role: Use LangExtract to extract structured data from unstructured text, configure model providers, save/visualize grounded outputs, and author provider plugins.
Read when: The request names `langextract` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: extraction, provider plugins, providers, and visualization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langextract/SKILL.md`, `langextract/sub-skills/extraction/`, `langextract/sub-skills/provider-plugins/`, `langextract/sub-skills/providers/`, `langextract/sub-skills/visualization/`, `langextract/references/api-map.md`.

### `latex-ocr`

Role: Guides LaTeX-OCR pix2tex image-to-LaTeX OCR, CLI, Python API, GUI, service API, dataset preparation, training, and troubleshooting workflows.
Read when: The request names `latex-ocr` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data preparation, interactive apps and api, ocr inference, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `latex-ocr/SKILL.md`, `latex-ocr/sub-skills/data-preparation/`, `latex-ocr/sub-skills/interactive-apps-and-api/`, `latex-ocr/sub-skills/ocr-inference/`, `latex-ocr/sub-skills/training-and-evaluation/`, `latex-ocr/references/repo-provenance.md`.

### `lightllm`

Role: Route LightLLM serving, deployment, and validation workflows into bundled references and sub-skills.
Read when: The request names `lightllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark validation, deployment topologies, model runtime, and serving api.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lightllm/SKILL.md`, `lightllm/sub-skills/benchmark-validation/`, `lightllm/sub-skills/deployment-topologies/`, `lightllm/sub-skills/model-runtime/`, `lightllm/sub-skills/serving-api/`, `lightllm/references/api-reference.md`.

### `llm4decompile`

Role: Route requests for LLM4Decompile training, direct decompilation, Ghidra refinement, and SK²Decompile workflows.
Read when: The request names `llm4decompile` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, ghidra refine, sk2decompile, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `llm4decompile/SKILL.md`, `llm4decompile/sub-skills/evaluation/`, `llm4decompile/sub-skills/ghidra-refine/`, `llm4decompile/sub-skills/sk2decompile/`, `llm4decompile/sub-skills/training/`, `llm4decompile/references/model-overview.md`.

### `lmops`

Role: Route LMOps paper-code workflows for prompt optimization, retrieval, adaptation, distillation, experiential learning, RAG, and LLM acceleration.
Read when: The request names `lmops` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adaptation and training, distillation and post training, example retrieval, prompt optimization, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lmops/SKILL.md`, `lmops/sub-skills/adaptation-and-training/`, `lmops/sub-skills/distillation-and-post-training/`, `lmops/sub-skills/example-retrieval/`, `lmops/sub-skills/prompt-optimization/`, `lmops/sub-skills/rag-and-acceleration/`, `lmops/references/project-index.md`.

### `mcp-context-forge`

Role: Operate ContextForge (mcp-context-forge), the FastAPI MCP/A2A/REST/gRPC gateway, including setup, APIs, transports, auth/RBAC, plugins, observability, deployment, and validation.
Read when: The request names `mcp-context-forge` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auth rbac security, development validation, mcp transports federation, plugins observability, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mcp-context-forge/SKILL.md`, `mcp-context-forge/sub-skills/auth-rbac-security/`, `mcp-context-forge/sub-skills/development-validation/`, `mcp-context-forge/sub-skills/mcp-transports-federation/`, `mcp-context-forge/sub-skills/plugins-observability/`, `mcp-context-forge/sub-skills/registry-admin-api/`, `mcp-context-forge/references/cli-entrypoints.md`.

### `mellea`

Role: Use Mellea to build, test, serve, evaluate, instrument, and extend typed generative Python programs across provider backends and agent workflows.
Read when: The request names `mellea` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backends and models, generative programming, observability and extensions, sampling and evaluation, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mellea/SKILL.md`, `mellea/sub-skills/backends-and-models/`, `mellea/sub-skills/generative-programming/`, `mellea/sub-skills/observability-and-extensions/`, `mellea/sub-skills/sampling-and-evaluation/`, `mellea/sub-skills/serving-and-cli/`, `mellea/references/repo-provenance.md`.

### `nemoguardrails`

Role: Route NVIDIA NeMo Guardrails package work across installation, config and Colang authoring, runtime APIs and servers, evaluation/observability, and source-checkout development.
Read when: The request names `nemoguardrails` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: configure rails, evaluate and observe, repo development, run rails, and setup and basics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nemoguardrails/SKILL.md`, `nemoguardrails/sub-skills/configure-rails/`, `nemoguardrails/sub-skills/evaluate-and-observe/`, `nemoguardrails/sub-skills/repo-development/`, `nemoguardrails/sub-skills/run-rails/`, `nemoguardrails/sub-skills/setup-and-basics/`, `nemoguardrails/references/repo-provenance.md`.

### `observal`

Role: Route repository work for Observal, an AI agent registry and observability platform with Python CLI, FastAPI server, harness telemetry, and Vite web UI.
Read when: The request names `observal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli, harness telemetry, repo development, server, and web.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `observal/SKILL.md`, `observal/sub-skills/cli/`, `observal/sub-skills/harness-telemetry/`, `observal/sub-skills/repo-development/`, `observal/sub-skills/server/`, `observal/sub-skills/web/`, `observal/references/overview.md`.

### `openllmetry`

Role: Route OpenLLMetry Python SDK, GenAI instrumentation, semantic-convention, and repository-maintenance tasks.
Read when: The request names `openllmetry` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: instrumentations, repo development, sdk and tracing, and semantic conventions.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openllmetry/SKILL.md`, `openllmetry/sub-skills/instrumentations/`, `openllmetry/sub-skills/repo-development/`, `openllmetry/sub-skills/sdk-and-tracing/`, `openllmetry/sub-skills/semantic-conventions/`, `openllmetry/references/package-overview.md`.

### `openprompt`

Role: Route OpenPrompt prompt-learning, dataset/config, template/verbalizer, and training/generation workflows from a single repo skill.
Read when: The request names `openprompt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and config workflows, pipeline basics, template verbalizer design, and training and generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `openprompt/SKILL.md`, `openprompt/sub-skills/data-and-config-workflows/`, `openprompt/sub-skills/pipeline-basics/`, `openprompt/sub-skills/template-verbalizer-design/`, `openprompt/sub-skills/training-and-generation/`, `openprompt/references/package-overview.md`.

### `optillm`

Role: Use OptiLLM as an OpenAI-compatible optimizing inference proxy with approach routing, plugins, local inference, decoding, and safe troubleshooting guidance.
Read when: The request names `optillm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: local inference decoding, optimization approaches, plugins and tools, and proxy server.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `optillm/SKILL.md`, `optillm/sub-skills/local-inference-decoding/`, `optillm/sub-skills/optimization-approaches/`, `optillm/sub-skills/plugins-and-tools/`, `optillm/sub-skills/proxy-server/`, `optillm/references/api-surface.md`.

### `outlines`

Role: Operate the Outlines structured-output library across output types, local models, provider integrations, and prompt workflows.
Read when: The request names `outlines` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: local models, prompt workflows, remote providers, and structured generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `outlines/SKILL.md`, `outlines/sub-skills/local-models/`, `outlines/sub-skills/prompt-workflows/`, `outlines/sub-skills/remote-providers/`, `outlines/sub-skills/structured-generation/`, `outlines/references/api-overview.md`.

### `pix2code`

Role: Operate the pix2code research repository for GUI screenshot-to-DSL experiments, legacy Keras/TensorFlow training, model sampling, and DSL compilation to web, Android, or iOS code.
Read when: The request names `pix2code` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: data and training, dsl compilation, and sampling and generation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pix2code/SKILL.md`, `pix2code/sub-skills/data-and-training/`, `pix2code/sub-skills/dsl-compilation/`, `pix2code/sub-skills/sampling-and-generation/`, `pix2code/references/package-overview.md`, `pix2code/references/repo-provenance.md`.

### `promptcraft-robotics`

Role: Route PromptCraft-Robotics requests to the AirSim sample workflow or the markdown robotics prompt library.
Read when: The request names `promptcraft-robotics` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: airsim simulator and prompt examples.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `promptcraft-robotics/SKILL.md`, `promptcraft-robotics/sub-skills/airsim-simulator/`, `promptcraft-robotics/sub-skills/prompt-examples/`, `promptcraft-robotics/references/repo-overview.md`, `promptcraft-robotics/references/repo-provenance.md`, `promptcraft-robotics/references/troubleshooting.md`.

### `promptify`

Role: Routes Promptify's structured NLP task and evaluation workflows, including NER, classification, QA, custom Pydantic schemas, and dataset-based metrics.
Read when: The request names `promptify` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation and structured tasks.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `promptify/SKILL.md`, `promptify/sub-skills/evaluation/`, `promptify/sub-skills/structured-tasks/`, `promptify/references/overview.md`, `promptify/references/repo-provenance.md`, `promptify/references/troubleshooting.md`.

### `pyrit`

Role: Use Microsoft PyRIT for generative-AI red teaming, prompt targets, scorers, converters, datasets, attack scenarios, scanner CLI, backend, and troubleshooting.
Read when: The request names `pyrit` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: attacks scenarios, cli backend scanner, converters datasets, setup memory core, and targets scorers.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pyrit/SKILL.md`, `pyrit/sub-skills/attacks-scenarios/`, `pyrit/sub-skills/cli-backend-scanner/`, `pyrit/sub-skills/converters-datasets/`, `pyrit/sub-skills/setup-memory-core/`, `pyrit/sub-skills/targets-scorers/`, `pyrit/references/install-configuration.md`.

### `rllm`

Role: Use rLLM for language-agent evaluation, dataset/task management, RL/SFT post-training, CLI setup, and gateway-backed rollout tracing.
Read when: The request names `rllm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli ops, datasets, evaluation, and training.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rllm/SKILL.md`, `rllm/sub-skills/cli-ops/`, `rllm/sub-skills/datasets/`, `rllm/sub-skills/evaluation/`, `rllm/sub-skills/training/`, `rllm/references/cli-command-map.md`.

### `sketch-code`

Role: Operate SketchCode legacy wireframe-to-HTML workflows: conversion, training data preparation, BLEU evaluation, assets, and TensorFlow/Keras troubleshooting.
Read when: The request names `sketch-code` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: conversion inference, evaluation, and training data.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `sketch-code/SKILL.md`, `sketch-code/sub-skills/conversion-inference/`, `sketch-code/sub-skills/evaluation/`, `sketch-code/sub-skills/training-data/`, `sketch-code/references/environment-and-assets.md`, `sketch-code/references/repo-provenance.md`.

### `tree-of-thoughts`

Role: Use the tree-of-thoughts Python package to configure TotAgent model callers and run DFS/BFS Tree-of-Thoughts reasoning workflows.
Read when: The request names `tree-of-thoughts` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents and models and search workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tree-of-thoughts/SKILL.md`, `tree-of-thoughts/sub-skills/agents-and-models/`, `tree-of-thoughts/sub-skills/search-workflows/`, `tree-of-thoughts/references/maintainer-notes.md`, `tree-of-thoughts/references/package-overview.md`, `tree-of-thoughts/references/repo-provenance.md`.

### `tree-of-thoughts-llm`

Role: Routes Tree of Thoughts workflows for game24, coherent passage generation, and mini-crossword solving, with shared installation and execution guidance.
Read when: The request names `tree-of-thoughts-llm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: crosswords, game24, and text.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `tree-of-thoughts-llm/SKILL.md`, `tree-of-thoughts-llm/sub-skills/crosswords/`, `tree-of-thoughts-llm/sub-skills/game24/`, `tree-of-thoughts-llm/sub-skills/text/`, `tree-of-thoughts-llm/references/api-reference.md`, `tree-of-thoughts-llm/references/cli-reference.md`.

### `yi-val`

Role: Operate YiVal prompt/model evaluation workflows, including YAML configs, CLI runs, data readers, prompt generators, evaluators, AHP selection, enhancers, and custom components.
Read when: The request names `yi-val` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: custom components, evaluation optimization, prompt automation, run, and setup.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yi-val/SKILL.md`, `yi-val/sub-skills/custom-components/`, `yi-val/sub-skills/evaluation-optimization/`, `yi-val/sub-skills/prompt-automation/`, `yi-val/sub-skills/run/`, `yi-val/sub-skills/setup/`, `yi-val/references/registry-overview.md`.

<!-- DISCO_SCENARIO:llm-applications-general:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
