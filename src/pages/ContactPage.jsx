import React, { useState } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Button from '../components/shared/Button'

const team = [
  { name: 'N. Raghav',         role: 'Co-founder and Tech Lead',              quote: 'I like to shape what is yet uncertain into something that works.' },
  { name: 'Shreya Kailash',    role: 'Co-founder and Design Lead',            quote: "It's a pleasure owning the process of User Experience with this vibrant community." },
  { name: 'Shradha Chassatia', role: 'Product Manager',                       quote: 'I like working with diverse teams towards the same goal.' },
  { name: 'Sparsh Chandra',    role: 'Community and Outreach Lead',           quote: 'I like building things, making them work, and helping them grow.' },
  { name: 'Shri Harsan M',     role: 'Technical Lead & Community and Outreach', quote: 'Building systems that connect people and ideas together.' },
  { name: 'Piyush',            role: 'Design Lead',                           quote: "I'm grateful for the opportunity to have designed the visual identity of Devvit." },
  { name: 'Shristi Singh',     role: 'Content and Media Lead',                quote: 'I like turning ideas into stories people want to be part of.' },
]

const socials = [
  { label: 'Discord',   href: 'https://discord.gg/pP7RPk7hd',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.133 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/devvit.in?igsh=MXJyN2M1MTBldWl2dQ==',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { label: 'WhatsApp',  href: 'https://chat.whatsapp.com/IfGcfARdgSJE8KpSz3fraD',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/devvit/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
]

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: '7956a4f0-e12c-4792-81ca-04e1ea4581f1', ...form }),
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const inputStyle = {
    width: '100%', backgroundColor: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)', color: '#fff',
    fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', padding: '0.75rem 0',
    outline: 'none', transition: 'border-color 0.2s',
  }
  const labelStyle = {
    fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)',
    display: 'block', marginBottom: '0.5rem',
  }

  return (
    <div style={{ backgroundColor: '#0E0E0E', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '9rem 1.5rem 4rem' }}>
        <h1 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-0.02em', fontSize: 'clamp(3rem, 10vw, 7rem)', marginBottom: '1.5rem' }}>
          SAY <span style={{ color: '#A7A5FF' }}>HELLO</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '36rem', lineHeight: 1.7 }}>
          Whether you're building the next monolith or just curious about our engineering philosophy, our frequency is open.
        </p>
      </section>

      {/* Form + Connect */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div className="contact-grid">
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input type="text" placeholder="IDENTITY" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = 'rgba(167,165,255,0.6)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="PROTOCOL@DOMAIN.COM" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = 'rgba(167,165,255,0.6)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea placeholder="SHARE WHAT IS ON YOUR MIND..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} rows={5} required
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderBottomColor = 'rgba(167,165,255,0.6)'}
                onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.15)'}
              />
            </div>
            {status === 'sent'  && <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#A7A5FF' }}>Message sent!</p>}
            {status === 'error' && <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#FF7439' }}>Something went wrong.</p>}
            <div><Button variant="primary" size="lg" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Submit →'}</Button></div>
          </form>

          {/* Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FF7439', marginBottom: '1.25rem' }}>Connect With Us</p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    style={{ width: '44px', height: '44px', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.5)'; e.currentTarget.style.color='#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.45)' }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem', borderLeft: '3px solid #A7A5FF' }}>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem' }}>Mail us at</p>
              <a href="mailto:devvit.work@gmail.com" style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: 'clamp(1rem, 2vw, 1.25rem)', textDecoration: 'none', wordBreak: 'break-all' }}
                onMouseEnter={e => e.target.style.color='#A7A5FF'}
                onMouseLeave={e => e.target.style.color='#fff'}
              >devvit.work@gmail.com</a>
            </div>

            <div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#FF7439', marginBottom: '1rem' }}>Our Base</p>
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <iframe title="SRM Location" src="https://maps.google.com/maps?q=SRM+Institute+of+Science+and+Technology&output=embed" width="100%" height="200" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }} allowFullScreen loading="lazy" />
              </div>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', marginTop: '0.5rem' }}>Coordinates: 12.8230° N, 80.0444° E</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <h2 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>OUR TEAM</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', marginBottom: '3rem' }}>A small group of students passionate about technology.</p>
        <div className="team-grid" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          {team.map((member, i) => (
            <div key={member.name} style={{
              padding: '1.5rem',
              borderRight: (i + 1) % 4 !== 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              transition: 'background-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
            >
              <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A7A5FF', marginBottom: '1rem' }}>{member.role}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, fontStyle: 'italic' }}>"{member.quote}"</p>
            </div>
          ))}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.08)', transition: 'background-color 0.2s', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(255,255,255,0.03)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}
          >
            <div style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '1.25rem', marginBottom: '1rem' }}>+</div>
            <p style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>You?</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', lineHeight: 1.5 }}>We're always looking for kinetic talent.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
