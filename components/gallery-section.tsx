'use client'

import Image from 'next/image'
import { Instagram } from 'lucide-react'

const IG_LINK = 'https://www.instagram.com/elbenditolatinbarber/'

const galleryItems = [
  { src: '/images/gallery-fade.jpg', alt: 'Low fade haircut' },
  { src: '/images/gallery-skinfade.jpg', alt: 'Skin fade haircut' },
  { src: '/images/gallery-beard.jpg', alt: 'Beard trim and shape' },
  { src: '/images/gallery-lineup.jpg', alt: 'Line up with straight razor' },
  { src: '/images/gallery-chair.jpg', alt: 'Classic barber chair' },
  { src: '/images/gallery-interior.jpg', alt: 'Barbershop interior' },
  { src: '/images/gallery-transformation.jpg', alt: 'Client haircut transformation' },
  { src: '/images/gallery-tools.jpg', alt: 'Professional barber tools' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Our work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            Fresh cuts, real clients
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            Check out recent fades, cuts and styles from El Bendito.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Instagram size={18} />
            View more on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
