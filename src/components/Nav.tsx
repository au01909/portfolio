import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/portfolio'

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#trust', label: 'Trustworthy AI' },
  { href: '#product', label: 'Product' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
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
      navigate('/')
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 80)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#main')?.scrollIntoView()
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-bg focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-content flex items-center justify-between h-16">
        <Link to="/" className="font-mono text-sm tracking-tight text-ink" onClick={() => {
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label="Home, back to top"
        >
          <span className="text-primary">~/</span>
          {profile.name.split(' ')[0].toLowerCase()}
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => goTo(l.href)}
                className="eyebrow whitespace-nowrap text-ink/80 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden lg:inline-flex items-center gap-2 whitespace-nowrap border border-ink/20 px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
        >
          Get in touch
        </a>

        <button
          className="lg:hidden font-mono text-xs border border-border px-4 py-2.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
        >
          {open ? 'close' : 'menu'}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="lg:hidden bg-bg border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <button onClick={() => goTo(l.href)} className="eyebrow py-2">
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
