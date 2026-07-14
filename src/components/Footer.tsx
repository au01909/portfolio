import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-ink text-bg/50 py-8">
      <div className="container-content flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React, Vite &amp; Tailwind</span>
      </div>
    </footer>
  )
}
