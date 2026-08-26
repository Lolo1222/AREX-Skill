# Agent Tools and Skills

## When To Read

Requests in the Agent Tools and Skills family of the LLM Applications area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on agent tools and skills.

## Repo Skill Options

<!-- DISCO_SCENARIO:agent-tools-and-skills:START -->
### `airweave`

Role: Route Airweave tasks to the most specific sub-skill: local-development, backend-api, source-connectors, frontend-dashboard, connect-widget, mcp-search, or monke-e2e.
Read when: The request names `airweave` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend api, connect widget, frontend dashboard, local development, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `airweave/SKILL.md`, `airweave/sub-skills/backend-api/`, `airweave/sub-skills/connect-widget/`, `airweave/sub-skills/frontend-dashboard/`, `airweave/sub-skills/local-development/`, `airweave/sub-skills/mcp-search/`, `airweave/references/overview.md`.

### `aris`

Role: Use ARIS, the Auto Research in Sleep skill-based research harness, for setup, workflow routing, reviewer backend integration, state recovery, experiment operations, and repository maintenance.
Read when: The request names `aris` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install and distribution, repository maintenance, review and provider backends, state recovery and experiment ops, and workflow routing and skill catalog.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aris/SKILL.md`, `aris/sub-skills/install-and-distribution/`, `aris/sub-skills/repository-maintenance/`, `aris/sub-skills/review-and-provider-backends/`, `aris/sub-skills/state-recovery-and-experiment-ops/`, `aris/sub-skills/workflow-routing-and-skill-catalog/`, `aris/references/capability-map.md`.

### `atomic-agents`

Role: Use Atomic Agents to build schema-driven agents, integrate tools and MCP connectors, adapt example applications, and maintain the monorepo safely.
Read when: The request names `atomic-agents` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent core, example workflows, mcp integrations, repo development, and tooling and forge.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `atomic-agents/SKILL.md`, `atomic-agents/sub-skills/agent-core/`, `atomic-agents/sub-skills/example-workflows/`, `atomic-agents/sub-skills/mcp-integrations/`, `atomic-agents/sub-skills/repo-development/`, `atomic-agents/sub-skills/tooling-and-forge/`, `atomic-agents/references/package-summary.md`.

### `bindu`

Role: Operate the Bindu agent microservice framework: Python bindufy agents, A2A protocol, security, gRPC SDKs, deployment, Gateway, and Inbox.
Read when: The request names `bindu` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent authoring and a2a, deployment runtime and operations, gateway inbox and orchestration, grpc and language sdks, and security identity and payments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bindu/SKILL.md`, `bindu/sub-skills/agent-authoring-and-a2a/`, `bindu/sub-skills/deployment-runtime-and-operations/`, `bindu/sub-skills/gateway-inbox-and-orchestration/`, `bindu/sub-skills/grpc-and-language-sdks/`, `bindu/sub-skills/security-identity-and-payments/`, `bindu/references/capability-map.md`.

### `clawbio`

Role: Use ClawBio for local-first bioinformatics agent workflows: install and run its skill library, route genomic or omics inputs, create reproducible reports, connect optional MCP or Nextflow integrations, and author or validate skills.
Read when: The request names `clawbio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core runner, domain routing, pipelines integrations, skill authoring, and validation safety.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clawbio/SKILL.md`, `clawbio/sub-skills/core-runner/`, `clawbio/sub-skills/domain-routing/`, `clawbio/sub-skills/pipelines-integrations/`, `clawbio/sub-skills/skill-authoring/`, `clawbio/sub-skills/validation-safety/`, `clawbio/references/repo-provenance.md`.

### `code-review-graph`

Role: Use code-review-graph for local-first CLI/MCP code knowledge graphs, graph-backed code review, structural search, and repository-analysis integrations.
Read when: The request names `code-review-graph` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: graph exploration, install and setup, integrations and extensions, and review changes.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `code-review-graph/SKILL.md`, `code-review-graph/sub-skills/graph-exploration/`, `code-review-graph/sub-skills/install-and-setup/`, `code-review-graph/sub-skills/integrations-and-extensions/`, `code-review-graph/sub-skills/review-changes/`, `code-review-graph/references/architecture-and-schema.md`.

### `datachain`

Role: Routes DataChain operating guidance for Python SDK pipelines, query expressions, CLI and Studio commands, agent-harness knowledge workflows, and repository maintenance.
Read when: The request names `datachain` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent harness, cli and studio, query engine, repo development, and sdk pipelines.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `datachain/SKILL.md`, `datachain/sub-skills/agent-harness/`, `datachain/sub-skills/cli-and-studio/`, `datachain/sub-skills/query-engine/`, `datachain/sub-skills/repo-development/`, `datachain/sub-skills/sdk-pipelines/`, `datachain/references/repo-provenance.md`.

### `deepxiv-sdk`

Role: Use the DeepXiv SDK for citation-aware academic and web research through its Python Reader, deepxiv CLI, progressive paper APIs, optional local LangGraph agent, PMC, bioRxiv/medRxiv, and trending workflows.
Read when: The request names `deepxiv-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and operations, optional local agent, and reader and paper research.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxiv-sdk/SKILL.md`, `deepxiv-sdk/sub-skills/cli-and-operations/`, `deepxiv-sdk/sub-skills/optional-local-agent/`, `deepxiv-sdk/sub-skills/reader-and-paper-research/`, `deepxiv-sdk/references/repo-provenance.md`, `deepxiv-sdk/references/troubleshooting.md`.

### `google-agents-cli`

Role: Use this repo skill when a task involves the Google Agents CLI (google-agents-cli / agents-cli) lifecycle for ADK agent projects: install/setup, requirements planning, scaffolding, ADK code patterns, evaluation, deployment, Gemini Enterprise publication, and observability.
Read when: The request names `google-agents-cli` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adk code, deploy, eval, observability, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `google-agents-cli/SKILL.md`, `google-agents-cli/sub-skills/adk-code/`, `google-agents-cli/sub-skills/deploy/`, `google-agents-cli/sub-skills/eval/`, `google-agents-cli/sub-skills/observability/`, `google-agents-cli/sub-skills/publish/`, `google-agents-cli/references/command-surface.md`.

### `gptme`

Role: Operate the gptme terminal AI agent, provider configuration, tools, server/Web UI, protocols, evals, and repository-maintenance workflows.
Read when: The request names `gptme` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and conversations, configuration and providers, evals and benchmarks, repo development, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gptme/SKILL.md`, `gptme/sub-skills/cli-and-conversations/`, `gptme/sub-skills/configuration-and-providers/`, `gptme/sub-skills/evals-and-benchmarks/`, `gptme/sub-skills/repo-development/`, `gptme/sub-skills/server-webui-and-protocols/`, `gptme/references/installation-and-entrypoints.md`.

### `graphify`

Role: Use Graphify to build, query, export, and integrate code/document knowledge graphs for AI coding assistants and MCP workflows.
Read when: The request names `graphify` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent integration, exports integrations, extractor troubleshooting, graph building, and query navigation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `graphify/SKILL.md`, `graphify/sub-skills/agent-integration/`, `graphify/sub-skills/exports-integrations/`, `graphify/sub-skills/extractor-troubleshooting/`, `graphify/sub-skills/graph-building/`, `graphify/sub-skills/query-navigation/`, `graphify/references/cli-command-map.md`.

### `graphiti`

Role: Routes Graphiti SDK, REST service, and MCP server workflows.
Read when: The request names `graphiti` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core sdk, mcp server, and rest service.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `graphiti/SKILL.md`, `graphiti/sub-skills/core-sdk/`, `graphiti/sub-skills/mcp-server/`, `graphiti/sub-skills/rest-service/`, `graphiti/references/installation-and-backends.md`, `graphiti/references/repo-provenance.md`.

### `headroom`

Role: Use Headroom to compress LLM context, run a local proxy, wrap coding agents, manage memory and MCP retrieval, and integrate the Python or TypeScript SDK.
Read when: The request names `headroom` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: memory, ops, proxy wrap, and sdk.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `headroom/SKILL.md`, `headroom/sub-skills/memory/`, `headroom/sub-skills/ops/`, `headroom/sub-skills/proxy-wrap/`, `headroom/sub-skills/sdk/`, `headroom/references/api-reference.md`.

### `honcho`

Role: Router for Honcho self-hosting, integrations, CLI usage, and maintenance workflows.
Read when: The request names `honcho` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, integrations, maintenance, and self hosting.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `honcho/SKILL.md`, `honcho/sub-skills/cli-operations/`, `honcho/sub-skills/integrations/`, `honcho/sub-skills/maintenance/`, `honcho/sub-skills/self-hosting/`, `honcho/references/api-route-map.md`.

### `langbot`

Role: Operate, extend, test, and troubleshoot the LangBot repo: Quart backend, React web UI, IM bots, pipelines, providers, plugins, Box, MCP, RAG, persistence, deployment, and QA workflows.
Read when: The request names `langbot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api mcp web, core runtime, persistence rag workspaces, platform pipeline provider, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langbot/SKILL.md`, `langbot/sub-skills/api-mcp-web/`, `langbot/sub-skills/core-runtime/`, `langbot/sub-skills/persistence-rag-workspaces/`, `langbot/sub-skills/platform-pipeline-provider/`, `langbot/sub-skills/plugin-box-skills/`, `langbot/references/api-route-map.md`.

### `leann`

Role: Use LEANN to build, search, update, chat over, serve, integrate, debug, and maintain compact local vector indexes and RAG applications across Python APIs, CLI workflows, backends, data sources, MCP, and HTTP.
Read when: The request names `leann` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api and indexing, backends and storage, cli operations, development and testing, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `leann/SKILL.md`, `leann/sub-skills/api-and-indexing/`, `leann/sub-skills/backends-and-storage/`, `leann/sub-skills/cli-operations/`, `leann/sub-skills/development-and-testing/`, `leann/sub-skills/embeddings-and-chat/`, `leann/references/installation.md`.

### `leptonai`

Role: Use the LeptonAI Python SDK and lep CLI for NVIDIA DGX Cloud Lepton workspaces, endpoint calls, workloads, storage, secrets, ingress routing, and safe cloud-operation planning.
Read when: The request names `leptonai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli operations, sdk client, storage secrets ingress, workload management, and workspace and auth.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `leptonai/SKILL.md`, `leptonai/sub-skills/cli-operations/`, `leptonai/sub-skills/sdk-client/`, `leptonai/sub-skills/storage-secrets-ingress/`, `leptonai/sub-skills/workload-management/`, `leptonai/sub-skills/workspace-and-auth/`, `leptonai/references/package-overview.md`.

### `litserve`

Role: Serve custom AI APIs with LitServe, including general LitAPI and LitServer workflows, OpenAI-compatible endpoints, MCP tools, and deployment helpers.
Read when: The request names `litserve` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: mcp, openai specs, and server basics.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `litserve/SKILL.md`, `litserve/sub-skills/mcp/`, `litserve/sub-skills/openai-specs/`, `litserve/sub-skills/server-basics/`, `litserve/references/installation.md`, `litserve/references/repo-provenance.md`.

### `mcp-context-forge`

Role: Operate ContextForge (mcp-context-forge), the FastAPI MCP/A2A/REST/gRPC gateway, including setup, APIs, transports, auth/RBAC, plugins, observability, deployment, and validation.
Read when: The request names `mcp-context-forge` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auth rbac security, development validation, mcp transports federation, plugins observability, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mcp-context-forge/SKILL.md`, `mcp-context-forge/sub-skills/auth-rbac-security/`, `mcp-context-forge/sub-skills/development-validation/`, `mcp-context-forge/sub-skills/mcp-transports-federation/`, `mcp-context-forge/sub-skills/plugins-observability/`, `mcp-context-forge/sub-skills/registry-admin-api/`, `mcp-context-forge/references/cli-entrypoints.md`.

### `medical-research-skills`

Role: Route medical and biomedical research requests across the aipoch medical-research-skills catalog, its evidence, protocol, analysis, writing, operations, privacy, and audit workflows; use the bundled offline index and preserve explicit safety and verification boundaries.
Read when: The request names `medical-research-skills` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: academic writing, data analysis, evidence insight, operations and audit, and protocol design.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medical-research-skills/SKILL.md`, `medical-research-skills/sub-skills/academic-writing/`, `medical-research-skills/sub-skills/data-analysis/`, `medical-research-skills/sub-skills/evidence-insight/`, `medical-research-skills/sub-skills/operations-and-audit/`, `medical-research-skills/sub-skills/protocol-design/`, `medical-research-skills/references/catalog-index.json`.

### `mem-machine`

Role: Use MemMachine to build, configure, troubleshoot, and integrate persistent memory for AI agents through the Python SDK, REST API, CLI, MCP server, TypeScript client, self-hosted server, and framework integrations.
Read when: The request names `mem-machine` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: integrations and migration, python sdk and cli, server configuration and memory engines, and typescript rest client.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mem-machine/SKILL.md`, `mem-machine/sub-skills/integrations-and-migration/`, `mem-machine/sub-skills/python-sdk-and-cli/`, `mem-machine/sub-skills/server-configuration-and-memory-engines/`, `mem-machine/sub-skills/typescript-rest-client/`, `mem-machine/references/package-overview.md`.

### `memori`

Role: Routes Memori Python and TypeScript memory SDK workflows across cloud, BYODB, LLM registration, recall/search, CLI, and integrations.
Read when: The request names `memori` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: byodb storage, cli and cloud, llm integration, memory and search, and typescript sdk.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `memori/SKILL.md`, `memori/sub-skills/byodb-storage/`, `memori/sub-skills/cli-and-cloud/`, `memori/sub-skills/llm-integration/`, `memori/sub-skills/memory-and-search/`, `memori/sub-skills/typescript-sdk/`, `memori/references/configuration.md`.

### `nvidia-skills-catalog-maintenance`

Role: Maintain the NVIDIA skills catalog repository: components.d registrations, generated README tables, plugin bundles, marketplace metadata, benchmark aggregation, signatures, and release/integrity checks. Use only for catalog maintainer workflows, not for discovering or installing NVIDIA skills.
Read when: The request names `nvidia-skills-catalog-maintenance` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nvidia-skills-catalog-maintenance/SKILL.md`, `nvidia-skills-catalog-maintenance/references/catalog-layout.md`, `nvidia-skills-catalog-maintenance/references/maintainer-workflows.md`, `nvidia-skills-catalog-maintenance/references/metadata-release-integrity.md`, `nvidia-skills-catalog-maintenance/references/plugin-packaging.md`, `nvidia-skills-catalog-maintenance/references/repo-provenance.md`.

### `observal`

Role: Route repository work for Observal, an AI agent registry and observability platform with Python CLI, FastAPI server, harness telemetry, and Vite web UI.
Read when: The request names `observal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli, harness telemetry, repo development, server, and web.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `observal/SKILL.md`, `observal/sub-skills/cli/`, `observal/sub-skills/harness-telemetry/`, `observal/sub-skills/repo-development/`, `observal/sub-skills/server/`, `observal/sub-skills/web/`, `observal/references/overview.md`.

### `onyx`

Role: Onyx repository operating knowledge for backend, RAG/indexing, agents/Craft, web, mobile, CLI, deployment, and maintainer workflows.
Read when: The request names `onyx` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents craft and tools, backend platform, cli deployment devtools, mobile client, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `onyx/SKILL.md`, `onyx/sub-skills/agents-craft-and-tools/`, `onyx/sub-skills/backend-platform/`, `onyx/sub-skills/cli-deployment-devtools/`, `onyx/sub-skills/mobile-client/`, `onyx/sub-skills/rag-indexing-connectors/`, `onyx/references/repo-maintenance.md`.

### `open-wearables`

Role: Operating router for the Open Wearables FastAPI backend, wearable provider integrations, React portal, and FastMCP server.
Read when: The request names `open-wearables` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend core, frontend portal, mcp server, and provider integrations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-wearables/SKILL.md`, `open-wearables/sub-skills/backend-core/`, `open-wearables/sub-skills/frontend-portal/`, `open-wearables/sub-skills/mcp-server/`, `open-wearables/sub-skills/provider-integrations/`, `open-wearables/references/architecture.md`.

### `open-webui`

Role: Router for installing, running, configuring, and troubleshooting Open WebUI as a self-hosted AI web app.
Read when: The request names `open-webui` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: admin collaboration, chat models, deployment, extensions, and knowledge files.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-webui/SKILL.md`, `open-webui/sub-skills/admin-collaboration/`, `open-webui/sub-skills/chat-models/`, `open-webui/sub-skills/deployment/`, `open-webui/sub-skills/extensions/`, `open-webui/sub-skills/knowledge-files/`, `open-webui/references/configuration.md`.

### `opensquilla`

Role: Route OpenSquilla installation, gateway, provider and SquillaRouter configuration, CLI automation, channels and MCP, Skills and MetaSkills, and TUI or desktop work to the right bundled sub-skill.
Read when: The request names `opensquilla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: channels and integrations, cli and automation, configuration and routing, setup and gateway, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opensquilla/SKILL.md`, `opensquilla/sub-skills/channels-and-integrations/`, `opensquilla/sub-skills/cli-and-automation/`, `opensquilla/sub-skills/configuration-and-routing/`, `opensquilla/sub-skills/setup-and-gateway/`, `opensquilla/sub-skills/skills-and-meta/`, `opensquilla/references/cli-catalog.md`.

### `owl`

Role: Guides the OWL multi-agent task-automation package, CAMEL Workforce orchestration, document tools, Gradio/Docker runtime, and GAIA evaluation workflows.
Read when: The request names `owl` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: document processing, gaia evaluation, web ui and deployment, and workforce workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `owl/SKILL.md`, `owl/sub-skills/document-processing/`, `owl/sub-skills/gaia-evaluation/`, `owl/sub-skills/web-ui-and-deployment/`, `owl/sub-skills/workforce-workflows/`, `owl/references/api-reference.md`.

### `potpie`

Role: Operate Potpie's CLI, daemon, context graph, source bindings, auth integrations, and bundled agent skills.
Read when: The request names `potpie` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auth integrations, graph read, graph write, runtime, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `potpie/SKILL.md`, `potpie/sub-skills/auth-integrations/`, `potpie/sub-skills/graph-read/`, `potpie/sub-skills/graph-write/`, `potpie/sub-skills/runtime/`, `potpie/sub-skills/skills-management/`, `potpie/references/repo-provenance.md`.

### `software-agent-sdk`

Role: Router for using and maintaining the OpenHands Software Agent SDK, including local agents, tools, AgentSkills, agent-server runtimes, GitHub automation, and repository development workflows.
Read when: The request names `software-agent-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent core, built in tools, extensions, github automation, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `software-agent-sdk/SKILL.md`, `software-agent-sdk/sub-skills/agent-core/`, `software-agent-sdk/sub-skills/built-in-tools/`, `software-agent-sdk/sub-skills/extensions/`, `software-agent-sdk/sub-skills/github-automation/`, `software-agent-sdk/sub-skills/remote-runtime/`, `software-agent-sdk/references/package-overview.md`.

### `strands-agents`

Role: Route Strands Agents monorepo work across the Python SDK, TypeScript SDK, docs site, MCP server, cross-SDK parity, testing, troubleshooting, and contribution workflows.
Read when: The request names `strands-agents` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: docs site, mcp server, python sdk, and typescript sdk.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `strands-agents/SKILL.md`, `strands-agents/sub-skills/docs-site/`, `strands-agents/sub-skills/mcp-server/`, `strands-agents/sub-skills/python-sdk/`, `strands-agents/sub-skills/typescript-sdk/`, `strands-agents/references/cross-sdk-parity-and-contribution.md`.

### `taskingai`

Role: Operate the TaskingAI self-hosted LLM BaaS platform, including deployment configuration, backend APIs, inference providers, plugin bundles, retrieval, assistant generation, and troubleshooting.
Read when: The request names `taskingai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend api, deployment configuration, inference providers, and plugin bundles.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `taskingai/SKILL.md`, `taskingai/sub-skills/backend-api/`, `taskingai/sub-skills/deployment-configuration/`, `taskingai/sub-skills/inference-providers/`, `taskingai/sub-skills/plugin-bundles/`, `taskingai/references/repo-provenance.md`.

### `unstract`

Role: Use Unstract to operate its document-extraction APIs, hosted MCP servers, workers, shared SDK/tool packages, frontend, and test rig.
Read when: The request names `unstract` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend platform, frontend, platform deployment, sdk and tools, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `unstract/SKILL.md`, `unstract/sub-skills/backend-platform/`, `unstract/sub-skills/frontend/`, `unstract/sub-skills/platform-deployment/`, `unstract/sub-skills/sdk-and-tools/`, `unstract/sub-skills/testing-rig/`, `unstract/references/installation-and-env.md`.

### `vizro`

Role: Use Vizro to build, validate, debug, extend, and maintain dashboards across vizro-core, Vizro-MCP, deprecated Vizro-AI, experimental chat, and Vizro Dash Components.
Read when: The request names `vizro` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: charts and figures, core components data actions, core dashboard build, dash components build, and 4 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `vizro/SKILL.md`, `vizro/sub-skills/charts-and-figures/`, `vizro/sub-skills/core-components-data-actions/`, `vizro/sub-skills/core-dashboard-build/`, `vizro/sub-skills/dash-components-build/`, `vizro/sub-skills/experimental-chat-popup/`, `vizro/references/environment.md`.

### `wren-ai`

Role: Use WrenAI and Wren Engine for governed semantic SQL, MDL projects, data-context memory, agent workflow guides, GenBI dashboards, MCP tools, browser WASM queries, framework SDKs, and repository development.
Read when: The request names `wren-ai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent workflows, cli projects, engine development, genbi mcp wasm, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `wren-ai/SKILL.md`, `wren-ai/sub-skills/agent-workflows/`, `wren-ai/sub-skills/cli-projects/`, `wren-ai/sub-skills/engine-development/`, `wren-ai/sub-skills/genbi-mcp-wasm/`, `wren-ai/sub-skills/memory-knowledge/`, `wren-ai/references/install-and-extras.md`.

<!-- DISCO_SCENARIO:agent-tools-and-skills:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
