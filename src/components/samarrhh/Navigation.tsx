'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Diferenciadores', href: '#diferenciadores' },
  { label: 'Contacto', href: '#contacto' },
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
          <a href="#hero" className="flex items-center gap-3 group" aria-label="SAMA RR.HH - Inicio">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/favicon-source.png"
                alt="SAMA RR.HH Logo"
                width={40}
                height={40}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyber-blue/0 to-neon-purple/0 group-hover:from-cyber-blue/20 group-hover:to-neon-purple/20 transition-all duration-500" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-wider">
                SAMA<span className="gradient-text-static">RR.HH</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-cyber-blue transition-colors duration-300 tracking-wide uppercase font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-5 bg-white/10 mx-1" />
            {/* Dual path CTAs in nav */}
            <a
              href="#servicios"
              aria-label="Soy Empresa - Ver soluciones corporativas"
              className="text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-blue/10 text-cyber-blue border border-cyber-blue/20 hover:border-cyber-blue/40 hover:bg-cyber-blue/20 transition-all duration-300"
            >
              Empresas
            </a>
            <a
              href="#candidatos"
              aria-label="Soy Candidato - Buscar vacantes"
              className="text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-neon-purple/30 text-neon-purple hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-300"
            >
              Candidatos
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
            className="fixed inset-0 z-40 bg-dark-premium/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {/* Mobile menu logo */}
            <div className="mb-4">
              <Image
                src="/logo-sm.png"
                alt="SAMA RR.HH"
                width={180}
                height={60}
                className="object-contain opacity-80"
                priority
              />
            </div>
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-xl font-bold text-white/80 hover:text-cyber-blue transition-colors tracking-wide uppercase py-2"
              >
                {item.label}
              </motion.a>
            ))}
            {/* Mobile dual-path CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <motion.a
                href="#servicios"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-blue/80 text-white font-bold tracking-wide"
              >
                Soy Empresa
              </motion.a>
              <motion.a
                href="#candidatos"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-4 rounded-full border border-neon-purple/40 text-neon-purple font-bold tracking-wide"
              >
                Soy Candidato
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
