import { profile, projects } from '../data/portfolio'

const scrollTo = (sel: string) => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

const proof = ['trademirror', 'repo-copilot', 'cardiovision']
  .map((slug) => projects.find((p) => p.slug === slug)!)

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="container-content">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-14 items-end">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-5 text-primary">Bengaluru, India · B.E. AI &amp; ML, graduated 2026</p>
            <h1 className="text-[2.5rem] leading-[1.05] sm:text-6xl md:text-[4rem] font-medium tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-primary font-display">{profile.headline}</p>
            <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">{profile.intro}</p>
            <p className="mt-4 text-base text-muted max-w-2xl leading-relaxed">{profile.statement}</p>
            <p className="mt-6 quote text-2xl text-ink">{profile.principle.join(' ')}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('#projects')}
                className="bg-primary text-bg px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Selected work
              </button>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink/25 px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                GitHub ↗
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="border border-ink/25 px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <aside
            aria-labelledby="proof-heading"
            className="animate-fadeUp border border-border bg-surface/50 p-6"
            style={{ animationDelay: '150ms' }}
          >
            <h2 id="proof-heading" className="eyebrow text-muted mb-4">Start with the evidence</h2>
            <ul className="divide-y divide-border">
              {proof.map((p) => (
                <li key={p.slug} className="py-4 first:pt-0 last:pb-0">
                  <a href={`#/projects/${p.slug}`} className="group block">
                    <span className="font-display text-lg text-ink group-hover:text-primary transition-colors">{p.title}</span>
                    <span className="block text-sm text-muted mt-1 leading-snug">{p.tagline}</span>
                  </a>
                  <p className="mt-2 font-mono text-[11px] text-muted flex flex-wrap gap-x-4">
                    {p.links.slice(0, 2).map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
