---
title: Getting Started
description: Current entry points for learning and tracking the Spore project.
sidebar:
  order: 2
---

## Install the CLI

The current alpha CLI package is `spore-lang`.
Tagged releases are set up to publish installable artifacts to both
[PyPI](https://pypi.org/project/spore-lang/) and
[GitHub Releases](https://github.com/spore-lang/spore/releases).

Install the current alpha package with:

```bash
uv tool install spore-lang
spore --help
```

You can also use `pipx`:

```bash
pipx install spore-lang
```

## Build from source

Use the source checkout when you need unreleased changes:

```bash
git clone https://github.com/spore-lang/spore.git
cd spore
cargo build
cargo run --bin spore -- --help
```

## Current entry points

- The public homepage lives at [spore-lang.dev](https://spore-lang.dev).
- The language implementation lives in [spore-lang/spore](https://github.com/spore-lang/spore).
- Proposals, roadmap work, and process documents live in [spore-lang/spore-evolution](https://github.com/spore-lang/spore-evolution).
- This docs site will grow into the public learning surface that complements both.

## What comes next

- A richer product and brand narrative at `spore-lang.dev`.
- Interactive lessons and a playground.
- Site-local docs that complement the implementation and proposal repositories.
