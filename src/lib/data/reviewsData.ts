export interface ReviewItem {
  id: string;
  name: string;
  carModel: string;
  rating: number;
  ratingScore: string;
  date: string;
  comment: string;
  serviceCategory: string;
  isPlaceholderNote?: boolean;
}

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Customer Experience',
    carModel: 'Mid-size SUV',
    rating: 5,
    ratingScore: '5.0',
    date: 'Recent Visit',
    comment: 'The diagnostic accuracy at SR Multicartech is outstanding. Founder BRR personally explained the vehicle scan results and the technicians resolved the engine fault on time. Completely transparent and reliable.',
    serviceCategory: 'Full Engine Works & Diagnostics'
  },
  {
    id: 'rev-2',
    name: 'Customer Experience',
    carModel: 'Premium Hatchback',
    rating: 5,
    ratingScore: '5.0',
    date: 'Recent Visit',
    comment: 'Had deep door dents and scratch marks. The denting and paint finish looks factory-fresh with zero color difference. The workmanship is truly high quality.',
    serviceCategory: 'Denting & Painting'
  },
  {
    id: 'rev-3',
    name: 'Customer Experience',
    carModel: 'Executive Sedan',
    rating: 5,
    ratingScore: '5.0',
    date: 'Recent Visit',
    comment: 'Full underbody anti-rust coating and interior deep cleaning completed with great attention to detail. Very professional garage environment right here in Satrampadu.',
    serviceCategory: 'Anti-Rust & Deep Cleaning'
  },
  {
    id: 'rev-4',
    name: 'Customer Experience',
    carModel: 'Multi-Utility Vehicle (MUV)',
    rating: 5,
    ratingScore: '5.0',
    date: 'Recent Visit',
    comment: 'They used genuine spare parts and calibrated equipment. Clear billing, no unnecessary recommendations, and honest advice from an owner with 15+ years of real experience.',
    serviceCategory: 'Genuine Spare Parts & Mechanical'
  },
  {
    id: 'rev-5',
    name: 'Customer Experience',
    carModel: 'Compact Sedan',
    rating: 4,
    ratingScore: '4.0',
    date: 'Recent Visit',
    comment: 'Prompt response when I reached out for urgent assistance. The technicians checked the vehicle systematically and delivered it back in smooth driving condition.',
    serviceCategory: 'All Car Works & Maintenance'
  }
];
