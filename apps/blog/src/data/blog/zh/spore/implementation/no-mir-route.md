---
title: "为什么 Spore 的编译器不走 MIR 那条路（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 1 篇写作大纲：解释为什么这门语言的实现路线强调稳定 typed core，而不是围绕 borrow checking 增加更多 IR 层。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "编译器", "实现计划"]
---

这篇文章是实现批的总原则文。重点不是简单说 “Spore 没有 MIR”，而是说明：**Spore 为什么认为 typed semantic core 比更多 IR 层更关键。**

## 写作目标

- 解释编译器架构选择背后的原则。
- 说明 “no MIR” 与 “no borrow checker” 是如何关联的。
- 给后续 Cranelift、内存模型与 runtime 文章提供共同背景。

## 核心论点

- 不是所有语言都需要沿着 Rust 的 IR 演化路径前进。
- Spore 当前最重要的不是引入更多中间层，而是稳住 parser → resolve → type/effect/cost/spec 的语义主核。
- watch、diagnostics、JSON 和 LSP 不是附带品，而是编译器架构的组成部分。

## 建议结构

### 先讲为什么很多编译器会走更多 IR 层

- 降级抽象
- 优化与验证
- 特定语义需求

### Spore 当前为什么不走那条路

- 没有 borrow checker
- 没有 comptime 驱动的额外 IR 需求
- 当前主要目标是语义一致与工具消费，而不是过早优化 IR 层数

### 3 层 IR 的职责应该怎么讲

- AST
- HIR
- TypedHIR
- Cranelift IR 作为后端落点

### 工具链为什么必须进入架构讨论

- watch
- JSON diagnostics
- hole protocol
- LSP mapping

## 写作边界

- 不展开 Cranelift skeleton 的具体里程碑。
- 不讲具体优化实现。
- 不在这里展开内存模型。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 编译器输出格式（v0.1）`
  - `### 增量编译与 Watch 模式（v0.1）`
  - `### 编译器 Pipeline 架构（v0.1）`
- `spore-evolution/seps/SEP-0006-compiler-architecture.md`
  - `### Pipeline overview`
  - `### Diagnostics architecture`
  - `### IR layers`
  - `### Incremental compilation`
  - `### 1. More IR layers (4 or 5, like Rust)`
- `spore/crates/sporec/src/compiler.rs`
- `spore/crates/spore-typeck/src/incremental.rs`
- `spore/crates/spore-lsp/src/server.rs`
