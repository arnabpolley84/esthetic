import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] text-[#12161A]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-800 uppercase mb-3">
            <TypewriterText
              text="PATIENT INQUIRIES"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.18] mb-4">
            <TypewriterText
              text="Frequently Asked Questions"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            Helpful information regarding consultations, clinic visits, and dental care protocols at Esthetic Dental Care.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-neutral-400 font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif-luxury font-medium text-neutral-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-50 text-teal-800' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 font-light leading-relaxed border-t border-neutral-100 bg-neutral-50/40 animate-in fade-in duration-200">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Question prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4F1EA] border border-[#E3DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-700 font-light text-center sm:text-left">
            Have a specific treatment question or dental symptom?
          </div>
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-teal-300" />
            <span>Call 093302 92202</span>
          </a>
        </div>
      </div>
    </section>
  );
};
