'use client';

import React from 'react';
import Link from 'next/link';
import { CAR_BRANDS } from '@/lib/data/carData';
import { useCar } from '@/lib/context/CarContext';
import { ShieldCheck, ChevronRight } from 'lucide-react';

export default function BrandCarousel() {
  const { selectCar } = useCar();

  const handleBrandClick = (brand: typeof CAR_BRANDS[0]) => {
    if (brand.models.length > 0) {
      const firstModel = brand.models[0];
      selectCar({
        brand: brand.name,
        brandSlug: brand.slug,
        model: firstModel.name,
        modelSlug: firstModel.id,
        fuel: firstModel.fuels[0],
        year: 2022
      });
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Multi-Brand Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Car Brands We Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your manufacturer to view custom service schedules and exact parts compatibility.
            </p>
          </div>

          <Link
            href="/select-car"
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
          >
            <span>Browse Full Brand Catalog</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Brand Grid / Horizontal Scroller */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {CAR_BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href={`/select-car?brand=${encodeURIComponent(brand.name)}`}
              onClick={() => handleBrandClick(brand)}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              {/* Monogram Badge */}
              <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-600 font-black text-sm flex items-center justify-center mb-2.5 transition-colors border border-slate-200/60 group-hover:border-rose-200">
                {brand.logoText || brand.name.slice(0, 2).toUpperCase()}
              </div>

              <span className="text-xs font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {brand.models.length} Models
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
