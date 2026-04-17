'use client'

import React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowRight, Send, Building2, User, Mail, MapPin, ClipboardList, Clock } from 'lucide-react'

export default function FindTalentPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                Partner With Us
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                What are your <span className="text-gradient">staffing needs?</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                As Healthcare and Staffing needs grow, you need a partner that can help you drive organizational strategy, workforce productivity and business performance; one with the expertise, scope and vision to provide all-encompassing staffing solutions.
              </p>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-foreground">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional Service" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass border-primary/20 p-8 rounded-3xl shadow-2xl max-w-xs transition-transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-foreground uppercase tracking-wider text-sm shadow-sm ring-1 ring-primary/20 bg-primary/10 px-2 py-1 rounded">SEND INQUIRY</h4>
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Bridging the gap between talent and demand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-[2.5rem] border border-border p-8 md:p-16 shadow-2xl shadow-slate-200/50">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Type of Request */}
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="requestType" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-primary" /> Type of Request *
                  </Label>
                  <Select>
                    <SelectTrigger className="h-14 rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all">
                      <SelectValue placeholder="Select talent category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rn">Qualified Nurses – Registered Nurse (RN)</SelectItem>
                      <SelectItem value="rpn">Registered Practical Nurse (RPN)</SelectItem>
                      <SelectItem value="psw">Personal Support Worker (PSW)</SelectItem>
                      <SelectItem value="dsw">Disability Support Worker (DSW)</SelectItem>
                      <SelectItem value="hospitality">Hospitality & Culinary Staff</SelectItem>
                      <SelectItem value="general">General & Industrial Labour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Name */}
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" /> Contact Name *
                  </Label>
                  <Input id="name" placeholder="John Doe" className="h-14 rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" /> Email Address *
                  </Label>
                  <Input id="email" type="email" placeholder="john@organization.com" className="h-14 rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                </div>

                {/* Organization Name */}
                <div className="space-y-3">
                  <Label htmlFor="orgName" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" /> Organization Name *
                  </Label>
                  <Input id="orgName" placeholder="Iree Community Agency" className="h-14 rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Location *
                  </Label>
                  <Input id="location" placeholder="City, Province" className="h-14 rounded-2xl border-border bg-slate-50/50 focus:bg-white transition-all" />
                </div>

                {/* Required Shift */}
                <div className="space-y-6 md:col-span-2 bg-slate-50/50 p-8 rounded-3xl border border-dashed border-border">
                  <Label className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-primary" /> Required Shift *
                  </Label>
                  <RadioGroup defaultValue="full-time" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-border">
                      <RadioGroupItem value="full-time" id="ft" />
                      <Label htmlFor="ft" className="font-bold cursor-pointer">Full Time</Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-border">
                      <RadioGroupItem value="part-time" id="pt" />
                      <Label htmlFor="pt" className="font-bold cursor-pointer">Part Time</Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-border">
                      <RadioGroupItem value="overnight" id="ov" />
                      <Label htmlFor="ov" className="font-bold cursor-pointer">Overnight</Label>
                    </div>
                    <div className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-border">
                      <RadioGroupItem value="weekends" id="wk" />
                      <Label htmlFor="wk" className="font-bold cursor-pointer">Weekends</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Describe Needs */}
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="needs" className="text-sm font-bold uppercase tracking-wider text-foreground/70 flex items-center gap-2">
                    Describe Staffing Needs
                  </Label>
                  <Textarea id="needs" placeholder="Please provide more details about your specific requirements..." className="min-h-[150px] rounded-[2rem] border-border bg-slate-50/50 focus:bg-white transition-all p-6" />
                </div>
              </div>

              <div className="pt-8 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-16 rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 text-lg gap-3">
                  Submit Request <Send className="w-5 h-5" />
                </Button>
                <p className="mt-6 text-sm text-muted-foreground font-medium italic">
                  * Our team typically responds to staffing requests within 2 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
