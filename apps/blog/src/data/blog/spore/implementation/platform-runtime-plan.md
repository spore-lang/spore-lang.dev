---
title: "从 foreign fn 到 host ABI：Spore 的 Platform runtime 计划（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 5 篇写作大纲：解释 Platform 如何从设计概念推进为第三方可实现、可测试、可维护的运行时接口。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "Platform", "运行时"]
---

这篇文章应该把 Platform 讲成一套真正可实现的 runtime contract，而不是停留在“语言有个平台系统”这一层抽象介绍。

## 写作目标

- 盘点当前 `foreign fn`、`EffectHandler`、`HostValue` 已经覆盖的能力。
- 指出 basic-cli 已经证明了什么，还缺什么。
- 说明 Platform authoring 为什么会成为生态成败关键。

## 核心论点

- Platform 的成功不只取决于语义设计，还取决于实现者是否能低摩擦地写出 host glue。
- `foreign fn` 与 host ABI 必须被整理成一致 contract。
- 测试平台和生产平台应共享尽可能多的结构。

## 建议结构

### 当前边界是什么

- `.sp` 里的 `foreign fn`
- runtime 里的 `EffectHandler`
- host 里的 `HostValue` 与 `dispatch_table`

### basic-cli 已经说明了什么

- 这条边界是可工作的
- 但目前仍偏 demo / proof-of-concept

### 真正需要补齐的部分

- ADT / Result / Option 的边界表示
- host error 统一
- glue 代码生成
- 更真实的平台案例

### 为什么 platform authoring ergonomics 是关键

- 如果写平台太难，生态不会增长
- 如果测试平台与生产平台结构不同，替换承诺就会失真

## 写作边界

- 不展开长期 interop 路线。
- 不在这篇里讲 WASM Components。
- 不深入 memory ownership across FFI 的所有细节。

## 参考资料

- `basic-cli/README.md`
- `basic-cli/platform/Stdin.sp`
- `basic-cli/platform/Stdout.sp`
- `basic-cli/platform/File.sp`
- `basic-cli/platform/Dir.sp`
- `basic-cli/platform/Env.sp`
- `basic-cli/platform/Cmd.sp`
- `basic-cli/host/src/lib.rs`
- `spore/crates/spore-codegen/src/effect_handler.rs`
- `spore/crates/spore-typeck/src/platform.rs`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Platform abstraction`
  - `### Platform details`
  - `#### FFI integration`
- `spore-evolution/seps/SEP-0009-standard-library.md`
  - `### Platform binding architecture`

