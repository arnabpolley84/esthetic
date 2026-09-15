import React from 'react';
import { Phone, MapPin, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      aria-label="Site Footer"
      className="bg-[#07090C] text-neutral-400 pt-16 sm:pt-20 pb-28 lg:pb-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl font-bold tracking-widest text-white uppercase font-sans">
              ESTHETIC <span className="font-light text-neutral-400">DENTAL CARE</span>
            </div>
            <div className="text-sm font-bengali text-teal-400 font-medium">
              {CLINIC_INFO.nameBengali}
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Patient-focused dental clinic in Netaji Nagar, Kolkata, offering thoughtful dental care in a clean, hygienic and welcoming environment.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <span>5.0 ★ Google Rating</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-300">13 Verified Patient Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              NAVIGATION
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-teal-300 transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Appointment Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold tracking-widest text-white uppercase mb-5">
              CLINIC CONTACT
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  202/3, Netaji Subhas Chandra Bose Rd,<br />
                  Netaji Nagar, Kolkata, West Bengal 700047
                </address>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-300 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-teal-300 transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Esthetic Dental Care. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-bengali text-neutral-400">
              নেতাজি নগর, কলকাতা
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
