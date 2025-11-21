import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_20%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_70%,rgba(2,6,23,0.9)_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top navigation */}
        <header className="fixed left-0 right-0 top-0 z-20">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 px-5 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]" />
                <span className="font-semibold tracking-tight">Blue Frame Studio</span>
              </div>
              <nav className="hidden gap-6 text-sm md:flex">
                <a href="#portfolio" className="text-white/80 transition hover:text-white">Portfolio</a>
                <a href="#services" className="text-white/80 transition hover:text-white">Services</a>
                <a href="#contact" className="text-white/80 transition hover:text-white">Contact</a>
              </nav>
              <a href="#contact" className="hidden rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 md:block">Book a shoot</a>
            </div>
          </div>
        </header>

        {/* Hero center */}
        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              Camera. Creativity. Minimalist Aesthetic.
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Modern photography for brands and people
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
              I craft clean, contemporary visuals—products, portraits, and events—blending art direction with technology to tell your story.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#portfolio" className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-100 sm:w-auto">
                View portfolio
              </a>
              <a href="#contact" className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto">
                Book a shoot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
