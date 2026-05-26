'use client'

import { MessageCircle } from 'lucide-react'

const WA_LINK =
  'https://wa.me/61433456793?text=Hi%20El%20Bendito%2C%20I%20would%20like%20to%20book%20an%20appointment.'

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-primary text-primary-foreground pl-4 pr-5 py-3.5 rounded-full font-black text-sm uppercase tracking-wider shadow-2xl shadow-primary/40 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-200"
    >
      <MessageCircle size={22} className="shrink-0" aria-hidden="true" />
      <span>Book</span>
    </a>
  )
}
