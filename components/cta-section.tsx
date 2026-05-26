'use client'

import { MessageCircle, Instagram } from 'lucide-react'

const WA_LINK =
  'https://wa.me/61433456793?text=Hi%20El%20Bendito%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20times.'
const IG_LINK = 'https://www.instagram.com/elbenditolatinbarber/'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(0.78 0.18 85) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
          Book today
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-foreground mb-6 text-balance">
          Ready for a{' '}
          <span className="text-primary">fresh</span>
          {' '}cut?
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto text-balance">
          Book your next appointment with El Bendito Latin Barber through WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded font-black text-base uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all shadow-2xl shadow-primary/30 text-balance"
          >
            <MessageCircle size={22} />
            Book now on WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-border text-foreground px-10 py-5 rounded font-black text-base uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
          >
            <Instagram size={22} />
            View Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
