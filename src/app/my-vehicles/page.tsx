'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Car, Plus, Trash2, CheckCircle2, ArrowRight, ShieldCheck, Calendar } from 'lucide-react';
import { useCar } from '@/lib/context/CarContext';
import { CAR_BRANDS } from '@/lib/data/carData';

export default function MyVehiclesPage() {
  const { currentCar, savedGarage, selectCar, addToGarage, removeFromGarage } = useCar();

  const [isAdding, setIsAdding] = useState(false);
  const [newBrand, setNewBrand] = useState(CAR_BRANDS[0].name);
  const [newModel, setNewModel] = useState(CAR_BRANDS[0].models[0].name);
  const [newFuel, setNewFuel] = useState('Petrol');
  const [newReg, setNewReg] = useState('');

  const brandObj = CAR_BRANDS.find(b => b.name === newBrand) || CAR_BRANDS[0];

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToGarage({
      id: `car-${Date.now()}`,
      brand: newBrand,
      brandSlug: brandObj.slug,
      model: newModel,
      modelSlug: newModel.toLowerCase(),
      fuel: newFuel,
      year: 2022,
      registrationNumber: newReg.trim() || undefined
    });
    setIsAdding(false);
    setNewReg('');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              My Garage & Vehicles
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manage your registered cars, switch active vehicle for fast bookings, and track maintenance records.
            </p>
          </div>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{isAdding ? 'Cancel' : 'Add New Car'}</span>
          </button>
        </div>

        {/* Add New Car Form Drawer/Card */}
        {isAdding && (
          <form onSubmit={handleAddSubmit} className="mb-8 p-6 rounded-3xl bg-white border border-rose-200 shadow-md space-y-4 animate-in fade-in duration-200">
            <h3 className="font-bold text-slate-900 text-base">Add a Vehicle to Your Garage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Brand</label>
                <select
                  value={newBrand}
                  onChange={(e) => {
                    setNewBrand(e.target.value);
                    const b = CAR_BRANDS.find(item => item.name === e.target.value);
                    if (b && b.models.length > 0) {
                      setNewModel(b.models[0].name);
                      setNewFuel(b.models[0].fuels[0]);
                    }
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold outline-none"
                >
                  {CAR_BRANDS.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Model</label>
                <select
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold outline-none"
                >
                  {brandObj.models.map(m => (
                    <option key={m.id} value={m.name}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Fuel</label>
                <select
                  value={newFuel}
                  onChange={(e) => setNewFuel(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold outline-none"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">Reg Number (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. AS-01-BK-9912"
                  value={newReg}
                  onChange={(e) => setNewReg(e.target.value.toUpperCase())}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono uppercase outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm"
              >
                Save Vehicle
              </button>
            </div>
          </form>
        )}

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {savedGarage.map((car, idx) => {
            const isActive = currentCar?.id === car.id || (currentCar?.brand === car.brand && currentCar?.model === car.model);

            return (
              <div
                key={car.id || idx}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-rose-500 shadow-md ring-2 ring-rose-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-rose-600">
                      <Car className="w-5 h-5" />
                    </span>
                    {isActive ? (
                      <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Active Vehicle
                      </span>
                    ) : (
                      <button
                        onClick={() => selectCar(car)}
                        className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors"
                      >
                        Set as Active
                      </button>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {car.brand} {car.model}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                    <span className="font-semibold text-slate-700">{car.fuel}</span>
                    {car.year && <span>• {car.year}</span>}
                    {car.registrationNumber && (
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-bold">
                        {car.registrationNumber}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  {savedGarage.length > 1 && (
                    <button
                      onClick={() => removeFromGarage(car.id || '')}
                      className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      title="Remove vehicle"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}

                  <Link
                    href={`/book-service?brand=${encodeURIComponent(car.brand)}&model=${encodeURIComponent(car.model)}`}
                    className="ml-auto px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
