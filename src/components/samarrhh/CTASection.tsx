'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '(81) 2206 2283',
    href: 'tel:+528122062283',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@samarrhh.com',
    href: 'mailto:contacto@samarrhh.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Monterrey, NL, México',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie: 9:00 - 18:00',
    href: '#',
  },
]

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-semibold text-corporate-blue-light uppercase tracking-wider">Contacto</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-corporate-dark">
            Comienza a transformar tu equipo hoy
          </h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="mt-6 text-lg text-slate-600">
            Cuéntanos sobre tus necesidades y un asesor especializado se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>

        {/* Content */}
        <div className={`mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-corporate-dark">Información de contacto</h3>
            <p className="text-slate-600">
              Estamos listos para ayudarte a encontrar la solución perfecta para tu empresa.
            </p>

            <div className="space-y-4 mt-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                return (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-5 h-5 text-corporate-blue-light" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{info.label}</div>
                      <div className="text-slate-800 font-medium group-hover:text-corporate-blue-light transition-colors">{info.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/528122062283?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20SAMA%20RR.HH."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-corporate-dark mb-1">Envíanos un mensaje</h3>
              <p className="text-sm text-slate-500 mb-6">Todos los campos son requeridos</p>
              
              {formSubmitted ? (
                <div className="flex items-center gap-3 text-green-600 bg-green-50 p-6 rounded-xl">
                  <CheckCircle className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">¡Mensaje enviado con éxito!</div>
                    <div className="text-sm text-green-600/80">Un asesor se comunicará contigo en las próximas 24 horas.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email corporativo</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="(81) 1234 5678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Servicio de interés</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="reclutamiento">Reclutamiento y Selección</option>
                      <option value="admin">Administración de Personal</option>
                      <option value="inplant">Inplant de RR.HH.</option>
                      <option value="psicometria">Psicometría y Evaluación</option>
                      <option value="consultoria">Consultoría Organizacional</option>
                      <option value="outsourcing">Outsourcing de Nómina</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                      placeholder="Cuéntanos sobre tus necesidades..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-corporate-blue-light hover:bg-corporate-blue text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
