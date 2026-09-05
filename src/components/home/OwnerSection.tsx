'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Cpu,
  Zap,
  CheckCircle2,
  Wrench,
  Award,
  Activity,
  ArrowRight,
  Sparkles,
  Search,
  Check,
  Car
} from 'lucide-react';

export default function OwnerSection() {
  const [activeTab, setActiveTab] = useState<'scan' | 'team' | 'philosophy'>('scan');

  const diagnosticSteps = [
    {
      step: '01',
      title: 'Plug-in German OBD-II Telemetry Scanner',
      desc: 'Our high-bandwidth German diagnostic interface connects directly to the vehicle\'s ECU CAN-Bus port, establishing an encrypted diagnostic link.',
      badge: 'Hardware Plug-In'
    },
    {
      step: '02',
      title: '360° Multi-System Electronic Health Scan',
      desc: 'The German software interrogates 50+ onboard microcomputers, reading 5,000+ live sensor metrics across Engine (ECM), Transmission (TCM), ABS/ESP, Airbags, and Climate modules.',
      badge: '360° Digital Scan'
    },
    {
      step: '03',
      title: 'Instant Root-Cause & Error Code Pinpointing',
      desc: 'The software pinpoints the exact component malfunction in seconds, decoding DTC fault codes and eliminating blind guesswork and trial-and-error replacements.',
      badge: 'Instant Diagnosis'
    },
    {
      step: '04',
      title: 'Certified Master Technician Precision Repair',
      desc: 'Equipped with the digital diagnosis report, our senior master technicians execute surgical OEM repairs with authentic parts and calibrated torque specs.',
      badge: 'Expert Execution'
    }
  ];

  return (
    <section id="owner-technology" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Visionary Leadership • 15+ Years Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Automotive Expertise Meets <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              German Diagnostic Software
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            SR Multi Car Tech is guided by a founder with 15+ years of comprehensive automotive industry knowledge.
            Not a traditional grease-mechanic — an automotive strategist leveraging state-of-the-art German diagnostic
            software and commanding an elite team of certified master technicians.
          </p>
        </div>

        {/* Main Grid: Founder Story (Left) + German Diagnostic Tech (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Founder & Leadership Story (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-800/50 border border-slate-700/80 p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>

            <div>
              {/* Founder Header Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-rose-600/30 border border-rose-400/30 flex-shrink-0">
                  SR
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-black text-white">Founder & Automotive Strategist</h3>
                  </div>
                  <div className="text-xs font-semibold text-rose-400 mt-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>15+ Years Automotive Industry Leadership</span>
                  </div>
                </div>
              </div>

              {/* Core Philosophy Highlights */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white font-bold">Deep Automotive Intelligence, Not Guesswork:</strong> With over 15 years immersed in modern car engineering, our founder recognized that modern automobiles are intricate computers on wheels.
                </p>

                <p>
                  Rather than relying on outdated trial-and-error, he established a technology-first workshop standard: combining <strong className="text-rose-400">German OEM diagnostic software</strong> with a dedicated squad of <strong className="text-white font-bold">certified master technicians</strong> who have 10+ years of hands-on precision repair expertise.
                </p>

                {/* Founder Quote Card */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 my-5 relative">
                  <div className="text-amber-400 font-serif text-3xl absolute top-1 left-2 select-none opacity-50">&ldquo;</div>
                  <blockquote className="italic text-xs sm:text-sm text-slate-200 pl-4 relative z-10 font-medium">
                    Modern cars can’t be solved with a hammer and a wrench alone. When you plug German software into the ECU, the car reveals its exact problem in seconds. We diagnose accurately, and our veteran technicians fix it right the first time.
                  </blockquote>
                  <div className="text-[11px] font-bold text-rose-400 mt-2 pl-4">
                    — Founder, SR Multi Car Tech
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Trust Numbers Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-700/60 mt-6">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-rose-500">15+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Years Automotive Knowledge</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-amber-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">German Diagnostic Telemetry</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400">25+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Certified Master Technicians</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-blue-400">15,000+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Cars Successfully Cured</div>
              </div>
            </div>
          </div>

          {/* Right Column: German Technology Software Showcase (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Tech Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-700/60 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Cpu className="w-4 h-4" />
                    <span>State-of-the-Art Workshop Equipment</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    German Technology Diagnostic Software
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Live ECU Telemetry Active</span>
                </div>
              </div>

              {/* Live Scanner Interactive Workflow UI */}
              <div className="space-y-4">
                {diagnosticSteps.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-rose-500/40 hover:bg-slate-800 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center font-black text-sm text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-colors flex-shrink-0">
                      {item.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-sm group-hover:text-rose-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="hidden md:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <CheckCircle2 className="w-5 h-5 text-emerald-400 hidden sm:block flex-shrink-0" />
                  </div>
                ))}
              </div>

              {/* Digital Scanner Telemetry Terminal Mockup */}
              <div className="mt-6 p-4 rounded-2xl bg-black/70 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-sans font-bold text-slate-400 pl-2">GERMAN_OBD2_SCANNER_v4.8.exe</span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% PROTOCOL PASS</span>
                </div>
                <div className="text-emerald-400 pt-1">
                  &gt; CONNECTING: CAN-Bus 500kbps interface plugged into DLC port... OK
                </div>
                <div className="text-slate-400">
                  &gt; SCANNING: ECM [PASS] • TCM [PASS] • ABS/ESP [PASS] • SRS Airbags [PASS]
                </div>
                <div className="text-rose-400 font-semibold">
                  &gt; DETECTED: Cylinder 2 Ignition Coil Micro-Misfire (DTC: P0302) — Exact Root Pinpointed!
                </div>
                <div className="text-amber-400 font-bold">
                  &gt; ACTION: Replaced Ignition Coil with genuine OEM part. Fault cleared. No unnecessary replacements.
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-6 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <strong className="text-white font-bold">Complimentary German Scan:</strong> Included with every service package.
              </div>

              <Link
                href="/book-service"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Service with German Scan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
