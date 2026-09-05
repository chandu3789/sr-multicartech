'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Star, Navigation, Calendar, ShieldCheck, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_LOCATIONS } from '@/lib/data/workshopsData';

export default function WorkshopLocator() {
  const flagship = WORKSHOP_LOCATIONS[0];

  const facilityHighlights = [
    { title: '6 Electro-Hydraulic Bays', desc: 'Heavy-duty lifts supporting hatchbacks, sedans, luxury cars, and 4x4 SUVs.' },
    { title: 'German Diagnostic Computer Rig', desc: 'Encrypted OBD-II CAN-bus telemetry interface detecting faults within minutes.' },
    { title: 'Infrared Sealed Paint Booth', desc: 'Dust-free, temperature-controlled paint baking booth ensuring 100% factory OEM gloss match.' },
    { title: 'Free Doorstep Valet Pickup', desc: 'Complimentary vehicle pickup and return anywhere in Eluru and surrounding areas.' },
    { title: 'Premium AC Customer Lounge', desc: 'Work comfortably with high-speed Wi-Fi, refreshments, and live service bay CCTV viewing.' },
    { title: 'OEM Parts Inventory', desc: 'Fully stocked warehouse with authentic lubricants, filters, sensors, and suspension parts.' }
  ];

  return (
    <section id="workshop-location" className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Single Flagship Facility • Eluru, Andhra Pradesh</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Flagship Workshop & German Diagnostic Lab
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            All automotive servicing, mechanical overhauls, and electronic diagnostics are centralized at our state-of-the-art facility in Auto Nagar, Eluru, Andhra Pradesh.
          </p>
        </div>

        {/* High-Impact Flagship Facility Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Workshop Details & Contact (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-600 text-white shadow-md shadow-rose-600/30">
                  Primary Workshop & Diagnostic HQ
                </span>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5</span>
                  <span className="text-slate-400 font-normal">({flagship.reviews} Reviews)</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight">
                {flagship.name}
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold text-sm">Workshop Address:</strong>
                    <span>{flagship.address}</span>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {flagship.area}, {flagship.city} — {flagship.pincode}
                    </div>
                    <div className="text-[11px] text-rose-400 font-semibold mt-1">
                      Landmark: Near Sanivarapupeta Junction & Powerpet Road
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold text-xs">Operating Hours:</strong>
                    <span className="text-xs text-slate-300">{flagship.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-bold text-xs">Direct Workshop Contact:</strong>
                    <a href={`tel:${flagship.phone}`} className="text-sm font-bold text-white hover:text-rose-400 transition-colors">
                      {flagship.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(flagship.name + ' ' + flagship.address + ' ' + flagship.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all text-center border border-slate-700"
              >
                <Navigation className="w-4 h-4 text-rose-400" />
                <span>Get Directions</span>
              </a>

              <Link
                href="/book-service"
                className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/30 transition-all text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Bay</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Facility Capabilities & Standards (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Advanced Infrastructure</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                Equipped for Precision Multi-Brand Servicing
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Whether you drive a Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, or a luxury German sedan (BMW, Audi, Mercedes), our Eluru flagship facility is fully outfitted with manufacturer-grade diagnostic equipment and factory-calibrated tools.
              </p>

              {/* 6 Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {facilityHighlights.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-300 hover:bg-rose-50/30 transition-all"
                  >
                    <div className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{cap.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 pl-6 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="text-slate-600">
                <strong className="text-slate-900">Doorstep Convenience:</strong> Can&apos;t visit Auto Nagar in person? Our valet drivers will pick up and return your vehicle right from your home anywhere in Eluru.
              </div>

              <Link
                href="/select-car"
                className="text-rose-600 hover:text-rose-700 font-extrabold whitespace-nowrap"
              >
                Select Your Car &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
