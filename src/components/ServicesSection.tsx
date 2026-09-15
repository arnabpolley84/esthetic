import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Smile, 
  Sparkles, 
  Layers, 
  MessageSquareHeart,
  ArrowRight
} from 'lucide-react';
import { DENTAL_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-teal-800" };
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'MessageSquareHeart': return <MessageSquareHeart {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Dental Services Offered"
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] text-[#12161A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-800 uppercase mb-3">
            <TypewriterText
              text="OUR DENTAL SERVICES"
              speed="normal"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.18] mb-5">
            <TypewriterText
              text="Comprehensive Care for a Healthier, More Confident Smile"
              speed="slow"
              delay={200}
              showCursor={true}
            />
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Every smile has unique dental needs. We provide thoughtful consultations and gentle clinical care tailored to your oral health and peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DENTAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-lg hover:border-teal-800/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-50/80 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-900 group-hover:text-white transition-colors duration-200">
                  <div className="group-hover:[&_svg]:text-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="text-lg font-medium font-serif-luxury text-neutral-900 mb-2.5 leading-snug group-hover:text-teal-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 mt-auto">
                <div className="text-[11px] text-neutral-500 italic mb-3">
                  "{service.details}"
                </div>

                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider text-teal-900 uppercase py-2 px-3 rounded-lg bg-neutral-50 group-hover:bg-teal-900 group-hover:text-white transition-colors"
                >
                  <span>Enquire / Book</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note below services */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F3EFE6] border border-[#E3DDD0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-700 font-light text-center sm:text-left">
            <span className="font-semibold text-neutral-900">Personalized Treatment Plans: </span>
            Every treatment option and sequence is explained transparently during your initial consultation.
          </div>
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="shrink-0 text-xs font-semibold tracking-wider text-teal-900 hover:text-teal-700 uppercase"
          >
            Direct Call: {CLINIC_INFO.phoneDisplay} →
          </a>
        </div>
      </div>
    </section>
  );
};
