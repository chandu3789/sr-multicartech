'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, Wrench, Car, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';
import { SERVICE_PACKAGES } from '@/lib/data/servicesData';
import { CAR_BRANDS } from '@/lib/data/carData';
import { FAQ_LIST } from '@/lib/data/faqData';
import { BLOG_POSTS } from '@/lib/data/blogData';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or custom event
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingServices = q
    ? SERVICE_PACKAGES.filter(s => s.title.toLowerCase().includes(q) || s.categoryName.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q)).slice(0, 4)
    : SERVICE_PACKAGES.slice(0, 3);

  const matchingCars = q
    ? CAR_BRANDS.flatMap(b => b.models.map(m => ({ brand: b.name, model: m.name, fuel: m.fuels.join(', ') })))
        .filter(c => c.brand.toLowerCase().includes(q) || c.model.toLowerCase().includes(q))
        .slice(0, 4)
    : [];

  const matchingFaqs = q
    ? FAQ_LIST.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)).slice(0, 3)
    : [];

  const matchingBlogs = q
    ? BLOG_POSTS.filter(b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)).slice(0, 2)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search services (AC, Brakes, Periodic), car models, or questions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none text-base font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 rounded-full text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Services Section */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              Services & Packages
            </div>
            <div className="space-y-1.5">
              {matchingServices.map(service => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-50/70 group transition-colors"
                >
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-rose-600 text-sm">
                      {service.title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1">{service.categoryName} • {service.warranty}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">₹{service.startingPrice}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Cars Section (When Searching) */}
          {matchingCars.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5" />
                Vehicles We Service
              </div>
              <div className="grid grid-cols-2 gap-2">
                {matchingCars.map((car, idx) => (
                  <Link
                    key={idx}
                    href={`/select-car?brand=${encodeURIComponent(car.brand)}&model=${encodeURIComponent(car.model)}`}
                    onClick={onClose}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/50 transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-800">{car.brand} {car.model}</div>
                      <div className="text-xs text-slate-500">{car.fuel}</div>
                    </div>
                    <span className="text-xs text-rose-600 font-semibold">Select</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {matchingFaqs.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <div className="space-y-2">
                {matchingFaqs.map(faq => (
                  <div key={faq.id} className="p-2.5 rounded-xl bg-slate-50 text-xs">
                    <div className="font-semibold text-slate-800 mb-1">{faq.question}</div>
                    <p className="text-slate-600 line-clamp-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Articles */}
          {matchingBlogs.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Car Maintenance Articles
              </div>
              <div className="space-y-1.5">
                {matchingBlogs.map(blog => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    onClick={onClose}
                    className="block p-2.5 rounded-xl hover:bg-slate-50 group"
                  >
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-rose-600">{blog.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1">{blog.excerpt}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Quick tips: Search for <strong className="text-slate-700">AC Gas</strong>, <strong className="text-slate-700">Brakes</strong>, or <strong className="text-slate-700">Creta</strong></span>
          <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
