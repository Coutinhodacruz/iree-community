'use client'

import { Card } from '@/components/ui/card'
import { Heart, UtensilsCrossed, Shield, Briefcase, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Healthcare Staffing',
      description: 'PSWs, Nurses, Dietitians, and other healthcare professionals for hospitals, clinics, and care facilities.',
      icon: Heart,
      accent: 'primary',
    },
    {
      id: 2,
      title: 'Hospitality Staffing',
      description: 'Wait staff, kitchen assistants, housekeeping, and event personnel for restaurants and hotels.',
      icon: UtensilsCrossed,
      accent: 'secondary',
    },
    {
      id: 3,
      title: 'Security Services',
      description: 'Trained security personnel for events, facilities, and ongoing security requirements.',
      icon: Shield,
      accent: 'primary',
    },
    {
      id: 4,
      title: 'General Staffing',
      description: 'Administrative, warehouse, manufacturing, and other general labor positions across industries.',
      icon: Briefcase,
      accent: 'secondary',
    },
  ]

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
            Core <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Delivering precision-matched talent across diverse sectors in Canada. Professionalism, reliability, and excellence in every placement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className="group relative h-[420px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-sm hover:shadow-xl"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card Content with Glass effect */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-border p-10 flex flex-col h-full z-10 transition-colors group-hover:bg-white/80">
                  <div className="relative mb-8 text-foreground">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow font-medium">
                    {service.description}
                  </p>

                  <div className="pt-6">
                    <a
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-foreground group/btn"
                    >
                      <span className="relative">
                        Explore Service
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Decorative hover effect */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


