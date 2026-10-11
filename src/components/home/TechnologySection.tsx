'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Cpu,
  Activity,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Check
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function TechnologySection() {
  const [activeTab, setActiveTab] = useState<'ecm' | 'sensor' | 'dtc'>('ecm');

  const techPillars = [
    {
      title: 'Faster Identification of Issues',
      desc: 'High-speed diagnostic scanning interfaces read live communication buses in minutes, significantly reducing vehicle downtime.'
    },
    {
      title: 'More Accurate Root-Cause Diagnosis',
      desc: 'Decodes deep electronic fault codes across transmission, ABS, steering, and engine modules, eliminating trial-and-error part swapping.'
    },
    {
      title: 'Comprehensive Modern Vehicle Insight',
      desc: 'Modern automobiles are sophisticated digital networks. Our German technology software communicates with all onboard computers.'
    },
    {
      title: 'Professional Calibrated Service',
      desc: 'Every mechanical adjustment is verified digitally against factory parameters before vehicle delivery.'
    }
  ];

  return (
    <section id="technology" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>Digital Diagnostic Telemetry</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Advanced Technology.{' '}
            <span className="text-red-600">
              Precise Diagnosis.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Modern automobiles require modern diagnostic intelligence. SR Multicartech leverages advanced diagnostic equipment and German automotive technology software to evaluate vehicle health accurately.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Diagnostic Hardware Display (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0F172A] text-white border border-slate-800 p-5 sm:p-7 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  German Diagnostic Software Suite
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                LIVE BUS CONNECTED
              </span>
            </div>

            {/* Diagnostic Image Display */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-black">
              <Image
                src="/images/diagnostic_tech.jpg"
                alt="Automotive Diagnostic Software and ECU Telemetry"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                <span>PROTOCOL: OBD-II / CAN-FD</span>
                <span className="text-emerald-400 font-bold">100% SIGNAL INTEGRITY</span>
              </div>
            </div>

            {/* Interactive Telemetry Tabs */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                onClick={() => setActiveTab('ecm')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ecm'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                Engine &amp; ECM
              </button>
              <button
                onClick={() => setActiveTab('sensor')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'sensor'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                Live Sensors
              </button>
              <button
                onClick={() => setActiveTab('dtc')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'dtc'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                DTC Scanner
              </button>
            </div>

            {/* Tab Details Box */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs space-y-1.5 text-slate-300">
              {activeTab === 'ecm' && (
                <>
                  <div className="text-emerald-400 font-bold">► ECM TELEMETRY STATUS: NOMINAL</div>
                  <div className="text-slate-400">• Fuel Trim (Short/Long): 0.8% / 1.2% (Target calibrated)</div>
                  <div className="text-slate-400">• Ignition Timing advance: 14.5° BTDC stabilized</div>
                </>
              )}
              {activeTab === 'sensor' && (
                <>
                  <div className="text-blue-400 font-bold">► SENSOR WAVEFORM TELEMETRY</div>
                  <div className="text-slate-400">• O2 Lambda sensor voltage: 0.1V - 0.9V oscillation OK</div>
                  <div className="text-slate-400">• Mass Air Flow (MAF): 2.45 g/s baseline factory spec</div>
                </>
              )}
              {activeTab === 'dtc' && (
                <>
                  <div className="text-amber-400 font-bold">► DIAGNOSTIC TROUBLE CODE ANALYSIS</div>
                  <div className="text-slate-400">• Full module scan across ABS, Transmission, BCM &amp; SRS</div>
                  <div className="text-slate-400">• Instant decoding of permanent, pending &amp; historical faults</div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Why Diagnostics Matter (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Why Advanced Diagnostics Matter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                Pinpoint Accuracy Before Any Wrench Turns
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Guesswork in automotive repair causes unnecessary parts replacement and repeat workshop visits. Our German diagnostic software identifies root causes rapidly.
              </p>
            </div>

            {/* 4 Pillars in clean white cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {techPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
                    <Check className="w-4 h-4 text-red-600" />
                    <span className="text-slate-950 font-bold">{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="tel:9550425789"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md shadow-red-600/20 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Book Diagnostic Scan: 9550425789</span>
              </a>

              <a
                href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20get%20a%20computerized%20diagnostic%20scan%20for%20my%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm active:scale-95 transition-all"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
