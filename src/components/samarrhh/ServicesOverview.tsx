'use client'

import { useEffect, useRef, useState } from 'react'
import { UserSearch, ClipboardList, Building, Brain, BarChart3, Calculator } from 'lucide-react'

const services = [
  {
    icon: UserSearch,
    title: 'Reclutamiento y Selección',
    description: 'Identificamos y seleccionamos al talento ideal para cada posición en tu organización.',
    href: '#reclutamiento',
    color: 'bg-blue-600',
  },
  {
    icon: ClipboardList,
    title: 'Administración de Personal',
    description: 'Gestión completa de nómina, incidencias y obligaciones patronales.',
    href: '#admin-personal',
    color: 'bg-blue-700',
  },
  {
    icon: Building,
    title: 'Inplant de RR.HH.',
    description: 'Tu departamento de recursos humanos externalizado dentro de tu empresa.',
    href: '#inplant',
    color: 'bg-slate-700',
  },
  {
    icon: Brain,
    title: 'Psicometría y Evaluación',
    description: 'Evaluaciones científicas que garantizan la mejor decisión de contratación.',
    href: '#psicometria',
    color: 'bg-blue-800',
  },
  {
    icon: BarChart3,
    title: 'Consultoría Organizacional',
    description: 'Diagnóstico y transformación organizacional para empresas competitivas.',
    href: '#consultoria',
    color: 'bg-slate-800',
  },
  {
    icon: Calculator,
    title: 'Outsourcing de Nómina',
    description: 'Externaliza tu nómina y reduce costos operativos con cumplimiento total.',
    href: '#outsourcing',
    color: 'bg-blue-900',
  },
]

export default function ServicesOverview() {
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
    <section id="servicios" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-semibold text-corporate-blue-light uppercase tracking-wider">Nuestros Servicios</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-corporate-dark">
            Soluciones estratégicas para cada necesidad
          </h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="mt-6 text-lg text-slate-600">
            Más de dos décadas de experiencia nos respaldan. Ofrecemos soluciones integrales 
            en recursos humanos adaptadas a las necesidades específicas de tu empresa.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <a
                key={i}
                href={service.href}
                className={`service-card group bg-white rounded-xl border border-slate-100 p-8 hover:border-blue-200 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-corporate-dark group-hover:text-corporate-blue-light transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center text-corporate-blue-light font-semibold text-sm group-hover:gap-2 transition-all">
                  Conocer más
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
