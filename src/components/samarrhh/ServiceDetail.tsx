'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'

interface ServiceDetailProps {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image: string
  imagePosition: 'left' | 'right'
}

export default function ServiceDetail({ id, title, subtitle, description, features, image, imagePosition }: ServiceDetailProps) {
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

  const isEven = imagePosition === 'left'

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-20 ${isEven ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          !isEven ? 'lg:direction-rtl' : ''
        }`}>
          {/* Image */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-8' : 'translate-x-8'}`} ${!isEven ? 'lg:order-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold">{title}</h3>
                <p className="text-blue-200 mt-1">{subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content + Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`} ${!isEven ? 'lg:order-1' : ''}`}>
            <span className="text-sm font-semibold text-corporate-blue-light uppercase tracking-wider">
              Servicio Especializado
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-corporate-dark">
              {title}
            </h2>
            <div className="accent-line mt-4" />
            <p className="mt-3 text-xl font-medium text-slate-600">{subtitle}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>

            {/* Features list */}
            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-blue-light flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Contact Form */}
            <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-lg font-bold text-corporate-dark mb-1">Solicita información</h4>
              <p className="text-sm text-slate-500 mb-4">Un asesor se pondrá en contacto contigo</p>
              
              {formSubmitted ? (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">¡Mensaje enviado! Nos comunicaremos pronto contigo.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email corporativo"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all text-slate-500"
                  >
                    <option value="">Número de empleados</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                  <textarea
                    placeholder="Cuéntanos sobre tu necesidad"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:border-corporate-blue-light focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-corporate-blue-light hover:bg-corporate-blue text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Solicitar información
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
