import React from 'react'
import { Camera, Aperture, Palette, Timer, Sparkles, MonitorSmartphone } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Portraits & Lifestyle',
    desc: 'Clean, modern portraits for creators and teams. Natural light or studio, tailored to your brand.',
  },
  {
    icon: Aperture,
    title: 'Product Photography',
    desc: 'Crisp, minimalist product shots optimized for web, marketplaces, and campaigns.',
  },
  {
    icon: Palette,
    title: 'Art Direction',
    desc: 'From moodboards to final delivery—styling, lighting, and composition end-to-end.',
  },
  {
    icon: Timer,
    title: 'Fast Turnaround',
    desc: 'Reliable timelines and streamlined feedback for stress-free shoots.',
  },
  {
    icon: Sparkles,
    title: 'Retouching & Color',
    desc: 'Professional retouching and consistent color grading across sets.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Social-Ready Delivery',
    desc: 'Optimized exports for web, print, and every platform you use.',
  },
]

export default function Features() {
  return (
    <section id="services" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_90%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h2>
          <p className="mt-3 text-white/70">A flexible set of packages designed for creators, startups, and brands.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/10 p-3 text-blue-300">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
