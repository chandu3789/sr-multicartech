'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  AlertTriangle,
  Clock,
  ShieldCheck,
  ChevronRight,
  Navigation,
  Heart
} from 'lucide-react';
import Logo from '../brand/Logo';
import { useSos } from '@/lib/context/SosContext';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function Footer() {
  const { openSos } = useSos();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About / Owner', href: '/#owner' },
    { name: 'Services', href: '/#services' },
    { name: 'Our Work', href: '/#work' },
    { name: 'Technology', href: '/#technology' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact Us', href: '/#contact' }
  ];

  const serviceLinks = [
    { name: 'Denting & Painting', href: '/#services' },
    { name: 'Full Engine Works', href: '/#services' },
    { name: 'Full Body Repair', href: '/#services' },
    { name: 'Genuine Spare Parts', href: '/#services' },
    { name: 'Deep Cleaning & Spa', href: '/#services' },
    { name: 'Anti-Rust Treatment', href: '/#services' },
    { name: 'German Diagnostics', href: '/#technology' }
  ];

  return (
    <footer className="bg-[#070b14] text-white border-t border-slate-800 relative z-30">
      {/* Top CTA Emergency Band */}
      <div className="bg-gradient-to-r from-red-700 via-rose-700 to-red-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Facing an Automotive Breakdown or Warning Light?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 font-medium">
              Call SR Multicartech now or tap our 24/7 emergency assistance helpline.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:9550425789"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>CALL: 9550425789</span>
            </a>

            <button
              onClick={openSos}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0b0f19] hover:bg-slate-900 text-red-400 font-black text-xs uppercase tracking-wider border border-red-400/40 shadow-lg active:scale-95 transition-all cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              <span>SOS 24 HRS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info & Mission (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="md" variant="dark" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Premium automotive care, experienced hands, and advanced German diagnostic technology software under the visionary leadership of Founder &amp; Owner <strong className="text-white">BRR (Birlangi Ratnala Ramesh)</strong>.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>15+ Years Automobile Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Genuine Spare Parts Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-red-500">
              Garage Location
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">SR Multicartech</p>
                  <p className="text-slate-400 mt-0.5 leading-snug">
                    Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple, Eluru.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SR+Multicartech+Satrampadu+Eluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-red-300 mt-1"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-800">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">Direct Phone:</span>
                  <a href="tel:9550425789" className="text-white hover:text-red-400 font-bold font-mono">
                    +91 9550425789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <WhatsAppIcon size={18} />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">WhatsApp:</span>
                  <a
                    href="https://wa.me/919550425789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-bold font-mono"
                  >
                    +91 9550425789
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SR Multicartech. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Founder &amp; Owner: BRR (Birlangi Ratnala Ramesh)</span>
            <span className="text-slate-600">•</span>
            <span>Satrampadu, Eluru</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
