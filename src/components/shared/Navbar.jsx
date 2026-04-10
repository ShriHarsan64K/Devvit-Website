import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'About',   to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'all 0.3s',
      backgroundColor: scrolled ? 'rgba(14,14,14,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
    }}>
      <nav style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', fontSize: '1.5rem', textDecoration: 'none', letterSpacing: '-0.02em', flexShrink: 0, transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = '#A7A5FF'}
          onMouseLeave={e => e.target.style.color = '#fff'}
        >v/v</Link>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', flex: 1, justifyContent: 'center' }}
          className="hidden-mobile">
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} style={{
                fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none',
                color: pathname === l.to ? '#FF7439' : 'rgba(255,255,255,0.65)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => { if (pathname !== l.to) e.target.style.color = '#fff' }}
                onMouseLeave={e => { if (pathname !== l.to) e.target.style.color = 'rgba(255,255,255,0.65)' }}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }} className="hidden-mobile">
          <input type="text" placeholder="SEARCH"
            style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.5rem 1rem', width: '7rem', outline: 'none' }}
          />
          <Link to="/contact" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', backgroundColor: '#A7A5FF', color: '#0E0E0E', padding: '0.5rem 1.5rem', textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#9896f0'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#A7A5FF'}
          >Join</Link>
        </div>

        {/* Hamburger - mobile only */}
        <button onClick={() => setOpen(p => !p)} style={{ display: 'none', flexDirection: 'column', gap: '5px', width: '32px', height: '32px', justifyContent: 'center', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          className="show-mobile" aria-label="menu">
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(0, 7px)' : 'none' }} />
          <span style={{ display: 'block', width: '16px', height: '2px', backgroundColor: '#fff', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(0, -7px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={{ overflow: 'hidden', maxHeight: open ? '400px' : 0, transition: 'max-height 0.3s', backgroundColor: 'rgba(14,14,14,0.98)', borderBottom: open ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
        <ul style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1.5rem', listStyle: 'none' }}>
          {links.map(l => (
            <li key={l.label}>
              <Link to={l.to} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', textDecoration: 'none', color: pathname === l.to ? '#FF7439' : 'rgba(255,255,255,0.65)' }}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <input type="text" placeholder="SEARCH" style={{ width: '100%', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.5rem 1rem', outline: 'none' }} />
          </li>
          <li>
            <Link to="/contact" style={{ display: 'block', textAlign: 'center', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', backgroundColor: '#A7A5FF', color: '#0E0E0E', padding: '0.75rem', textDecoration: 'none' }}>
              Join
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
      `}</style>
    </header>
  )
}
