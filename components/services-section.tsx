'use client'

import { Scissors, Flame, Zap, Star, User, Smile } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    emoji: '✂️',
    name: "Men's Haircut",
    description: 'Clean, modern cuts tailored to your style.',
  },
  {
    icon: Flame,
    emoji: '🔥',
    name: 'Fade',
    description: 'Sharp fades with smooth transitions and a clean finish.',
  },
  {
    icon: User,
    emoji: '💈',
    name: 'Skin Fade',
    description: 'High-detail skin fades for a fresh, polished look.',
  },
  {
    icon: Smile,
    emoji: '🧔',
    name: 'Beard Trim',
    description: 'Shape, clean up and define your beard.',
  },
  {
    icon: Zap,
    emoji: '⚡',
    name: 'Line Up',
    description: 'Crisp edges and detailed finishing.',
  },
  {
    icon: Star,
    emoji: '⭐',
    name: 'Kids Cut',
    description: 'Fresh and clean cuts for young clients.',
  },
]

function buildWaLink(serviceName: string) {
  const msg = encodeURIComponent(
    `Hi El Bendito, I would like to book ${serviceName}. Please let me know the available times.`
  )
  return `https://wa.me/61433456793?text=${msg}`
}

interface ServiceCardProps {
  emoji: string
  name: string
  description: string
}

function ServiceCard({ emoji, name, description }: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 flex flex-col gap-4">
      <div className="text-3xl" aria-hidden="true">{emoji}</div>
      <div>
        <h3 className="text-lg font-black uppercase tracking-wide text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto pt-2">
        <a
          href={buildWaLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center border border-primary text-primary px-4 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          Book this service
        </a>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">What we offer</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            Our services
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            Choose your style and book directly through WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
