'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Target, Users, Award, Shield, Heart, Briefcase, Info } from 'lucide-react'

export default function AboutPage() {
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
              Our Identity
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              A Global Leader in <span className="text-gradient">HR Excellence</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              IREE Community Agency is dedicated to partnering with clients and families to deliver care that makes life easier and health challenges manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Customized Care for Every <span className="text-primary italic">Stage of Life</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                <p>
                  From pre-birth to end of life and every stage in between, we work together to create customized plans that achieve your unique care goals.
                </p>
                <p>
                  As a global leader in the HR services industry, our agency brings world-class expertise to the local level in Canada, ensuring that every placement is backed by rigorous standards and a compassionate heart.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary text-white rounded-2xl h-14 px-8 shadow-xl shadow-primary/20" asChild>
                  <a href="/services">View Our Services</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/about-team.png" 
                  alt="Our professional healthcare team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass border-primary/20 p-8 rounded-3xl shadow-2xl max-w-xs group transition-transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground">Trusted Provider</h4>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Recognized for excellence in private and government healthcare staffing across Canada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white p-12 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <Target className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                To become the most trusted brand for quality staffing solutions when you need healthcare support the most. We aim to be the first name organizations think of for reliability and quality.
              </p>
            </div>
            <div className="group bg-white p-12 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                <Award className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                To provide a motivated and focused workforce that is trained and passionate about improving the care approach. We champion the needs of clients and families, delivering integrated, high-quality care that creates possibilities for independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Professionals */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Our Expert <span className="text-gradient">Workforce</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We provide a diverse range of specialized personnel to meet every operational and healthcare need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'Qualified Nurses', roles: ['RN (Registered Nurse)', 'RPN (Registered Practical Nurse)'] },
              { type: 'Support Workers', roles: ['PSW (Personal Support Worker)', 'DSW (Disability Support Worker)'] },
              { type: 'Hospitality Experts', roles: ['Cooks', 'Chefs', 'Kitchen Assistants'] },
              { type: 'Care Aides', roles: ['Housekeepers', 'Cleaners', 'Dietitians'] },
              { type: 'General Labour', roles: ['Factory Workers', 'Warehouse Staff', 'Machine Operators'] },
              { type: 'Specialized Staff', roles: ['Administrative', 'Customer Service', 'Facility Security'] }
            ].map((category, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-foreground flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.type}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.roles.map((role, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white border border-border rounded-lg text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Detail */}
      <section className="py-32 bg-foreground text-white rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -z-10 blur-3xl rounded-full" />
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-7 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-serif font-bold">Why <span className="text-primary italic">IREE Agency?</span></h2>
                <p className="text-xl text-white/70 leading-relaxed font-medium">
                  We bridge the gap between skilled medical personnel and the facilities that need them most, from residential care to government prisons and businesses.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Versatile Expertise</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Catering to residential homes, hospitals, prisons, schools, and private businesses across Canada.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                    <Info className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Skilled & Adaptable</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Professionals proficient in their area who quickly adapt to existing systems to ensure seamless care.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Future Proof</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Staying ahead with technological advancements and continuous recruitment strategies.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Open Communication</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Maintaining clear, constant lines with clients to ensure expectations are not just met, but exceeded.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-10 animate-reveal">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Ready to <span className="text-primary italic">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Experience the standard in professional staffing. Whether you need an RN today or are looking for your next career move, we are here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary text-white font-bold h-16 px-12 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
              <a href="/apply" className="text-lg">Apply for a Position</a>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground h-16 px-12 rounded-2xl transition-all hover:scale-105" asChild>
              <a href="/contact" className="text-lg">Request Staffing</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

