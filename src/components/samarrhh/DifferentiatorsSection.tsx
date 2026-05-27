'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const differentiators = [
  {
    title: 'Precisión Quirúrgica',
    description:
      'Evaluación psicométrica + validación cultural + verificación profunda. Cero margen de error en cada contratación.',
    accent: 'cyber-blue',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.93-6.07l-2.83 2.83M8.76 15.24l-2.83 2.83m0-10.14l2.83 2.83m6.48 6.48l2.83 2.83"
        />
      </svg>
    ),
  },
  {
    title: 'Blindaje Legal Total',
    description:
      'Cumplimiento impecable con IMSS, INFONAVIT, LFT. Tu empresa opera sin exposición juridica.',
    accent: 'neon-purple',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: 'Velocidad Ejecutiva',
    description:
      'Diagnóstico en <72 horas. Vacantes cubiertas en tiempo récord. Tu operación no se detiene.',
    accent: 'cyber-blue',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: 'Modelo Inplant Único',
    description:
      'Un especialista SAMA dedicado 100% a tu empresa. No compartes consultor—tienes un equipo dentro del tuyo.',
    accent: 'neon-purple',
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote:
      'SAMA redujo nuestra rotación del 45% al 12% en 6 meses. El ROI fue inmediato.',
    name: 'Dir. de Operaciones',
    company: 'Grupo Industrial Alpha',
  },
  {
    quote:
      'La nómina ya no es un dolor de cabeza. Cumplimiento total, cero errores.',
    name: 'CFO',
    company: 'TechCorp MX',
  },
  {
    quote:
      'El equipo inplant se integró desde el día uno. Es como tener un RR.HH premium sin la carga fija.',
    name: 'CEO',
    company: 'Logística Nacional',
  },
]

export default function DifferentiatorsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="diferenciadores"
      ref={ref}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-purple" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple glow-pulse" />
            Por Qué SAMA
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-white">Lo que Nos Hace</span>
            <span className="block gradient-text-animated">Diferentes a Todo</span>
            <span className="block text-white">lo que Conoces</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            No somos una agencia de empleo más. Somos el socio estratégico que tu
            departamento de RR.HH siempre necesitó.
          </motion.p>
        </motion.div>

        {/* Differentiator cards — 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.97 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`glass-card group rounded-2xl p-7 sm:p-10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(${
                item.accent === 'cyber-blue' ? '0,210,255' : '157,78,221'
              },0.1)]`}
            >
              {/* Icon */}
              <div
                className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl border transition-colors duration-500 ${
                  item.accent === 'cyber-blue'
                    ? 'text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5 group-hover:bg-cyber-blue/10 group-hover:border-cyber-blue/40'
                    : 'text-neon-purple border-neon-purple/20 bg-neon-purple/5 group-hover:bg-neon-purple/10 group-hover:border-neon-purple/40'
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-bold text-white mb-4 transition-colors duration-300`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`mt-8 h-px bg-gradient-to-r ${
                  item.accent === 'cyber-blue'
                    ? 'from-cyber-blue/0 via-cyber-blue/0 group-hover:via-cyber-blue/40 to-cyber-blue/0'
                    : 'from-neon-purple/0 via-neon-purple/0 group-hover:via-neon-purple/40 to-neon-purple/0'
                } transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonials subsection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Lo Dicen Nuestros <span className="gradient-text-static">Clientes</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.8 + i * 0.12 }}
              className="glass-card group rounded-2xl p-7 sm:p-8 relative transition-all duration-500 hover:shadow-[0_0_30px_rgba(157,78,221,0.08)]"
            >
              {/* Quotation mark watermark */}
              <span className="absolute top-4 right-6 text-6xl sm:text-7xl font-black text-white/[0.03] leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple/30 to-cyber-blue/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-white/60 text-xs font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/70">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/30">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
