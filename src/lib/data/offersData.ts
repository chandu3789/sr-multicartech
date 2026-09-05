import { Coupon } from './types';

export const OFFERS_LIST: Coupon[] = [
  {
    code: 'SRFIRST10',
    title: 'New Customer Welcome Bonus',
    discountDesc: 'Get flat 10% discount on your first service booking with SR Multi Car Tech.',
    discountType: 'PERCENT',
    discountValue: 10,
    minOrder: 1499,
    maxDiscount: 750,
    validUntil: '31 Dec 2026',
    badge: '10% OFF'
  },
  {
    code: 'SRCAR20',
    title: 'Periodic Service Celebration',
    discountDesc: '20% instant off on Comprehensive and Premium Synthetic Periodic Services.',
    discountType: 'PERCENT',
    discountValue: 20,
    minOrder: 3000,
    maxDiscount: 1200,
    validUntil: '30 Nov 2026',
    badge: '20% OFF'
  },
  {
    code: 'MONSOON500',
    title: 'Monsoon Ready Shield',
    discountDesc: 'Flat ₹500 off on Brake Service, Wiper Renewal or AC Inspection packages.',
    discountType: 'FIXED',
    discountValue: 500,
    minOrder: 1999,
    validUntil: '15 Oct 2026',
    badge: 'SAVE ₹500'
  },
  {
    code: 'FREESCAN',
    title: 'Complimentary OBD Scan',
    discountDesc: '100% discount on Computerized 50-Point Diagnostic Scan with any order above ₹2,499.',
    discountType: 'FIXED',
    discountValue: 799,
    minOrder: 2499,
    validUntil: '31 Dec 2026',
    badge: 'FREE SCAN'
  },
  {
    code: 'SPA300',
    title: 'Weekend Car Spa Delight',
    discountDesc: 'Flat ₹300 off on 360° Interior Deep Cleaning or Machine Waxing.',
    discountType: 'FIXED',
    discountValue: 300,
    minOrder: 1500,
    validUntil: '31 Dec 2026',
    badge: 'SAVE ₹300'
  }
];
