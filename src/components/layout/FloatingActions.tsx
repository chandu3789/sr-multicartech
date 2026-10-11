'use client';

import React from 'react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom-Right) */}
      <aside 
        aria-label="Direct WhatsApp Contact"
        className="hidden md:block fixed bottom-8 right-8 z-40"
      >
        <a
          href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20car%20service."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-xl shadow-black/20 hover:bg-[#20bd5a] hover:scale-105 transition-all group border border-white/20"
          title="Chat with SR Multicartech on WhatsApp (9550425789)"
        >
          <WhatsAppIcon size={22} />
          <span className="tracking-wide">Chat on WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
