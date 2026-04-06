import React from 'react'
// KAN-8 | Shared Component: Button
// Variants: primary (purple fill), secondary (outlined), orange (CTA), ghost

import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-grotesk font-bold tracking-wider uppercase text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-devvit-purple text-devvit-bg px-6 py-3 hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-transparent text-devvit-white border border-devvit-white px-6 py-3 hover:bg-white hover:text-devvit-bg active:scale-[0.98]',
    orange:
      'bg-devvit-orange text-devvit-white px-6 py-3 hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98]',
    ghost:
      'bg-transparent text-devvit-purple px-6 py-3 hover:text-white active:scale-[0.98]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}