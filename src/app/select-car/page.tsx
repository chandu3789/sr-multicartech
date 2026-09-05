'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Car, Check, ArrowRight, Plus, Trash2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CAR_BRANDS } from '@/lib/data/carData';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { useCar, SelectedCar } from '@/lib/context/CarContext';

function CarSelectorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentCar, savedGarage, selectCar, addToGarage, removeFromGarage } = useCar();

  const preselectedBrand = searchParams.get('brand');
  const preselectedModel = searchParams.get('model');

  // Multi-step state: 1: Brand, 2: Model, 3: Fuel, 4: Year
  const [step, setStep] = useState<number>(1);
  const [activeBrand, setActiveBrand] = useState<string>(preselectedBrand || currentCar?.brand || 'Hyundai');
  const [activeModel, setActiveModel] = useState<string>(preselectedModel || currentCar?.model || 'Creta');
  const [activeFuel, setActiveFuel] = useState<string>(currentCar?.fuel || 'Petrol');
  const [activeYear, setActiveYear] = useState<number>(currentCar?.year || 2022);
  const [searchBrand, setSearchBrand] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const [modelFilter, setModelFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'ALPHA' | 'POPULAR'>('POPULAR');

  // Selected Brand Object
  const brandObj = CAR_BRANDS.find(b => b.name.toLowerCase() === activeBrand.toLowerCase()) || CAR_BRANDS[1];
  const modelObj = brandObj.models.find(m => m.name.toLowerCase() === activeModel.toLowerCase()) || brandObj.models[0];

  const filteredBrands = CAR_BRANDS.filter(b =>
    b.name.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const handleBrandSelect = (brandName: string) => {
    setActiveBrand(brandName);
    const b = CAR_BRANDS.find(item => item.name === brandName);
    if (b && b.models.length > 0) {
      setActiveModel(b.models[0].name);
      setActiveFuel(b.models[0].fuels[0]);
      if (b.models[0].years.length > 0) {
        setActiveYear(b.models[0].years[b.models[0].years.length - 1]);
      }
    }
    setStep(2);
  };

  const handleModelSelect = (modelName: string) => {
    setActiveModel(modelName);
    const m = brandObj.models.find(item => item.name === modelName);
    if (m && m.fuels.length > 0) {
      setActiveFuel(m.fuels[0]);
      if (m.years.length > 0) {
        setActiveYear(m.years[m.years.length - 1]);
      }
    }
    setStep(3);
  };

  const handleFuelSelect = (fuel: string) => {
    setActiveFuel(fuel);
    setStep(4);
  };

  const handleYearSelect = (year: number) => {
    setActiveYear(year);
  };

  const handleConfirmCar = () => {
    const car: SelectedCar = {
      id: `car-${Date.now()}`,
      brand: activeBrand,
      brandSlug: brandObj.slug,
      model: activeModel,
      modelSlug: modelObj?.id || activeModel.toLowerCase(),
      fuel: activeFuel,
      year: activeYear
    };
    addToGarage(car);
    selectCar(car);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Personalized Maintenance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Select Your Vehicle
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Choose your car to view exact parts compatibility, engine oil grades, and tailored service packages.
          </p>
        </div>

        {/* Current Active Vehicle Banner */}
        {currentCar && (
          <div className="mb-10 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-rose-600/20">
                <Car className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                  Active Vehicle in Garage
                </span>
                <h2 className="text-2xl font-black text-slate-900">
                  {currentCar.brand} {currentCar.model}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span className="font-semibold text-slate-700">{currentCar.fuel}</span>
                  {currentCar.year && <span>• {currentCar.year}</span>}
                  {currentCar.registrationNumber && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]">
                      {currentCar.registrationNumber}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveBrand(CAR_BRANDS[0].name);
                  setStep(1);
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>+ Add Another Vehicle</span>
              </button>

              <button
                onClick={() => router.push(`/book-service?brand=${encodeURIComponent(currentCar.brand)}&model=${encodeURIComponent(currentCar.model)}`)}
                className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5"
              >
                <span>Book Service for This Car</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step Indicator */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 mb-10">
          <div className="flex items-center justify-between max-w-2xl mx-auto mb-8 relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-100 -z-0"></div>

            {[
              { num: 1, label: 'Brand' },
              { num: 2, label: 'Model' },
              { num: 3, label: 'Fuel' },
              { num: 4, label: 'Year' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`relative z-10 flex flex-col items-center group cursor-pointer`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step === s.num
                      ? 'bg-rose-600 text-white ring-4 ring-rose-100 shadow-md'
                      : step > s.num
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-500'
                  }`}
                >
                  {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={`text-[11px] font-bold mt-1.5 ${
                    step === s.num ? 'text-rose-600' : 'text-slate-500'
                  }`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* STEP 1: Brand Selection */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900 text-lg">
                  Select Your Car Brand
                </h3>
                <input
                  type="text"
                  placeholder="Search brand (e.g. Maruti, Tata, Hyundai)..."
                  value={searchBrand}
                  onChange={(e) => setSearchBrand(e.target.value)}
                  className="px-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-rose-600 outline-none w-64"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredBrands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => handleBrandSelect(brand.name)}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center group cursor-pointer ${
                      activeBrand === brand.name
                        ? 'bg-rose-50/60 border-rose-500 shadow-md'
                        : 'bg-white border-slate-200/80 hover:border-rose-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-rose-100 text-slate-800 group-hover:text-rose-600 font-black text-sm flex items-center justify-center mb-2 transition-colors">
                      {brand.logoText || brand.name.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors">
                      {brand.name}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">
                      {brand.models.length} Models
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Model Selection */}
          {step === 2 && (() => {
            const availableBodyTypes = Array.from(new Set(brandObj.models.map(m => m.bodyType)));

            const filteredModels = brandObj.models.filter(m => {
              const matchesSearch = !searchModel || m.name.toLowerCase().includes(searchModel.toLowerCase().trim());
              const matchesType = modelFilter === 'ALL' || m.bodyType === modelFilter;
              return matchesSearch && matchesType;
            });

            // Order models: if popular first, sort by popular then alphabetical; if alpha, sort A-Z
            const orderedModels = [...filteredModels].sort((a, b) => {
              if (sortBy === 'POPULAR') {
                if (a.popular && !b.popular) return -1;
                if (!a.popular && b.popular) return 1;
              }
              return a.name.localeCompare(b.name);
            });

            return (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-black text-slate-900 text-xl flex items-center gap-2">
                      <span>Select Model for</span>
                      <span className="text-rose-600">{activeBrand}</span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {brandObj.models.length} Models
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">All models organized in order by segment & popularity</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50"
                    >
                      ← Change Brand
                    </button>
                  </div>
                </div>

                {/* Search and Segment Filter Bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                  {/* Body Type Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setModelFilter('ALL')}
                      className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                        modelFilter === 'ALL'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200/70'
                      }`}
                    >
                      All ({brandObj.models.length})
                    </button>

                    {availableBodyTypes.map((type) => {
                      const count = brandObj.models.filter(m => m.bodyType === type).length;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setModelFilter(type)}
                          className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                            modelFilter === type
                              ? 'bg-rose-600 text-white shadow-sm'
                              : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200/70'
                          }`}
                        >
                          {type} ({count})
                        </button>
                      );
                    })}
                  </div>

                  {/* Search input & Sort toggle */}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={`Search ${activeBrand} models...`}
                      value={searchModel}
                      onChange={(e) => setSearchModel(e.target.value)}
                      className="px-3.5 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:border-rose-600 outline-none w-full md:w-48 font-medium"
                    />

                    <button
                      type="button"
                      onClick={() => setSortBy(sortBy === 'POPULAR' ? 'ALPHA' : 'POPULAR')}
                      className="text-[11px] font-bold px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 whitespace-nowrap"
                      title="Toggle between Popular first and Alphabetical A-Z"
                    >
                      Sort: {sortBy === 'POPULAR' ? '★ Popular' : 'A-Z'}
                    </button>
                  </div>
                </div>

                {/* Models Grid in Order */}
                {orderedModels.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
                    No models found matching &quot;{searchModel}&quot; in {modelFilter === 'ALL' ? activeBrand : modelFilter}.
                    <button
                      onClick={() => { setSearchModel(''); setModelFilter('ALL'); }}
                      className="block mx-auto mt-2 text-rose-600 font-bold hover:underline"
                    >
                      Clear search filter
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                    {orderedModels.map((model) => {
                      const isSelected = activeModel === model.name;

                      return (
                        <button
                          key={model.id}
                          onClick={() => handleModelSelect(model.name)}
                          className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between group cursor-pointer relative ${
                            isSelected
                              ? 'bg-rose-50/70 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                              : 'bg-white border-slate-200/80 hover:border-rose-300 hover:shadow-md'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-1 mb-2">
                              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {model.bodyType}
                              </span>

                              {model.popular && (
                                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                                  ★ POPULAR
                                </span>
                              )}
                            </div>

                            <h4 className="font-extrabold text-slate-900 text-base group-hover:text-rose-600 transition-colors">
                              {model.name}
                            </h4>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                            <span className="truncate max-w-[120px]">
                              {model.fuels.join(' • ')}
                            </span>
                            <span className="font-bold text-rose-600 text-xs group-hover:translate-x-0.5 transition-transform">
                              Select →
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          {/* STEP 3: Fuel Type */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-xl mx-auto text-center">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Select Fuel Type for {activeBrand} {activeModel}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Different fuel types require specific filters and oil viscosities</p>
              </div>

              {(() => {
                const fuelsToDisplay = modelObj.bodyType === 'EV'
                  ? ['Electric']
                  : Array.from(new Set([...modelObj.fuels, 'Petrol', 'Diesel', 'CNG + Petrol']));

                return (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {fuelsToDisplay.map((fuel) => (
                      <button
                        key={fuel}
                        onClick={() => handleFuelSelect(fuel)}
                        className={`py-4 px-3 rounded-2xl border text-center transition-all cursor-pointer ${
                          activeFuel === fuel
                            ? 'bg-rose-600 text-white border-rose-600 shadow-md ring-2 ring-rose-300'
                            : 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-sm text-slate-800'
                        }`}
                      >
                        <div className="font-bold text-sm">{fuel}</div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {fuel === 'CNG + Petrol' ? 'Dual-Fuel Bi-Fuel' : fuel === 'Diesel' ? 'Turbo-Diesel CRDi' : fuel === 'Petrol' ? 'Multi-point MPFi' : 'Zero-Emission'}
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })()}

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  ← Back to Models
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Year of Manufacture & Confirm */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200 max-w-xl mx-auto text-center">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Select Manufacture Year
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Helps our technicians calibrate service schedules</p>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-2">
                {modelObj.years.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => handleYearSelect(yr)}
                    className={`py-3 rounded-xl border text-center font-bold text-xs transition-all cursor-pointer ${
                      activeYear === yr
                        ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                        : 'bg-white border-slate-200 hover:border-rose-300 text-slate-800'
                    }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 text-left mt-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-rose-600">Selected Vehicle</span>
                  <div className="font-extrabold text-slate-900 text-base">
                    {activeBrand} {activeModel} • {activeFuel} ({activeYear})
                  </div>
                </div>
                <button
                  onClick={handleConfirmCar}
                  className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/20 transition-all flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Set Active Car</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Recommended Services for Selected Car */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Recommended Services for {activeBrand} {activeModel}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Pre-configured with OEM parts and exact fluid volumes</p>
            </div>
            <button
              onClick={() => router.push('/services')}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              Browse All Services →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PACKAGES.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {pkg.categoryName}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-2">{pkg.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{pkg.shortDesc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Estimate</span>
                    <span className="text-lg font-black text-slate-900">₹{pkg.startingPrice}</span>
                  </div>
                  <button
                    onClick={() => router.push(`/book-service?service=${pkg.slug}`)}
                    className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CarSelectorPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading vehicle selector...</div>}>
      <CarSelectorContent />
    </Suspense>
  );
}
