import React from 'react';
import { Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { SmartImage } from './SmartImage';

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="cta-banner"
      aria-label="Appointment Call to Action"
      className="relative py-24 sm:py-32 bg-[#0C1115] text-white overflow-hidden"
    >
      {/* Background Image with Cinematic Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={CLINIC_PHOTOS.imageA.url}
          fallbackSrc={CLINIC_PHOTOS.imageA.fallback}
          alt="Esthetic Dental Care Kolkata operatory"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1115] via-[#0C1115]/90 to-[#0C1115]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs sm:text-sm font-bold tracking-[0.25em] text-teal-400 uppercase mb-4">
          <TypewriterText
            text="ESTHETIC DENTAL CARE • KOLKATA"
            speed="normal"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif-luxury text-white leading-[1.14] mb-6 max-w-3xl mx-auto">
          <TypewriterText
            text="Ready to Take Better Care of Your Smile?"
            speed="slow"
            delay={200}
            showCursor={true}
          />
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you are dealing with tooth pain, need a routine dental checkup or want to discuss your dental concerns, take the first step with a consultation at Esthetic Dental Care.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group"
          >
            <Calendar className="w-4 h-4 text-teal-800" />
            <span>BOOK AN APPOINTMENT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm border border-white/20 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>CALL {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-neutral-400 font-light">
          Netaji Nagar, Kolkata • Rated 5.0 ★ on Google
        </div>
      </div>
    </section>
  );
};
