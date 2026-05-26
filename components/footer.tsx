'use client'

import Image from 'next/image'
import { MessageCircle, Phone, MapPin, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Booking', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="/images/logo-placeholder.jpg"
                  alt="El Bendito Latin Barber logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-primary font-black text-base leading-none uppercase tracking-wider">El Bendito</p>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">Latin Barber</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              El Bendito Latin Barber · Fresh fades, clean cuts and Latin barber style in Adelaide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-black text-xs uppercase tracking-widest mb-5">Navigation</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-black text-xs uppercase tracking-widest mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/61433456793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MessageCircle size={16} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">+61 433 456 793</span>
              </a>
              <a
                href="tel:0405874266"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">0405 874 266</span>
              </a>
              <a
                href="https://www.instagram.com/elbenditolatinbarber/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={16} className="text-primary shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">@elbenditolatinbarber</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm leading-relaxed">47 Torrens Rd, Bowden, Adelaide SA 5007, Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            © 2026 El Bendito Latin Barber. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Created by{' '}
            <a
              href="https://rocketeleven.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Rocket Eleven
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
