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
    <Link href="/" className={`inline-flex items-center gap-3 group select-none whitespace-nowrap ${className}`}>
      {/* 3D High-Gloss Automotive Emblem Crest */}
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 p-1 border-2 border-rose-600/40 shadow-xl shadow-rose-900/30 group-hover:scale-105 group-hover:border-rose-500 group-hover:shadow-rose-600/40 transition-all duration-300">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Rich Crimson Performance Gradient */}
            <linearGradient id="crestRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="45%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>

            {/* Polished Chrome Silver Gradient */}
            <linearGradient id="crestChrome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Metallic Gold Diagnostic Pulse */}
            <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Specular Light Reflection */}
            <linearGradient id="glassSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Chrome Bezel */}
          <path
            d="M32 4L54 13V34C54 46.5 44.5 54.5 32 59C19.5 54.5 10 46.5 10 34V13L32 4Z"
            fill="url(#crestRed)"
            stroke="url(#crestChrome)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Top Glass Reflection Sheen */}
          <path
            d="M32 6L51 14.5V28C44 26 20 26 13 28V14.5L32 6Z"
            fill="url(#glassSheen)"
          />

          {/* Inner Obsidian Carbon Recess */}
          <path
            d="M32 10L48 17V33C48 42.5 40.5 48.5 32 52C23.5 48.5 16 42.5 16 33V17L32 10Z"
            fill="#090d16"
            stroke="#1e293b"
            strokeWidth="1.2"
          />

          {/* Sculpted "S" Speed Wing (Left) */}
          <path
            d="M21 22C21 18 26 16.5 31 16.5C36 16.5 40 18.5 39.5 22C39 25 33 26.5 29 28.5C25 30.5 23.5 33.5 25 37C26.5 40 31 41 36 39.5C39 38.5 41 37 41 37"
            stroke="url(#crestChrome)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bold "R" Performance Strut (Right) */}
          <path
            d="M31 20V40M31 29H38C41 29 43 27 43 24.5C43 22 41 20 38 20H31M36 29L43 40"
            stroke="url(#crestRed)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Precision German Diagnostic Telemetry Laser Pulse */}
          <circle cx="32" cy="24.5" r="2.8" fill="url(#crestGold)" />
          <circle cx="32" cy="24.5" r="5.5" stroke="url(#crestGold)" strokeWidth="1" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline leading-none">
          <span className="text-2xl font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 font-sans">
            SR
          </span>
          <span className={`text-lg font-black tracking-wider uppercase ml-1.5 font-sans ${isDark ? 'text-white' : 'text-slate-950'}`}>
            MULTI CAR TECH
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1 leading-none">
            <span className="text-[9px] font-extrabold tracking-[0.16em] uppercase text-rose-600">
              GERMAN DIAGNOSTICS
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400"></span>
            <span className={`text-[9px] font-bold tracking-[0.14em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              CAR CARE
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
