'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Copy, Check, Sparkles, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { OFFERS_LIST } from '@/lib/data/offersData';

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5" />
            <span>Coupons & Deals</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Exclusive Service Offers & Discounts
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Save on your periodic maintenance, AC gas refills, ceramic detailing, and diagnostics with SR Multi Car Tech coupon codes.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS_LIST.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.code}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                      {offer.badge}
                    </span>
                    <span className="text-xs text-slate-400">Valid till {offer.validUntil}</span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-rose-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {offer.discountDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    Min. Order Value: <strong className="text-slate-800">₹{offer.minOrder}</strong>
                    {offer.maxDiscount && <span> • Max Discount: <strong className="text-slate-800">₹{offer.maxDiscount}</strong></span>}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-dashed border-rose-400 font-mono font-black text-sm text-rose-600 tracking-wider">
                    {offer.code}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(offer.code)}
                      className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/book-service?coupon=${offer.code}`}
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all flex items-center gap-1"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
