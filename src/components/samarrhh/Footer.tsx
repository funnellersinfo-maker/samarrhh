'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Reclutamiento y Selección', href: '#reclutamiento' },
  { label: 'Administración de Personal', href: '#admin-personal' },
  { label: 'Inplant de RR.HH.', href: '#inplant' },
  { label: 'Psicometría y Evaluación', href: '#psicometria' },
  { label: 'Consultoría Organizacional', href: '#consultoria' },
  { label: 'Outsourcing de Nómina', href: '#outsourcing' },
]

const companyLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Candidatos', href: '#candidatos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-corporate-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="SAMA RR.HH" className="h-10 w-auto brightness-0 invert" />
              <div>
                <span className="text-xl font-bold">SAMA</span>
                <span className="text-xl font-light text-blue-400 ml-1">RR.HH</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultora especializada en soluciones integrales de recursos humanos. 
              Más de 20 años transformando organizaciones a través del talento.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+528122062283" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                (81) 2206 2283
              </a>
              <a href="mailto:contacto@samarrhh.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                contacto@samarrhh.com
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                Monterrey, NL, México
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-bold text-white mb-6">Mantente informado</h4>
            <p className="text-slate-400 text-sm mb-4">
              Recibe novedades sobre nuestros servicios y oportunidades laborales.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all"
              />
              <button
                type="submit"
                className="w-full bg-corporate-blue-light hover:bg-blue-500 text-white py-3 rounded-lg text-sm font-semibold transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SAMA RR.HH. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
