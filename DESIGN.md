---
version: alpha
name: Spore
description: "Spore is a warm, organic, developer-facing design system for spore-lang.dev. It starts from the information architecture discipline of MongoDB-style developer sites, then replaces the dark infrastructure aesthetic with the approved Spore brand-board direction: warm cream canvases, layered plant greens, rounded geometry, and a calm `grow with purpose` tone. The system should feel technical, trustworthy, collaborative, and alive. It is for a programming language website, not a retail brand and not a neon AI landing page."

sources:
  primary-reference: "Adapted from the MongoDB DESIGN.md structure for developer-site composition"
  brand-board: "tools/brand/source/spore-brand-board.png"
  asset-workflow: "tools/brand/README.md"

brand-keywords:
  - organic
  - collaborative
  - dependable
  - gentle
  - growth-oriented
  - developer-facing
  - light-first

colors:
  ink: "#0F2E1F"
  ink-soft: "#244032"
  olive: "#4F6C58"
  sage: "#8BA888"
  sprout: "#C7DEA6"
  canvas: "#F6F6F1"
  canvas-soft: "#FBFBF8"
  shell: "#EEF1E8"
  hairline: "#D9DDD4"
  stone: "#ABAFA9"
  on-dark: "#F6F6F1"
  success-soft: "#E8F2DA"
  focus-ring: "#8BA888"
  code-surface: "#163126"
  code-ink: "#ECF4E8"

typography:
  hero-display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: -2px
  display-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: -1.5px
  heading-1:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: -1px
  heading-2:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 650
    lineHeight: 1.18
    letterSpacing: -0.5px
  heading-3:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
  heading-4:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.04em
  code-md:
    fontFamily: '"Geist Mono", "SFMono-Regular", ui-monospace, monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 18px
  xl: 24px
  xxl: 32px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 72px
  section-lg: 112px
  hero: 136px

shadows:
  soft-card: "0 8px 24px rgba(15, 46, 31, 0.06)"
  float-soft: "0 14px 40px rgba(15, 46, 31, 0.10)"

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    fontWeight: 600
    rounded: "{rounded.full}"
    padding: "12px 20px"
    border: "1px solid {colors.ink}"
  button-primary-hover:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.on-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    fontWeight: 600
    rounded: "{rounded.full}"
    padding: "12px 20px"
    border: "1px solid {colors.hairline}"
  button-soft:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    fontWeight: 600
    rounded: "{rounded.full}"
    padding: "12px 20px"
    border: "1px solid transparent"
  card-base:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    boxShadow: "{shadows.soft-card}"
  card-highlight:
    backgroundColor: "{colors.shell}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
    border: "1px solid rgba(139, 168, 136, 0.35)"
  tag:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.olive}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 10px"
  code-block:
    backgroundColor: "{colors.code-surface}"
    textColor: "{colors.code-ink}"
    typography: "{typography.code-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid rgba(199, 222, 166, 0.16)"
  text-input:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
    border: "1px solid {colors.hairline}"
  text-input-focus:
    border: "2px solid {colors.focus-ring}"

layout:
  content-width: "1120px"
  reading-width: "720px"
  docs-width: "1400px"
  grid-default: "repeat(auto-fit, minmax(260px, 1fr))"

apps:
  www:
    role: "Primary brand and product narrative surface"
    rules:
      - "Lead with the language story: hole -> seed point -> sprout -> Spore."
      - "Use large warm hero surfaces, restrained copy blocks, and a few strong calls to action."
      - "Show growth metaphors through illustration, silhouette, sequence, or diagram, not through stock photos."
      - "Prefer light backgrounds. Dark sections are occasional emphasis bands only."
  docs:
    role: "Reference and onboarding surface"
    rules:
      - "Reading clarity beats spectacle."
      - "Keep Starlight structure and navigation utility, then add Spore color and warmth through tokens, borders, and accents."
      - "Navigation, search, code blocks, tabs, and callouts should feel calm and legible, not glossy."
      - "Avoid large decorative hero moments on deep reference pages."
  blog:
    role: "Essay and roadmap surface"
    rules:
      - "Use an editorial rhythm: generous margins, warm backgrounds, strong headings, readable long-form paragraphs."
      - "Code and diagrams may use darker surfaces, but the page frame stays light."
      - "Treat the blog as thoughtful and reflective, not as a high-velocity news feed."

dos:
  - "Use warm cream and plant-green surfaces as the default visual world."
  - "Prefer rounded, seed-like, shell-like geometry over sharp enterprise rectangles."
  - "Write concise, confident product copy with gentle warmth."
  - "Preserve bilingual parity across English and Simplified Chinese pages."
  - "Use the mascot as hero art or storytelling support, not as a repeating sticker."
  - "Let the logo, symbol, and favicon follow the approved vector workflow under tools/brand."

donts:
  - "Do not use neon green, cyber blue, or purple gradient AI cliches."
  - "Do not make the homepage feel like cloud infrastructure, security software, or crypto."
  - "Do not default to dark mode visuals for the main site brand."
  - "Do not use glassmorphism, heavy blur cards, or noisy mesh gradients."
  - "Do not over-animate. Motion should feel like unfolding, sprouting, or settling."
  - "Do not turn the mascot into the whole identity; the symbol and wordmark stay primary."
---

# Spore Design System

## Core feel

Spore should feel like a programming language that grows with intent. The brand is
soft without being childish, technical without becoming cold, and organic without
drifting into lifestyle marketing. The approved board establishes the right balance:
warm paper-like backgrounds, deep botanical greens, rounded silhouettes, and a
clear story about emergence from a hole into a complete, collaborative organism.

This is the opposite of the current dark gradient placeholder homepage. Future UI
should move toward a light-first, calm, organic developer aesthetic.

## Visual principles

1. **Growth over velocity.** Favor images and layouts that suggest unfolding,
   refinement, and maturity rather than hype, speed lines, or aggressive launch
   energy.
2. **Organic geometry.** Use rounded corners, loops, capsules, seeds, shells, and
   gentle curves. Straight lines are supporting structure, not the star.
3. **Developer clarity.** Even when the page is brand-forward, information design
   stays crisp: strong headings, short sections, clear CTA hierarchy, obvious docs
   entry points, and code that remains readable.
4. **Trust through restraint.** The system should feel dependable and quietly
   polished. Avoid visual tricks that make the site feel trendy but unstable.

## Color usage

- **Canvas** should be the dominant background. Most pages should start from
  `{colors.canvas}` or `{colors.canvas-soft}`.
- **Ink** is the primary heading, nav, and CTA color.
- **Olive** and **sage** are support tones for section accents, icons, and
  highlighted borders.
- **Sprout** is a gentle accent for success, active tags, or background washes,
  not a screaming CTA color.
- **Dark surfaces** are mainly for code, terminal previews, or occasional contrast
  bands. They are not the default site identity.

## Typography rules

- Use **Inter** as the default family across marketing, docs, and product copy.
- Use a monospace face only for code, terminals, hashes, command snippets, and
  structured technical labels.
- Headings should feel compact and intentional, with slight negative tracking on
  large display sizes.
- Body copy should remain relaxed and readable. Spore is concept-heavy; do not
  squeeze line height for visual drama.

## Imagery and illustration

- The mascot is approved as art direction for launch and storytelling moments.
- The mascot should appear as a hero or sectional anchor, not in every card,
  button, or badge.
- Prefer illustrations and diagrams that reinforce the brand story:
  `hole -> seed point -> sprout -> Spore`.
- Avoid generic stock developer imagery, abstract AI blobs, and glossy 3D chrome.

## Shared component behavior

- **Buttons** are rounded and calm. Primary buttons should read dependable, not
  urgent or sales-driven.
- **Cards** are light, slightly elevated, and roomy. They should feel like calm
  sheets or shells on a warm desk, not floating glass.
- **Code blocks** can use a deep green-dark surface for contrast, but keep syntax
  colors restrained and readable.
- **Focus states** should use the sage/focus-ring range and stay accessible.

## Page patterns

### Homepage (`apps/www`)

- Hero should combine strong product naming with one clear conceptual image or
  sequence.
- Good sections: language promise, why Spore exists, growth story, links to docs,
  roadmap, and language repo.
- Homepage should feel like an invitation into the ecosystem, not a feature grid
  copied from a SaaS pricing page.

### Docs (`apps/docs`)

- Use the design system to warm up Starlight, not to fight it.
- Navigation chrome stays simple and functional.
- Callouts, code tabs, tables, and sidebars should inherit Spore greens and warm
  surfaces, but reference content still comes first.

### Blog (`apps/blog`)

- Blog pages should feel more editorial than the docs, with wider breathing room
  and stronger article typography.
- Use brand color sparingly around headings, metadata, separators, and inline
  labels.
- Draft essays and roadmap pieces should still look like part of the same family as
  the homepage and docs.

## Explicit anti-patterns

- No blue-purple gradient hero backgrounds.
- No black-on-black default shell for the main site.
- No generic AI chat-product styling.
- No hard-edged enterprise dashboard look for narrative pages.
- No retail-style over-branding where every surface becomes a badge, sticker, or
  promotional tile.

## Implementation note for AI agents

When asked to design or restyle `spore-lang.dev`, prefer this document over any
single external brand imitation. If you need a structural starting point, think
"MongoDB-style developer information architecture" translated into the Spore brand
board's warm cream, plant-green, growth-oriented visual language.
