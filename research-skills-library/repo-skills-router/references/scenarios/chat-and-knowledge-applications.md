# Chat and Knowledge Applications

## When To Read

Requests in the Chat and Knowledge Applications family of the LLM Applications area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on chat and knowledge applications.

## Repo Skill Options

<!-- DISCO_SCENARIO:chat-and-knowledge-applications:START -->
### `deepxiv-sdk`

Role: Use the DeepXiv SDK for citation-aware academic and web research through its Python Reader, deepxiv CLI, progressive paper APIs, optional local LangGraph agent, PMC, bioRxiv/medRxiv, and trending workflows.
Read when: The request names `deepxiv-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and operations, optional local agent, and reader and paper research.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxiv-sdk/SKILL.md`, `deepxiv-sdk/sub-skills/cli-and-operations/`, `deepxiv-sdk/sub-skills/optional-local-agent/`, `deepxiv-sdk/sub-skills/reader-and-paper-research/`, `deepxiv-sdk/references/repo-provenance.md`, `deepxiv-sdk/references/troubleshooting.md`.

### `docs-gpt`

Role: Use DocsGPT for repository-specific backend/API, agent/tool/workflow, source/retrieval, deployment/auth/operations, frontend/extensions, and E2E work.
Read when: The request names `docs-gpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `docs-gpt/SKILL.md`, `docs-gpt/references/dev-environment.md`, `docs-gpt/references/repo-map.md`, `docs-gpt/references/repo-provenance.md`, `docs-gpt/references/verification-matrix.md`, `docs-gpt/scripts/check_local_config.py`.

### `gpt-academic`

Role: Operate GPT Academic chat, academic document, code analysis, agent tooling, and multimodal media workflows.
Read when: The request names `gpt-academic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: academic docs, agent tooling, conversation, multimodal media, and programming code.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gpt-academic/SKILL.md`, `gpt-academic/sub-skills/academic-docs/`, `gpt-academic/sub-skills/agent-tooling/`, `gpt-academic/sub-skills/conversation/`, `gpt-academic/sub-skills/multimodal-media/`, `gpt-academic/sub-skills/programming-code/`, `gpt-academic/references/api-reference.md`.

### `knowledge-storm`

Role: Operate the knowledge-storm/STORM package for Wikipedia-style article generation, corpus-grounded VectorRM/Qdrant workflows, and collaborative Co-STORM knowledge curation.
Read when: The request names `knowledge-storm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: co storm, storm wiki, and vector corpus.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `knowledge-storm/SKILL.md`, `knowledge-storm/sub-skills/co-storm/`, `knowledge-storm/sub-skills/storm-wiki/`, `knowledge-storm/sub-skills/vector-corpus/`, `knowledge-storm/references/configuration-and-secrets.md`, `knowledge-storm/references/package-overview.md`.

### `langbot`

Role: Operate, extend, test, and troubleshoot the LangBot repo: Quart backend, React web UI, IM bots, pipelines, providers, plugins, Box, MCP, RAG, persistence, deployment, and QA workflows.
Read when: The request names `langbot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api mcp web, core runtime, persistence rag workspaces, platform pipeline provider, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langbot/SKILL.md`, `langbot/sub-skills/api-mcp-web/`, `langbot/sub-skills/core-runtime/`, `langbot/sub-skills/persistence-rag-workspaces/`, `langbot/sub-skills/platform-pipeline-provider/`, `langbot/sub-skills/plugin-box-skills/`, `langbot/references/api-route-map.md`.

### `langchain-chatchat`

Role: Route Langchain-Chatchat setup, RAG/API service, Python SDK, and LangChain adapter workflows.
Read when: The request names `langchain-chatchat` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: knowledge base and api, python sdk and adapters, and server setup and cli.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langchain-chatchat/SKILL.md`, `langchain-chatchat/sub-skills/knowledge-base-and-api/`, `langchain-chatchat/sub-skills/python-sdk-and-adapters/`, `langchain-chatchat/sub-skills/server-setup-and-cli/`, `langchain-chatchat/references/package-overview.md`, `langchain-chatchat/references/repo-provenance.md`.

### `maxkb`

Role: Routes MaxKB repo work to focused sub-skills for runtime, workflows, knowledge/models, frontend, and admin surfaces.
Read when: The request names `maxkb` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: admin access, frontend integration, knowledge models, runtime architecture, and workflow chat mcp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maxkb/SKILL.md`, `maxkb/sub-skills/admin-access/`, `maxkb/sub-skills/frontend-integration/`, `maxkb/sub-skills/knowledge-models/`, `maxkb/sub-skills/runtime-architecture/`, `maxkb/sub-skills/workflow-chat-mcp/`, `maxkb/references/configuration-map.md`.

### `minecontext`

Role: Guides MineContext/OpenContext runtime service, context workflows, configuration, and desktop packaging tasks.
Read when: The request names `minecontext` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: desktop packaging and runtime service.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `minecontext/SKILL.md`, `minecontext/sub-skills/desktop-packaging/`, `minecontext/sub-skills/runtime-service/`, `minecontext/references/architecture.md`, `minecontext/references/repo-provenance.md`, `minecontext/references/troubleshooting.md`.

### `moss`

Role: Routes OpenMOSS/MOSS workflows for local LLM inference, model runtime checks, API or UI serving, and SFT data/fine-tuning preparation.
Read when: The request names `moss` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: fine tuning data, inference, model runtime, and serving.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `moss/SKILL.md`, `moss/sub-skills/fine-tuning-data/`, `moss/sub-skills/inference/`, `moss/sub-skills/model-runtime/`, `moss/sub-skills/serving/`, `moss/references/api-reference.md`.

### `ods`

Role: Route ODS repository work for local AI stack installers, GPU/model backends, Docker services and extensions, dashboard API/UI, operator CLI, host tools, and validation lanes.
Read when: The request names `ods` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: dashboard and api, hardware and models, installers and platforms, ops cli and host tools, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `ods/SKILL.md`, `ods/sub-skills/dashboard-and-api/`, `ods/sub-skills/hardware-and-models/`, `ods/sub-skills/installers-and-platforms/`, `ods/sub-skills/ops-cli-and-host-tools/`, `ods/sub-skills/services-and-extensions/`, `ods/references/architecture-map.md`.

### `onyx`

Role: Onyx repository operating knowledge for backend, RAG/indexing, agents/Craft, web, mobile, CLI, deployment, and maintainer workflows.
Read when: The request names `onyx` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents craft and tools, backend platform, cli deployment devtools, mobile client, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onyx/SKILL.md`, `onyx/sub-skills/agents-craft-and-tools/`, `onyx/sub-skills/backend-platform/`, `onyx/sub-skills/cli-deployment-devtools/`, `onyx/sub-skills/mobile-client/`, `onyx/sub-skills/rag-indexing-connectors/`, `onyx/references/repo-maintenance.md`.

### `open-assistant`

Role: Use Open-Assistant repository guidance for backend task APIs, OA JSONL data utilities, Next.js contribution/chat UI, and local inference services.
Read when: The request names `open-assistant` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend, inference, and website.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-assistant/SKILL.md`, `open-assistant/sub-skills/backend/`, `open-assistant/sub-skills/inference/`, `open-assistant/sub-skills/website/`, `open-assistant/references/repo-provenance.md`, `open-assistant/references/setup-and-architecture.md`.

### `open-webui`

Role: Router for installing, running, configuring, and troubleshooting Open WebUI as a self-hosted AI web app.
Read when: The request names `open-webui` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: admin collaboration, chat models, deployment, extensions, and knowledge files.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-webui/SKILL.md`, `open-webui/sub-skills/admin-collaboration/`, `open-webui/sub-skills/chat-models/`, `open-webui/sub-skills/deployment/`, `open-webui/sub-skills/extensions/`, `open-webui/sub-skills/knowledge-files/`, `open-webui/references/configuration.md`.

### `pandasai`

Role: Routes PandasAI tasks for conversational dataframe analysis, semantic data layers, custom skills, sandboxed execution, CLI usage, and repo maintenance guidance.
Read when: The request names `pandasai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and project ops, conversational analysis, custom skills, sandbox and security, and semantic layer.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `pandasai/SKILL.md`, `pandasai/sub-skills/cli-and-project-ops/`, `pandasai/sub-skills/conversational-analysis/`, `pandasai/sub-skills/custom-skills/`, `pandasai/sub-skills/sandbox-and-security/`, `pandasai/sub-skills/semantic-layer/`, `pandasai/references/maintainer-notes.md`.

### `paper-qa`

Role: Use PaperQA/PaperQA2 for scientific literature RAG, document parsing, metadata hydration, CLI indexing, Settings configuration, and external paper/trial source workflows.
Read when: The request names `paper-qa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agentic rag, cli and indexing, docs and parsing, metadata and sources, and settings and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paper-qa/SKILL.md`, `paper-qa/sub-skills/agentic-rag/`, `paper-qa/sub-skills/cli-and-indexing/`, `paper-qa/sub-skills/docs-and-parsing/`, `paper-qa/sub-skills/metadata-and-sources/`, `paper-qa/sub-skills/settings-and-configuration/`, `paper-qa/references/repo-provenance.md`.

### `paperai`

Role: Guides paperai workflows for indexing paper corpora, querying scientific articles, and generating RAG-backed Markdown, CSV, or PDF-annotation reports.
Read when: The request names `paperai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: indexing, querying, and reporting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `paperai/SKILL.md`, `paperai/sub-skills/indexing/`, `paperai/sub-skills/querying/`, `paperai/sub-skills/reporting/`, `paperai/references/install.md`, `paperai/references/repo-provenance.md`.

### `rags`

Role: Use this repo skill for RAGs, a Streamlit app that builds configurable LlamaIndex RAG agents from natural-language setup, data sources, and model settings.
Read when: The request names `rags` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: builder, chat, and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rags/SKILL.md`, `rags/sub-skills/builder/`, `rags/sub-skills/chat/`, `rags/sub-skills/configuration/`, `rags/references/app-architecture.md`, `rags/references/repo-provenance.md`.

### `yuxi`

Role: Operate and maintain Yuxi, a Docker Compose managed FastAPI, LangGraph, Vue, RAG, OCR, knowledge graph, and CLI platform.
Read when: The request names `yuxi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent runtime, cli and external integration, deployment and configuration, knowledge and ocr, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yuxi/SKILL.md`, `yuxi/sub-skills/agent-runtime/`, `yuxi/sub-skills/cli-and-external-integration/`, `yuxi/sub-skills/deployment-and-configuration/`, `yuxi/sub-skills/knowledge-and-ocr/`, `yuxi/sub-skills/repo-development/`, `yuxi/references/capability-map.md`.

<!-- DISCO_SCENARIO:chat-and-knowledge-applications:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
