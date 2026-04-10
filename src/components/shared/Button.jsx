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
import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', size = 'md', href, to, onClick, type = 'button', className = '', disabled = false }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.1em',
    textDecoration: 'none', border: 'none', cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    userSelect: 'none', whiteSpace: 'nowrap',
    opacity: disabled ? 0.5 : 1,
  }

  const variants = {
    primary:   { backgroundColor: '#A7A5FF', color: '#0E0E0E' },
    secondary: { backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)' },
    orange:    { backgroundColor: '#FF7439', color: '#fff' },
    ghost:     { backgroundColor: 'transparent', color: '#A7A5FF' },
  }

  const sizes = {
    sm: { fontSize: '0.7rem', padding: '0.4rem 1rem' },
    md: { fontSize: '0.75rem', padding: '0.625rem 1.25rem' },
    lg: { fontSize: '0.8rem', padding: '0.875rem 2rem' },
  }

  const style = { ...base, ...variants[variant], ...sizes[size] }

  const hoverMap = {
    primary:   { backgroundColor: '#9896f0', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(167,165,255,0.25)' },
    secondary: { backgroundColor: 'rgba(255,255,255,0.08)', transform: 'translateY(-1px)' },
    orange:    { backgroundColor: '#f06830', transform: 'translateY(-1px)', boxShadow: '0 8px 24px rgba(255,116,57,0.25)' },
    ghost:     { color: '#fff' },
  }

  const handleMouseEnter = e => { if (!disabled) Object.assign(e.currentTarget.style, hoverMap[variant]) }
  const handleMouseLeave = e => { Object.assign(e.currentTarget.style, { backgroundColor: variants[variant].backgroundColor || 'transparent', transform: 'translateY(0)', boxShadow: 'none', color: variants[variant].color }) }
  const handleMouseDown  = e => { e.currentTarget.style.transform = 'translateY(1px)' }
  const handleMouseUp    = e => { e.currentTarget.style.transform = 'translateY(-1px)' }

  const events = { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onMouseDown: handleMouseDown, onMouseUp: handleMouseUp }

  if (href) return <a href={href} style={style} target="_blank" rel="noopener noreferrer" {...events}>{children}</a>
  if (to)   return <Link to={to} style={style} {...events}>{children}</Link>
  return <button type={type} onClick={onClick} disabled={disabled} style={style} {...events}>{children}</button>
}