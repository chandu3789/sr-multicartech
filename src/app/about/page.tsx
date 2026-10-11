'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Wrench,
  CheckCircle2,
  HeartHandshake,
  ArrowRight,
  Cpu,
  Star,
  Clock,
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
  Upload
} from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';

export default function AboutPage() {
  const { openSos } = useSos();
  const [photoUrl, setPhotoUrl] = useState<string>('/images/brr-owner.jpg');

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Story Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
            About SR Multicartech
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Premium Automotive Care. Experienced Hands. Advanced Technology.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded in Satrampadu, SR Multicartech unites 15+ years of automotive mastery with modern diagnostic telemetry, genuine spare parts, and dedicated customer care.
          </p>
        </div>

        {/* FOUNDER & LEADERSHIP STORY */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] text-white shadow-2xl border border-slate-800 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Portrait & Title Header */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Framed Owner Portrait */}
              <div className="relative group flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-2xl relative bg-[#070b14] flex flex-col items-center justify-center">
                  <img
                    src={photoUrl}
                    alt="BRR — Birlangi Ratnala Ramesh, Founder & Owner"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  <label
                    htmlFor="about-owner-upload"
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-2 text-center"
                    title="Upload real owner photo"
                  >
                    <Upload className="w-5 h-5 text-red-400 mb-1" />
                    <span className="text-[10px] font-bold text-white uppercase">Upload Photo</span>
                  </label>
                  <input
                    id="about-owner-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleCustomPhotoUpload}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold border border-red-500/30">
                    Founder &amp; Owner
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
                    15+ Years Automobile Experience
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  BRR — Birlangi Ratnala Ramesh
                </h3>
                <p className="text-xs font-semibold text-red-400 mt-1">
                  Automotive Expert &amp; Business Owner
                </p>
                <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
                  Deep technical understanding of multi-brand powertrain systems, computerized diagnosis, and workshop management in Satrampadu, Eluru.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <a
                href="tel:9550425789"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call BRR: 9550425789</span>
              </a>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="relative z-10 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <p>
              <strong className="text-white font-bold">SR Multicartech</strong> was established with a clear mission: to provide vehicle owners with dealership-level technical precision paired with the transparency and personal trust of an owner-guided workshop.
            </p>
            <p>
              Founder and Owner <strong>BRR (Birlangi Ratnala Ramesh)</strong> has spent approximately 15 years in the automobile industry. His technical domain expertise spans complex engine overhauls, computerized electronic diagnosis, paint refinishing, and chassis safety. He does not take a hands-off approach; he personally verifies diagnostics, supervises key repairs, and ensures that every vehicle leaves the workshop in optimal driving condition.
            </p>
            <p>
              Supported by technicians with 5+ years of experience, SR Multicartech utilizes advanced German automotive diagnostic software. This allows our team to identify issues quickly and accurately, avoiding trial-and-error replacements and saving our customers both time and money.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-2xl font-black text-red-500">15+</div>
              <div className="text-xs text-slate-300 font-bold mt-1">Years Automobile Mastery</div>
              <div className="text-[11px] text-slate-500">Founder &amp; Owner Leadership</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-2xl font-black text-red-500">5+</div>
              <div className="text-xs text-slate-300 font-bold mt-1">Years Exp. Technicians</div>
              <div className="text-[11px] text-slate-500">Skilled Master Mechanics</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-2xl font-black text-red-500">German</div>
              <div className="text-xs text-slate-300 font-bold mt-1">Diagnostic Software</div>
              <div className="text-[11px] text-slate-500">Live CAN-Bus Telemetry</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-2xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-300 font-bold mt-1">Genuine Spare Parts</div>
              <div className="text-[11px] text-slate-500">OEM / OES Authenticity</div>
            </div>
          </div>
        </div>

        {/* Location & Contact Section */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Visit Our Facility
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                SR Multicartech Workshop Location
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple, Eluru, Andhra Pradesh
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SR+Multicartech+Satrampadu+Eluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Helpline:</span>
                <span className="text-slate-900 font-bold">9550425789</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">WhatsApp:</span>
                <span className="text-slate-900 font-bold">9550425789</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Operating Hours:</span>
                <span className="text-slate-900 font-bold">08:00 AM – 08:30 PM (7 Days)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
