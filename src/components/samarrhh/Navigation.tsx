'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'El Problema', href: '#pain' },
  { label: 'Solución', href: '#solution' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#cta' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-neon-purple/20 group-hover:from-cyber-blue/40 group-hover:to-neon-purple/40 transition-all duration-500" />
              <span className="relative text-lg font-bold gradient-text-static">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-wider">
                SAMA<span className="gradient-text-static">RR.HH</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-cyber-blue transition-colors duration-300 tracking-wide uppercase font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-shockwave px-6 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-neon-purple text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            >
              Conectar Talento
            </a>
          </div>

          {/* Mobile Hamburger */}
            <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-premium/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold text-white/80 hover:text-cyber-blue transition-colors tracking-wide uppercase py-2"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn-shockwave mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-cyber-blue to-neon-purple text-white font-semibold tracking-wide text-lg"
            >
              Conectar Talento
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
