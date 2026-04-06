import React from 'react'
// KAN-6 | Shared Component: Navbar
// Desktop nav + mobile hamburger menu

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'About',   to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const location = useLocation()

  // Add background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-devvit-bg/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="font-lexend font-black text-devvit-white text-lg tracking-tight hover:text-devvit-purple transition-colors duration-200"
        >
          v/v
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`font-grotesk text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-devvit-orange'
                      : 'text-white/70 hover:text-devvit-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop Right: Search + Join */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-white/5 border border-white/10 text-white/70 placeholder-white/30 font-inter text-sm px-4 py-2 w-36 focus:outline-none focus:border-devvit-purple/50 transition-colors duration-200"
          />
          <Link
            to="/contact"
            className="font-grotesk font-bold text-sm uppercase tracking-widest bg-devvit-purple text-devvit-bg px-5 py-2 hover:bg-opacity-90 transition-all duration-200"
          >
            Join
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : 'w-4'
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-devvit-bg/95 backdrop-blur-md border-b border-white/10 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`font-grotesk text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? 'text-devvit-orange' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}

          {/* Mobile Search */}
          <li>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white/5 border border-white/10 text-white/70 placeholder-white/30 font-inter text-sm px-4 py-2 focus:outline-none focus:border-devvit-purple/50 transition-colors duration-200"
            />
          </li>

          {/* Mobile Join */}
          <li>
            <Link
              to="/contact"
              className="block text-center font-grotesk font-bold text-sm uppercase tracking-widest bg-devvit-purple text-devvit-bg px-5 py-3 hover:bg-opacity-90 transition-all duration-200"
            >
              Join
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}