'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail, Calendar } from 'lucide-react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)

  function prevMonth() {
    if (month === 0) {
      if (year > MIN_YEAR) {
        setMonth(11)
        setYear(y => y - 1)
      }
    } else {
      setMonth(m => m - 1)
    }
  }

  function nextMonth() {
    if (month === 11) {
      if (year < MAX_YEAR) {
        setMonth(0)
        setYear(y => y + 1)
      }
    } else {
      setMonth(m => m + 1)
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

  const emailLink = selectedDateStr
    ? `mailto:${bookingEmail}?subject=${encodeURIComponent(
        `Booking request for ${selectedDateStr} | El Bendito Latin Barber`
      )}&body=${encodeURIComponent(
        `Hi El Bendito Latin Barber,

I would like to book an appointment for ${selectedDateStr}.

Please let me know the available times for that day.

My name is:
My phone number is:
Preferred service:

Thank you.`
      )}`
    : '#'

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
            Select a date and send your booking request by email.
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
                    ${isSunday
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
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-sm">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider font-bold mb-1">
                    Selected date
                  </p>

                  <p className="text-foreground font-bold">{selectedDateStr}</p>

                  <p className="text-muted-foreground text-xs mt-1">
                    We’ll confirm the available time by email.
                  </p>
                </div>

                <a
                  href={emailLink}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto whitespace-nowrap"
                >
                  <Mail size={18} />
                  Send Booking
                </a>
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