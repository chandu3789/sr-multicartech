'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_LOCATIONS } from '@/lib/data/workshopsData';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3">
            Contact SR Multi Car Tech
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Have questions about your vehicle, custom quotes, or need 24/7 roadside assistance? Our customer care desk is ready to help.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>

              <div className="space-y-3 text-xs">
                <a
                  href="tel:+919876543210"
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 flex items-center gap-3 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">+91 98765 43210</div>
                    <div className="text-slate-500 text-[11px]">General Inquiries & Bookings</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 flex items-center gap-3 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950">+91 98765 43210 (WhatsApp)</div>
                    <div className="text-emerald-700 text-[11px]">Instant Estimates & Live Photo Updates</div>
                  </div>
                </a>

                <a
                  href="tel:+919876599999"
                  className="p-3.5 rounded-2xl bg-red-50/50 border border-red-200 hover:border-red-300 flex items-center gap-3 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-red-950">+91 98765 99999 (24/7 SOS Helpline)</div>
                    <div className="text-red-700 text-[11px]">Breakdowns, Towing & Jumpstarts</div>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Working Hours</div>
                    <div className="text-slate-500 text-[11px]">Open 7 Days: 08:00 AM – 08:30 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Workshop Address */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl space-y-3">
              <span className="text-[10px] font-bold uppercase text-rose-400">Headquarters Workshop</span>
              <h4 className="font-bold text-base">SR Multi Car Tech Central Hub</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plot 42, Auto Zone, GS Road, Christian Basti, Guwahati, Assam 781005
              </p>
              <div className="text-xs text-slate-400">
                Landmark: Opposite Apollo Telemedicine Center, NH-27
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our service advisor will review your query and respond via phone or WhatsApp within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send an Inquiry or Feedback</h3>
                  <p className="text-xs text-slate-500">We typically respond in less than an hour</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Das"
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Car Model & Year</label>
                    <input
                      type="text"
                      placeholder="e.g. Hyundai Creta (2022)"
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message or Service Request</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your requirement or issue..."
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
