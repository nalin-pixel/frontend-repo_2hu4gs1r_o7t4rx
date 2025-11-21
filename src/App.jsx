import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Portfolio />
      <CTA />
    </div>
  )
}

export default App
