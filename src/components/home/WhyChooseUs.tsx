'use client';

import React from 'react';
import {
  Award,
  Users,
  Cpu,
  Zap,
  ShieldCheck,
  Sparkles,
  Layers,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Award className="w-5 h-5 text-red-600" />,
      title: '15+ Years Owner Experience',
      desc: 'Founded and personally guided by BRR with extensive hands-on mastery in multi-brand car diagnostics and mechanics.'
    },
    {
      icon: <Users className="w-5 h-5 text-red-600" />,
      title: '5+ Years Experienced Technicians',
      desc: 'Our workshop mechanics bring years of hands-on technical proficiency across engine, chassis, and electronic repairs.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-red-600" />,
      title: 'Advanced Automotive Technology',
      desc: 'State-of-the-art diagnostic gadgets and testing instruments ensuring fast, accurate troubleshooting.'
    },
    {
      icon: <Zap className="w-5 h-5 text-red-600" />,
      title: 'German Technology / Software',
      desc: 'Advanced software decoding onboard ECU data buses to identify faults without trial-and-error guesswork.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      title: 'Genuine Spare Parts',
      desc: 'We strictly fit authentic OEM and certified replacement parts to protect vehicle performance and warranty.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-red-600" />,
      title: 'Premium Quality Workmanship',
      desc: 'From micron-level paint booths to calibrated engine torque specs, our focus is accuracy and durability.'
    },
    {
      icon: <Layers className="w-5 h-5 text-red-600" />,
      title: 'Comprehensive Car Services',
      desc: 'Denting, painting, mechanical overhaul, detailing, anti-rust, and electrical works all under one roof.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-red-600" />,
      title: 'Customer-Focused Service',
      desc: 'Direct communication, transparent estimates, and sincere recommendations you can rely on.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>The SR Multicartech Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why Choose SR Multicartech
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            We bridge deep industry experience with modern automotive technology to deliver premium care with complete transparency.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>

                <h3 className="text-base font-bold text-slate-950 tracking-tight mb-1.5">
                  {benefit.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-red-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
