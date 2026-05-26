'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer
      ref={ref}
      className="relative bg-dark-premium border-t border-white/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-neon-purple/20" />
                <span className="relative text-lg font-bold gradient-text-static">S</span>
              </div>
              <span className="text-lg font-bold tracking-wider">
                SAMA<span className="gradient-text-static">RR.HH</span>
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              Consultora con 20+ años decodificando talento humano. Soluciones que optimizan, transforman y escalan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wide uppercase mb-5">Navegación</h4>
            <ul className="space-y-3">
              {['Inicio', 'El Problema', 'Solución', 'Servicios', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'El Problema' ? 'pain' : item === 'Inicio' ? 'hero' : item.toLowerCase()}`} className="text-sm text-white/30 hover:text-cyber-blue transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wide uppercase mb-5">Servicios</h4>
            <ul className="space-y-3">
              {['Reclutamiento y Selección', 'Administración de Personal', 'Inplant RR.HH', 'Psicometría', 'Estudio Socioeconómico', 'Toxicológicos y Poligrafía'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/30 hover:text-neon-purple transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wide uppercase mb-5">Contacto</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/?text=Hola%20Samarrhh%2C%20quiero%20agendar%20una%20consultor%C3%ADa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-[#25D366] transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Business
              </a>
              <a
                href="#cta"
                className="flex items-center gap-2 text-sm text-white/30 hover:text-cyber-blue transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contacto@samarrhh.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} SAMA RR.HH. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            CEO: Antonio Santibañez · 20+ años transformando organizaciones
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
