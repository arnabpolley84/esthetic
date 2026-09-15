import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { GOOGLE_REVIEWS, PATIENT_THEMES, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

export const ReviewsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      aria-label="Google Patient Reviews and Ratings"
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] text-[#12161A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google 5.0 Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-800 uppercase mb-3">
              <TypewriterText
                text="PATIENT EXPERIENCES"
                speed="normal"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.16]">
              <TypewriterText
                text="Trusted by Patients"
                speed="slow"
                delay={200}
                showCursor={true}
              />
            </h2>
          </div>

          {/* Prominent Google Rating Badge */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm flex items-center gap-5 shrink-0 self-start md:self-auto">
            <div className="w-14 h-14 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500">
              <Star className="w-8 h-8 fill-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-serif-luxury text-neutral-950">
                  {CLINIC_INFO.rating.toFixed(1)}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-xs font-semibold text-neutral-800 tracking-wide uppercase mt-0.5">
                {CLINIC_INFO.reviewCount} Google Reviews
              </div>
              <div className="text-[11px] text-neutral-500 font-light">
                Netaji Nagar, Kolkata
              </div>
            </div>
          </div>
        </div>

        {/* Recurring Patient Themes */}
        <div className="mb-14">
          <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4">
            RECURRING PATIENT THEMES IN VERIFIED REVIEWS
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {PATIENT_THEMES.map((theme) => (
              <div
                key={theme}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E3DDD0] text-xs font-semibold tracking-wider text-neutral-800 shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                <span>{theme}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Carousel / Grid */}
        <div className="relative">
          {/* Desktop Grid showing all 3 verified reviews side-by-side with editorial finesse */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {GOOGLE_REVIEWS.map((review, idx) => (
              <div
                key={review.id}
                className="p-8 rounded-2xl bg-white border border-[#E4DFD5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-neutral-200 group-hover:text-teal-800/30 transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Patient Author Info */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 text-teal-800 font-bold text-xs flex items-center justify-center font-serif-luxury">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 tracking-wide">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-neutral-500 font-light">
                        {review.badge}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Horizontal Carousel */}
          <div className="block lg:hidden">
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E4DFD5] shadow-md relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex text-amber-400">
                  {[...Array(GOOGLE_REVIEWS[activeReviewIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-neutral-300" />
              </div>

              <p className="text-base text-neutral-800 font-light leading-relaxed mb-6 italic min-h-[5em]">
                "{GOOGLE_REVIEWS[activeReviewIndex].text}"
              </p>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-200 text-teal-800 font-bold text-xs flex items-center justify-center font-serif-luxury">
                    {GOOGLE_REVIEWS[activeReviewIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">
                      {GOOGLE_REVIEWS[activeReviewIndex].name}
                    </div>
                    <div className="text-xs text-neutral-500">
                      {GOOGLE_REVIEWS[activeReviewIndex].badge}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase">
                  Google Verified
                </span>
              </div>
            </div>

            {/* Mobile Carousel Controls */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex space-x-2">
                {GOOGLE_REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReviewIndex(i)}
                    aria-label={`Review ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeReviewIndex ? 'w-8 bg-teal-800' : 'w-2.5 bg-neutral-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevReview}
                  aria-label="Previous Review"
                  className="p-2 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  aria-label="Next Review"
                  className="p-2 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
