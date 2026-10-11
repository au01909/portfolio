import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { projects, type Project } from '../data/portfolio'

const Field = ({ label, children }: { label: string; children: string }) => (
  <div>
    <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">{label}</dt>
    <dd className="text-sm text-ink/90 leading-relaxed mt-1">{children}</dd>
  </div>
)


function ProjectLinks({ links }: { links: Project['links'] }) {
  return (
    <p className="mt-4 text-sm flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => (
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
  )
}

function CompactCard({ p }: { p: Project }) {
  return (
    <article className="border border-border bg-bg flex flex-col h-full">
      {p.image && (
        <img
          src={`${import.meta.env.BASE_URL}${p.image.src}`}
          alt={p.image.alt}
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full h-auto border-b border-border"
        />
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="font-display text-lg leading-snug">{p.title}</h4>
          <span className="font-mono text-xs text-muted">{p.period}</span>
        </div>
        <p className="mt-2 text-muted text-sm leading-relaxed">{p.tagline}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted list-disc pl-5">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-xs text-muted">{p.tech.join(' · ')}</p>
        <div className="mt-auto">
          <ProjectLinks links={p.links} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const flagship = projects.filter((p) => p.tier === 'flagship')
  const key = projects.filter((p) => p.tier === 'key')
  const client = projects.filter((p) => p.tier === 'client')

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Projects</p>
          <h2 className="text-3xl md:text-4xl mb-4 max-w-2xl">Selected work.</h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            Three in-depth case studies first, then more key projects and client work. Live demos and source are linked on every card.
          </p>
        </Reveal>

        <div className="space-y-6">
          {flagship.map((p) => (
            <Reveal key={p.slug}>
              <article className="border border-border bg-surface/40 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-medium">
                    <Link to={`/projects/${p.slug}`} className="hover:text-primary transition-colors">
                      {p.title}
                    </Link>
                  </h3>
                  <span className="font-mono text-xs text-muted">{p.period}</span>
                </div>
                <p className="text-lg text-muted leading-snug max-w-3xl mb-6">{p.tagline}</p>

                <dl className="grid md:grid-cols-3 gap-6 mb-6">
                  <Field label="User problem">{p.problem ?? ''}</Field>
                  <Field label="My contribution">{p.contribution ?? ''}</Field>
                  <Field label="A decision I'd defend">{p.decision ?? ''}</Field>
                </dl>

                <p className="font-mono text-xs text-muted mb-5">{p.tech.join(' · ')}</p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <Link
                    to={`/projects/${p.slug}`}
                    className="bg-primary text-bg px-4 py-2 font-medium hover:opacity-90 transition-opacity"
                  >
                    Read the case study
                  </Link>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mt-16 mb-6 pb-3 border-b border-border">
            More key projects
          </h3>
        </Reveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {key.map((p) => (
            <Reveal key={p.slug}>
              <CompactCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mt-16 mb-2 pb-3 border-b border-border">
            Client work
          </h3>
          <p className="text-sm text-muted mb-6">Freelance projects delivered for paying clients, live on the web.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {client.map((p) => (
            <Reveal key={p.slug}>
              <CompactCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
