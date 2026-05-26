'use client'

import { Scissors, Star, MessageCircle, MapPin } from 'lucide-react'

const trustItems = [
  { icon: Scissors, label: 'Clean fades' },
  { icon: Star, label: 'Latin style' },
  { icon: MessageCircle, label: 'Easy WhatsApp booking' },
  { icon: MapPin, label: 'Located in Bowden' },
]

export function TrustStrip() {
  return (
    <section className="bg-primary py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 py-2"
            >
              <Icon size={18} className="text-primary-foreground shrink-0" aria-hidden="true" />
              <span className="text-primary-foreground font-bold text-sm uppercase tracking-wider whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
