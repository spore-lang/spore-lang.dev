---
title: "Spore 的内存计划：朴素 ARC → Perceus → Region（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 3 篇写作大纲：把内存模型方向写成渐进实现路线，而不是一次性给出终态运行时。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "内存模型", "Perceus"]
---

这篇文章应该明确回答：**如果不走 ownership，也不想押注 tracing GC，Spore 准备怎么把内存管理做出来。**

## 写作目标

- 把内存模型从“理念判断”变成“实现路线”。
- 说明朴素 ARC、Perceus、region promotion 的阶段关系。
- 明确哪些问题仍是 open question。

## 核心论点

- 内存模型不应一次性端出终局，而应分阶段推进。
- 对 Spore 来说，朴素 ARC 是正确性起点，不是终态。
- Perceus 与 region promotion 的组合，才是性能与语言心智的真正平衡点。

## 建议结构

### 当前状态是什么

- 解释器运行时里是 `Rc<RefCell>` 风格
- 这证明语言还没有真正提交正式内存模型

### 为什么不是 tracing GC

- 性能目标
- 多核和 WASM 复杂度
- 与当前设计主轴的匹配度有限

### 为什么不是 ownership

- 用户心智
- MIR / lifetime 代价
- 与 effect handler、holes、Agent 工作流的摩擦

### 三阶段路线

- 朴素 ARC：先有正确性
- Perceus：drop insertion + reuse analysis
- region promotion：lexical scope 与 `parallel_scope`

### 需要怎样的 benchmark 才能证明路线可行

- compute-bound kernels
- tree / list / pipeline workload

## 写作边界

- 不做完整算法推导。
- 不展开 cycle collector 方案细节。
- 不把文章写成某篇论文综述。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 类型系统（v0.1）`
  - `### 编译器 Pipeline 架构（v0.1）`
- `spore-evolution/seps/SEP-0002-type-system.md`
  - `### Rust`
- `spore-evolution/seps/SEP-0006-compiler-architecture.md`
  - `### IR layers`
  - `### 1. More IR layers (4 or 5, like Rust)`
- `spore-evolution/ROADMAP.md`
  - 性能目标相关部分
- `spore/crates/spore-codegen/src/value.rs`
- `spore/crates/spore-codegen/src/interpret.rs`
- `spore/crates/spore-typeck/src/cost.rs`
