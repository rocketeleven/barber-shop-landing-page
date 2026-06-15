'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail, Calendar } from 'lucide-react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const SERVICES = [
  "Men's Haircut",
  'Fade',
  'Skin Fade',
  'Beard Trim',
  'Line Up',
  'Kids Cut',
  'Other',
]

const MIN_YEAR = 2026
const MAX_YEAR = 2027

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function BookingCalendar() {
  const today = new Date()

  const [year, setYear] = useState(today.getFullYear() < MIN_YEAR ? MIN_YEAR : today.getFullYear())
  const [month, setMonth] = useState(today.getFullYear() < MIN_YEAR ? 0 : today.getMonth())
  const [selected, setSelected] = useState<{ year: number; month: number; day: number } | null>(null)
  const [sundayWarning, setSundayWarning] = useState(false)

  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)

  function prevMonth() {
    if (month === 0) {
      if (year > MIN_YEAR) {
        setMonth(11)
        setYear((y) => y - 1)
      }
    } else {
      setMonth((m) => m - 1)
    }
  }

  function nextMonth() {
    if (month === 11) {
      if (year < MAX_YEAR) {
        setMonth(0)
        setYear((y) => y + 1)
      }
    } else {
      setMonth((m) => m + 1)
    }
  }

  function handleDayClick(day: number) {
    const dow = new Date(year, month, day).getDay()

    if (dow === 0) {
      setSundayWarning(true)
      setSelected(null)
      return
    }

    setSundayWarning(false)
    setSelected({ year, month, day })
  }

  const isPrevDisabled = year === MIN_YEAR && month === 0
  const isNextDisabled = year === MAX_YEAR && month === 11

  const selectedDateStr = selected
    ? new Date(selected.year, selected.month, selected.day).toLocaleDateString('en-AU', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  const bookingEmail = 'Josealexandercordobaibarguen@gmail.com'

  const emailLink =
    selectedDateStr && clientName.trim() && clientPhone.trim() && service
      ? `mailto:${bookingEmail}?subject=${encodeURIComponent(
          `Booking request for ${selectedDateStr} | El Bendito Latin Barber`
        )}&body=${encodeURIComponent(
          `Hi El Bendito Latin Barber,

I would like to book an appointment.

Selected date: ${selectedDateStr}
Name: ${clientName}
Phone number: ${clientPhone}
Preferred service: ${service}
Additional message: ${message || 'No additional message'}

Please confirm the available time for that day.

Thank you.`
        )}`
      : '#'

  const canSendBooking = Boolean(selectedDateStr && clientName.trim() && clientPhone.trim() && service)

  return (
    <section id="booking" className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            <Calendar size={16} className="inline mr-2" aria-hidden="true" />
            📅 Schedule
          </p>

          <h2 className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight text-foreground mb-4 text-balance">
            Book your appointment
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />

          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-balance">
            Select a date, fill in your details and send your booking request by email.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <button
              onClick={prevMonth}
              disabled={isPrevDisabled}
              aria-label="Previous month"
              className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-foreground"
            >
              <ChevronLeft size={20} />
            </button>

            <h3 className="text-xl font-black uppercase tracking-wider text-foreground">
              {MONTHS[month]} {year}
            </h3>

            <button
              onClick={nextMonth}
              disabled={isNextDisabled}
              aria-label="Next month"
              className="p-2 rounded-lg hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-foreground"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 border-b border-border">
            {DAYS.map((d) => (
              <div
                key={d}
                className={`py-3 text-center text-xs font-bold uppercase tracking-wider ${
                  d === 'Sun' ? 'text-muted-foreground/40' : 'text-muted-foreground'
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 p-4 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dow = new Date(year, month, day).getDay()
              const isSunday = dow === 0
              const isSelected =
                selected?.year === year &&
                selected?.month === month &&
                selected?.day === day

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  disabled={isSunday}
                  aria-label={isSunday ? `${day} — Closed Sunday` : `Select ${day}`}
                  aria-pressed={isSelected}
                  className={`
                    relative aspect-square rounded-lg text-sm font-bold transition-all duration-150
                    ${
                      isSunday
                        ? 'text-muted-foreground/30 cursor-not-allowed line-through'
                        : isSelected
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                          : 'text-foreground hover:bg-secondary hover:text-primary'
                    }
                  `}
                >
                  {day}
                </button>
              )
            })}
          </div>

          <div className="px-6 pb-6 border-t border-border pt-5">
            {sundayWarning && (
              <div className="mb-4 bg-secondary border border-border rounded-lg px-4 py-3 text-muted-foreground text-sm font-medium">
                Closed on Sundays. Please choose another date.
              </div>
            )}

            {selected ? (
              <div className="space-y-5">
                <div className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-1">
                    Selected date
                  </p>

                  <p className="text-foreground font-bold">{selectedDateStr}</p>

                  <p className="text-muted-foreground text-xs mt-1">
                    We’ll confirm the available time by email.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Enter your phone"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">
                      Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2">
                      Message optional
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Example: I prefer afternoon if available."
                      rows={3}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary resize-none"
                    />
                  </div>
                </div>

                <a
                  href={emailLink}
                  onClick={(e) => {
                    if (!canSendBooking) e.preventDefault()
                  }}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all shadow-lg w-full sm:w-auto whitespace-nowrap ${
                    canSendBooking
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 shadow-primary/20'
                      : 'bg-muted text-muted-foreground cursor-not-allowed opacity-60'
                  }`}
                >
                  <Mail size={18} />
                  Send Booking
                </a>

                {!canSendBooking && (
                  <p className="text-muted-foreground text-xs text-center sm:text-left">
                    Please complete your name, phone number and service before sending.
                  </p>
                )}
              </div>
            ) : (
              !sundayWarning && (
                <p className="text-muted-foreground text-sm text-center py-2">
                  Please select a date first.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}