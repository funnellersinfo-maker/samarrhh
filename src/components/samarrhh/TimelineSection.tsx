'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico de Precisión',
    copy: 'Analizamos tu operación, cultura organizacional y puntos ciegos en gestión de talento. En menos de 72 horas tienes un mapa completo de oportunidades.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
      </svg>
    ),
    color: 'cyber-blue' as const,
    colorHex: '#00d2ff',
    colorRgb: '0,210,255',
  },
  {
    number: '02',
    title: 'Estrategia a Medida',
    copy: 'Diseñamos un plan de acción con KPIs medibles, timelines claros y soluciones específicas para cada brecha detectada.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    color: 'neon-purple' as const,
    colorHex: '#9d4edd',
    colorRgb: '157,78,221',
  },
  {
    number: '03',
    title: 'Implementación Sin Fricción',
    copy: 'Desplegamos las soluciones con tu equipo, transferimos conocimiento y garantizamos que cada proceso quede documentado y operativo.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    color: 'cyber-blue' as const,
    colorHex: '#00d2ff',
    colorRgb: '0,210,255',
  },
  {
    number: '04',
    title: 'Resultados Medibles',
    copy: 'Monitoreamos indicadores, ajustamos en tiempo real y entregamos reportes ejecutivos que demuestran el ROI de cada intervención.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: 'neon-purple' as const,
    colorHex: '#9d4edd',
    colorRgb: '157,78,221',
  },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' })

  // Scroll progress within this section for line animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 radial-glow-purple opacity-50" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isHeaderInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple glow-pulse" />
            Nuestra Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]">
            <span className="block text-white">Un Proceso que Transforma,</span>
            <span className="block gradient-text-animated">No Improvisa</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/40 leading-relaxed"
          >
            Cada paso está diseñado para maximizar la precisión y minimizar el riesgo en tu operación de talento.
          </motion.p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop: central vertical line that animates with scroll */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            {/* Background track */}
            <div className="absolute inset-0 bg-white/[0.04]" />
            {/* Animated fill line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyber-blue via-neon-purple to-cyber-blue"
            />
          </div>

          {/* Mobile: left-side vertical line */}
          <div className="lg:hidden absolute left-[23px] top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-white/[0.04]" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyber-blue via-neon-purple to-cyber-blue"
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            {steps.map((step, i) => (
              <MobileAwareTimelineStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * A timeline step that renders differently on mobile vs desktop.
 * Mobile: left-aligned with a dot on the left rail.
 * Desktop: alternating left/right with a dot in the center.
 */
function MobileAwareTimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  const accentClasses = step.color === 'cyber-blue'
    ? {
        iconBg: 'bg-cyber-blue/10 border-cyber-blue/30',
        iconText: 'text-cyber-blue',
        numberText: 'text-cyber-blue/30',
        dotBg: 'bg-cyber-blue',
        dotGlow: 'shadow-[0_0_16px_rgba(0,210,255,0.5)]',
        dotRing: 'ring-cyber-blue/20',
        borderAccent: 'group-hover:border-cyber-blue/20',
      }
    : {
        iconBg: 'bg-neon-purple/10 border-neon-purple/30',
        iconText: 'text-neon-purple',
        numberText: 'text-neon-purple/30',
        dotBg: 'bg-neon-purple',
        dotGlow: 'shadow-[0_0_16px_rgba(157,78,221,0.5)]',
        dotRing: 'ring-neon-purple/20',
        borderAccent: 'group-hover:border-neon-purple/20',
      }

  return (
    <div ref={ref} className="relative">
      {/* Mobile layout */}
      <div className="lg:hidden flex items-start gap-5">
        {/* Mobile dot */}
        <div className="flex flex-col items-center flex-shrink-0 pt-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15, type: 'spring', stiffness: 200 }}
            className={`relative w-3 h-3 rounded-full ${accentClasses.dotBg} ${accentClasses.dotGlow} z-10 ring-[3px] ring-dark-premium`}
          >
            <span className={`absolute inset-0 rounded-full ${accentClasses.dotBg} opacity-30 animate-ping`} />
          </motion.div>
        </div>

        {/* Mobile card */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1"
        >
          <div className={`glass-card group rounded-2xl p-5 sm:p-7 transition-all duration-500 hover:scale-[1.01] ${accentClasses.borderAccent}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl border ${accentClasses.iconBg} ${accentClasses.iconText}`}>
                {step.icon}
              </div>
              <span className={`text-3xl font-black leading-none ${accentClasses.numberText} select-none`}>
                {step.number}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-white/95 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
              {step.copy}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop layout: alternating */}
      <div className={`hidden lg:flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card side */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-[calc(50%-2rem)]"
        >
          <div className={`glass-card group rounded-2xl p-7 sm:p-8 transition-all duration-500 hover:scale-[1.01] ${accentClasses.borderAccent}`}>
            <div className="flex items-center gap-4 mb-5">
              <div className={`flex items-center justify-center w-11 h-11 rounded-xl border ${accentClasses.iconBg} ${accentClasses.iconText}`}>
                {step.icon}
              </div>
              <span className={`text-4xl sm:text-5xl font-black leading-none ${accentClasses.numberText} select-none`}>
                {step.number}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-white/95 transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-sm sm:text-[0.938rem] text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
              {step.copy}
            </p>
          </div>
        </motion.div>

        {/* Center dot */}
        <div className="flex flex-col items-center flex-shrink-0 w-16 pt-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className={`relative w-4 h-4 rounded-full ${accentClasses.dotBg} ${accentClasses.dotGlow} z-10 ring-4 ring-dark-premium`}
          >
            <span className={`absolute inset-0 rounded-full ${accentClasses.dotBg} opacity-30 animate-ping`} />
          </motion.div>
        </div>

        {/* Empty spacer on the opposite side */}
        <div className="w-[calc(50%-2rem)]" />
      </div>
    </div>
  )
}
