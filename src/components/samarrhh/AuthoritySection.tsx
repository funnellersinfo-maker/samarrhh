'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

/* ─── Animated counter that counts up when in viewport ─── */
function AnimatedCounter({
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
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

/* ─── Data ─── */
const authorityStats = [
  { value: 20, suffix: '+', label: 'Años de Experiencia' },
  { value: 500, suffix: '+', label: 'Empresas Confían' },
  { value: 15000, suffix: '+', label: 'Vacantes Cubiertas' },
  { value: 98, suffix: '%', label: 'Tasa de Retención' },
  { value: 72, suffix: 'h', prefix: '<', label: 'Tiempo de Diagnóstico' },
]

const clientLogos = [
  'Grupo Industrial Alpha',
  'TechCorp MX',
  'Logística Nacional',
  'Financiera del Norte',
  'AgroMX',
  'Constructora Premier',
]

const certifications = ['ISO 9001', 'STPS Certificado', 'ESR ®', 'Great Place to Work']

/* ─── Generic SVG logo placeholder ─── */
function LogoIcon({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyber-blue/10 to-neon-purple/10 border border-white/[0.06] flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract geometric shape */}
          <rect
            x="4"
            y="4"
            width="32"
            height="32"
            rx="8"
            stroke="url(#logoGrad)"
            strokeWidth="1.5"
          />
          <circle cx="14" cy="14" r="3" fill="#00d2ff" opacity="0.7" />
          <circle cx="26" cy="26" r="3" fill="#9d4edd" opacity="0.7" />
          <line
            x1="14"
            y1="14"
            x2="26"
            y2="26"
            stroke="url(#logoGrad)"
            strokeWidth="1"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
              <stop stopColor="#00d2ff" stopOpacity="0.6" />
              <stop offset="1" stopColor="#9d4edd" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-[10px] sm:text-xs text-white/40 font-medium tracking-wide text-center leading-tight max-w-[100px]">
        {name}
      </span>
    </div>
  )
}

/* ─── Main component ─── */
export default function AuthoritySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="autoridad"
      ref={sectionRef}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* ── Background effects ── */}
      <div className="absolute inset-0 radial-glow-blue" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            Autoridad & Confianza
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            <span className="block text-white">Respaldamos la Operación</span>
            <span className="block gradient-text-animated">de las Empresas que</span>
            <span className="block text-white">Lideran su Industria</span>
          </h2>
        </motion.div>

        {/* ── Animated stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-20 sm:mb-28">
          {authorityStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="glass-card group rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:border-cyber-blue/20 hover:shadow-[0_0_40px_rgba(0,210,255,0.08)]"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyber-blue mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="text-xs sm:text-sm text-white/40 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Client logos carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <p className="text-center text-xs sm:text-sm text-white/30 tracking-widest uppercase font-medium mb-10">
            Empresas que confían en nosotros
          </p>

          {/* Carousel wrapper with overflow */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-dark-premium to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-dark-premium to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="logo-carousel-track flex gap-8 sm:gap-12">
              {/* Duplicate logos for seamless loop */}
              {[...clientLogos, ...clientLogos].map((name, i) => (
                <div
                  key={i}
                  className="glass-card flex-shrink-0 rounded-xl px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-center min-w-[160px] sm:min-w-[190px] transition-all duration-300 hover:border-cyber-blue/20"
                >
                  <LogoIcon name={name} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Certifications / badges row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-center text-xs sm:text-sm text-white/30 tracking-widest uppercase font-medium mb-8">
            Certificaciones & Reconocimientos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
                className="glass-card rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center gap-2 transition-all duration-300 hover:border-cyber-blue/30 hover:shadow-[0_0_20px_rgba(0,210,255,0.06)]"
              >
                {/* Shield / badge icon */}
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-blue/70 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-white/60 font-semibold tracking-wide whitespace-nowrap">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
