# Safron

A premium corporate consulting website for Safron, an enterprise consulting firm specializing in SAP, AI, and sustainable innovation transformation.

## Run & Operate

- `pnpm --filter @workspace/safron run dev` — run the Safron marketing site (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000, not used by Safron)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (not currently used by Safron)

## GitHub Pages deployment (Safron)

The Safron site is a static frontend-only artifact and is prepared for GitHub Pages:

- `.github/workflows/deploy-safron.yml` — GitHub Actions workflow that builds `artifacts/safron` and deploys it to GitHub Pages on pushes to `main`. It sets `BASE_PATH` to `/<repo-name>/` automatically.
- `artifacts/safron/package.json` has a `build:pages` script (`BASE_PATH=/safron/`) for manual local builds targeting a repo named `safron`. Adjust `BASE_PATH` if the GitHub repo has a different name.
- `artifacts/safron/public/404.html` and a decoding snippet in `index.html` implement the standard SPA-on-GitHub-Pages redirect trick so client-side routes (e.g. `/about`, `/insights`) work on refresh/direct link.
- To enable: push this repo to GitHub, then enable GitHub Pages with source "GitHub Actions" in the repo settings.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
