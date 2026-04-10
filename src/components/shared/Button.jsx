import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', size = 'md', href, to, onClick, type = 'button', className = '', disabled = false }) {
  const base = 'inline-flex items-center justify-center font-grotesk font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:   'bg-[#A7A5FF] text-[#0E0E0E] hover:bg-[#A7A5FF]/90',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-[#0E0E0E]',
    orange:    'bg-[#FF7439] text-white hover:bg-[#FF7439]/90',
    ghost:     'bg-transparent text-[#A7A5FF] hover:text-white',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-sm px-8 py-4',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  if (to)   return <Link to={to} className={cls}>{children}</Link>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}
