import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return (
      <>
        <Nav />
        <main className="pt-40 pb-32">
          <div className="container-content text-center">
            <p className="eyebrow text-primary mb-4">404</p>
            <h1 className="text-3xl mb-6">Project not found</h1>
            <Link to="/" className="text-primary underline underline-offset-4">
              Back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 pb-24">
        <div className="container-content">
          <Reveal>
            <Link to="/#projects" className="eyebrow text-muted hover:text-primary transition-colors">
              ← All projects
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow text-primary mt-8 mb-3">{project.period}</p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block max-w-3xl mb-6"
              >
                <h1 className="text-3xl md:text-5xl leading-tight border-b border-transparent hover:border-current transition-colors duration-200">
                  {project.title}
                </h1>
              </a>
            ) : (
              <h1 className="text-3xl md:text-5xl leading-tight max-w-3xl mb-6">
                {project.title}
              </h1>
            )}
            <p className="text-xl text-muted max-w-2xl leading-relaxed">{project.tagline}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-xs border border-border px-3 py-1.5 text-muted">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {project.detail?.stat && (
            <Reveal delay={140}>
              <div className="grid sm:grid-cols-3 gap-6 mt-14 border-y border-border py-10">
                {project.detail.stat.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl md:text-4xl font-display text-primary">{s.value}</p>
                    <p className="text-sm text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="grid md:grid-cols-[1.5fr_1fr] gap-14 mt-16">
            <div className="space-y-12">
              {project.detail ? (
                <>
                  <Reveal>
                    <p className="text-lg text-muted leading-relaxed">{project.detail.overview}</p>
                  </Reveal>
                  {project.detail.sections.map((s, i) => (
                    <Reveal key={s.heading} delay={i * 60}>
                      <div>
                        <h2 className="text-xl font-medium mb-3">{s.heading}</h2>
                        <p className="text-muted leading-relaxed">{s.body}</p>
                      </div>
                    </Reveal>
                  ))}
                </>
              ) : (
                <Reveal>
                  <div>
                    <h2 className="text-xl font-medium mb-4">Highlights</h2>
                    <ul className="space-y-3">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-muted leading-relaxed">
                          <span className="text-accent mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>

            <div className="space-y-8">
              {project.detail?.stack && (
                <Reveal delay={80}>
                  <div className="border border-border bg-surface/50 p-6">
                    <p className="eyebrow text-muted mb-5">Tech stack</p>
                    <dl className="space-y-3">
                      {project.detail.stack.map((row) => (
                        <div key={row.layer} className="flex justify-between gap-4 text-sm">
                          <dt className="text-muted font-mono text-xs pt-0.5">{row.layer}</dt>
                          <dd className="text-ink text-right">{row.tech}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              )}
              {project.detail && (
                <Reveal delay={120}>
                  <div className="border border-border bg-surface/50 p-6">
                    <p className="eyebrow text-muted mb-4">Key highlights</p>
                    <ul className="space-y-3">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-muted leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          <Reveal delay={100}>
            <div className="mt-24 pt-10 border-t border-border flex flex-wrap justify-between gap-6">
              <Link to={`/projects/${prev.slug}`} className="group max-w-xs">
                <p className="eyebrow text-muted mb-1">← Previous</p>
                <p className="text-ink group-hover:text-primary transition-colors">{prev.title}</p>
              </Link>
              <Link to={`/projects/${next.slug}`} className="group max-w-xs text-right ml-auto">
                <p className="eyebrow text-muted mb-1">Next →</p>
                <p className="text-ink group-hover:text-primary transition-colors">{next.title}</p>
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
