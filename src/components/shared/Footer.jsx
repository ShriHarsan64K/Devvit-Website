import React from 'react'
// KAN-7 | Shared Component: Footer

import { Link } from 'react-router-dom'

const protocol = [
  { label: 'About',   to: '/' },
  { label: 'Events',  to: '/events' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const resources = [
  { label: 'Documentation', href: '#' },
  { label: 'Open Source',   href: '#' },
  { label: 'Templates',     href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-devvit-bg">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-2">
          <Link to="/" className="font-lexend font-black text-devvit-white text-lg tracking-tight">
            &lt;DEV/VIT&gt;
          </Link>
          <p className="font-inter text-xs text-white/40">© All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          {/* Protocol */}
          <div>
            <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Protocol
            </p>
            <ul className="flex flex-col gap-3">
              {protocol.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-inter text-sm text-white/70 hover:text-devvit-purple transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-grotesk text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Resources
            </p>
            <ul className="flex flex-col gap-3">
              {resources.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-inter text-sm text-white/70 hover:text-devvit-purple transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}