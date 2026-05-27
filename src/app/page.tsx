'use client'

import Navigation from '@/components/samarrhh/Navigation'
import HeroSection from '@/components/samarrhh/HeroSection'
import ServicesOverview from '@/components/samarrhh/ServicesOverview'
import ServiceDetail from '@/components/samarrhh/ServiceDetail'
import AboutSection from '@/components/samarrhh/AboutSection'
import CandidatosSection from '@/components/samarrhh/CandidatosSection'
import CTASection from '@/components/samarrhh/CTASection'
import Footer from '@/components/samarrhh/Footer'
import WhatsAppFloat from '@/components/samarrhh/WhatsAppFloat'
import BackgroundAudio from '@/components/samarrhh/BackgroundAudio'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <ServiceDetail
          id="reclutamiento"
          title="Reclutamiento y Selección"
          subtitle="Encontramos al talento perfecto para tu organización"
          description="Nuestro proceso de reclutamiento y selección combina metodologías probadas con tecnología de vanguardia para identificar, evaluar e incorporar al candidato ideal para cada posición. Desde perfiles operativos hasta ejecutivos de alto nivel."
          features={[
            'Búsqueda directa y headhunting ejecutivo',
            'Evaluación psicométrica y por competencias',
            'Verificación de antecedentes y referencias',
            'Garantía de permanencia del candidato',
            'Reportes ejecutivos de cada proceso',
            'Time-to-hire optimizado'
          ]}
          image="/images/recrutamiento.png"
          imagePosition="left"
        />
        <ServiceDetail
          id="admin-personal"
          title="Administración de Personal"
          subtitle="Gestionamos tu capital humano para que tú te enfoques en crecer"
          description="Nos hacemos cargo de toda la gestión administrativa de tu personal: contrataciones, bajas, incidencias, nómina, obligaciones patronales y más. Cumplimiento total con la legislación laboral vigente."
          features={[
            'Gestión completa de nómina',
            'Altas y bajas ante el IMSS',
            'Cálculo de finiquitos y liquidaciones',
            'Administración de incidencias',
            'Cumplimiento de obligaciones patronales',
            'Soporte jurídico laboral'
          ]}
          image="/images/admin-personal.png"
          imagePosition="right"
        />
        <ServiceDetail
          id="inplant"
          title="Inplant de Recursos Humanos"
          subtitle="Tu departamento de RR.HH. externalizado dentro de tu empresa"
          description="Integramos un equipo especializado de recursos humanos directamente en tus instalaciones. Gestionamos todas las funciones de RR.HH. como si fueran parte de tu organización, con la experiencia y eficiencia de un equipo especializado."
          features={[
            'Presencia física en tu empresa',
            'Gestión integral del ciclo del empleado',
            'Clima organizacional y cultura',
            'Capacitación y desarrollo',
            'Nominas y administración de personal',
            'Estrategia de talento alineada a tus objetivos'
          ]}
          image="/images/inplant.png"
          imagePosition="left"
        />
        <ServiceDetail
          id="psicometria"
          title="Psicometría y Evaluación"
          subtitle="Evaluamos con ciencia, seleccionamos con precisión"
          description="Aplicamos pruebas psicométricas validadas y herramientas de evaluación por competencias para garantizar que cada candidato cuente con el perfil ideal. Diagnósticos profundos que minimizan el riesgo de contratación."
          features={[
            'Pruebas psicométricas validadas',
            'Evaluación por competencias',
            'Assessment Center',
            'Evaluación 360°',
            'Diagnóstico de potencial',
            'Reportes ejecutivos detallados'
          ]}
          image="/images/psicometria.png"
          imagePosition="right"
        />
        <ServiceDetail
          id="consultoria"
          title="Consultoría Organizacional"
          subtitle="Transformamos tu organización para competir y ganar"
          description="Acompañamos a tu empresa en procesos de cambio organizacional, diseño de estructuras, análisis de puestos, clima laboral y más. Soluciones a la medida que impulsan el rendimiento de tu equipo."
          features={[
            'Diagnóstico organizacional',
            'Diseño de estructuras y puestos',
            'Estudios de clima laboral',
            'Planes de compensaciones',
            'Desarrollo organizacional',
            'Mejora de procesos de RR.HH.'
          ]}
          image="/images/consultoria.png"
          imagePosition="left"
        />
        <ServiceDetail
          id="outsourcing"
          title="Outsourcing de Nómina"
          subtitle="Libérate de la carga administrativa y enfócate en lo importante"
          description="Externaliza la gestión de tu nómina con nosotros. Nos encargamos de todo: cálculo, pagos, disposiciones legales, reportes y atención a empleados. Reducción de costos y riesgo cero en cumplimiento."
          features={[
            'Cálculo y dispersión de nómina',
            'Manejo de ISR, IMSS, INFONAVIT',
            'PTU y aguinaldo',
            'Reportes gerenciales',
            'Atención a empleados',
            'Respaldo jurídico y fiscal'
          ]}
          image="/images/outsourcing.png"
          imagePosition="right"
        />
        <AboutSection />
        <CandidatosSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackgroundAudio />
    </div>
  )
}
