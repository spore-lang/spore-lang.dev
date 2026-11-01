---
title: "Spore 的设计地图：哪些是核心，哪些是边界（写作大纲）"
author: "六个骨头"
description: "Spore Roadmap 系列第 1 篇写作大纲：给出语言契约层、运行时边界层与生态工具层的总览地图。"
pubDatetime: 2026-04-12
modDatetime: 2026-04-12
draft: true
tags: ["Spore", "语言设计", "写作大纲", "设计路线"]
---

这篇文章相当于整个第二批的“总导航页”。读者在看完 Vision 之后，需要一张图来理解：**Spore 不是很多聪明机制的堆叠，而是一套层次清晰、边界明确的系统。**

## 写作目标

- 给所有后续机制文章建立一张共用地图。
- 区分什么是语言契约核心，什么是运行时与生态边界。
- 让读者知道每个设计块在系统里扮演什么角色。

## 核心论点

- Spore 的设计必须按层理解，而不是按 feature list 理解。
- 核心层围绕函数签名展开，边界层围绕 Platform 和 runtime 展开，生态层围绕 package、diagnostics、tooling 展开。
- 一旦层次清楚，很多看似独立的问题其实会自动对齐。

## 建议结构

### 先画出三层图

- 语言契约层：type、effect、cost、spec、holes
- 运行时边界层：Platform、foreign fn、runtime、memory model
- 生态工具层：package、watch、LSP、JSON diagnostics、docs

### 讲核心层

- 为什么核心层不是“语法”，而是“函数契约”
- 为什么 holes、spec、refinement、cost 都围绕同一个中心组织

### 讲边界层

- 为什么 Platform 和 memory model 是边界机制
- 为什么 interop 也是边界设计问题，而不是单纯工程能力

### 讲生态层

- package/store/gc
- watch / LSP / JSON
- 这些工具为什么从一开始就是设计的一部分

### 用这张图预告整批文章

- 后面的每篇文章都只展开其中一块
- 让读者看到“局部文章”在全局里的位置

## 写作边界

- 不展开具体实现顺序。
- 不在此文中深入单个机制细节。
- 重点是地图，而不是定论所有 open question。

## 参考资料

- `spore/docs/DESIGN.md`
  - `## 已确定的设计`
  - `### 主题摘要与 SEP 对照`
- `spore-evolution/ROADMAP.md`
  - 全文都可作为系统范围总览
- `spore-evolution/GLOSSARY.md`
