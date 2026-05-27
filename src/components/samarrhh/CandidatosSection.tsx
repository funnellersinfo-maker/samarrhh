'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    title: 'Vacantes Exclusivas',
    description:
      'Acceso a oportunidades en empresas líderes que no publican en portales tradicionales.',
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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Acompañamiento Personalizado',
    description:
      'Te preparamos para cada entrevista y te damos feedback real de los procesos.',
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
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    title: 'Crecimiento Real',
    description:
      'Nuestras empresas ofrecen planes de carrera, no solo empleos temporales.',
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
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
]

export default function CandidatosSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const whatsappCVUrl =
    'https://wa.me/528122062283?text=Hola%20SAMA%20RR.HH%2C%20quiero%20enviar%20mi%20CV%20y%20postularme%20a%20vacantes'

  const emailUrl =
    'mailto:ventas3@samarrhh.site?subject=Env%C3%ADo%20de%20CV'

  return (
    <section
      id="candidatos"
      ref={ref}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-blue" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Top accent line */}
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
            Para Talento
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-white">Tu Próxima Gran</span>
            <span className="block gradient-text-animated">Oportunidad Está Aquí</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            Conectamos tu talento con las empresas que lo valoran. Envía tu CV y
            accede a vacantes exclusivas que no encontrarás en portales públicos.
          </motion.p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)', scale: 0.97 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`glass-card group rounded-2xl p-7 sm:p-10 text-center transition-all duration-500 hover:shadow-[0_0_40px_rgba(${
                item.accent === 'cyber-blue' ? '0,210,255' : '157,78,221'
              },0.1)]`}
            >
              {/* Icon */}
              <div
                className={`mx-auto mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl border transition-colors duration-500 ${
                  item.accent === 'cyber-blue'
                    ? 'text-cyber-blue border-cyber-blue/20 bg-cyber-blue/5 group-hover:bg-cyber-blue/10 group-hover:border-cyber-blue/40'
                    : 'text-neon-purple border-neon-purple/20 bg-neon-purple/5 group-hover:bg-neon-purple/10 group-hover:border-neon-purple/40'
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 transition-colors duration-300">
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

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          {/* Primary CTA — WhatsApp */}
          <a
            href={whatsappCVUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar mi CV por WhatsApp"
            className="btn-shockwave group relative flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#25D366]/80 text-white font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] min-w-[260px] sm:min-w-0"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10">Enviar mi CV por WhatsApp</span>
          </a>

          {/* Secondary CTA — Email */}
          <a
            href={emailUrl}
            aria-label="Enviar CV por correo electrónico"
            className="group flex items-center justify-center gap-3 px-10 py-5 rounded-xl border border-white/10 text-white/60 font-bold tracking-wide text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:border-cyber-blue/30 hover:text-white hover:bg-white/5 min-w-[260px] sm:min-w-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Enviar por Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
