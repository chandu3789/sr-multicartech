import { ServiceCategory, ServicePackageItem } from './types';

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  category: 'body-paint' | 'engine-mechanical' | 'parts-tech' | 'detailing-cleaning' | 'protection-custom';
  categoryTitle: string;
  shortDesc: string;
  highlights: string[];
  iconName: string;
  featured?: boolean;
}

export const ALL_SERVICES: ServiceItem[] = [
  // 1. BODY & PAINT
  {
    id: 'denting',
    name: 'Denting',
    slug: 'denting',
    category: 'body-paint',
    categoryTitle: 'Body & Paint',
    shortDesc: 'Precision metal realignment and paintless dent extraction restoring original body panel contour curves.',
    highlights: ['Specialized PDR dent extraction', 'Preserves factory structural panels', 'Accurate body line symmetry'],
    iconName: 'Wrench',
    featured: true
  },
  {
    id: 'painting',
    name: 'Painting',
    slug: 'painting',
    category: 'body-paint',
    categoryTitle: 'Body & Paint',
    shortDesc: 'High-gloss computerized paint refinishing in controlled spray booth with scratch-resistant clear coat.',
    highlights: ['Computerized shade formulation', 'Bake-oven dust-free paint booth', 'Deep gloss clear coat protection'],
    iconName: 'Paintbrush',
    featured: true
  },
  {
    id: 'full-body-repair',
    name: 'Full Body Repair',
    slug: 'full-body-repair',
    category: 'body-paint',
    categoryTitle: 'Body & Paint',
    shortDesc: 'Comprehensive accident damage restoration, bumper repair, fender replacement, and structural alignment.',
    highlights: ['Chassis alignment & panel squaring', 'Bumper & fiberglass reconstruction', 'Factory fit & finish alignment'],
    iconName: 'Car'
  },

  // 2. ENGINE & MECHANICAL
  {
    id: 'full-engine-works',
    name: 'Full Engine Works',
    slug: 'full-engine-works',
    category: 'engine-mechanical',
    categoryTitle: 'Engine & Mechanical',
    shortDesc: 'Complete mechanical and electronic engine overhauls, timing belt renewal, valve adjustments, and compression tuning.',
    highlights: ['Cylinder head & block machining', 'Calibrated factory torque specs', 'Precision mechanical testing'],
    iconName: 'Cpu',
    featured: true
  },
  {
    id: 'all-car-works',
    name: 'All Car Works',
    slug: 'all-car-works',
    category: 'engine-mechanical',
    categoryTitle: 'Engine & Mechanical',
    shortDesc: 'End-to-end mechanical solutions covering brakes, clutch, suspension, steering, cooling, and electrical wiring.',
    highlights: ['Comprehensive multi-system repair', 'Brake discs & suspension calibration', 'Electrical wiring & sensor fixes'],
    iconName: 'Tool'
  },

  // 3. PARTS & TECHNOLOGY
  {
    id: 'genuine-spare-parts',
    name: 'Genuine Spare Parts',
    slug: 'genuine-spare-parts',
    category: 'parts-tech',
    categoryTitle: 'Parts & Technology',
    shortDesc: '100% authentic OEM / OES certified spare parts guaranteed for direct fitment, vehicle warranty, and road safety.',
    highlights: ['Direct OEM factory component fit', 'Zero counterfeit or low-grade substitutes', 'Reliable longevity & warranty support'],
    iconName: 'ShieldCheck',
    featured: true
  },
  {
    id: 'advanced-diagnostics',
    name: 'Advanced Diagnostics',
    slug: 'advanced-diagnostics',
    category: 'parts-tech',
    categoryTitle: 'Parts & Technology',
    shortDesc: 'High-precision ECU scanning using German automotive diagnostic technology to decode fault codes accurately.',
    highlights: ['ECU, ABS, Airbag & TCM scanning', 'Live sensor waveform telemetry', 'Eliminates guesswork in troubleshooting'],
    iconName: 'Activity',
    featured: true
  },

  // 4. DETAILING & CLEANING
  {
    id: 'car-washing',
    name: 'Car Washing',
    slug: 'car-washing',
    category: 'detailing-cleaning',
    categoryTitle: 'Detailing & Cleaning',
    shortDesc: 'High-pressure snow foam wash, underbody rinse, wheel arch degreasing, and microfiber drying.',
    highlights: ['pH-neutral premium automotive foam', 'High-pressure undercarriage jet rinse', 'Microfiber scratch-free drying'],
    iconName: 'Droplets'
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    slug: 'deep-cleaning',
    category: 'detailing-cleaning',
    categoryTitle: 'Detailing & Cleaning',
    shortDesc: 'Intensive cabin restoration with hot-water upholstery extraction, steam sanitization, and stain eradication.',
    highlights: ['High-power upholstery extraction', 'Steam sanitization for vents & fabrics', 'Deep carpet & trunk shampooing'],
    iconName: 'Sparkles',
    featured: true
  },
  {
    id: 'interior-cleaning',
    name: 'Interior Cleaning',
    slug: 'interior-cleaning',
    category: 'detailing-cleaning',
    categoryTitle: 'Detailing & Cleaning',
    shortDesc: 'Meticulous interior vacuuming, dashboard UV treatment, door pad cleaning, glass polishing, and fresh cabin aroma.',
    highlights: ['Dashboard & console conditioning', 'UV protection against sun crack', 'Streak-free optical glass cleaning'],
    iconName: 'Sparkles'
  },

  // 5. PROTECTION & CUSTOMIZATION
  {
    id: 'anti-rust-treatment',
    name: 'Anti-Rust Treatment',
    slug: 'anti-rust-treatment',
    category: 'protection-custom',
    categoryTitle: 'Protection & Customization',
    shortDesc: 'Heavy-duty rubberized bitumen coating safeguarding chassis and underbody from moisture, mud, and corrosion.',
    highlights: ['High-density protective rubber barrier', 'Subframe & wheel arch sealing', 'Resists gravel chips & salt corrosion'],
    iconName: 'ShieldAlert',
    featured: true
  },
  {
    id: 'underbody-safety-works',
    name: 'Underbody Safety Works',
    slug: 'underbody-safety-works',
    category: 'protection-custom',
    categoryTitle: 'Protection & Customization',
    shortDesc: 'Chassis reinforcement, engine sump shield fitments, exhaust pipe rust treatment, and suspension mount inspection.',
    highlights: ['Engine sump guard protection', 'Exhaust line & silencer rust coating', 'Subframe & suspension arm integrity'],
    iconName: 'Shield'
  },
  {
    id: 'interior-parts-customization',
    name: 'Interior Parts Customization',
    slug: 'interior-parts-customization',
    category: 'protection-custom',
    categoryTitle: 'Protection & Customization',
    shortDesc: 'Tailored aesthetic interior upgrades, custom upholstery styling, trim wraps, and console enhancements.',
    highlights: ['Custom dash & door panel finishes', 'Comfort-focused ergonomic upgrades', 'Factory-clean installation'],
    iconName: 'Sliders'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'all', name: 'All Services', slug: 'all', shortDesc: 'Complete multi-brand car repairs & maintenance', iconName: 'LayoutGrid', startingPrice: 499 },
  { id: 'body-paint', name: 'Body & Paint', slug: 'body-paint', shortDesc: 'Denting, painting & full body repairs in dust-free spray booth', iconName: 'Paintbrush', startingPrice: 799, badge: 'BOOTH FINISH' },
  { id: 'engine-mechanical', name: 'Engine & Mechanical', slug: 'engine-mechanical', shortDesc: 'Engine overhaul, brakes, suspension & transmission works', iconName: 'Cpu', startingPrice: 1299, badge: 'EXPERT CARE' },
  { id: 'parts-tech', name: 'Parts & Diagnostics', slug: 'parts-tech', shortDesc: 'German software diagnostics & 100% genuine OEM spare parts', iconName: 'ShieldCheck', startingPrice: 699, badge: 'GERMAN TECH' },
  { id: 'detailing-cleaning', name: 'Detailing & Cleaning', slug: 'detailing-cleaning', shortDesc: 'Car wash, interior dry cleaning & deep hot water extraction', iconName: 'Sparkles', startingPrice: 499 },
  { id: 'protection-custom', name: 'Protection & Custom', slug: 'protection-custom', shortDesc: 'Underbody anti-rust rubber treatment & interior customization', iconName: 'ShieldAlert', startingPrice: 999 }
];

export const SERVICE_PACKAGES: ServicePackageItem[] = ALL_SERVICES.map((s, idx) => ({
  id: s.id,
  slug: s.slug,
  categoryId: s.category,
  categoryName: s.categoryTitle,
  title: s.name,
  tagline: s.highlights[0] || 'Professional Automotive Care',
  shortDesc: s.shortDesc,
  startingPrice: 699 + idx * 250,
  originalPrice: 999 + idx * 350,
  estimatedHours: 2 + (idx % 4),
  warranty: '6 Months Service Warranty',
  recommendedFrequency: 'As per inspection',
  rating: 5.0,
  reviewsCount: 15,
  whatsIncluded: s.highlights,
  whatsNotIncluded: ['Third party modifications', 'Unauthorized electrical splices'],
  doorstepAvailable: false,
  pickupDropAvailable: true,
  popular: s.featured || false
}));
