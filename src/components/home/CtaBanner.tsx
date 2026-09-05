import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-rose-600 via-rose-700 to-slate-900 text-white relative overflow-hidden">
      {/* Visual background rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            Experience Hassle-Free Maintenance
          </span>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Give Your Car the Care It Deserves?
          </h2>

          <p className="text-sm sm:text-base text-rose-100 max-w-xl mx-auto leading-relaxed">
            Book online in 60 seconds. Enjoy complimentary doorstep pickup, live photo tracking, and comprehensive warranty on every service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/book-service"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-rose-700 font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-rose-600" />
              <span>Book Service Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-rose-900/60 hover:bg-rose-900 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 98765 43210</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-rose-100 font-medium">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white" />
              <span>No Advance Payment Required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white" />
              <span>Free Doorstep Pickup & Drop</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-white" />
              <span>Cancel Anytime for Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
