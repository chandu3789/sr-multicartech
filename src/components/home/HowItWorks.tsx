'use client';

import React from 'react';
import { PhoneCall, Search, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      subtitle: 'Call or WhatsApp',
      desc: 'Reach out with your vehicle details and requirements. Our team quickly understands the issue and schedules your workshop visit.',
      icon: <PhoneCall className="w-5 h-5 text-red-600" />
    },
    {
      step: '02',
      title: 'Vehicle Inspection',
      subtitle: 'Diagnostics & Evaluation',
      desc: 'Comprehensive checkup using advanced diagnostic scanners and visual examination. We provide clear, honest estimates before starting work.',
      icon: <Search className="w-5 h-5 text-red-600" />
    },
    {
      step: '03',
      title: 'Professional Service',
      subtitle: 'Precision Workmanship',
      desc: 'Our experienced technicians execute precision repairs using genuine spare parts, calibrated torque specs, and professional tools.',
      icon: <Wrench className="w-5 h-5 text-red-600" />
    },
    {
      step: '04',
      title: 'Quality Check & Delivery',
      subtitle: 'Road Test & Handover',
      desc: 'Multi-point inspection and post-repair verification ensure your car meets factory performance standards before you drive away.',
      icon: <CheckCircle2 className="w-5 h-5 text-red-600" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless Workflow</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Our Service Process
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Four straightforward steps from initial enquiry to final delivery. Transparent, fast, and reliable.
          </p>
        </div>

        {/* Steps Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black font-mono text-red-600/70">
                    {item.step}
                  </span>
                </div>

                <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-0.5">
                  {item.subtitle}
                </p>

                <h3 className="text-base font-bold text-slate-950 tracking-tight mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Step {idx + 1} of 4</span>
                <span className="text-red-600 font-bold">Standard Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-10 text-center">
          <a
            href="tel:9550425789"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Start Step 1: Call 9550425789</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
