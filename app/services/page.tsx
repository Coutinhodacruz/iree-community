'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Heart, UtensilsCrossed, Shield, Briefcase, ArrowRight, CheckCircle2, Star, Target, Users } from 'lucide-react'

export default function ServicesPage() {
  const categories = [
    {
      id: 1,
      title: 'Healthcare Excellence',
      icon: Heart,
      description: 'Specialized medical staffing for hospitals, private clinics, and residential care environments across Canada.',
      positions: ['Registered Nurse (RN)', 'Registered Practical Nurse (RPN)', 'Personal Support Worker (PSW)', 'Disability Support Worker (DSW)'],
      accent: 'primary'
    },
    {
      id: 2,
      title: 'Hospitality & Culinary',
      icon: UtensilsCrossed,
      description: 'Professional culinary and service staff for hotels, restaurants, and exclusive events.',
      positions: ['Chefs', 'Cooks', 'Housekeeping Aide', 'Cleaners'],
      accent: 'secondary'
    },
    {
      id: 3,
      title: 'Security & Safety',
      icon: Shield,
      description: 'Trained security personnel for government facilities, private businesses, and medical centers.',
      positions: ['Facility Security', 'Event Security', 'Loss Prevention', 'Access Control'],
      accent: 'primary'
    },
    {
      id: 4,
      title: 'General & Industrial',
      icon: Briefcase,
      description: 'Reliable general labor and industrial staffing for factories, warehouses, and logistics.',
      positions: ['Factory Workers', 'Machine Operators', 'Warehouse Staff', 'General Labourers'],
      accent: 'secondary'
    }
  ]

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl space-y-8 animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Our Capabilities
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Staffing <span className="text-gradient">Solutions</span> Tailored to You.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              From pre-birth to end of life care, we provide the workforce that makes health challenges manageable and operational goals achievable.
            </p>
          </div>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-32">
            {categories.map((cat, i) => {
              const IconComp = cat.icon
              const isEven = i % 2 === 0
              return (
                <div key={cat.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className={`lg:col-span-12 xl:col-span-6 space-y-10 ${!isEven ? 'xl:order-2' : ''}`}>
                    <div className="space-y-6">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${cat.accent === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} shadow-inner`}>
                        <IconComp className="w-10 h-10" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{cat.title}</h2>
                      <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                        {cat.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.positions.map((pos, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-border group hover:bg-white hover:shadow-lg transition-all">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 ${cat.accent === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                          <span className="font-bold text-foreground/80 text-sm tracking-tight">{pos}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-2xl shadow-xl shadow-primary/20" asChild>
                        <a href="/contact" className="gap-2">Request This Service <ArrowRight className="w-5 h-5" /></a>
                      </Button>
                    </div>
                  </div>

                  <div className={`lg:col-span-12 xl:col-span-6 ${!isEven ? 'xl:order-1' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl group">
                      <img 
                        src={[
                          '/healthcare-service.png',
                          '/hospitality-service.png',
                          '/security-service.png',
                          '/industrial-service.png'
                        ][i]} 
                        alt={cat.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust & Quality Features */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              Built on <span className="text-gradient">Quality Standards</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Star, 
                title: 'Global HR Leadership', 
                desc: 'Leveraging our position as a global leader to provide top-tier HR services across Canada.' 
              },
              { 
                icon: Target, 
                title: 'Customized Planning', 
                desc: 'We create tailored plans that align perfectly with the unique care goals of our clients and families.' 
              },
              { 
                icon: Users, 
                title: 'Caring Team', 
                desc: 'A workforce trained and passionate about improving the care approach and enhancing independence.' 
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-6">
                <div className="w-14 h-14 bg-white rounded-2xl border border-border shadow-sm flex items-center justify-center text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-white rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white">Ready to <span className="text-primary italic">Connect?</span></h2>
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
              Whether you are an organization in need of excellence or a professional looking for your next challenge, Iree is your trusted partner.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary text-white font-bold h-16 px-12 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
              <a href="/apply" className="text-lg">Apply as Talent</a>
            </Button>
            <Button size="lg" className="border-white/20 text-white h-16 px-12 rounded-2xl transition-all hover:scale-105" asChild>
              <a href="/contact" className="text-lg">Hire Staff Today</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
