'use client'

import React from 'react'
import { Clock, Star, Users, Briefcase, Zap, ShieldCheck, DollarSign } from 'lucide-react'

const features = [
  {
    title: "On Demand Support",
    description: "Our staffing solutions align our clients with highly qualified talent that are ready to fulfill your organization's needs.",
    icon: Zap
  },
  {
    title: "Quality Talent",
    description: "Have the peace of mind of hiring from a pool of experienced and thoroughly screened healthcare professionals.",
    icon: Star
  },
  {
    title: "Temporary Staffing",
    description: "Use our service as long as you need. We are consistently filling our pipeline to attract candidates that meet your requirements.",
    icon: Clock
  },
  {
    title: "Budget Friendly",
    description: "We demonstrate our commitment to being your partners in that we keep our rates low to help you meet your tight financial budget.",
    icon: DollarSign
  }
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center space-y-6 group">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-primary/5">
                <feature.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
