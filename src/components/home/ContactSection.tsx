'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Navigation,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  Compass,
  Building2,
  Car,
  Check,
  ExternalLink
} from 'lucide-react';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function ContactSection() {
  const { openSos } = useSos();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    serviceRequired: 'Denting & Painting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Service Request - SR Multicartech*
Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${formData.brand} ${formData.model}
Service: ${formData.serviceRequired}
Message: ${formData.message || 'None'}`;

    window.open(`https://wa.me/919550425789?text=${encodeURIComponent(text)}`, '_blank');
  };

  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=SR+Multicartech+Satrampadu+Eluru';

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ========================================================
            PART 1: CONTACT & SERVICE ENQUIRY
        ======================================================== */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Direct Workshop Connect</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
              Contact &amp; Request Service
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Visit our workshop in Satrampadu, call us directly, or submit your service request below for prompt scheduling.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Column: Workshop Details & Action Hub (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0B132B] text-white border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    Automobile Service Center
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    SR Multicartech
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Founder &amp; Owner: BRR (Birlangi Ratnala Ramesh) • 15+ Years Experience
                  </p>
                </div>

                {/* Exact Location Card */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                        Workshop Location:
                      </h4>
                      <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                        Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Eluru, Andhra Pradesh - 534007
                      </p>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>

                {/* Helpline & Timings */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Helpline &amp; Calling:</span>
                      <strong className="text-white text-sm font-mono">+91 9550425789</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Workshop Timings:</span>
                      <span className="text-slate-200">Monday – Sunday: 8:00 AM – 8:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <a
                  href="tel:9550425789"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW: 9550425789</span>
                </a>

                <a
                  href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20car%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 text-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>CHAT ON WHATSAPP</span>
                </a>

                <button
                  onClick={openSos}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-red-400 border border-red-500/40 text-xs font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                >
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span>EMERGENCY SOS 24 HRS</span>
                </button>
              </div>
            </div>

            {/* Right Column: Service Enquiry Form (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    Request Received Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our service desk at SR Multicartech will contact you shortly for <strong>{formData.brand} {formData.model}</strong>.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                    <button
                      onClick={handleWhatsAppForward}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Send via WhatsApp for Instant Reply</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          brand: '',
                          model: '',
                          serviceRequired: 'Denting & Painting',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                      Request a Service
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your vehicle details and required service for prompt scheduling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-brand" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Vehicle Brand
                      </label>
                      <input
                        id="enquiry-brand"
                        type="text"
                        placeholder="e.g. Maruti, Hyundai, Tata, Honda"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-model" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Vehicle Model
                      </label>
                      <input
                        id="enquiry-model"
                        type="text"
                        placeholder="e.g. Swift, Creta, City, Nexon"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiry-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required
                    </label>
                    <select
                      id="enquiry-service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="Denting">Denting</option>
                      <option value="Painting">Painting</option>
                      <option value="Full Engine Works">Full Engine Works</option>
                      <option value="All Car Works">All Car Works (Mechanical/Electrical)</option>
                      <option value="Full Body Repair">Full Body Repair</option>
                      <option value="Genuine Spare Parts">Genuine Spare Parts Replacement</option>
                      <option value="Car Washing">Car Washing</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Anti-Rust Treatment">Anti-Rust Treatment</option>
                      <option value="Underbody Safety Works">Underbody Safety Works</option>
                      <option value="Interior Parts Customization">Interior Parts Customization</option>
                      <option value="Interior Cleaning">Interior Cleaning</option>
                      <option value="Advanced Computer Diagnostics">Advanced Computer Diagnostics</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Issue Details (Optional)
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      placeholder="Provide details about symptoms, warning lights, dents, or required maintenance..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request Service</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================
            PART 2: DEDICATED DIRECTIONS & ROUTE GUIDE SECTION
        ======================================================== */}
        <div id="directions" className="pt-8 border-t border-slate-200">
          {/* Section Sub-Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>Workshop Route &amp; Navigation Guide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              How to Reach SR Multicartech
            </h3>

            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Centrally situated in Satrampadu with wide road access, spacious vehicle ramp entry, and convenient customer drop-off.
            </p>
          </div>

          {/* 3 Prominent Landmark Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Landmark 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3 font-black text-sm">
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

            {/* Landmark 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 font-black text-sm">
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

            {/* Landmark 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 font-black text-sm">
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
            
            {/* Left Details Hub (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-900 text-white">
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

                <div className="pt-2 space-y-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
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

              {/* Navigation Action Buttons */}
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
                  <span>Call 9550425789 for Route Assistance</span>
                </a>
              </div>
            </div>

            {/* Right Embedded Interactive Google Map (7 Cols) */}
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
    </section>
  );
}
