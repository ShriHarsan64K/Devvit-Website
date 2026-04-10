import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Button from '../components/shared/Button'

const roles = [
  { title: 'Frontend Developer', type: 'Volunteer', desc: 'Help build and maintain the Devvit website and community tools.' },
  { title: 'Content Creator',    type: 'Volunteer', desc: 'Create engaging content for our social media and blog.' },
  { title: 'Event Coordinator',  type: 'Volunteer', desc: 'Help organize hackathons, workshops, and community events.' },
]

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0E', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '9rem 1.5rem 5rem' }}>
        <h1 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-0.02em', fontSize: 'clamp(3rem, 10vw, 7rem)', marginBottom: '1.5rem' }}>
          JOIN THE<br /><span style={{ color: '#A7A5FF' }}>TEAM</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '36rem', lineHeight: 1.7, marginBottom: '4rem' }}>
          We're looking for kinetic talent. People who build things, make them work, and help them grow.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {roles.map(role => (
            <div key={role.title}
              style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 'clamp(1.5rem, 3vw, 2rem)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', transition: 'border-color 0.3s, background-color 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(167,165,255,0.4)'; e.currentTarget.style.backgroundColor='rgba(255,255,255,0.02)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.backgroundColor='transparent' }}
            >
              <div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FF7439', display: 'block', marginBottom: '0.5rem' }}>{role.type}</span>
                <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: '#fff', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', marginBottom: '0.5rem' }}>{role.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{role.desc}</p>
              </div>
              <Button variant="secondary" size="md" to="/contact">Apply →</Button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
