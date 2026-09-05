import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showTagline = false, variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link href="/" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Aerodynamic Shield Monogram Icon */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-md shadow-rose-600/20 group-hover:scale-105 transition-transform duration-300">
        {/* Sleek SVG emblem */}
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          {/* Outer aerodynamic speed crest */}
          <path
            d="M8 12C8 12 18 8 24 8C30 8 40 12 40 12C40 28 24 40 24 40C24 40 8 28 8 12Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Dynamic "S" curve line */}
          <path
            d="M17 19C17 16.5 20.5 15.5 24 15.5C28 15.5 30 17.5 29 20C28 22.5 22 23.5 20 26C18 28.5 21 31.5 25 31.5C28.5 31.5 31 29.5 31 29.5"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Precision Speed Notch */}
          <circle cx="33" cy="16" r="2" fill="#FDE047" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl font-black tracking-tight text-rose-600 font-sans">
            SR
          </span>
          <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            MULTI CAR TECH
          </span>
        </div>
        {showTagline && (
          <span className={`text-[10px] font-medium tracking-wider uppercase mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Complete Car Care • One Trusted Place
          </span>
        )}
      </div>
    </Link>
  );
}
