import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import EventsPage  from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={<LandingPage />} />
      <Route path="/about"   element={<LandingPage />} />
      <Route path="/events"  element={<EventsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
    </Routes>
  )
}
