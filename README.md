<h1 align="center">AREX-Skill</h1>

<p align="center">
  <strong>Turn Repos & Papers into Skills for Autonomous ML Research</strong>
</p>

<p align="center">
  An open library of <b>5,000+ verified, executable skills</b> distilled from
  <b>1,000 ML repositories</b> — and the agent that builds them.
</p>

<p align="center">
  <a href="research-skills-library/README.md"><img src="https://img.shields.io/badge/Research_Skills_Library-5000%2B_skills-0E9B9B?style=for-the-badge" alt="Research Skills Library: 5000+ skills"></a>
  <a href="research-skills-library/repo-skills/"><img src="https://img.shields.io/badge/ML_Repositories-1000-5865F2?style=for-the-badge" alt="1000 ML repositories"></a>
  <a href="https://www.npmjs.com/package/@auto-ml-skills/disco"><img src="https://img.shields.io/badge/CLI-disco-D22128?style=for-the-badge&logo=npm&logoColor=white" alt="DisCo CLI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-lightgrey?style=for-the-badge&logo=apache&logoColor=white" alt="License: Apache 2.0"></a>
</p>

<p align="center">
  <b>English</b> | <a href="README.zh-CN.md">简体中文</a>
</p>

```mermaid
flowchart LR
    A["📦 Repos<br>📄 Papers<br>✍️ Blogs"] ==> B["🤖 <b>Creator Agent</b><br><i>discover · distill · validate</i>"]
    B ==> C["🧠 <b>AREX Research Skills</b><br>routed · verified · executable"]
    C ==> D["🧑‍💻 <b>Your coding agent</b><br>Claude Code · Codex · DisCo"]
    D ==> E["🔬 <b>Autonomous<br>ML Research</b>"]
```

> **Same agent. Same budget. +134% on MLE-bench.**
> With AREX skills, vanilla Codex jumps from **31% → 73%** Any-Medal —
> outscoring every public leaderboard entry. Skills, not agent engineering.

---

## 📣 News

- **2026-08**: The library scales to **1,000 repositories and 5,000+ skills**,
  with a rebuilt router covering every repo. Technical report coming soon,
  with full benchmark results on MLE-bench, PaperBench, Frontier-CS, and
  PassNet.
- **2026-08-03**: AREX-Skill launches with DisCo's Creator and Researcher
  workflows and a Research Skills Library of 1,000+ operating skills for 170
  widely used repositories.

---

## Why AREX-Skill?

**Research knowledge is everywhere. Agents still can't use it well.**

| 📄 **Papers** | 💻 **Codebases** | 🤖 **Agents** |
|:---:|:---:|:---:|
| Explain *why* things work | Contain *working* implementations | Still have to *rediscover everything* |

Papers, repositories, and blogs hold nearly all of the field's know-how — but
they are written for human readers. They are loose, heterogeneous, and expose
no interface an agent can call. So on every task, an agent burns its context
window and execution budget searching, reading, and trial-and-erroring its way
back to knowledge the field already wrote down.

We call the missing layer **operating knowledge**: the know-how that separates
*knowing a method* from *making it work*. AREX-Skill pre-compiles it, once, into
skills.

---

## From Knowledge to Skills

> **We don't summarize repositories. We compile them into skills agents can execute.**

```mermaid
flowchart LR
    subgraph D["📚 Descriptive Knowledge — written for humans"]
        direction TB
        d1["📄 Papers<br><i>methods & why they work</i>"]
        d2["💻 Repos<br><i>code, configs, examples</i>"]
        d3["✍️ Blogs<br><i>tricks & pitfalls</i>"]
    end
    D == "⚗️ Skill Distillation" ==> O
    subgraph O["🛠 Operational Knowledge — built for agents"]
        direction TB
        o1["🎯 when to use it"]
        o2["📋 how to use it"]
        o3["▶️ what to run"]
        o4["✅ how to validate results"]
        o5["🚑 how to recover from failure"]
    end
```

The output is not a summary and not a RAG index. It is **Knowledge →
Capability**: a skill declares its use conditions, execution behavior,
supporting evidence, validation steps, and failure handling — everything an
agent needs to act, verify, and recover without re-deriving the source.

---

## What Is an AREX Skill?

Each repository becomes an **operating-knowledge skill graph** with three parts:

```text
AREX Skill
│
├── 🧭 Skill Router        one library-level index, loaded first;
│                          routes the task to the right skill graph
│
├── 📖 Skill Instructions  when to use · how to use · expected behavior
│                          · validation steps · failure recovery
│
└── 🛠 Tools               scripts · CLIs · reusable implementations
                           ready to execute in the agent's environment
```

**Structured. Executable. Agent-ready.** Skills load through progressive
disclosure: the agent first sees only the router, opens the matching graph,
and reads just the sub-skill the task needs — operating knowledge for 1,000
repositories at the cost of a few files in context.

---

## How AREX Builds Skills

**Skills are discovered, distilled, and verified — automatically.**

```mermaid
flowchart LR
    S["📦 repo · paper · blog"] --> A["🔍 <b>Discover</b><br><i>map what the source<br>can actually do</i>"]
    A --> B["🧠 <b>Distill</b><br><i>write skills with evidence,<br>checks & recovery paths</i>"]
    B --> C["🧪 <b>Validate</b><br><i>execute examples & tests<br>in a real environment</i>"]
    C == "✅ passed" ==> L["📚 <b>Ship</b><br><i>into the library</i>"]
    C -- "❌ failed" --> E["🔁 <b>Evolve</b><br><i>repair & refine</i>"]
    E --> B
```

An ordinary repo-to-doc tool stops at `Repo → Documentation`. AREX's Creator
agent runs a full experimental loop — evidence-backed exploration, skill-graph
generation, then **verification with refinement**: generated checks and native
examples are executed, failures are repaired, and the loop repeats until the
graph passes or the budget is spent. Skills ship only after they survive their
own tests.

---

## Works With Your Coding Agent

**No new agent. No new workflow.**

```mermaid
flowchart LR
    S["🧠 <b>AREX Skills</b><br><i>plain SKILL.md graphs<br>+ one library router</i>"]
    S ==> A["<b>Claude Code</b><br><i>drop into your skills dir</i>"]
    S ==> B["<b>Codex</b><br><i>the harness in our benchmarks</i>"]
    S ==> C["<b>DisCo</b><br><i>bundled CLI — manages<br>install, routing & updates</i>"]
```

Skills are plain `SKILL.md` graphs in the emerging agent-skills format. Drop
them into the coding agent you already use — no proprietary runtime, no new
research platform to migrate to. The bundled [DisCo CLI](cli/) manages
installation, routing, and updates, and our benchmark results below use
unmodified Codex as the harness.

---

## Scale

<table align="center">
  <tr>
    <td align="center"><h2>1,000</h2>widely used<br>ML repositories</td>
    <td align="center"><h2>5,000+</h2>autonomously distilled<br>& verified skills</td>
    <td align="center"><h2>20</h2>research areas,<br>178 task families</td>
  </tr>
</table>

<p align="center">Sources: GitHub · Papers · Technical Blogs</p>

This is not a demo. It is the first scale point of a growing **Machine
Learning Research Skill Library** — from training infrastructure, LLM
alignment, and inference serving to robotics, genomics, and scientific
computing. The [catalog](docs/imported-repo-skills.md) lists every graph with
its upstream repository, source commit, and coverage.

---

## Skill Gallery

What a skill looks like in practice — source → skill → one prompt:

| | Source | Skill | Ask your agent |
|---|---|---|---|
| 🔍 | [FAISS](research-skills-library/repo-skills/faiss/) | Vector search & index composition | *"Optimize this FAISS index for lower latency at recall ≥ 0.95."* |
| ⚡ | [vLLM](research-skills-library/repo-skills/vllm/) | High-throughput LLM serving | *"Benchmark vLLM vs SGLang on this model and report verified throughput."* |
| 🧠 | [Unsloth](research-skills-library/repo-skills/unsloth/) | Efficient LLM fine-tuning | *"Fine-tune Llama on this dataset within 24 GB VRAM."* |
| 🔥 | [Diffusers](research-skills-library/repo-skills/diffusers/) | Diffusion training & inference | *"Train a LoRA for this style and validate outputs."* |
| 🦾 | [LeRobot](research-skills-library/repo-skills/lerobot/) | Robot learning workflows | *"Train and evaluate an ACT policy on this manipulation dataset."* |
| 🧬 | [AlphaFold2](research-skills-library/repo-skills/alphafold2/) | Protein structure prediction | *"Fold these sequences and check confidence metrics."* |

Every graph follows the same contract: a routed entry skill, focused
sub-skills for real workflows (data, training, evaluation, serving,
troubleshooting), and validation steps the agent can actually run.

---

## Do Skills Make Agents Better Researchers?

We hold everything fixed — **Codex harness, GPT-5.5 (xhigh) backbone, same
execution budget** — and change exactly one thing: whether the agent has
AREX-distilled skills.

```text
MLE-bench (Any Medal, 75 competitions)
  without skills   ███████░░░░░░░░░░░░░░░░  31.1%
  with skills      █████████████████░░░░░░  72.9%   (+134% relative)

PaperBench (replication score, 20 papers)
  without skills   ███████░░░░░░░░░░░░░░░░  29.5
  with skills      █████████░░░░░░░░░░░░░░  39.6    (+34% relative)
```

| Benchmark | Metric | Codex | Codex + AREX-Skill | Δ |
| --- | --- | ---: | ---: | ---: |
| **MLE-bench** (full, 75 tasks) | Any Medal % | 31.11 | **72.89** | **+41.78** |
| **PaperBench** (full, 20 papers) | Replication score | 29.45 | **39.59** | **+10.14** |
| **Frontier-CS** (Agent Track, 188 tasks) | Score | 70.63 | **77.14** | **+6.51** |
| **PassNet** (200 samples) | AS Score | 1.343 | **1.531** | **+14.0%** |

Highlights from the technical report (release coming soon):

- **Beyond agent engineering.** Vanilla Codex + skills tops the strongest
  public MLE-bench entries (72.89 vs 64.44) — no custom harness, no modified
  control loop, only distilled operating knowledge.
- **The advantage grows with difficulty.** On MLE-bench High-tier tasks the
  score rises from 13.3% to 62.2% (4.7×); skills matter most exactly where
  unguided trial-and-error is most expensive.
- **Recovery, not just polish.** The largest gains land on tasks where the
  no-skill agent nearly fails (PaperBench `rice`: 7.9 → 48.5; Frontier-CS
  tasks scoring <50 gain +26.6 on average).
- **Efficiency, not brute force.** On Frontier-CS, Codex + AREX-Skill
  Pareto-dominates the leaderboard's Claude Code entries on score, tokens,
  steps, and tool calls, using ~3× fewer tokens.

### Why it helps

```text
Without AREX                    With AREX
────────────                    ─────────
Search the web                  Route to skill
Inspect the repo                Execute known workflow
Guess an approach               Validate against checks
Debug from scratch              Optimize the target metric
Retry, repeat…
```

Benchmarks show *that* performance improves; the operating pattern shows
*why*: the agent enters a productive region of the solution space early and
spends its budget on the choices that move the metric. See a full
[Creator session](examples/creator/) building a FlagEmbedding graph and a
[Researcher session](examples/researcher/) applying Gymnasium +
Stable-Baselines3 skills to an auditable RL experiment.

---

## Quick Start

Three steps to a skill-powered research agent:

```bash
# 1. Install the DisCo CLI (Node.js >= 22.19)
npm install -g @auto-ml-skills/disco

# 2. Install the skill library (1,000 repos + router)
disco repo-skills install

# 3. Research with skills
disco -p "Use the installed skills to benchmark vLLM and SGLang \
on this machine and report verified throughput for each."
```

Configure a model provider on first run with `/login` or environment variables
(`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, …).

<details>
<summary><b>Create your own skills (Creator mode)</b></summary>

DisCo's Creator mode distills new skill graphs from any repository or paper,
then verifies them before import:

```bash
git clone https://github.com/FlagOpen/FlagEmbedding.git
disco --agent-mode creator -p \
  "/skill:distill-ml-knowledge Create and verify a repository skill graph \
for ./FlagEmbedding covering embedding inference and evaluation."
```

Researcher is the default mode; switch with `--agent-mode creator|researcher`
or `/creator` · `/researcher` in the UI. See
[DisCo Workflows](docs/disco-workflows.md) for the 15 bundled Creator meta
skills, verification gates, and maintenance workflows.

</details>

<details>
<summary><b>Use the skills in another agent, manage the collection, build from source</b></summary>

- **Other agents**: skills are standard `SKILL.md` graphs; see
  [Meta Skills For Other Agents](docs/meta-skills-for-other-agents.md) for
  Claude Code / Codex installation.
- **Manage**: `disco repo-skills status | update`, router toggle with
  `disco repo-skills router disable|enable`.
- **Manual install**: copy `research-skills-library/repo-skills*` into
  `~/.disco/agent/skills/`.
- **From source**: `bash scripts/build-from-source-link.sh` after cloning.

The full [Installation Guide](docs/installation.md) covers provider setup,
update/backup semantics, router behavior, and every fallback path.

</details>

---

## The Bigger Vision

**From repositories to skills. From skills to autonomous research.**

> Today's research knowledge is written for humans.
> AREX turns it into operating knowledge for AI researchers.

```mermaid
flowchart LR
    A["📦 <b>Repos + Papers</b><br><i>written for humans</i>"] --> B["🧠 <b>Research Skills</b><br><i>distilled once, verified</i>"]
    B --> C["🌐 <b>Skill Ecosystem</b><br><i>shared & inherited</i>"]
    C --> D["🤖 <b>Autonomous Agents</b><br><i>start where the field left off</i>"]
    D --> E["⚙️ <b>Automated<br>ML R&D</b>"]
```

Every skill distilled once is inherited by every agent afterward. As the
library grows — more repositories, more papers, more task families — each
research task starts a little further from zero. We believe ML research
knowledge should exist not only as papers and repos, but as skills that AI
researchers can directly call.

> **Naming note:** AREX-Skill is the project and the published Research Skills
> Library. DisCo is the bundled skill-powered CLI/runtime that creates skills
> (Creator) and researches with them (Researcher).

---

## Contributing

We welcome three kinds of contributions — new repo skills, refreshes of
existing skills, and DisCo CLI improvements. Skill PRs should include
provenance (model, source commit, verification steps); see
[CONTRIBUTING.md](CONTRIBUTING.md) for the checklist and
[Contributing docs](CONTRIBUTING.md) for the repo-skill layout and router
update workflow.

## Documentation

| Page | Description |
| --- | --- |
| [Installation Guide](docs/installation.md) | Full CLI and skill-collection installation, provider setup, router toggle, manual fallback. |
| [DisCo Workflows](docs/disco-workflows.md) | Modes, sessions, Researcher execution, Creator construction, deployment scopes. |
| [Research Skills Library](research-skills-library/README.md) | Library model, collection layout, installation. |
| [Imported Repo Skills Catalog](docs/imported-repo-skills.md) | Every published graph with upstream baselines. |
| [Architecture](docs/architecture.md) | Repository layers, routing, authoring pipelines, deployment scopes. |
| [Examples](examples/) | Sanitized end-to-end Creator and Researcher sessions. |
| [Bundled Skills Reference](cli/packages/coding-agent/src/disco/skills/README.md) | Creator meta-skill contracts and artifact layouts. |
| [DisCo CLI README](cli/README.md) | CLI usage, runtime skill routing, packages. |

## Acknowledgement

DisCo's CLI and agent runtime build on
[earendil-works/pi](https://github.com/earendil-works/pi). The library exists
because the open-source ML community released the high-quality repositories it
distills — thank you.

## License

Repository materials and the skills under
[`research-skills-library/`](research-skills-library/) are Apache-2.0. The
standalone DisCo npm package under [`cli/`](cli/) is MIT with upstream
attribution in [`cli/THIRD_PARTY_NOTICES.md`](cli/THIRD_PARTY_NOTICES.md).

## Citation

```bibtex
@article{arexskill2026,
  title  = {AREX-Skill: Distilled Operational Knowledge For Advancing
            Autonomous AI Research},
  author = {{AREX-Skill Team}},
  year   = {2026},
  note   = {Technical report},
}
```
