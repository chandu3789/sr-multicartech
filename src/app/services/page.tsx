'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench,
  Search,
  Filter,
  Star,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Car
} from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { useCar } from '@/lib/context/CarContext';
import BrandCarousel from '@/components/home/BrandCarousel';

export default function ServicesPage() {
  const { currentCar } = useCar();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICE_PACKAGES.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.categoryId === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.categoryName.toLowerCase().includes(q) ||
      s.shortDesc.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Automotive Service Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Car Services & Maintenance Packages
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Certified multi-brand car servicing with upfront pricing, genuine spare parts, and doorstep pickup.
          </p>

          {/* Active Car indicator */}
          {currentCar && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mt-4 text-xs font-semibold text-slate-700">
              <Car className="w-3.5 h-3.5 text-rose-600" />
              <span>Showing pricing customized for: <strong>{currentCar.brand} {currentCar.model} ({currentCar.fuel})</strong></span>
              <Link href="/select-car" className="text-rose-600 hover:underline ml-1">Change</Link>
            </div>
          )}
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 text-xs font-bold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Services ({SERVICE_PACKAGES.length})
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-rose-600 outline-none"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {service.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{service.rating}</span>
                    <span className="text-slate-400 font-normal">({service.reviewsCount})</span>
                  </div>
                </div>

                <Link href={`/services/${service.slug}`}>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {service.tagline}
                </p>

                {/* Key Inclusions Preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {service.whatsIncluded.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Area */}
              <div className="p-6 pt-3 bg-slate-50/60 border-t border-slate-100 space-y-4">
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

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Pricing</span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-xs font-black text-rose-600 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200">
                        Coming Soon
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-200/60 hover:bg-slate-200 transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/book-service?service=${service.slug}`}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 transition-all"
                    >
                      Select Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Brands Selector with Authentic Emblems */}
      <div className="mt-12 border-t border-slate-200/80">
        <BrandCarousel />
      </div>
    </div>
  );
}
