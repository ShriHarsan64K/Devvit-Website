import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import EventsPage  from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'

// Cursor glow effect
function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return (
    <div className="cursor-glow" style={{ left: pos.x, top: pos.y }} />
  )
}

// Page transition wrapper
function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 20)
    return () => clearTimeout(t)
  }, [])
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
    }}>
      {children}
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])

  return (
    <PageWrapper key={location.pathname}>
      <Routes location={location}>
        <Route path="/"        element={<LandingPage />} />
        <Route path="/about"   element={<LandingPage />} />
        <Route path="/events"  element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </PageWrapper>
  )
}

export default function App() {
  return (
    <>
      <CursorGlow />
      <AnimatedRoutes />
    </>
  )
}
