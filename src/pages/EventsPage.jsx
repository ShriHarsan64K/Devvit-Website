import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Button from '../components/shared/Button'

const upcoming = [
  {
    id: 1,
    date: 'APR 17-19, 2026',
    title: 'HACK & SHIP',
    desc: 'A 36-hour hackathon to not just build demo projects, but to build those rough ideas into a real world project, through guidance from experienced mentors and community development.',
    tags: ['Hackathon', 'In-Person'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
  },
]

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: '#0E0E0E', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '9rem 1.5rem 4rem' }}>
        <h1 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 900, color: '#fff', lineHeight: 0.92, letterSpacing: '-0.02em', fontSize: 'clamp(3.5rem, 10vw, 7rem)', marginBottom: '1.5rem' }}>
          UPCOMING<br />
          <span style={{ color: '#A7A5FF' }}>EVENTS</span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', maxWidth: '36rem', lineHeight: 1.7 }}>
          Where builders ship real things. No demo projects — only production.
        </p>
      </section>

      {/* Upcoming */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', whiteSpace: 'nowrap' }}>
            Upcoming Events
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(167,165,255,0.2)' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {upcoming.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function EventCard({ event, past = false }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered && !past ? 'rgba(167,165,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        backgroundColor: hovered && !past ? 'rgba(255,255,255,0.02)' : 'transparent',
        transition: 'all 0.3s',
      }}
    >
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flex: 1 }}>
        {event.image && (
          <div style={{ width: '120px', height: '90px', flexShrink: 0, overflow: 'hidden' }}>
            <img src={event.image} alt={event.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)', transition: 'filter 0.5s' }}
            />
          </div>
        )}
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: past ? 'rgba(255,255,255,0.3)' : '#FF7439', marginBottom: '0.5rem' }}>
            {event.date}
          </p>
          <h3 style={{ fontFamily: 'Lexend, sans-serif', fontWeight: 700, color: hovered && !past ? '#A7A5FF' : (past ? 'rgba(255,255,255,0.4)' : '#fff'), fontSize: '1.5rem', marginBottom: '0.75rem', transition: 'color 0.2s' }}>
            {event.title}
          </h3>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '600px' }}>
            {event.desc}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {event.tags.map(t => (
              <span key={t} style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.75rem', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      {!past && (
        <div style={{ flexShrink: 0 }}>
          <Button variant="primary" size="md" href="https://luma.com/yq94wzmt">Register →</Button>
        </div>
      )}
    </div>
  )
}