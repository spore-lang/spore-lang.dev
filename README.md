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

The deployment baseline is now **Cloudflare Workers + Static Assets**, with one Worker per app:

| App | Worker config | Custom domain | Build output |
| --- | --- | --- | --- |
| `apps/www` | `apps/www/wrangler.jsonc` | `spore-lang.dev` | `apps/www/dist` |
| `apps/docs` | `apps/docs/wrangler.jsonc` | `docs.spore-lang.dev` | `apps/docs/dist` |
| `apps/blog` | `apps/blog/wrangler.jsonc` | `blog.spore-lang.dev` | `apps/blog/dist` |

Each Worker serves its Astro build output from a Static Assets binding named `ASSETS`, and each Worker is attached as the origin for its hostname via a custom domain route.

### Commands

- `pnpm types` - regenerate Worker binding/runtime types for all three apps.
- `pnpm deploy:www` - build `apps/www` and deploy `spore-lang.dev`.
- `pnpm deploy:docs` - build `apps/docs` and deploy `docs.spore-lang.dev`.
- `pnpm deploy:blog` - build `apps/blog` and deploy `blog.spore-lang.dev`.
- `pnpm deploy` - deploy all three Workers in sequence.

### CI / CD

- `pnpm check`, `pnpm types`, and `pnpm build` are the validation baseline.
- `.github/workflows/deploy-workers.yml` deploys each site as its own Worker on pushes to `main`.
- Deployment expects `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` to be configured in GitHub Actions secrets or in your local shell.

### Fonts

Runtime webfonts are delivered from pinned jsDelivr package URLs so the sites can reuse pre-split CDN assets instead of shipping monolithic font files from this repository:

- UI: `Geist Variable` + `Source Han Sans SC VF`
- Code: `Maple Mono Normal NF CN` + `Iosevka`

For Chinese text, the current setup prefers pre-split CDN packages (especially `cn-fontsource-source-han-sans-sc-vf` and `maplemono-normal-nf-cn`) to reduce first-load font cost.

`apps/blog` OG image generation no longer depends on host system fonts. It subsets vendored `Source Han Sans SC` OTF assets during build so CI and local builds render the same glyph set deterministically.

## Repository standards

This repository follows the same baseline as sibling Spore repositories:

- GitHub Actions for static checks and site checks.
- `prek` as the unified hook runner.
- Vale, lychee, typos, TOML, YAML, and Markdown checks for docs quality.

## Current status

This bootstrap now establishes a three-app workspace for the root site, docs site, and blog site while keeping one shared quality baseline. The homepage and docs site already have independent English/Simplified Chinese behavior, and the blog app now hosts the imported `vision`, `roadmap`, and `implementation` Spore draft series under `apps/blog/src/data/blog/spore/`. Those blog drafts remain marked `draft: true`, so they stay private in production while remaining available for iterative writing in local development.
