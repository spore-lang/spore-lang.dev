---
title: "从 Platform host 到 WASM Components：Spore 的互操作计划（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 6 篇写作大纲：解释为什么 Spore 的互操作必须沿着 Platform-only 边界、受控入站接口与 WASM Components 逐步展开。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "互操作", "WASM"]
---

这篇文章的重点是把 interop 讲成**边界设计问题**。它不是要证明 Spore “也能接一切语言”，而是要说明：**怎样开放边界而不破坏世界观。**

## 写作目标

- 说明当前单向 Platform 模型为什么已经是好起点。
- 解释中期的受控 inbound entrypoint 应该长什么样。
- 说明为什么长期路线更适合朝 WASM Component Model 靠拢。

## 核心论点

- rich direct FFI 虽然强大，但会破坏 capability、Platform 与 content-addressing 主轴。
- 受控入站接口比任意裸 ABI 暴露更符合 Spore 的设计。
- WIT world 与 Platform 在概念上高度同构，这让 WASM Components 成为自然长期方向。

## 建议结构

### 先讲当前模型

- Spore → Platform API → `foreign fn` → host
- 为什么这不是临时方案，而是有意设计的 trust boundary

### 为什么不做 rich direct FFI

- 破坏 capability 边界
- 破坏内容寻址故事
- 让应用层直接接触不受约束的外部世界

### 中期应该开放什么

- 受控 inbound entrypoint
- shared-lib / embedding 模式
- capability context 仍由边界层建立

### 长期为什么是 WASM Components

- `Platform` 与 WIT world 的对齐
- `Result / Option / variant / record` 的映射
- 组件隔离与 capability 边界的相容性

## 写作边界

- 不展开所有外部语言生态比较。
- 不写成 WASM 规范教程。
- 不详细讲 host ABI glue，留给上一篇。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### Platform 系统（v0.1）`
  - `### 跨语言调研沉淀（持久结论）`
- `spore-evolution/ROADMAP.md`
  - `## Long-term explorations`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Platforms`
  - `### Platform abstraction`
  - `#### FFI integration`
- `basic-cli/README.md`
- `basic-cli/host/src/lib.rs`
- `spore/crates/spore-typeck/src/platform.rs`
- `spore/crates/spore-codegen/src/effect_handler.rs`
