# GitHub Pages preparation (M1)

Deployment target: **GitHub Pages**. No deployment has been performed in M1.
No Cloudflare Pages configuration is used.

## Base path

`vite.config.ts` exposes one isolated value:

```ts
const DEFAULT_GITHUB_PAGES_BASE = '/AmolApps_Studio_Website/'
```

- Change only that constant when the final repository name is known.
- Override per-build without editing code:
  `VITE_BASE_PATH=/my-repo/ npm run build`
- For a user/org site (`<user>.github.io`) or a custom domain, use `/`.

`index.html` references the favicon via `%BASE_URL%favicon.svg` so it keeps
working under the subpath. Code that needs a public asset URL should use
`withBase()` from `src/utils/paths.ts`.

## Routing considerations (future)

- No router is installed in M1 (intentionally dependency-free).
- If client-side routing is added later, prefer a **hash-based** approach or a
  static-route structure for GitHub Pages, because a project subpath has no
  server-side fallback for deep links (e.g. `/repo/services` will 404 on
  refresh with plain `BrowserRouter`).
- Options when routing arrives:
  1. `HashRouter` — simplest, always works on GitHub Pages.
  2. `BrowserRouter` with `basename={import.meta.env.BASE_URL}` **plus** a
     `404.html` fallback workaround — more setup, cleaner URLs.
  3. No router (multi-page via separate static pages or single-page anchors).
- Do not assume the repository name inside components; always derive the base
  from `import.meta.env.BASE_URL`.

## Build verification (M1)

```powershell
npm install
npm run build   # runs `tsc -b && vite build`
npm run preview # serves dist/ locally for a final check
```
