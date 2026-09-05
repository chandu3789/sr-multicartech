'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showTagline = true, variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* High-End Precision Automotive Emblem */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-1 border border-slate-700/80 shadow-lg shadow-rose-950/30 group-hover:scale-105 group-hover:border-rose-500/50 transition-all duration-300">
        {/* Aerodynamic Speed SVG Mark */}
        <svg
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Crimson Red Metallic Gradient */}
            <linearGradient id="srCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>

            {/* Chrome Silver Gradient */}
            <linearGradient id="srSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Glowing Amber Telemetry */}
            <linearGradient id="srGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Outer Hexagonal Aerodynamic Shield */}
          <path
            d="M28 4L48 12V30C48 41.5 39.5 48.5 28 52C16.5 48.5 8 41.5 8 30V12L28 4Z"
            fill="url(#srCrimson)"
            stroke="url(#srSilver)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="opacity-95"
          />

          {/* Internal Precision Bevel */}
          <path
            d="M28 8L44 14.5V29.5C44 38.5 37 44.5 28 47.5C19 44.5 12 38.5 12 29.5V14.5L28 8Z"
            fill="#090d16"
            stroke="#1e293b"
            strokeWidth="1"
          />

          {/* Stylized "S" Dynamic Speed Wing */}
          <path
            d="M19 20C19 16.5 23 15 28 15C33 15 36.5 17 36 20.5C35.5 23.5 29.5 24.5 26.5 26.5C23.5 28.5 22 31 23 34C24 37 28 38 33 37C35.5 36.5 37 35 37 35"
            stroke="url(#srSilver)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stylized "R" Aerodynamic Strut */}
          <path
            d="M28 19V36M28 27H34C36.5 27 38 25.5 38 23C38 20.5 36.5 19 34 19H28M32 27L38 36"
            stroke="url(#srCrimson)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central German Diagnostic Telemetry Pulse Point */}
          <circle cx="28" cy="23" r="2.2" fill="url(#srGold)" />
          <circle cx="28" cy="23" r="4.5" stroke="url(#srGold)" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-700 font-sans">
            SR
          </span>
          <span className={`text-base sm:text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            MULTI CAR TECH
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              German Diagnostics & Car Care
            </span>
            <span className="w-1 h-1 rounded-full bg-rose-600"></span>
          </div>
        )}
      </div>
    </Link>
  );
}
