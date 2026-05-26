'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/61433456793?text=Hi%20El%20Bendito%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20times.'

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-primary/20">
              <Image
                src="/images/bendito-about-barber.jpg"
                alt="El Bendito barber in his shop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Decorative gold accent line */}
            <div className="absolute -bottom-4 -left-4 w-2/3 h-1 bg-primary rounded-full" />
            <div className="absolute -top-4 -right-4 w-1/3 h-1 bg-primary rounded-full" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight text-foreground mb-6 text-balance">
              More than a haircut
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              El Bendito Latin Barber brings Latin energy, precision and style to every cut. A place for
              fresh fades, sharp details and a confident look.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-black text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Precision cuts</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-black text-primary">5★</p>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Client satisfaction</p>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              <MessageCircle size={18} />
              Book now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
