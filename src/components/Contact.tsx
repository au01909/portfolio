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
    <section id="contact" className="py-24 md:py-32 border-t border-border bg-ink text-bg">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow text-accent mb-4">06 · Contact</p>
        </Reveal>
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-14 items-end">
          <div>
            <Reveal delay={60}>
              <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">
                Working on something worth building? I'd like to hear about it.
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
              <a href={profile.links.linkedin} className="hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.links.github} className="hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.links.leetcode} className="hover:text-accent transition-colors" target="_blank" rel="noreferrer">
                LeetCode ↗
              </a>
              <span className="text-bg/50">{profile.phone}</span>
              <span className="text-bg/50">{profile.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
