import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Button from '../components/shared/Button'

const whyDevvit = [
  { num: '01', title: 'Beginner Friendly', desc: 'Low friction entry points. We provide the scaffolding; you provide the logic.' },
  { num: '02', title: 'Real Projects',     desc: 'Work on meaningful projects that solve actual problems and make a real impact on the community.' },
  { num: '03', title: 'Networking',        desc: 'Build connections with industry professionals, fellow developers, and potential collaborators.' },
]

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0E', minHeight: '100vh' }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Dark coding BG */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1600&q=80')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.35,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0E0E0E 45%, rgba(14,14,14,0.5) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', paddingTop: '4rem' }}>
          <h1 style={{
            fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff',
            lineHeight: 0.92, letterSpacing: '-0.02em',
            fontSize: 'clamp(5rem, 13vw, 10rem)',
          }}>
            BUILD.<br />HOST.<br />
            <span style={{ color: '#A7A5FF' }}>DEVVIT.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.6)', fontSize: '1.125rem', marginTop: '2rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            A community of builders &amp; hackers.<br />
            Where progress matters more than certificates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="https://luma.com/yq94wzmt">Register</Button>
            <Button variant="secondary" size="lg" to="/events">Explore</Button>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────── */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <h2 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
          WHAT WE DO
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

          {/* Hackathons */}
          <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }} className="group">
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80')",
              backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.7,
              transition: 'opacity 0.4s, transform 0.4s',
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hackathons</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '280px' }}>
                Blitz-scale your ideas from concept to production in 36-hour cycles of pure engineering focus.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div style={{ backgroundColor: '#A7A5FF', minHeight: '340px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ width: '48px', height: '48px', border: '2px solid rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'monospace', color: '#0E0E0E', fontWeight: 700, fontSize: '1rem' }}>&gt;_</span>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#0E0E0E', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Projects</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(0,0,0,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Open-source primitives for the kinetic web. Built by the community, for the future.
              </p>
            </div>
          </div>

          {/* Community */}
          <div style={{ backgroundColor: '#FF7439', minHeight: '340px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(0,0,0,0.3)">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#0E0E0E', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Community</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(0,0,0,0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Connect with like-minded developers, share knowledge, and grow together in a supportive environment of builders.
              </p>
            </div>
          </div>

          {/* Workshops */}
          <div style={{ position: 'relative', minHeight: '340px', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80')",
              backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.7,
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '2rem' }}>
              <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Workshops</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '280px' }}>
                Get expert guidance on your software journey, to fuel up your preparation for future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────── */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          UPCOMING EVENTS
        </h2>
        <div style={{ width: '5rem', height: '3px', backgroundColor: '#A7A5FF', marginBottom: '3rem' }} />

        <Link to="/events" style={{ textDecoration: 'none', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', transition: 'border-color 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
        >
          <div style={{ width: '160px', height: '120px', flexShrink: 0, overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80" alt="Hack & Ship" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FF7439', marginBottom: '0.5rem' }}>APR 17-19, 2026</p>
            <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.5rem', marginBottom: '0.75rem' }}>HACK &amp; SHIP</h3>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '600px' }}>
              A 36-hour hackathon to not just build demo projects, but to build those rough ideas into a real world project, through guidance from experienced mentors and community development.
            </p>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem', flexShrink: 0 }}>↗</span>
        </Link>
      </section>

      {/* ── WHY DEVVIT ───────────────────────────────────── */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '3rem', letterSpacing: '-0.02em' }}>
              WHY DEVVIT
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', listStyle: 'none' }}>
              {whyDevvit.map(item => (
                <li key={item.num} style={{ display: 'flex', gap: '1.5rem' }}>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', fontWeight: 700, color: '#A7A5FF', flexShrink: 0, marginTop: '2px' }}>{item.num}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Why Devvit" style={{ width: '100%', height: '450px', objectFit: 'cover', filter: 'grayscale(100%)' }} />
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────── */}
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-0.02em', fontSize: 'clamp(4rem, 11vw, 9rem)', marginBottom: '1.5rem' }}>
          JOIN DEVVIT
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.4)', fontSize: '1.125rem', marginBottom: '3rem' }}>
          The monolith is waiting for your contribution. Step into the kinetic stream.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="orange" size="lg" href="https://chat.whatsapp.com/IfGcfARdgSJE8KpSz3fraD">Join Community</Button>
          <Button variant="secondary" size="lg" href="https://luma.com/yq94wzmt">Register</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}