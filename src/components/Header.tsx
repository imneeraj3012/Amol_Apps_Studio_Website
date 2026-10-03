import { useEffect, useId, useRef, useState } from 'react'
import { primaryNav, siteMeta, startProjectCta } from '../data/site'
import { Button } from './Button'
import { Logo } from './Logo'
import './Header.css'

/* M2 — site header from the approved mockup: brand left, nav center,
 * "Start a Project" CTA right. Below 900px the desktop nav collapses into
 * an accessible disclosure menu (button + React state + CSS only).
 * Nav targets are placeholder hashes until real pages exist (M3+). */

interface HeaderProps {
  /** Label of the currently active nav item (M4: Home vs Services pages). */
  active?: string
}

export function Header({ active = 'Home' }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  // Close the mobile menu on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open ])

  /* M6.6 — focus into the opened menu (first link). Runs post-commit, so
   * the links already exist in the DOM (same commit removes `hidden`);
   * no timeout is needed. Touch users are unaffected (focusing a link
   * opens no keyboard and shows no ring without keyboard input). */
  useEffect(() => {
    if (open) firstMobileLinkRef.current?.focus()
  }, [open ])

  /* M6.6 — activating a menu link navigates away while the menu (and the
   * focused link) unmounts; return focus to the stable toggle instead of
   * leaving it on detached content. */
  const closeMenuAndRefocusToggle = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="site-header__brand"
          href="#/"
          aria-label={`${siteMeta.name} — home`}
        >
          <Logo />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    item.label === active
                      ? 'site-header__link site-header__link--active'
                      : 'site-header__link'
                  }
                  aria-current={item.label === active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__cta">
          <Button href={startProjectCta.href} size="sm">
            <svg
              className="btn__icon"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1.5 14.5 14.5 1.5M14.5 1.5H4.8M14.5 1.5v9.7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {startProjectCta.label}
          </Button>
        </div>

        <button
          type="button"
          ref={toggleRef}
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="site-header__toggle-bar" aria-hidden="true" />
          <span className="site-header__toggle-bar" aria-hidden="true" />
          <span className="site-header__toggle-bar" aria-hidden="true" />
        </button>
      </div>

      <div
        id={menuId}
        className={open ? 'mobile-menu mobile-menu--open' : 'mobile-menu'}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {primaryNav.map((item, index) => (
              <li key={item.label}>
                <a
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  className={
                    item.label === active
                      ? 'mobile-menu__link mobile-menu__link--active'
                      : 'mobile-menu__link'
                  }
                  aria-current={item.label === active ? 'page' : undefined}
                  onClick={closeMenuAndRefocusToggle}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={startProjectCta.href}
            onClick={closeMenuAndRefocusToggle}
          >
            {startProjectCta.label}
          </Button>
        </nav>
      </div>
    </header>
  )
}
