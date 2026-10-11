export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Denting' | 'Painting' | 'Engine Work' | 'Body Repair' | 'Deep Cleaning' | 'Interior Work' | 'Underbody Protection' | 'Anti-Rust' | 'Customization' | 'Car Detailing';
  categoryLabel: string;
  image: string;
  description: string;
  features: string[];
}

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Denting',
  'Painting',
  'Engine Work',
  'Body Repair',
  'Deep Cleaning',
  'Interior Work',
  'Underbody Protection',
  'Anti-Rust',
  'Customization',
  'Car Detailing'
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'work-1',
    title: 'Computerized Engine Diagnostics & Overhaul',
    category: 'Engine Work',
    categoryLabel: 'Engine & Mechanical',
    image: '/images/engine_precision.jpg',
    description: 'Precision mechanical diagnostics and calibrated torque rebuild using electronic German diagnostic software telemetry.',
    features: ['ECU Fault Code Interrogation', 'Calibrated Torque Specs', 'Genuine OEM Replacement Parts']
  },
  {
    id: 'work-2',
    title: 'Grade-A Paint Booth Mirror Clear Finish',
    category: 'Painting',
    categoryLabel: 'Body & Paint',
    image: '/images/paint_booth.jpg',
    description: 'Bake-oven spray booth painting with computerized shade matching and ultra-durable clear coat protection.',
    features: ['Dust-Free Heated Spray Booth', 'Computerized Color Matching', 'Scratch-Resistant Clear Coat']
  },
  {
    id: 'work-3',
    title: 'Handheld ECU Telemetry & Diagnostic Scanning',
    category: 'Engine Work',
    categoryLabel: 'Diagnostics & Tech',
    image: '/images/diagnostic_tech.jpg',
    description: 'Live sensor monitoring across 50+ onboard ECUs to identify electrical, transmission, and combustion anomalies.',
    features: ['Full Sensor Waveform Graphing', 'Live Diagnostic Data', 'Zero Blind Guesswork']
  },
  {
    id: 'work-4',
    title: 'Paintless & Mechanical Dent Extraction',
    category: 'Denting',
    categoryLabel: 'Body & Paint',
    image: '/images/paint_booth.jpg',
    description: 'Meticulous panel realignment and contour restoration maintaining original structural sheet metal integrity.',
    features: ['Precision Crease Extraction', 'Contour Line Alignment', 'Metal Surface Preparation']
  },
  {
    id: 'work-5',
    title: 'Full Structural Body Alignment & Repair',
    category: 'Body Repair',
    categoryLabel: 'Body & Paint',
    image: '/images/paint_booth.jpg',
    description: 'Complete accident restoration, structural frame realignment, bumper rehabilitation, and OEM fitment.',
    features: ['Chassis Alignment Check', 'OEM Panel Replacement', 'Factory Gap Symmetry']
  },
  {
    id: 'work-6',
    title: 'Interior Deep Cleaning & Steam Sanitization',
    category: 'Deep Cleaning',
    categoryLabel: 'Detailing & Spa',
    image: '/images/diagnostic_tech.jpg',
    description: 'High-pressure extraction, roof lining grooming, AC vent sterilization, and odor elimination.',
    features: ['Hot Water Extraction', 'Antimicrobial Sanitization', 'Fabric Stain Removal']
  },
  {
    id: 'work-7',
    title: 'Leather Treatment & Interior Console Customization',
    category: 'Interior Work',
    categoryLabel: 'Customization',
    image: '/images/diagnostic_tech.jpg',
    description: 'Interior trim rejuvenation, matte leather conditioning, and custom interior panel enhancement.',
    features: ['UV Protectant Shield', 'Non-Greasy Matte Finish', 'Custom Trim Refinement']
  },
  {
    id: 'work-8',
    title: 'Bituminous Underbody Anti-Rust Coating',
    category: 'Anti-Rust',
    categoryLabel: 'Protection',
    image: '/images/engine_precision.jpg',
    description: 'Heavy-duty rubberized undercoat applied to floor pan, wheel wells, and subframe to prevent road grit corrosion.',
    features: ['High-Viscosity Rubber Shield', 'Sound-Damping Acoustic Benefit', 'Salt & Moisture Barrier']
  },
  {
    id: 'work-9',
    title: 'Chassis Underbody Safety & Guard Works',
    category: 'Underbody Protection',
    categoryLabel: 'Protection',
    image: '/images/engine_precision.jpg',
    description: 'Sump guard installation, catalytic converter shielding, suspension bushing inspections, and floor pan reinforcement.',
    features: ['Engine Sump Shielding', 'Subframe Inspection', 'Exhaust Mount Reinforcement']
  },
  {
    id: 'work-10',
    title: 'High-Gloss Ceramic Car Detailing & Paint Correction',
    category: 'Car Detailing',
    categoryLabel: 'Detailing & Spa',
    image: '/images/paint_booth.jpg',
    description: 'Multi-stage rotary machine compounding and swirl removal resulting in deep, wet-look reflection.',
    features: ['Swirl & Micro-Scratch Removal', 'Hydrophobic Beading', 'Deep Showroom Gloss']
  },
  {
    id: 'work-11',
    title: 'Custom Dash & Interior Component Fitments',
    category: 'Customization',
    categoryLabel: 'Customization',
    image: '/images/diagnostic_tech.jpg',
    description: 'Custom aesthetic interior enhancements, ambient illumination routing, and precision dashboard trim styling.',
    features: ['Clean Wiring Integration', 'OEM Snap-On Precision', 'Premium Tactile Upgrades']
  }
];
