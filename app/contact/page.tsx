'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Facebook, Twitter, Shield } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success('Message Sent!', {
          description: 'Thank you for your message! We will get back to you shortly.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error('Failed to send message', {
          description: 'Please try again or contact us directly.',
        })
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('An error occurred', {
        description: 'Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl space-y-8 animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Let&apos;s Build Something <span className="text-gradient">Great</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Have questions about our staffing solutions? Our team is here to provide the support and personnel you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-serif font-bold text-foreground">Contact <span className="text-primary italic">Information</span></h2>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Connect with Canada&apos;s most reliable staffing agency. Whether you&apos;re an employer or a job seeker, we provide 24/7 support.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Email Us</p>
                    <a href="mailto:Ireecommunityagency@gmail.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors">Ireecommunityagency@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Call Us</p>
                    <a href="tel:6472007442" className="text-xl font-bold text-foreground hover:text-primary transition-colors">647-200-7442</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Office Location</p>
                    <p className="text-xl font-bold text-foreground">2275 Upper Middle Rd E Suite 101, Oakville, ON L6H 0C3</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">Operating Hours</p>
                    <p className="text-xl font-bold text-foreground">Mon - Fri: 9 AM - 6 PM</p>
                    <p className="text-sm text-muted-foreground font-medium">Available 24/7 for emergency staffing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">Follow Our Community</p>
                <div className="flex gap-4">
                  {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-xl bg-slate-50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="bg-white border border-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <div className="relative space-y-10">
                  <div className="space-y-3 font-serif">
                    <h3 className="text-3xl font-bold text-foreground">Send a <span className="text-primary italic">Message</span></h3>
                    <p className="text-muted-foreground font-medium">We usually respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 ml-1">Full Name</label>
                        <Input 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          placeholder="Your Name" 
                          required 
                          className="h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 ml-1">Email Address</label>
                        <Input 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          placeholder="you@email.com" 
                          required 
                          className="h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 ml-1">Phone Number</label>
                        <Input 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          placeholder="(647) 000-0000" 
                          className="h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 ml-1">Inquiry Type</label>
                        <Input 
                          name="subject" 
                          value={formData.subject} 
                          onChange={handleChange} 
                          placeholder="Staffing / Career / Other" 
                          required 
                          className="h-14 rounded-xl border-border bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-foreground/70 ml-1">Message Detail</label>
                      <Textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell us about your requirements..." 
                        required 
                        className="min-h-[160px] rounded-xl border-border bg-slate-50/50 focus:bg-white focus:ring-primary/20 transition-all resize-none p-4"
                      />
                    </div>

                    <Button disabled={isSubmitting} type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                      {isSubmitting ? 'Sending...' : (
                        <>Send Inquiry <Send className="w-5 h-5 ml-2" /></>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Final CTA */}
      <section className="py-24 bg-slate-50 mx-4 md:mx-10 rounded-[3rem] mb-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">Experience the <span className="text-primary italic">IREE Standard.</span></h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">Providing world-class staffing excellence across Canada&apos;s most vital sectors.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-border shadow-sm">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">24/7 Priority Support</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-border shadow-sm">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="font-bold text-foreground">Vetted Professionals</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

