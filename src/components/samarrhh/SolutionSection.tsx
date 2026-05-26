'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const solutions = [
  {
    number: '01',
    title: 'Decodificamos ADN Corporativo',
    description: 'No hacemos entrevistas genéricas. Mapeamos competencias, cultura y potencial con tecnología de precisión quirúrgica.',
    gradient: 'from-cyber-blue to-cyan-400',
  },
  {
    number: '02',
    title: 'Anticipamos la Fuga de Talento',
    description: 'Nuestros modelos predictivos detectan señales de deserción antes de que tu mejor persona actualice su CV.',
    gradient: 'from-neon-purple to-purple-400',
  },
  {
    number: '03',
    title: 'Construimos Equipos Inquebrantables',
    description: 'No llenamos vacantes. Diseñamos ecosistemas de alto rendimiento donde el talento no solo llega—se queda y escala.',
    gradient: 'from-cyber-blue to-neon-purple',
  },
]

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="solution"
      ref={ref}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-blue" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-28"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            La Solución
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-white">Samarrhh</span>
            <span className="block gradient-text-animated">No Es Una Agencia</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            Somos un laboratorio de talento humano. 20+ años decodificando el ADN
            de las organizaciones que dominan sus mercados.
          </motion.p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-10 sm:space-y-16">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="glass-card group rounded-2xl p-7 sm:p-10 lg:p-12 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                {/* Number */}
                <div className={`text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500 leading-none`}>
                  {solution.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors duration-500">
                    {solution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                    {solution.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-cyber-blue/30 group-hover:bg-cyber-blue/5 transition-all duration-500">
                  <svg className="w-5 h-5 text-white/30 group-hover:text-cyber-blue transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 text-center"
        >
          {[
            { value: '20+', label: 'Años de Experiencia' },
            { value: '500+', label: 'Empresas Transformadas' },
            { value: '98%', label: 'Tasa de Retención' },
            { value: '<72h', label: 'Tiempo de Diagnóstico' },
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text-static mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/30 group-hover:text-white/50 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
