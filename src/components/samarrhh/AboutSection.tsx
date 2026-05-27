'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Clock, Users, TrendingUp, Shield, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: Clock, value: '20+', label: 'Años de experiencia', color: 'text-blue-600' },
  { icon: Users, value: '500+', label: 'Empresas confían en nosotros', color: 'text-blue-700' },
  { icon: TrendingUp, value: '10,000+', label: 'Vacantes cubiertas', color: 'text-blue-800' },
  { icon: Award, value: '98%', label: 'Satisfacción del cliente', color: 'text-slate-700' },
]

const values = [
  {
    icon: Shield,
    title: 'Compromiso',
    description: 'Nos comprometemos con los resultados de tu empresa como si fueran propios.',
  },
  {
    icon: HeartHandshake,
    title: 'Ética profesional',
    description: 'Transparencia, confidencialidad y respeto en cada proceso y relación.',
  },
  {
    icon: TrendingUp,
    title: 'Innovación constante',
    description: 'Metodologías actualizadas y herramientas de vanguardia en cada servicio.',
  },
  {
    icon: Users,
    title: 'Enfoque humano',
    description: 'Entendemos que detrás de cada proceso hay personas con historias y aspiraciones.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<{ [key: string]: number }>({})

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

  // Counter animation
  useEffect(() => {
    if (!isVisible) return
    const targets: { [key: string]: number } = {
      '20+': 20,
      '500+': 500,
      '10,000+': 10000,
      '98%': 98,
    }
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic

      const newCounts: { [key: string]: number } = {}
      Object.entries(targets).forEach(([key, target]) => {
        newCounts[key] = Math.round(target * eased)
      })
      setCounts(newCounts)

      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section id="nosotros" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-sm font-semibold text-corporate-blue-light uppercase tracking-wider">Sobre Nosotros</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-corporate-dark">
            Más de 20 años construyendo equipos extraordinarios
          </h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="mt-6 text-lg text-slate-600">
            En SAMA RR.HH. creemos que el éxito de toda organización comienza por su gente. 
            Somos una consultora especializada en soluciones integrales de recursos humanos 
            con presencia en Monterrey y cobertura nacional.
          </p>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-xl border border-slate-100">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl md:text-4xl font-bold text-corporate-dark">
                  {counts[stat.value] !== undefined
                    ? stat.value === '98%'
                      ? `${counts[stat.value]}%`
                      : stat.value === '10,000+'
                      ? counts[stat.value].toLocaleString() + '+'
                      : counts[stat.value] + '+'
                    : '0'}
                </div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* About content with image */}
        <div className={`mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <img
              src="/images/about-team.png"
              alt="Equipo SAMA RR.HH"
              className="w-full rounded-2xl shadow-xl object-cover h-[400px]"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-corporate-dark">
              Nuestra misión es transformar la manera en que las organizaciones gestionan su talento
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Fundada con la visión de revolucionar los recursos humanos en México, SAMA RR.HH. 
              se ha consolidado como referente en consultoría de capital humano. Nuestro enfoque 
              combina experiencia práctica con metodologías innovadoras, garantizando resultados 
              medibles para cada cliente.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Trabajamos de la mano con empresas de todos los tamaños y sectores, desde startups 
              hasta corporativos multinacionales, adaptando nuestras soluciones a las necesidades 
              específicas de cada organización.
            </p>
            <a
              href="#contacto"
              className="mt-6 inline-flex items-center gap-2 bg-corporate-blue-light hover:bg-corporate-blue text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Conoce más sobre nosotros
            </a>
          </div>
        </div>

        {/* Values */}
        <div className={`mt-20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-corporate-dark text-center mb-12">Nuestros valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-corporate-blue-light" />
                  </div>
                  <h4 className="text-lg font-bold text-corporate-dark">{value.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
