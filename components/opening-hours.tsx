'use client'

import { Clock, Phone, MapPin } from 'lucide-react'

const hours = [
  { days: 'Monday – Wednesday', time: '10:00 AM – 7:00 PM', open: true },
  { days: 'Thursday – Friday', time: '10:00 AM – 8:30 PM', open: true },
  { days: 'Saturday', time: '9:00 AM – 6:00 PM', open: true },
  { days: 'Sunday', time: 'Closed', open: false },
]

export function OpeningHours() {
  return (
    <section id="hours" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            <Clock size={16} className="inline mr-2" aria-hidden="true" />
            Schedule
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            Opening hours
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
          {hours.map((row, index) => (
            <div
              key={row.days}
              className={`flex items-center justify-between px-6 py-4 ${
                index !== hours.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="font-semibold text-foreground text-sm sm:text-base">{row.days}</span>
              <span
                className={`font-bold text-sm sm:text-base ${
                  row.open ? 'text-primary' : 'text-muted-foreground/50 uppercase tracking-wider text-xs'
                }`}
              >
                {row.time}
              </span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm text-center mb-10">
          Hours may vary. Please confirm your appointment by WhatsApp.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
            <Phone size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">Phone</p>
              <a href="tel:0405874266" className="text-foreground font-bold hover:text-primary transition-colors">
                0405 874 266
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
            <MapPin size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">Address</p>
              <p className="text-foreground font-medium text-sm">47 Torrens Rd, Bowden, Adelaide SA 5007, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
