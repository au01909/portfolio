import { useState } from 'react'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — mailto link still works
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border bg-ink text-bg scroll-mt-16">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-bg/70 mb-4">Contact</p>
        </Reveal>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 items-end">
          <div>
            <Reveal delay={60}>
              <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">
                Building something where correctness and trust matter? I'd like to hear about it.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="bg-bg text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="font-mono text-xs border border-bg/30 px-4 py-3 hover:border-accent hover:text-accent transition-colors"
                >
                  {copied ? 'copied ✓' : 'copy email'}
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="flex flex-col gap-4 font-mono text-sm md:items-end">
              {[
                ['LinkedIn', profile.links.linkedin],
                ['GitHub', profile.links.github],
                ['LeetCode', profile.links.leetcode],
                ['Medium', profile.links.medium],
                ['Notion', profile.links.notion],
              ].map(([label, url]) => (
                <a key={url} href={url} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                  {label} ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
              <a href="tel:+917975612469" className="hover:text-accent transition-colors">
                {profile.phone}
              </a>
              <span className="text-bg/70">{profile.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
