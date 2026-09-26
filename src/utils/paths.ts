/* M1 — base-aware asset path helper for GitHub Pages subpath deploys.
 *
 * Usage:
 *   import { withBase } from './utils/paths'
 *   <img src={withBase('images/placeholder.svg')} />
 *
 * Prefer static `import` for bundled assets inside src/; use this helper
 * for files served from public/ so they resolve under the configured base.
 */

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.replace(/^\/+/, '')
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}${clean}`
}
