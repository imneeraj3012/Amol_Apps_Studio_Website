/* M4 — tiny hash router for GitHub Pages (no dependency, no server rewrites).
 *
 * Routes:
 *   "#/"            → home (top of page)
 *   "#/services"    → services page
 *   "#/#portfolio"  → home + scroll to the portfolio section
 *   "#/services#detail-x" → services page + scroll to a detail block
 *
 * Plain legacy hashes ("#contact") resolve to home + that anchor, preserving
 * M2/M3 navigation behavior for not-yet-built pages. Unknown routes fall
 * back to home. In-page anchors that already exist in the DOM are left to
 * native browser behavior.
 */

export type RouteName =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'about'
  | 'contact'
  | 'query-form-test'

export interface RouteState {
  route: RouteName
  anchor: string | null
}

export function parseHash(hash: string): RouteState {
  if (hash.startsWith('#/')) {
    const rest = hash.slice(2)
    const split = rest.indexOf('#')
    const rawRoute = split === -1 ? rest : rest.slice(0, split)
    const anchor = split === -1 ? null : rest.slice(split + 1) || null
    const route: RouteName =
      rawRoute === 'services' ||
      rawRoute === 'portfolio' ||
      rawRoute === 'about' ||
      rawRoute === 'contact' ||
      rawRoute === 'query-form-test'
        ? rawRoute
        : 'home'
    return { route, anchor }
  }
  return {
    route: 'home',
    anchor: hash.length > 1 ? hash.slice(1) : null,
  }
}

export function anchorExists(anchor: string | null): boolean {
  if (!anchor) return false
  return document.getElementById(anchor) !== null
}
