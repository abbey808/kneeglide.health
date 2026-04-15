# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### KneeGlide Health Landing Page (`artifacts/knee-relief`)
- **Type**: React + Vite (presentation-first, no backend)
- **Preview path**: `/`
- **Description**: Single-page landing page for KneeGlide Health — a knee pain relief referral funnel (GAE treatment)
- **Sections**: Hero with cycling activity text + animated image grid, pain types cards (dark bg section), qualification form
- **Fonts**: Funnel Display (display/headlines), Inter (body text)
- **Brand colors**: Primary #FF282E (red), Dark #1F2937, White #FFFFFF, shades #800004-#FFB3B5
- **Theme**: Clean white background, bold red CTAs, dark charcoal "Sound familiar?" section
- **Dependencies**: framer-motion (animations), react-hook-form + zod (form validation), shadcn/ui components
- **Pages**: Home (`/`), Privacy & Data Use (`/privacy`)
- **Form fields**: Phone, email, zip code, gender, age range, seen doctor (radio), pain symptoms (multi-select tiles), privacy consent checkbox
- **Button style**: White text on #E60006 (primary CTA), hover transitions to #B30005
- **TODO**: Google Sheets integration for form submissions (user wants to set up later — use Replit Google Sheets connector when ready)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/knee-relief run dev` — run knee relief landing page locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
