# Amol Apps Studio Website

> **M2 — Design System + Website Shell.** No complete pages exist yet; page
> content arrives from M3 onwards.

Professional business/portfolio website for **Amol Apps Studio** —
"Turning Business Ideas Into Real Apps".

The site will eventually showcase custom software, web applications, mobile
applications, Windows applications, AI solutions, business automation, and
database & backend solutions.

## Visual source of truth

The **approved Amol Apps Studio homepage mockup** (reviewed and approved by
the site owner) is the authoritative visual reference for all future UI work
from M2 onwards. Do not reinterpret it into a generic template and do not copy
its placeholder project imagery — real project screenshots will be supplied
later.

## Technology stack

- React + TypeScript + Vite
- Plain CSS (no UI/CSS frameworks in M1)
- Git + GitHub, deployed to **GitHub Pages** (₹0-cost target)
- No backend, database, CMS, auth, or paid services

## Local development

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

`npm run build` runs `tsc -b && vite build` (type-check + bundle).

## Project structure

```text
src/
  components/  # Button, Card, Header, Footer, Logo, Section, SiteShell
  pages/       # route-level pages (M3+)
  sections/    # homepage/page sections (M3+)
  data/        # site.ts: brand, nav, CTA, business email (no page content)
  assets/      # bundled assets (empty — no stock/fake imagery)
  styles/      # tokens.css, reset.css, globals.css
  types/       # shared TypeScript types (SiteMeta, NavItem)
  utils/       # helpers (withBase() for GitHub Pages asset URLs)
  App.tsx      # shell preview placeholder (not a page)
  main.tsx     # entry point
public/
  images/ icons/ favicon/  # static files (empty placeholders in M1)
tests/         # test foundation placeholder (no suite yet)
docs/
  github-pages.md  # base-path + routing considerations
```

## GitHub Pages deployment target

- Prepared for a Vite + React app served under a repository subpath.
- Base path is one isolated constant in `vite.config.ts`
  (`DEFAULT_GITHUB_PAGES_BASE`, overridable via `VITE_BASE_PATH`).
  See `docs/github-pages.md` for routing considerations.
- Not deployed in M1. No GitHub Actions workflow added in M1.

## Current milestone

**M2 — Design System + Website Shell** (M1 baseline preserved):

- Tokens refined against the approved mockup (navy text, blue primary,
  controlled pastel accents, radius/shadow/spacing scales, breakpoints).
- Global foundation: reset, typography, links, buttons, focus-visible,
  selection, container, section rhythm, reduced-motion.
- Primitives: `Button` (primary/outline/onNavy), `Card`, `Section`
  (eyebrow/title/description + band), `Logo` (inline-SVG "A" mark).
- Shell: `SiteShell` → `Header` + `main` + `Footer`; sticky header with
  desktop nav + "Start a Project" CTA; accessible mobile disclosure menu
  (<900px) with Escape-to-close; footer with brand, nav, business email,
  dynamic-year copyright.
- Nav uses placeholder hash targets (`#home`, `#services`, …); no router,
  no pages, no page content yet.

Validation performed: `npm install`, `tsc -b`, `npm run build` (base-path
output verified under `/AmolApps_Studio_Website/`), dev-server smoke test,
desktop/mobile shell inspection, keyboard/focus review, overflow and
reduced-motion review. See `docs/github-pages.md` for Pages notes.

## Future considerations

- M3 — Homepage (real sections per the approved mockup).
- Later milestones implement Services/Portfolio/About/Contact per the mockup
  and written spec; confirm with the owner when a detail is unclear rather
  than redesigning.
