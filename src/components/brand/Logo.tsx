'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  const badgeSizes = {
    sm: { dimension: 44, className: 'w-10 h-10 sm:w-11 sm:h-11' },
    md: { dimension: 64, className: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16' },
    lg: { dimension: 96, className: 'w-20 h-20 sm:w-24 sm:h-24' }
  };

  const titleSizes = {
    sm: { sr: 'text-xl', text: 'text-sm sm:text-base' },
    md: { sr: 'text-2xl sm:text-[26px]', text: 'text-base sm:text-lg md:text-xl' },
    lg: { sr: 'text-3xl sm:text-4xl', text: 'text-xl sm:text-2xl' }
  };

  const currentBadge = badgeSizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none whitespace-nowrap py-1 ${className}`}
      title="SR Multi Car Tech — Your Drive Our Priority"
    >
      {/* Official Master Emblem (User's Exact Custom Badge) */}
      <div
        className={`relative ${currentBadge.className} flex-shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_14px_rgba(225,29,72,0.25)]`}
      >
        <Image
          src="/images/sr-logo.png"
          alt="SR Multi Car Tech Official Logo"
          width={currentBadge.dimension}
          height={currentBadge.dimension}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* Flawlessly Aligned Brand Typography */}
      <div className="flex flex-col justify-center">
        {/* Main Brand Name Line */}
        <div className="flex items-center leading-tight">
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

        {/* Secondary Sub-Tagline from Official Logo */}
        {showTagline && (
          <div className="flex items-center gap-1 sm:gap-1.5 mt-1 leading-none">
            <span className="text-[8.5px] sm:text-[9.5px] font-black tracking-[0.14em] uppercase text-rose-600">
              SERVICE
            </span>
            <span className="text-slate-300 text-[9px]">•</span>
            <span
              className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.12em] uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              REPAIR
            </span>
            <span className="text-slate-300 text-[9px]">•</span>
            <span className="text-[8.5px] sm:text-[9.5px] font-black tracking-[0.14em] uppercase text-rose-600">
              DIAGNOSIS
            </span>
            <span className="text-slate-300 text-[9px]">•</span>
            <span
              className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.12em] uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              CARE
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
