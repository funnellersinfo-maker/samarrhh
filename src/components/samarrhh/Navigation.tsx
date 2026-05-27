'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Candidatos', href: '#candidatos' },
  { label: 'Contacto', href: '#contacto' },
]

const serviceLinks = [
  { label: 'Reclutamiento y Selección', href: '#reclutamiento' },
  { label: 'Administración de Personal', href: '#admin-personal' },
  { label: 'Inplant de RR.HH.', href: '#inplant' },
  { label: 'Psicometría', href: '#psicometria' },
  { label: 'Consultoría', href: '#consultoria' },
  { label: 'Outsourcing', href: '#outsourcing' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-corporate-blue text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+528122062283" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(81) 2206 2283</span>
            </a>
            <a href="mailto:contacto@samarrhh.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>contacto@samarrhh.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-200">Monterrey, NL, México</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo.png" alt="SAMA RR.HH" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-corporate-blue">SAMA</span>
              <span className="text-xl font-light text-corporate-blue-light ml-1">RR.HH</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.label === 'Servicios' ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-corporate-blue-light transition-colors py-2 flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  {/* Dropdown */}
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50">
                      {serviceLinks.map((sLink) => (
                        <a
                          key={sLink.href}
                          href={sLink.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-corporate-blue-light transition-colors"
                        >
                          {sLink.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-corporate-blue-light transition-colors py-2"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="#contacto"
              className="bg-corporate-blue-light hover:bg-corporate-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-corporate-blue"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-corporate-blue-light border-b border-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Servicios</p>
                {serviceLinks.map((sLink) => (
                  <a
                    key={sLink.href}
                    href={sLink.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-2 text-sm text-slate-600 hover:text-corporate-blue-light pl-3"
                  >
                    {sLink.label}
                  </a>
                ))}
              </div>
              <div className="pt-3">
                <a
                  href="#contacto"
                  onClick={() => setIsMobileOpen(false)}
                  className="block bg-corporate-blue-light text-white text-center px-5 py-3 rounded-lg text-sm font-semibold"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
