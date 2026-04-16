'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section id="apply" className="py-32 relative overflow-hidden bg-white">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="bg-white border border-border rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
          {/* Animated glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors" />
          
          <div className="relative space-y-10 animate-reveal">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mx-auto">
                Careers
              </div>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                Shape Your <span className="text-gradient">Professional</span> Future
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Join Canada's elite staffing network. Whether you're seeking excellence or providing it, Iree Community Agency is your bridge to success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-12 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                <a href="/apply" className="gap-3 text-lg">
                  Apply Today <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-border text-foreground hover:bg-muted h-16 px-12 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <a href="/contact" className="text-lg">Inquire Now</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-border">
              <div>
                <p className="text-4xl font-serif font-bold text-foreground mb-2">500+</p>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Annual Placements</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-foreground mb-2">100%</p>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Vetted Talent</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-foreground mb-2">24h</p>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


