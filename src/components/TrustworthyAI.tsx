import Reveal from './Reveal'
import { practices } from '../data/portfolio'

export default function TrustworthyAI() {
  return (
    <section id="trust" className="py-20 md:py-28 border-t border-border bg-surface/40 scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">Engineering principles</p>
          <h2 className="text-3xl md:text-4xl mb-4 max-w-2xl">How I Build Trustworthy AI Systems</h2>
          <p className="text-muted max-w-2xl mb-12 leading-relaxed">
            Concrete practices I apply when building software and AI systems.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
              Secure software engineering
            </h3>
            <ul className="space-y-3 text-muted leading-relaxed list-disc pl-5">
              {practices.secure.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-4 pb-3 border-b border-border">
              AI safety and reliability
            </h3>
            <ul className="space-y-3 text-muted leading-relaxed list-disc pl-5">
              {practices.ai.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
