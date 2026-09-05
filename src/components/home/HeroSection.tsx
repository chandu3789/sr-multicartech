'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ShieldAlert, ArrowRight, ShieldCheck, Clock, Award, Star, CheckCircle } from 'lucide-react';
import QuickBookingWidget from './QuickBookingWidget';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Automotive Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>SR Multi Car Tech • Tech-Driven Car Servicing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Expert Car Service,{' '}
              <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Wherever You Need It.
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Transparent pricing, skilled technicians, and reliable car care for every journey. From doorstep periodic servicing to major accident repairs, experience genuine dealer-grade precision at honest rates.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book-service"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-xl shadow-rose-600/30 hover:shadow-rose-600/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/sos"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-red-400 font-bold text-sm border border-red-900/60 hover:border-red-600 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-red-500 animate-bounce" />
                <span>Get Emergency Help (SOS)</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-left">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">100% Genuine</div>
                  <div className="text-[11px] text-slate-400">OEM / OES Spare Parts</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Free Doorstep</div>
                  <div className="text-[11px] text-slate-400">Pickup & Drop Included</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Service Warranty</div>
                  <div className="text-[11px] text-slate-400">Up to 2 Years Protection</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Graphic Automotive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-md">
              {/* Automotive Emblem Artwork */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/80 flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-slate-700/40">
                {/* Visual Speed Lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Sleek Car Silhouette graphic */}
                <svg viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] drop-shadow-[0_10px_15px_rgba(225,29,72,0.4)]">
                  {/* Roofline */}
                  <path d="M45 75C70 45 110 32 170 32C225 32 255 52 280 75" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" />
                  {/* Body Waistline */}
                  <path d="M20 78L50 75H275L300 78C305 85 302 92 290 92H30C18 92 15 85 20 78Z" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                  {/* Windshields */}
                  <path d="M90 70L125 42H170L165 70H90Z" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="1.5" />
                  <path d="M178 70L175 42H215L235 70H178Z" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5" />
                  {/* Wheels */}
                  <circle cx="75" cy="92" r="18" fill="#0F172A" stroke="#E2E8F0" strokeWidth="4" />
                  <circle cx="75" cy="92" r="8" fill="#E11D48" />
                  <circle cx="245" cy="92" r="18" fill="#0F172A" stroke="#E2E8F0" strokeWidth="4" />
                  <circle cx="245" cy="92" r="8" fill="#E11D48" />
                  {/* Headlight Ray */}
                  <path d="M295 82L320 85L295 90" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
                </svg>

                <div className="relative mt-3">
                  <span className="text-xs font-bold text-slate-300">Certified Diagnostics & Multi-Bay Workshops</span>
                  <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-extrabold mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="text-white ml-1">4.8 / 5</span>
                    <span className="text-slate-400 font-normal">(10,000+ Serviced)</span>
                  </div>
                </div>
              </div>

              {/* Mini Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">Periodic Care</div>
                  <div className="text-base font-extrabold text-white">From ₹1,499</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Free 50-Pt Inspection</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="text-[11px] text-slate-400">AC Gas Refill</div>
                  <div className="text-base font-extrabold text-white">From ₹1,299</div>
                  <div className="text-[10px] text-rose-400 mt-0.5">3 Months Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Booking Widget Floating in Flow */}
        <div className="mt-12 lg:mt-16">
          <QuickBookingWidget />
        </div>
      </div>
    </section>
  );
}
