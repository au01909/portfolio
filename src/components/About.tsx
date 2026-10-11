import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border bg-surface/40 scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-primary mb-4">About</p>
          <h2 className="text-3xl md:text-4xl mb-8 max-w-2xl">Software first, with AI and product judgment.</h2>
        </Reveal>
        <Reveal delay={60}>
          <div className="space-y-5 text-lg text-muted leading-relaxed max-w-3xl">
            <p>
              I studied Artificial Intelligence and Machine Learning, but most of what I enjoy is ordinary software
              engineering: services, data pipelines, and tests that catch the failure before a user does. At Zeta I tested
              payment and rewards microservices, wrote Java API automation, and traced production issues through logs and
              PostgreSQL.
            </p>
            <p>
              On the AI side I build agentic and LLM applications with a bias toward things I can check: retrieval that
              cites its sources, tools with narrow permissions, structured output that is validated, and a fallback for when
              the model is wrong or unavailable. Evaluation and security are part of the build, not a final step.
            </p>
            <p>
              Before writing code I try to ask whether the problem is worth solving and how I would know the solution helped.
              That habit comes from writing product case studies, and it is why my projects state what they do not prove.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
