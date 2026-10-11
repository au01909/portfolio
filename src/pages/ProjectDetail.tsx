import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { ArchitectureDiagram } from '../components/CaseStudy'
import { projects } from '../data/portfolio'
import { useTitle } from '../useTitle'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug && p.detail)
  useTitle(project ? `${project.title} — case study · Aryan Uppuganti` : 'Not found · Aryan Uppuganti')

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project || !project.detail) {
    return (
      <>
        <Nav />
        <main id="main" className="pt-40 pb-32">
          <div className="container-content text-center">
            <p className="eyebrow text-primary mb-4">404</p>
            <h1 className="text-3xl mb-6">Case study not found</h1>
            <Link to="/" className="text-primary underline underline-offset-4">
              Back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const detail = project.detail
  const flagships = projects.filter((p) => p.detail)
  const idx = flagships.findIndex((p) => p.slug === slug)
  const prev = flagships[(idx - 1 + flagships.length) % flagships.length]
  const next = flagships[(idx + 1) % flagships.length]
  const backToWork = () => {
    navigate('/')
    setTimeout(() => document.querySelector('#projects')?.scrollIntoView(), 80)
  }

  return (
    <>
      <Nav />
      <main id="main" className="pt-32 md:pt-40 pb-24">
        <div className="container-content">
          <button onClick={backToWork} className="eyebrow text-muted hover:text-primary transition-colors">
            ← All work
          </button>

          <p className="eyebrow text-primary mt-8 mb-3">Case study · {project.period}</p>
          <h1 className="text-4xl md:text-6xl leading-tight max-w-3xl mb-5">{project.title}</h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">{project.tagline}</p>

          <p className="mt-6 text-sm flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((l) => (
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

          {project.caveat && (
            <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 text-sm text-ink/85 leading-relaxed">{project.caveat}</p>
          )}

          <dl className="grid md:grid-cols-3 gap-8 mt-12 border-y border-border py-8">
            {[
              ['User problem', project.problem],
              ['My contribution', project.contribution],
              ['Key decision', project.decision],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">{k}</dt>
                <dd className="mt-2 leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>

          {project.image && (
            <Reveal>
              <figure className="mt-14">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.src}`}
                  alt={project.image.alt}
                  width={1360}
                  height={860}
                  loading="lazy"
                  className="w-full h-auto border border-border"
                />
                <figcaption className="text-sm text-muted mt-3">
                  Screenshot of the deployed app using its built-in sample data.
                </figcaption>
              </figure>
            </Reveal>
          )}

          {project.architecture && (
            <Reveal>
              <div className="mt-14">
                <ArchitectureDiagram arch={project.architecture} />
              </div>
            </Reveal>
          )}

          <div className="mt-16 max-w-3xl space-y-12">
            <p className="text-lg text-muted leading-relaxed">{detail.overview}</p>

            <section aria-labelledby="highlights-h">
              <h2 id="highlights-h" className="text-xl font-medium mb-3">Highlights</h2>
              <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>

            {detail.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-medium mb-3">{s.heading}</h2>
                <p className="text-muted leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-14 font-mono text-xs text-muted">Built with: {project.tech.join(' · ')}</p>

          <div className="mt-16 pt-10 border-t border-border flex flex-wrap justify-between gap-6">
            <Link to={`/projects/${prev.slug}`} className="group max-w-xs">
              <p className="eyebrow text-muted mb-1">← Previous</p>
              <p className="text-ink group-hover:text-primary transition-colors">{prev.title}</p>
            </Link>
            <Link to={`/projects/${next.slug}`} className="group max-w-xs text-right ml-auto">
              <p className="eyebrow text-muted mb-1">Next →</p>
              <p className="text-ink group-hover:text-primary transition-colors">{next.title}</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
