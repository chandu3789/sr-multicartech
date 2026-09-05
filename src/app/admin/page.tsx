'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  CalendarCheck,
  Wrench,
  Car,
  Users,
  Tag,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Building,
  DollarSign,
  Filter,
  Plus
} from 'lucide-react';
import { useBooking } from '@/lib/context/BookingContext';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { CAR_BRANDS } from '@/lib/data/carData';
import { OFFERS_LIST } from '@/lib/data/offersData';
import { Booking } from '@/lib/data/types';

export default function AdminDashboardPage() {
  const { bookings, updateBookingStage } = useBooking();

  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'BOOKINGS' | 'SERVICES' | 'CARS' | 'COUPONS' | 'CUSTOMERS'>('OVERVIEW');
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('ALL');
  const [bookingSearch, setBookingSearch] = useState<string>('');

  // Editing state for bookings
  const [selectedBookingForEdit, setSelectedBookingForEdit] = useState<Booking | null>(null);
  const [newStage, setNewStage] = useState<Booking['stage']>('INSPECTION_STARTED');
  const [technicianNote, setTechnicianNote] = useState<string>('');

  // Compute KPI metrics
  const totalBookingsCount = bookings.length;
  const completedBookings = bookings.filter(b => b.stage === 'COMPLETED').length;
  const activeBookings = bookings.filter(b => b.stage !== 'COMPLETED' && b.stage !== 'CANCELLED').length;
  const totalRevenue = bookings.reduce((acc, b) => acc + (b.total || 0), 0);

  // Filter bookings
  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = bookingFilterStatus === 'ALL' || b.stage === bookingFilterStatus;
    const q = bookingSearch.toLowerCase().trim();
    const matchesQuery =
      !q ||
      b.bookingNumber.toLowerCase().includes(q) ||
      b.customerName.toLowerCase().includes(q) ||
      b.customerPhone.includes(q) ||
      b.carModel.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  const handleUpdateStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBookingForEdit) return;

    updateBookingStage(selectedBookingForEdit.bookingNumber, newStage, technicianNote);
    setSelectedBookingForEdit(null);
    setTechnicianNote('');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                SR Multi Car Tech • Workshop Operations Portal
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              Admin & Operations Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/track-service"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors border border-slate-700"
            >
              Open Live Customer Tracker →
            </Link>
            <div className="px-3.5 py-1.5 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs font-bold">
              Role: System Administrator
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
          {[
            { id: 'OVERVIEW', label: 'Overview & KPIs', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'BOOKINGS', label: `Bookings (${bookings.length})`, icon: <CalendarCheck className="w-4 h-4" /> },
            { id: 'SERVICES', label: `Services & Rates (${SERVICE_PACKAGES.length})`, icon: <Wrench className="w-4 h-4" /> },
            { id: 'CARS', label: `Car Models (${CAR_BRANDS.length})`, icon: <Car className="w-4 h-4" /> },
            { id: 'COUPONS', label: 'Coupons & Offers', icon: <Tag className="w-4 h-4" /> },
            { id: 'CUSTOMERS', label: 'Customer Directory', icon: <Users className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW & KPIS */}
        {activeTab === 'OVERVIEW' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Total Revenue</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white">₹{totalRevenue.toLocaleString()}</div>
                <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18.4% this month
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Total Bookings</span>
                  <CalendarCheck className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-3xl font-black text-white">{totalBookingsCount}</div>
                <div className="text-[11px] text-slate-400">Recorded on platform</div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Active In Bay</span>
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-black text-white">{activeBookings}</div>
                <div className="text-[11px] text-amber-400 font-semibold">Under live servicing</div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase">
                  <span>Completed Jobs</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white">{completedBookings}</div>
                <div className="text-[11px] text-emerald-400 font-semibold">100% Quality checked</div>
              </div>
            </div>

            {/* Quick Actions & Recent Bookings Preview */}
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white text-base">Recent Live Service Queue</h3>
                <button
                  onClick={() => setActiveTab('BOOKINGS')}
                  className="text-xs font-bold text-rose-400 hover:underline"
                >
                  Manage All Bookings →
                </button>
              </div>

              <div className="divide-y divide-slate-700/60 text-xs">
                {bookings.slice(0, 3).map((b) => (
                  <div key={b.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-rose-400">{b.bookingNumber}</span>
                        <span className="text-slate-400">• {b.customerName} ({b.customerPhone})</span>
                      </div>
                      <div className="font-bold text-slate-200 mt-0.5">
                        {b.carBrand} {b.carModel} — {b.serviceTitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-700 text-slate-200">
                        {b.stage.replace(/_/g, ' ')}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedBookingForEdit(b);
                          setNewStage(b.stage);
                          setActiveTab('BOOKINGS');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px]"
                      >
                        Update Stage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKING MANAGEMENT */}
        {activeTab === 'BOOKINGS' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Status Edit Modal Drawer */}
            {selectedBookingForEdit && (
              <form onSubmit={handleUpdateStatus} className="p-6 rounded-3xl bg-slate-800 border border-rose-500/50 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Update Live Stage for {selectedBookingForEdit.bookingNumber}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {selectedBookingForEdit.carBrand} {selectedBookingForEdit.carModel} • {selectedBookingForEdit.customerName}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedBookingForEdit(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Select New Status Stage</label>
                    <select
                      value={newStage}
                      onChange={(e) => setNewStage(e.target.value as Booking['stage'])}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm font-semibold outline-none focus:border-rose-500"
                    >
                      <option value="CONFIRMED">1. Booking Confirmed</option>
                      <option value="VEHICLE_RECEIVED">2. Vehicle Received</option>
                      <option value="INSPECTION_STARTED">3. Inspection Started</option>
                      <option value="SERVICE_IN_PROGRESS">4. Service In Progress</option>
                      <option value="QUALITY_CHECK">5. Quality Check</option>
                      <option value="READY_FOR_DELIVERY">6. Ready for Delivery</option>
                      <option value="COMPLETED">7. Completed</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Technician Live Note (Visible on Tracking)</label>
                    <input
                      type="text"
                      placeholder="e.g. Engine oil replaced with Castrol 5W-30. Brake caliper cleaned."
                      value={technicianNote}
                      onChange={(e) => setTechnicianNote(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-700 bg-slate-900 text-white text-sm outline-none focus:border-rose-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md"
                  >
                    Save & Push Update to Customer Tracker
                  </button>
                </div>
              </form>
            )}

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800 border border-slate-700">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs font-bold">
                {['ALL', 'CONFIRMED', 'VEHICLE_RECEIVED', 'INSPECTION_STARTED', 'SERVICE_IN_PROGRESS', 'QUALITY_CHECK', 'COMPLETED'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setBookingFilterStatus(st)}
                    className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                      bookingFilterStatus === st
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {st.replace(/_/g, ' ')}
                  </button>
                ))}
              </div>

              <div className="w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search by ID, name, or phone..."
                  value={bookingSearch}
                  onChange={(e) => setBookingSearch(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-rose-500"
                />
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-700">
                    <tr>
                      <th className="p-4">Booking ID</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Vehicle</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Appointment</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/60 text-slate-200">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-700/40 transition-colors">
                        <td className="p-4 font-mono font-bold text-rose-400">{b.bookingNumber}</td>
                        <td className="p-4">
                          <div className="font-bold text-white">{b.customerName}</div>
                          <div className="text-slate-400 text-[11px]">{b.customerPhone}</div>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold">{b.carBrand} {b.carModel}</div>
                          <div className="text-slate-400 text-[11px]">{b.carFuel}</div>
                        </td>
                        <td className="p-4 font-medium">{b.serviceTitle}</td>
                        <td className="p-4">
                          <div>{b.scheduledDate}</div>
                          <div className="text-slate-400 text-[11px]">{b.timeSlot}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-rose-400 border border-rose-500/30">
                            {b.stage.replace(/_/g, ' ')}
                          </span>
                        </td>
                        <td className="p-4 font-bold text-white">₹{b.total}</td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => {
                              setSelectedBookingForEdit(b);
                              setNewStage(b.stage);
                              setTechnicianNote(b.notes || '');
                            }}
                            className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px]"
                          >
                            Update Stage
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SERVICES & PRICING CATALOG */}
        {activeTab === 'SERVICES' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Service Packages & Inclusions Catalog</h3>
              <span className="text-xs text-slate-400">Total {SERVICE_PACKAGES.length} services configured</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_PACKAGES.map((s) => (
                <div key={s.id} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-slate-300">
                      {s.categoryName}
                    </span>
                    <span className="text-base font-black text-rose-400">₹{s.startingPrice}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">{s.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{s.tagline}</p>
                  <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400 flex justify-between">
                    <span>Duration: {s.estimatedHours} hrs</span>
                    <span>Warranty: {s.warranty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: CAR MODELS */}
        {activeTab === 'CARS' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Supported Automotive Manufacturers & Models</h3>
              <span className="text-xs text-slate-400">{CAR_BRANDS.length} Brands Configured</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAR_BRANDS.map((b) => (
                <div key={b.id} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">{b.name}</span>
                    <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-xs text-rose-400">
                      {b.logoText || b.name.slice(0, 2)}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Models: {b.models.map(m => m.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: COUPONS & PROMOTIONS */}
        {activeTab === 'COUPONS' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Promotional Discount Coupons</h3>
              <span className="text-xs text-slate-400">{OFFERS_LIST.length} Active Codes</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {OFFERS_LIST.map((c) => (
                <div key={c.code} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-rose-400 text-sm bg-slate-900 px-3 py-1 rounded-lg border border-slate-700">
                      {c.code}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                      {c.badge}
                    </span>
                  </div>
                  <div className="font-bold text-white text-sm">{c.title}</div>
                  <p className="text-xs text-slate-400">{c.discountDesc}</p>
                  <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-500 flex justify-between">
                    <span>Min Order: ₹{c.minOrder}</span>
                    <span>Valid: {c.validUntil}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: CUSTOMER DIRECTORY */}
        {activeTab === 'CUSTOMERS' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Registered Customer Profiles</h3>
            <div className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden p-4">
              <div className="divide-y divide-slate-700/60 text-xs">
                {[
                  { name: 'Bikash Kalita', phone: '+91 98765 43210', car: 'Hyundai Creta SX (Petrol)', spend: '₹4,246', orders: 1 },
                  { name: 'Prashant Barman', phone: '+91 98640 12345', car: 'Maruti Swift ZXi (Petrol)', spend: '₹1,379', orders: 1 },
                  { name: 'Ananya Sharma', phone: '+91 98540 98765', car: 'Tata Nexon (Diesel)', spend: '₹824', orders: 1 },
                  { name: 'Rohit Borah', phone: '+91 98765 22334', car: 'Tata Nexon EV Max', spend: '₹2,199', orders: 2 }
                ].map((cust, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-sm">{cust.name}</div>
                      <div className="text-slate-400">{cust.phone} • {cust.car}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-rose-400">{cust.spend}</div>
                      <div className="text-[11px] text-slate-400">{cust.orders} Services Booked</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
