'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapPin,
  Phone,
  Menu,
  X,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  Clock,
  Navigation
} from 'lucide-react';
import Logo from '../brand/Logo';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function Header() {
  const pathname = usePathname();
  const { openSos } = useSos();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Clean, focused navigation links (No multi-line wrapping)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#owner' },
    { name: 'Our Work', href: '/#work' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Utility Micro-Bar - Clean, Slim, High-Trust */}
      <div className="hidden lg:block bg-[#0F172A] text-slate-300 text-[11px] py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span className="font-medium text-slate-300">
              Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple, Eluru
            </span>
            <span className="text-slate-600 mx-1">•</span>
            <a
              href="#directions"
              className="text-red-400 hover:text-red-300 font-bold uppercase tracking-wider text-[10px] inline-flex items-center gap-1 transition-colors"
            >
              <Navigation className="w-2.5 h-2.5" />
              <span>Directions</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>15+ Years Owner Experience</span>
            </span>
            <span className="h-3 w-px bg-slate-700" />
            <a
              href="tel:9550425789"
              className="flex items-center gap-1.5 text-white font-bold hover:text-red-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>24/7 Helpline: 9550425789</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - NxtWave Clean, Spacious, Perfectly Aligned */}
      <div
        className={`w-full bg-white transition-all duration-200 border-b border-slate-200/80 ${
          isScrolled ? 'shadow-md py-3' : 'shadow-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* 1. Left: Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" variant="light" showTagline={true} />
          </div>

          {/* 2. Center: Clean, Spacious Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-red-600 transition-colors py-1 whitespace-nowrap flex-shrink-0 relative hover:-translate-y-0.5 duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Right: Clean Action Buttons (WhatsApp + Call Now + SOS) */}
          <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
            {/* Authentic WhatsApp Button */}
            <a
              href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20vehicle%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
              title="Chat on WhatsApp (9550425789)"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>

            {/* CALL NOW BUTTON */}
            <a
              href="tel:9550425789"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all active:scale-95"
              title="Call 9550425789"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>

            {/* SOS 24 HRS BUTTON */}
            <button
              onClick={openSos}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
              title="Emergency SOS 24 HRS"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span>SOS 24H</span>
            </button>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:9550425789"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold active:scale-95 shadow-sm"
              aria-label="Call 9550425789"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 py-6 animate-in slide-in-from-top-3 duration-200">
          <div className="space-y-4 max-w-lg mx-auto">
            <div className="pb-3 border-b border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-wider text-red-600 mb-0.5">
                SR Multicartech • Satrampadu
              </p>
              <p className="text-xs text-slate-600">
                Opp. Aditya Degree College, Near Ambika Devi Temple
              </p>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href="tel:9550425789"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-red-600 text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919550425789?text=Hello%20SR%20Multicartech%2C%20I%20would%20like%20to%20enquire%20about%20car%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSos();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F172A] text-red-400 border border-red-500/40 font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>Emergency SOS 24 HRS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
