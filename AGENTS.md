# AGENTS.md — NorthPeak Climate (Next.js)

## Project overview
Marketing site for a local HVAC/home services business (NorthPeak Climate). Built with Next.js App Router, TypeScript, and Tailwind. Focus is clean UI, responsive layout, and client-appropriate polish.

## Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- No UI component libraries required

## Key directories
- `src/app/` — routes (App Router)
- `src/components/` — reusable UI components
- `src/data/` — typed data sources (services, reviews)
- `public/images/` — image assets

## Coding conventions
- Prefer Server Components by default. Use `"use client"` only when needed (state, effects, pathname, etc.).
- Keep changes minimal and scoped to the requested task.
- Avoid introducing new abstractions unless explicitly asked.
- Prefer data-driven UI: update `src/data/*` rather than hardcoding duplicates in components.

## Styling conventions
- Use Tailwind utility classes.
- Keep hover/motion effects subtle (client-business appropriate).
- Maintain accessibility: labels for inputs, aria attributes for toggles/menus, respect reduced motion when animating.
- Typography scale (if requested): keep headings consistent across pages/components.

## Commands (run before finishing)
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Guardrails
- Do not add dependencies unless explicitly requested.
- Do not change copy/wording unless explicitly requested.
- Do not restructure layout unless explicitly requested.
- Report what files changed and the commands run (and results).