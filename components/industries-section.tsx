'use client'

import { Hospital, Utensils, BookOpen, Building2, Glasses, Briefcase } from 'lucide-react'

export function IndustriesSection() {
  const industries = [
    { name: 'Hospitals', icon: Hospital, desc: 'Critical care support' },
    { name: 'Care Homes', icon: Building2, desc: 'Dedicated PSW staffing' },
    { name: 'Hospitality', icon: Utensils, desc: 'Premium event service' },
    { name: 'Education', icon: BookOpen, desc: 'Safe learning environments' },
    { name: 'Corporate', icon: Briefcase, desc: 'Professional office support' },
    { name: 'Events', icon: Glasses, desc: 'Dynamic security & ushering' },
  ]

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 animate-reveal">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Versatility
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Sectors of <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              We provide specialized staffing solutions across Canada's most vital industries, ensuring quality and commitment in every role.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-muted-foreground text-sm font-bold border-l-2 border-primary/20 pl-6 py-2">
              Over 15+ specialized <br /> sectors supported
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div
                key={index}
                className="group relative p-10 bg-white border border-border rounded-3xl hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shrink-0">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors font-medium">
                      {industry.desc}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
