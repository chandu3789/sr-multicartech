'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioItem
} from '@/lib/data/portfolioData';
import {
  X,
  Phone,
  Eye,
  CheckCircle2,
  Info
} from 'lucide-react';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Workmanship &amp; Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Our Work
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Explore our craftsmanship across denting, painting, precision engine works, detailing, and anti-rust protection.
          </p>

          {/* Transparency Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left max-w-xl mx-auto">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              Representative workshop portfolio demonstrating SR Multicartech service capabilities. Ready for actual customer vehicle photo updates.
            </span>
          </div>
        </div>

        {/* Category Filters (Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Aspect Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Inspect Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                    {item.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1 pt-3 border-t border-slate-100">
                  {item.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  {activeItem.category} • SR Multicartech
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-video w-full bg-black flex-shrink-0">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Modal Footer & Actions */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {activeItem.features.map((f, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                    ✓ {f}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <a
                  href={`https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20saw%20your%20work%20on%20${encodeURIComponent(activeItem.title)}%20and%20want%20to%20enquire.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center"
                >
                  <WhatsAppIcon size={16} />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href="tel:9550425789"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 9550425789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
