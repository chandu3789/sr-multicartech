'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/lib/data/reviewsData';

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-red-600" />
              <span>Customer Satisfaction</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Customer Experiences
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Trusted by vehicle owners for quality automotive repairs, honest estimates, and genuine parts in Satrampadu.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-sm active:scale-95 transition-all cursor-pointer"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Reviews Strip */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="w-[280px] sm:w-[340px] md:w-[360px] flex-shrink-0 snap-start rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                    <span className="text-xs font-bold text-slate-900 ml-1">
                      {review.ratingScore}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-slate-400">
                    {review.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-bold text-[11px] mb-3">
                  {review.serviceCategory}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Vehicle: {review.carModel}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Service</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Placeholder Note */}
        <p className="text-[11px] text-slate-500 text-center mt-6">
          Real customer feedback placeholder framework. Visit SR Multicartech in Satrampadu to experience our service quality first-hand.
        </p>

      </div>
    </section>
  );
}
