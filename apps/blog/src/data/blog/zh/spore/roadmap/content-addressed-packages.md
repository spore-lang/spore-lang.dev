---
title: "为什么 Spore 选择 content-addressed packages，而且是 Git-first（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 6 篇写作大纲：解释双哈希、锁文件、Git-first 分发与 Platform/package 关系为什么是语言设计的一部分。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "包管理", "内容寻址"]
---

这篇文章的任务是把 package system 讲成语言世界观的一部分，而不是发布工具附属品。重点是解释：**为什么 Spore 认为哈希、锁文件和 Platform 边界应该共同进入开发工作流。**

## 写作目标

- 解释为什么不走 semver-first registry 的默认路线。
- 说明 `sig / impl` 双哈希的意义。
- 说明 package、module、Platform 为什么是一张联通图。

## 核心论点

- 可复现与可审计不是发布层额外需求，而是语言契约延伸。
- 单哈希不够，版本号也不够，所以需要 `sig / impl` 双视角。
- Git-first 不是退而求其次，而是为了让发布、引用、审计和人类工作流保持一致。

## 建议结构

### 从传统版本管理的局限讲起

- 版本号表达的是什么，表达不了什么
- 为什么“兼容性”和“实现变化”值得分开追踪

### Spore 的双哈希模型

- `sig`：接口兼容性
- `impl`：实现内容变化
- 为什么这比单哈希或 semver-first 更接近语言需求

### package、module、Platform 的关系

- Platform 不是特殊旁路，而是普通包中的特殊角色
- 这让外部 effects、依赖和分发方式保持一致

### Git-first 的工作流价值

- 易审计
- 易复现
- 易被 Agent 消费
- 对作者也自然

## 写作边界

- 不展开所有 CLI 命令细节。
- 不深讲 storage backend 扩展。
- 不提前讲 rich interop。

## 参考资料

- `spore/docs/DESIGN.md`
  - `### 模块系统（v0.1）`
  - `### 包管理（v0.1）`
  - `### 模块、包与 Platform 的工程约束`
- `spore-evolution/seps/SEP-0008-module-package-system.md`
  - `### Why content-addressed functions?`
  - `### Why no semantic versioning?`
  - `### Content-addressed functions: dual hashing`
  - `### Package management`
  - `### Publish and discovery flow`
- `spore/crates/sporec-typeck/src/sig_hash.rs`
- `spore/crates/sporec-typeck/src/module/mod.rs`
- `spore/crates/sporec-typeck/src/incremental.rs`
