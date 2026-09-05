// Types for SR Multi Car Tech Data Layer

export interface CarBrand {
  id: string;
  name: string;
  slug: string;
  popular?: boolean;
  logoText?: string;
  models: CarModel[];
}

export type FuelType = 'Petrol' | 'Diesel' | 'CNG' | 'CNG + Petrol' | 'Electric' | 'Hybrid';

export interface CarModel {
  id: string;
  name: string;
  bodyType: 'Hatchback' | 'Sedan' | 'SUV' | 'MUV' | 'Luxury' | 'EV' | 'Coupe';
  fuels: FuelType[];
  years: number[];
  popular?: boolean;
}

export interface ServicePackageItem {
  id: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  title: string;
  tagline: string;
  shortDesc: string;
  startingPrice: number;
  originalPrice: number;
  estimatedHours: number;
  warranty: string;
  recommendedFrequency: string;
  rating: number;
  reviewsCount: number;
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  doorstepAvailable: boolean;
  pickupDropAvailable: boolean;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  iconName: string;
  startingPrice: number;
  badge?: string;
}

export interface Coupon {
  code: string;
  title: string;
  discountDesc: string;
  discountType: 'PERCENT' | 'FIXED';
  discountValue: number;
  minOrder: number;
  maxDiscount?: number;
  validUntil: string;
  badge?: string;
}

export interface WorkshopLocation {
  id: string;
  name: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  phone: string;
  hours: string;
  rating: number;
  reviews: number;
  lat: number;
  lng: number;
}

export interface ReviewItem {
  id: string;
  name: string;
  carModel: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  verified: boolean;
}

export interface Booking {
  id: string;
  bookingNumber: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  carBrand: string;
  carModel: string;
  carFuel: string;
  carYear?: number;
  serviceId: string;
  serviceTitle: string;
  serviceType: 'WORKSHOP' | 'DOORSTEP' | 'PICKUP_DROP';
  stage: 'CONFIRMED' | 'VEHICLE_RECEIVED' | 'INSPECTION_STARTED' | 'SERVICE_IN_PROGRESS' | 'QUALITY_CHECK' | 'READY_FOR_DELIVERY' | 'COMPLETED' | 'CANCELLED';
  address: string;
  city: string;
  pincode: string;
  scheduledDate: string;
  timeSlot: string;
  technicianName: string;
  technicianPhone: string;
  workshopName: string;
  basePrice: number;
  additionalCharges: number;
  discount: number;
  gst: number;
  total: number;
  paymentMethod: string;
  paymentStatus: 'PAID' | 'PENDING';
  couponCode?: string;
  notes?: string;
  inspectionPointsPassed?: number;
  totalInspectionPoints?: number;
}
