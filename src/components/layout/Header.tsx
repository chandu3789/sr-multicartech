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
  User,
  Wrench,
  AlertTriangle,
  Cpu,
  Gift,
  Clock
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Subtle shadow on scroll, maintaining uniform height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawers on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCityDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'German Tech', href: '/#owner-technology', icon: Cpu, badge: 'OBD-II' },
    { name: 'Track Live', href: '/track-service' },
    { name: 'Offers', href: '/offers', badge: 'SOON', isMuted: true },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-shadow duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
            : 'bg-white border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Left: Brand Logo & City Pill */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <Logo />

              {/* City Selector Pill */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-xs font-bold text-slate-700 transition-colors cursor-pointer border border-slate-200/60"
                  title="Select Service Location"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                  <span className="truncate max-w-[100px]">{currentCity}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {cityDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3.5 py-1 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                      Service Network Hubs
                    </div>
                    {availableCities.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => {
                          setCity(c.name);
                          setCityDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-rose-50 hover:text-rose-600 cursor-pointer ${
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

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 font-semibold text-sm text-slate-700">
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
                          isActive ? 'text-rose-600 font-bold bg-rose-50/60' : ''
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </Link>

                      {/* Mega Menu Dropdown for Services */}
                      {servicesDropdownOpen && (
                        <div className="absolute left-0 top-full w-80 p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 grid grid-cols-1 gap-1">
                          <div className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-slate-400">
                            Service Divisions
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
                    className={`px-3 py-2 rounded-xl flex items-center gap-1.5 hover:text-rose-600 hover:bg-slate-50 transition-all ${
                      isActive ? 'text-rose-600 font-bold bg-rose-50/60' : ''
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                          link.isMuted
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Quick Tools & Primary Actions */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="hidden lg:flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-rose-600 bg-slate-100/80 hover:bg-slate-200/80 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                title="Search services, cars, FAQs (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden xl:inline">Search...</span>
                <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white rounded border border-slate-300 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* SOS Emergency Pill */}
              <Link
                href="/sos"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-all shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>24/7 SOS</span>
              </Link>

              {/* Selected Car Pill */}
              <Link
                href="/select-car"
                className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all group"
                title="Current vehicle in your garage"
              >
                <Car className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span className="truncate max-w-[110px] text-slate-900 font-extrabold">
                  {currentCar ? `${currentCar.brand} ${currentCar.model}` : 'Select Car'}
                </span>
                <span className="text-[10px] text-rose-600 group-hover:underline font-semibold">Change</span>
              </Link>

              {/* Book Service Primary CTA */}
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 rounded-xl shadow-md shadow-rose-600/25 hover:shadow-lg hover:shadow-rose-600/35 transition-all whitespace-nowrap cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 mr-1.5 flex-shrink-0" />
                <span>Book Service</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 xl:hidden text-slate-700 hover:text-rose-600 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-20 bg-white border-b border-slate-200 shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto z-50 animate-in slide-in-from-top duration-200">
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

            {/* City Selector in Mobile */}
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Current City Hub
              </div>
              <div className="grid grid-cols-2 gap-2">
                {availableCities.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setCity(c.name);
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold text-left flex items-center justify-between border ${
                      currentCity === c.name
                        ? 'bg-rose-50 text-rose-700 border-rose-300'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span>{c.name}</span>
                    {currentCity === c.name && <span className="text-[10px] text-rose-600">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1 pt-2 border-t border-slate-100">
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
                  <User className="w-4 h-4 text-slate-500" />
                  <span>About SR Multi Car Tech</span>
                </div>
              </Link>

              <Link
                href="/admin"
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-500 font-semibold text-xs"
              >
                <span>Admin & Operations Portal</span>
                <span>→</span>
              </Link>
            </div>

            {/* Mobile Contact & Book CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-2.5">
              <a
                href="tel:+919876543210"
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Emergency Helpline: +91 98765 43210</span>
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
