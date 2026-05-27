'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FormData {
  nombre: string
  empresa: string
  cargo: string
  telefono: string
  correo: string
  colaboradores: string
  servicio: string
  mensaje: string
}

const initialFormData: FormData = {
  nombre: '',
  empresa: '',
  cargo: '',
  telefono: '',
  correo: '',
  colaboradores: '',
  servicio: '',
  mensaje: '',
}

const inputClasses =
  'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-cyber-blue/50 focus:outline-none transition-colors text-sm sm:text-base'

const labelClasses =
  'block text-xs text-white/40 uppercase tracking-wider font-medium mb-2'

export default function LeadFormSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = [
      `*Solicitud de Diagnóstico Gratuito*`,
      ``,
      `👤 *Nombre:* ${formData.nombre}`,
      `🏢 *Empresa:* ${formData.empresa}`,
      `💼 *Cargo:* ${formData.cargo || 'No especificado'}`,
      `📱 *Teléfono:* ${formData.telefono}`,
      `📧 *Correo:* ${formData.correo}`,
      `👥 *Colaboradores:* ${formData.colaboradores || 'No especificado'}`,
      `🔧 *Servicio:* ${formData.servicio || 'No especificado'}`,
      formData.mensaje ? `💬 *Mensaje:* ${formData.mensaje}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/528122062283?text=${encoded}`, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData(initialFormData)
    }, 4000)
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-28 sm:py-40 bg-dark-premium overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 radial-glow-blue" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-blue/20 bg-cyber-blue/5 text-cyber-blue text-xs sm:text-sm tracking-widest uppercase font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue glow-pulse" />
            Agenda Tu Diagnóstico
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            <span className="block text-white">Tu Empresa Merece un</span>
            <span className="block gradient-text-animated">Diagnóstico Sin Costo</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mt-8 text-base sm:text-lg text-white/40 leading-relaxed"
          >
            En 30 minutos identificamos las oportunidades que están costando dinero a
            tu operación. Sin compromiso, sin costos ocultos.
          </motion.p>
        </motion.div>

        {/* Form container */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 sm:p-10 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Nombre + Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className={labelClasses}>
                  Nombre Completo <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez García"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="empresa" className={labelClasses}>
                  Empresa <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 2: Cargo + Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cargo" className={labelClasses}>
                  Cargo
                </label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Director de Operaciones"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="telefono" className={labelClasses}>
                  Teléfono / WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+52 81 1234 5678"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row 3: Correo */}
            <div>
              <label htmlFor="correo" className={labelClasses}>
                Correo Corporativo <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                required
                value={formData.correo}
                onChange={handleChange}
                placeholder="juan@empresa.com"
                className={inputClasses}
              />
            </div>

            {/* Row 4: Colaboradores + Servicio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="colaboradores" className={labelClasses}>
                  Número de Colaboradores
                </label>
                <select
                  id="colaboradores"
                  name="colaboradores"
                  value={formData.colaboradores}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" className="bg-dark-card">
                    Selecciona un rango
                  </option>
                  <option value="1-50" className="bg-dark-card">
                    1–50
                  </option>
                  <option value="51-200" className="bg-dark-card">
                    51–200
                  </option>
                  <option value="201-500" className="bg-dark-card">
                    201–500
                  </option>
                  <option value="500+" className="bg-dark-card">
                    500+
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="servicio" className={labelClasses}>
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="" className="bg-dark-card">
                    Selecciona un servicio
                  </option>
                  <option value="Reclutamiento y Selección" className="bg-dark-card">
                    Reclutamiento y Selección
                  </option>
                  <option
                    value="Administración de Personal / Nómina"
                    className="bg-dark-card"
                  >
                    Administración de Personal / Nómina
                  </option>
                  <option value="Personal Inplant" className="bg-dark-card">
                    Personal Inplant
                  </option>
                  <option value="Diagnóstico General" className="bg-dark-card">
                    Diagnóstico General
                  </option>
                  <option value="Todos" className="bg-dark-card">
                    Todos
                  </option>
                </select>
              </div>
            </div>

            {/* Row 5: Mensaje */}
            <div>
              <label htmlFor="mensaje" className={labelClasses}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos brevemente sobre tu necesidad..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitted}
                className={`w-full group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold tracking-wide text-sm sm:text-base transition-all duration-300 ${
                  submitted
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-gradient-to-r from-cyber-blue to-cyber-blue/80 text-white hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,210,255,0.3)]'
                }`}
              >
                {submitted ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    ¡Enviado! Te contactamos pronto
                  </>
                ) : (
                  <>
                    {/* WhatsApp icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Agendar Diagnóstico Gratuito
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
