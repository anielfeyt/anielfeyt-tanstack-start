# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Production build
npm run preview    # Preview production build
npm run test       # Run tests with Vitest
```

## Architecture

This is a personal portfolio site for Aniel Feyt, built with **TanStack Start** (SSR React framework) + **TanStack Router** (file-based routing) + **Tailwind CSS v4** + **TypeScript**.

**Key architectural decisions:**
- File-based routing: routes live in `src/routes/`. TanStack auto-generates `src/routeTree.gen.ts` — never edit this file manually.
- `src/routes/__root.tsx` is the shell layout (wraps all pages with `<Header>`, `<Footer>`, global fonts/styles).
- The single page (`src/routes/index.tsx`) composes section components from `src/sections/`.
- Path alias `@/` maps to `src/` (configured in `tsconfig.json` and `vite.config.ts`).

**UI libraries:**
- shadcn/ui configured with `new-york` style, `slate` base color — add components via `npx shadcn@latest add <component>`.
- Custom registry `@react-bits` points to `https://reactbits.dev/r/{name}.json`.
- Icons from `lucide-react`.
- Animations via `motion` (Motion for React) and GSAP.
- 3D via `@react-three/fiber` + `postprocessing`.

**Sections pattern:** Page sections live in `src/sections/<name>/index.tsx` and are imported into the route component. Each section uses anchor `id` attributes for in-page navigation (Header links use `#about`, `#technologies`).
