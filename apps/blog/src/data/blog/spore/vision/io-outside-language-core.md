---
title: "为什么 IO 不该住在语言核心里（写作大纲）"
author: "六个骨头"
description: "Spore Vision 系列第 3 篇写作大纲：解释 capability 与 Platform 为什么是语言世界观的一部分，而不是实现层技巧。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "Platform", "能力系统"]
---

这篇文章要讲清楚：Spore 里的 `Platform` 不是部署细节，`uses [...]` 也不是权限列表语法糖。它们共同回答的是一个更大的问题：**语言核心到底应不应该直接拥有外部世界。**

整篇应站在原则层，而不是一上来讲 host ABI 或 `foreign fn`。

## 写作目标

- 说明为什么把 IO 塞进 stdlib 是一种默认但并不理想的设计。
- 说明 capability 与 Platform 的价值，不是“更安全一点”，而是重新定义边界。
- 给后续关于 interop 和 Platform runtime 的文章建立原则基础。

## 核心论点

- 传统语言把 IO 做成“默认能力”，导致替换、测试、沙箱和移植都要额外补救。
- Spore 把 IO 放到 `Platform` 边界，是为了让应用代码只声明意图，不直接拥有外部权力。
- capability system 不是单纯的权限控制，而是**边界设计工具**。

## 建议结构

### 从传统 stdlib IO 的问题讲起

- IO 内建的便利性
- 但也带来几种隐性代价：
  - 不易 mock
  - 不易 sandbox
  - 不易切换运行时
  - 不易做 supply-chain 约束

### Spore 的回答：capability + Platform

- `uses [...]` 先定义“函数需要什么能力”
- `Platform` 再决定“这些能力由谁、在什么环境里实现”
- 应用代码只消费能力，不直接绑定具体 IO 机制

### Platform 为什么不是实现细节

- 它是 trust boundary
- 它影响 package capability ceiling
- 它决定测试平台与生产平台可替换
- 它决定 FFI 在哪里被允许出现

### 用 basic-cli 讲一个具体路径

- Spore 应用代码
- Platform API `.sp`
- `foreign fn`
- Rust host
- OS

这里可以用一张简单链路图，把抽象边界和实现边界分开画。

### 这对语言体验意味着什么

- 纯代码与 effectful 代码的边界更明确
- 测试更自然
- runtime target 更容易切换
- 后续 interop 更容易保持设计一致性

## 写作边界

- 不展开 host ABI 细节。
- 不提前讲 WASM Component Model。
- 不详细讨论所有 capability 的粒度争议。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 能力集系统`
  - `### Platform 系统（v0.1）`
  - `### 模块、包与 Platform 的工程约束`
- `spore-evolution/seps/SEP-0003-effect-capability-system.md`
  - `### Problems addressed`
  - `### Design goals`
  - `### Built-in atomic effects`
  - `### Effect handlers`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Why platforms for IO?`
  - `### Platforms`
  - `### Platform abstraction`
- `basic-cli/README.md`
- `basic-cli/platform/Stdout.sp`
- `basic-cli/platform/File.sp`
- `basic-cli/host/src/lib.rs`

