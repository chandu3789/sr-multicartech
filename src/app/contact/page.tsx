'use client';

import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  AlertTriangle,
  Building2,
  Compass,
  Car,
  Check,
  ExternalLink
} from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function ContactPage() {
  const { openSos } = useSos();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'General Service',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Contact Request - SR Multicartech*
Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${formData.vehicle}
Service: ${formData.service}
Message: ${formData.message || 'None'}`;

    window.open(`https://wa.me/919550425789?text=${encodeURIComponent(text)}`, '_blank');
  };

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=SR+Multicartech+Satrampadu+Eluru';

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Contact SR Multicartech
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Have questions about vehicle diagnosis, estimates, or need emergency assistance? Connect directly with our Satrampadu garage.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>

              <div className="space-y-3 text-xs">
                <a
                  href="tel:9550425789"
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 flex items-center gap-3 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">9550425789</div>
                    <div className="text-slate-500 text-[11px]">Direct Workshop Helpline &amp; Enquiries</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20car%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 hover:border-emerald-400 flex items-center gap-3 transition-colors block"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-emerald-950">9550425789 (WhatsApp)</div>
                    <div className="text-emerald-700 text-[11px]">Instant Estimates &amp; Photo Guidance</div>
                  </div>
                </a>

                <button
                  onClick={openSos}
                  className="w-full text-left p-3.5 rounded-2xl bg-red-50/70 border border-red-200 hover:border-red-400 flex items-center gap-3 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-red-950">SOS 24 HRS Emergency Assistance</div>
                    <div className="text-red-700 text-[11px]">Breakdown Guidance &amp; Urgent Support</div>
                  </div>
                </button>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Workshop Timings</div>
                    <div className="text-slate-500 text-[11px]">Monday – Sunday: 08:00 AM – 08:30 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Workshop Address */}
            <div className="p-6 rounded-3xl bg-[#0B132B] text-white shadow-xl space-y-4 border border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">SR Multicartech Workshop</span>
              <h4 className="font-bold text-base text-white">Satrampadu Facility</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple, Eluru, Andhra Pradesh - 534007
              </p>
              
              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            {sent ? (
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Thank You, {formData.name}!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your message has been received by our technical desk. We will call you at <strong>{formData.phone}</strong> promptly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Send on WhatsApp for Instant Reply</span>
                  </button>

                  <button
                    onClick={() => setSent(false)}
                    className="px-5 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-slate-900">Send an Enquiry</h3>
                <p className="text-xs text-slate-500">
                  Prefer a written enquiry? Submit your details and our team will get in touch.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9550425789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Vehicle (Brand &amp; Model)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hyundai Creta, Maruti Swift"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Category
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="Denting & Painting">Denting &amp; Painting</option>
                      <option value="Full Engine Works">Full Engine Works</option>
                      <option value="Advanced Diagnostics">Advanced Diagnostics</option>
                      <option value="Genuine Spare Parts">Genuine Spare Parts</option>
                      <option value="Car Washing & Deep Cleaning">Car Washing &amp; Deep Cleaning</option>
                      <option value="Anti-Rust Treatment">Anti-Rust Treatment</option>
                      <option value="Underbody Safety Works">Underbody Safety Works</option>
                      <option value="Interior Customization">Interior Customization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Vehicle Symptoms
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe issues, sounds, warning lights, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Workshop</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Dedicated Directions & Navigation Section */}
        <div id="directions" className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>Workshop Route &amp; Navigation Guide</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              How to Reach SR Multicartech
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Centrally situated in Satrampadu with wide road access, spacious vehicle ramp entry, and customer parking.
            </p>
          </div>

          {/* 3 Prominent Landmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Opp. Aditya Degree College
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Directly opposite the main educational campus of Aditya Degree College on the prominent road. Readily visible from the front gate.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-red-600">
                <Check className="w-3.5 h-3.5" />
                <span>Primary Front Landmark</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Near Ambika Devi Temple
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Just a short drive from the well-known Ambika Devi Temple in Satrampadu. A trusted local reference point for all commuters.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                <Check className="w-3.5 h-3.5" />
                <span>Local Spiritual Landmark</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Car className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Wide Road &amp; Ramp Access
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Broad road with zero narrow alleys. Straightforward approach for all luxury sedans, hatchbacks, high-clearance SUVs, and carriers.
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <Check className="w-3.5 h-3.5" />
                <span>All Vehicle Types Supported</span>
              </div>
            </div>
          </div>

          {/* Interactive Map & Action Panel */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0B132B] text-white">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Verified Workshop Address</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  SR Multicartech Satrampadu
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Opp. Aditya Degree College, Near Ambika Devi Temple, Satrampadu, Eluru, Andhra Pradesh — 534007.
                </p>

                <div className="pt-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Arrival Checklist:
                    </span>
                    <ul className="mt-1 space-y-1 text-slate-300">
                      <li>• Direct vehicle entry ramp into inspection bay</li>
                      <li>• Customer consultation and estimate desk</li>
                      <li>• Safe shaded parking during service intake</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all text-center active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Start Live Google Maps Navigation</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="tel:9550425789"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700 text-center"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call 9550425789 for Route Guidance</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[420px] bg-slate-100">
              <iframe
                title="SR Multicartech Satrampadu Location Map"
                src="https://maps.google.com/maps?q=SR%20Multicartech%2C%20Satrampadu%2C%20Eluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[350px] sm:min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
