import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const lines = [
  { cmd: 'whoami', out: 'Aryan Uppuganti — Software Engineer' },
  { cmd: 'cat role.txt', out: 'Graduate Intern, Software Test Engineering @ Zeta' },
  { cmd: 'cat focus.txt', out: 'AI systems · Test automation · Backend for distributed systems' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    if (mq.matches) {
      setVisibleLines(lines.length)
      return
    }
    let i = 0
    const step = () => {
      i += 1
      setVisibleLines(i)
      if (i < lines.length) setTimeout(step, 420)
    }
    const start = setTimeout(step, 300)
    return () => clearTimeout(start)
  }, [])

  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container-content">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-5 text-primary">Bengaluru, India · Available for full-time roles</p>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem] font-medium tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted max-w-xl leading-snug">
              I build <span className="text-ink">AI systems</span> and{' '}
              <span className="text-ink">test automation frameworks</span> for distributed, production
              environments — and I like understanding how the pieces underneath actually work.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-bg px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                View projects
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-ink/25 px-6 py-3 text-sm font-medium tracking-wide hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* signature terminal panel */}
          <div
            className="animate-fadeUp bg-ink text-bg/90 rounded-sm border border-ink/10 shadow-[0_20px_60px_-20px_rgba(31,36,33,0.35)] font-mono text-[13px] leading-relaxed"
            style={{ animationDelay: '150ms' }}
            aria-hidden={reduced ? undefined : 'true'}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-bg/10">
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-bg/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-bg/30" />
              <span className="ml-3 text-bg/50 text-[11px] tracking-wide">session — aryan@zeta</span>
            </div>
            <div className="p-5 min-h-[168px]">
              {lines.slice(0, visibleLines).map((l, idx) => (
                <div key={l.cmd} className={idx > 0 ? 'mt-3' : ''}>
                  <p>
                    <span className="text-accent/90">$</span> {l.cmd}
                  </p>
                  <p className="text-bg/70 mt-1">{l.out}</p>
                </div>
              ))}
              <span
                className={`inline-block w-2 h-4 align-middle bg-bg/70 mt-3 ${!reduced ? 'animate-blink' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
