'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Car, Wrench, MapPin, Calendar, Clock, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { CAR_BRANDS } from '@/lib/data/carData';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { useCar } from '@/lib/context/CarContext';
import { useCity } from '@/lib/context/CityContext';

export default function QuickBookingWidget() {
  const router = useRouter();
  const { currentCar, selectCar } = useCar();
  const { currentCity, availableCities } = useCity();

  // Widget state
  const [selectedBrand, setSelectedBrand] = useState<string>(currentCar?.brand || 'Hyundai');
  const [selectedModel, setSelectedModel] = useState<string>(currentCar?.model || 'Creta');
  const [selectedFuel, setSelectedFuel] = useState<string>(currentCar?.fuel || 'Petrol');
  const [selectedService, setSelectedService] = useState<string>('comprehensive-car-service');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:00 AM - 11:00 AM');

  // Compute available models for selected brand
  const activeBrandObj = CAR_BRANDS.find(b => b.name === selectedBrand) || CAR_BRANDS[1];
  const availableModels = activeBrandObj.models;
  const activeModelObj = availableModels.find(m => m.name === selectedModel) || availableModels[0];
  const availableFuels = activeModelObj ? (
    activeModelObj.bodyType === 'EV'
      ? ['Electric']
      : Array.from(new Set([...activeModelObj.fuels, 'Petrol', 'Diesel', 'CNG + Petrol']))
  ) : ['Petrol', 'Diesel', 'CNG + Petrol'];

  // Handle default date (tomorrow)
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setSelectedDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleBrandChange = (brandName: string) => {
    setSelectedBrand(brandName);
    const b = CAR_BRANDS.find(item => item.name === brandName);
    if (b && b.models.length > 0) {
      setSelectedModel(b.models[0].name);
      setSelectedFuel(b.models[0].fuels[0] || 'Petrol');
    }
  };

  const handleModelChange = (modelName: string) => {
    setSelectedModel(modelName);
    const m = availableModels.find(item => item.name === modelName);
    if (m && m.fuels.length > 0) {
      setSelectedFuel(m.fuels[0]);
    }
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    // Update global car context
    selectCar({
      brand: selectedBrand,
      brandSlug: activeBrandObj.slug,
      model: selectedModel,
      modelSlug: activeModelObj?.id || selectedModel.toLowerCase(),
      fuel: selectedFuel,
      year: 2022
    });

    // Navigate to /book-service with parameters
    router.push(`/book-service?service=${selectedService}&date=${selectedDate}&slot=${encodeURIComponent(selectedSlot)}`);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200/80 p-6 md:p-8 backdrop-blur-sm relative z-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
            60-Second Instant Service Scheduler
          </span>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
            Book Certified Car Service at Doorstep or Workshop
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Free Doorstep Pickup & Drop</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleProceed} className="space-y-6">
        {/* Step 1, 2, 3: Car Selection Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Brand Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-rose-600" />
              1. Car Manufacturer
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => handleBrandChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:bg-white focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none transition-all cursor-pointer"
            >
              {CAR_BRANDS.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name} ({b.models.length} Models)
                </option>
              ))}
            </select>
          </div>

          {/* Model Selector grouped by segment in order */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-rose-600" />
              2. Select Model ({availableModels.length})
            </label>
            <select
              value={selectedModel}
              onChange={(e) => handleModelChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:bg-white focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none transition-all cursor-pointer"
            >
              {['Hatchback', 'Sedan', 'SUV', 'MUV', 'Luxury', 'EV', 'Coupe'].map((type) => {
                const modelsOfType = availableModels
                  .filter((m) => m.bodyType === type)
                  .sort((a, b) => a.name.localeCompare(b.name));

                if (modelsOfType.length === 0) return null;

                return (
                  <optgroup key={type} label={`── ${type.toUpperCase()} ──`}>
                    {modelsOfType.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} {m.popular ? '★' : ''}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
          </div>

          {/* Fuel Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-rose-600" />
              3. Fuel Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {availableFuels.map((fuel) => (
                <button
                  key={fuel}
                  type="button"
                  onClick={() => setSelectedFuel(fuel)}
                  className={`py-2 px-1 text-center text-xs font-bold rounded-xl transition-all border ${
                    selectedFuel === fuel
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {fuel}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3, 4, 5: Service Package, Location, Date & Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-rose-600" />
              4. Select Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-semibold focus:bg-white focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none transition-all cursor-pointer"
            >
              {SERVICE_PACKAGES.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.title} — (Quote on Inspection / Coming Soon)
                </option>
              ))}
            </select>
          </div>

          {/* City / Workshop Hub */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              5. Service Location
            </label>
            <div className="flex items-center px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-bold">
              <span className="truncate">Eluru, Andhra Pradesh (Free Doorstep Pickup)</span>
            </div>
          </div>

          {/* Date & Slot */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-600" />
              6. Scheduled Date & Time
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold focus:bg-white outline-none"
              />
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="px-2.5 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold focus:bg-white outline-none"
              >
                <option value="09:00 AM - 10:00 AM">09:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM</option>
                <option value="04:00 PM - 05:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="font-semibold text-slate-900">Selected Vehicle:</span>
            <span className="px-3 py-1 rounded-lg bg-rose-50 text-rose-700 font-bold border border-rose-200">
              {selectedBrand} {selectedModel} • {selectedFuel}
            </span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Inspection (Pricing Coming Soon)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
