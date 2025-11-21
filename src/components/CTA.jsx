import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_0%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s create something clean and memorable</h3>
              <p className="mt-2 text-white/70">Tell me about your project—timeline, goals, and aesthetic. I’ll reply within 24 hours.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="mailto:hello@blueframe.studio" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-100">
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Blue Frame Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
