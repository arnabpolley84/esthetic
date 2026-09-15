import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: preselectedService ? `Consultation for ${preselectedService}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        message: `Consultation for ${preselectedService}`
      }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappUrl = `https://wa.me/919330292202?text=${encodeURIComponent(
    `Hello Esthetic Dental Care, I would like to book a dental consultation for ${formData.name || 'a patient'}. Preferred Date: ${formData.preferredDate || 'flexible'}. Concern: ${formData.message || 'Consultation'}`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-booking-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0E1318] text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-teal-400 uppercase">
              ESTHETIC DENTAL CARE • BOOKING
            </div>
            <h2 id="modal-booking-title" className="text-xl sm:text-2xl font-serif-luxury font-medium text-white">
              Schedule Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-6 text-center animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif-luxury font-medium text-neutral-900 mb-2">
                Consultation Request Logged
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto mb-6">
                Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Our team will contact you shortly at{' '}
                <span className="font-mono font-medium text-neutral-900">{formData.phone}</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-xs tracking-wider uppercase transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Directly</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-4 mt-2"
              >
                Close window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="093302 92202"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                >
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-date"
                    className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                  >
                    Preferred Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="modal-date"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-time"
                    className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                  >
                    Preferred Time
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="modal-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                    >
                      <option value="">Flexible Time</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-concern"
                  className="block text-xs font-semibold tracking-wider text-neutral-700 uppercase mb-1.5"
                >
                  Dental Concern / Reason
                </label>
                <textarea
                  id="modal-concern"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. Tooth pain, checkup, cleaning, root canal..."
                  className="w-full p-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <span>CONFIRM APPOINTMENT REQUEST</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                <span>Direct clinic call:</span>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-mono font-medium text-teal-800 hover:underline"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
