'use client';

import React from 'react';
import { Star, CheckCircle2, Quote, Car } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/lib/data/reviewsData';

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Real Owner Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Trusted by Over 10,000+ Car Owners
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Read verified reviews from customers who experienced our transparent pricing, doorstep pickup, and genuine parts warranty.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Customer
                    </span>
                  )}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  “{review.comment}”
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-rose-600 font-medium mt-0.5">
                    <Car className="w-3.5 h-3.5" />
                    <span>{review.carModel}</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
