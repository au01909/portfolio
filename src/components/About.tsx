import Reveal from './Reveal'
import { education, profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">01 · About</p>
        </Reveal>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-14">
          <div>
            <Reveal>
              <p className="quote text-2xl md:text-3xl text-ink leading-snug mb-6">
                “I like understanding how systems actually work — then finding the failure modes before a user
                does.”
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-5 text-lg text-muted leading-relaxed max-w-2xl">
                <p>
                  I'm an applied machine learning engineer and software test engineer, working across two things
                  that don't usually sit in the same job description: building AI systems, and making sure
                  software actually behaves the way it's supposed to under real conditions.
                </p>
                <p>
                  On the ML side, that means predictive models, evaluation harnesses, and agentic systems built on
                  RAG and LLM fine-tuning. On the QA side, it means Java and REST Assured automation suites that
                  hold up high-volume, distributed, event-driven payment systems. Lately I've been combining the
                  two — using AI-assisted, agentic workflows to make testing itself faster without cutting corners
                  on rigor.
                </p>
                <p>
                  I have a strong foundation in algorithms, distributed systems, and networking, and I'm most
                  comfortable when I'm translating an ambiguous, real-world problem into something measurable and
                  testable. I use AI tools to move quickly, but I keep engineering discipline in the loop —
                  evaluation, root-cause analysis, and reproducibility aren't optional steps to me.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <span
                    key={i}
                    className="font-mono text-[12px] border border-border px-3 py-1.5 text-muted bg-surface/60"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="border border-border bg-surface/50 p-7">
              <p className="eyebrow text-muted mb-5">Quick facts</p>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="font-mono text-[11px] text-muted uppercase tracking-wide">Based in</dt>
                  <dd className="mt-1 text-ink">{profile.location}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted uppercase tracking-wide">Currently</dt>
                  <dd className="mt-1 text-ink">Graduate Intern, Software Test Engineering — Zeta</dd>
                </div>
                {education.map((e) => (
                  <div key={e.school}>
                    <dt className="font-mono text-[11px] text-muted uppercase tracking-wide">Education</dt>
                    <dd className="mt-1 text-ink">{e.school}</dd>
                    <dd className="text-muted">{e.degree}</dd>
                    <dd className="text-muted font-mono text-xs mt-0.5">
                      {e.period} · {e.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
