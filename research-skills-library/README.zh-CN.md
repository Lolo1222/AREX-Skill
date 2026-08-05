# Research Skills Library

Research Skills Library 是面向机器学习研究与软件工作的可复用 skill 层。它
包含两部分：从常用机器学习仓库蒸馏得到的任务无关 operating skills，以及围绕
具体研究任务而不是通用 package 使用构造的面向任务 operating skills。

当前目录发布的是面向 170 个常用机器学习与研究仓库的 1,000+ 操作技能，因此
它记录的是任务无关的 repository collection，而不是整个 library 的边界。

## 当前内容

当前仓库包含 170 个 repository skill graphs，其中共有 1,000+ 根技能和聚焦
子技能，另有一个持续维护的 router：

```text
research-skills-library/
  README.md
  README.zh-CN.md
  repo-skills/
    <repository-skill-id>/
      SKILL.md
      sub-skills/
      references/
      scripts/
  repo-skills-router/
    SKILL.md
    references/
```

`repo-skills/` 为每个受支持的仓库保存一个 operating-skill graph。**170**
统计这些仓库根技能图，**1,000+** 统计图内全部根技能和聚焦子技能的
`SKILL.md`。每个 graph 包含 root router、可选的聚焦 sub-skills、provenance、
routing metadata、参考资料和可执行辅助脚本。`repo-skills-router/` 是两层发现
router：它把实际使用场景映射到下一步应读取的少量 repository skills。默认会
对模型可见，但 DisCo 用户可以关闭自动选择，同时保留显式调用。router 本身不是
repository skill，必须与 `repo-skills/` 保持同级。

所有 repository roots、sub-skills 和 router 都声明
`metadata.disco-role: operating`。它们只在 DisCo Researcher 模式下加载；
Creator 模式看到的是用于构造 skills 的 meta skills。角色与可见性约束见
[架构说明](../docs/architecture.zh.md)，当前完整清单见共享的
[Repository Skills Catalog](../docs/imported-repo-skills.md)。

## 安装到 DisCo

使用下面的命令安装官方 runtime collection 和 router：

```bash
disco repo-skills install
```

本机需要可用的 Git。manager 会记录官方 source commit，之后可以检查或更新集合：

```bash
disco repo-skills status
disco repo-skills update
```

`status` 会保持离线，并检查已记录的 commit、托管摘要、router 状态以及当前 live
skill IDs 的覆盖情况。需要查询并应用最新官方 commit 时使用 `update`。

安装后的目录结构如下：

```text
~/.disco/agent/skills/
  repo-skills/
    <repository-skill-id>/
  repo-skills-router/
```

安装或更新后请启动新的 Researcher session。更新会按官方托管的 skill ID 操作，
而不是替换整个目录，因此 Creator 创建的本地 repo skills 会完整保留。官方 ID
存在本地修改时会报告 drift，只有显式使用 `--force` 才会覆盖，并会保留备份。

router 默认参与自动选择，也可以在不移除集合的情况下切换该策略：

```bash
disco repo-skills router disable
disco repo-skills router enable
```

disabled router 仍可以通过 `/skill:repo-skills-router` 显式调用。Repository
collection 属于高复用 managed scope 的特殊情况：所有 graphs 固定放在
`repo-skills/` 下面，并通过同级的 `repo-skills-router/` 路由。

Creator 的其他产物需要单独决定部署位置。通过审批的新 meta skill 作为
Creator 基础能力安装到 `~/.disco/agent/skills/<meta-skill-id>/`。依赖单个任
务、当前项目、私有数据集、评测器、某次 benchmark 或本地环境的 operating
graph，以及无法确认跨项目复用价值的 graph，默认安装到
`<project-dir>/.agents/skills/<skill-id>/`。只有自包含、有 provenance 支撑，
并经过代表性跨项目验证的 graph，才适合放在
`~/.disco/agent/skills/` 顶层。这些产物可以被 DisCo 发现，但不属于本目录发
布的 repository collection。

## 参与贡献

新增或刷新 repository graph 时，请使用 `create-repo-skill`、
`verify-repo-skill` 和带锁的 router updater。每个 repository skill 内都要保
留结构化的 `references/repo-routing-metadata.json`，并据此重建同级 router，
不要直接修改生成的 Markdown。验证与审阅要求见
[贡献指南](../CONTRIBUTING_CN.md)。

library 布局有意保留扩展空间。任务无关的 repository graphs 可以继续扩展到
更多领域、软件栈和编程语言。面向任务的 collections 只有在任务范围、来源约束、
评测协议、验证条件、归属和安装规则都明确时，才应作为同级 collection 加入；
不能仅仅因为其中包含可执行脚本，就把它描述成 Python package collection。
