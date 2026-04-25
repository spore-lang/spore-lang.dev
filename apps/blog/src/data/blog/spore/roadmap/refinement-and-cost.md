---
title: "Refinement + Cost：Spore 的 80/20 静态保证路线（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 4 篇写作大纲：解释为什么 Spore 选择 refinement 加抽象解释与 cost model 的组合，而不是 full dependent types 或 SMT-first 路线。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "Refinement", "Cost"]
---

这篇文章要把 Spore 的静态保证路线讲成一套**产品级取舍**：不是不要强保证，而是不要让代价爆炸、错误信息崩坏、实现完全不可控。

## 写作目标

- 解释为什么 Spore 追求的是 80/20 的静态保证。
- 把 refinement 与 cost 放到同一叙事里。
- 说明 decidability 在这里是设计原则，而不是纯理论口号。

## 核心论点

- full dependent types 和 SMT-first refinement 太强，但代价也太大。
- Spore 想要的是可解释、可实现、可服务工具链的静态保证。
- refinement 与 cost 都是在问“这个函数除了类型正确之外，还能保证什么”。

## 建议结构

### 先讲“为什么不是更强的那条路”

- theorem prover pain
- SMT 带来的可解释性与实现复杂度
- 对错误信息质量和用户心智的影响

### L0 / L1 refinement 的分层意义

- L0：可判定、贴近边界约束
- L1：抽象解释传播
- 为什么这种分层更像“语言工程”而不是“研究炫技”

### Cost model 为什么也属于函数契约

- 类型只说“能不能”
- cost 说“代价大概是什么”
- 四维 cost 的意义

### refinement、cost、spec 的相互增益

- refinement 约束输入空间
- property 可借 refinement 自动生成
- cost 给 holes 和 Agent 提供额外筛选信号

## 写作边界

- 不做完整形式化讲解。
- 不深入所有 cost grammar 细节。
- 不展开 mutation testing。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 类型系统（v0.1）`
  - `### 抽象代价模型`
- `spore-evolution/seps/SEP-0002-type-system.md`
  - `### 4.11 Refinement types — future vision`
  - `### Alternative 4: SMT-backed refinement types`
- `spore-evolution/seps/SEP-0004-cost-analysis.md`
  - `### Why Spore can do better`
  - `### The core equation`
  - `### 4.6 Three-tier analysis`
  - `### 4.12 Four-dimensional verification`
- `spore/crates/spore-typeck/src/refinement.rs`
- `spore/crates/spore-typeck/src/cost.rs`

