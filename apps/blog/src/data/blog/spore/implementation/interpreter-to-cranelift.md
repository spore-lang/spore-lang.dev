---
title: "从解释器到 Cranelift：Spore 后端应该怎么落地（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 2 篇写作大纲：说明当前解释器的角色、Cranelift skeleton 的边界，以及双轨验证为什么重要。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "Cranelift", "编译器后端"]
---

这篇文章要把当前解释器阶段讲得诚实但不尴尬：**解释器不是失败的后端，而是当前最重要的语义参照系。**

## 写作目标

- 说明当前执行模型的真实状态。
- 解释为什么 Cranelift skeleton 是自然下一步。
- 说明解释器与后端不会互相替代，而是阶段性双轨并存。

## 核心论点

- 当前解释器已经足够承载语义验证、spec 执行与部分运行时假设。
- 真正的后端落地必须尽早出现，否则 memory model、runtime hooks、ABI 都没有真实着力点。
- 最稳妥的推进方式不是直接抛弃解释器，而是让解释器继续作为 semantic oracle。

## 建议结构

### 先讲当前解释器做了什么

- 直接执行 AST
- 运行 `main`
- 执行 `spec`
- 注册 `EffectHandler`

### 解释器的价值在哪里

- 语义 oracle
- 快速验证
- 作为后端回归对照

### Cranelift skeleton 的最小目标

- 字面量
- 变量
- 函数调用
- 基本控制流
- 基础 runtime hooks

### 为什么要双轨验证

- 编译后结果 vs 解释器结果
- 让 backend bug 更容易被隔离
- 让语义与实现问题分层排查

## 写作边界

- 不展开正式优化管线。
- 不在这里深讲 memory model。
- 不细讲所有 ABI 与 FFI 细节。

## 参考资料

- `spore-evolution/ROADMAP.md`
  - `## Compiler core`
- `spore-evolution/seps/SEP-0006-compiler-architecture.md`
  - `### Pipeline overview`
  - `### Cranelift`
  - `### PoC → Prototype migration`
- `spore/crates/spore-codegen/src/interpret.rs`
- `spore/crates/spore-codegen/src/lib.rs`
- `spore/crates/sporec/src/compiler.rs`

