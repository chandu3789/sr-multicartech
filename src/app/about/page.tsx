'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Users, Wrench, CheckCircle2, HeartHandshake, ArrowRight, Cpu, Star, Clock, MapPin, Navigation, Phone, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [ownerPhoto, setOwnerPhoto] = useState<string>('/images/owner.jpg');

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setOwnerPhoto(event.target.result as string);
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
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full border border-rose-100">
            About SR Multi Car Tech
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Redefining Automotive Care with Trust & German Technology
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            SR Multi Car Tech was founded with a singular conviction: car ownership should be a joyful, reliable experience, free from fraudulent quotes, substandard parts, and tedious garage waits.
          </p>
        </div>

        {/* FOUNDER & LEADERSHIP STORY */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Portrait & Title Header */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Framed Owner Portrait */}
              <div className="relative group flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-2xl shadow-black/80 relative bg-slate-950">
                  <img
                    src={ownerPhoto}
                    alt="Founder & Automotive Strategist - SR Multi Car Tech"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Gold Crest */}
                <div className="absolute -bottom-2.5 -right-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-900">
                  <Award className="w-4 h-4 text-slate-950 fill-slate-950" />
                </div>

                {/* Image Upload Trigger */}
                <label
                  htmlFor="about-owner-upload"
                  className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity flex flex-col items-center justify-center cursor-pointer text-center p-2"
                  title="Upload / Change Owner Photo"
                >
                  <Sparkles className="w-5 h-5 text-amber-400 mb-1" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Change Photo</span>
                  <span className="text-[8px] text-slate-300">Click to upload</span>
                </label>
                <input
                  id="about-owner-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Founder & Automotive Strategist</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  15+ Years Automotive Industry Expertise
                </h2>
                <div className="text-xs sm:text-sm font-semibold text-rose-400 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Visionary Leadership • Satrampadu, Eluru, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold self-center md:self-start">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Diagnostic Pioneer</span>
            </div>
          </div>

          {/* IMPRESSIVE CITATION CARD */}
          <div className="relative z-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900/95 to-rose-500/10 border border-amber-400/30 shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Official Citation of Visionary Leadership & Wonderful Success</span>
            </div>

            <div className="text-amber-400 font-serif text-4xl absolute -top-3 right-6 select-none opacity-25">&ldquo;</div>

            <blockquote className="italic text-xs sm:text-sm text-slate-200 leading-relaxed relative z-10 font-normal">
              Behind the extraordinary success and sterling reputation of SR Multi Car Tech stands a visionary leader whose 15+ years of comprehensive automotive mastery redefined vehicle maintenance. Rejecting crude mechanical trial-and-error, he championed modern automotive computer diagnostics, equipping our flagship facility with genuine German telemetry software and commanding an elite team of certified master technicians. His unbending commitment to honest pricing, technical perfection, and customer transparency has cured over 15,000+ cars and established SR Multi Car Tech as Andhra Pradesh’s gold standard in automotive excellence.
            </blockquote>

            <div className="mt-4 pt-3 border-t border-amber-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
              <span className="font-bold text-amber-300">Honoring the Visionary Behind SR Multi Car Tech</span>
              <span className="text-slate-400 text-[11px]">Satrampadu, Eluru &bull; Helpline: +91 95504 25789</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-white">Not a Traditional Mechanic:</strong> Our founder is an automotive domain strategist with deep technical mastery over electronic architectures, engine ECU mappings, CAN-bus networks, and modern vehicle diagnostics.
              </p>
              <p>
                Having spent over 15 years immersed in multi-brand car technology, he realized that modern vehicles are complex computers on wheels that cannot be fixed by guesswork or random part replacements.
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <strong className="text-rose-400">German Diagnostic Technology:</strong> He equipped our state-of-the-art service bays with specialized German diagnostic software. When plugged into a vehicle’s ECU port, the software scans 50+ onboard computers and 5,000+ sensor parameters to pinpoint the exact root issue within minutes.
              </p>
              <p>
                <strong className="text-white">Elite Master Technicians:</strong> All mechanical, electrical, and bodywork repairs are executed by factory-trained master technicians, each bringing 10+ years of hands-on workshop experience.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-xl font-black text-rose-500">15+ Years</div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">Automotive Knowledge</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-xl font-black text-amber-400">100%</div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">German Diagnostic Telemetry</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-xl font-black text-emerald-400">25+</div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">Certified Technicians</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="text-xl font-black text-blue-400">15,000+</div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">Cars Cured</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              🎯
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver transparent, dealership-grade automotive service by fusing German diagnostic equipment, genuine OEM spare parts, and frictionless digital convenience right at the car owner’s doorstep.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              🚀
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To build the most trustworthy car servicing and roadside emergency network, empowering vehicle owners with transparent diagnostic telemetry and unconditional warranties.
            </p>
          </div>
        </div>

        {/* Workshop Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black">Our Workshop Standards</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every SR Multi Car Tech hub operates under strict ISO-grade quality protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <Cpu className="w-6 h-6 text-rose-500" />
              <h3 className="font-bold text-sm">German Diagnostic Scanners</h3>
              <p className="text-xs text-slate-400">OBD-II CAN-bus live telemetry and electronic ECU error code reset rigs.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <Award className="w-6 h-6 text-amber-500" />
              <h3 className="font-bold text-sm">DuPont Baking Booths</h3>
              <p className="text-xs text-slate-400">Sealed, dust-free infrared baking booths ensuring 100% factory paint match.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <Wrench className="w-6 h-6 text-emerald-500" />
              <h3 className="font-bold text-sm">Automated Lifts & Aligners</h3>
              <p className="text-xs text-slate-400">High-capacity electro-hydraulic ramps and 3D laser alignment sensors.</p>
            </div>
          </div>
        </div>

        {/* WORKSHOP LOCATION & DIRECTIONS */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Satrampadu, Eluru Flagship Workshop</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Visit Our German Diagnostic Lab in Person
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Located near Main Road, Satrampadu, Eluru, Andhra Pradesh - 534007. Direct helpline: <strong>+91 95504 25789</strong>. Open Monday through Sunday with valet pickup options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href="https://www.google.com/maps/search/?api=1&query=SR+Multi+Car+Tech+Satrampadu+Eluru+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-black text-xs shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-white" />
              <span>Get Directions to Workshop</span>
            </a>

            <a
              href="tel:+919550425789"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>Call 9550425789</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/book-service"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-xl shadow-rose-600/20 transition-all"
          >
            <span>Book Your Service with German Telemetry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
