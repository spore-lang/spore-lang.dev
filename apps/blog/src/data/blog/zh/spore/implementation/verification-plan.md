---
title: "为什么 Spore 的验证计划先做 spec/property/refinement，而不是 mutation testing（写作大纲）"
author: "六个骨头"
description: "Spore Implementation 系列第 4 篇写作大纲：解释验证路线的优先级，以及为什么 mutation testing 在当前阶段应后置。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "验证", "Spec"]
---

这篇文章的任务是把 testing story 排优先级，而不是比较所有测试方法谁更高级。重点是说明：**在 Spore 当前阶段，最有杠杆的工作是把签名内契约做强。**

## 写作目标

- 解释当前已拥有的验证基础。
- 说明为什么 mutation testing 现在不是关键路径。
- 把 refinement、property、deterministic platform 串成一条主线。

## 核心论点

- Spore 已经通过 type、effect、cost、spec 杀死了大量低质量错误。
- 当前剩余最大收益来自强化 `spec / property / refinement`，而不是先引入更重的测试基础设施。
- mutation testing 将来可以有，但应该建立在更强的语言内契约之上。

## 建议结构

### 先盘点现在已经有什么

- type checker
- effect checker
- cost checker
- spec 执行
- deterministic test platform 方向

### 为什么 mutation testing 后置

- 执行成本高
- 当前解释器阶段收益有限
- 许多低价值 mutant 已被静态检查杀死

### 现在真正值得优先做什么

- L0 refinement enforcement
- 更强的 property 输入生成
- spec coverage
- record-replay

### 将来如果做 mutation testing，会怎样接入

- 复用 `spec`
- 复用 hole / verify 基础设施
- 作为增强层，而不是核心层

## 写作边界

- 不写成 mutmut / cargo-mutants 工具综述。
- 不深入所有 mutation operator。
- 不展开 benchmark 细节。

## 参考资料

- `spore-evolution/ROADMAP.md`
  - `## Type system`
- `spore-evolution/seps/SEP-0004-cost-analysis.md`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Test Platforms for deterministic testing`
  - `#### Record/Replay testing mode`
- `spore/crates/sporec-codegen/src/lib.rs`
  - `test_specs`
  - `test_values_for_type`
- `spore/crates/sporec-driver/src/compiler/mod.rs`
  - `test_specs`
- `spore/crates/sporec-typeck/src/check/mod.rs`
  - `check_spec_clause`
- `spore/crates/sporec-typeck/src/refinement.rs`
