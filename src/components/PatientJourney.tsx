import React from 'react';
import { PATIENT_JOURNEY } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

export const PatientJourney: React.FC = () => {
  return (
    <section
      id="patient-journey"
      aria-label="Patient Experience and Journey"
      className="py-20 sm:py-28 lg:py-32 bg-[#F6F4ED] text-[#12161A] border-y border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Statement */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-900 uppercase mb-3">
            <TypewriterText
              text="THE PATIENT EXPERIENCE"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light font-serif-luxury text-neutral-950 leading-[1.12] mb-6">
            <TypewriterText
              text="“Your comfort is part of the treatment.”"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed max-w-2xl">
            From the first consultation to treatment and follow-up, the goal is to create an experience that feels professional, respectful and reassuring.
          </p>
        </div>

        {/* 3 Visual Stages with Large Editorial Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {PATIENT_JOURNEY.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-8 rounded-2xl bg-white border border-[#E3DDD0] shadow-xs flex flex-col justify-between group hover:border-teal-900/30 transition-all duration-300"
            >
              <div>
                {/* Huge Editorial Number */}
                <div className="font-serif-luxury text-6xl sm:text-7xl font-light text-neutral-300/80 mb-6 group-hover:text-teal-900/40 transition-colors leading-none">
                  {stage.step}
                </div>

                <div className="text-xs font-bold tracking-widest text-teal-900 uppercase mb-1">
                  STAGE {stage.step}
                </div>

                <h3 className="text-2xl font-serif-luxury text-neutral-950 mb-3 tracking-tight">
                  {stage.title}
                </h3>

                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 uppercase tracking-wider">
                <span>Phase {idx + 1} of 3</span>
                <span className="font-mono text-neutral-500 font-medium">Esthetic Care</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
