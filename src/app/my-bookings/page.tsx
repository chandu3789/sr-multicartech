'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Car,
  MapPin,
  Activity,
  Printer,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useBooking } from '@/lib/context/BookingContext';

export default function MyBookingsPage() {
  const { bookings } = useBooking();

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              My Service Bookings
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Review active workshop jobs, past invoices, and live tracking status.
            </p>
          </div>

          <Link
            href="/book-service"
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5"
          >
            <span>+ Book New Service</span>
          </Link>
        </div>

        {/* Bookings List */}
        {bookings.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
            <Car className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No bookings yet</h3>
            <p className="text-xs text-slate-500 mt-1">You have not scheduled any car services yet.</p>
            <Link
              href="/book-service"
              className="mt-4 inline-block px-6 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-md"
            >
              Book Your First Service
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => {
              const isCompleted = booking.stage === 'COMPLETED';

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-xs text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                        {booking.bookingNumber}
                      </span>
                      <span className="text-xs text-slate-400">• Booked {booking.createdAt}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {booking.carBrand} {booking.carModel} ({booking.carFuel})
                    </h3>

                    <div className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <span>Service: <strong>{booking.serviceTitle}</strong></span>
                      <span>•</span>
                      <span>Total: <strong className="text-rose-600">₹{booking.total}</strong></span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-rose-600" />
                        {booking.scheduledDate} ({booking.timeSlot})
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {booking.address}
                      </span>
                    </div>
                  </div>

                  {/* Right side: Status and Actions */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                        isCompleted
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200 animate-pulse'
                      }`}
                    >
                      {booking.stage.replace(/_/g, ' ')}
                    </span>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/track-service?id=${booking.bookingNumber}`}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <Activity className="w-3.5 h-3.5 text-rose-400" />
                        <span>Track Live</span>
                      </Link>

                      <Link
                        href={`/booking-confirmed?bookingId=${booking.bookingNumber}`}
                        className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        View Invoice
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
