'use client'

import { ArrowRight, Users, Building2 } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-team.png"
          alt="Equipo profesional SAMA RR.HH"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-[fadeInUp_0.7s_ease-out_forwards]">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              20+ años transformando organizaciones
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
            Soluciones integrales en{' '}
            <span className="text-blue-300">Recursos Humanos</span>{' '}
            que impulsan tu negocio
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed animate-[fadeInUp_0.7s_ease-out_0.4s_both]">
            Desde reclutamiento de precisión hasta administración completa de personal, 
            somos tu socio estratégico para construir equipos excepcionales.
          </p>

          {/* Dual CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.7s_ease-out_0.5s_both]">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white text-corporate-blue px-8 py-4 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors group"
            >
              <Building2 className="w-5 h-5" />
              Soy Empresa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#candidatos"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors group"
            >
              <Users className="w-5 h-5" />
              Soy Candidato
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 animate-[fadeInUp_0.7s_ease-out_0.7s_both]">
            {[
              { value: '20+', label: 'Años de experiencia' },
              { value: '500+', label: 'Empresas confían en nosotros' },
              { value: '10,000+', label: 'Vacantes cubiertas' },
              { value: '98%', label: 'Satisfacción del cliente' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
