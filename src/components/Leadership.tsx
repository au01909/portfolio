import Reveal from './Reveal'
import { freeTime, leadership, sports } from '../data/portfolio'

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 md:py-28 border-t border-border bg-surface/40 scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Leadership and sports</p>
          <h2 className="text-3xl md:text-4xl mb-4 max-w-2xl">How I work with people.</h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            Teams, deadlines and competition taught me more about working with others than any course. Here is what I did,
            and what it says about me.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {leadership.map((l, i) => (
            <Reveal key={l.title} delay={i * 60}>
              <article className="border border-border bg-bg p-6 h-full">
                <h3 className="font-display text-lg mb-3">{l.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{l.fact}</p>
                <p className="mt-4 text-sm text-ink border-l-2 border-primary pl-3 leading-relaxed">{l.shows}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
              Sports
            </h3>
            <p className="font-display text-2xl leading-snug mb-4">{sports.headline}</p>
            <ul className="space-y-2 text-muted leading-relaxed list-disc pl-5">
              {sports.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="mt-5 quote text-xl text-ink leading-snug">{sports.why}</p>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
              Free time
            </h3>
            <ul className="divide-y divide-border">
              {freeTime.map((f) => (
                <li key={f.name} className="py-3">
                  <span className="font-medium">{f.name}</span>
                  <span className="block text-sm text-muted">{f.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
