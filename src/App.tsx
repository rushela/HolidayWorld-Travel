import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceCards } from './components/ServiceCards';
import { PackageGrid } from './components/PackageGrid';
import { MapSection } from './components/MapSection';
import { InstagramFeed } from './components/InstagramFeed';
import { TestimonialSection } from './components/TestimonialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingForm } from './components/BookingForm';
import { FloatingBookButton } from './components/FloatingBookButton';
import { AboutSection } from './components/AboutSection';

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection onBookingClick={() => setBookingOpen(true)} />
        <ServiceCards />
        <AboutSection />
        <PackageGrid />
        <MapSection />
        <InstagramFeed />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingBookButton onClick={() => setBookingOpen(true)} />
      {bookingOpen && (
        <BookingForm open={bookingOpen} onClose={() => setBookingOpen(false)} />
      )}
    </div>;
}