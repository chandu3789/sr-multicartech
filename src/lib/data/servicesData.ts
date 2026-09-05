import { ServiceCategory, ServicePackageItem } from './types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'periodic-services',
    name: 'Periodic Car Service',
    slug: 'periodic-services',
    shortDesc: 'Regular scheduled maintenance & full engine health checks.',
    iconName: 'Wrench',
    startingPrice: 1499,
    badge: 'MOST POPULAR'
  },
  {
    id: 'ac-service-repair',
    name: 'AC Service & Repair',
    slug: 'ac-service-repair',
    shortDesc: 'Gas refill, deep evaporator clean, filter renewal & chilling performance.',
    iconName: 'Wind',
    startingPrice: 799,
    badge: 'SUMMER READY'
  },
  {
    id: 'batteries',
    name: 'Batteries',
    slug: 'batteries',
    shortDesc: 'Instant doorstep jumpstart, terminal testing & brand replacement.',
    iconName: 'Zap',
    startingPrice: 299
  },
  {
    id: 'tyres-wheel-care',
    name: 'Tyres & Wheel Care',
    slug: 'tyres-wheel-care',
    shortDesc: 'Precision 3D wheel alignment, balancing, rotation & tyre fitment.',
    iconName: 'CircleDot',
    startingPrice: 499
  },
  {
    id: 'denting-painting',
    name: 'Denting & Painting',
    slug: 'denting-painting',
    shortDesc: 'DuPont paint booth, seamless scratch removal & panel restoration.',
    iconName: 'Paintbrush',
    startingPrice: 799,
    badge: 'GRADE-A BOOTH'
  },
  {
    id: 'car-spa-cleaning',
    name: 'Car Spa & Detailing',
    slug: 'car-spa-cleaning',
    shortDesc: 'High-pressure foam wash, interior dry cleaning & 9H ceramic coating.',
    iconName: 'Sparkles',
    startingPrice: 699
  },
  {
    id: 'car-inspection',
    name: 'Car Inspection',
    slug: 'car-inspection',
    shortDesc: 'Pre-purchase vehicle evaluation, road trip check & OBD-II scanner.',
    iconName: 'FileCheck',
    startingPrice: 399
  },
  {
    id: 'windshield-lights',
    name: 'Windshield & Lights',
    slug: 'windshield-lights',
    shortDesc: 'AIS certified glass replacement, headlight restoration & LED retrofits.',
    iconName: 'Sun',
    startingPrice: 999
  },
  {
    id: 'suspension-brakes',
    name: 'Suspension & Brakes',
    slug: 'suspension-brakes',
    shortDesc: 'Brake pads renewal, disc facing, shockers & link rod replacements.',
    iconName: 'ShieldAlert',
    startingPrice: 899
  },
  {
    id: 'clutch-transmission',
    name: 'Clutch & Transmission',
    slug: 'clutch-transmission',
    shortDesc: 'Clutch plate overhaul, release bearing & synthetic transmission fluid.',
    iconName: 'Cog',
    startingPrice: 1299
  },
  {
    id: 'insurance-claims',
    name: 'Insurance & Claims',
    slug: 'insurance-claims',
    shortDesc: 'Cashless repairs, direct surveyor inspection & end-to-end filing.',
    iconName: 'FileText',
    startingPrice: 0,
    badge: 'CASHLESS'
  },
  {
    id: 'sos-roadside-assistance',
    name: 'SOS Roadside Assistance',
    slug: 'sos-roadside-assistance',
    shortDesc: '24/7 rapid dispatch: flat tyres, towing, fuel delivery & breakdown.',
    iconName: 'AlertTriangle',
    startingPrice: 499,
    badge: '24/7 LIVE'
  }
];

export const SERVICE_PACKAGES: ServicePackageItem[] = [
  // Periodic Services
  {
    id: 'srv-comprehensive',
    slug: 'comprehensive-car-service',
    categoryId: 'periodic-services',
    categoryName: 'Periodic Car Service',
    title: 'Comprehensive Car Service',
    tagline: 'Complete preventive maintenance & multi-point diagnostic health check.',
    shortDesc: 'Full engine oil renewal with premium synthetic, OEM oil filter, air filter cleaning, 50-point safety inspection & brake tuning.',
    startingPrice: 3999,
    originalPrice: 5499,
    estimatedHours: 4.5,
    warranty: '1000 km or 1 Month Warranty',
    recommendedFrequency: 'Every 10,000 km or 1 Year',
    rating: 4.9,
    reviewsCount: 382,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Engine Oil Replacement (Castrol / Shell Premium Grade)',
      'OEM Oil Filter Replacement',
      'Engine Air Filter Cleaning / Replacement Check',
      'Cabin AC Filter Cleaning & Sanitization',
      'Front & Rear Brake Caliper Inspection & Pad Cleaning',
      'Coolant Top-Up (Up to 500ml)',
      'Brake Fluid & Power Steering Fluid Inspection',
      'Battery Voltage & Specific Gravity Diagnostic Scan',
      'Spark Plug / Glow Plug Inspection',
      'Underbody & Suspension Bushing Check',
      'Wiper Fluid Top-Up & Washer Nozzle Alignment',
      'Full Exterior Foam Wash & Interior Vacuuming',
      'Comprehensive 50-Point Digital Vehicle Health Report'
    ],
    whatsNotIncluded: [
      'Major mechanical parts replacement (if required, quoted separately)',
      'Engine flush additive (optional add-on)',
      'Wheel alignment and balancing weights'
    ]
  },
  {
    id: 'srv-basic-periodic',
    slug: 'basic-car-service',
    categoryId: 'periodic-services',
    categoryName: 'Periodic Car Service',
    title: 'Basic Car Service',
    tagline: 'Quick essential checkup & top-ups for active city driving.',
    shortDesc: 'Essential lube check, coolant top-up, battery health scan and exterior pressure wash for busy commuters.',
    startingPrice: 1499,
    originalPrice: 2199,
    estimatedHours: 2.0,
    warranty: '500 km or 15 Days Warranty',
    recommendedFrequency: 'Every 5,000 km or 6 Months',
    rating: 4.7,
    reviewsCount: 194,
    popular: false,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Engine Oil Level & Viscosity Inspection',
      'Coolant Level Top-up (Up to 250ml)',
      'Windshield Washer Fluid Top-up',
      'Brake Fluid Level Check',
      'Air Filter Dust Blowout',
      'Tyre Pressure & Tread Depth Inspection',
      'Full Exterior Jet Wash & Tyre Shine'
    ],
    whatsNotIncluded: [
      'Engine Oil Drain & Filter Replacement',
      'Brake Pad Disassembly',
      'Interior Deep Cleaning'
    ]
  },
  {
    id: 'srv-standard-periodic',
    slug: 'standard-car-service',
    categoryId: 'periodic-services',
    categoryName: 'Periodic Car Service',
    title: 'Standard Car Service',
    tagline: 'The smart balance of performance, lubrication & safety checks.',
    shortDesc: 'Engine oil replacement, oil filter change, coolant top up, brake pad inspection and thorough vacuuming.',
    startingPrice: 2499,
    originalPrice: 3499,
    estimatedHours: 3.0,
    warranty: '1000 km or 1 Month Warranty',
    recommendedFrequency: 'Every 8,000 km or 9 Months',
    rating: 4.8,
    reviewsCount: 280,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Engine Oil Replacement (Genuine Grade)',
      'OEM Oil Filter Replacement',
      'Air Filter Inspection & Blowout',
      'AC Filter Cleaning',
      'Coolant & Brake Fluid Top-up',
      'Battery Water & Terminal Greasing',
      'Front Brake Pad Inspection',
      'Underchassis Nut & Bolt Tightening',
      'Interior Vacuum & Exterior Foam Wash'
    ],
    whatsNotIncluded: [
      'Rear Drum Brake Inspection',
      'Spark Plug Replacement',
      'AC Gas Top-Up'
    ]
  },
  {
    id: 'srv-premium-periodic',
    slug: 'premium-synthetic-car-service',
    categoryId: 'periodic-services',
    categoryName: 'Periodic Car Service',
    title: 'Premium Synthetic Car Service',
    tagline: 'Flagship care with 100% Fully Synthetic Oil and 60-point inspection.',
    shortDesc: 'Designed for high-performance sedans and SUVs needing supreme thermal stability, friction reduction, and thorough mechanical care.',
    startingPrice: 5499,
    originalPrice: 7499,
    estimatedHours: 5.5,
    warranty: '2500 km or 2 Months Warranty',
    recommendedFrequency: 'Every 12,000 km or 1 Year',
    rating: 5.0,
    reviewsCount: 142,
    popular: false,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      '100% Fully Synthetic Premium Engine Oil (0W-20 / 5W-30 / 5W-40)',
      'OEM Oil Filter Replacement',
      'OEM Air Filter Replacement',
      'Cabin AC HEPA Filter Replacement',
      'Front & Rear Brake Caliper Service & Bleeding Inspection',
      'Complete Coolant Flush & Fresh Refill',
      'Spark Plugs Clean & Gap Adjustment',
      'Throttle Body De-carbonizing & Cleaning',
      'Computerized OBD-II Diagnostics Scan',
      'Wheel Alignment & Dynamic Balancing Check',
      'Deep Interior Sanitization & Dashboard UV Dressing',
      '60-Point Comprehensive Mechanical Inspection'
    ],
    whatsNotIncluded: [
      'Transmission gearbox rebuild',
      'Suspension strut replacement'
    ]
  },

  // AC Services
  {
    id: 'srv-ac-gas-leak',
    slug: 'ac-gas-refill-inspection',
    categoryId: 'ac-service-repair',
    categoryName: 'AC Service & Repair',
    title: 'AC Gas Refill & Leak Inspection',
    tagline: 'Restore ice-cold cabin cooling in under 60 minutes.',
    shortDesc: 'R134a eco-friendly refrigerant recharge, nitrogen pressure leak testing, condenser fin cleaning, and vent temperature check.',
    startingPrice: 1299,
    originalPrice: 1899,
    estimatedHours: 1.5,
    warranty: '3 Months Cooling Warranty',
    recommendedFrequency: 'Once before every summer season',
    rating: 4.8,
    reviewsCount: 215,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'R134a Eco Refrigerant Gas Refill (Up to 400g)',
      'AC Compressor Oil Lubricant Injection',
      'Nitrogen Vacuum Leak Detection Test',
      'Condenser External Fin Jet Cleaning',
      'AC Blower Fan Speed & Noise Check',
      'Air Vent Temperature Thermometer Verification'
    ],
    whatsNotIncluded: [
      'Cooling coil replacement',
      'Compressor clutch bearing overhaul'
    ]
  },
  {
    id: 'srv-ac-complete-overhaul',
    slug: 'complete-ac-disinfection-service',
    categoryId: 'ac-service-repair',
    categoryName: 'AC Service & Repair',
    title: 'Complete AC Disinfection & Deep Service',
    tagline: 'Banish foul odor, dust mites, bacteria & mold from AC vents.',
    shortDesc: 'Evaporator foaming, ultrasonic vent disinfection, cabin filter replacement, condenser wash, and gas pressure balance.',
    startingPrice: 2199,
    originalPrice: 2999,
    estimatedHours: 3.0,
    warranty: '6 Months Odor & Cooling Warranty',
    recommendedFrequency: 'Every 15,000 km',
    rating: 4.9,
    reviewsCount: 168,
    popular: false,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Complete Evaporator Coil Anti-Bacterial Chemical Flush',
      'Ultrasonic Air Duct Disinfection Treatment',
      'Fresh OEM Cabin Filter Installation',
      'High-Pressure Condenser Fin De-greasing',
      'AC Gas Top-Up and Pressure Calibration',
      'Cabin Humidity & Temperature Balancing'
    ],
    whatsNotIncluded: [
      'Dashboard removal for physical coil swap (if leaking)'
    ]
  },

  // Batteries
  {
    id: 'srv-battery-jumpstart',
    slug: 'doorstep-battery-jumpstart',
    categoryId: 'batteries',
    categoryName: 'Batteries',
    title: 'Instant Doorstep Battery Jumpstart',
    tagline: 'Dead battery? We arrive at your location within 30 minutes.',
    shortDesc: 'Heavy-duty commercial booster cables, alternator charging output test, and terminal rust cleanup.',
    startingPrice: 499,
    originalPrice: 799,
    estimatedHours: 0.5,
    warranty: 'On-spot start guarantee',
    recommendedFrequency: 'On demand / Emergency',
    rating: 4.9,
    reviewsCount: 420,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: false,
    whatsIncluded: [
      'Rapid Doorstep Dispatch Technician',
      'Heavy-duty 1000A Jumpstarter Ignition',
      'Alternator & Regulator Output Voltage Test',
      'Battery Health Diagnostic Card',
      'Terminal Anti-Corrosion Spray'
    ],
    whatsNotIncluded: [
      'Battery replacement cost (adjusted if new battery purchased)'
    ]
  },
  {
    id: 'srv-battery-replacement',
    slug: 'car-battery-replacement',
    categoryId: 'batteries',
    categoryName: 'Batteries',
    title: 'Car Battery Replacement (Amaron / Exide)',
    tagline: '100% genuine brand batteries with up to 55-month manufacturer warranty.',
    shortDesc: 'Old battery scrap buyback rebate, free installation, laser-etched warranty card, and terminal protection.',
    startingPrice: 3999,
    originalPrice: 5200,
    estimatedHours: 1.0,
    warranty: 'Up to 55 Months Manufacturer Warranty',
    recommendedFrequency: 'Every 3 to 4 Years',
    rating: 4.9,
    reviewsCount: 310,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Fresh Sealed Amaron / Exide Brand Battery',
      'Free Doorstep Fitment & Clamp Tightening',
      'Old Battery Exchange Rebate (Already Discounted)',
      'Digital Warranty Registration',
      'Charging System & Starter Motor Diagnostic Test'
    ],
    whatsNotIncluded: [
      'Heavy wiring loom alteration'
    ]
  },

  // Tyres & Wheels
  {
    id: 'srv-wheel-alignment',
    slug: '3d-wheel-alignment-balancing',
    categoryId: 'tyres-wheel-care',
    categoryName: 'Tyres & Wheel Care',
    title: '3D Laser Wheel Alignment & Balancing',
    tagline: 'Eliminate steering vibration and prevent uneven tyre wear.',
    shortDesc: 'High-precision German 3D camera alignment, automated rim balancing with zinc weights, and tyre rotation.',
    startingPrice: 699,
    originalPrice: 1199,
    estimatedHours: 1.0,
    warranty: '1,000 km Alignment Guarantee',
    recommendedFrequency: 'Every 5,000 km or after pothole impact',
    rating: 4.8,
    reviewsCount: 260,
    popular: true,
    doorstepAvailable: false,
    pickupDropAvailable: true,
    whatsIncluded: [
      '3D Optical Sensor Front & Rear Toe/Camber Alignment',
      '4-Wheel High Speed Dynamic Spin Balancing',
      'Precision Clip-on / Adhesive Balancing Weights',
      'Tyre Tread Depth Gauge Analysis',
      'X-Pattern 4-Tyre Rotation'
    ],
    whatsNotIncluded: [
      'Suspension camber bolt replacement'
    ]
  },

  // Denting & Painting
  {
    id: 'srv-single-panel-paint',
    slug: 'single-panel-dent-paint',
    categoryId: 'denting-painting',
    categoryName: 'Denting & Painting',
    title: 'Single Panel Denting & Painting',
    tagline: 'Factory color match in sealed, dust-free baking paint booth.',
    shortDesc: 'Pneumatic dent puller, anti-rust primer, multi-layer base coat, and UV scratch-resistant clear coat.',
    startingPrice: 2199,
    originalPrice: 3200,
    estimatedHours: 24.0,
    warranty: '2 Years Paint Warranty (Anti-Peel / Color Fade)',
    recommendedFrequency: 'Post dent / accident',
    rating: 4.9,
    reviewsCount: 189,
    popular: true,
    doorstepAvailable: false,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Hydro-Pneumatic Panel Dent Removal',
      'Anti-Rust Epoxy Primer Application',
      'Computerized Spectrometer Color Matching',
      'DuPont / Nippon Premium Base Coat Spray',
      'High-Gloss Clear Coat in Heated Spray Booth',
      'Final 3M Machine Buffing & Polishing'
    ],
    whatsNotIncluded: [
      'Internal structural chassis pulling (quoted on inspection)'
    ]
  },

  // Car Spa & Detailing
  {
    id: 'srv-car-wash-premium',
    slug: 'car-wash-premium',
    categoryId: 'car-spa-cleaning',
    categoryName: 'Car Spa & Detailing',
    title: 'Car Wash Premium',
    tagline: 'High-pressure underbody wash, thick snow foam bath & interior vacuum.',
    shortDesc: 'Comprehensive exterior snow foam bath, chassis & underbody high-pressure mud blast, interior cabin vacuuming, dashboard UV polish, alloy decontamination & tyre gloss shield.',
    startingPrice: 699,
    originalPrice: 1199,
    estimatedHours: 1.5,
    warranty: '100% Spotless Glow Guarantee',
    recommendedFrequency: 'Every 2 to 4 Weeks',
    rating: 4.9,
    reviewsCount: 428,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'High-Pressure Underbody & Wheel Arch Mud Blasting',
      'pH-Neutral Snow Foam Body Bath & Microfiber Hand Wash',
      'High-Power Interior Cabin, Footwell & Boot Vacuuming',
      'Alloy Wheel Decontamination & Deep Rim Cleaning',
      'Dashboard, Console & Door Trim Satin UV Polish',
      'Crystal Streak-Free Glass & Windshield Anti-Glare Clean',
      'Tyre Deep Scrubbing with Long-Lasting Silicone Gloss',
      'AC Vent Dusting & Refreshing Cabin Deodorizer'
    ],
    whatsNotIncluded: [
      '3-stage exterior paint scratch compounding (available in Ceramic Coating)',
      'Complete seat shampoo hot water extraction (available in Deep Interior Cleaning)'
    ]
  },
  {
    id: 'srv-deep-interior-cleaning',
    slug: '360-interior-deep-cleaning',
    categoryId: 'car-spa-cleaning',
    categoryName: 'Car Spa & Detailing',
    title: '360° Interior Deep Cleaning & Sanitization',
    tagline: 'Transform your vehicle interior to showroom freshness.',
    shortDesc: 'Hot steam extraction for upholstery, roof lining dry wash, carpet shampooing, dashboard UV treatment, and boot restoration.',
    startingPrice: 1599,
    originalPrice: 2499,
    estimatedHours: 3.5,
    warranty: '100% Stain & Germ Free Guarantee',
    recommendedFrequency: 'Every 3 to 4 Months',
    rating: 4.9,
    reviewsCount: 340,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'High-Power Vacuuming of Carpet, Mats & Seats',
      'Fabric / Leather Seat Stain Extraction',
      'Roof Headliner Chemical Dry Wash (No Sagging)',
      'Door Panels, A/B/C Pillars & Boot Cleaning',
      'Dashboard & Trim Conditioning with Matte UV Shield',
      'AC Vent Steam Sanitization & Odor Neutralizer'
    ],
    whatsNotIncluded: [
      'Seat cover stitching / re-upholstery'
    ]
  },
  {
    id: 'srv-9h-ceramic-coating',
    slug: '9h-ceramic-coating-protection',
    categoryId: 'car-spa-cleaning',
    categoryName: 'Car Spa & Detailing',
    title: '9H Ceramic Coating (3-Year Warranty)',
    tagline: 'Hydrophobic mirror-like gloss and impenetrable paint shield.',
    shortDesc: '3-stage paint correction compounding, swirl removal, isopropyl alcohol wipe down, and dual-layer nano-ceramic sealant.',
    startingPrice: 11999,
    originalPrice: 16999,
    estimatedHours: 12.0,
    warranty: '3 Years Warranty with 2 Free Maintenance Boosts',
    recommendedFrequency: 'Once in 3 Years',
    rating: 5.0,
    reviewsCount: 96,
    popular: false,
    doorstepAvailable: false,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Clay Bar Decontamination & Iron Fallout Removal',
      '3-Stage Machine Compound Polishing (95%+ Swirl Elimination)',
      'IPA Surface Prep Cleanse',
      'Dual Layer 9H Hardness Nano-Ceramic Shield Application',
      'Wheel Rim Face & Exterior Plastic Trim Coating',
      'IR Lamp Curing & Hydrophobic Water-Beading Test',
      'Official Warranty Certificate with 2 Free Annual Touch-ups'
    ],
    whatsNotIncluded: [
      'Severe rust perforation repairs'
    ]
  },

  // Car Inspection
  {
    id: 'srv-pre-purchase-inspection',
    slug: 'pre-purchase-used-car-inspection',
    categoryId: 'car-inspection',
    categoryName: 'Car Inspection',
    title: '150-Point Pre-Purchase Car Inspection',
    tagline: 'Buy any used car with 100% confidence or avoid a costly trap.',
    shortDesc: 'Digital paint thickness gauge for accidental damage, OBD engine scanner, flood damage check, transmission test, and full PDF report.',
    startingPrice: 1199,
    originalPrice: 1899,
    estimatedHours: 2.0,
    warranty: 'Unbiased Independent Engineering Report',
    recommendedFrequency: 'Before buying any pre-owned vehicle',
    rating: 4.9,
    reviewsCount: 220,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: false,
    whatsIncluded: [
      'Digital Paint Meter (Detects Repainted Panels & Hidden Accidental Dents)',
      'Full ECU / OBD-II Diagnostic Scanning for Hidden Error Codes & Odometer Tampering',
      'Engine Compression, Blowby & Oil Sludge Check',
      'Transmission Gear Shift Smoothness & Clutch Slip Test',
      'Underbody Chassis Corrosion, Rust & Flood Water Stains Analysis',
      'Suspension Struts, Bushings & Steering Rack Health',
      'Detailed 150-Point Digital PDF Report with High-Res Photos'
    ],
    whatsNotIncluded: [
      'Legal ownership title verification (RTO transfer)'
    ]
  },

  // Brakes & Suspension
  {
    id: 'srv-brake-pad-replacement',
    slug: 'front-brake-pad-replacement',
    categoryId: 'suspension-brakes',
    categoryName: 'Suspension & Brakes',
    title: 'Front Brake Pads Replacement',
    tagline: 'Superior stopping power with OEM / Bosch ceramic brake pads.',
    shortDesc: 'Old pads removal, rotor disc surface inspection, caliper slider greasing, and DOT-4 fluid top-up.',
    startingPrice: 1499,
    originalPrice: 2299,
    estimatedHours: 1.5,
    warranty: '10,000 km or 6 Months Warranty',
    recommendedFrequency: 'Every 20,000 km to 30,000 km',
    rating: 4.8,
    reviewsCount: 175,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'OEM / Bosch Ceramic Low-Dust Brake Pad Set',
      'Rotor Disc Runout & Thickness Measurement',
      'Caliper Guide Pins Cleaning & High-Temp Greasing',
      'Brake Lines & Master Cylinder Inspection',
      'DOT-4 Brake Fluid Top-up & Pedal Bleed Test'
    ],
    whatsNotIncluded: [
      'Brake rotor disc replacement if grooved beyond safety limit'
    ]
  },

  // SOS Emergency
  {
    id: 'srv-sos-breakdown',
    slug: 'emergency-breakdown-towing',
    categoryId: 'sos-roadside-assistance',
    categoryName: 'SOS Roadside Assistance',
    title: '24/7 Roadside Breakdown & Towing',
    tagline: 'Fastest on-site rescue across city limits.',
    shortDesc: 'Immediate breakdown support, on-spot mechanical diagnosis, jumpstart, tyre change, or hydraulic flatbed towing.',
    startingPrice: 799,
    originalPrice: 1299,
    estimatedHours: 0.5,
    warranty: 'Instant Response Guarantee',
    recommendedFrequency: 'Immediate Emergency',
    rating: 4.9,
    reviewsCount: 512,
    popular: true,
    doorstepAvailable: true,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Priority Rescue Dispatch Team',
      'On-Spot Diagnostic & Electrical Failure Check',
      'Flat Tyre Spare Wheel Installation',
      'Emergency Battery Jumpstart',
      'Hydraulic Safe Wheel-Lift / Flatbed Towing (First 10 km Free)'
    ],
    whatsNotIncluded: [
      'Extra kilometer towing charges (₹40/km after 10 km)'
    ]
  },

  // Insurance
  {
    id: 'srv-insurance-cashless',
    slug: 'cashless-insurance-claim-service',
    categoryId: 'insurance-claims',
    categoryName: 'Insurance & Claims',
    title: 'Cashless Insurance Claim & Accident Repair',
    tagline: 'Zero hassle, 100% paperless claim processing with all major insurers.',
    shortDesc: 'Partnered with ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India Assurance, and more. Free towing & surveyor handling.',
    startingPrice: 0,
    originalPrice: 1500,
    estimatedHours: 48.0,
    warranty: 'Genuine Parts Guarantee & Cashless Settlement',
    recommendedFrequency: 'Post-collision or accidental scratch',
    rating: 4.9,
    reviewsCount: 290,
    popular: true,
    doorstepAvailable: false,
    pickupDropAvailable: true,
    whatsIncluded: [
      'Direct Insurance Surveyor Liaison & Digital Claim Filing',
      'Zero Advance Payment on Approved Cashless Parts',
      'Free Accidental Towing to Workshop',
      '100% Genuine OEM Replacement Bumpers, Lights & Sheet Metal',
      'Precision Spray Booth Painting & Finish Inspection',
      'Doorstep Delivery of Fully Restored Car'
    ],
    whatsNotIncluded: [
      'Mandatory policy deductible / salvage charges as per IRDAI norms'
    ]
  }
];
