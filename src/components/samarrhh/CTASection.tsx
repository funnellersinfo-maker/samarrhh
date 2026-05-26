'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-blue" />
      <div className="absolute inset-0 radial-glow-purple" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 sm:p-14 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-cyber-blue/20 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-neon-purple/20 rounded-br-3xl" />

          <div className="relative">
            {/* Pre-title */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
              Consultoría de Diagnóstico Gratuita
            </motion.span>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-8">
              <span className="block text-white">Tu Empresa</span>
              <span className="block gradient-text-animated">Merece Mejor</span>
              <span className="block text-white">Talento</span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-base sm:text-lg text-white/40 leading-relaxed mb-14"
            >
              Agenda una sesión de diagnóstico de 30 minutos. Sin compromiso, sin costos ocultos.
              Solo talento decodificado para tu operación.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
            >
              <a
                href="https://wa.me/?text=Hola%20Samarrhh%2C%20quiero%20agendar%20una%20consultor%C3%ADa%20de%20diagn%C3%B3stico%20para%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shockwave group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] min-w-[240px] sm:min-w-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar por WhatsApp
                </span>
              </a>
              <a
                href="mailto:contacto@samarrhh.com"
                className="btn-shockwave-purple group px-10 py-5 rounded-full border border-neon-purple/40 text-neon-purple font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-neon-purple/10 hover:border-neon-purple/60 min-w-[240px] sm:min-w-0"
              >
                <span className="flex items-center gap-2">
                  Enviar Email Directo
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-12 text-xs text-white/20 tracking-wide"
            >
              Respuesta garantizada en menos de 24 horas · 20+ años de experiencia · CEO: Antonio Santibañez
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
