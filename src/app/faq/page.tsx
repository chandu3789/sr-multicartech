'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { FAQ_LIST } from '@/lib/data/faqData';

export default function FAQPage() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0]?.id || null);

  const categories = ['All', 'General', 'Booking & Pickup', 'Doorstep Service', 'Pricing & Billing', 'Warranty', 'Emergency & SOS', 'Insurance'];

  const filteredFaqs = FAQ_LIST.filter(f =>
    selectedCat === 'All' || f.category.toLowerCase().includes(selectedCat.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Answers to common questions about servicing procedures, OEM spares, warranties, and roadside assistance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-bold justify-start sm:justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                selectedCat === c
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-rose-600 px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-100 hidden sm:inline">
                      {faq.category}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Card */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Didn’t find the answer you need?</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Our certified service advisors are available 7 days a week to clarify maintenance schedules, quotes, and part availability.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20"
            >
              Contact Advisors
            </Link>
            <a
              href="tel:+919876543210"
              className="px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs"
            >
              Call Helpline
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
