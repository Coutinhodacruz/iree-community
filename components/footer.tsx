'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-white border-t border-border pt-32 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[140px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Company Info */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg">
                I
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-foreground leading-tight">
                  Iree <span className="text-primary italic">Community</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Staffing Solutions</span>
              </div>
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm font-medium">
              The premier choice for professional staffing across Canada. Elevating standards in healthcare, hospitality, and security services.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Company</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Apply Now'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-medium">
                    <span className="w-1.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Solutions</h3>
            <ul className="space-y-4">
              {['Healthcare', 'Hospitality', 'Security', 'General Staffing'].map((item) => (
                <li key={item}>
                  <a href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group font-medium">
                    <span className="w-1.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">Contact</h3>
            <div className="space-y-6">
              <a
                href="mailto:info@ireecommunitragency.com"
                className="group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Us</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">info@ireecommunitragency.com</p>
                </div>
              </a>
              <a
                href="tel:6472007442"
                className="group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Call Us</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">647-200-7442</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                  <p className="text-foreground font-medium">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {currentYear} Iree Community Agency. <span className="text-foreground font-bold italic">Elevating Standards.</span>
          </p>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


