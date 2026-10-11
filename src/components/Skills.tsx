import Reveal from './Reveal'
import { education, skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Education and technical skills</p>
          <h2 className="text-3xl md:text-4xl mb-12 max-w-2xl">Background and toolkit.</h2>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
          <Reveal>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-muted">{e.degree}</p>
                  <p className="font-mono text-xs text-muted mt-1">
                    {e.period} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="space-y-8">
            {skillGroups.map((group, idx) => (
              <Reveal key={group.name} delay={idx * 40}>
                <div className="grid sm:grid-cols-[10rem_1fr] gap-2">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary pt-1">{group.name}</h3>
                  <p className="text-ink/85 leading-relaxed">{group.skills.join(' · ')}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
