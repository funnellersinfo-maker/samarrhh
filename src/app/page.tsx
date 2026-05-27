'use client'

import Navigation from '@/components/samarrhh/Navigation'
import HeroSection from '@/components/samarrhh/HeroSection'
import AuthoritySection from '@/components/samarrhh/AuthoritySection'
import ServicesSection from '@/components/samarrhh/ServicesSection'
import TimelineSection from '@/components/samarrhh/TimelineSection'
import DifferentiatorsSection from '@/components/samarrhh/DifferentiatorsSection'
import CandidatosSection from '@/components/samarrhh/CandidatosSection'
import LeadFormSection from '@/components/samarrhh/LeadFormSection'
import Footer from '@/components/samarrhh/Footer'
import WhatsAppFloat from '@/components/samarrhh/WhatsAppFloat'
import BackgroundAudio from '@/components/samarrhh/BackgroundAudio'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-premium text-white overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AuthoritySection />
        <ServicesSection />
        <TimelineSection />
        <DifferentiatorsSection />
        <CandidatosSection />
        <LeadFormSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackgroundAudio />
    </div>
  )
}
