'use client';

import React from 'react';

interface CarBrandLogoProps {
  brandId?: string;
  brandName?: string;
  className?: string;
  size?: number;
}

export default function CarBrandLogo({
  brandId,
  brandName = '',
  className = 'w-8 h-8',
  size
}: CarBrandLogoProps) {
  // Normalize brand key
  const key = (brandId || brandName)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');

  const style = size ? { width: size, height: size } : undefined;

  switch (true) {
    // 1. Mercedes-Benz: 3-Pointed Star in Chrome Ring
    case key.includes('mercedes') || key === 'mb':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mb-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="mb-star-l" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="mb-star-d" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="45" stroke="url(#mb-silver)" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="41.5" stroke="#334155" strokeWidth="1" opacity="0.4" />
          {/* 3-Pointed Star: Top Point */}
          <polygon points="50,10 50,50 43,47" fill="url(#mb-star-l)" />
          <polygon points="50,10 50,50 57,47" fill="url(#mb-star-d)" />
          {/* Bottom Right Point */}
          <polygon points="84.6,70 50,50 51,43" fill="url(#mb-star-l)" />
          <polygon points="84.6,70 50,50 56,54" fill="url(#mb-star-d)" />
          {/* Bottom Left Point */}
          <polygon points="15.4,70 50,50 44,54" fill="url(#mb-star-l)" />
          <polygon points="15.4,70 50,50 49,43" fill="url(#mb-star-d)" />
          {/* Center Point */}
          <circle cx="50" cy="50" r="3.5" fill="#cbd5e1" />
        </svg>
      );

    // 2. Maruti Suzuki: Iconic Geometric 'S' Emblem
    case key.includes('suzuki') || key.includes('maruti') || key === 'ms':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="suzuki-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
          </defs>
          {/* Top Bar of S */}
          <path
            d="M20,24 L78,24 L60,44 L32,44 L58,44 L70,30 L80,30 L80,20 L16,20 Z"
            fill="url(#suzuki-red)"
          />
          {/* Central Slanted Body of S */}
          <polygon points="20,24 42,24 80,76 58,76" fill="url(#suzuki-red)" />
          {/* Bottom Bar of S */}
          <path
            d="M80,76 L22,76 L40,56 L68,56 L42,56 L30,70 L20,70 L20,80 L84,80 Z"
            fill="url(#suzuki-red)"
          />
        </svg>
      );

    // 3. Hyundai: Slanted Oval 'H'
    case key.includes('hyundai') || key === 'hy':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hy-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002c5f" />
              <stop offset="100%" stopColor="#02418a" />
            </linearGradient>
          </defs>
          {/* Slanted Ellipse Ring */}
          <ellipse
            cx="50"
            cy="50"
            rx="44"
            ry="33"
            transform="rotate(-15 50 50)"
            stroke="url(#hy-blue)"
            strokeWidth="6"
            fill="none"
          />
          {/* Stylized Slanted 'H' */}
          <path
            d="M33,31 C36,44 38,58 35,69 M65,31 C62,43 64,57 67,69 M36,50 C46,47 54,49 64,50"
            stroke="url(#hy-blue)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      );

    // 4. Tata Motors: Blue Ring with Fluid 'T' Wings
    case key.includes('tata') || key === 'ta':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tata-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f2b6e" />
            </linearGradient>
          </defs>
          {/* Outer Oval Ring */}
          <ellipse cx="50" cy="50" rx="45" ry="34" stroke="url(#tata-grad)" strokeWidth="6" fill="none" />
          {/* Iconic Tata Twin Curved 'T' Branches */}
          <path
            d="M26,38 C38,40 46,48 48,65 C48,50 42,40 26,38 Z"
            fill="url(#tata-grad)"
          />
          <path
            d="M74,38 C62,40 54,48 52,65 C52,50 58,40 74,38 Z"
            fill="url(#tata-grad)"
          />
          {/* Center Vertical Stem */}
          <path d="M47,42 L53,42 L52,68 L48,68 Z" fill="url(#tata-grad)" />
        </svg>
      );

    // 5. Honda: Winged Trapeze 'H'
    case key.includes('honda') || key === 'ho':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="honda-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          {/* Rounded Trapeze Shield */}
          <path
            d="M20,18 L80,18 C85,18 88,22 86,27 L74,80 C73,84 69,87 65,87 L35,87 C31,87 27,84 26,80 L14,27 C12,22 15,18 20,18 Z"
            stroke="url(#honda-silver)"
            strokeWidth="5"
            fill="none"
          />
          {/* Broad Winged 'H' */}
          <path
            d="M28,26 L36,78 M64,78 L72,26 M32,49 L68,49"
            stroke="url(#honda-silver)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      );

    // 6. Toyota: 3 Interlocking Ellipses
    case key.includes('toyota') || key === 'to':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="toyota-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>
          </defs>
          {/* Outer Ring */}
          <ellipse cx="50" cy="50" rx="44" ry="34" stroke="url(#toyota-red)" strokeWidth="6" fill="none" />
          {/* Inner Horizontal Ellipse */}
          <ellipse cx="50" cy="38" rx="26" ry="12" stroke="url(#toyota-red)" strokeWidth="5.5" fill="none" />
          {/* Inner Vertical Ellipse */}
          <ellipse cx="50" cy="50" rx="13" ry="29" stroke="url(#toyota-red)" strokeWidth="5.5" fill="none" />
        </svg>
      );

    // 7. Mahindra: Twin Peaks Winged Emblem
    case key.includes('mahindra') || key === 'ma':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="m-peak" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          {/* Left Wing Peak */}
          <path
            d="M18,68 C22,46 34,26 47,20 L47,76 C37,74 27,72 18,68 Z"
            fill="url(#m-peak)"
          />
          {/* Right Wing Peak */}
          <path
            d="M82,68 C78,46 66,26 53,20 L53,76 C63,74 73,72 82,68 Z"
            fill="url(#m-peak)"
          />
          {/* Central Dynamic Groove */}
          <line x1="50" y1="18" x2="50" y2="82" stroke="#ffffff" strokeWidth="3" />
        </svg>
      );

    // 8. Kia: Modern Connected Wordmark
    case key.includes('kia') || key === 'ki':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* New Modern Continuous KIA Stroke */}
          <path
            d="M14,68 L14,32 M14,48 L32,32 L46,68 M46,32 L46,68 M46,32 L78,68 M78,32 L78,68 M62,54 L86,54"
            stroke="#0f172a"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 9. Volkswagen: 'V' over 'W' in Circle
    case key.includes('volkswagen') || key === 'vw':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vw-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="45" stroke="url(#vw-blue)" strokeWidth="5.5" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="url(#vw-blue)" strokeWidth="1.5" fill="none" />
          {/* Top 'V' */}
          <polyline points="28,26 50,56 72,26" stroke="url(#vw-blue)" strokeWidth="5.5" strokeLinecap="round" />
          {/* Bottom 'W' */}
          <polyline points="20,44 38,82 50,60 62,82 80,44" stroke="url(#vw-blue)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    // 10. BMW: Iconic Quad Blue & White Roundel
    case key.includes('bmw'):
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Silver Rim */}
          <circle cx="50" cy="50" r="47" fill="#0f172a" stroke="#94a3b8" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="32" fill="#ffffff" />
          {/* BMW Quadrants */}
          <path d="M50,18 A32,32 0 0,1 82,50 L50,50 Z" fill="#0284c7" />
          <path d="M50,50 L18,50 A32,32 0 0,1 50,18 Z" fill="#ffffff" />
          <path d="M50,50 L50,82 A32,32 0 0,1 18,50 Z" fill="#0284c7" />
          <path d="M50,50 L82,50 A32,32 0 0,1 50,82 Z" fill="#ffffff" />
          {/* Center Cross Divider */}
          <line x1="50" y1="18" x2="50" y2="82" stroke="#0f172a" strokeWidth="2" />
          <line x1="18" y1="50" x2="82" y2="50" stroke="#0f172a" strokeWidth="2" />
          {/* Letters BMW text arc styling */}
          <text x="50" y="14" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
            B M W
          </text>
        </svg>
      );

    // 11. Audi: Four Interlocking Silver Rings
    case key.includes('audi') || key === 'au':
      return (
        <svg
          viewBox="0 0 140 70"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="audi-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          {/* Ring 1 */}
          <circle cx="28" cy="35" r="22" stroke="url(#audi-ring)" strokeWidth="4.5" />
          {/* Ring 2 */}
          <circle cx="56" cy="35" r="22" stroke="url(#audi-ring)" strokeWidth="4.5" />
          {/* Ring 3 */}
          <circle cx="84" cy="35" r="22" stroke="url(#audi-ring)" strokeWidth="4.5" />
          {/* Ring 4 */}
          <circle cx="112" cy="35" r="22" stroke="url(#audi-ring)" strokeWidth="4.5" />
        </svg>
      );

    // 12. Skoda: Winged Arrow in Green Ring
    case key.includes('skoda') || key === 'sk':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skoda-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="45" stroke="url(#skoda-green)" strokeWidth="6" fill="none" />
          {/* Winged Arrow Head */}
          <polygon points="50,22 68,52 50,44 32,52" fill="url(#skoda-green)" />
          {/* Feathered Wings */}
          <path d="M36,54 C42,60 58,60 64,54 L50,78 Z" fill="url(#skoda-green)" />
          {/* Eye of Arrow */}
          <circle cx="50" cy="37" r="4" fill="#ffffff" />
        </svg>
      );

    // 13. Renault: Geometric Diamond (Losange)
    case key.includes('renault') || key === 're':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="renault-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          {/* Outer Diamond */}
          <polygon
            points="50,12 82,50 50,88 18,50"
            stroke="url(#renault-silver)"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* Inner Diamond Open Center */}
          <polygon
            points="50,30 66,50 50,70 34,50"
            fill="none"
            stroke="url(#renault-silver)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 14. MG Motor: Octagon with Classic MG Lettering
    case key.includes('mg'):
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red Octagon */}
          <polygon
            points="28,14 72,14 88,30 88,70 72,86 28,86 12,70 12,30"
            fill="#be123c"
            stroke="#9f1239"
            strokeWidth="3"
          />
          <polygon
            points="30,17 70,17 85,32 85,68 70,83 30,83 15,68 15,32"
            fill="none"
            stroke="#fecdd3"
            strokeWidth="2"
          />
          {/* Bold MG Serif text */}
          <text
            x="50"
            y="61"
            fill="#ffffff"
            fontSize="34"
            fontWeight="900"
            fontFamily="serif"
            textAnchor="middle"
            letterSpacing="-1"
          >
            MG
          </text>
        </svg>
      );

    // 15. Nissan: Chrome Circle with Horizontal Bar
    case key.includes('nissan') || key === 'ni':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nissan-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          {/* Circular Chrome Band */}
          <circle cx="50" cy="50" r="42" stroke="url(#nissan-chrome)" strokeWidth="6" fill="none" />
          {/* Central Horizontal Bar */}
          <rect x="8" y="42" width="84" height="16" rx="2" fill="#0f172a" stroke="url(#nissan-chrome)" strokeWidth="2.5" />
          <text x="50" y="54" fill="#f8fafc" fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="2" fontFamily="sans-serif">
            NISSAN
          </text>
        </svg>
      );

    // 16. Ford: Royal Blue Oval with Script
    case key.includes('ford') || key === 'fd':
      return (
        <svg
          viewBox="0 0 110 70"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ford-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
          </defs>
          {/* Outer Chrome Border */}
          <ellipse cx="55" cy="35" rx="51" ry="30" fill="url(#ford-blue)" stroke="#e2e8f0" strokeWidth="3" />
          <ellipse cx="55" cy="35" rx="47" ry="26" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.6" />
          {/* Script Wordmark */}
          <text
            x="55"
            y="43"
            fill="#ffffff"
            fontSize="26"
            fontStyle="italic"
            fontWeight="900"
            fontFamily="cursive, Georgia, serif"
            textAnchor="middle"
          >
            Ford
          </text>
        </svg>
      );

    // 17. Jeep: Bold 7-Slot Grille Iconic Mark
    case key.includes('jeep') || key === 'jp':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 7 Vertical Grille Slots */}
          <g fill="#0f172a">
            <rect x="14" y="24" width="7" height="28" rx="3.5" />
            <rect x="25" y="24" width="7" height="28" rx="3.5" />
            <rect x="36" y="24" width="7" height="28" rx="3.5" />
            <rect x="47" y="24" width="7" height="28" rx="3.5" />
            <rect x="58" y="24" width="7" height="28" rx="3.5" />
            <rect x="69" y="24" width="7" height="28" rx="3.5" />
            <rect x="80" y="24" width="7" height="28" rx="3.5" />
          </g>
          {/* Round Headlights */}
          <circle cx="8" cy="38" r="5" fill="#e11d48" />
          <circle cx="92" cy="38" r="5" fill="#e11d48" />
          {/* Bold JEEP Typography */}
          <text x="50" y="78" fill="#0f172a" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">
            Jeep
          </text>
        </svg>
      );

    // 18. Volvo: Iron Mark Circle with Diagonal Arrow
    case key.includes('volvo') || key === 'vo':
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="volvo-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          {/* Main Circle */}
          <circle cx="46" cy="54" r="34" stroke="url(#volvo-silver)" strokeWidth="6" />
          {/* Diagonal Arrow at Upper Right (2 o'clock) */}
          <line x1="68" y1="32" x2="88" y2="12" stroke="url(#volvo-silver)" strokeWidth="6" strokeLinecap="round" />
          <polyline points="72,12 88,12 88,28" stroke="url(#volvo-silver)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Horizontal Central Blue Bar */}
          <rect x="12" y="47" width="68" height="14" fill="#1e3a8a" rx="2" />
          <text x="46" y="58" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="sans-serif">
            VOLVO
          </text>
        </svg>
      );

    // 19. Land Rover: British Racing Green Oval
    case key.includes('land') || key.includes('rover') || key === 'lr':
      return (
        <svg
          viewBox="0 0 110 70"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="lr-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>
          {/* Deep Green Oval */}
          <ellipse cx="55" cy="35" rx="51" ry="29" fill="url(#lr-green)" stroke="#f1f5f9" strokeWidth="2.5" />
          <ellipse cx="55" cy="35" rx="47" ry="25" fill="none" stroke="#fcd34d" strokeWidth="1" opacity="0.6" />
          {/* Two-Line Typography */}
          <text x="55" y="32" fill="#ffffff" fontSize="10.5" fontWeight="900" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">
            LAND
          </text>
          <text x="55" y="46" fill="#ffffff" fontSize="10.5" fontWeight="900" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">
            ROVER
          </text>
        </svg>
      );

    // 20. Jaguar: Sleek Leaping Cat Silhouette
    case key.includes('jaguar') || key === 'jag':
      return (
        <svg
          viewBox="0 0 120 70"
          className={className}
          style={style}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="jag-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          {/* Leaping Jaguar Silhouette Curve */}
          <path
            d="M10,48 C20,44 26,38 35,36 C44,34 52,38 60,34 C68,30 75,22 84,20 C92,18 102,22 108,18 C110,17 114,20 110,24 C104,27 96,28 90,32 C84,36 80,44 72,46 C64,48 56,44 48,46 C40,48 34,54 26,56 C18,58 10,54 10,48 Z"
            fill="url(#jag-silver)"
          />
          {/* Foreleg Extension */}
          <path d="M86,34 L102,46 C104,47 106,46 104,44 L92,32 Z" fill="url(#jag-silver)" />
          {/* Hindleg Extension */}
          <path d="M30,48 L18,62 C16,64 14,62 16,60 L26,44 Z" fill="url(#jag-silver)" />
        </svg>
      );

    // 21. Chevrolet: Golden Bowtie Cross
    case key.includes('chevrolet') || key === 'ch':
      return (
        <svg
          viewBox="0 0 110 70"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chevy-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>
          {/* Horizontal Bar with angled edges */}
          <polygon
            points="12,28 98,28 94,42 8,42"
            fill="url(#chevy-gold)"
            stroke="#451a03"
            strokeWidth="1.5"
          />
          {/* Vertical Cross Bar */}
          <polygon
            points="42,16 68,16 64,54 38,54"
            fill="url(#chevy-gold)"
            stroke="#451a03"
            strokeWidth="1.5"
          />
          {/* Inner Textured Grid lines */}
          <line x1="20" y1="35" x2="90" y2="35" stroke="#fef9c3" strokeWidth="1" opacity="0.6" />
        </svg>
      );

    // 22. Fiat: Ruby Red Circular Crest
    case key.includes('fiat'):
      return (
        <svg
          viewBox="0 0 100 100"
          className={className}
          style={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fiat-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#881337" />
            </linearGradient>
          </defs>
          {/* Red Circle with Chrome Ring */}
          <circle cx="50" cy="50" r="44" fill="url(#fiat-ruby)" stroke="#e2e8f0" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#fda4af" strokeWidth="1" opacity="0.5" />
          {/* Condensed FIAT Typography */}
          <text
            x="50"
            y="59"
            fill="#ffffff"
            fontSize="24"
            fontWeight="900"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="2"
          >
            FIAT
          </text>
        </svg>
      );

    // Fallback: Elegant Metallic Automotive Monogram
    default:
      return (
        <div
          style={style}
          className={`${className} rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 text-white font-black text-xs flex items-center justify-center shadow-sm border border-slate-700`}
        >
          {brandName.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
