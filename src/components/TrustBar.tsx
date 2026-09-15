import React from 'react';
import { Star, MessageSquareHeart, HeartHandshake, MapPin } from 'lucide-react';
import { TRUST_POINTS } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const icons = [
    <Star key="star" className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />,
    <MessageSquareHeart key="reviews" className="w-4 h-4 text-teal-600 shrink-0" />,
    <HeartHandshake key="comfort" className="w-4 h-4 text-teal-600 shrink-0" />,
    <MapPin key="location" className="w-4 h-4 text-teal-600 shrink-0" />
  ];

  return (
    <section
      id="trust-strip"
      aria-label="Clinical Trust and Credentials"
      className="relative z-30 bg-[#F4F2EC] border-y border-[#E5E0D5] py-5 sm:py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={point.label}
              className="flex items-center gap-3 py-1 px-2 border-l border-neutral-300/80 first:border-l-0 md:first:border-l-0 pl-3 sm:pl-4"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                {icons[index]}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-xs font-bold tracking-wider text-neutral-900 uppercase truncate">
                  {point.label}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-600 truncate font-light">
                  {point.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
