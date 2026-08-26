# Autonomous Agent Applications

## When To Read

Requests in the Autonomous Agent Applications family of the LLM Applications area: setup, workflows, APIs, CLIs, configs, artifacts, and troubleshooting for repositories focused on autonomous agent applications.

## Repo Skill Options

<!-- DISCO_SCENARIO:autonomous-agent-applications:START -->
### `app-agent`

Role: Routes AppAgent setup, exploration, and deployment workflows for Android-device task automation.
Read when: The request names `app-agent` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: deployment and exploration.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `app-agent/SKILL.md`, `app-agent/sub-skills/deployment/`, `app-agent/sub-skills/exploration/`, `app-agent/references/api-reference.md`, `app-agent/references/configuration.md`, `app-agent/references/repo-provenance.md`.

### `aris`

Role: Use ARIS, the Auto Research in Sleep skill-based research harness, for setup, workflow routing, reviewer backend integration, state recovery, experiment operations, and repository maintenance.
Read when: The request names `aris` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: install and distribution, repository maintenance, review and provider backends, state recovery and experiment ops, and workflow routing and skill catalog.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `aris/SKILL.md`, `aris/sub-skills/install-and-distribution/`, `aris/sub-skills/repository-maintenance/`, `aris/sub-skills/review-and-provider-backends/`, `aris/sub-skills/state-recovery-and-experiment-ops/`, `aris/sub-skills/workflow-routing-and-skill-catalog/`, `aris/references/capability-map.md`.

### `autogpt`

Role: Route AutoGPT Platform self-hosting, backend, frontend, and legacy Classic agent work to focused operating guidance.
Read when: The request names `autogpt` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: classic agents, platform backend, platform frontend, and platform stack.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `autogpt/SKILL.md`, `autogpt/sub-skills/classic-agents/`, `autogpt/sub-skills/platform-backend/`, `autogpt/sub-skills/platform-frontend/`, `autogpt/sub-skills/platform-stack/`, `autogpt/references/contributor-guidance.md`.

### `clawbio`

Role: Use ClawBio for local-first bioinformatics agent workflows: install and run its skill library, route genomic or omics inputs, create reproducible reports, connect optional MCP or Nextflow integrations, and author or validate skills.
Read when: The request names `clawbio` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: core runner, domain routing, pipelines integrations, skill authoring, and validation safety.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `clawbio/SKILL.md`, `clawbio/sub-skills/core-runner/`, `clawbio/sub-skills/domain-routing/`, `clawbio/sub-skills/pipelines-integrations/`, `clawbio/sub-skills/skill-authoring/`, `clawbio/sub-skills/validation-safety/`, `clawbio/references/repo-provenance.md`.

### `deep-analyze`

Role: Router for DeepAnalyze agentic data-science workflows.
Read when: The request names `deep-analyze` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: api and clients, interactive frontends, model serving, and training and evaluation.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-analyze/SKILL.md`, `deep-analyze/sub-skills/api-and-clients/`, `deep-analyze/sub-skills/interactive-frontends/`, `deep-analyze/sub-skills/model-serving/`, `deep-analyze/sub-skills/training-and-evaluation/`, `deep-analyze/references/install-and-environment.md`.

### `deep-research`

Role: Operate Tongyi DeepResearch and its WebAgent family: ReAct inference setup, rollout validation, benchmark evaluation, and variant routing.
Read when: The request names `deep-research` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmark evaluation, react inference, and webagent family.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deep-research/SKILL.md`, `deep-research/sub-skills/benchmark-evaluation/`, `deep-research/sub-skills/react-inference/`, `deep-research/sub-skills/webagent-family/`, `deep-research/references/configuration.md`, `deep-research/references/model-and-repo-overview.md`.

### `deepxiv-sdk`

Role: Use the DeepXiv SDK for citation-aware academic and web research through its Python Reader, deepxiv CLI, progressive paper APIs, optional local LangGraph agent, PMC, bioRxiv/medRxiv, and trending workflows.
Read when: The request names `deepxiv-sdk` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and operations, optional local agent, and reader and paper research.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `deepxiv-sdk/SKILL.md`, `deepxiv-sdk/sub-skills/cli-and-operations/`, `deepxiv-sdk/sub-skills/optional-local-agent/`, `deepxiv-sdk/sub-skills/reader-and-paper-research/`, `deepxiv-sdk/references/repo-provenance.md`, `deepxiv-sdk/references/troubleshooting.md`.

### `gptme`

Role: Operate the gptme terminal AI agent, provider configuration, tools, server/Web UI, protocols, evals, and repository-maintenance workflows.
Read when: The request names `gptme` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: cli and conversations, configuration and providers, evals and benchmarks, repo development, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `gptme/SKILL.md`, `gptme/sub-skills/cli-and-conversations/`, `gptme/sub-skills/configuration-and-providers/`, `gptme/sub-skills/evals-and-benchmarks/`, `gptme/sub-skills/repo-development/`, `gptme/sub-skills/server-webui-and-protocols/`, `gptme/references/installation-and-entrypoints.md`.

### `jarvis`

Role: Use JARVIS, HuggingGPT, EasyTool, and TaskBench for agent tool orchestration, multimodal model routing, concise tool instruction, and task-automation evaluation workflows.
Read when: The request names `jarvis` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: easytool, hugginggpt chat, and taskbench.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `jarvis/SKILL.md`, `jarvis/sub-skills/easytool/`, `jarvis/sub-skills/hugginggpt-chat/`, `jarvis/sub-skills/taskbench/`, `jarvis/references/repo-overview.md`, `jarvis/references/repo-provenance.md`.

### `la-vague`

Role: Operate LaVague browser-agent, model-context, driver, Gradio/server, and QA automation workflows safely with bundled probes and troubleshooting.
Read when: The request names `la-vague` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: browser drivers, contexts and retrievers, core web agent, qa and test runner, and server extension gradio.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `la-vague/SKILL.md`, `la-vague/sub-skills/browser-drivers/`, `la-vague/sub-skills/contexts-and-retrievers/`, `la-vague/sub-skills/core-web-agent/`, `la-vague/sub-skills/qa-and-test-runner/`, `la-vague/sub-skills/server-extension-gradio/`, `la-vague/references/package-overview.md`.

### `medrax`

Role: Use MedRAX for chest-X-ray reasoning workflows, selective model-tool orchestration, DICOM/image preparation, Gradio interaction, and bounded ChestAgentBench evaluation with explicit resource and safety checks.
Read when: The request names `medrax` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent orchestration, benchmark evaluation, chest xray analysis, image data utilities, and web interface.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `medrax/SKILL.md`, `medrax/sub-skills/agent-orchestration/`, `medrax/sub-skills/benchmark-evaluation/`, `medrax/sub-skills/chest-xray-analysis/`, `medrax/sub-skills/image-data-utilities/`, `medrax/sub-skills/web-interface/`, `medrax/references/repo-provenance.md`.

### `mobile-agent`

Role: Operate the MobileAgent repository family: GUI-Owl/Mobile-Agent v3.5, Mobile-Agent-E, PC-Agent, legacy mobile agents, GUI benchmarks, GUI-Critic, and UI-S1 post-training workflows.
Read when: The request names `mobile-agent` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: benchmarks and evaluation, current gui owl, legacy agents, mobile agent e, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `mobile-agent/SKILL.md`, `mobile-agent/sub-skills/benchmarks-and-evaluation/`, `mobile-agent/sub-skills/current-gui-owl/`, `mobile-agent/sub-skills/legacy-agents/`, `mobile-agent/sub-skills/mobile-agent-e/`, `mobile-agent/sub-skills/pc-agent/`, `mobile-agent/references/environment-matrix.md`.

### `muzic`

Role: Route Microsoft Muzic research workflows for music understanding, retrieval, symbolic generation, songwriting, and MusicAgent orchestration.
Read when: The request names `muzic` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: lyric melody songwriting, music agent workflows, music understanding retrieval, and symbolic generation structure.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `muzic/SKILL.md`, `muzic/sub-skills/lyric-melody-songwriting/`, `muzic/sub-skills/music-agent-workflows/`, `muzic/sub-skills/music-understanding-retrieval/`, `muzic/sub-skills/symbolic-generation-structure/`, `muzic/references/project-map.md`.

### `open-interface`

Role: Use Open Interface for LLM-driven desktop automation runtime, configuration, packaging, and safe repository maintenance workflows.
Read when: The request names `open-interface` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: desktop runtime and packaging.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `open-interface/SKILL.md`, `open-interface/sub-skills/desktop-runtime/`, `open-interface/sub-skills/packaging/`, `open-interface/references/repo-provenance.md`, `open-interface/references/troubleshooting.md`, `open-interface/scripts/check_runtime_contract.py`.

### `opensquilla`

Role: Route OpenSquilla installation, gateway, provider and SquillaRouter configuration, CLI automation, channels and MCP, Skills and MetaSkills, and TUI or desktop work to the right bundled sub-skill.
Read when: The request names `opensquilla` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: channels and integrations, cli and automation, configuration and routing, setup and gateway, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `opensquilla/SKILL.md`, `opensquilla/sub-skills/channels-and-integrations/`, `opensquilla/sub-skills/cli-and-automation/`, `opensquilla/sub-skills/configuration-and-routing/`, `opensquilla/sub-skills/setup-and-gateway/`, `opensquilla/sub-skills/skills-and-meta/`, `opensquilla/references/cli-catalog.md`.

### `rd-agent`

Role: Operate Microsoft's RD-Agent research-agent framework for data-science, quantitative-finance, LLM fine-tuning, reinforcement-learning, and paper/model-copilot workflows.
Read when: The request names `rd-agent` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: competition data science, llm finetune, paper model copilot, quant finance, and 2 other focused workflows.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rd-agent/SKILL.md`, `rd-agent/sub-skills/competition-data-science/`, `rd-agent/sub-skills/llm-finetune/`, `rd-agent/sub-skills/paper-model-copilot/`, `rd-agent/sub-skills/quant-finance/`, `rd-agent/sub-skills/rl-post-training/`, `rd-agent/references/package-overview.md`.

### `rosa`

Role: Route ROSA LangChain agent construction, ROS 1 and ROS 2 operations, custom tool integration, and safe troubleshooting for jpl-rosa.
Read when: The request names `rosa` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agent core, ros1 operations, ros2 operations, and tool customization.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `rosa/SKILL.md`, `rosa/sub-skills/agent-core/`, `rosa/sub-skills/ros1-operations/`, `rosa/sub-skills/ros2-operations/`, `rosa/sub-skills/tool-customization/`, `rosa/references/repo-provenance.md`.

### `super-agi`

Role: Routes SuperAGI autonomous-agent framework tasks across deployment, FastAPI service, agent workflows, toolkits, model providers, resources, and vector-store operations.
Read when: The request names `super-agi` or asks for package-specific APIs, CLIs, configs, data/model artifacts, error messages, workflows, or repository maintenance that match this project.
Best for: agents workflows, api service, deployment configuration, models resources vector, and toolkits integrations.
Avoid when: another repo skill in this scenario matches the user's task, package, model family, data format, serving backend, or workflow more directly.
Useful entry points: `super-agi/SKILL.md`, `super-agi/sub-skills/agents-workflows/`, `super-agi/sub-skills/api-service/`, `super-agi/sub-skills/deployment-configuration/`, `super-agi/sub-skills/models-resources-vector/`, `super-agi/sub-skills/toolkits-integrations/`, `super-agi/references/overview.md`.

<!-- DISCO_SCENARIO:autonomous-agent-applications:END -->

## How To Choose

Match the repo skill whose package, model family, data format, or workflow surface most directly fits the request; package names and API terms are the strongest signal.
