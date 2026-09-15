import React from 'react';
import { Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="final-cta"
      aria-label="Start Your Dental Care Journey"
      className="py-24 sm:py-32 bg-[#090D11] text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="text-xs sm:text-sm font-mono tracking-[0.3em] text-teal-400 uppercase mb-4">
          <TypewriterText
            text="YOUR SMILE. YOUR CONFIDENCE. YOUR CARE."
            speed="normal"
          />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif-luxury text-white leading-[1.14] mb-6">
          <TypewriterText
            text="Start Your Dental Care Journey"
            speed="slow"
            delay={200}
            showCursor={true}
          />
        </h2>

        <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Professional dental care begins with a conversation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 group"
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
            <span>CALL 093302 92202</span>
          </a>
        </div>
      </div>

      {/* Subtle backdrop circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
