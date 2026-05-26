'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
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
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const painStats = [
  { value: 240, suffix: '%', label: 'Del salario cuesta una mala contratación', icon: '💸' },
  { value: 18, suffix: ' meses', label: 'Tiempo promedio para detectar un mal fit cultural', icon: '⏱️' },
  { value: 67, suffix: '%', label: 'De las empresas reportan fuga de talento crítico', icon: '🚪' },
  { value: 3, suffix: 'x', label: 'Más caro reemplazar que retener talento clave', icon: '📈' },
]

export default function PainSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="pain"
      ref={ref}
      className="relative py-24 sm:py-32 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-red" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Red accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 glow-pulse" />
            Diagnóstico Crítico
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-red-400">El Costo</span>
            <span className="block text-white">De Contratar</span>
            <span className="block text-red-500/80">Sin Precisión</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            Cada mala contratación no es un error, es una hemorragia financiera silenciosa.
            En 2026, las empresas que no decodifiquen su talento están donando dinero a la competencia.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card group rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:border-red-500/20 hover:shadow-[0_0_40px_rgba(220,38,38,0.08)]"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-red-400 mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base text-white/40 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom contrast statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-block max-w-3xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 rounded-2xl" />
              <div className="relative glass-card rounded-2xl p-8 sm:p-10 border-red-500/10">
                <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                  &ldquo;Contratar sin estrategia de talento es como operar con los ojos cerrados.
                  <span className="text-red-400 font-semibold">Estás perdiendo sangre</span> y ni siquiera lo sabes.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
