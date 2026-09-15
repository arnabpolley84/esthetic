import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { CLINIC_GALLERY, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { SmartImage } from './SmartImage';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = () => {
    if (lightboxImageIndex === null) return;
    setLightboxImageIndex((prev) => ((prev ?? 0) + 1) % CLINIC_GALLERY.length);
  };

  const prevLightboxImage = () => {
    if (lightboxImageIndex === null) return;
    setLightboxImageIndex((prev) => ((prev ?? 0) - 1 + CLINIC_GALLERY.length) % CLINIC_GALLERY.length);
  };

  return (
    <section
      id="gallery"
      aria-label="Clinic Visual Gallery"
      className="py-20 sm:py-28 lg:py-32 bg-[#F4F1EA] text-[#12161A] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-900 uppercase mb-3">
            <TypewriterText
              text="CLINICAL ENVIRONMENT"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.16] mb-4">
            <TypewriterText
              text="Inside Esthetic Dental Care"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            A closer look at the environment where your dental care journey begins.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        {/* Editorial Masonry Grid for 4 Verified Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Operatory (col-span-7) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-7 relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden group cursor-pointer shadow-md bg-neutral-900"
          >
            <SmartImage
              src={CLINIC_GALLERY[0].url}
              fallbackSrc={CLINIC_GALLERY[0].fallbackUrl}
              alt={CLINIC_GALLERY[0].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <h3 className="text-lg font-serif-luxury font-medium">
                  {CLINIC_GALLERY[0].title}
                </h3>
                <p className="text-xs text-neutral-300 font-light max-w-sm mt-1">
                  {CLINIC_GALLERY[0].caption}
                </p>
              </div>
              <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Card 2: Treatment Chair & Equipment (col-span-5) */}
          <div
            onClick={() => openLightbox(1)}
            className="md:col-span-5 relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden group cursor-pointer shadow-md bg-neutral-900"
          >
            <SmartImage
              src={CLINIC_GALLERY[1].url}
              fallbackSrc={CLINIC_GALLERY[1].fallbackUrl}
              alt={CLINIC_GALLERY[1].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <h3 className="text-lg font-serif-luxury font-medium">
                  {CLINIC_GALLERY[1].title}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  {CLINIC_GALLERY[1].caption}
                </p>
              </div>
              <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Card 3: Patient Consultation Zone (col-span-6) */}
          <div
            onClick={() => openLightbox(2)}
            className="md:col-span-6 relative h-[300px] sm:h-[370px] rounded-2xl overflow-hidden group cursor-pointer shadow-md bg-neutral-900"
          >
            <SmartImage
              src={CLINIC_GALLERY[2].url}
              fallbackSrc={CLINIC_GALLERY[2].fallbackUrl}
              alt={CLINIC_GALLERY[2].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <h3 className="text-base font-serif-luxury font-medium">
                  {CLINIC_GALLERY[2].title}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  {CLINIC_GALLERY[2].caption}
                </p>
              </div>
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                <Maximize2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Card 4: Hygiene & Sterilization Standards (col-span-6) */}
          <div
            onClick={() => openLightbox(3)}
            className="md:col-span-6 relative h-[300px] sm:h-[370px] rounded-2xl overflow-hidden group cursor-pointer shadow-md bg-neutral-900"
          >
            <SmartImage
              src={CLINIC_GALLERY[3].url}
              fallbackSrc={CLINIC_GALLERY[3].fallbackUrl}
              alt={CLINIC_GALLERY[3].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <h3 className="text-base font-serif-luxury font-medium">
                  {CLINIC_GALLERY[3].title}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  {CLINIC_GALLERY[3].caption}
                </p>
              </div>
              <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                <Maximize2 className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery location footer note */}
        <div className="mt-8 flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-800" />
            <span>Actual photography from 202/3 Netaji Subhas Chandra Bose Rd, Netaji Nagar clinic</span>
          </div>
          <span className="font-mono text-neutral-400">5 Gallery Items</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full pt-2">
            <div>
              <div className="text-xs font-mono tracking-widest text-teal-400 uppercase">
                PHOTO {lightboxImageIndex + 1} OF {CLINIC_GALLERY.length}
              </div>
              <div className="text-base sm:text-lg font-serif-luxury">
                {CLINIC_GALLERY[lightboxImageIndex].title}
              </div>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4">
            <button
              onClick={prevLightboxImage}
              aria-label="Previous Image"
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <SmartImage
              src={CLINIC_GALLERY[lightboxImageIndex].url}
              fallbackSrc={CLINIC_GALLERY[lightboxImageIndex].fallbackUrl}
              alt={CLINIC_GALLERY[lightboxImageIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={nextLightboxImage}
              aria-label="Next Image"
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption */}
          <div className="text-center text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto pb-2">
            {CLINIC_GALLERY[lightboxImageIndex].caption}
          </div>
        </div>
      )}
    </section>
  );
};
