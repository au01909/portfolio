import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">03 · Projects</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-3xl md:text-4xl mb-16 max-w-xl">Things I've built, end to end.</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, idx) => (
            <Reveal key={p.slug} delay={(idx % 2) * 80}>
              <Link
                to={`/projects/${p.slug}`}
                className="group block h-full border border-border bg-surface/40 p-7 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-mono text-xs text-muted">{p.period}</span>
                  <span className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    view case →
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-3 leading-snug">{p.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{p.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {p.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="text-sm text-muted flex gap-2.5 leading-relaxed">
                      <span className="text-accent shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-muted border border-border px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-16">
            <p className="eyebrow text-muted mb-5">More projects</p>
            <div className="border-t border-border">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="flex flex-wrap items-center justify-between gap-3 py-4 border-b border-border hover:pl-2 transition-all group"
                >
                  <div>
                    <span className="font-medium text-ink group-hover:text-primary transition-colors">
                      {p.title}
                    </span>
                    <span className="text-muted"> — {p.tagline}</span>
                  </div>
                  <span className="font-mono text-xs text-muted shrink-0">{p.period}</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
