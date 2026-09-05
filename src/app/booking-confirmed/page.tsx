'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  CheckCircle,
  Car,
  Wrench,
  Calendar,
  Clock,
  MapPin,
  FileText,
  Activity,
  ArrowRight,
  Printer,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { useBooking } from '@/lib/context/BookingContext';

function BookingConfirmationContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('bookingId') || 'SRMCT-10821';
  const { getBooking } = useBooking();

  const booking = getBooking(bookingId);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Confirmation Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden p-8 sm:p-10 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50/50 shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            Booking Confirmed & Assigned
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Your Service Is Booked!
          </h1>

          <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
            Thank you for choosing SR Multi Car Tech. We have sent a confirmation message with live tracking to your mobile number.
          </p>

          {/* Booking ID Pill */}
          <div className="mt-6 inline-flex items-center gap-2 p-3 px-6 rounded-2xl bg-slate-900 text-white shadow-md">
            <span className="text-xs text-slate-400 font-medium">Booking ID:</span>
            <span className="font-mono font-black text-base text-rose-400 tracking-wider">
              {booking?.bookingNumber || bookingId}
            </span>
          </div>

          {/* Booking Details Grid */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <Car className="w-3.5 h-3.5 text-rose-600" />
                Vehicle
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {booking ? `${booking.carBrand} ${booking.carModel} (${booking.carFuel})` : 'Hyundai Creta SX'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <Wrench className="w-3.5 h-3.5 text-rose-600" />
                Service Package
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {booking ? booking.serviceTitle : 'Comprehensive Car Service'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-rose-600" />
                Scheduled Appointment
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {booking?.scheduledDate || 'Tomorrow'} at {booking?.timeSlot || '10:00 AM - 11:00 AM'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                Assigned Tech & Hub
              </span>
              <div className="font-bold text-slate-900 text-sm">
                {booking?.technicianName || 'Rajesh Bora (Master Technician)'}
              </div>
              <div className="text-[11px] text-slate-500">{booking?.workshopName || 'Central Tech Hub'}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 sm:col-span-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                Pickup / Service Address
              </span>
              <div className="font-semibold text-slate-800 text-xs">
                {booking?.address || 'Flat 4B, Silver Heights, GS Road, Christian Basti, Guwahati - 781005'}
              </div>
            </div>
          </div>

          {/* Amount Paid summary */}
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between text-left">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-800">Total Invoice Amount</span>
              <div className="text-xl font-black text-slate-900">
                ₹{booking?.total || '4246'}
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white">
              {booking?.paymentStatus === 'PAID' ? '✓ Payment Received' : 'Pay After Service'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href={`/track-service?id=${booking?.bookingNumber || bookingId}`}
              className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Activity className="w-4 h-4" />
              <span>Track Service Live</span>
            </Link>

            <button
              onClick={handlePrint}
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Invoice</span>
            </button>

            <Link
              href="/"
              className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingConfirmedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading confirmation...</div>}>
      <BookingConfirmationContent />
    </Suspense>
  );
}
