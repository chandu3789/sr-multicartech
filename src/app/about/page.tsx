'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Users, Wrench, CheckCircle2, HeartHandshake, ArrowRight, Cpu, Star, Clock } from 'lucide-react';

export default function AboutPage() {
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
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-rose-600/30 flex-shrink-0">
                SR
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">Founder & Chief Automotive Strategist</span>
                <h2 className="text-2xl font-black text-white">15+ Years Automotive Industry Expertise</h2>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold self-start md:self-auto">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>Domain Strategist &bull; Certified Master Fleet</span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="space-y-3">
              <p>
                <strong className="text-white">Not a Traditional Mechanic:</strong> Our founder is an automotive domain strategist with deep technical mastery over electronic architectures, engine ECU mappings, and modern vehicle diagnostics.
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
