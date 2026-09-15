import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileQuickBarProps {
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-quick-action-bar"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0E1318]/95 backdrop-blur-md border-t border-white/10 p-3 sm:p-4 shadow-2xl safe-area-bottom"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          id="mobile-bar-call"
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase border border-white/15 active:scale-98 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-teal-300" />
          <span className="truncate">CALL CLINIC</span>
        </a>

        <button
          id="mobile-bar-book"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase shadow-md active:scale-98 transition-all"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="truncate">BOOK VISIT</span>
        </button>
      </div>
    </div>
  );
};
