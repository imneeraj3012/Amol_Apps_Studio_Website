import type { AnchorHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'onNavy'
type ButtonSize = 'md' | 'sm'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

/* M2 — link-styled button primitive. Two renderings cover the mockup:
 * solid blue ("Start a Project") and white-with-blue-border ("View All …").
 * `onNavy` covers CTAs placed on the dark navy band. */

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={`btn btn--${variant} btn--${size}`}
      {...rest}
    >
      {children}
    </a>
  )
}
