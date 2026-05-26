import { AnnouncementBar } from '@/components/announcement-bar'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TrustStrip } from '@/components/trust-strip'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { BookingCalendar } from '@/components/booking-calendar'
import { OpeningHours } from '@/components/opening-hours'
import { GallerySection } from '@/components/gallery-section'
import { LocationSection } from '@/components/location-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp-button'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <BookingCalendar />
        <OpeningHours />
        <GallerySection />
        <LocationSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}
