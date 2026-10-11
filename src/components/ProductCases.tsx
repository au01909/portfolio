import Reveal from './Reveal'
import { productCases, productSkills, profile } from '../data/portfolio'

const Row = ({ label, children }: { label: string; children: string }) => (
  <div className="grid sm:grid-cols-[9rem_1fr] gap-x-4 gap-y-1">
    <dt className="font-mono text-[11px] uppercase tracking-wide text-muted pt-0.5">{label}</dt>
    <dd className="text-sm text-ink/90 leading-relaxed">{children}</dd>
  </div>
)

export default function ProductCases() {
  return (
    <section id="product" className="py-20 md:py-28 border-t border-border scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Product thinking in practice</p>
          <h2 className="text-3xl md:text-4xl mb-4 max-w-2xl">Product case studies.</h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            Every write-up uses one template: the user’s problem, the evidence, a proposal, a metric and the first test.
          </p>
        </Reveal>

        <div className="space-y-6">
          {productCases.map((c) => (
            <Reveal key={c.title}>
              <article className="border border-border p-6 md:p-7">
                <p className="eyebrow text-muted mb-2">{c.kind}</p>
                <h3 className="text-xl font-medium mb-5">{c.title}</h3>
                <dl className="space-y-3">
                  <Row label="Problem">{c.question}</Row>
                  <Row label="Evidence">{c.evidence}</Row>
                  <Row label="Proposal">{c.recommendation}</Row>
                  <Row label="Metric">{c.metric}</Row>
                  <Row label="First test">{c.experiment}</Row>
                </dl>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-sm underline underline-offset-4 hover:text-primary"
                >
                  {c.cta} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="text-xl font-medium mt-14 mb-6">Product management skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {productSkills.map((g) => (
              <div key={g.group}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-3 pb-3 border-b border-border">
                  {g.group}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((k) => (
                    <li key={k} className="text-sm text-ink/85 border border-border bg-bg px-2.5 py-1">
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-sm text-muted">
            Longer reasoning lives in my{' '}
            <a href={profile.links.notion} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">
              Notion portfolio ↗
            </a>{' '}
            and on{' '}
            <a href={profile.links.medium} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">
              Medium ↗
            </a>
            ; this page keeps the summaries and the evidence.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
