'use client';

import React from 'react';
import { Award, Users, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuickTrustBar() {
  const trustItems = [
    {
      icon: <Award className="w-5 h-5 text-red-600" />,
      title: '15+ Years Experience',
      desc: 'Owner industry leadership'
    },
    {
      icon: <Users className="w-5 h-5 text-red-600" />,
      title: '5+ Yrs Technicians',
      desc: 'Experienced specialists'
    },
    {
      icon: <Cpu className="w-5 h-5 text-red-600" />,
      title: 'German Diagnostics',
      desc: 'Accurate software scanning'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      title: 'Genuine Spare Parts',
      desc: 'Authentic OEM fitment'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-red-600" />,
      title: 'Premium Workmanship',
      desc: 'High focus on accuracy'
    }
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200/80 py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/70 shadow-sm ${
                idx === trustItems.length - 1 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
