---
title: "为什么 Spore 不选 borrow checker，但仍然追求强保证（写作大纲）"
author: "六个骨头"
description: "Spore Vision 系列第 4 篇写作大纲：解释这门语言为何明确拒绝 ownership 心智负担，同时仍追求可解释、可实现的强静态保证。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "内存模型", "类型系统"]
---

这篇文章的重点不是“批评 Rust”，而是说明 Spore 做了一个**正向选择**：它不想把 ownership / lifetime 变成用户默认心智，但也不准备因此放弃性能和静态保证。

文章语气最好是“公平比较后做出的路线选择”，而不是阵营化对立。

## 写作目标

- 解释为什么 borrow checker 不是 Spore 想建立的用户模型。
- 说明 Spore 追求的强保证来自组合，而不是单一机制。
- 为后续的内存计划文章埋下伏笔。

## 核心论点

- borrow checker 解决了真实问题，但它也要求语言、编译器和开发者共同接受 ownership 心智。
- Spore 不想围绕 lifetime / MIR / borrow semantics 建构整个系统。
- Spore 选择的是另一条组合路线：types、effects、cost、spec、refinement，加上未来的 Perceus + region。

## 建议结构

### 先承认 borrow checker 的价值

- 内存安全
- 明确所有权
- 高性能

先把这个前提讲清楚，文章会更有说服力。

### 为什么 Spore 不走这条路

- 它会把用户心智重心拖到 lifetime / aliasing / move 上
- 它会反过来塑造编译器与 IR 设计
- 它会影响 effect handlers、holes、Agent 生成代码的可用性

### Spore 要的“强保证”来自什么

- 类型系统
- effect system
- cost model
- spec / property
- refinement

重点要强调：Spore 没有放弃保证，而是把保证分散到多个更贴近开发者任务的问题上。

### 性能目标如何仍然成立

- 目标仍是 compute-bound code within 2x Rust
- 这不自动等于必须拥有 borrow checker
- 引出未来路线：Perceus RC + region optimization

### 这篇文章的结论

- **Spore 不是不要约束，而是不要把 ownership 当成一切约束的中心。**

## 写作边界

- 不详细讲 Perceus 机制本身。
- 不进入具体 benchmark 设计。
- 不展开 FFI 边界，只简单点到它和生命周期模型有关。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 类型系统（v0.1）`
  - `### 编译器 Pipeline 架构（v0.1）`
- `spore-evolution/seps/SEP-0002-type-system.md`
  - `### Design philosophy`
  - `### Rust`
  - `### Alternative 4: SMT-backed refinement types`
- `spore-evolution/seps/SEP-0006-compiler-architecture.md`
  - `### IR layers`
  - `### Design rationale for IR layer count`
  - `### 1. More IR layers (4 or 5, like Rust)`
- `spore-evolution/ROADMAP.md`
  - 性能目标与 self-hosting 目标
- `spore/crates/sporec-codegen/src/value.rs`
  - 当前运行时还在原型阶段的证据
