<h1 align="center">Auto-ML-Skills</h1>

<p align="center">
  <strong>DisCo：以任务相关操作知识为基础的技能驱动研究 Agent</strong>
</p>

<p align="center">
  <a href="research-skills-library/README.zh-CN.md"><img src="https://img.shields.io/badge/Research_Skills_Library-1000%2B_skills-0E9B9B?style=for-the-badge" alt="Research Skills Library：1000+ skills"></a>
  <a href="https://www.npmjs.com/package/@auto-ml-skills/disco"><img src="https://img.shields.io/badge/CLI-disco%20v0.1.1-5865F2?style=for-the-badge&logo=npm&logoColor=white" alt="DisCo CLI v0.1.1"></a>
  <a href="CONTRIBUTING_CN.md"><img src="https://img.shields.io/badge/Contributing-Guide-0E9B9B?style=for-the-badge" alt="贡献指南"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white" alt="License: Apache 2.0"></a>
</p>

<p align="center">
  <a href="README.md">English</a> | <b>简体中文</b>
</p>

<p align="center">
  <img src="assets/intro.png" alt="Auto-ML-Skills 概览：技能引导的研究、技能库组成与评测结果">
</p>

Auto-ML-Skills 专门补充研究 Agent 在具体任务中应当考虑的知识，但不规定研究
必须如何开展。相关方法、流程、检查和故障恢复措施分散在大语言模型的参数先验、
代码仓库、论文、基准资源及其他知识来源中。DisCo 将有来源依据的证据重新组织
为操作知识技能图。Creator 模式负责构造并验证这些技能图；Researcher 模式按
照渐进披露原则，只加载与当前任务相关的部分，再通过代码、工具和实验完成研究
任务。

**Research Skills Library** 持续收录这些可复用技能图。它包含两部分：从常用
机器学习仓库蒸馏得到的任务无关技能，以及围绕具体研究任务构造的面向任务技能。
当前公开版本发布的是任务无关的仓库技能集合：**超过 1,000 个操作技能**，组织
为面向 **170 个常用机器学习与研究仓库**、覆盖 14 个类别和四个上位方向的
技能图，另有一个技能库级路由器。这个仓库技能集合是技能库扩展的第一个规模化
切入点，而不是它的边界。

> **命名说明：** Auto-ML-Skills 是仓库名称，DisCo 是面向用户的 CLI /
> runtime，Research Skills Library 是仓库发布的可复用技能集合。

## 🧭 目录 <a id="table-of-contents"></a>

- [📣 动态](#news)
- [💡 为什么选择 Auto-ML-Skills](#why-auto-ml-skills)
- [🧰 仓库内容](#what-is-included)
- [🗂️ 技能库覆盖范围](#library-coverage)
- [⚙️ 安装](#installation)
- [🚀 快速开始](#quick-start)
- [🛠️ Creator 元技能](#creator-meta-skills)
- [🤝 参与贡献](#contributing)
- [📚 文档](#documentation)
- [🙏 致谢](#acknowledgement)
- [📄 许可证](#license)
- [📝 引用](#citation)

## 📣 动态 <a id="news"></a>

- **2026-08-03**：Auto-ML-Skills 汇集 DisCo 的 Creator 与 Researcher 工作流，
  以及面向 170 个常用仓库、包含 1,000+ 操作技能的 Research Skills Library。

## 💡 为什么选择 Auto-ML-Skills <a id="why-auto-ml-skills"></a>

研究 Agent 已经能够提出方法、编写代码、运行实验并迭代方案。但面对具体的
机器学习研究任务，能否成功还取决于它能否在有限的执行预算内识别并正确应用
已有知识，同时为最终结果留出足够资源。

- **任务相关知识分散在不同来源中。** 适用的方法、工具、流程、验证检查和
  故障恢复措施可能分布在模型先验、源码仓库、论文、任务资源和网页资料中。
- **原始知识源不等于可直接使用的操作上下文。** Agent 仍需判断知识源何时
  适用、哪些证据重要、如何执行、应当观察到什么，以及怎样发现并恢复失败。
- **重复重建知识会挤占研究预算。** 在每个任务中重新阅读和协调知识源，会消耗
  上下文、工具调用、算力和实验预算，而这些资源本可以用来改善研究结果。
- **Agent 框架与技能承担不同且互补的专门化职责。** 框架决定 Agent 如何
  规划、搜索、审查和执行；技能组织 Agent 应当考虑什么，但不强制固定的研究
  路径。

我们把这组与任务相关的方法、流程、检查和恢复措施称为**操作知识
（operating knowledge）**。DisCo 将面向知识源的内容转化为操作知识技能图；
其中每个技能都会声明适用条件、执行方式、支持证据、验证步骤和故障处理方法。
Creator 模式通过有证据支撑的探索、技能图生成、验证和迭代来完成知识蒸馏；
Researcher 模式则把相关子图作为操作上下文加载并应用到任务中。

## 🧰 仓库内容 <a id="what-is-included"></a>

| 组成部分 | 用途 |
| --- | --- |
| [DisCo](src/) | TypeScript 实现的研究 Agent 命令行工具。Creator 负责构造和维护技能图；Researcher 借助操作技能、代码、工具和实验完成研究任务。 |
| [Research Skills Library](research-skills-library/README.zh-CN.md) | 可复用的操作知识层。当前公开的是任务无关的仓库技能集合：超过 1,000 个技能，组织为面向 170 个常用仓库的技能图，另有同级 `repo-skills-router`。DisCo 也可以围绕具体研究任务的来源约束、评测协议和验证条件构造面向任务的技能。 |
| [示例](examples/) | 经过脱敏的端到端会话：Creator 构造 FlagEmbedding 技能图，Researcher 使用 Gymnasium 与 Stable-Baselines3 技能完成可审计的电池调度实验。 |
| [文档](docs/) | 工作流、架构、目录、部署和移植说明。15 个 Creator 元技能已内置于 DisCo，无需另行安装。 |

每个会话只会加载当前模式对应的技能：

| 模式 | 可见技能 | 职责 |
| --- | --- | --- |
| **Researcher**（默认） | `operating` 类技能，以及没有声明 `metadata.disco-role` 的用户技能 | 使用按需路由的操作知识、代码、工具和实验完成机器学习研究任务。 |
| **Creator** | 显式标记 `metadata.disco-role: meta` 的技能 | 先从 `distill-ml-knowledge` 开始，选择 `direct`、`reuse-existing`（单一流程或有边界的组合）或 `design-reusable`；只有经过验证且会重复出现的构造能力缺口才交给 `design-meta-skill`。 |

非交互会话使用 `--agent-mode creator|researcher`，交互界面使用 `/creator` 和
`/researcher`。切换模式会用干净上下文创建新会话。会话与导出行为、完整工作
流以及部署规则见 [DisCo 工作流指南](docs/disco-workflows.zh.md)。

## 🗂️ 技能库覆盖范围 <a id="library-coverage"></a>

公开的仓库技能集合覆盖 14 个类别和四个上位方向。它精选了机器学习研究
和软件工作流中常用的 170 个仓库，并由此生成 1,060 个根技能与聚焦子技能，
广泛覆盖训练、数据、评测、智能体、检索、视觉、生成、机器学习运维和科学计算。

DisCo 的 Creator CLI 和配套元技能提供可重复的技能图创建、验证、维护和导入
流程。技能库级路由器与渐进披露机制支持任务无关集合继续扩展到更多仓库、领域、
软件栈和编程语言，同时只加载与当前任务相关的仓库技能。

在通用 package 使用之外，DisCo 也可以为具体研究场景构造面向任务的技能。在
这一路径中，技能图围绕任务的来源约束、评测协议和验证条件所需的操作知识组织，
而不是围绕某一个可复用 package workflow 组织。

![Auto-ML-Skills Library 概览](assets/library.png)

[仓库技能目录](docs/imported-repo-skills.md)列出了每个公开技能图的上游仓库、
更新时间、软件包版本、源码提交和预期工作流覆盖范围。

## ⚙️ 安装 <a id="installation"></a>

要在 DisCo 中使用当前仓库公开的技能集合，必须按顺序完成下面两个安装步骤：

1. 安装 `disco` 命令行工具。
2. 把公开仓库技能集合安装到 DisCo 的托管技能目录。

只有在其他 Agent 中复用 Creator 元技能时才需要额外安装；DisCo 自身已经
内置这些技能。

### 安装 DisCo

从 npm 安装 DisCo CLI：

```bash
npm install -g @auto-ml-skills/disco
disco
```

DisCo 需要 Node.js `>=22.19.0`，并沿用了
[Pi](https://github.com/earendil-works/pi) 的多模型提供商支持。npm package
自带经过 DisCo 修改的 coding-agent 源码，并把固定版本的
`@earendil-works/pi-agent-core`、`@earendil-works/pi-ai` 和
`@earendil-works/pi-tui` 作为依赖；它不依赖
`@earendil-works/pi-coding-agent`，不会读取 `.pi` 资源，也不会与全局安装的
Pi 共用依赖树。

请在启动流程中通过 `/login` 配置至少一个提供商，或使用相应的环境变量，例如
`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`、
`GEMINI_API_KEY`、`OPENROUTER_API_KEY` 或 `MISTRAL_API_KEY`。

<details>
<summary>从源码构建用于本地开发</summary>

```bash
git clone https://github.com/VectorSpaceLab/Auto-ML-Skills.git
cd Auto-ML-Skills
# 如果通过 HTTP(S) 代理拉取模型目录失败，请使用：NODE_USE_ENV_PROXY=1 bash scripts/build-from-source-link.sh
bash scripts/build-from-source-link.sh
```

该脚本会根据仓库中的 shrinkwrap 安装 standalone package dependencies、构建
DisCo，并把 `disco` 命令 link 到全局，便于本地使用。

</details>

### 安装公开仓库技能集合

使用 DisCo 安装官方集合及其 router：

```bash
disco repo-skills install
```

该命令会浅层获取官方仓库，只安装公开的 runtime collection，并记录实际 source
commit；本机需要可用的 Git。之后可以检查或更新托管集合：

```bash
disco repo-skills status
disco repo-skills update
```

`status` 只读取本地状态：它会检查托管内容摘要、router 是否存在，以及 router
是否覆盖当前 skills，不会访问 GitHub。需要检查并应用最新官方 commit 时再运行
`update`。

更新只替换官方托管的 skill ID，Creator 在本地创建或导入的其他 repo skills 会
保留。若官方 skill 被本地修改，或者与未托管的同名 skill 冲突，命令会停止；只有
显式使用 `--force` 才会在留下可恢复备份后覆盖冲突项。

DisCo 会注册托管集合，但其中的仓库根技能和聚焦子技能都使用
`disable-model-invocation: true`，因此不会进入初始模型上下文。
默认情况下，`repo-skills-router` 保持可见：它会先选择一个实际场景，再指向同级
`repo-skills/` 集合中的对应技能。可以在不卸载集合的情况下关闭或恢复自动 router
选择：

```bash
disco repo-skills router disable
disco repo-skills router enable
```

disable 后，router 不再参与模型自动选择，但仍会注册，因此可以显式执行
`/skill:repo-skills-router`。安装、更新或修改 router 设置后，请启动新的
Researcher session。

<details>
<summary>手动安装 fallback</summary>

```bash
git clone https://github.com/VectorSpaceLab/Auto-ML-Skills.git
cd Auto-ML-Skills
mkdir -p ~/.disco/agent/skills
cp -R \
  research-skills-library/repo-skills \
  research-skills-library/repo-skills-router \
  ~/.disco/agent/skills/
```

之后运行 `disco repo-skills install` 可以接管内容未变化的手动副本，同时保留额外
的本地 skill ID。

</details>

路由行为、第三方技能包和部署范围的详细说明见
[DisCo 工作流指南](docs/disco-workflows.zh.md)、
[Research Skills Library 说明](research-skills-library/README.zh-CN.md)和
[DisCo CLI README](src/README.md)。

### 把元技能安装到其他 Agent（可选）

DisCo 已经内置 Creator 工作流。若要在其他兼容 Agent 中运行这些工作流，请
参照[给其他 Agent 的 Meta Skills](docs/meta-skills-for-other-agents.zh.md)。

## 🚀 快速开始 <a id="quick-start"></a>

Researcher 是默认模式。完成上述两个安装步骤后，可以直接描述希望得到的研究
结果；DisCo 会通过路由器选择相关仓库技能，并按需渐进打开：

```bash
disco --agent-mode researcher -p "在这台机器上使用相同模型和工作负载评测 vLLM 与 SGLang。在相同硬件和显存约束下分别调优两套服务，报告各自经过验证的最佳吞吐量，并保留复现实验所需的命令和测量结果。"
```

当任务需要新的或经过更新的操作技能图时，使用 Creator 模式。它会先从
`distill-ml-knowledge` 开始，归一化任务并选择 `direct`、`reuse-existing` 或
`design-reusable`。direct 会构造与当前任务相关的技能图；`reuse-existing` 会调用
一个充分的现有流程或有边界的流程组合；`design-reusable` 则把有证据证明会重复
出现的构造能力缺口交给 `design-meta-skill`。

**为一个具体仓库创建技能。** 内置仓库工作流已经覆盖源码检查、环境准备、
技能生成、验证和导入。`distill-ml-knowledge` 因此会选择
`reuse-existing` 和 `reuse mode: single`，并把这个请求交给
`create-repo-skill`：

```bash
git clone https://github.com/FlagOpen/FlagEmbedding.git
disco --agent-mode creator -p \
  "/skill:distill-ml-knowledge 为本地 ./FlagEmbedding checkout 创建并验证仓库技能图。使用它的文档、示例、测试和 runtime API 覆盖 embedding inference 与 evaluation。根据确认的范围准备所需的 CPU/GPU 环境，然后在导入经过验证的技能图前征求确认。"
```

**直接创建一个任务相关技能。** 当已批准的知识源目录可以直接支持当前任务，
并且不需要新的可复用构造流程时，使用 `direct`。下面的示例把经典 Kaggle
Home Credit Default Risk 问题所需的操作指导蒸馏为一个 runtime `SKILL.md`：

```bash
disco --agent-mode creator -p \
  "/skill:distill-ml-knowledge 使用 direct 路径，为 Kaggle Home Credit Default Risk 创建一个任务相关技能。任务描述位于 /path/to/home-credit-task/description.md，deep research 资料位于 /path/to/home-credit-deep-research/。最终只输出一个 SKILL.md，验证后在导入 .agents/skills/home-credit-default-risk/ 前征求确认。"
```

Creator 会验证并暂存每项产物，然后请求审批。仓库技能图使用 DisCo 托管的
repo collection，而与比赛任务绑定的技能默认部署到当前项目的
`.agents/skills/`；两者都需要分别通过验证和审批，之后才能在新的 Researcher
会话中使用。[DisCo 工作流指南](docs/disco-workflows.zh.md)详细说明了显式调用
技能、使用任务专用技能图、从仓库与论文构造技能、验证、维护、导出、部署范围
和模式切换行为。

## 🛠️ Creator 元技能 <a id="creator-meta-skills"></a>

DisCo 内置了 15 个仅供 Creator 使用的元技能，覆盖充分性评估、工作流设计、
仓库与论文知识蒸馏、验证、维护和跨 Agent 导出。Creator 的通用入口
`distill-ml-knowledge` 负责任务归一化、充分性/组合评估和路径选择；
`design-meta-skill` 只在收到经过验证的 `design-reusable` handoff 后设计 reusable
bundle。它们均声明 `metadata.disco-role: meta`，因此不会出现在 Researcher 模式中。完整清单和
契约以 [内置技能参考](src/packages/coding-agent/src/disco/skills/README.md)为准。
若要在 DisCo 之外运行这些工作流，请参照
[给其他 Agent 的 Meta Skills](docs/meta-skills-for-other-agents.zh.md)。

## 🤝 参与贡献 <a id="contributing"></a>

我们欢迎三类主要贡献：

1. **贡献生成好的 repo skills。** 在
   `research-skills-library/repo-skills/<skill-id>/` 下添加可发布 runtime
   skill，包含 provenance 和 routing metadata，并更新同级的
   `research-skills-library/repo-skills-router/`，确保 agent 能发现它。
2. **扩展或刷新已有 repo skills。** 用基于源码证据的变更优化过期、不完整或
   不清晰的 skills。当 upstream baseline 或覆盖范围变化时，同步更新
   provenance 或 routing metadata。
3. **改进 DisCo CLI 源码。** 欢迎贡献 [`src/`](src/) 下的 TypeScript CLI，
   包括 package/repo 和 paper-to-skill workflows。请运行聚焦检查，并说明行
   为变化。repo-skill workflow 相关变更应保持 create/verify 分工、
   review/test artifact layout、import-readiness gates 和 locked router-update
   transaction。对集成的 Paper2Skills workflow 的改动应保持
   source-resolution、modularization、generated-skill validation、recovery、
   analysis 和 final-report contracts。

repo-skill PR 需要列出用于生成或修订 skill 的 model、provider、
reasoning/thinking level、source repository commit 和 verification steps。
涉及 paper-to-skill 行为的 DisCo CLI 变更还应在适用时说明 paper source、
run config、recovery mode、validation artifacts 和 final report path。完整
checklist 见 [CONTRIBUTING_CN.md](CONTRIBUTING_CN.md)。

## 📚 文档 <a id="documentation"></a>

| 页面 | 说明 |
| --- | --- |
| [DisCo 工作流指南](docs/disco-workflows.zh.md) | 模式与会话行为、Researcher 任务执行、Creator 构造与维护、部署范围和跨 Agent 导出。 |
| [示例](examples/) | 经过脱敏的 Creator 与 Researcher 会话轨迹，包括 FlagEmbedding 技能构造和 Gymnasium/Stable-Baselines3 电池调度实验。 |
| [仓库技能目录](docs/imported-repo-skills.md) | 当前公开仓库技能的详细目录，按仓库技能类别组织并记录上游基线。 |
| [Research Skills Library](research-skills-library/README.zh-CN.md) | 更广义的 library model、当前 repository-skill collection、canonical layout 和 DisCo 安装命令。 |
| [架构说明](docs/architecture.zh.md) | 仓库分层、模式边界、runtime routing、源码布局、构造流程、project/managed 部署范围，以及 managed repository library。 |
| [Bundled Skills Reference](src/packages/coding-agent/src/disco/skills/README.md) | Role metadata、Creator meta-skill contracts、Researcher routing 和 construction artifact layouts。 |
| [给其他 Agent 的 Meta Skills](docs/meta-skills-for-other-agents.zh.md) | Codex、Claude Code 和 project-local agent 的 portable Creator-only workflow 安装说明。 |
| [DisCo CLI README](src/README.md) | 通用任务执行、runtime skill routing、package 安装和 skill authoring workflows。 |
| [贡献指南](CONTRIBUTING_CN.md) | generated repo skills、router/catalog、workflow skills、文档和 CLI 源码贡献规范。 |

## 🙏 致谢 <a id="acknowledgement"></a>

DisCo 的 CLI 和 agent runtime 构建在
[earendil-works/pi](https://github.com/earendil-works/pi) 的基础之上。Pi 是
一个开源 AI agent toolkit，提供 unified LLM API、agent loop、terminal UI
和 coding-agent CLI。

Auto-ML-Skills 也离不开 GitHub 开源社区。这个 skill library 能够存在，是因
为许多研究者和工程师开放了高质量的 ML、agent、data、生物/化学、视觉和基
础设施项目。

## 📄 许可证 <a id="license"></a>

除非文件中另有明确说明，仓库级 Auto-ML-Skills 内容以及
[`research-skills-library/`](research-skills-library/) 下开源的 runtime repo
skills 使用 Apache License 2.0。位于 [`src/`](src/) 的 standalone DisCo npm
package 使用其单独的 [MIT License](src/LICENSE)；upstream attribution 和第三方
条款见 [`src/THIRD_PARTY_NOTICES.md`](src/THIRD_PARTY_NOTICES.md)。

仓库级 Apache-2.0 完整文本见 [LICENSE](LICENSE)。

## 📝 引用 <a id="citation"></a>

TBA
