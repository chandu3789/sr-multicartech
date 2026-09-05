'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Wind,
  Zap,
  CircleDot,
  Paintbrush,
  Sparkles,
  FileCheck,
  Sun,
  ShieldAlert,
  Cog,
  FileText,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/data/servicesData';

export default function ServiceCategoriesGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Wind': return <Wind className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'CircleDot': return <CircleDot className="w-6 h-6" />;
      case 'Paintbrush': return <Paintbrush className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Cog': return <Cog className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            All-In-One Garage Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Car Services For Every Requirement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Explore 12 specialized automotive divisions equipped with OEM diagnostic computers, certified lubricants, and factory-trained specialists.
          </p>
        </div>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICE_CATEGORIES.map((category) => {
            const isSOS = category.id === 'sos-roadside-assistance';

            return (
              <div
                key={category.id}
                className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  isSOS
                    ? 'bg-gradient-to-br from-red-50 to-white border-red-200 hover:border-red-400 hover:shadow-lg'
                    : 'bg-white border-slate-200/80 hover:border-rose-200 hover:shadow-xl'
                }`}
              >
                {/* Badge if available */}
                {category.badge && (
                  <span
                    className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isSOS
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {category.badge}
                  </span>
                )}

                <div>
                  {/* Category Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${
                      isSOS
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                        : 'bg-slate-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
                    }`}
                  >
                    {getIcon(category.iconName)}
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                    {category.shortDesc}
                  </p>
                </div>

                {/* Price & Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Pricing</span>
                    <span className="text-xs font-black text-rose-600">
                      Coming Soon
                    </span>
                  </div>

                  <Link
                    href={isSOS ? '/sos' : `/services#${category.slug}`}
                    className={`inline-flex items-center gap-1 text-xs font-bold transition-all ${
                      isSOS
                        ? 'text-red-600 hover:text-red-700'
                        : 'text-rose-600 hover:text-rose-700'
                    }`}
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
