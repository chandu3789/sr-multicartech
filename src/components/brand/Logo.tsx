'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  showTagline = true,
  variant = 'light',
  size = 'md'
}: LogoProps) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-[50px] sm:h-[50px]',
    lg: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  const titleSizes = {
    sm: { sr: 'text-xl', text: 'text-sm' },
    md: { sr: 'text-2xl sm:text-[25px]', text: 'text-base sm:text-[18px]' },
    lg: { sr: 'text-3xl sm:text-4xl', text: 'text-xl sm:text-2xl' }
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 sm:gap-3.5 group select-none whitespace-nowrap py-1 ${className}`}
      title="SR Multi Car Tech — Complete Car Care & German Diagnostics"
    >
      {/* Precision 3D High-Gloss Automotive Crest Emblem */}
      <div
        className={`relative ${iconSizes[size]} flex-shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(225,29,72,0.22)]`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Polished Platinum Chrome Gradients */}
            <linearGradient id="sr-chrome-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="75%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id="sr-chrome-bevel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="40%" stopColor="#64748b" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Performance Candy Crimson Racing Red */}
            <linearGradient id="sr-candy-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="35%" stopColor="#f43f5e" />
              <stop offset="70%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>

            <linearGradient id="sr-ruby-bevel" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4c0519" />
              <stop offset="50%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#fda4af" />
            </linearGradient>

            {/* Obsidian Carbon Core Background */}
            <radialGradient id="sr-carbon-bg" cx="50%" cy="36%" r="65%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="45%" stopColor="#0f172a" />
              <stop offset="85%" stopColor="#020617" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            {/* Precision German Diagnostic Gold Pulse */}
            <linearGradient id="sr-gold-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Specular Glass Domed Reflection */}
            <linearGradient id="sr-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Monogram Chrome Facet (Left side light, Right side shadow) */}
            <linearGradient id="sr-facet-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="sr-facet-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* 1. Sculpted Outer Chrome Shield Frame */}
          <path
            d="M 50,2 C 78,2 93,13 95,29 C 95,62 70,85 50,98 C 30,85 5,62 5,29 C 7,13 22,2 50,2 Z"
            fill="url(#sr-chrome-light)"
            stroke="url(#sr-chrome-bevel)"
            strokeWidth="1.6"
          />

          {/* 2. Candy Crimson Accent Channel */}
          <path
            d="M 50,6.5 C 75,6.5 88,16 90,30.5 C 90,59 67.5,79.5 50,92 C 32.5,79.5 10,59 10,30.5 C 12,16 25,6.5 50,6.5 Z"
            fill="url(#sr-candy-red)"
            stroke="url(#sr-ruby-bevel)"
            strokeWidth="0.8"
          />

          {/* 3. Inner Polished Titanium Stepped Rim */}
          <path
            d="M 50,9.5 C 72,9.5 83.5,18 85.5,31.5 C 85.5,56.5 65,75.5 50,87 C 35,75.5 14.5,56.5 14.5,31.5 C 16.5,18 28,9.5 50,9.5 Z"
            fill="url(#sr-chrome-bevel)"
          />

          {/* 4. Deep Obsidian Carbon Plate (Recessed Interior) */}
          <path
            d="M 50,11.5 C 70,11.5 80,19.5 82,32.5 C 82,54.5 63,72.5 50,83 C 37,72.5 18,54.5 18,32.5 C 20,19.5 30,11.5 50,11.5 Z"
            fill="url(#sr-carbon-bg)"
            stroke="#1e293b"
            strokeWidth="0.8"
          />

          {/* Carbon Micro-Weave Diagnostic Grid Pattern (Subtle) */}
          <g opacity="0.12" stroke="#ffffff" strokeWidth="0.5">
            <line x1="26" y1="20" x2="74" y2="20" />
            <line x1="22" y1="30" x2="78" y2="30" />
            <line x1="22" y1="40" x2="78" y2="40" />
            <line x1="24" y1="50" x2="76" y2="50" />
            <line x1="28" y1="60" x2="72" y2="60" />
            <line x1="34" y1="70" x2="66" y2="70" />
          </g>

          {/* 5. Precision German Engineering Tri-Color Telemetry Bar (Top Summit) */}
          <rect x="40.5" y="15" width="5.5" height="2.2" rx="1.1" fill="#0f172a" stroke="#334155" strokeWidth="0.4" />
          <rect x="47.2" y="15" width="5.6" height="2.2" rx="1.1" fill="#e11d48" />
          <rect x="54" y="15" width="5.5" height="2.2" rx="1.1" fill="#f59e0b" />

          {/* 6. Iconic Master 'SR' Velocity Monogram */}
          {/* --- Letter 'S' (Aerodynamic High-Speed Wing) --- */}
          {/* S Upper Bar & Sweep */}
          <path
            d="M 27,27 L 49,27 L 44,34.5 L 34,34.5 C 31,34.5 29,36.5 29,39.5 C 29,42.5 32,44.5 36,45.5 L 42,47 C 48,49 52,53 52,59 C 52,66.5 45,71.5 36,71.5 L 23,71.5 L 28,64 L 36,64 C 39.5,64 42,62 42,59 C 42,56 39,54 35,53 L 29,51 C 23.5,49 19.5,45 19.5,39.5 C 19.5,32 25,27 34,27 Z"
            fill="url(#sr-facet-light)"
            stroke="#ffffff"
            strokeWidth="0.6"
          />
          {/* S Inner Red Shadow Inlay */}
          <path
            d="M 28,31 L 43,31 L 40,34.5 L 34,34.5 C 30,34.5 28.5,36.5 28.5,39 C 28.5,40.5 29.5,41.5 31,42.2 L 29,44 C 27,42.5 25.5,40.5 25.5,38.5 C 25.5,34.5 28.5,31.5 33.5,31.5 Z"
            fill="url(#sr-candy-red)"
            opacity="0.85"
          />

          {/* --- Letter 'R' (Precision German Performance Strut) --- */}
          {/* R Vertical Spine */}
          <path
            d="M 52,27 L 60.5,27 L 60.5,71.5 L 52,71.5 Z"
            fill="url(#sr-facet-light)"
            stroke="#ffffff"
            strokeWidth="0.6"
          />
          {/* R Sculpted Upper Loop */}
          <path
            d="M 60.5,27 L 72,27 C 78.5,27 82.5,31 82.5,38 C 82.5,44.5 78.5,48.5 72,48.5 L 60.5,48.5 Z M 60.5,34.5 L 70.5,34.5 C 72.5,34.5 73.5,35.5 73.5,38 C 73.5,40.5 72.5,41.5 70.5,41.5 L 60.5,41.5 Z"
            fill="url(#sr-candy-red)"
            stroke="url(#sr-chrome-light)"
            strokeWidth="0.8"
          />
          {/* R Dynamic Forward Power Leg */}
          <path
            d="M 64.5,46.5 L 73.5,46.5 L 81.5,71.5 L 72.5,71.5 L 66,51.5 L 60.5,51.5 Z"
            fill="url(#sr-candy-red)"
            stroke="url(#sr-chrome-light)"
            strokeWidth="0.8"
          />

          {/* 7. Precision Laser Diagnostic Pulse (German Tech Golden Node) */}
          <circle cx="50" cy="48" r="4.2" fill="url(#sr-gold-pulse)" opacity="0.3" />
          <polygon
            points="50,43.5 51.8,47 55.5,48 51.8,49 50,52.5 48.2,49 44.5,48 48.2,47"
            fill="url(#sr-gold-pulse)"
          />
          <circle cx="50" cy="48" r="1.2" fill="#ffffff" />

          {/* 8. Automotive High-Gloss Curved Glass Sheen (Dome Reflection) */}
          <path
            d="M 50,11.5 C 70,11.5 80,19.5 82,32.5 C 82,41.5 75,47.5 50,47.5 C 25,47.5 18,41.5 18,32.5 C 20,19.5 30,11.5 50,11.5 Z"
            fill="url(#sr-sheen)"
          />
        </svg>
      </div>

      {/* Flawlessly Aligned Brand Typography */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Name Line */}
        <div className="flex items-center leading-none">
          <span
            className={`${titleSizes[size].sr} font-black tracking-tight text-rose-600 font-sans`}
          >
            SR
          </span>
          <span
            className={`${titleSizes[size].text} font-black tracking-wider uppercase ml-1.5 sm:ml-2 font-sans transition-colors duration-200 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            MULTI CAR TECH
          </span>
        </div>

        {/* Secondary Credentials Tagline (Perfect Baseline & Letter-Spacing) */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1.5 leading-none">
            <span className="text-[9px] sm:text-[9.5px] font-black tracking-[0.18em] uppercase text-rose-600">
              GERMAN DIAGNOSTICS
            </span>
            <span className="w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
            <span
              className={`text-[9px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              CAR CARE
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
