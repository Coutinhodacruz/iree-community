'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { IndustriesSection } from '@/components/industries-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
