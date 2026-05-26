'use client'

import Image from 'next/image'
import { MessageCircle, Instagram } from 'lucide-react'

const WA_LINK =
  'https://wa.me/61433456793?text=Hi%20El%20Bendito%2C%20I%20would%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20the%20available%20times.'
const IG_LINK = 'https://www.instagram.com/elbenditolatinbarber/'

const floatingBadges = [
  { text: '🔥 Fresh fades', delay: 'delay-300' },
  { text: '✂️ Skin fade', delay: 'delay-500' },
  { text: '💈 Latin barber', delay: 'delay-700' },
  { text: '📍 Adelaide', delay: 'delay-1000' },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, oklch(0.78 0.18 85) 0px, oklch(0.78 0.18 85) 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1.5 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
              Bowden, Adelaide SA
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-balance mb-4">
              <span className="text-foreground">El Bendito</span>
              <br />
              <span className="text-primary">Latin</span>
              <br />
              <span className="text-foreground">Barber</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-muted-foreground mb-3 text-balance">
              Fresh fades, clean cuts &amp; Latin barber style in Adelaide.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-balance">
              Book your next haircut, skin fade, beard trim or line up directly through WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded font-bold text-base uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                <MessageCircle size={20} />
                Book your appointment
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded font-bold text-base uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
              >
                <Instagram size={20} />
                View Instagram
              </a>
            </div>
          </div>

          {/* Right — vertical media card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Main card */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10">
                {/* Replace this Image src with a real hero image/video later */}
                <video
                  src="/videos/el-bendito.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Bottom card label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/70 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-3">
                    <p className="text-primary font-black text-sm uppercase tracking-wider">El Bendito</p>
                    <p className="text-foreground/80 text-xs">Latin Barber · Bowden, Adelaide</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-10 top-12 flex flex-col gap-2">
                {floatingBadges.slice(0, 2).map((badge) => (
                  <span
                    key={badge.text}
                    className={`bg-background border border-primary/50 text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-fade-in ${badge.delay}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
              <div className="absolute -right-10 bottom-32 flex flex-col gap-2">
                {floatingBadges.slice(2).map((badge) => (
                  <span
                    key={badge.text}
                    className={`bg-background border border-primary/50 text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-fade-in ${badge.delay}`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* Gold glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
