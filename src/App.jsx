import React from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Button from './components/shared/Button'
import Card from './components/shared/Card'

export default function App() {
  return (
    <div className="bg-devvit-bg min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col gap-16">
        {/* Buttons */}
        <section className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="orange">Orange</Button>
          <Button variant="ghost">Ghost</Button>
        </section>
        {/* Feature Cards */}
        <section className="grid grid-cols-2 gap-4">
          <Card variant="feature" title="Hackathons" description="Blitz-scale your ideas in 36-hour cycles." />
          <Card variant="feature" title="Projects" subtitle="Open Source" description="Built by the community, for the future." />
        </section>
        {/* Event Card */}
        <section>
          <Card variant="event" title="Hack & Ship" date="APR 17-19, 2026" description="A 36-hour hackathon to build real world projects." />
        </section>
        {/* Team Cards */}
        <section className="grid grid-cols-3 gap-4">
          <Card variant="team" name="N. Raghav" role="Co-founder and Tech Lead" quote="I like to shape what is yet uncertain into something that works." />
          <Card variant="team" name="Shreya Kailash" role="Co-founder and Design Lead" quote="It's a pleasure owning the process of User Experience." />
          <Card variant="team" name="Shradha Chassatia" role="Product Manager" quote="I like working with diverse teams towards the same goal." />
        </section>
      </main>
      <Footer />
    </div>
  )
}