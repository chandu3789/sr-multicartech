import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import Logo from '../brand/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">100% Genuine OEM Spares</div>
              <div className="text-xs text-slate-400">Castrol, Shell, Bosch & factory-certified parts with manufacturer warranty.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Up to 2 Years Warranty</div>
              <div className="text-xs text-slate-400">Unconditional service warranty on periodic maintenance and DuPont body paints.</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Free Doorstep Pickup & Drop</div>
              <div className="text-xs text-slate-400">Live digital tracking from vehicle collection to final garage delivery.</div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-slate-800">
          {/* Brand Bio & Contact */}
          <div className="col-span-2 space-y-4">
            <Logo variant="dark" showTagline={true} />
            <div className="text-xs font-serif italic text-rose-400 font-semibold tracking-wide">
              “Your Drive Our Priority”
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              SR Multi Car Tech is your technology-first automotive service partner in Satrampadu, Eluru. Experience transparent pricing, verified master technicians, and stress-free car care at your doorstep or our certified workshop hub.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <a href="tel:+919550425789" className="hover:text-white transition-colors">
                  +91 95504 25789 (Customer Care)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919550425789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 95504 25789 (WhatsApp Support)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <a href="mailto:care@srmulticartech.com" className="hover:text-white transition-colors">
                  care@srmulticartech.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Near Main Road, Satrampadu, Eluru, Andhra Pradesh - 534007
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SR+Multi+Car+Tech+Satrampadu+Eluru+Andhra+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-rose-400 hover:text-rose-300 font-bold mt-1 text-[11px]"
                  >
                    📍 Get Directions on Google Maps &rarr;
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-slate-400">Open 7 Days: 08:00 AM – 08:30 PM (24/7 SOS Rescue)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Services */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Car Services</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services#periodic-services" className="hover:text-white transition-colors">
                  Periodic Car Service
                </Link>
              </li>
              <li>
                <Link href="/services#car-spa-cleaning" className="text-rose-400 hover:text-rose-300 font-semibold transition-colors">
                  ✨ Car Wash Premium
                </Link>
              </li>
              <li>
                <Link href="/services#ac-service-repair" className="hover:text-white transition-colors">
                  AC Service & Gas Refill
                </Link>
              </li>
              <li>
                <Link href="/services#batteries" className="hover:text-white transition-colors">
                  Battery Replacement & Jumpstart
                </Link>
              </li>
              <li>
                <Link href="/services#tyres-wheel-care" className="hover:text-white transition-colors">
                  Tyres & 3D Wheel Alignment
                </Link>
              </li>
              <li>
                <Link href="/services#denting-painting" className="hover:text-white transition-colors">
                  Denting & DuPont Painting
                </Link>
              </li>
              <li>
                <Link href="/services#car-spa-cleaning" className="hover:text-white transition-colors">
                  Car Spa & Ceramic Detailing
                </Link>
              </li>
              <li>
                <Link href="/services#car-inspection" className="hover:text-white transition-colors">
                  Pre-Purchase Inspection
                </Link>
              </li>
              <li>
                <Link href="/services#suspension-brakes" className="hover:text-white transition-colors">
                  Suspension & Brake Pads
                </Link>
              </li>
              <li>
                <Link href="/sos" className="hover:text-red-400 font-semibold transition-colors">
                  24/7 Roadside SOS Towing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Portal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Customer Portal</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/my-bookings" className="hover:text-white transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/track-service" className="hover:text-white transition-colors">
                  Track Service Live
                </Link>
              </li>
              <li>
                <Link href="/my-vehicles" className="hover:text-white transition-colors">
                  My Garage & Vehicles
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white transition-colors">
                  Coupons & Offers
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-white transition-colors">
                  Cashless Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-rose-400 font-semibold hover:text-rose-300 transition-colors">
                  Admin Dashboard Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Company & Legal</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About SR Multi Car Tech
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Workshop Locations & Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Car Care Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SR Multi Car Tech. All rights reserved. “Complete Car Care. One Trusted Place.”
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919550425789"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white transition-all text-slate-400"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+919550425789"
              className="p-2 rounded-lg bg-slate-900 hover:bg-rose-600 hover:text-white transition-all text-slate-400"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/sos"
              className="px-3 py-1.5 rounded-lg bg-red-950/80 text-red-400 hover:bg-red-900 border border-red-800 text-[11px] font-bold"
            >
              SOS Rescue Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
