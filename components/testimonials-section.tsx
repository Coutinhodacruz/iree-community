'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Hospital Manager',
      company: 'Toronto General Hospital',
      content: 'Iree Community Agency has been an invaluable partner for our staffing needs. Their vetted professionals are reliable, skilled, and professional. Their dedication to quality is unmatched in the industry.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      company: 'Downtown Bistro',
      content: 'Fast turnaround, quality staff, and excellent customer service. They understand our urgent staffing needs and deliver every time, even on short notice. Truly a professional team.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Patricia Williams',
      role: 'Events Director',
      company: 'Grand Events Inc.',
      content: 'Professional, reliable, and easy to work with. Their security and event staff are always punctual, well-trained, and exhibit the highest standards of hospitality.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Hiring Manager',
      company: 'Maple Retirement Living',
      content: 'The quality of candidates and professionalism of the agency is outstanding. They truly care about making the right matches for our specialized care environment.',
      rating: 5,
    },
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-20 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
            Trusted by <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Our commitment to excellence reflected in the voices of our partners across Canada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-10 bg-white border border-border rounded-[2.5rem] hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-foreground font-serif italic relative z-10 leading-relaxed mb-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-5 border-t border-border pt-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-bold">{testimonial.role}</p>
                  <p className="text-sm text-primary font-bold tracking-wide uppercase mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


