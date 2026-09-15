import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  prefilledService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ prefilledService = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: prefilledService ? `Inquiring regarding ${prefilledService}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update message if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring regarding ${prefilledService}`
      }));
    }
  }, [prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Front-end demo simulation with realistic state transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  // WhatsApp quick text link for seamless patient convenience
  const whatsappUrl = `https://wa.me/919330292202?text=${encodeURIComponent(
    `Hello Esthetic Dental Care, I would like to book a dental consultation for ${formData.name || 'a patient'}. Preferred Date: ${formData.preferredDate || 'flexible'}. Concern: ${formData.message || 'Consultation'}`
  )}`;

  return (
    <section
      id="appointment"
      aria-label="Book Dental Consultation"
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] text-[#12161A] border-t border-[#EAE5DA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-teal-800 uppercase mb-3">
              <TypewriterText
                text="PLAN YOUR VISIT"
                speed="normal"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif-luxury text-neutral-950 leading-[1.18] mb-6">
              <TypewriterText
                text="Book Your Dental Consultation"
                speed="slow"
                delay={200}
                showCursor={true}
              />
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed mb-8">
              Take the first step toward personalized dental care. Fill out the request form, or call our clinic directly for immediate scheduling.
            </p>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E3DDD0] shadow-sm mb-6">
              <div className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                Immediate Assistance
              </div>
              <div className="text-lg font-serif-luxury font-medium text-neutral-900 mb-2">
                Call the clinic directly
              </div>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold font-mono text-teal-900 hover:text-teal-700 transition-colors"
              >
                <Phone className="w-5 h-5 text-teal-700" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>
              <div className="text-xs text-neutral-500 mt-2">
                Available for consultations, inquiries & directions
              </div>
            </div>

            {/* Location highlight */}
            <div className="p-5 rounded-xl bg-[#F4F1EA] border border-[#E4DFD5] text-xs text-neutral-600 space-y-1">
              <div className="font-semibold text-neutral-900 uppercase tracking-wider">
                Clinic Location
              </div>
              <div>{CLINIC_INFO.address}</div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#E2DDD3] shadow-lg">
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif-luxury font-medium text-neutral-950 mb-2">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-neutral-600 font-light max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Our team at Esthetic Dental Care will review your request for{' '}
                    <span className="font-semibold text-neutral-900">{formData.preferredDate || 'your preferred date'}</span> and connect with you at{' '}
                    <span className="font-mono font-medium text-neutral-900">{formData.phone}</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs tracking-wider uppercase transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs tracking-wider uppercase transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
                  >
                    Submit another consultation request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="patient-name"
                        className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="patient-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Biswanath Paul"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="patient-phone"
                        className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="patient-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="093302 92202"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="patient-email"
                      className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                    >
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="patient@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="preferred-date"
                        className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          id="preferred-date"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label
                        htmlFor="preferred-time"
                        className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                      >
                        Preferred Time Window
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          id="preferred-time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all"
                        >
                          <option value="">Select a preferred time</option>
                          <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                          <option value="Afternoon">Afternoon (1:00 PM - 4:00 PM)</option>
                          <option value="Evening">Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message / Dental Concern */}
                  <div>
                    <label
                      htmlFor="dental-concern"
                      className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-2"
                    >
                      Message / Dental Concern
                    </label>
                    <div className="relative">
                      <textarea
                        id="dental-concern"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your concern (e.g. routine checkup, tooth pain, RCT consultation, cleaning)..."
                        className="w-full p-3.5 rounded-xl border border-neutral-300 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING REQUEST...</span>
                      ) : (
                        <>
                          <span>REQUEST APPOINTMENT</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-neutral-400 text-center">
                    Treatment options and scheduling are finalized upon clinical confirmation.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
