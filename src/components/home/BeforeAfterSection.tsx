'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { BEFORE_AFTER_ITEMS } from '@/lib/data/beforeAfterData';
import { ArrowLeftRight, CheckCircle2, AlertCircle, Phone, MessageCircle } from 'lucide-react';

export default function BeforeAfterSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[selectedIdx];

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ArrowLeftRight className="w-3.5 h-3.5 text-red-500" />
            <span>Transformation Inspection</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Before &amp; After Showcase
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
            Slide left or right across the image to inspect the finish achieved through our denting, paint refinishing, mechanical tuning, and deep cleaning.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                selectedIdx === idx
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Slider Box */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-5 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Split Image Container (7 Cols) */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700 bg-black touch-none"
              >
                {/* AFTER IMAGE (Base Layer) */}
                <div className="absolute inset-0">
                  <Image
                    src={activeItem.afterImage}
                    alt={activeItem.afterLabel}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center filter saturate-110"
                  />
                  <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-lg bg-emerald-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
                    AFTER
                  </div>
                </div>

                {/* BEFORE IMAGE (Clipped Layer) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative h-full w-[280px] sm:w-[480px] md:w-[560px] lg:w-[600px]">
                    <Image
                      src={activeItem.beforeImage}
                      alt={activeItem.beforeLabel}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-center filter contrast-125 brightness-90 sepia-[0.15]"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider backdrop-blur-md shadow-sm">
                    BEFORE
                  </div>
                </div>

                {/* SLIDER DIVIDER LINE */}
                <div
                  className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg border-2 border-red-600 cursor-ew-resize">
                    <ArrowLeftRight className="w-3.5 h-3.5 text-red-600" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-2.5">
                👈 Drag slider across the image to compare 👉
              </p>
            </div>

            {/* Details Side (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  {activeItem.serviceCategory} • {activeItem.vehicleModel}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Before Details Card */}
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Before Condition</span>
                </div>
                {activeItem.beforeDetails.map((item, idx) => (
                  <p key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* After Details Card */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>After SR Multicartech Finish</span>
                </div>
                {activeItem.afterDetails.map((item, idx) => (
                  <p key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={`https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20a%20quote%20for%20${encodeURIComponent(activeItem.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Enquire for My Car</span>
                </a>

                <a
                  href="tel:9550425789"
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white"
                  title="Call for estimate"
                  aria-label="Call for estimate"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
