'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Utensils, Shield, Briefcase } from 'lucide-react'

const slides = [
  {
    title: "Full Service Temporary and Direct Hire Placement Firm.",
    subtitle: "We make your life easier by specializing in and providing you with the most appropriate healthcare staffing solutions.",
    highlight: "Healthcare Excellence",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=2000",
    icon: Heart,
    cta: "View Services",
    href: "/services"
  },
  {
    title: "World-Class Hospitality & Culinary Staffing.",
    subtitle: "From executive chefs to front-of-house experts, we connect you with professionals who elevate your brand.",
    highlight: "Hospitality & Service",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=2000",
    icon: Utensils,
    cta: "Hire Talent",
    href: "/contact"
  },
  {
    title: "Reliable Industrial & General Labour Solutions.",
    subtitle: "Boosting operational efficiency with a vetted, skilled workforce ready to adapt to your specific industrial needs.",
    highlight: "Industrial Solutions",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    icon: Briefcase,
    cta: "Join our Pool",
    href: "/apply"
  }
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 45 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    
    const autoPlay = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)

    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(autoPlay)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center pt-24 md:pt-32">
                <div className="max-w-4xl space-y-6 md:space-y-8 animate-reveal">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {slide.highlight}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] max-w-3xl">
                    {slide.title.split(' ').map((word, i) => {
                      const isHighlighted = word.toLowerCase().includes('excellence') || 
                                          word.toLowerCase().includes('staffing') ||
                                          word.toLowerCase().includes('hospitality');
                      return (
                        <span key={i} className={isHighlighted ? "text-primary italic" : ""}>
                          {word}{' '}
                        </span>
                      )
                    })}
                  </h1>
                  
                  <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5 pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105"
                    >
                      <a href={slide.href} className="gap-3 text-lg">
                        {slide.cta} <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 hidden md:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all z-20 hidden md:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2.5 transition-all rounded-full ${selectedIndex === i ? 'w-10 bg-primary' : 'w-2.5 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  )
}


