'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Car,
  Wrench,
  Truck,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Tag,
  ShieldCheck,
  CreditCard,
  Building,
  Home,
  Navigation,
  Sparkles
} from 'lucide-react';
import { CAR_BRANDS } from '@/lib/data/carData';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { useCar } from '@/lib/context/CarContext';
import { useBooking } from '@/lib/context/BookingContext';
import { useCity } from '@/lib/context/CityContext';
import CarBrandLogo from '@/components/brand/CarBrandLogo';

function BookingFlowContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentCar, selectCar } = useCar();
  const { addBooking, applyCoupon } = useBooking();
  const { currentCity } = useCity();

  // URL parameters if arriving from quick widget or service detail
  const paramService = searchParams.get('service');
  const paramDate = searchParams.get('date');
  const paramSlot = searchParams.get('slot');

  // Step state: 1 to 6
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State:
  // Step 1: Car
  const [brand, setBrand] = useState<string>(currentCar?.brand || 'Hyundai');
  const [model, setModel] = useState<string>(currentCar?.model || 'Creta');
  const [fuel, setFuel] = useState<string>(currentCar?.fuel || 'Petrol');

  // Step 2: Service
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(paramService || 'comprehensive-car-service');

  // Step 3: Service Type
  const [serviceType, setServiceType] = useState<'PICKUP_DROP' | 'DOORSTEP' | 'WORKSHOP'>('PICKUP_DROP');

  // Step 4: Location & Customer
  const [customerName, setCustomerName] = useState<string>('Purna Rao');
  const [customerPhone, setCustomerPhone] = useState<string>('9550425789');
  const [customerEmail, setCustomerEmail] = useState<string>('customer@srmulticartech.com');
  const [houseFlat, setHouseFlat] = useState<string>('Plot 12, Sri Sai Nilayam');
  const [street, setStreet] = useState<string>('Near Main Road');
  const [area, setArea] = useState<string>('Satrampadu');
  const [city, setCity] = useState<string>(currentCity || 'Eluru, Andhra Pradesh');
  const [pincode, setPincode] = useState<string>('534007');
  const [locationDetecting, setLocationDetecting] = useState<boolean>(false);

  // Step 5: Date & Slot
  const [selectedDate, setSelectedDate] = useState<string>(paramDate || '');
  const [selectedSlot, setSelectedSlot] = useState<string>(paramSlot || '10:00 AM - 11:00 AM');

  // Step 6: Payment & Coupons
  const [couponCode, setCouponCode] = useState<string>('SRFIRST10');
  const [appliedCouponInfo, setAppliedCouponInfo] = useState<{ discount: number; msg: string }>({ discount: 0, msg: '' });
  const [paymentMethod, setPaymentMethod] = useState<string>('UPI');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Initialize date if empty
  useEffect(() => {
    if (!selectedDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setSelectedDate(`${yyyy}-${mm}-${dd}`);
    }
  }, [selectedDate]);

  // Derived Objects
  const activeBrandObj = CAR_BRANDS.find(b => b.name === brand) || CAR_BRANDS[1];
  const availableModels = activeBrandObj.models;
  const activeModelObj = availableModels.find(m => m.name === model) || availableModels[0];
  const selectedServiceObj = SERVICE_PACKAGES.find(s => s.slug === selectedServiceSlug) || SERVICE_PACKAGES[0];

  // Pricing calculations
  const basePrice = selectedServiceObj.startingPrice;
  const additionalCharges = serviceType === 'PICKUP_DROP' ? 0 : 0; // Free pickup & drop!
  const initialSubtotal = basePrice + additionalCharges;

  // Auto apply coupon on load or when coupon applied
  useEffect(() => {
    if (couponCode) {
      const res = applyCoupon(couponCode, initialSubtotal);
      if (res.valid) {
        setAppliedCouponInfo({ discount: res.discount, msg: res.message });
      } else {
        setAppliedCouponInfo({ discount: 0, msg: res.message });
      }
    }
  }, [selectedServiceSlug, initialSubtotal]);

  const discountAmount = appliedCouponInfo.discount;
  const discountedSubtotal = Math.max(0, initialSubtotal - discountAmount);
  const gstAmount = Math.round(discountedSubtotal * 0.18);
  const finalTotal = discountedSubtotal + gstAmount;

  // Handle Location Detection
  const handleDetectLocation = () => {
    setLocationDetecting(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocationDetecting(false);
          setArea('Central Tech Hub Zone');
          setStreet('Near GS Road Main Junction');
          setPincode('781005');
        },
        () => {
          setLocationDetecting(false);
          setArea('GS Road Central');
          setPincode('781005');
        }
      );
    } else {
      setLocationDetecting(false);
    }
  };

  const handleApplyCouponManual = (e: React.FormEvent) => {
    e.preventDefault();
    const res = applyCoupon(couponCode, initialSubtotal);
    if (res.valid) {
      setAppliedCouponInfo({ discount: res.discount, msg: res.message });
    } else {
      setAppliedCouponInfo({ discount: 0, msg: res.message });
    }
  };

  const handleConfirmBooking = () => {
    setIsSubmitting(true);

    const fullAddress = `${houseFlat}, ${street}, ${area}, ${city} - ${pincode}`;

    const createdBooking = addBooking({
      customerName,
      customerPhone,
      customerEmail,
      carBrand: brand,
      carModel: model,
      carFuel: fuel,
      carYear: 2022,
      serviceId: selectedServiceObj.id,
      serviceTitle: selectedServiceObj.title,
      serviceType,
      address: fullAddress,
      city,
      pincode,
      scheduledDate: selectedDate,
      timeSlot: selectedSlot,
      basePrice,
      additionalCharges,
      discount: discountAmount,
      gst: gstAmount,
      total: finalTotal,
      paymentMethod,
      paymentStatus: paymentMethod === 'Pay at Workshop' || paymentMethod === 'Pay Later' ? 'PENDING' : 'PAID',
      couponCode: discountAmount > 0 ? couponCode : undefined,
      notes: 'Customer requested complimentary doorstep pickup and WhatsApp tracking.'
    });

    setTimeout(() => {
      setIsSubmitting(false);
      router.push(`/booking-confirmed?bookingId=${createdBooking.bookingNumber}`);
    }, 800);
  };

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM'
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Hassle-Free Booking
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
            Book Your Car Service
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Complete the 6 simple steps below to reserve your slot and technician.
          </p>
        </div>

        {/* 6-Step Stepper Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-sm">
          <div className="grid grid-cols-6 gap-2">
            {[
              { num: 1, label: 'Car' },
              { num: 2, label: 'Service' },
              { num: 3, label: 'Mode' },
              { num: 4, label: 'Address' },
              { num: 5, label: 'Slot' },
              { num: 6, label: 'Summary' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setCurrentStep(s.num)}
                className={`py-2 px-1 rounded-xl text-center transition-all cursor-pointer ${
                  currentStep === s.num
                    ? 'bg-rose-600 text-white font-bold shadow-sm'
                    : currentStep > s.num
                    ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider hidden sm:block">Step {s.num}</div>
                <div className="text-xs font-bold truncate">{s.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Step Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Steps */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
            {/* STEP 1: Car Selection */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-slate-900">Step 1: Select Your Vehicle</h2>
                  <p className="text-xs text-slate-500">Pick the car you wish to book service for</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brand</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3 w-5 h-5 pointer-events-none flex items-center justify-center">
                        <CarBrandLogo brandName={brand} className="w-full h-full object-contain" />
                      </div>
                      <select
                        value={brand}
                        onChange={(e) => {
                          setBrand(e.target.value);
                          const b = CAR_BRANDS.find(item => item.name === e.target.value);
                          if (b && b.models.length > 0) {
                            setModel(b.models[0].name);
                            setFuel(b.models[0].fuels[0]);
                          }
                        }}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none"
                      >
                        {CAR_BRANDS.map(b => (
                          <option key={b.id} value={b.name}>{b.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Model ({availableModels.length} Models)
                    </label>
                    <select
                      value={model}
                      onChange={(e) => {
                        setModel(e.target.value);
                        const m = availableModels.find(item => item.name === e.target.value);
                        if (m && m.fuels.length > 0) {
                          setFuel(m.fuels[0]);
                        }
                      }}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none"
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Fuel Type</label>
                    <select
                      value={fuel}
                      onChange={(e) => setFuel(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none"
                    >
                      {(activeModelObj.bodyType === 'EV'
                        ? ['Electric']
                        : Array.from(new Set([...activeModelObj.fuels, 'Petrol', 'Diesel', 'CNG + Petrol']))
                      ).map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>Proceed to Service Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Service Selection */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-slate-900">Step 2: Choose Service Package</h2>
                  <p className="text-xs text-slate-500">Tailored maintenance packages with multi-point inspection</p>
                </div>

                <div className="space-y-3">
                  {SERVICE_PACKAGES.map((pkg) => {
                    const isSelected = selectedServiceSlug === pkg.slug;

                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedServiceSlug(pkg.slug)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-rose-500 bg-rose-50/60 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{pkg.title}</div>
                            <div className="text-xs text-slate-500">{pkg.categoryName} • ~{pkg.estimatedHours} hrs • {pkg.warranty}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-black text-rose-600 px-2 py-0.5 rounded bg-rose-50 border border-rose-200">
                            Quote Coming Soon
                          </span>
                          <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">Free Doorstep Pickup</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>Choose Service Mode</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Service Type */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-slate-900">Step 3: Service Mode</h2>
                  <p className="text-xs text-slate-500">How would you like your car to be serviced?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'PICKUP_DROP',
                      title: 'Free Pickup & Drop',
                      badge: 'RECOMMENDED',
                      desc: 'Our driver collects your car from your doorstep & delivers it back sanitized.',
                      icon: <Truck className="w-6 h-6" />
                    },
                    {
                      id: 'DOORSTEP',
                      title: 'Doorstep Service',
                      badge: 'MOBILE VAN',
                      desc: 'Our outfitted mobile service van arrives at your home or office parking.',
                      icon: <Home className="w-6 h-6" />
                    },
                    {
                      id: 'WORKSHOP',
                      title: 'Workshop Drive-In',
                      badge: 'DIRECT VISIT',
                      desc: 'Drive into our central workshop hub and relax in our customer lounge.',
                      icon: <Building className="w-6 h-6" />
                    }
                  ].map((mode) => {
                    const isSelected = serviceType === mode.id;

                    return (
                      <div
                        key={mode.id}
                        onClick={() => setServiceType(mode.id as typeof serviceType)}
                        className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-rose-500 bg-rose-50/70 shadow-md ring-2 ring-rose-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                              {mode.icon}
                            </div>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                              {mode.badge}
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm mb-1">{mode.title}</h4>
                          <p className="text-xs text-slate-500 leading-relaxed">{mode.desc}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                          ₹0 Convenience Fee
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>Enter Address Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Location & Contact */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Step 4: Contact & Service Address</h2>
                    <p className="text-xs text-slate-500">Where should we pick up or service your vehicle?</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleDetectLocation}
                    disabled={locationDetecting}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 border border-rose-200"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{locationDetecting ? 'Locating...' : 'Use Current Location'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number (For WhatsApp Updates)</label>
                    <input
                      type="text"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">House / Flat / Building</label>
                    <input
                      type="text"
                      value={houseFlat}
                      onChange={(e) => setHouseFlat(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Street / Landmark</label>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Area / Locality</label>
                    <input
                      type="text"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Pincode</label>
                      <input
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>Choose Date & Time Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: Date & Slot */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-slate-900">Step 5: Appointment Schedule</h2>
                  <p className="text-xs text-slate-500">Pick a convenient service appointment date and time slot</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Service Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full max-w-sm p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Available Time Slots</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                            selectedSlot === slot
                              ? 'bg-rose-600 text-white border-rose-600 shadow-md'
                              : 'bg-white border-slate-200 hover:border-rose-300 text-slate-700'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(6)}
                    className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5"
                  >
                    <span>View Order Summary & Pay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 6: Summary & Payment */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-black text-slate-900">Step 6: Order Summary & Confirmation</h2>
                  <p className="text-xs text-slate-500">Review your booking specifics and select preferred payment mode</p>
                </div>

                {/* Summary Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <CarBrandLogo brandName={brand} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Vehicle</span>
                      <span className="font-bold text-slate-900">{brand} {model} ({fuel})</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Service Mode</span>
                    <span className="font-bold text-slate-900">{serviceType.replace('_', ' ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Date</span>
                    <span className="font-bold text-slate-900">{selectedDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Slot</span>
                    <span className="font-bold text-slate-900">{selectedSlot}</span>
                  </div>
                </div>

                {/* Payment Mode Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-sm">Select Preferred Payment Mode</h3>
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Pricing Disclosed Post-Inspection
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Pay Later', label: 'Pay After Inspection & Service', sub: 'Recommended • ₹0 advance, approve quote after diagnostic scan', popular: true },
                      { id: 'Pay at Workshop', label: 'Pay at Workshop Counter', sub: 'Cash, UPI, or Card at car collection' },
                      { id: 'UPI', label: 'UPI Post-Service (GPay / PhonePe)', sub: 'Instant digital invoice payment upon completion' },
                      { id: 'Credit Card', label: 'Card / Net Banking upon Delivery', sub: 'Seamless digital transfer upon satisfaction' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id)}
                        className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left relative ${
                          paymentMethod === m.id
                            ? 'bg-rose-50 border-rose-600 text-rose-800 ring-2 ring-rose-500/20 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        {m.popular && (
                          <span className="absolute top-2 right-2 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            ZERO ADVANCE
                          </span>
                        )}
                        <div className="font-bold text-sm text-slate-900">{m.label}</div>
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">{m.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Final Confirmation Button */}
                <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
                  >
                    ← Back
                  </button>

                  <button
                    onClick={handleConfirmBooking}
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reserving Service Bay...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Confirm Booking • ₹0 Advance (Pay After Service)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Price & Coupon Breakdown Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Service Estimate
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                Coming Soon
              </span>
            </div>

            {/* Selected Package Details */}
            <div className="text-xs space-y-1">
              <div className="font-bold text-slate-900 text-base">{selectedServiceObj.title}</div>
              <div className="text-slate-500">{selectedServiceObj.categoryName} • {selectedServiceObj.warranty}</div>
            </div>

            {/* Line Items */}
            <div className="space-y-2.5 text-xs pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between text-slate-600">
                <span>Base Package Estimate</span>
                <span className="font-bold text-rose-600">Coming Soon</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>Doorstep Valet Pickup & Drop</span>
                <span className="text-emerald-600 font-bold">FREE (Complimentary)</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>German Diagnostic Telemetry</span>
                <span className="text-emerald-600 font-bold">Included</span>
              </div>

              <div className="flex items-center justify-between text-slate-600">
                <span>GST (18% Govt. Tax)</span>
                <span className="font-medium text-slate-500">Post-Inspection</span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="font-black text-slate-900 text-base block">Payable Advance</span>
                  <span className="text-[10px] text-slate-400">Official quote shared after inspection</span>
                </div>
                <span className="font-black text-emerald-600 text-2xl">₹0</span>
              </div>
            </div>

            {/* Coupon Code Box */}
            <div className="pt-3 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="font-bold text-slate-700 flex items-center justify-between">
                  <span>Promotional Offers & Coupons</span>
                  <span className="text-[10px] text-amber-600 font-bold">Coming Soon</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Special fleet discounts and festive promo codes are coming soon for Guwahati vehicle owners.
                </p>
              </div>
            </div>

            {/* Trust assurances */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero advance cancellation charges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Includes digital invoice and service warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading booking checkout...</div>}>
      <BookingFlowContent />
    </Suspense>
  );
}
