import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink, Clock, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Location and Contact Information"
      className="py-20 sm:py-28 lg:py-32 bg-[#F4F1EA] text-[#12161A] border-t border-[#E8E2D5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-900 uppercase mb-3">
            <TypewriterText
              text="CONVENIENT ACCESS"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.16] mb-4">
            <TypewriterText
              text="Visit Esthetic Dental Care"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Conveniently situated along the Netaji Subhas Chandra Bose Road arterial route in Netaji Nagar, Kolkata.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address & Direct Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white border border-[#E2DDD3] shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-teal-900 uppercase mb-4">
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>CLINICAL ADDRESS</span>
              </div>

              <div className="text-xl sm:text-2xl font-serif-luxury text-neutral-950 font-medium leading-snug mb-2">
                ESTHETIC DENTAL CARE
              </div>
              <div className="text-sm font-bengali text-teal-800 font-medium mb-6">
                {CLINIC_INFO.nameBengali}
              </div>

              <address className="not-italic text-sm sm:text-base text-neutral-700 font-light leading-relaxed space-y-1 mb-6 border-b border-neutral-100 pb-6">
                <p className="font-semibold text-neutral-900">202/3, Netaji Subhas Chandra Bose Rd,</p>
                <p className="text-neutral-800">near Usha Fire Brigade,</p>
                <p>Sahid Nagar Colony, Netaji Nagar,</p>
                <p>Kolkata, West Bengal 700047</p>
              </address>

              {/* Phone Information */}
              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  DIRECT PHONE
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-xl sm:text-2xl font-mono font-bold text-teal-900 hover:text-teal-700 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-teal-700" />
                  <span>{CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Landmark note */}
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Landmark: </strong>
                  Located close to Usha Fire Brigade in Sahid Nagar Colony, easily reachable via public transport and private transit.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Google Maps View */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden bg-white border border-[#E2DDD3] shadow-md min-h-[380px] sm:min-h-[460px]">
            {/* Map Header with Open In Google Maps Link */}
            <div className="p-4 sm:p-5 bg-neutral-900 text-white flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                  NETAJI NAGAR MAP
                </div>
                <div className="text-sm font-light text-neutral-300">
                  Esthetic Dental Care • 202/3 Netaji Subhas Chandra Bose Rd
                </div>
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Styled Map Container */}
            <div className="relative flex-1 w-full min-h-[320px] bg-neutral-100">
              <iframe
                title="Esthetic Dental Care Location on Google Maps"
                src={CLINIC_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] filter saturate-[0.9] contrast-[1.05]"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-neutral-200 max-w-xs pointer-events-none hidden sm:block">
                <div className="text-xs font-bold text-neutral-900">ESTHETIC DENTAL CARE</div>
                <div className="text-[11px] text-teal-800 font-bengali">এসথেটিক ডেন্টাল কেয়ার</div>
                <div className="text-[11px] text-neutral-600 mt-1">
                  Near Usha Fire Brigade, Kolkata 700047
                </div>
                <div className="mt-2 text-[11px] font-semibold text-amber-600">
                  5.0 ★ Google Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
