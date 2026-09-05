'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Search,
  ChevronDown,
  Car,
  Phone,
  Menu,
  X,
  ShieldCheck,
  CalendarCheck,
  Wrench,
  AlertTriangle,
  Cpu,
  Gift,
  Home,
  Clock,
  Sparkles,
  Navigation
} from 'lucide-react';
import Logo from '../brand/Logo';
import SearchDialog from '../search/SearchDialog';
import { useCar } from '@/lib/context/CarContext';
import { useCity } from '@/lib/context/CityContext';
import { SERVICE_CATEGORIES } from '@/lib/data/servicesData';

export default function Header() {
  const pathname = usePathname();
  const { currentCar } = useCar();
  const { currentCity, setCity, availableCities } = useCity();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close drawers on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCityDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'German Tech', href: '/#owner-technology' },
    { name: 'Track Live', href: '/track-service' },
    { name: 'Offers', href: '/offers', badge: 'SOON' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full shadow-sm">
        {/* Tier 1: Top Utility Micro-Bar (Desktop Only) */}
        <div className="hidden md:block bg-slate-950 text-slate-300 border-b border-slate-800/80 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
            {/* Left: City Selector & Contact Helpline */}
            <div className="flex items-center gap-6">
              {/* Single Workshop Location (Satrampadu, Eluru) */}
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>Location: <strong className="text-white font-bold">Satrampadu, Eluru</strong></span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SR+Multi+Car+Tech+Satrampadu+Eluru+Andhra+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 transition-colors ml-1"
                  title="Get Directions to Satrampadu, Eluru Workshop on Google Maps"
                >
                  <Navigation className="w-2.5 h-2.5" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Direct Helpline */}
              <a
                href="tel:+919550425789"
                className="flex items-center gap-1.5 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>24/7 Helpline: <strong className="text-slate-200">+91 95504 25789</strong></span>
              </a>

              {/* OEM Parts Guarantee */}
              <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Genuine OEM Spares</span>
              </div>
            </div>

            {/* Right: Active Vehicle & SOS Rapid Response */}
            <div className="flex items-center gap-4">
              {/* Active Vehicle Status Pill */}
              <Link
                href="/select-car"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold transition-colors group"
                title="Select or switch vehicle in your garage"
              >
                <Car className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                <span>
                  Garage: <strong className="text-white group-hover:text-rose-400 transition-colors">{currentCar ? `${currentCar.brand} ${currentCar.model}` : 'Select Car'}</strong>
                </span>
                <span className="text-[10px] text-rose-400 font-bold underline">Change</span>
              </Link>

              {/* 24/7 Emergency SOS Badge */}
              <Link
                href="/sos"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/80 text-red-400 hover:text-red-300 font-bold transition-all text-xs"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>24/7 Roadside SOS</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Navigation Bar */}
        <div className="bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-4">
              {/* Left: Magnificent Brand Logo */}
              <div className="flex-shrink-0">
                <Logo />
              </div>

              {/* Center: Desktop Navigation Links (Single Line, Never Wraps) */}
              <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-bold text-sm text-slate-700 whitespace-nowrap">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <Link
                          href={link.href}
                          className={`px-3 py-2 rounded-xl flex items-center gap-1 hover:text-rose-600 hover:bg-slate-50 transition-all ${
                            isActive ? 'text-rose-600 font-black bg-rose-50/70' : ''
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </Link>

                        {/* Mega Menu Dropdown for Services */}
                        {servicesDropdownOpen && (
                          <div className="absolute left-0 top-full w-80 p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 grid grid-cols-1 gap-1">
                            <div className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-400">
                              Service Categories
                            </div>
                            {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/services#${cat.slug}`}
                                className="p-2.5 rounded-xl hover:bg-rose-50 flex items-center justify-between group transition-all"
                              >
                                <div>
                                  <div className="text-xs font-bold text-slate-800 group-hover:text-rose-600">
                                    {cat.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400">Pricing: Coming Soon</div>
                                </div>
                                {cat.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                                    {cat.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                            <div className="pt-2 border-t border-slate-100">
                              <Link
                                href="/services"
                                className="block text-center text-xs font-bold text-rose-600 hover:text-rose-700 py-1"
                              >
                                View All 12 Categories →
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-xl flex items-center gap-1.5 hover:text-rose-600 hover:bg-slate-50 transition-all whitespace-nowrap ${
                        isActive ? 'text-rose-600 font-black bg-rose-50/70' : ''
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right: Quick Tools & Primary Booking CTA (Never Overcrowded) */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* Compact Search Trigger */}
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 text-slate-600 hover:text-rose-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  title="Search services, car models, FAQs (Ctrl+K)"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>

                {/* Primary CTA: Book Service Button (Always prominent, never cut off) */}
                <Link
                  href="/book-service"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 rounded-xl shadow-lg shadow-rose-600/30 hover:shadow-rose-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Book Service</span>
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 lg:hidden text-slate-800 hover:text-rose-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto z-50 animate-in slide-in-from-top duration-200">
            {/* Mobile Car Selector Bar */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-600 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">
                    {currentCar ? `${currentCar.brand} ${currentCar.model}` : 'No Car Selected'}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    {currentCar?.fuel ? `${currentCar.fuel} Variant` : 'Select your vehicle for personalized service'}
                  </div>
                </div>
              </div>

              <Link
                href="/select-car"
                className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-sm"
              >
                {currentCar ? 'Change' : 'Select'}
              </Link>
            </div>

            {/* Single Workshop Branch Indicator in Mobile */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <div>
                  <div className="text-xs font-black text-slate-900">Eluru, Andhra Pradesh</div>
                  <div className="text-[10px] text-slate-500">Plot 14, Auto Nagar, Sanivarapupeta Road</div>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Main Facility
              </span>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1 pt-2 border-t border-slate-100">
              <Link
                href="/"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-rose-600" />
                  <span>Home</span>
                </div>
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-4 h-4 text-rose-600" />
                  <span>All Car Services</span>
                </div>
                <span className="text-xs text-slate-400">12 Categories</span>
              </Link>

              <Link
                href="/#owner-technology"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-rose-600" />
                  <span>Founder & German Tech</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">15 Yrs Exp</span>
              </Link>

              <Link
                href="/track-service"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>Track Service Live</span>
                </div>
                <span className="text-xs text-emerald-600 font-semibold">Real-time Telemetry</span>
              </Link>

              <Link
                href="/sos"
                className="flex items-center justify-between p-3 rounded-xl bg-red-50 text-red-700 font-bold text-sm border border-red-200"
              >
                <div className="flex items-center gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>24/7 Emergency SOS Roadside</span>
                </div>
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded font-black">20-Min ETA</span>
              </Link>

              <Link
                href="/offers"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Gift className="w-4 h-4 text-rose-600" />
                  <span>Exclusive Offers</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Coming Soon</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-slate-500" />
                  <span>About SR Multi Car Tech</span>
                </div>
              </Link>
            </div>

            {/* Mobile Contact & Book CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=SR+Multi+Car+Tech+Satrampadu+Eluru+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-800"
              >
                <Navigation className="w-4 h-4 text-rose-400" />
                <span>Get Directions (Satrampadu, Eluru)</span>
              </a>

              <a
                href="tel:+919550425789"
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Emergency Helpline: +91 95504 25789</span>
              </a>

              <Link
                href="/book-service"
                className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Service Now (Quote Coming Soon)</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog (Ctrl+K) */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
