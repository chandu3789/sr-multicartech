export interface BlogPostItem {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    slug: 'signs-your-car-ac-needs-service',
    title: '5 Warning Signs Your Car Air Conditioner Needs Immediate Service',
    category: 'AC Maintenance',
    date: 'August 24, 2026',
    readTime: '4 min read',
    author: 'Rajiv Sengupta (Lead HVAC Specialist)',
    excerpt: 'Is your cabin blowing warm air or emitting a musty smell? Learn the top indicators that your compressor or refrigerant is failing before costly damage occurs.',
    content: `
When soaring humidity and temperatures hit the city, your vehicle air conditioning system works under extreme thermal load. Many drivers only notice a problem when warm air starts blasting from the vents, but there are earlier telltale signs:

### 1. Unusual Musty Odor on Startup
A damp or moldy scent usually indicates moisture accumulation inside the evaporator coil housing, which becomes a breeding ground for mildew and airborne allergens. An ultrasonic foam flush or cabin filter replacement solves this.

### 2. Rattling or Hissing Noise When AC Turns On
If you hear a grinding noise from under the hood when pressing the A/C button, the compressor clutch bearing might be wearing out. A slight hissing behind the glovebox usually points to low refrigerant gas leaking through an O-ring seal.

### 3. Sluggish Cabin Cooling at Traffic Signals
If the air feels chilled while driving on the highway but turns tepid when idling in traffic, your AC condenser fins may be choked with road debris, mud, and insects, or your radiator auxiliary fan is running weak.

### 4. Water Leaking Inside the Footwell
A clogged condensation drain line causes water to overflow into the passenger carpet area, resulting in damp flooring and rusted chassis floorboards if left unattended.

### How to Prevent AC Failures
Get an annual pressure check, clean the condenser, and replace the cabin filter every 10,000 km. At SR Multi Car Tech, our AC diagnostic scan checks high- and low-side pressures with precision digital gauges.
    `
  },
  {
    slug: 'essential-monsoon-car-care-checklist',
    title: 'The Ultimate Monsoon Car Care Guide: Protecting Brakes, Tyres & Electricals',
    category: 'Seasonal Care',
    date: 'July 18, 2026',
    readTime: '5 min read',
    author: 'SR Tech Engineering Desk',
    excerpt: 'Waterlogged roads, sudden cloudbursts, and heavy spray require special vehicular preparation. Here is our master inspection checklist to keep you safe.',
    content: `
Monsoon driving presents the toughest driving conditions in eastern and northern India. Water wading and sudden downpours test every critical safety system of your vehicle:

### 1. Tyre Tread Depth & Aquaplaning Prevention
When water builds up between your tyre and the asphalt faster than the treads can channel it away, the car begins to hydroplane. Ensure your tread depth is at least 3mm and tyre pressures are kept at OEM specifications.

### 2. Wiper Blades & Washer Fluid
Streaky wiper blades severely degrade night-time visibility. Replace old rubber blades that chatter or skip, and ensure you keep anti-fog windshield cleaning fluid topped up.

### 3. Brake Pad Glazing & Moisture Absorption
Wet disc rotors require extra distance to bite. Have your brake pads cleaned, pins greased, and check for rotor disc scoring. If your brake fluid is older than 2 years, replace it because brake fluid is hygroscopic and absorbs water.

### 4. Underbody Anti-Rust Coating
Road sludge containing acidic runoff easily starts rust on exposed floor pans and exhaust welds. A rubberized underbody coating shields your chassis for years.
    `
  },
  {
    slug: 'synthetic-vs-mineral-engine-oil',
    title: 'Synthetic vs Mineral Engine Oil: Which Is Best for Your Driving Style?',
    category: 'Engine Health',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: 'Amitabh Barua (Chief Diagnostic Technician)',
    excerpt: 'Confused between mineral, semi-synthetic, and 100% fully synthetic engine oil? Discover how oil viscosity affects engine longevity, fuel mileage, and turbo health.',
    content: `
Engine oil is the literal lifeblood of your vehicle. Choosing the right lubricant grade directly impacts internal friction, piston wear, fuel efficiency, and turbocharger reliability.

### Mineral Oil
Refined directly from crude oil. It provides adequate lubrication for older, naturally aspirated engines with gentle, low-mileage city commuting, but breaks down faster under extreme heat (recommended drain interval: 5,000 km).

### Semi-Synthetic (Synthetic Blend)
A blend of synthetic base stocks and mineral oils. It provides superior oxidation resistance and cold-start flow at a moderate price point (recommended drain interval: 7,500 – 10,000 km).

### 100% Fully Synthetic Oil
Engineered chemically from uniform molecular chains. It resists thermal breakdown even above 200°C, flows instantly during cold starts to prevent cylinder bore scuffing, and keeps modern turbocharged GDI engines running cleanly (recommended drain interval: 10,000 – 15,000 km).
    `
  }
];
