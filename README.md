# spore-lang.dev

Monorepo for the public Spore websites.

## Apps

- `apps/www` - `spore-lang.dev`, the primary public site and future product-facing pages, with route-based homepage locales and browser-language auto-detect on `/`.
- `apps/docs` - `docs.spore-lang.dev`, documentation, onboarding, and reference, with a manual language switcher.
- `apps/blog` - `blog.spore-lang.dev`, the official blog, using an AstroPaper-derived shell for Spore essays and draft series.

## Stack

- Astro
- Starlight
- AstroPaper
- pnpm
- `prek` for unified local and CI quality checks

## Commands

- `pnpm dev` - start all local app dev servers in parallel.
- `pnpm dev:www` - start `apps/www`.
- `pnpm dev:docs` - start `apps/docs`.
- `pnpm dev:blog` - start `apps/blog`.
- `pnpm check` - run Astro static checks across all apps.
- `pnpm check:blog` - run static checks for `apps/blog`.
- `pnpm build` - build all sites in the workspace.
- `pnpm build:blog` - build `apps/blog`.
- `pnpm ci` - run the local CI command set.
- `pnpm pre-commit` - run all configured hooks with `prek`.
- `pnpm pre-commit:install` - install local Git hooks.

## Deployment

The current deployment baseline is **static output per app**:

- `pnpm build` writes `apps/www/dist`, `apps/docs/dist`, and `apps/blog/dist`.
- Each site can be deployed independently as static assets.
- Today the repository fits static hosting first (for example Cloudflare Pages, or another CDN/static host).

Worker-specific deployment is **not wired up yet**:

- there is no `wrangler.toml` / `wrangler.json(c)` in this repo
- there is no `@astrojs/cloudflare` adapter configured in the Astro apps
- there is no shared Worker entrypoint that binds the three sites behind Wrangler

So the current repo can cooperate with Cloudflare as a **static-site deployment target**, but it is not yet a Wrangler Worker-native Astro deployment.

One known build caveat remains in `apps/blog`: OG image generation currently reaches external font hosts during build. Before treating deployment as fully reproducible across CI and Worker-oriented pipelines, those fonts should be vendored locally.

## Repository standards

This repository follows the same baseline as sibling Spore repositories:

- GitHub Actions for static checks and site checks.
- `prek` as the unified hook runner.
- Vale, lychee, typos, TOML, YAML, and Markdown checks for docs quality.

## Current status

This bootstrap now establishes a three-app workspace for the root site, docs site, and blog site while keeping one shared quality baseline. The homepage and docs site already have independent English/Simplified Chinese behavior, and the blog app now hosts the imported `vision`, `roadmap`, and `implementation` Spore draft series under `apps/blog/src/data/blog/spore/`. Those blog drafts remain marked `draft: true`, so they stay private in production while remaining available for iterative writing in local development.
