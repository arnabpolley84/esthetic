import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, CLINIC_PHOTOS } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { SmartImage } from './SmartImage';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const highlights = [
    {
      title: "Comfort-focused treatment",
      desc: "Designed to help patients feel relaxed, with gentle pacing and supportive care."
    },
    {
      title: "Clean and hygienic environment",
      desc: "Strict clinical cleanliness and sterilized instruments for complete peace of mind."
    },
    {
      title: "Clear guidance throughout your treatment",
      desc: "Transparent discussions explaining each option, step, and home-care recommendation."
    }
  ];

  return (
    <section
      id="about"
      aria-label="About Esthetic Dental Care"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] text-[#12161A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Imagery with luxury editorial framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 group">
              <SmartImage
                src={CLINIC_PHOTOS.imageC.url}
                fallbackSrc={CLINIC_PHOTOS.imageC.fallback}
                alt="Modern dental operatory and equipment at Esthetic Dental Care Netaji Nagar"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtle gradient vignette on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating clinic badge on photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-neutral-900 font-sans">
                    ESTHETIC DENTAL CARE
                  </div>
                  <div className="text-xs font-bengali text-teal-800">
                    এসথেটিক ডেন্টাল কেয়ার • নেতাজি নগর
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-neutral-900">5.0 ★ Rating</div>
                  <div className="text-[11px] text-neutral-500">13 Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset element */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-teal-800/30 rounded-tl-xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Storytelling */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-800 uppercase mb-3">
              <TypewriterText
                text="ABOUT ESTHETIC DENTAL CARE"
                speed="normal"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.18] mb-6">
              <TypewriterText
                text="Dental Care Built Around Your Comfort and Confidence"
                speed="slow"
                delay={200}
                showCursor={true}
              />
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-700 font-light leading-relaxed mb-8">
              <p>
                Esthetic Dental Care is a patient-focused dental clinic in Netaji Nagar, Kolkata, dedicated to providing professional dental care in a clean, comfortable and welcoming environment.
              </p>
              <p className="text-neutral-600 text-sm sm:text-base">
                Our approach focuses on careful diagnosis, clear communication, hygiene and treatment designed around each patient's individual needs.
              </p>
            </div>

            {/* 3 Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-neutral-200/80 shadow-xs hover:border-teal-800/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 font-light mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg group"
              >
                <span>BOOK A VISIT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-teal-900 hover:underline"
              >
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
