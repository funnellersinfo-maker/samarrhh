'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'
import Core3DNode from './Core3DNode'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 0.5], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-premium"
    >
      {/* Parallax background layers */}
      <motion.div
        style={{ y: bgY }}
        className="parallax-layer absolute inset-0 grid-pattern"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 100]) }}
        className="parallax-layer absolute inset-0 radial-glow-blue"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 150]) }}
        className="parallax-layer absolute inset-0 radial-glow-purple"
      />

      {/* Particles */}
      <ParticleCanvas />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-24 sm:py-32"
      >
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            Biohacking Corporativo 2026
          </span>
        </motion.div>

        {/* Main title */}
        <h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-10 sm:mb-14"
        >
          <span className="block text-white">El Talento</span>
          <span className="block gradient-text-animated">Correcto</span>
          <span className="block text-white">Escala Imperios</span>
        </h1>

        {/* 3D Core Node */}
        <div className="my-12 sm:my-16 lg:my-20">
          <Core3DNode />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/50 leading-relaxed mb-12 sm:mb-16"
        >
          No reclutamos personal. <span className="text-cyber-blue">Decodificamos talento humano</span> para
          construir equipos que no fallan. Tu próximo líder está en nuestra red.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          <a
            href="#cta"
            aria-label="Conectar talento - Contactar a SAMA RR.HH"
            className="btn-shockwave group relative px-10 py-5 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-blue/80 text-white font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,210,255,0.3)] min-w-[220px] sm:min-w-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Conectar Talento
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            aria-label="Auditar mi empresa - Ver servicios"
            className="btn-shockwave-purple group px-10 py-5 rounded-full border border-neon-purple/40 text-neon-purple font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-neon-purple/10 hover:border-neon-purple/60 min-w-[220px] sm:min-w-0"
          >
            <span className="flex items-center justify-center gap-2">
              Auditar mi Empresa
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator - positioned well below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
