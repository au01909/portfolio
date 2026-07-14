import Reveal from './Reveal'
import { hobbies, leadership } from '../data/portfolio'

export default function Leadership() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">05 · Leadership & Hobbies</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-3xl md:text-4xl mb-16 max-w-xl">Outside the IDE.</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14">
          <Reveal delay={80}>
            <ul className="space-y-5">
              {leadership.map((l) => (
                <li key={l} className="flex gap-4 text-muted leading-relaxed text-lg">
                  <span className="text-accent shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="border border-border bg-surface/50 p-7">
              <p className="eyebrow text-muted mb-5">Table tennis captain · state champion, twice</p>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((h) => (
                  <span key={h} className="font-mono text-[12px] border border-border px-3 py-1.5 bg-bg text-ink/80">
                    {h}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted mt-6 leading-relaxed">
                Competitive team sport, hackathons under deadline pressure, and structured programs like NCC and
                Scouts have shaped how I work: steady under pressure, comfortable leading a team, and used to
                iterating fast without losing discipline.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
