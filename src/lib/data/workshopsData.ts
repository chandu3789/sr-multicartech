import { WorkshopLocation } from './types';

export const WORKSHOP_LOCATIONS: WorkshopLocation[] = [
  {
    id: 'ws-central',
    name: 'SR Multi Car Tech — Central Tech Hub',
    address: 'Plot 42, Auto Zone, GS Road, Christian Basti',
    area: 'GS Road',
    city: 'Guwahati',
    pincode: '781005',
    phone: '+91 98765 43210',
    hours: '08:00 AM – 08:30 PM (Mon - Sun)',
    rating: 4.9,
    reviews: 320,
    lat: 26.1584,
    lng: 91.7766
  },
  {
    id: 'ws-west',
    name: 'SR Multi Car Tech — West Hub & Body Shop',
    address: 'Service Road NH-27, Near Jalukbari Flyover',
    area: 'Jalukbari',
    city: 'Guwahati',
    pincode: '781014',
    phone: '+91 98765 43211',
    hours: '08:30 AM – 08:00 PM (Mon - Sat)',
    rating: 4.8,
    reviews: 215,
    lat: 26.1432,
    lng: 91.6621
  },
  {
    id: 'ws-east',
    name: 'SR Multi Car Tech — Express Care Point',
    address: 'Survey Tiniali, Beltola Road, Dispur',
    area: 'Beltola / Dispur',
    city: 'Guwahati',
    pincode: '781028',
    phone: '+91 98765 43212',
    hours: '08:00 AM – 09:00 PM (Mon - Sun)',
    rating: 4.9,
    reviews: 198,
    lat: 26.1265,
    lng: 91.7944
  },
  {
    id: 'ws-north',
    name: 'SR Multi Car Tech — Zoo Road Detailing Studio',
    address: 'Opp. State Zoo Gate, RG Baruah Road',
    area: 'Zoo Road',
    city: 'Guwahati',
    pincode: '781024',
    phone: '+91 98765 43213',
    hours: '09:00 AM – 08:00 PM (Mon - Sun)',
    rating: 4.9,
    reviews: 174,
    lat: 26.1702,
    lng: 91.7820
  }
];

export const CITIES_LIST = [
  { id: 'guwahati', name: 'Guwahati', active: true, workshops: 4 },
  { id: 'delhi-ncr', name: 'Delhi NCR', active: true, workshops: 12 },
  { id: 'bangalore', name: 'Bangalore', active: true, workshops: 9 },
  { id: 'mumbai', name: 'Mumbai', active: true, workshops: 8 },
  { id: 'kolkata', name: 'Kolkata', active: true, workshops: 6 },
  { id: 'hyderabad', name: 'Hyderabad', active: true, workshops: 7 },
  { id: 'siliguri', name: 'Siliguri', active: true, workshops: 3 }
];
