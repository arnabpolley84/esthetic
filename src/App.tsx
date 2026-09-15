import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedCareSection } from './components/FeaturedCareSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { CTASection } from './components/CTASection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenBooking = () => {
    setPreselectedService('');
    setIsModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#12161A] flex flex-col antialiased selection:bg-teal-900 selection:text-white">
      {/* 1. Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-hidden">
        {/* 2. Hero Section: Cinematic 5-Slide Carousel with Dark-to-Transparent Gradient & Typewriter */}
        <HeroSlider onOpenBooking={handleOpenBooking} />

        {/* 3. Trust Strip Immediately Below Hero */}
        <TrustBar />

        {/* 4. Editorial Intro / About Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Comprehensive Services Section */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 7. Featured Care / Editorial Story Section */}
        <FeaturedCareSection onOpenBooking={handleOpenBooking} />

        {/* 8. Patient Experience / Journey Stages */}
        <PatientJourney />

        {/* 9 & 10. Google Reviews Section with Verified Ratings & Themes */}
        <ReviewsSection />

        {/* 11. Visual Gallery Section with Verified Clinic Photos & Lightbox */}
        <GallerySection />

        {/* 12. Mid-Page Call to Action */}
        <CTASection onOpenBooking={handleOpenBooking} />

        {/* 13. Interactive Appointment Section */}
        <AppointmentSection prefilledService={preselectedService} />

        {/* 14. Location & Directions Section */}
        <LocationSection />

        {/* 15. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 16. Final Call to Action */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* 17. Site Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 18. Quick Booking Dialog Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedService={preselectedService}
      />

      {/* 19. Sticky Mobile Quick Action Bar (Call / Book) */}
      <MobileQuickBar onOpenBooking={handleOpenBooking} />
    </div>
  );
}
