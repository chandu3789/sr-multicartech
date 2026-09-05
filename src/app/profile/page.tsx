'use client';

import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Save } from 'lucide-react';
import { useCar } from '@/lib/context/CarContext';
import { useCity } from '@/lib/context/CityContext';

export default function ProfilePage() {
  const { currentCity } = useCity();
  const { currentCar } = useCar();

  const [name, setName] = useState('Purna Rao');
  const [phone, setPhone] = useState('9550425789');
  const [email, setEmail] = useState('purna.rao@example.com');
  const [address, setAddress] = useState('Near Main Road, Satrampadu, Eluru, Andhra Pradesh - 534007');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Customer Profile & Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your personal contact details, saved default address, and vehicle preferences.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-2xl shadow-md shadow-rose-600/20">
                BK
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{name}</h2>
                <div className="text-xs text-slate-500">Registered Customer • +91 {phone}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-rose-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-rose-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-rose-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  Default City
                </label>
                <input
                  type="text"
                  disabled
                  value={currentCity}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-100 text-sm font-semibold text-slate-600 outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  Doorstep Pickup Address
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              {savedSuccess ? (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Profile details updated successfully!</span>
                </span>
              ) : (
                <span></span>
              )}

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
