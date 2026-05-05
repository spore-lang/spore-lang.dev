---
title: 开始使用
description: 学习和跟进 Spore 项目的当前入口。
sidebar:
  order: 2
---

## 安装 CLI

当前已发布的 alpha CLI 包是 PyPI 上的 `spore-lang`。
仓库里已经配置了面向 PyPI 和
[GitHub Releases](https://github.com/spore-lang/spore/releases) 的标签发布流程，
但下一次公开发布还没有切出来，所以 GitHub Releases 可能会落后于 PyPI。

可以这样安装当前 alpha 包：

```bash
uv tool install spore-lang
spore --version
```

如果你更习惯 `pipx`，也可以这样安装：

```bash
pipx install spore-lang
```

## 从源码构建

如果你需要主分支上尚未发布的改动，可以使用源码仓库：

```bash
git clone https://github.com/spore-lang/spore.git
cd spore
cargo build
cargo run --bin spore -- --help
```

## 当前入口

- 公开主页位于 [spore-lang.dev](https://spore-lang.dev)。
- 语言实现位于 [spore-lang/spore](https://github.com/spore-lang/spore)。
- 提案、路线图与流程文档位于 [spore-lang/spore-evolution](https://github.com/spore-lang/spore-evolution)。
- 这个文档站会逐步成长为与这两个仓库互补的公共学习入口。

## 接下来

- `spore-lang.dev` 会承载更完整的品牌与产品叙事。
- 交互式课程与 playground 会逐步加入。
- 站点内文档会与实现仓库和提案仓库形成清晰分工。
