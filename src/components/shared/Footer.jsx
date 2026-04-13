import React from 'react'
import { Link } from 'react-router-dom'

const protocol  = ['About', 'Events', 'Careers', 'Contact']
const resources = ['Open Source']

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#0E0E0E' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3.5rem 1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem' }}>
        <div>
          <Link to="/" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', textDecoration: 'none', fontSize: '1rem' }}>&lt;DEV/VIT&gt;</Link>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.5rem' }}>© All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Protocol</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {protocol.map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color='#A7A5FF'}
                    onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.55)'}
                  >{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>Resources</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resources.map(item => (
                <li key={item}>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color='#A7A5FF'}
                    onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.55)'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}