'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    number: '01',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    tag: 'Precisión',
    title: 'Reclutamiento y Selección de Personal',
    copy: 'No publicamos vacantes en portales genéricos. Cazamos talento con metodología de precisión: evaluación psicométrica + validación cultural + verificación profunda. Resultado: candidatos que no solo llenan la vacante—la elevan.',
    cta: 'Solicitar Diagnóstico',
    href: '#contacto',
    accent: 'cyber-blue' as const,
    accentRgb: '0,210,255',
    accentHex: '#00d2ff',
  },
  {
    number: '02',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
      </svg>
    ),
    tag: 'Blindaje',
    title: 'Administración de Personal y Maquila de Nómina',
    copy: 'Terceriza tu nómina y elimina el riesgo operativo. Cálculo impecable, cumplimiento legal total, gestión de IMSS/INFONAVIT y absorción completa de responsabilidades laborales. Tu empresa opera sin fricción.',
    cta: 'Cotizar Servicio',
    href: '#contacto',
    accent: 'neon-purple' as const,
    accentRgb: '157,78,221',
    accentHex: '#9d4edd',
  },
  {
    number: '03',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    tag: 'Integración',
    title: 'Personal Inplant RR.HH en Sitio',
    copy: 'Desplegamos un equipo completo de recursos humanos dentro de tu operación desde el día uno. Un especialista SAMA dedicado exclusivamente a tu empresa, con toda la infraestructura de nuestra consultoría respaldándolo.',
    cta: 'Agendar Consultoría',
    href: '#contacto',
    accent: 'gradient' as const,
    accentRgb: '0,210,255',
    accentHex: '#00d2ff',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(10px)',
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const getAccentClasses = (accent: string) => {
    switch (accent) {
      case 'cyber-blue':
        return {
          tagText: 'text-cyber-blue',
          tagBorder: 'border-cyber-blue/20',
          tagBg: 'bg-cyber-blue/5',
          iconHover: 'group-hover:text-cyber-blue',
          accentLine: 'from-cyber-blue/0 via-cyber-blue/50 to-cyber-blue/0',
          hoverBorder: 'hover:border-cyber-blue/30',
          hoverShadow: 'hover:shadow-[0_0_50px_rgba(0,210,255,0.1)]',
          ctaText: 'text-cyber-blue',
          ctaHoverBg: 'hover:bg-cyber-blue/10',
          glowBorder: 'group-hover:border-cyber-blue/25',
        }
      case 'neon-purple':
        return {
          tagText: 'text-neon-purple',
          tagBorder: 'border-neon-purple/20',
          tagBg: 'bg-neon-purple/5',
          iconHover: 'group-hover:text-neon-purple',
          accentLine: 'from-neon-purple/0 via-neon-purple/50 to-neon-purple/0',
          hoverBorder: 'hover:border-neon-purple/30',
          hoverShadow: 'hover:shadow-[0_0_50px_rgba(157,78,221,0.1)]',
          ctaText: 'text-neon-purple',
          ctaHoverBg: 'hover:bg-neon-purple/10',
          glowBorder: 'group-hover:border-neon-purple/25',
        }
      case 'gradient':
        return {
          tagText: 'gradient-text-static',
          tagBorder: 'border-cyber-blue/20',
          tagBg: 'bg-cyber-blue/5',
          iconHover: 'group-hover:text-cyber-blue',
          accentLine: 'from-cyber-blue/0 via-neon-purple/50 to-cyber-blue/0',
          hoverBorder: 'hover:border-cyber-blue/20',
          hoverShadow: 'hover:shadow-[0_0_50px_rgba(0,210,255,0.08),0_0_50px_rgba(157,78,221,0.06)]',
          ctaText: 'gradient-text-static',
          ctaHoverBg: 'hover:bg-cyber-blue/10',
          glowBorder: 'group-hover:border-cyber-blue/20',
        }
      default:
        return {
          tagText: 'text-cyber-blue',
          tagBorder: 'border-cyber-blue/20',
          tagBg: 'bg-cyber-blue/5',
          iconHover: 'group-hover:text-cyber-blue',
          accentLine: 'from-cyber-blue/0 via-cyber-blue/50 to-cyber-blue/0',
          hoverBorder: 'hover:border-cyber-blue/30',
          hoverShadow: 'hover:shadow-[0_0_50px_rgba(0,210,255,0.1)]',
          ctaText: 'text-cyber-blue',
          ctaHoverBg: 'hover:bg-cyber-blue/10',
          glowBorder: 'group-hover:border-cyber-blue/25',
        }
    }
  }

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative py-24 sm:py-36 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-blue opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            Soluciones Corporativas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            <span className="block text-white">Tres Pilares,</span>
            <span className="block gradient-text-animated">Una Transformación Total</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/40 leading-relaxed"
          >
            Cada servicio está diseñado para eliminar un punto ciego en tu operación de capital humano.
          </motion.p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, i) => {
            const accent = getAccentClasses(service.accent)
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`glass-card group relative rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ${accent.hoverBorder} ${accent.hoverShadow} hover:scale-[1.02] overflow-hidden`}
              >
                {/* Background number indicator */}
                <span className="absolute -top-3 -right-1 text-[8rem] sm:text-[10rem] font-black leading-none text-white/[0.02] select-none pointer-events-none">
                  {service.number}
                </span>

                {/* Top row: Tag + Icon */}
                <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
                  <span className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${accent.tagBorder} ${accent.tagBg} ${accent.tagText}`}>
                    <span className={`w-1 h-1 rounded-full ${service.accent === 'neon-purple' ? 'bg-neon-purple' : 'bg-cyber-blue'} glow-pulse`} />
                    {service.tag}
                  </span>
                  <div className={`text-white/15 transition-colors duration-500 ${accent.iconHover}`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-white/95 transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>

                {/* Copy */}
                <p className="relative z-10 text-sm sm:text-[0.938rem] text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                  {service.copy}
                </p>

                {/* CTA Link */}
                <a
                  href={service.href}
                  className={`relative z-10 inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm font-semibold tracking-wide ${accent.ctaText} ${accent.ctaHoverBg} px-4 py-2 rounded-lg transition-all duration-300 group/cta`}
                >
                  {service.cta}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
