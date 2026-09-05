'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  Car,
  Fuel,
  Zap,
  Truck,
  Wrench,
  ShieldAlert,
  Navigation,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useCar } from '@/lib/context/CarContext';

export default function SosPage() {
  const { currentCar } = useCar();

  const [selectedIssue, setSelectedIssue] = useState<string>('Flat Tyre');
  const [mobile, setMobile] = useState<string>('');
  const [location, setLocation] = useState<string>('GS Road, Near Christian Basti, Guwahati');
  const [vehicle, setVehicle] = useState<string>(
    currentCar ? `${currentCar.brand} ${currentCar.model} (${currentCar.fuel})` : 'Hyundai Creta'
  );
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [dispatchStatus, setDispatchStatus] = useState<'IDLE' | 'SEARCHING' | 'DISPATCHED'>('IDLE');

  const emergencyServices = [
    { id: 'Flat Tyre', label: 'Flat Tyre', icon: <Car className="w-6 h-6" />, eta: '20-25 mins', price: 'From ₹499' },
    { id: 'Battery Jumpstart', label: 'Battery Jumpstart', icon: <Zap className="w-6 h-6" />, eta: '20-25 mins', price: 'From ₹499' },
    { id: 'Fuel Delivery', label: 'Emergency Fuel (5L)', icon: <Fuel className="w-6 h-6" />, eta: '25-30 mins', price: 'From ₹699' },
    { id: 'Hydraulic Towing', label: 'Flatbed Towing', icon: <Truck className="w-6 h-6" />, eta: '30-35 mins', price: 'From ₹1,499' },
    { id: 'Mechanical Breakdown', label: 'Mechanical Breakdown', icon: <Wrench className="w-6 h-6" />, eta: '25-30 mins', price: 'From ₹799' },
    { id: 'Accident Assistance', label: 'Accident Assistance', icon: <ShieldAlert className="w-6 h-6" />, eta: 'Immediate', price: 'Cashless Tie-up' }
  ];

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocating(false);
          setLocation('GPS Coordinates: 26.1584° N, 91.7766° E (Christian Basti Main Rd)');
        },
        () => {
          setIsLocating(false);
          setLocation('GS Road Auto Hub Sector, Guwahati');
        }
      );
    } else {
      setIsLocating(false);
    }
  };

  const handleRequestHelp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile.trim()) {
      alert('Please enter your mobile phone number.');
      return;
    }

    setDispatchStatus('SEARCHING');

    setTimeout(() => {
      setDispatchStatus('DISPATCHED');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/60 border border-red-700 text-red-300 text-xs font-bold tracking-wider mb-4 animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span>24/7 EMERGENCY RAPID RESCUE DESK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Need Immediate Roadside Assistance?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Stranded with a flat tyre, dead battery, or mechanical breakdown? Our emergency response vans and flatbed recovery trucks are on standby across the city.
          </p>

          {/* Emergency Direct Call Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919876599999"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call 24/7 Helpline: +91 98765 99999</span>
            </a>
          </div>
        </div>

        {/* SOS Request Form / Dispatch Simulation */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          {dispatchStatus === 'IDLE' && (
            <form onSubmit={handleRequestHelp} className="space-y-8">
              {/* Emergency Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Select Emergency Issue
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {emergencyServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedIssue(srv.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        selectedIssue === srv.id
                          ? 'bg-red-950/60 border-red-500 text-white ring-2 ring-red-500/20'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="mb-3 p-2 rounded-xl bg-slate-900 w-fit text-red-500">
                        {srv.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white">{srv.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">Avg ETA: {srv.eta}</div>
                        <div className="text-[11px] font-bold text-red-400 mt-1">{srv.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    2. Your Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-medium text-sm outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    3. Vehicle Details
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyundai Creta / AS-01-AB-1234"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-medium text-sm outline-none focus:border-red-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      4. Current Breakdown Location
                    </label>
                    <button
                      type="button"
                      onClick={handleUseCurrentLocation}
                      disabled={isLocating}
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{isLocating ? 'Detecting GPS...' : 'Use GPS Location'}</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter landmark, highway km-marker, or street..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="w-full p-3.5 rounded-xl border border-slate-700 bg-slate-800 text-white font-medium text-sm outline-none focus:border-red-500"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black text-base shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span>GET HELP NOW • DISPATCH NEAREST RESCUE UNIT</span>
                </button>
                <div className="text-center text-[11px] text-slate-400 mt-2">
                  Average technician dispatch response time is under 3 minutes.
                </div>
              </div>
            </form>
          )}

          {/* Searching Stage Animation */}
          {dispatchStatus === 'SEARCHING' && (
            <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full border-4 border-red-500 border-t-transparent animate-spin mx-auto"></div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  Finding Nearest Rescue Provider...
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Querying GPS radius around {location}. Locating available flatbed trucks and mobile mechanics.
                </p>
              </div>
            </div>
          )}

          {/* Dispatched Confirmation */}
          {dispatchStatus === 'DISPATCHED' && (
            <div className="py-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                  RESCUE UNIT DISPATCHED
                </span>
                <h3 className="text-2xl font-black text-white mt-3">
                  Technician Is En Route To Your Location!
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Assigned Team: <strong className="text-white">Central Hub Quick-Response Van #4</strong>
                </p>
              </div>

              {/* ETA card */}
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Estimated Arrival Time</span>
                  <span className="text-base font-black text-amber-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    18 Minutes
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Assigned Driver</span>
                  <span className="font-bold text-white">Dhiraj Das (+91 98765 11009)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Vehicle Breakdown</span>
                  <span className="font-bold text-white">{vehicle}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Emergency Type</span>
                  <span className="font-bold text-red-400">{selectedIssue}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919876511009"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Dispatched Technician Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
