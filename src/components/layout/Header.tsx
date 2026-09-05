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
  AlertCircle,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  User,
  Wrench
} from 'lucide-react';
import Logo from '../brand/Logo';
import SearchDialog from '../search/SearchDialog';
import { useCar } from '@/lib/context/CarContext';
import { useCity } from '@/lib/context/CityContext';
import { SERVICE_CATEGORIES } from '@/lib/data/servicesData';

export default function Header() {
  const pathname = usePathname();
  const { currentCar, formattedCarName } = useCar();
  const { currentCity, setCity, availableCities } = useCity();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Shrink header slightly on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCityDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Offers', href: '/offers', badge: 'DEALS' },
    { name: 'SOS Assistance', href: '/sos', highlight: true },
    { name: 'Track Service', href: '/track-service' },
    { name: 'About Us', href: '/about' },
    { name: 'Admin', href: '/admin', isSecondary: true }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-200'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-6">
              <Logo showTagline={!isScrolled} />

              {/* City Selector Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>{currentCity}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {cityDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Your City
                    </div>
                    {availableCities.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setCity(c.name);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-rose-50 hover:text-rose-600 ${
                          currentCity === c.name ? 'text-rose-600 font-bold bg-rose-50/50' : 'text-slate-700'
                        }`}
                      >
                        <span>{c.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">{c.workshops} Hubs</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Center / Right: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
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
                        className={`px-3 py-2 rounded-lg flex items-center gap-1 hover:text-rose-600 transition-colors ${
                          isActive ? 'text-rose-600 font-bold' : ''
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
                              className="p-2 rounded-xl hover:bg-rose-50 flex items-center justify-between group transition-all"
                            >
                              <div>
                                <div className="text-xs font-semibold text-slate-800 group-hover:text-rose-600">
                                  {cat.name}
                                </div>
                                <div className="text-[10px] text-slate-400">Starting ₹{cat.startingPrice}</div>
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

                if (link.highlight) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-600 hover:bg-red-100 transition-all flex items-center gap-1.5 border border-red-200 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                      <span>SOS Emergency</span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg relative hover:text-rose-600 transition-colors ${
                      isActive ? 'text-rose-600 font-bold' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-rose-100 text-rose-600">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick Tools & Primary CTA */}
            <div className="flex items-center gap-2.5">
              {/* Search Trigger Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded-xl transition-colors"
                title="Search services, cars, FAQs (Ctrl+K)"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Selected Car Badge */}
              <Link
                href="/select-car"
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-all group"
              >
                <Car className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="truncate max-w-[130px] font-semibold text-slate-800">
                  {currentCar ? `${currentCar.brand} ${currentCar.model}` : 'Select Car'}
                </span>
                <span className="text-[10px] text-rose-600 group-hover:underline">Change</span>
              </Link>

              {/* Customer Account & Bookings Icon */}
              <Link
                href="/my-bookings"
                className="hidden md:flex p-2 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded-xl transition-colors"
                title="My Bookings & Vehicles"
              >
                <User className="w-4 h-4" />
              </Link>

              {/* Book Service Primary CTA */}
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md shadow-rose-600/20 hover:shadow-lg hover:shadow-rose-600/30 transition-all"
              >
                <CalendarCheck className="w-3.5 h-3.5 mr-1.5" />
                <span>Book Service</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 lg:hidden text-slate-700 hover:text-rose-600 rounded-xl hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl p-5 space-y-4 max-h-[80vh] overflow-y-auto z-50 animate-in slide-in-from-top duration-200">
            {/* Mobile Car Selector Bar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5">
                <Car className="w-5 h-5 text-rose-600" />
                <div>
                  <div className="text-xs font-bold text-slate-800">
                    {currentCar ? `${currentCar.brand} ${currentCar.model}` : 'No Car Selected'}
                  </div>
                  <div className="text-[10px] text-slate-500">{currentCar?.fuel || 'Choose your vehicle'}</div>
                </div>
              </div>
              <Link
                href="/select-car"
                className="text-xs font-bold text-rose-600 px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-200"
              >
                Change
              </Link>
            </div>

            {/* Mobile City Selector */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-600" />
                Active City
              </div>
              <div className="grid grid-cols-2 gap-2">
                {availableCities.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCity(c.name)}
                    className={`py-1.5 px-2 text-xs rounded-lg font-medium text-left border ${
                      currentCity === c.name
                        ? 'bg-rose-600 text-white border-rose-600 font-bold'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === link.href ? 'bg-rose-50 text-rose-600' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 font-bold">
                      {link.badge}
                    </span>
                  )}
                  {link.highlight && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-bold animate-pulse">
                      24/7 LIVE
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Account & Garage Links */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <Link
                href="/my-bookings"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <CalendarCheck className="w-4 h-4 text-rose-600" />
                <span>My Bookings</span>
              </Link>
              <Link
                href="/my-vehicles"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Car className="w-4 h-4 text-rose-600" />
                <span>My Saved Vehicles</span>
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Admin Dashboard</span>
              </Link>
            </div>

            {/* Emergency Hotline */}
            <div className="pt-2">
              <a
                href="tel:+919876599999"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md shadow-red-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency 24/7 SOS Helpline</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
