---
title: "Spec 不是测试语法糖，而是可执行契约（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 2 篇写作大纲：解释 spec 在 Spore 里为什么是行为契约的第一入口，而不是附属测试语法。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "spec", "测试"]
---

这篇文章要把 `spec` 从“内联测试块”提升成更高层的概念：**行为契约的可执行部分**。写法上要避免把它讲成单纯的测试 DSL。

## 写作目标

- 解释为什么 `spec` 要放进函数签名，而不是独立测试文件。
- 说明 `example` 与 `property` 的角色差异。
- 把 deterministic platform 与 record-replay 也纳入同一验证故事。

## 核心论点

- `spec` 的重点不是“写测试更方便”，而是把行为承诺收回到函数接口。
- 当 `spec` 与类型、effect、cost 同处一个签名上下文时，验证就从附属流程变成语言内建工作流。
- mutation testing 之所以后置，不是因为不重要，而是因为 `spec / property / refinement` 这条主线优先级更高。

## 建议结构

### 从测试与契约的区别切入

- 注释、测试、契约各自解决什么问题
- 为什么很多语言的测试并不能自然成为函数接口的一部分

### Spore 里的 `example` 与 `property`

- `example`：具体验例
- `property`：可泛化的行为不变量
- 为什么两者都应放在 `spec` 里，而不是拆成不同工具

### 现在的实现已经说明了什么

- parser 已支持 `spec`
- type checker 已检查 `spec`
- interpreter / codegen 层已经能执行 `spec`

### 验证故事如何继续扩展

- refinement 导出更好的 property 输入
- deterministic test platform
- record-replay
- 将来 mutation testing 如何复用这套基础设施

## 写作边界

- 不深入 mutation testing 细节。
- 不把 property generation 的实现细节写太深。
- 不展开 hole 系统，留给下一篇。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 函数签名语法（混合式 v0.3）`
- `spore-evolution/seps/SEP-0001-core-syntax.md`
  - `### Behavioral specification (spec clause)`
  - `### Spec evaluation`
- `spore/crates/spore-parser/src/ast.rs`
- `spore/crates/spore-parser/src/parser.rs`
- `spore/crates/spore-typeck/src/check.rs`
  - `check_spec_clause`
- `spore/crates/spore-codegen/src/lib.rs`
  - `test_specs`
- `spore/crates/sporec/src/compiler.rs`
  - `test_specs`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Test Platforms for deterministic testing`
  - `#### Record/Replay testing mode`
