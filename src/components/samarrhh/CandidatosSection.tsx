'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, FileText, Briefcase, UserCheck, ArrowRight, Star } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Explora oportunidades',
    description: 'Navega nuestras vacantes disponibles y encuentra la posición ideal para tu perfil profesional.',
  },
  {
    icon: FileText,
    title: 'Registra tu CV',
    description: 'Completa tu perfil y adjunta tu currículum. Nuestro equipo lo evaluará para matching con vacantes.',
  },
  {
    icon: Briefcase,
    title: 'Proceso de selección',
    description: 'Si tu perfil coincide, serás contactado para iniciar el proceso de evaluación y entrevistas.',
  },
  {
    icon: UserCheck,
    title: 'Consigue tu empleo',
    description: 'Supera las etapas de selección y recibe una oferta laboral en una empresa de primer nivel.',
  },
]

export default function CandidatosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="candidatos" ref={sectionRef} className="py-20 bg-corporate-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">Para Candidatos</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Encuentra el empleo que mereces
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-blue-100">
            Miles de vacantes en las mejores empresas de México. Registra tu currículum 
            y deja que nosotros encontremos la oportunidad perfecta para ti.
          </p>
        </div>

        {/* Steps */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-400/30" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-300" />
                  </div>
                  <div className="text-xs text-blue-300 font-semibold mb-2">Paso {i + 1}</div>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-blue-100 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Image and CTA */}
        <div className={`mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/candidatos.png"
              alt="Candidatos SAMA RR.HH"
              className="w-full h-[350px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Tu próximo gran paso profesional empieza aquí
            </h3>
            <p className="mt-4 text-blue-100 leading-relaxed">
              Miles de candidatos han encontrado su empleo ideal a través de SAMA RR.HH. 
              Nuestro equipo de reclutadores trabaja activamente para conectar tu talento 
              con las mejores oportunidades del mercado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/528122062283?text=Hola,%20me%20gustaría%20registrar%20mi%20CV%20con%20SAMA%20RR.HH."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors group"
              >
                Envía tu CV por WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contacto@samarrhh.com?subject=Registro%20de%20CV"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Enviar por email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
