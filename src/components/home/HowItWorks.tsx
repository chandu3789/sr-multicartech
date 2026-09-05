import React from 'react';
import { Car, Wrench, CalendarClock, Coffee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Car className="w-6 h-6" />,
      title: 'Select Your Car',
      desc: 'Pick your manufacturer, model, and fuel type to view curated packages tailored to your vehicle.'
    },
    {
      num: '02',
      icon: <Wrench className="w-6 h-6" />,
      title: 'Choose Your Service',
      desc: 'Select from periodic maintenance, AC recharge, detailing, brakes, or custom diagnostic scans.'
    },
    {
      num: '03',
      icon: <CalendarClock className="w-6 h-6" />,
      title: 'Pick Date & Location',
      desc: 'Choose free doorstep pickup & drop, on-site mobile van care, or drive-in at our certified workshop.'
    },
    {
      num: '04',
      icon: <Coffee className="w-6 h-6" />,
      title: 'Relax & Track Live',
      desc: 'Monitor real-time progress, review inspection reports, and receive your car sanitized and road-tested.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Simple 4-Step Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            How SR Multi Car Tech Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No more waiting around dirty garages or arguing over surprise bills. We made car servicing as effortless as ordering dinner.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step number badge */}
              <div className="text-3xl font-black text-slate-200 group-hover:text-rose-200 transition-colors mb-2 font-mono">
                {step.num}
              </div>

              {/* Icon Bubble */}
              <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-5 group-hover:bg-rose-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-rose-600/30 transition-all duration-300">
                {step.icon}
              </div>

              {/* Step Title & Details */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <Link
            href="/book-service"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all group"
          >
            <span>Start Your Booking Now</span>
            <ArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
