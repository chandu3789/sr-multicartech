'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { OFFERS_LIST } from '@/lib/data/offersData';

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Exclusive Discounts & Coupons</span>
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Special Savings on Your Next Service
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Apply these promo codes during booking checkout for instant savings.
            </p>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
          >
            <span>View All Deals & Terms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Coupons Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OFFERS_LIST.slice(0, 4).map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.code}
                className="rounded-2xl p-5 bg-gradient-to-b from-slate-800 to-slate-800/80 border border-slate-700/80 hover:border-rose-500/50 shadow-lg flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      {offer.badge}
                    </span>
                    <span className="text-[10px] text-slate-400">Till {offer.validUntil}</span>
                  </div>

                  <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {offer.discountDesc}
                  </p>
                </div>

                {/* Coupon Code Pill & Copy Button */}
                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-dashed border-rose-500/50 font-mono font-bold text-xs text-rose-400 tracking-wider">
                    {offer.code}
                  </div>

                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-700/80 hover:bg-rose-600 text-white text-xs font-semibold transition-all active:scale-95"
                    title="Copy coupon code"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
