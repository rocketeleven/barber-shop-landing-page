'use client'

import { MapPin, Navigation, MessageCircle } from 'lucide-react'

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=47%20Torrens%20Rd%20Bowden%20Adelaide%20SA%205007%20Australia'
const WA_LINK =
  'https://wa.me/61433456793?text=Hi%20El%20Bendito%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20times.'

export function LocationSection() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            <MapPin size={16} className="inline mr-2" aria-hidden="true" />
            📍 Where we are
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            Find us in Bowden
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            El Bendito Latin Barber is located at 47 Torrens Rd, Bowden, Adelaide SA 5007, Australia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Map card placeholder */}
          <div className="relative bg-card border border-border rounded-2xl overflow-hidden min-h-72 lg:min-h-96 flex items-center justify-center">
            {/* Grid pattern to mimic map */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(oklch(0.78 0.18 85) 1px, transparent 1px),
                  linear-gradient(90deg, oklch(0.78 0.18 85) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
            {/* Roads */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary" />
              <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-primary" />
              <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-primary" />
              <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-primary/50" />
              <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-primary/50" />
            </div>

            {/* Pin */}
            <div className="relative flex flex-col items-center gap-3 z-10">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/40 animate-bounce">
                <MapPin size={28} className="text-primary-foreground" aria-hidden="true" />
              </div>
              <div className="bg-background/90 backdrop-blur-sm border border-primary/30 rounded-xl px-5 py-3 text-center">
                <p className="text-primary font-black text-sm uppercase tracking-wider">El Bendito</p>
                <p className="text-foreground text-xs mt-0.5">47 Torrens Rd, Bowden SA</p>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-wide text-foreground mb-6">
                Visit the shop
              </h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <MapPin size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground font-medium">47 Torrens Rd, Bowden</p>
                    <p className="text-muted-foreground text-sm">Adelaide SA 5007, Australia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                    <Navigation size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">Suburb</p>
                    <p className="text-foreground font-medium">Bowden / Adelaide</p>
                    <p className="text-muted-foreground text-sm">South Australia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all flex-1"
              >
                <Navigation size={16} />
                Get directions
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all flex-1"
              >
                <MessageCircle size={16} />
                Book by WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
