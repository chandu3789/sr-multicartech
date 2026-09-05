'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  Phone,
  CheckCircle2,
  Car,
  Clock,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function InsurancePage() {
  const [submitted, setSubmitted] = useState(false);

  const insurancePartners = [
    'ICICI Lombard',
    'HDFC ERGO',
    'Bajaj Allianz',
    'Tata AIG',
    'New India Assurance',
    'National Insurance',
    'United India',
    'Oriental Insurance',
    'Reliance General',
    'Go Digit',
    'SBI General',
    'Acko General'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Hassle-Free Accidental Restoration
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
            Cashless Insurance Claims & Accidental Repairs
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Zero out-of-pocket hassle. Free towing, direct surveyor liaisons, 100% genuine OEM panels, and factory spray-booth paint finish.
          </p>
        </div>

        {/* 3 Steps to Claim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 font-black text-sm flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Free Accidental Pickup</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We tow or pick up your damaged vehicle directly from the spot or your residence to our certified body shop.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 font-black text-sm flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Surveyor Coordination</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our dedicated insurance claims manager prepares digital damage estimates and coordinates physical inspection with your insurer.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 font-black text-sm flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Cashless Delivery</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Approved sheet metal, bumper, and paint repairs are completed with cashless settlement. Your restored car is delivered to your doorstep.
            </p>
          </div>
        </div>

        {/* Cashless Partners Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 text-center mb-6">
            Cashless Claim Tie-Ups with Leading Insurers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {insurancePartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-800"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Claim Request Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Claim Request Registered!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Our Chief Claims Advisor will contact you within 15 minutes to initiate the cashless claim process and schedule towing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-900">Request Cashless Claim Assistance</h3>
                <p className="text-xs text-slate-500 mt-0.5">Fill out your contact details and our claim advisor will call you immediately</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Insurance Provider</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none">
                    {insurancePartners.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Car Model & Registration</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyundai Creta (AS-01-AB-1234)"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Damage Description</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the accident / damaged panels (e.g. front bumper scratch, headlight broken, dent on door)..."
                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500 font-medium">
                  Direct Claims Hotline: <strong className="text-rose-600">+91 98765 43210</strong>
                </span>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all cursor-pointer"
                >
                  Submit Claim Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
