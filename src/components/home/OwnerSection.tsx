'use client';

import React from 'react';
import Image from 'next/image';
import {
  Award,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Phone,
  UserCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function OwnerSection() {
  return (
    <section id="owner" className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>Automotive Leadership</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Founder &amp; Owner Profile
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Guided by 15+ years of hands-on automotive expertise, precision diagnosis, and unwavering customer commitment.
          </p>
        </div>

        {/* Executive Profile Card - NxtWave Clean, High-Trust Card */}
        <div className="rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Founder Portrait (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-100 shadow-lg">
                <Image
                  src="/images/brr-owner.jpg"
                  alt="BRR — Birlangi Ratnala Ramesh, Founder & Owner of SR Multicartech"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white shadow-md text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold">
                    <UserCheck className="w-4 h-4 text-red-400" />
                    <span>BRR — Founder &amp; Owner</span>
                  </div>
                  <span className="text-[10px] text-red-400 font-extrabold uppercase tracking-wider block mt-0.5">
                    15+ YEARS AUTOMOTIVE EXPERIENCE
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Leadership Profile & Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Official Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-extrabold border border-red-200">
                  Founder &amp; Owner
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                  15+ Years Automobile Experience
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  Automotive Expert &amp; Business Owner
                </span>
              </div>

              {/* Founder Name & Location */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                  BRR — Birlangi Ratnala Ramesh
                </h3>
                <p className="text-sm font-semibold text-red-600 mt-1">
                  Founder &amp; Owner, SR Multicartech • Satrampadu, Eluru
                </p>
              </div>

              {/* Biography & Vision */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  BRR is the founder and owner of <strong className="text-slate-950 font-bold">SR Multicartech</strong>. With approximately{' '}
                  <strong className="text-slate-950 font-bold">15 years of deep experience</strong> in the automobile field, he brings comprehensive technical mastery across multi-brand vehicle diagnosis, engine repair, electronic systems, and overall vehicle care.
                </p>
                <p>
                  His hands-on automotive knowledge and business leadership have shaped SR Multicartech into a trusted, professional automobile service center. Under his direction, the workshop combines experienced technicians, advanced German diagnostic technology software, and genuine spare parts to deliver accurate, dependable solutions.
                </p>
              </div>

              {/* Key Competencies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">
                    <strong className="text-slate-950">15+ Years Experience:</strong> Deep vehicle systems and multi-brand knowledge.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Cpu className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">
                    <strong className="text-slate-950">German Technology:</strong> Accurate ECU scanning without trial-and-error.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">
                    <strong className="text-slate-950">Genuine Spare Parts:</strong> 100% authentic replacement components.
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">
                    <strong className="text-slate-950">Experienced Team:</strong> Technicians with 5+ years hands-on experience.
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:9550425789"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider transition-all text-center shadow-md shadow-red-600/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Founder: 9550425789</span>
                </a>

                <a
                  href="https://wa.me/919550425789?text=Hello%20BRR%20garu%2C%20I%20would%20like%20to%20consult%20regarding%20my%20car%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
                >
                  <WhatsAppIcon size={16} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
