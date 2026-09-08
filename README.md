# xmigas FE Prototype Boilerplate

A minimal prototype boilerplate built with **TanStack Start**, **React**, **TypeScript**, and **shadcn/ui**.

## Stack

- [TanStack Start](https://tanstack.com/start) + React Router — file-based routing, SSR
- [shadcn/ui](https://ui.shadcn.com) — component library (all components installed)
- [shadcn typeset](https://ui.shadcn.com/docs/typeset) — typography / rich-text styling
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Motion](https://motion.dev) — animation (previously Framer Motion)
- [TanStack Table](https://tanstack.com/table) — headless tables & data grids
- [Zustand](https://zustand.docs.pmnd.rs) — state management
- [Phosphor Icons](https://phosphoricons.com) — icon set
- [Base UI](https://base-ui.com) — unstyled primitives powering the components

## Tooling

- [Oxlint](https://oxc.rs) — linting
- [Oxfmt](https://oxc.rs) — formatting

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `pnpm dev`       | Start the dev server on port 3000 |
| `pnpm build`     | Production build                  |
| `pnpm preview`   | Preview the production build      |
| `pnpm test`      | Run tests (Vitest)                |
| `pnpm lint`      | Lint with Oxlint                  |
| `pnpm format`    | Format source files with Oxfmt    |
| `pnpm check`     | Check formatting with Oxfmt       |
| `pnpm typecheck` | Type-check with `tsc --noEmit`    |

## Libraries

- **shadcn typeset** — apply the `.typeset` class to any prose container for consistent markdown-style typography (headings, lists, code, tables, quotes).
- **Motion** — use `motion/react` for animations and scroll-driven reveals.
- **TanStack Table** — headless tables with sorting, filtering, pagination, and virtualisation.
- **Zustand** — lightweight global state via `create()` stores.

## Design system

The theme ships an editorial base:

- **Lora** — display / headings (`font-heading`)
- **Inter** — body / UI (`font-sans`)
- **JetBrains Mono** — labels / code (`font-mono`)
- Warm taupe palette via CSS variables, with a dark mode (`dark:` variant)

## Customizing your style

Before you start building, tweak the boilerplate to your look. Most of it is
driven by tokens in `src/styles.css` and settings in `components.json`.

### 1. Theme & brand colors

`components.json` holds the shadcn settings:

| Field          | Location          | What it controls                         |
| -------------- | ----------------- | ---------------------------------------- |
| `style`        | `components.json` | which shadcn style new components use    |
| `baseColor`    | `components.json` | default color scale for generated tokens |
| `iconLibrary`  | `components.json` | icon set new components import from      |
| `tailwind.css` | `components.json` | stylesheet shadcn edits                  |

The color variables themselves live in `src/styles.css` under `:root` and
`.dark` (e.g. `--background`, `--primary`, `--border`, `--ring`). Change those
values to re-tint every component at once. Regenerate the palette with:

```bash
npx shadcn@latest init
```

### 2. Fonts

Fonts are imported and mapped in `src/styles.css`:

```css
@import "@fontsource-variable/inter";
@import "@fontsource-variable/lora";
@import "@fontsource-variable/jetbrains-mono";
```

The `@theme inline` block maps them to Tailwind tokens:

```css
--font-sans: "Inter Variable", sans-serif; /* body / UI */
--font-heading: "Lora Variable", serif; /* headings */
--font-mono: "JetBrains Mono Variable", monospace; /* labels / code */
```

Swap the import and token to change fonts — e.g. replace the Lora import with
a different face and point `--font-heading` at it. Install packages via
`pnpm add @fontsource-variable/<name>`.

### 3. shadcn typeset

Prose styling is already wired through `src/typeset.css` and the `.typeset`
class. Apply it to any rich-text container:

```tsx
<div className="typeset">
  <h1>Heading</h1>
  <p>Body text.</p>
</div>
```

It uses `--font-heading` / `--font-sans` / `--font-mono`, so changing the fonts
above updates typeset too. See `src/typeset.css` for the full stylesheet.

### 4. Icons

The project uses [Phosphor Icons](https://phosphoricons.com). New components
take their icons from the `iconLibrary` in `components.json`. Import icons
directly in your code:

```tsx
import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
```

To switch to another set, change `components.json`'s `iconLibrary` (e.g.
`lucide`, `radix`, `tabler`) and install the matching package.
