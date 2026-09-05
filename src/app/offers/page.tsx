'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag, Sparkles, ArrowRight, ShieldCheck, Gift, Clock, Bell, CheckCircle2 } from 'lucide-react';

export default function OffersPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [contactInput, setContactInput] = useState('');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setContactInput(''), 3000);
    }
  };

  const upcomingCategories = [
    {
      badge: 'MONSOON SPECIAL',
      title: 'Monsoon Highway Readiness Bundle',
      desc: 'High-visibility wiper replacement, brake fluid flush, tyre tread depth telemetry, and 50-point German diagnostic scan.',
      status: 'Coming Soon',
      expectedBenefit: 'Up to 25% Off'
    },
    {
      badge: 'CORPORATE FLEET',
      title: 'Commercial & Corporate Fleet Package',
      desc: 'Centralized billing, digital vehicle health passport for every car in fleet, and guaranteed 4-hour turnaround on periodic service.',
      status: 'Coming Soon',
      expectedBenefit: 'Contract Pricing'
    },
    {
      badge: 'NEW VEHICLE',
      title: 'First-Time Garage Welcome Vouchers',
      desc: 'Introductory zero-cost electronic health diagnosis plus complimentary engine coolant and windshield washer top-ups.',
      status: 'Coming Soon',
      expectedBenefit: 'Flat ₹500 Voucher'
    },
    {
      badge: 'PREMIUM DETAILING',
      title: 'Ceramic Shield & Paint Protection Plan',
      desc: '9H ceramic coating with hydrophobic shield, high-gloss 3-stage rotary polishing, and scratch repair coverage.',
      status: 'Coming Soon',
      expectedBenefit: 'Festive Launch Rate'
    },
    {
      badge: 'BATTERY & ELECTRICAL',
      title: 'Amaron & Exide Battery Exchange Deal',
      desc: 'Old battery scrap rebate, free doorstep battery installation, and computer alternator charging system check.',
      status: 'Coming Soon',
      expectedBenefit: 'Instant Scrap Rebate'
    },
    {
      badge: 'INSURANCE CLAIM',
      title: 'Zero-Dep Cashless Repair Assistance',
      desc: 'Free doorstep claim survey, documentation handling, and cashless claim approval with 25+ leading insurers.',
      status: 'Coming Soon',
      expectedBenefit: 'Zero Upfront Charges'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Pricing & Promotional Offers Coming Soon</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Curated Service Offers & Discount Deals
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            We are currently finalizing custom regional packages and supplier agreements. Live promotional coupon codes will be unveiled soon for all vehicle brands.
          </p>
        </div>

        {/* VIP Early Bird Notification Box */}
        <div className="mb-12 p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Gift className="w-4 h-4" />
              <span>Early-Bird Priority Access</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Get an exclusive ₹500 welcome credit upon launch
            </h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Register your phone number or email address to receive launch notifications and exclusive coupon codes directly on WhatsApp or SMS.
            </p>
          </div>

          <form onSubmit={handleNotify} className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row gap-2.5">
            {subscribed ? (
              <div className="px-5 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are registered for launch offers!</span>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Mobile number or Email..."
                  value={contactInput}
                  onChange={(e) => setContactInput(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs outline-none focus:border-rose-500 w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/30 whitespace-nowrap cursor-pointer"
                >
                  Join VIP List
                </button>
              </>
            )}
          </form>
        </div>

        {/* Upcoming Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:border-rose-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {item.badge}
                  </span>
                  <span className="text-xs font-black text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Benefit</span>
                  <span className="font-black text-slate-800">{item.expectedBenefit}</span>
                </div>

                <Link
                  href="/book-service"
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-rose-600 hover:text-white text-slate-700 text-xs font-bold transition-all"
                >
                  Book Service →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 p-6 rounded-3xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-rose-600 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">100% Genuine OEM Spares</h4>
            <p className="text-xs text-slate-500 mt-1">All replacement parts are authentic with manufacturer serial numbers.</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-rose-600 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">Transparent Quotation Guarantee</h4>
            <p className="text-xs text-slate-500 mt-1">Full German diagnostic scan report shared before executing any repair.</p>
          </div>
          <div className="flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-rose-600 mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">Up to 2 Years Warranty</h4>
            <p className="text-xs text-slate-500 mt-1">Every major mechanical overhaul and paint job backed by written warranty.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
