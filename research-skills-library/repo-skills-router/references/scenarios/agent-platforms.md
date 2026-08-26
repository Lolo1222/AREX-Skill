# Agent Platforms

## When To Read

Requests in the Agent Platforms family of the LLM Applications area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on agent platforms.

## Repo Skill Options

<!-- DISCO_SCENARIO:agent-platforms:START -->
### `agent-starter-pack`

Role: Routes Agent Starter Pack tasks to the right workflow for creating, maintaining, and deploying generated agent projects.
Read when: The request names `agent-starter-pack` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment ops, project maintenance, and project scaffolding.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agent-starter-pack/SKILL.md`, `agent-starter-pack/sub-skills/deployment-ops/`, `agent-starter-pack/sub-skills/project-maintenance/`, `agent-starter-pack/sub-skills/project-scaffolding/`, `agent-starter-pack/references/cli-reference.md`, `agent-starter-pack/references/package-overview.md`.

### `agentscope`

Role: AgentScope repo skill for building agents, provider connectors, RAG and memory workflows, service deployments, and local or sandboxed workspaces.
Read when: The request names `agentscope` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent core, provider connectors, rag memory, service platform, and workspace sandboxes.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `agentscope/SKILL.md`, `agentscope/sub-skills/agent-core/`, `agentscope/sub-skills/provider-connectors/`, `agentscope/sub-skills/rag-memory/`, `agentscope/sub-skills/service-platform/`, `agentscope/sub-skills/workspace-sandboxes/`, `agentscope/references/repo-provenance.md`.

### `autogpt`

Role: Route AutoGPT Platform self-hosting, backend, frontend, and legacy Classic agent work to focused operating guidance.
Read when: The request names `autogpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classic agents, platform backend, platform frontend, and platform stack.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autogpt/SKILL.md`, `autogpt/sub-skills/classic-agents/`, `autogpt/sub-skills/platform-backend/`, `autogpt/sub-skills/platform-frontend/`, `autogpt/sub-skills/platform-stack/`, `autogpt/references/contributor-guidance.md`.

### `bindu`

Role: Operate the Bindu agent microservice framework: Python bindufy agents, A2A protocol, security, gRPC SDKs, deployment, Gateway, and Inbox.
Read when: The request names `bindu` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent authoring and a2a, deployment runtime and operations, gateway inbox and orchestration, grpc and language sdks, and security identity and payments.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bindu/SKILL.md`, `bindu/sub-skills/agent-authoring-and-a2a/`, `bindu/sub-skills/deployment-runtime-and-operations/`, `bindu/sub-skills/gateway-inbox-and-orchestration/`, `bindu/sub-skills/grpc-and-language-sdks/`, `bindu/sub-skills/security-identity-and-payments/`, `bindu/references/capability-map.md`.

### `bisheng`

Role: Use BiSheng's enterprise LLM application DevOps platform repository, including FastAPI backend, workflow/RAG/Linsight runtimes, permissions, dual React frontends, deployment, and maintainer workflows.
Read when: The request names `bisheng` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend core, deployment maintenance, frontend apps, identity permissions tenancy, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `bisheng/SKILL.md`, `bisheng/sub-skills/backend-core/`, `bisheng/sub-skills/deployment-maintenance/`, `bisheng/sub-skills/frontend-apps/`, `bisheng/sub-skills/identity-permissions-tenancy/`, `bisheng/sub-skills/knowledge-rag/`, `bisheng/references/architecture-map.md`.

### `docs-gpt`

Role: Use DocsGPT for repository-specific backend/API, agent/tool/workflow, source/retrieval, deployment/auth/operations, frontend/extensions, and E2E work.
Read when: The request names `docs-gpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: the root workflow described in the skill.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `docs-gpt/SKILL.md`, `docs-gpt/references/dev-environment.md`, `docs-gpt/references/repo-map.md`, `docs-gpt/references/repo-provenance.md`, `docs-gpt/references/verification-matrix.md`, `docs-gpt/scripts/check_local_config.py`.

### `google-agents-cli`

Role: Use this repo skill when a task involves the Google Agents CLI (google-agents-cli / agents-cli) lifecycle for ADK agent projects: install/setup, requirements planning, scaffolding, ADK code patterns, evaluation, deployment, Gemini Enterprise publication, and observability.
Read when: The request names `google-agents-cli` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: adk code, deploy, eval, observability, and 3 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `google-agents-cli/SKILL.md`, `google-agents-cli/sub-skills/adk-code/`, `google-agents-cli/sub-skills/deploy/`, `google-agents-cli/sub-skills/eval/`, `google-agents-cli/sub-skills/observability/`, `google-agents-cli/sub-skills/publish/`, `google-agents-cli/references/command-surface.md`.

### `langbot`

Role: Operate, extend, test, and troubleshoot the LangBot repo: Quart backend, React web UI, IM bots, pipelines, providers, plugins, Box, MCP, RAG, persistence, deployment, and QA workflows.
Read when: The request names `langbot` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api mcp web, core runtime, persistence rag workspaces, platform pipeline provider, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `langbot/SKILL.md`, `langbot/sub-skills/api-mcp-web/`, `langbot/sub-skills/core-runtime/`, `langbot/sub-skills/persistence-rag-workspaces/`, `langbot/sub-skills/platform-pipeline-provider/`, `langbot/sub-skills/plugin-box-skills/`, `langbot/references/api-route-map.md`.

### `lazy-llm`

Role: Guides LazyLLM low-code LLM application workflows including modules, flows, RAG, agents, tools, writer review, CLI, and deployment.
Read when: The request names `lazy-llm` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents tools, core runtime, flow orchestration, model deployment, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `lazy-llm/SKILL.md`, `lazy-llm/sub-skills/agents-tools/`, `lazy-llm/sub-skills/core-runtime/`, `lazy-llm/sub-skills/flow-orchestration/`, `lazy-llm/sub-skills/model-deployment/`, `lazy-llm/sub-skills/rag-document-processing/`, `lazy-llm/references/api-surface-map.md`.

### `maxkb`

Role: Routes MaxKB repo work to focused sub-skills for runtime, workflows, knowledge/models, frontend, and admin surfaces.
Read when: The request names `maxkb` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: admin access, frontend integration, knowledge models, runtime architecture, and workflow chat mcp.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `maxkb/SKILL.md`, `maxkb/sub-skills/admin-access/`, `maxkb/sub-skills/frontend-integration/`, `maxkb/sub-skills/knowledge-models/`, `maxkb/sub-skills/runtime-architecture/`, `maxkb/sub-skills/workflow-chat-mcp/`, `maxkb/references/configuration-map.md`.

### `mcp-context-forge`

Role: Operate ContextForge (mcp-context-forge), the FastAPI MCP/A2A/REST/gRPC gateway, including setup, APIs, transports, auth/RBAC, plugins, observability, deployment, and validation.
Read when: The request names `mcp-context-forge` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: auth rbac security, development validation, mcp transports federation, plugins observability, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mcp-context-forge/SKILL.md`, `mcp-context-forge/sub-skills/auth-rbac-security/`, `mcp-context-forge/sub-skills/development-validation/`, `mcp-context-forge/sub-skills/mcp-transports-federation/`, `mcp-context-forge/sub-skills/plugins-observability/`, `mcp-context-forge/sub-skills/registry-admin-api/`, `mcp-context-forge/references/cli-entrypoints.md`.

### `nexent`

Role: Route Nexent SDK, backend, frontend, knowledge/memory, and deployment tasks across the zero-code AI agent platform monorepo.
Read when: The request names `nexent` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend services api, deployment operations, frontend integration, knowledge data memory, and sdk agent runtime.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `nexent/SKILL.md`, `nexent/sub-skills/backend-services-api/`, `nexent/sub-skills/deployment-operations/`, `nexent/sub-skills/frontend-integration/`, `nexent/sub-skills/knowledge-data-memory/`, `nexent/sub-skills/sdk-agent-runtime/`, `nexent/references/package-overview.md`.

### `observal`

Role: Route repository work for Observal, an AI agent registry and observability platform with Python CLI, FastAPI server, harness telemetry, and Vite web UI.
Read when: The request names `observal` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli, harness telemetry, repo development, server, and web.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `observal/SKILL.md`, `observal/sub-skills/cli/`, `observal/sub-skills/harness-telemetry/`, `observal/sub-skills/repo-development/`, `observal/sub-skills/server/`, `observal/sub-skills/web/`, `observal/references/overview.md`.

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

### `open-webui`

Role: Router for installing, running, configuring, and troubleshooting Open WebUI as a self-hosted AI web app.
Read when: The request names `open-webui` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: admin collaboration, chat models, deployment, extensions, and knowledge files.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-webui/SKILL.md`, `open-webui/sub-skills/admin-collaboration/`, `open-webui/sub-skills/chat-models/`, `open-webui/sub-skills/deployment/`, `open-webui/sub-skills/extensions/`, `open-webui/sub-skills/knowledge-files/`, `open-webui/references/configuration.md`.

### `rags`

Role: Use this repo skill for RAGs, a Streamlit app that builds configurable LlamaIndex RAG agents from natural-language setup, data sources, and model settings.
Read when: The request names `rags` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: builder, chat, and configuration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rags/SKILL.md`, `rags/sub-skills/builder/`, `rags/sub-skills/chat/`, `rags/sub-skills/configuration/`, `rags/references/app-architecture.md`, `rags/references/repo-provenance.md`.

### `solace-agent-mesh`

Role: Use Solace Agent Mesh to scaffold projects, configure agents and gateways, run tasks, author workflows, manage plugins, and evaluate agent systems.
Read when: The request names `solace-agent-mesh` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: evaluation, plugin lifecycle, project bootstrap, runtime operations, and workflow authoring.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `solace-agent-mesh/SKILL.md`, `solace-agent-mesh/sub-skills/evaluation/`, `solace-agent-mesh/sub-skills/plugin-lifecycle/`, `solace-agent-mesh/sub-skills/project-bootstrap/`, `solace-agent-mesh/sub-skills/runtime-operations/`, `solace-agent-mesh/sub-skills/workflow-authoring/`, `solace-agent-mesh/references/cli-reference.md`.

### `super-agi`

Role: Routes SuperAGI autonomous-agent framework tasks across deployment, FastAPI service, agent workflows, toolkits, model providers, resources, and vector-store operations.
Read when: The request names `super-agi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents workflows, api service, deployment configuration, models resources vector, and toolkits integrations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `super-agi/SKILL.md`, `super-agi/sub-skills/agents-workflows/`, `super-agi/sub-skills/api-service/`, `super-agi/sub-skills/deployment-configuration/`, `super-agi/sub-skills/models-resources-vector/`, `super-agi/sub-skills/toolkits-integrations/`, `super-agi/references/overview.md`.

### `taskingai`

Role: Operate the TaskingAI self-hosted LLM BaaS platform, including deployment configuration, backend APIs, inference providers, plugin bundles, retrieval, assistant generation, and troubleshooting.
Read when: The request names `taskingai` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: backend api, deployment configuration, inference providers, and plugin bundles.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `taskingai/SKILL.md`, `taskingai/sub-skills/backend-api/`, `taskingai/sub-skills/deployment-configuration/`, `taskingai/sub-skills/inference-providers/`, `taskingai/sub-skills/plugin-bundles/`, `taskingai/references/repo-provenance.md`.

### `yuxi`

Role: Operate and maintain Yuxi, a Docker Compose managed FastAPI, LangGraph, Vue, RAG, OCR, knowledge graph, and CLI platform.
Read when: The request names `yuxi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent runtime, cli and external integration, deployment and configuration, knowledge and ocr, and repo development.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `yuxi/SKILL.md`, `yuxi/sub-skills/agent-runtime/`, `yuxi/sub-skills/cli-and-external-integration/`, `yuxi/sub-skills/deployment-and-configuration/`, `yuxi/sub-skills/knowledge-and-ocr/`, `yuxi/sub-skills/repo-development/`, `yuxi/references/capability-map.md`.

<!-- DISCO_SCENARIO:agent-platforms:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
