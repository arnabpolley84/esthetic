import React from 'react';
import { Heart, UserCheck, Sparkles, Award, Star } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    comfort: <Heart className="w-5 h-5 text-teal-800" />,
    personal: <UserCheck className="w-5 h-5 text-teal-800" />,
    hygiene: <Sparkles className="w-5 h-5 text-teal-800" />,
    professional: <Award className="w-5 h-5 text-teal-800" />,
    trust: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Esthetic Dental Care"
      className="py-20 sm:py-28 bg-[#F4F1EA] text-[#12161A] border-t border-[#E8E3D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-900 uppercase mb-3">
            <TypewriterText
              text="WHY ESTHETIC DENTAL CARE"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.16]">
            <TypewriterText
              text="A Better Dental Experience Starts With How You Feel"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
        </div>

        {/* 5 Feature Blocks in an Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => {
            const isLarge = idx === 0 || idx === 4;
            return (
              <div
                key={feature.id}
                className={`relative p-7 sm:p-8 rounded-2xl bg-white border border-[#E4DFD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${
                  isLarge ? 'md:col-span-1 lg:col-span-1 border-teal-900/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-neutral-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[feature.id]}
                    </div>
                    <span className="font-mono text-xs font-semibold tracking-widest text-neutral-400">
                      {feature.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium font-serif-luxury text-neutral-900 mb-3 group-hover:text-teal-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-medium uppercase tracking-wider">
                  <span>Esthetic Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 opacity-60" />
                </div>
              </div>
            );
          })}

          {/* 6th Card: Kolkata Locational Promise */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#0D1518] text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
                NETAJI NAGAR, KOLKATA
              </div>
              <h3 className="text-2xl font-light font-serif-luxury text-white mb-3 leading-snug">
                Convenient, Compassionate Local Dentistry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Located near Usha Fire Brigade on Netaji Subhas Chandra Bose Road, providing thoughtful clinical attention right where you need it.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-teal-300 font-bengali">
                এসথেটিক ডেন্টাল কেয়ার
              </span>
              <a
                href="#contact"
                className="text-xs font-medium uppercase tracking-widest text-white hover:text-teal-300 underline underline-offset-4"
              >
                View Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
