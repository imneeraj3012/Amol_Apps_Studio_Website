import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/* M2 — card foundation: white surface, light border, ~16-20px radius, soft
 * shadow. Service/project cards in M3+ build on this. */

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={className ? `card ${className}` : 'card'} {...rest}>
      {children}
    </div>
  )
}
