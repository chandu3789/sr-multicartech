'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  CheckCircle2,
  Clock,
  Car,
  Wrench,
  ShieldCheck,
  User,
  Phone,
  Building,
  AlertCircle,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { useBooking } from '@/lib/context/BookingContext';

const STAGES = [
  { key: 'CONFIRMED', title: 'Booking Confirmed', desc: 'Technician & bay allocated. Job card initialized.' },
  { key: 'VEHICLE_RECEIVED', title: 'Vehicle Received', desc: 'Car checked in at certified workshop / doorstep arrival.' },
  { key: 'INSPECTION_STARTED', title: 'Inspection Started', desc: '50-Point computer diagnostic and mechanical health scan.' },
  { key: 'SERVICE_IN_PROGRESS', title: 'Service In Progress', desc: 'Engine oil drain, OEM filters replacement, and calibration.' },
  { key: 'QUALITY_CHECK', title: 'Quality Check', desc: 'Diagnostic road test, torque wrench check, and washing.' },
  { key: 'READY_FOR_DELIVERY', title: 'Ready for Delivery', desc: 'Final digital report generated. Driver dispatched.' },
  { key: 'COMPLETED', title: 'Completed', desc: 'Vehicle delivered with warranty card and receipt.' }
];

function TrackServiceContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || 'SRMCT-10821';
  const { getBooking } = useBooking();

  const [query, setQuery] = useState(initialId);
  const [activeBooking, setActiveBooking] = useState(getBooking(initialId));
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    if (initialId) {
      const b = getBooking(initialId);
      if (b) {
        setActiveBooking(b);
      }
    }
  }, [initialId, getBooking]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    const found = getBooking(query);
    if (found) {
      setActiveBooking(found);
    } else {
      setSearchError(`No active service record found for "${query}". Try sample ID: SRMCT-10821 or SRMCT-10905.`);
    }
  };

  const currentStageIndex = activeBooking
    ? STAGES.findIndex((s) => s.key === activeBooking.stage)
    : 2;

  const progressPercent = Math.round(((currentStageIndex + 1) / STAGES.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Real-Time Service Telemetry
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Live Service Tracking
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Enter your Booking ID or registered phone number to view live workshop updates, inspection checklist, and technician notes.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="mt-6 flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="e.g. SRMCT-10821 or 9876543210"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white font-mono font-semibold text-slate-900 outline-none focus:border-rose-600 shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              Track
            </button>
          </form>

          {searchError && (
            <div className="mt-3 text-xs text-red-600 font-semibold bg-red-50 p-2.5 rounded-xl border border-red-200">
              {searchError}
            </div>
          )}
        </div>

        {activeBooking && (
          <div className="space-y-8">
            {/* Top Job Card Header */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono font-black text-xs text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                    {activeBooking.bookingNumber}
                  </span>
                  <span className="text-xs text-slate-400">• Booked {activeBooking.createdAt}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">
                  {activeBooking.carBrand} {activeBooking.carModel} ({activeBooking.carFuel})
                </h2>
                <div className="text-sm font-semibold text-slate-600 mt-0.5">
                  Service: <span className="text-slate-900">{activeBooking.serviceTitle}</span>
                </div>
              </div>

              {/* Status Pill & Progress Bar */}
              <div className="text-right">
                <div className="inline-block px-4 py-1.5 rounded-full bg-rose-600 text-white font-black text-xs uppercase tracking-wider shadow-sm">
                  {STAGES[currentStageIndex]?.title || activeBooking.stage}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Estimated Completion: <strong className="text-slate-800">Today, 04:30 PM</strong>
                </div>
                <div className="w-full sm:w-56 bg-slate-100 rounded-full h-2.5 mt-2 overflow-hidden">
                  <div
                    className="bg-rose-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 7-Stage Visual Timeline */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-600" />
                Live Service Progress Timeline
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {STAGES.map((stg, idx) => {
                  const isPast = idx < currentStageIndex;
                  const isCurrent = idx === currentStageIndex;
                  const isUpcoming = idx > currentStageIndex;

                  return (
                    <div key={stg.key} className="relative flex items-start gap-4">
                      {/* Circle indicator */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs z-10 transition-all flex-shrink-0 ${
                          isPast
                            ? 'bg-emerald-600 text-white ring-4 ring-emerald-50'
                            : isCurrent
                            ? 'bg-rose-600 text-white ring-4 ring-rose-100 animate-pulse'
                            : 'bg-white border-2 border-slate-300 text-slate-400'
                        }`}
                      >
                        {isPast ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                      </div>

                      {/* Content block */}
                      <div className={`flex-1 p-4 rounded-2xl border transition-all ${
                        isCurrent
                          ? 'bg-rose-50/60 border-rose-300 shadow-sm'
                          : isPast
                          ? 'bg-slate-50/50 border-slate-200'
                          : 'bg-white border-slate-100 opacity-60'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className={`font-bold text-sm ${isCurrent ? 'text-rose-700' : 'text-slate-900'}`}>
                            {stg.title}
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-400">
                            {isPast ? 'Completed' : isCurrent ? 'Active Stage' : 'Pending'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stg.desc}</p>

                        {/* If current, display live technician notes */}
                        {isCurrent && activeBooking.notes && (
                          <div className="mt-3 p-3 rounded-xl bg-white border border-rose-200 text-xs text-slate-700">
                            <span className="font-bold text-rose-600 block text-[10px] uppercase">Technician Live Note</span>
                            “{activeBooking.notes}”
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Grid: Assigned Technician, Workshop, & Inspection Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technician & Workshop Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <User className="w-4 h-4 text-rose-600" />
                  Assigned Master Technician
                </h3>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-lg">
                    👨‍🔧
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-base">{activeBooking.technicianName}</div>
                    <div className="text-xs text-slate-500">Certified Diagnostic Engineer • 8+ Yrs Exp</div>
                    <a
                      href={`tel:${activeBooking.technicianPhone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:underline mt-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{activeBooking.technicianPhone}</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                  <Building className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Serviced at: <strong>{activeBooking.workshopName}</strong></span>
                </div>
              </div>

              {/* Inspection Health Check Snapshot */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    Inspection Checklist Progress
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    {activeBooking.inspectionPointsPassed || 28} / {activeBooking.totalInspectionPoints || 50} Verified
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700 pt-1">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Engine Oil Viscosity & Filter Seal
                    </span>
                    <span className="font-bold text-emerald-700 text-[11px]">PASSED</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Brake Calipers & Pad Thickness (6.8mm)
                    </span>
                    <span className="font-bold text-emerald-700 text-[11px]">PASSED</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      AC Compressor Vent Output (4.2°C)
                    </span>
                    <span className="font-bold text-emerald-700 text-[11px]">PASSED</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/50 border border-amber-100">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      Computerized OBD-II Diagnostics
                    </span>
                    <span className="font-bold text-amber-700 text-[11px]">IN PROGRESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrackServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading tracker...</div>}>
      <TrackServiceContent />
    </Suspense>
  );
}
