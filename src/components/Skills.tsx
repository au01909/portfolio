import Reveal from './Reveal'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border bg-surface/40">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">04 · Skills</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-3xl md:text-4xl mb-16 max-w-xl">The stack I reach for.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.name} delay={(idx % 3) * 70}>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
                  {group.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="text-sm text-ink/85 border border-border px-2.5 py-1 bg-bg hover:border-accent hover:text-accent transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
