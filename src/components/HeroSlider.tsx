import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, ArrowUpRight, Star, CheckCircle2 } from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { SmartImage } from './SmartImage';

interface HeroSliderProps {
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  // Autoplay effect with smooth slow pacing (8 seconds)
  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setTimeout(() => {
      nextSlide();
    }, 8000);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [currentSlideIndex, isPaused, nextSlide]);

  const handleCtaClick = (action: string) => {
    if (action.startsWith('tel:')) {
      window.location.href = action;
      return;
    }
    if (action === '#appointment') {
      onOpenBooking();
      return;
    }
    const target = document.querySelector(action);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Clinic Introduction & Highlights"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#0A0E0C] text-white flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ABSOLUTE BACKGROUND LAYER WITH ZERO-GAP CONTINUOUS MULTI-DIRECTIONAL FADED EFFECT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Right Section Image Stage: Seamlessly anchored to the right side */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[75%] md:w-[65%] lg:w-[58%] xl:w-[54%] overflow-hidden">
          {/* Active slides crossfading smoothly */}
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <SmartImage
                  src={slide.image}
                  fallbackSrc={slide.fallbackImage}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-[52%_38%] brightness-100 contrast-[1.03] transition-transform duration-[8500ms] ease-out scale-105"
                />
              </div>
            );
          })}

          {/* Local Left Edge Softener for the Image Container */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 lg:w-64 bg-gradient-to-r from-[#0A0E0C] to-transparent pointer-events-none z-10" />

          {/* Verified Clinic Photo Badge (Bottom Right of Image Area) */}
          <div className="hidden sm:flex absolute bottom-6 right-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-xs text-slate-200 pointer-events-auto shadow-lg">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-wide">
              {currentSlide.photoTitle || 'Verified Clinic Photo'}
            </span>
          </div>
        </div>

        {/* Global Continuous Horizontal & Vertical Gradient Overlays: Eliminates all seams & gaps */}
        <div className="absolute inset-0 hero-gradient-cinematic pointer-events-none z-10" />

        {/* Top Gradient Fade: Smooth blend under the navigation bar */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-36 bg-gradient-to-b from-[#0A0E0C] via-[#0A0E0C]/50 to-transparent pointer-events-none z-10" />

        {/* Bottom Gradient Fade: Smooth blend into the trust bar & next sections */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-44 bg-gradient-to-t from-[#0A0E0C] via-[#0A0E0C]/85 to-transparent pointer-events-none z-10" />

        {/* Subtle soft ambient glow in the top-left */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* FOREGROUND HERO CONTENT: ALIGNED ON THE DARK SECTION FOR MAXIMUM CLARITY & CONTRAST */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 xs:pt-44 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 my-auto w-full">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Rating & Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-semibold uppercase tracking-wider text-teal-300 shadow-sm">
            <span className="flex items-center text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 mr-1 inline" />
              5.0 ★
            </span>
            <span className="text-white/40">•</span>
            <span>13 Google Reviews • Netaji Nagar, Kolkata</span>
          </div>

          {/* Eyebrow & Headline with Typewriter */}
          <div className="space-y-3">
            <div className="text-teal-400 tracking-[0.22em] text-xs sm:text-sm font-semibold uppercase">
              <TypewriterText
                key={`eyebrow-${currentSlide.id}`}
                text={currentSlide.eyebrow}
                speed="normal"
                delay={100}
                triggerKey={currentSlide.id}
              />
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance font-serif-luxury min-h-[2.4em] sm:min-h-[2.1em]">
              <TypewriterText
                key={`headline-${currentSlide.id}`}
                text={currentSlide.headline}
                speed="slow"
                delay={250}
                showCursor={true}
                triggerKey={currentSlide.id}
              />
            </h1>

            <div className="flex items-center gap-3 pt-1">
              <p className="font-bengali text-lg sm:text-xl font-medium text-teal-300 tracking-wide">
                এসথেটিক ডেন্টাল কেয়ার
              </p>
              <span className="text-white/40">•</span>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 uppercase">
                Netaji Subhas Chandra Bose Rd
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light text-balance max-w-2xl min-h-[3em] sm:min-h-[2.5em]">
            <TypewriterText
              key={`desc-${currentSlide.id}`}
              text={currentSlide.description}
              speed="fast"
              delay={550}
              triggerKey={currentSlide.id}
            />
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              id="hero-primary-cta"
              type="button"
              onClick={() => handleCtaClick(currentSlide.ctaAction)}
              className="group inline-flex items-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm sm:text-base shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{currentSlide.ctaText}</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {currentSlide.secondaryCtaText && (
              <a
                id="hero-secondary-cta"
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call: {CLINIC_INFO.phone}</span>
              </a>
            )}
          </div>

          {/* Slide Navigation & Controls */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 max-w-xl">
            {/* Progress indicators */}
            <div className="flex items-center space-x-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="group flex items-center py-2 focus:outline-none"
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentSlideIndex
                        ? 'w-10 sm:w-12 bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]'
                        : 'w-3 sm:w-4 bg-white/30 group-hover:bg-white/60'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs text-neutral-400 font-mono pl-2">
                0{currentSlideIndex + 1} / 0{totalSlides}
              </span>
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white transition-colors focus:outline-none active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white transition-colors focus:outline-none active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Photo Switcher Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-[11px] text-neutral-400 uppercase tracking-wider pr-1">Photos:</span>
            {HERO_SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlideIndex;
              return (
                <button
                  key={`quick-photo-${slide.id}`}
                  onClick={() => goToSlide(idx)}
                  className={`px-3 py-1 rounded-full text-xs transition-all ${
                    isSelected
                      ? 'bg-teal-500/20 border border-teal-400 text-teal-300 font-medium shadow-sm'
                      : 'bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  0{idx + 1}: {slide.photoTitle?.split(' ')[0]}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
