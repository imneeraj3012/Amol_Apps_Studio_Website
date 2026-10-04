import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// ---------------------------------------------------------------------------
// GitHub Pages base path — ISOLATED CONFIG VALUE (M1)
// ---------------------------------------------------------------------------
// The production site will be served from a repository subpath, e.g.
//   https://<user>.github.io/<repo>/
// Change ONLY this constant (or override via the VITE_BASE_PATH env var)
// when the final repository name is known.
//
// Examples:
//   - Project site: "/AmolApps_Studio_Website/"
//   - User/org site (<user>.github.io): "/"
//   - Custom domain: "/"
//
// Local `vite dev` is unaffected by this value for day-to-day work.
// Asset URLs inside src/ should use relative imports or import.meta.env.BASE_URL
// (see src/utils/paths.ts) so they keep working under the subpath.
// ---------------------------------------------------------------------------
const DEFAULT_GITHUB_PAGES_BASE = '/Amol_Apps_Studio_Website/'

const siteBase =
  process.env.VITE_BASE_PATH ?? DEFAULT_GITHUB_PAGES_BASE

// https://vite.dev/config/
export default defineConfig({
  base: siteBase,
  plugins: [react()],
})
