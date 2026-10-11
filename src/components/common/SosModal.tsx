'use client';

import React, { useEffect } from 'react';
import { Phone, AlertTriangle, X, MapPin, Clock, ShieldAlert } from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function SosModal() {
  const { isSosOpen, closeSos } = useSos();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSos();
    };
    if (isSosOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSosOpen, closeSos]);

  if (!isSosOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dark backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={closeSos}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-lg bg-[#0b0f19] text-white rounded-3xl border border-red-500/40 shadow-2xl overflow-hidden z-10 transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-95"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sos-title"
      >
        {/* Top Emergency Beacon Bar */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="text-xs font-black tracking-widest uppercase text-white">
              Emergency Assistance • 24 HRS
            </span>
          </div>
          <button
            onClick={closeSos}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-black/20 transition-colors"
            aria-label="Close Emergency Assistance Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 mb-1">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 id="sos-title" className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Need Immediate Assistance?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Call <strong className="text-white font-bold">SR Multicartech</strong> now for emergency automobile assistance. Our workshop team is ready to assist you.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* CALL NOW BUTTON */}
            <a
              href="tel:9550425789"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-lg shadow-xl shadow-red-600/30 active:scale-[0.98] transition-all"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>CALL NOW: 9550425789</span>
            </a>

            {/* WHATSAPP / MESSAGE BUTTON */}
            <a
              href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20need%20immediate%20emergency%20automobile%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
            >
              <WhatsAppIcon size={22} />
              <span>WHATSAPP / MESSAGE</span>
            </a>
          </div>

          {/* Location & Workshop Verification */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Workshop Location:</strong>
                <p className="text-slate-400 mt-0.5 leading-snug">
                  Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 pt-2 border-t border-slate-800">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Direct line to owner BRR & certified senior technicians.</span>
            </div>
          </div>

          {/* Honest Service Boundary Note */}
          <p className="text-[11px] text-slate-500 text-center leading-normal">
            Direct garage emergency helpline. Connect with our technical team immediately for breakdown diagnosis, repair guidance, and workshop coordination.
          </p>
        </div>
      </div>
    </div>
  );
}
