'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Bell, CheckCircle2, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function SpecialOffers() {
  const [subscribed, setSubscribed] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setPhoneOrEmail('');
      }, 3000);
    }
  };

  const upcomingDeals = [
    {
      id: 'festive-carnival',
      badge: 'SEASONAL CARNIVAL',
      title: 'Monsoon & Festive Care Package',
      description: 'Full 50-point German diagnostic scan, wiper blade replacement, brake pad thickness check, and complimentary anti-rust underbody coating.',
      highlight: 'Launching Soon'
    },
    {
      id: 'fleet-privilege',
      badge: 'CORPORATE & FLEET',
      title: 'Executive Fleet Privilege Bundle',
      description: 'Dedicated priority workshop bays, monthly telemetry health logs, doorstep vehicle pickup for multiple company cars, and fixed corporate tariffs.',
      highlight: 'In Partner Review'
    },
    {
      id: 'first-service-bonus',
      badge: 'NEW CUSTOMER WELCOME',
      title: 'First-Time Garage Welcome Gift',
      description: 'Exclusive welcome voucher with complimentary engine oil top-up, computerized wheel balancing discount, and complete interior antibacterial steam sanitization.',
      highlight: 'Finalizing Terms'
    },
    {
      id: 'cashless-zero-dep',
      badge: 'INSURANCE PARTNER',
      title: 'Cashless Zero-Dep Claim Bonus',
      description: 'Guaranteed 0-hassle cashless accidental claims assistance, deductible cashbacks, and complimentary replacement vehicle during major collision repairs.',
      highlight: 'Partner Sign-off'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background flares */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Promotional Offers & Festive Savings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Special Offers & Packages — <span className="text-rose-500">Coming Soon</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              We are finalizing negotiated pricing and seasonal service discounts with OEM spare suppliers and certified workshops. Register below to get notified first!
            </p>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors self-start md:self-auto"
          >
            <span>Preview All Upcoming Deals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Teaser Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcomingDeals.map((deal) => (
            <div
              key={deal.id}
              className="rounded-2xl p-5 bg-gradient-to-b from-slate-800/90 to-slate-800/50 border border-slate-700/80 hover:border-rose-500/50 shadow-lg flex flex-col justify-between transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl group-hover:bg-rose-500/10 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    {deal.badge}
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {deal.highlight}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors">
                  {deal.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {deal.description}
                </p>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-medium">Pricing Status</span>
                <span className="font-extrabold text-xs text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Early-Bird Notification Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-800 to-slate-800/80 border border-rose-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-600/20 border border-rose-500/30 text-rose-400 flex items-center justify-center flex-shrink-0">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Want VIP early access to launch offers?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Leave your mobile or email to get a ₹500 introductory service voucher upon release.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full sm:w-auto flex items-center gap-2">
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You&apos;re on the VIP list! We will notify you first.</span>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter Mobile or Email..."
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs outline-none focus:border-rose-500 w-full sm:w-64"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
