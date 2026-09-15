import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_PHOTOS } from '../data/clinicData';
import { SmartImage } from './SmartImage';

interface FeaturedCareSectionProps {
  onOpenBooking: () => void;
}

export const FeaturedCareSection: React.FC<FeaturedCareSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="featured-care"
      aria-label="Personalised Dental Care Philosophy"
      className="py-20 sm:py-28 lg:py-32 bg-[#0E1318] text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large clinic photograph with luxury dark edge blending */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <SmartImage
                src={CLINIC_PHOTOS.imageD.url}
                fallbackSrc={CLINIC_PHOTOS.imageD.fallback}
                alt="Personalised and reassuring dental consultation at Esthetic Dental Care"
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle inner shadow and gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-transparent opacity-80" />

              {/* Minimal caption tag */}
              <div className="absolute bottom-5 left-5 right-5 text-xs text-neutral-300 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between">
                <span>Careful diagnosis before every treatment</span>
                <span className="text-teal-400 font-mono">ESTHETIC CARE</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content with crisp contrast */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-400 uppercase mb-3">
              <TypewriterText
                text="PERSONALISED DENTAL CARE"
                speed="normal"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-white leading-[1.18] mb-6">
              <TypewriterText
                text="From Diagnosis to Treatment, With Clarity at Every Step"
                speed="slow"
                delay={200}
                showCursor={true}
              />
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8">
              Dental treatment can feel overwhelming when you don't know what to expect. Our website experience should communicate that patients can receive clear guidance, understand their treatment options and feel more confident about their dental journey.
            </p>

            {/* Reassurance points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Transparent discussion of options</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Paced comfortably around your needs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Hygiene & modern sterilization</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Clear post-treatment guidance</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-teal-500/20 active:scale-95 group"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
