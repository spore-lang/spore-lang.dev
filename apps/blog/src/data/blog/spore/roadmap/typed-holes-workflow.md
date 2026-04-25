---
title: "Typed Holes 不是编辑器玩具，而是开发工作流（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 3 篇写作大纲：解释 holes 为什么在 Spore 中是一等协议，以及它们如何连接签名、验证与 Agent 工作流。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "Typed Holes", "Agent"]
---

这篇文章的重点不是介绍 `?hole` 语法，而是解释：**未完成代码为什么也应该是语言与工具链共同理解的对象。**

## 写作目标

- 说明 holes 为什么不能只停留在 IDE 层面。
- 解释 HoleReport、依赖图、状态机这些设计为什么存在。
- 把 hole 与签名、spec、Agent 协作串成同一条工作流。

## 核心论点

- “未完成代码”不是边角状态，而是现代开发中的常态。
- 如果 holes 只是一种占位符语法，编译器和工具就拿不到真正可操作的上下文。
- Spore 把 holes 协议化，是为了让生成、验证、审阅成为结构化过程。

## 建议结构

### 从 `TODO` 和 `panic` 的局限讲起

- 人类能看懂，但编译器看不懂
- 工具也无法知道缺口的类型、约束、依赖和风险

### Spore 对 hole 的基本定义

- hole syntax
- partial function
- hole report

### 为什么需要依赖图和状态机

- 多个 hole 并存时，先填哪个不是随意决策
- fill / verify / review / accept 的阶段需要被显式建模

### hole 如何连接其他系统

- 类型系统提供 expected type
- effect / cost 提供候选约束
- spec 提供验证目标
- Agent 协议提供机器消费方式

### 这不是编辑器功能，而是语言工作流

- 这里收束整篇的判断

## 写作边界

- 不深入具体 JSON schema 字段。
- 不把文章写成 Agent 产品介绍。
- 不展开 LSP 细节。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### Hole 系统（v0.2）`
  - `### 增量编译、Watch 与 Hole 协作`
- `spore-evolution/seps/SEP-0005-hole-system.md`
  - `### Why Holes Must Be First-Class`
  - `### Why the Agent Protocol Matters`
  - `### HoleReport v0.3`
  - `### Hole Dependency Graph`
  - `### Agent State Machine`
- `spore-evolution/seps/SEP-0006-compiler-architecture.md`
  - `### Hole-driven development`
  - `### Agent hole-filling workflow`
- `spore/crates/spore-typeck/src/hole.rs`
