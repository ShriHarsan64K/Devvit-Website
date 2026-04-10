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
    <div className="bg-[#0E0E0E] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-36 pb-16">
        <h1 className="font-lexend font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          JOIN THE<br /><span className="text-[#A7A5FF]">TEAM</span>
        </h1>
        <p className="font-inter text-white/50 text-lg max-w-xl mb-16">
          We're looking for kinetic talent. People who build things, make them work, and help them grow.
        </p>

        <div className="flex flex-col gap-4">
          {roles.map(role => (
            <div key={role.title} className="border border-white/10 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#A7A5FF]/40 transition-colors group">
              <div>
                <span className="font-grotesk text-xs font-bold uppercase tracking-widest text-[#FF7439] mb-2 block">{role.type}</span>
                <h3 className="font-lexend font-bold text-white text-xl mb-2 group-hover:text-[#A7A5FF] transition-colors">{role.title}</h3>
                <p className="font-inter text-sm text-white/50">{role.desc}</p>
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
