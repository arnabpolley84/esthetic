import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0E0C]/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-gradient-to-b from-[#0A0E0C]/80 via-[#0A0E0C]/40 to-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            id="header-brand-link"
            className="flex items-center gap-3 text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-teal-300 group-hover:border-teal-400 transition-colors">
              <span className="font-serif-luxury text-xl font-semibold tracking-tighter">E</span>
            </div>
            <div className="flex flex-col">
              <div className="text-sm sm:text-base font-bold tracking-widest text-white leading-tight font-sans uppercase">
                ESTHETIC <span className="font-light text-neutral-300">DENTAL CARE</span>
              </div>
              <div className="text-[11px] sm:text-xs text-teal-300/90 font-bengali font-normal tracking-normal leading-none mt-0.5">
                এসথেটিক ডেন্টাল কেয়ার
              </div>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav
            id="desktop-navigation"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-6 xl:space-x-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs font-medium tracking-wider text-neutral-300 hover:text-white transition-colors duration-150 whitespace-nowrap py-1 focus:outline-none focus-visible:text-teal-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Call & Book */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4">
            <a
              id="header-phone-cta"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium tracking-wide text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/15 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>CALL {CLINIC_INFO.phoneDisplay}</span>
            </a>

            <button
              id="header-book-cta"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-neutral-900 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-800" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-phone-quick-btn"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              aria-label={`Call ${CLINIC_INFO.phoneDisplay}`}
              className="p-2.5 rounded-full bg-white/10 text-teal-300 border border-white/15 focus:outline-none"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2.5 rounded-full bg-white/10 text-white border border-white/15 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#0D1217]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-3 duration-200"
        >
          <div className="text-xs font-semibold tracking-widest text-teal-400 uppercase pb-1 border-b border-white/10 font-bengali">
            এসথেটিক ডেন্টাল কেয়ার — নেভিগেশন
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium tracking-wider text-neutral-200 hover:text-teal-300 py-2.5 flex items-center justify-between border-b border-white/5 whitespace-nowrap"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-sm tracking-wide text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>

            <a
              id="mobile-drawer-call-btn"
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm tracking-wide text-center flex items-center justify-center gap-2 border border-white/15"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>CALL 093302 92202</span>
            </a>
          </div>

          <div className="text-[11px] text-neutral-400 text-center pt-2">
            202/3, Netaji Subhas Chandra Bose Rd, Netaji Nagar, Kolkata
          </div>
        </div>
      )}
    </header>
  );
};
