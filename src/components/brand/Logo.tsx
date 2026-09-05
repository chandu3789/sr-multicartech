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

  const emblemSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl'
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3.5 group select-none whitespace-nowrap py-1 ${className}`}
      title="SR Multi Car Tech — Complete Car Care & German Diagnostics"
    >
      {/* 3D Sculpted Metallic Chrome & Ruby 'SR' Master Emblem */}
      <div
        className={`relative ${emblemSizes[size]} w-auto aspect-[790/348] flex-shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_3px_10px_rgba(225,29,72,0.25)]`}
      >
        <Image
          src="/images/sr-emblem.png"
          alt="SR Multi Car Tech"
          width={110}
          height={48}
          priority
          className="h-full w-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* Subtle Vertical Hairline Separator */}
      <div className={`hidden sm:block w-[1.5px] h-8 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

      {/* Brand Typography (Cohesive & Cleanly Aligned) */}
      <div className="flex flex-col justify-center">
        {/* Primary Wordmark */}
        <div className="flex items-center leading-tight">
          <span
            className={`${textSizes[size]} font-black tracking-wider uppercase font-sans transition-colors duration-200 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            MULTI CAR TECH
          </span>
        </div>

        {/* Secondary Sub-Tagline */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5 leading-none">
            <span className="text-[9px] sm:text-[9.5px] font-black tracking-[0.16em] uppercase text-rose-600">
              GERMAN DIAGNOSTICS
            </span>
            <span className="w-1 h-1 rounded-full bg-rose-500 flex-shrink-0" />
            <span
              className={`text-[9px] sm:text-[9.5px] font-bold tracking-[0.12em] uppercase ${
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
