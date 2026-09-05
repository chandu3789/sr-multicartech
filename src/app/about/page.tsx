import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Users, Wrench, CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react';

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
            Redefining Automotive Care with Trust & Technology
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            SR Multi Car Tech was founded with a singular conviction: car ownership should be a joyful, reliable experience, free from fraudulent quotes, substandard parts, and tedious garage waits.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              🎯
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver transparent, dealership-grade automotive service at fair prices by fusing factory-certified diagnostic equipment, genuine OEM spare parts, and frictionless digital convenience right at the car owner’s doorstep.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              🚀
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To build Eastern India’s and the nation’s most trustworthy car servicing and roadside emergency network, empowering vehicle owners with complete telemetry and unconditional warranties.
            </p>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black">Our Workshop Standards</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every SR Multi Car Tech hub operates under strict ISO-grade quality protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <ShieldCheck className="w-6 h-6 text-rose-500" />
              <h3 className="font-bold text-sm">German Diagnostic Scanners</h3>
              <p className="text-xs text-slate-400">OBD-II live sensors and electronic ECU error code reset rigs.</p>
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
            <span>Book Your Service Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
