'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Clock, BadgeCheck } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-bg.png"
          alt="Professional Staffing Background"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10 animate-reveal">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Premier Staffing Solutions in Canada
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] text-pretty">
                Elevating <span className="text-gradient">Professional Standards</span> in Staffing.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                Connecting Canada's most dedicated professionals with organizations that demand excellence. Specializing in healthcare, hospitality, and security services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                <a href="/apply" className="gap-3 text-lg">
                  Join our Talent Pool <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white border-border text-foreground hover:bg-muted h-16 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <a href="/contact" className="gap-3 text-lg">
                  Request Staff
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-10 border-t border-border">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Vetted Talent</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Rigorous background checks and skill assessments for every candidate.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Rapid Deployment</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Swift placement solutions to meet your urgent operational needs.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BadgeCheck className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold text-foreground">Certified Quality</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">Consistent, high-quality service backed by industry standards.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Decorative Card */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative glass border-border rounded-[2.5rem] p-12 overflow-hidden group shadow-2xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors" />
              
              <div className="relative space-y-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif font-bold text-foreground">Excellence in Motion</h3>
                  <p className="text-muted-foreground">Trusted by top organizations across the Great White North.</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { label: "Placement Success Rate", val: "98%" },
                    { label: "Active Professionals", val: "500+" },
                    { label: "Average Fill Time", val: "24h" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="text-primary font-bold">{stat.val}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: stat.val.includes('%') ? stat.val : '85%' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs font-bold text-white">
                      +100
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">Join <span className="text-foreground font-bold">5,000+</span> professionals already working with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


