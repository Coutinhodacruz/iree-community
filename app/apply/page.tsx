'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { Briefcase, CheckCircle2, Award } from 'lucide-react'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    message: '',
  })

  const positions = [
    'Personal Support Worker (PSW)',
    'Registered Nurse (RN)',
    'Licensed Practical Nurse (LPN)',
    'Kitchen Staff',
    'Wait Staff',
    'Security Guard',
    'Warehouse Worker',
    'Administrative Assistant',
    'Other',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePositionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, position: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for applying! We will review your application and contact you soon.')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null,
      message: '',
    })
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Apply now to connect with exciting employment opportunities across Canada
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Work With Iree Community Agency?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-8">
              <Briefcase className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Diverse Opportunities
              </h3>
              <p className="text-muted-foreground">
                Access to positions across healthcare, hospitality, security, and general staffing
              </p>
            </Card>
            <Card className="bg-white p-8">
              <Award className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Competitive Compensation
              </h3>
              <p className="text-muted-foreground">
                Fair pay rates and benefits for qualified professionals
              </p>
            </Card>
            <Card className="bg-white p-8">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Professional Support
              </h3>
              <p className="text-muted-foreground">
                Dedicated support team to help with job placement and career growth
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Apply for a Position
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll review your application shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(647) 200-7442"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-foreground mb-2">
                    Position of Interest *
                  </label>
                  <Select value={formData.position} onValueChange={handlePositionChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((pos) => (
                        <SelectItem key={pos} value={pos}>
                          {pos}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-foreground mb-2">
                    Years of Relevant Experience *
                  </label>
                  <Input
                    id="experience"
                    name="experience"
                    type="number"
                    min="0"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 5"
                    required
                    className="w-full"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Tell Us About Yourself
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your skills, certifications, and what you're looking for in your next position..."
                    className="w-full min-h-32"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Submit Application
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We&apos;ll review your application and contact you within 24-48 hours.
                </p>
              </form>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Have questions? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:6472007442"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                📞 647-200-7442
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a
                href="mailto:info@ireecommunitragency.com"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                ✉️ info@ireecommunitragency.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Grow Your Career?</h2>
          <p className="text-lg opacity-90">
            Submit your application today and let&apos;s find the perfect opportunity for you.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
