'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Star,
  Sparkles,
  ArrowRight,
  Car,
  CalendarCheck,
  HelpCircle,
  Award,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { CUSTOMER_REVIEWS } from '@/lib/data/reviewsData';
import { FAQ_LIST } from '@/lib/data/faqData';
import { useCar } from '@/lib/context/CarContext';

export default function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const resolvedParams = use(params);
  const serviceSlug = resolvedParams.service;

  const service = SERVICE_PACKAGES.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  const { currentCar } = useCar();

  // Related services in same category
  const relatedServices = SERVICE_PACKAGES.filter(
    (s) => s.categoryId === service.categoryId && s.id !== service.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Service Hero Banner */}
      <section className="bg-slate-950 text-white pt-12 pb-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-rose-400 font-bold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Title & Description */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                {service.categoryName}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Badges / Meta row */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Duration: ~{service.estimatedHours} Hours</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{service.warranty}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>{service.recommendedFrequency}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{service.rating} / 5</span>
                  <span className="text-slate-400 font-normal">({service.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Quick Price Booking Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase text-rose-600 block">Upfront Pricing</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-black text-slate-900">₹{service.startingPrice}</span>
                  {service.originalPrice > service.startingPrice && (
                    <span className="text-base text-slate-400 line-through">₹{service.originalPrice}</span>
                  )}
                </div>
                <div className="text-xs text-emerald-700 font-bold mt-1">
                  Save ₹{service.originalPrice - service.startingPrice} with seasonal discount
                </div>

                {/* Active car preview */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mt-4 text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Selected Vehicle</span>
                  <div className="font-bold text-slate-800 flex items-center justify-between mt-0.5">
                    <span>{currentCar ? `${currentCar.brand} ${currentCar.model} (${currentCar.fuel})` : 'No Car Selected'}</span>
                    <Link href="/select-car" className="text-rose-600 hover:underline text-[11px]">Change</Link>
                  </div>
                </div>

                <Link
                  href={`/book-service?service=${service.slug}`}
                  className="w-full mt-5 py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2 group"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Select This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-3 text-center text-[11px] text-slate-500 font-medium">
                  ✓ Free Doorstep Pickup & Drop Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Inclusions & Detailed Breakdown */}
          <div className="lg:col-span-8 space-y-10">
            {/* What's Included */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Multi-Point Check & Service Points</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                What’s Included in {service.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.whatsIncluded.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Included */}
            {service.whatsNotIncluded.length > 0 && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                  <XCircle className="w-4 h-4" />
                  <span>Transparent Boundary</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  What’s Not Included (Quoted Separately Upon Approval)
                </h3>
                <div className="space-y-2.5">
                  {service.whatsNotIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Warranty & Genuine Parts Promise */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">SR Multi Car Tech Warranty Promise</h3>
                  <p className="text-xs text-slate-400">Unconditional service backing for total peace of mind</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                This service comes with a dedicated <strong>{service.warranty}</strong>. Should any covered component exhibit performance drop or leakage during the warranty duration, our technicians will inspect and rectify it at zero labor charge.
              </p>
            </div>

            {/* Customer Reviews for this service */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6">
                Customer Reviews ({service.reviewsCount})
              </h3>
              <div className="space-y-4">
                {CUSTOMER_REVIEWS.slice(0, 2).map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-sm">{rev.name}</span>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600 italic">“{rev.comment}”</p>
                    <div className="text-[10px] text-rose-600 font-semibold">{rev.carModel} • Verified Owner</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Related Services & Quick FAQs */}
          <div className="lg:col-span-4 space-y-6">
            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
                  Related Services in {service.categoryName}
                </h4>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="p-3.5 rounded-2xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/40 block transition-all group"
                    >
                      <div className="font-bold text-xs text-slate-900 group-hover:text-rose-600">
                        {rel.title}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                        <span>Starting ₹{rel.startingPrice}</span>
                        <span className="text-rose-600 font-semibold group-hover:underline">View →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick FAQs */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-rose-600" />
                Frequently Asked
              </h4>
              <div className="space-y-3 text-xs">
                {FAQ_LIST.slice(0, 3).map((f) => (
                  <div key={f.id} className="pb-3 border-b border-slate-100 last:border-none">
                    <div className="font-bold text-slate-800 mb-1">{f.question}</div>
                    <p className="text-slate-500 line-clamp-2">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
