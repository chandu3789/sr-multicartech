'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, Calendar, AlertTriangle, Car } from 'lucide-react';
import { useCar } from '@/lib/context/CarContext';

export default function FloatingActions() {
  const { currentCar } = useCar();

  return (
    <>
      {/* Desktop Left-Bottom Floating WhatsApp & Call Buttons */}
      <div className="hidden md:flex fixed bottom-6 left-6 z-40 flex-col gap-2.5">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-lg hover:bg-emerald-700 hover:scale-105 transition-all group"
          title="Chat with Service Advisor on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden lg:inline pr-1">WhatsApp Us</span>
        </a>

        <a
          href="tel:+919876543210"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow-lg hover:bg-slate-800 hover:scale-105 transition-all group border border-slate-800"
          title="Call SR Multi Car Tech Helpline"
        >
          <Phone className="w-4 h-4 text-rose-500" />
          <span className="hidden lg:inline pr-1">Call Support</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Thumb-friendly navigation) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2">
        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-semibold transition-colors"
        >
          <Phone className="w-4 h-4 text-slate-700 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[11px] font-semibold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* SOS Emergency */}
        <Link
          href="/sos"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-[11px] font-bold transition-colors"
        >
          <AlertTriangle className="w-4 h-4 text-red-600 mb-0.5" />
          <span>SOS</span>
        </Link>

        {/* Primary Book Service CTA Button */}
        <Link
          href="/book-service"
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 transition-all text-center"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Service</span>
        </Link>
      </div>
    </>
  );
}
