---
title: "为什么函数签名应该是语言设计的中心（写作大纲）"
author: "六个骨头"
description: "Spore Vision 系列第 2 篇写作大纲：解释为什么函数签名不应只包含参数和返回值，而应承载 type、effect、cost 与 spec。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "函数签名"]
---

这篇文章要把 Spore 的第一世界观讲透：**函数签名不是最薄的一层接口说明，而是整个语言设计的重力中心。**

写法上应避免把它写成“新语法介绍”。重点是解释：为什么 `where / uses / cost / spec` 必须被看成一个整体，而不是四种彼此无关的装饰。

## 写作目标

- 把“签名中心论”讲成一条完整方法论，而不是口号。
- 让读者理解 Spore 为何把类型、effect、成本、行为契约收束到同一入口。
- 给后续关于 `spec`、`Platform`、`cost`、`holes` 的文章建立共同接口。

## 核心论点

- 传统函数签名只表达“输入输出形状”，却不表达“允许做什么、预计花什么、如何验证”。
- 当 effect、cost、spec 不在签名里，它们就会在注解、测试、文档和 profiling 结果里分裂开。
- 把这些子句放在一起，不只是信息更全，而是让编译器、工具和人类共享同一个接口事实。

## 建议结构

### 从传统函数签名讲起

- 先用常见语言中的签名举例：参数 + 返回值通常不足以承载完整契约。
- 引出“函数真正的边界信息”至少包括四层：
  - 类型约束
  - effect
  - 资源 / 成本
  - 行为契约

### Spore 的四个子句

- `where`：泛型与约束
- `uses`：effect 边界
- `cost`：资源与性能契约
- `spec`：行为可执行契约

可以强调：这四个东西不是事后补丁，而是同一接口的四个面。

### 为什么必须放在一起

- 类型检查、effect 检查、cost 检查、spec 验证都围绕同一个函数入口工作。
- `hole report` 也以签名为上下文。
- 机器消费输出（JSON / LSP / Agent）同样从签名出发。

### 为什么需要 canonical order

- 虽然 parser 可以接受任意顺序，但文档、格式化器和工具需要稳定投影。
- 这里可以讲 “解析宽容，表示严格” 这类设计哲学。

### 这对语言设计意味着什么

- 函数不再是“写完 body 再补说明”。
- 签名先于实现，契约先于执行。
- Spore 的很多后续机制都不是围绕语法节点，而是围绕函数签名组织。

## 写作边界

- 不深入具体 parser 实现。
- 不展开 `spec`、`cost`、`holes` 的详细机制，留给各自专文。
- 不提前讲实现顺序。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 函数签名语法（混合式 v0.3）`
  - `## Effect 系统`
  - `### 抽象代价模型`
- `spore-evolution/seps/SEP-0001-core-syntax.md`
  - `### Function signatures: from simple to complex`
  - `### Behavioral specification (spec clause)`
  - `### Function signature semantics`
- `spore/crates/sporec-parser/src/ast.rs`
  - `FnDef`、`SpecClause`
- `spore/crates/sporec-parser/src/parser/mod.rs`
  - 子句解析与归一化
- `spore/crates/sporec-parser/src/formatter/mod.rs`
  - clause 顺序的格式化输出
