---
title: "Structured Concurrency without async coloring（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 5 篇写作大纲：解释为什么 Spore 的并发设计围绕 structured concurrency、Channel 和 cancellation 展开，而不是传统 async 染色。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "并发", "Structured Concurrency"]
---

这篇文章应该把并发讲成 Spore 编程模型的一部分，而不是补充功能。重点不是“少一个 `async` 关键字”，而是**选择了不同的心智模型**。

## 写作目标

- 解释为什么 Spore 拒绝 async coloring。
- 说明 `parallel_scope`、`spawn`、`Task[T]`、`Channel[T]` 的整体设计。
- 把 structured concurrency 与 effect、cost、memory direction 联系起来。

## 核心论点

- Spore 的并发不是“把同步函数改成异步函数”，而是把并发控制收敛到结构化作用域。
- 无共享可变状态不是限制，而是让取消、推导和验证变得简单的基础。
- structured concurrency 反过来也会帮助内存与验证模型收束。

## 建议结构

### 先讲为什么不是 async/await

- function coloring
- 控制流被语言色彩污染
- 对签名与推导的不良影响

### Spore 的最小并发模型

- `parallel_scope`
- `spawn`
- `Task[T]`
- `Channel[T]`

### 为什么要禁止共享可变状态

- 让 cancellation 更清晰
- 让 cost 推导更保守但可解释
- 让内存模型更容易和作用域对齐

### 并发如何与其他系统对齐

- `Spawn` 作为 atomic effect
- parallel lane 进入 cost vector
- task tree 进入 diagnostics / tooling

## 写作边界

- 不深入 scheduler 或 runtime 实现。
- 不展开内存管理算法。
- 不与所有主流并发模型做全面 survey。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 并发模型（v0.1）`
- `spore-evolution/seps/SEP-0007-concurrency-model.md`
  - `### Why structured concurrency`
  - `### Why not async/await`
  - `### 3.1 parallel_scope`
  - `### 3.2 spawn`
  - `### 3.4 Channels`
  - `### 4.4 Cost budgets for parallel work`
  - `### 4.5 Cancellation semantics`
- `spore/crates/sporec-typeck/src/concurrency.rs`
- `spore/crates/sporec-codegen/src/value.rs`
- `spore/crates/sporec-codegen/src/interpret/mod.rs`
