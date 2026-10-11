import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'

export default function DeepDives() {
  const dives = projects.filter((p) => p.tier === 'flagship')
  return (
    <section id="deep-dives" className="py-20 md:py-28 border-t border-border bg-surface/40 scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Technical deep dives</p>
          <h2 className="text-3xl md:text-4xl mb-10 max-w-2xl">The engineering decisions, written down.</h2>
        </Reveal>
        <ul className="divide-y divide-border border-y border-border">
          {dives.map((p) => (
            <li key={p.slug}>
              <Reveal>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group grid md:grid-cols-[14rem_1fr_auto] gap-2 md:gap-8 py-5 items-baseline"
                >
                  <span className="font-display text-lg group-hover:text-primary transition-colors">{p.title}</span>
                  <span className="text-muted leading-snug">{p.decision}</span>
                  <span className="font-mono text-xs text-primary">read →</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
