'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/find-talent', label: 'Find Talent' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5 mx-4 mt-4 rounded-2xl overflow-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Logo" className="w-20 h-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors group/link"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Contact Info and Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:Ireecommunityagency@gmail.com"
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Ireecommunityagency@gmail.com
            </a>
            <Button
              asChild
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 shadow-lg shadow-primary/20"
            >
              <a href="/apply">Apply Now</a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-black/5 rounded-xl transition-colors"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 animate-reveal bg-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl text-lg shadow-xl shadow-primary/20"
              >
                <a href="/apply">Apply Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


