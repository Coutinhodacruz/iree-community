'use client'

import React from 'react'
import { CheckCircle2, Heart, Utensils, Briefcase, UserCheck, Search } from 'lucide-react'

const sectors = [
  {
    category: "Qualified Nurses",
    roles: ["Registered Nurse (RN)", "Registered Practical Nurse (RPN)"],
    icon: Heart
  },
  {
    category: "Support Workers",
    roles: ["Personal Support Worker (PSW)", "Disability Support Worker (DSW)"],
    icon: UserCheck
  },
  {
    category: "Hospitality & Aide",
    roles: ["Housekeeper (Cleaners) Aide", "Waiters", "Kitchen Aide", "Banquet Server", "Event Support Staff"],
    icon: Utensils
  },
  {
    category: "Industrial & General",
    roles: ["General Labourer – Factory Workers"],
    icon: Briefcase
  }
]

export function SectorsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Sectors We Cover
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              Specialized <span className="text-gradient">Placement</span> Solutions.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Our specialized services include the supply of temporary and permanent professionals across healthcare, hospitality, and industrial sectors.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {sectors.map((sector, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-border bg-slate-50/30 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <sector.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{sector.category}</h3>
                </div>
                <div className="space-y-4">
                  {sector.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground font-semibold text-sm tracking-tight">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
