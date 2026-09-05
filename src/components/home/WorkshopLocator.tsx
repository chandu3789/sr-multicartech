'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Star, Navigation, Calendar, Search } from 'lucide-react';
import { WORKSHOP_LOCATIONS } from '@/lib/data/workshopsData';
import { useCity } from '@/lib/context/CityContext';

export default function WorkshopLocator() {
  const { currentCity } = useCity();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkshops = WORKSHOP_LOCATIONS.filter((w) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      w.name.toLowerCase().includes(q) ||
      w.area.toLowerCase().includes(q) ||
      w.pincode.includes(q) ||
      w.address.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Certified Workshop Network
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
              Find Your Nearest SR Multi Car Tech Hub
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Equipped with hydraulic vehicle lifts, computerized paint baking booths, and high-precision diagnostic bays.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search area or pincode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-rose-600 outline-none font-medium"
            />
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {workshop.area}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{workshop.rating}</span>
                    <span className="text-slate-400 font-normal">({workshop.reviews})</span>
                  </div>
                </div>

                {/* Title & Address */}
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                  {workshop.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {workshop.address}, {workshop.city} — {workshop.pincode}
                </p>

                {/* Hours & Phone */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="text-[11px] truncate">{workshop.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                    <a href={`tel:${workshop.phone}`} className="text-[11px] font-semibold text-slate-800 hover:text-rose-600">
                      {workshop.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(workshop.name + ' ' + workshop.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1 transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-slate-500" />
                  <span>Directions</span>
                </a>

                <Link
                  href={`/book-service?workshop=${workshop.id}`}
                  className="flex-1 py-2 px-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-all text-center"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Bay</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
