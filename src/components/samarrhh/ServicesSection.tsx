'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Reclutamiento y Selección',
    description: 'No publicamos vacantes. Cazamos talento con precisión de sniper. Evaluación psicometrica + validación cultural = contrataciones que no fallan.',
    accent: 'cyber-blue',
    tag: 'Core',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Administración de Personal',
    description: 'Gestión operativa impecable. Nóminas, contratos, legalidad y cumplimiento—todo bajo control mientras tú escalas tu negocio.',
    accent: 'neon-purple',
    tag: 'Ops',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Inplant RR.HH',
    description: 'Tu propio departamento de recursos humanos sin la carga fija. Desplegamos un equipo completo dentro de tu operación desde el día uno.',
    accent: 'cyber-blue',
    tag: 'Premium',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Psicometría Avanzada',
    description: 'Evaluaciones psicométricas de última generación. Medimos lo que el CV oculta: potencial, integridad y fit cultural real.',
    accent: 'neon-purple',
    tag: 'Lab',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: 'Estudio Socioeconómico',
    description: 'Radiografía completa del entorno del candidato. Verificamos trayectoria, entorno y contexto para decisiones sin puntos ciegos.',
    accent: 'cyber-blue',
    tag: 'Intel',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Toxicológicos y Poligrafía',
    description: 'Validación de integridad con estándares forenses. Protege tu organización de riesgos invisibles con pruebas clínicas y evaluaciones de confianza.',
    accent: 'neon-purple',
    tag: 'Shield',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 sm:py-32 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-purple" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple glow-pulse" />
            Arsenal de Servicios
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-white">Tecnología</span>
            <span className="block gradient-text-animated">Al Servicio del Talento</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            Cada servicio es un módulo de precisión diseñado para eliminar la incertidumbre
            en la gestión de tu capital humano.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`glass-card group rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(${
                service.accent === 'cyber-blue' ? '0,210,255' : '157,78,221'
              },0.08)]`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                  service.accent === 'cyber-blue'
                    ? 'text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5'
                    : 'text-neon-purple border-neon-purple/20 bg-neon-purple/5'
                }`}>
                  {service.tag}
                </span>
                <div className={`transition-colors duration-500 ${
                  service.accent === 'cyber-blue' ? 'text-white/20 group-hover:text-cyber-blue' : 'text-white/20 group-hover:text-neon-purple'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-px bg-gradient-to-r ${
                service.accent === 'cyber-blue'
                  ? 'from-cyber-blue/0 via-cyber-blue/0 group-hover:via-cyber-blue/40 to-cyber-blue/0'
                  : 'from-neon-purple/0 via-neon-purple/0 group-hover:via-neon-purple/40 to-neon-purple/0'
              } transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
