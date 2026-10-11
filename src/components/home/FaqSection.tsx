'use client';

import React, { useState } from 'react';
import { FAQ_LIST } from '@/lib/data/faqData';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Everything you need to know about SR Multicartech services, workshop location, engine repairs, and diagnostics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-red-600 text-white rotate-180'
                        : 'bg-white border border-slate-200 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3.5 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <p className="text-xs sm:text-sm font-bold text-slate-900">
            Have a question that is not listed here?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="tel:9550425789"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: 9550425789</span>
            </a>

            <a
              href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20have%20a%20question%20regarding%20car%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
