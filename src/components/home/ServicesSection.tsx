'use client';

import React, { useState } from 'react';
import {
  Wrench,
  Paintbrush,
  Car,
  Cpu,
  ShieldCheck,
  Activity,
  Droplets,
  Sparkles,
  ShieldAlert,
  Shield,
  Sliders,
  Phone,
  CheckCircle2
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { ALL_SERVICES, SERVICE_CATEGORIES } from '@/lib/data/servicesData';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all'
    ? ALL_SERVICES
    : ALL_SERVICES.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-red-600" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-red-600" />;
      case 'Car': return <Car className="w-5 h-5 text-red-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-red-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-red-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-red-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-red-600" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-red-600" />;
      default: return <Wrench className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Comprehensive Garage Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Our Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            From minor dent extraction to complete computerized engine works, SR Multicartech provides end-to-end automobile care with precision workmanship and genuine parts.
          </p>
        </div>

        {/* Category Tabs (Smooth Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white hover:border-red-500/40 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2.5 py-1 rounded-full bg-slate-100">
                    {service.categoryTitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-950 tracking-tight mb-1.5">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2.5">
                <a
                  href={`https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 text-xs font-bold transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="tel:9550425789"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white transition-colors"
                  title={`Call about ${service.name}`}
                  aria-label={`Call about ${service.name}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Need a Custom Automobile Repair or Comprehensive Inspection?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Speak directly with our technical team in Satrampadu for honest vehicle diagnosis and cost estimates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto flex-shrink-0">
            <a
              href="tel:9550425789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9550425789</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-800 text-center"
            >
              <span>Enquiry Form</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
