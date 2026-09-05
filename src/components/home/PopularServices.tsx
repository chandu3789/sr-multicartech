'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ShieldCheck, Check, ArrowRight, Star, Sparkles } from 'lucide-react';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { useCar } from '@/lib/context/CarContext';

export default function PopularServices() {
  const { currentCar } = useCar();

  // Pick top 6 popular packages
  const popularList = SERVICE_PACKAGES.filter(s => s.popular).slice(0, 6);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Recommended For You</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Popular Car Services {currentCar ? `for ${currentCar.brand} ${currentCar.model}` : ''}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Guaranteed genuine parts, certified technicians, and 100% upfront pricing.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 bg-white px-4 py-2.5 rounded-xl border border-rose-200 hover:border-rose-300 shadow-sm transition-all"
          >
            <span>Explore All 35+ Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top Banner */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {service.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{service.rating}</span>
                    <span className="text-slate-400 font-normal">({service.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Checklist (What's Included) */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {service.whatsIncluded.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                  {service.whatsIncluded.length > 4 && (
                    <div className="text-[11px] font-medium text-rose-600 pt-1">
                      + {service.whatsIncluded.length - 4} more multi-point inspection checks
                    </div>
                  )}
                </div>
              </div>

              {/* Card Bottom: Duration, Warranty, Price & CTA */}
              <div className="p-6 pt-3 bg-slate-50/60 border-t border-slate-100 space-y-4">
                {/* Meta details */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Approx. {service.estimatedHours} Hours</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="truncate">{service.warranty}</span>
                  </div>
                </div>

                {/* Price and Action Buttons */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Package Pricing</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs font-black text-rose-600 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-200/60 hover:bg-slate-200 transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      href={`/book-service?service=${service.slug}`}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 transition-all"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
