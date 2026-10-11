'use client';

import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function MobileBottomBar() {
  const { openSos } = useSos();

  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] safe-area-bottom"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* 1. CALL NOW BUTTON */}
        <a
          href="tel:9550425789"
          className="flex-1 min-h-[46px] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 text-white text-xs font-bold transition-all border border-slate-700/80 shadow-sm"
          aria-label="Call 9550425789"
        >
          <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="tracking-wider uppercase text-[11px]">CALL</span>
        </a>

        {/* 2. WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20car%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[46px] flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-xs font-bold transition-all shadow-sm"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon size={18} />
          <span className="tracking-wider uppercase text-[11px]">WHATSAPP</span>
        </a>

        {/* 3. SOS 24 HRS EMERGENCY */}
        <button
          onClick={openSos}
          className="flex-1 min-h-[46px] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-black transition-all shadow-md shadow-red-900/40 cursor-pointer"
          aria-label="Emergency SOS 24 HRS"
        >
          <AlertTriangle className="w-4 h-4 text-white flex-shrink-0 animate-pulse" />
          <span className="tracking-wider uppercase text-[11px]">SOS 24H</span>
        </button>
      </div>
    </nav>
  );
}
