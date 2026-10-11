import Reveal from './Reveal'
import { projects } from '../data/portfolio'

export default function SupportingProjects() {
  const rest = projects.filter((p) => p.tier === 'supporting')
  return (
    <section id="more-projects" className="py-20 md:py-28 border-t border-border scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Supporting projects</p>
          <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">Smaller builds and experiments.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {rest.map((p) => (
            <Reveal key={p.slug}>
              <article className="border-t border-border pt-5 h-full">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <span className="font-mono text-xs text-muted">{p.period}</span>
                </div>
                <p className="text-muted mt-1 leading-snug">{p.tagline}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted list-disc pl-5">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {p.caveat && <p className="mt-3 text-sm text-ink/80 border-l-2 border-accent pl-3">{p.caveat}</p>}
                <p className="mt-3 font-mono text-xs flex flex-wrap gap-x-4 text-muted">
                  <span>{p.tech.join(' · ')}</span>
                </p>
                {p.links.length > 0 && (
                  <p className="mt-3 text-sm flex flex-wrap gap-x-5">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        {l.label} ↗<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
