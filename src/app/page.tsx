'use client'

import Navigation from '@/components/samarrhh/Navigation'
import HeroSection from '@/components/samarrhh/HeroSection'
import PainSection from '@/components/samarrhh/PainSection'
import SolutionSection from '@/components/samarrhh/SolutionSection'
import ServicesSection from '@/components/samarrhh/ServicesSection'
import CTASection from '@/components/samarrhh/CTASection'
import Footer from '@/components/samarrhh/Footer'
import WhatsAppFloat from '@/components/samarrhh/WhatsAppFloat'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-premium text-white">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
