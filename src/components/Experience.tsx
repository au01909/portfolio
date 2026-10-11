import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const passed = vh - rect.top
      const pct = Math.min(1, Math.max(0, passed / total))
      setProgress(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-border scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Professional experience</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-3xl md:text-4xl mb-14 max-w-xl">Where I've worked, and what I shipped there.</h2>
        </Reveal>

        <div ref={sectionRef} className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block">
            <div
              className="w-px bg-primary origin-top transition-[height] duration-150 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-16">
            {experience.map((role, idx) => (
              <Reveal key={role.company} delay={idx * 80}>
                <div className="relative sm:pl-10">
                  <span className="hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-bg border-2 border-primary" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-1">
                    <h3 className="text-xl md:text-2xl font-medium text-ink">{role.company}</h3>
                    <span className="font-mono text-xs text-muted">
                      {role.period} · {role.mode}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{role.role}</p>
                  {role.note && <p className="text-sm text-muted mb-5">{role.note}</p>}
                  <ul className="space-y-3 max-w-3xl">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
