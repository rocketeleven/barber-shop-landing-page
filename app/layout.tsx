import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'El Bendito Latin Barber | Fresh Fades in Adelaide',
  description:
    'El Bendito Latin Barber — Fresh fades, skin fades, mens haircuts, beard trims, line ups and kids cuts in Bowden, Adelaide SA. Book via WhatsApp.',
  keywords: ['barber Adelaide', 'Latin barber', 'fade haircut Adelaide', 'skin fade', 'Bowden barber'],
  openGraph: {
    title: 'El Bendito Latin Barber | Fresh Fades in Adelaide',
    description: 'Fresh fades, clean cuts & Latin barber style in Adelaide. Book via WhatsApp.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${barlow.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
