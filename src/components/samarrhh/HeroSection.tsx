'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ParticleCanvas from './ParticleCanvas'

/* ─── Animated counter for hero stats ─── */
function HeroCounter({
  target,
  suffix = '',
  prefix = '',
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 2200
    const steps = 70
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="stat-glow">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const heroStats = [
  { value: 20, suffix: '+', label: 'Años' },
  { value: 500, suffix: '+', label: 'Vacantes Cubiertas' },
  { value: 98, suffix: '%', label: 'Retención' },
  { value: 72, suffix: 'h', prefix: '<', label: 'Diagnóstico' },
]

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 0.5], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const midY = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const deepY = useTransform(scrollYProgress, [0, 0.5], [0, 150])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-premium"
    >
      {/* ── Parallax background layers ── */}
      <motion.div
        style={{ y: bgY }}
        className="parallax-layer absolute inset-0 grid-pattern"
      />
      <motion.div
        style={{ y: midY }}
        className="parallax-layer absolute inset-0 radial-glow-blue"
      />
      <motion.div
        style={{ y: deepY }}
        className="parallax-layer absolute inset-0 radial-glow-purple"
      />

      {/* ── Particle canvas ── */}
      <ParticleCanvas />

      {/* ── Main content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-24 sm:py-32"
      >
        {/* Pre-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            SAMA RR.HH — Consultoría Estratégica
          </span>
        </motion.div>

        {/* ── Massive headline (only h1 on page) ── */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-8 sm:mb-12"
        >
          <span className="block text-white">El Talento que</span>
          <span className="block gradient-text-animated">Transforma</span>
          <span className="block text-white">tu Empresa</span>
        </motion.h1>

        {/* ── Subheadline ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/50 leading-relaxed mb-12 sm:mb-16"
        >
          <span className="text-cyber-blue font-semibold">SAMA RR.HH</span> — Aliado
          estratégico en gestión de capital humano. Reclutamiento de precisión, nómina sin
          errores y equipos inplant que escalan operaciones.
        </motion.p>

        {/* ── Dual-path CTAs (glassmorphism cards) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-5 sm:gap-8 max-w-2xl mx-auto"
        >
          {/* CTA 1 — Soy Empresa */}
          <a
            href="#servicios"
            aria-label="Soy Empresa - Ver soluciones corporativas"
            className="btn-shockwave group relative flex-1 rounded-2xl bg-gradient-to-br from-cyber-blue/90 to-cyber-blue/60 px-8 py-7 sm:py-8 text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(0,210,255,0.25)]"
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight">
                Soy Empresa
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-medium">
                Soluciones a medida
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-white/80 text-xs font-medium group-hover:gap-3 transition-all duration-300">
                Ver soluciones
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </a>

          {/* CTA 2 — Soy Candidato */}
          <a
            href="#candidatos"
            aria-label="Soy Candidato - Buscar vacantes y enviar CV"
            className="btn-shockwave-purple group relative flex-1 rounded-2xl border border-neon-purple/50 px-8 py-7 sm:py-8 text-left transition-all duration-300 hover:scale-[1.03] hover:bg-neon-purple/10 hover:border-neon-purple/70 hover:shadow-[0_0_50px_rgba(157,78,221,0.15)]"
          >
            {/* Glass overlay */}
            <div className="absolute inset-0 rounded-2xl bg-white/[0.02] backdrop-blur-sm pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-bold text-neon-purple mb-1.5 tracking-tight">
                Soy Candidato
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-medium">
                Bolsa de empleo
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-neon-purple/70 text-xs font-medium group-hover:gap-3 transition-all duration-300">
                Buscar vacantes
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </a>
        </motion.div>

        {/* ── Animated counter stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-cyber-blue mb-1">
                <HeroCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="text-xs sm:text-sm text-white/40 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-14 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
