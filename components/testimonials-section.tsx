'use client'

import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
}

function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-primary/30 transition-all duration-300">
      <Quote size={32} className="text-primary/40" aria-hidden="true" />
      <p className="text-foreground text-lg font-medium leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-foreground font-bold text-sm">{name}</p>
          <p className="text-muted-foreground text-xs uppercase tracking-wider mt-0.5">Verified client</p>
        </div>
        <div className="flex items-center gap-0.5" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="text-primary fill-primary" aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote: 'Clean fade and great attention to detail.',
    name: 'Client review',
  },
  {
    quote: 'Great Latin vibe, friendly service and sharp cuts.',
    name: 'Client review',
  },
  {
    quote: 'Easy to book and always a fresh result.',
    name: 'Client review',
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            ⭐ Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            What clients say
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
