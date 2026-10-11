export interface BeforeAfterItem {
  id: string;
  title: string;
  serviceCategory: string;
  vehicleModel: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string[];
  afterDetails: string[];
  beforeImage: string;
  afterImage: string;
}

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-dent-paint',
    title: 'Quarter Panel Dent & Paint Restoration',
    serviceCategory: 'Denting & Painting',
    vehicleModel: 'Premium Sedan',
    description: 'Deep crease dent and scratch marks restored with precision metal extraction and dust-free heated booth painting.',
    beforeLabel: 'Before: Crease Dent & Paint Damage',
    afterLabel: 'After: Factory Line & Mirror Gloss',
    beforeDetails: ['Sharp panel crease dent', 'Clear coat scuff & bare primer', 'Misaligned body gap'],
    afterDetails: ['Contour lines 100% true to OEM', 'Computerized color shade matching', 'Gloss clear coat cured in bake booth'],
    beforeImage: '/images/paint_booth.jpg',
    afterImage: '/images/paint_booth.jpg'
  },
  {
    id: 'ba-engine-tune',
    title: 'Engine Diagnostics & Performance Restoration',
    serviceCategory: 'Full Engine Works',
    vehicleModel: 'Turbocharged Diesel SUV',
    description: 'Resolving rough idling, check-engine warning, and sluggish throttle response with German software diagnostics.',
    beforeLabel: 'Before: Check Engine Warning & Stumble',
    afterLabel: 'After: Calibrated ECU & Peak Throttle Response',
    beforeDetails: ['DTC error codes present', 'Erratic sensor telemetry & misfire', 'Carbon-clogged intake valves'],
    afterDetails: ['Zero ECU fault codes', 'Live telemetry within factory specs', 'Smooth idle & crisp power delivery'],
    beforeImage: '/images/engine_precision.jpg',
    afterImage: '/images/engine_precision.jpg'
  },
  {
    id: 'ba-interior-deep',
    title: 'Full Interior Deep Cleaning & Detailing',
    serviceCategory: 'Interior Cleaning & Detailing',
    vehicleModel: 'Family MPV',
    description: 'Deep hot-water extraction and steam sanitization removing years of dust, stains, and interior grime.',
    beforeLabel: 'Before: Stained Fabric & Dusty Vents',
    afterLabel: 'After: Spotless Cabin & Fresh Atmosphere',
    beforeDetails: ['Stained upholstery & door pads', 'Bacterial buildup in AC air ducts', 'Dull oxidized interior plastics'],
    afterDetails: ['Microbial-sanitized ventilation vents', 'Deep extracted stain-free seats', 'UV-shielded satin matte dashboard'],
    beforeImage: '/images/diagnostic_tech.jpg',
    afterImage: '/images/diagnostic_tech.jpg'
  },
  {
    id: 'ba-underbody-rust',
    title: 'Underbody Anti-Rust Protective Treatment',
    serviceCategory: 'Protection Works',
    vehicleModel: 'Compact Crossover',
    description: 'High-viscosity bitumen coating creating an impenetrable barrier against road moisture, dirt, and stones.',
    beforeLabel: 'Before: Exposed Chassis Metal & Road Dirt',
    afterLabel: 'After: Rubberized Anti-Corrosion Shield',
    beforeDetails: ['Surface oxidation on silencer pipes', 'Exposed undercarriage floor pan', 'Stone chip abrasions on wheel arches'],
    afterDetails: ['Uniform thick anti-rust rubber layer', 'Protected brake and fuel line routing', 'Enhanced acoustic road damping'],
    beforeImage: '/images/engine_precision.jpg',
    afterImage: '/images/engine_precision.jpg'
  }
];
