import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (href: string) => {
    setOpen(false)
    if (onHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <Link to="/" className="font-mono text-sm tracking-tight text-ink" onClick={() => setOpen(false)}>
          <span className="text-primary">~/</span>
          {profile.name.split(' ')[0].toLowerCase()}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => goTo(l.href)}
                className="eyebrow text-ink/80 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center gap-2 border border-ink/20 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
        >
          Get in touch
        </a>

        <button
          className="md:hidden font-mono text-xs border border-border px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-bg border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => goTo(l.href)} className="eyebrow">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`} className="eyebrow text-primary">
              Email me
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
