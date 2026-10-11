'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  ShieldCheck,
  Wrench,
  Zap,
  Car
} from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';

export default function SosPage() {
  const { openSos } = useSos();

  const emergencyPoints = [
    {
      title: 'Sudden Engine Stalling & Misfire',
      desc: 'Connect with our technical team for immediate phone diagnosis, fault code guidance, and garage intake.'
    },
    {
      title: 'Brake or Clutch Failure',
      desc: 'Critical safety faults require experienced eyes. Call our helpline before attempting to drive.'
    },
    {
      title: 'Battery Drain & Electrical Failure',
      desc: 'Jumpstart consultation, alternator diagnosis, and fast assistance in Satrampadu.'
    },
    {
      title: 'Overheating & Coolant Leaks',
      desc: 'Stop the vehicle safely and contact us to avoid severe engine head warping or seizure.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Top Emergency Beacon */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <span>Emergency Automobile Assistance • 24 HRS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Need Immediate Assistance?
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Call <strong className="text-white font-bold">SR Multicartech</strong> now. Direct communication with Founder &amp; Owner <strong className="text-white">BRR (15+ Years Exp.)</strong> and our senior technician team.
          </p>
        </div>

        {/* Primary Calling & Messaging Action Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131b2e] to-[#0d1322] border-2 border-red-500/50 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center mx-auto mb-2 animate-bounce">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Direct Emergency Hotline
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Tap below to connect instantly with our workshop desk.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:9550425789"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-red-900/50 active:scale-95 transition-all"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              <span>CALL NOW: 9550425789</span>
            </a>

            <a
              href="https://wa.me/919550425789?text=EMERGENCY%3A%20I%20need%20immediate%20automobile%20assistance%20from%20SR%20Multicartech."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg uppercase tracking-wider shadow-lg shadow-emerald-950/50 active:scale-95 transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>WHATSAPP SOS</span>
            </a>
          </div>

          {/* Location & Workshop Guidance */}
          <div className="p-5 rounded-2xl bg-[#080c16] border border-slate-800 space-y-3 text-xs">
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm">SR Multicartech Workshop Location:</strong>
                <p className="text-slate-400 mt-1 leading-snug">
                  Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple, Eluru, Andhra Pradesh - 534007
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400 pt-2 border-t border-slate-800">
              <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Direct helpline active 24 HRS for urgent vehicle breakdowns and garage guidance.</span>
            </div>
          </div>
        </div>

        {/* Common Emergency Scenarios Handled */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-white text-center">
            Critical Vehicle Issues We Guide You Through
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {emergencyPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{point.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
