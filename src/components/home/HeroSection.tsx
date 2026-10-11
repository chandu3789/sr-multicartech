'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Wrench,
  ShieldCheck,
  Cpu,
  Clock,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function HeroSection() {
  const { openSos } = useSos();

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-[#F8FAFC] text-slate-900 overflow-hidden border-b border-slate-200/80 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24">
      {/* Subtle Background Glows (NxtWave Style) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Satrampadu, Opp. Aditya Degree College</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Premium Automotive Care.{' '}
              <span className="text-red-600">
                Advanced Technology.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Led by Founder &amp; Owner <strong className="text-slate-900 font-bold">BRR (Birlangi Ratnala Ramesh)</strong> with{' '}
              <strong className="text-slate-900 font-bold">15+ years of automotive mastery</strong>. Supported by technicians with 5+ years experience,
              genuine spare parts, and <strong className="text-slate-900 font-bold">German automotive diagnostic software</strong> for pinpoint precision.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* 1. CALL NOW CTA */}
              <a
                href="tel:9550425789"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-red-600/20 transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: 9550425789</span>
              </a>

              {/* 2. WHATSAPP US CTA */}
              <a
                href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20vehicle%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white font-bold text-sm uppercase tracking-wider shadow-sm transition-all text-center"
              >
                <WhatsAppIcon size={20} />
                <span>WHATSAPP US</span>
              </a>

              {/* 3. EXPLORE SERVICES CTA */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 font-bold text-sm transition-all border border-slate-300 text-center shadow-xs"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Workshop Highlight Card with Clean Frame (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white p-3 shadow-xl">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/diagnostic_tech.jpg"
                  alt="SR Multicartech Workshop Diagnostics"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-900 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block">
                        Advanced Garage Facility
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-950">
                        SR Multicartech • Satrampadu
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Opp. Aditya Degree College, Near Ambika Devi Temple
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-black text-xs">
                      15+ Y
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Feature Badges below image */}
              <div className="pt-3 px-2 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 font-semibold text-slate-700">
                  Precision Scanners
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 font-semibold text-slate-700">
                  Paint Booth Care
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 font-semibold text-slate-700">
                  Engine Overhauls
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
