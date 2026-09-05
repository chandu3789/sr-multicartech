'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Booking } from '../data/types';
import { OFFERS_LIST } from '../data/offersData';

const INITIAL_DEMO_BOOKINGS: Booking[] = [
  {
    id: 'b-10821',
    bookingNumber: 'SRMCT-10821',
    createdAt: 'Today, 09:15 AM',
    customerName: 'Bikash Kalita',
    customerPhone: '9876543210',
    customerEmail: 'bikash@example.com',
    carBrand: 'Hyundai',
    carModel: 'Creta SX',
    carFuel: 'Petrol',
    carYear: 2022,
    serviceId: 'srv-comprehensive',
    serviceTitle: 'Comprehensive Car Service',
    serviceType: 'PICKUP_DROP',
    stage: 'INSPECTION_STARTED',
    address: 'Flat 4B, Silver Heights, GS Road, Christian Basti',
    city: 'Guwahati',
    pincode: '781005',
    scheduledDate: '2026-09-05',
    timeSlot: '10:00 AM - 11:00 AM',
    technicianName: 'Rajesh Bora (Master Technician)',
    technicianPhone: '+91 98765 11002',
    workshopName: 'SR Multi Car Tech — Central Tech Hub',
    basePrice: 3999,
    additionalCharges: 0,
    discount: 400,
    gst: 647,
    total: 4246,
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    couponCode: 'SRFIRST10',
    notes: 'Engine oil replacement and 50-point safety inspection underway. AC airflow verified.',
    inspectionPointsPassed: 28,
    totalInspectionPoints: 50
  },
  {
    id: 'b-10905',
    bookingNumber: 'SRMCT-10905',
    createdAt: 'Today, 11:30 AM',
    customerName: 'Prashant Barman',
    customerPhone: '9864012345',
    customerEmail: 'prashant@example.com',
    carBrand: 'Maruti Suzuki',
    carModel: 'Swift ZXi',
    carFuel: 'Petrol',
    carYear: 2020,
    serviceId: 'srv-ac-gas-leak',
    serviceTitle: 'AC Gas Refill & Leak Inspection',
    serviceType: 'DOORSTEP',
    stage: 'SERVICE_IN_PROGRESS',
    address: 'House No 18, Zoo Road Tiniali, RG Baruah Road',
    city: 'Guwahati',
    pincode: '781024',
    scheduledDate: '2026-09-05',
    timeSlot: '02:00 PM - 03:00 PM',
    technicianName: 'Munna Ahmed (HVAC Specialist)',
    technicianPhone: '+91 98765 11004',
    workshopName: 'SR Multi Car Tech — Zoo Road Hub',
    basePrice: 1299,
    additionalCharges: 0,
    discount: 130,
    gst: 210,
    total: 1379,
    paymentMethod: 'Pay at Doorstep',
    paymentStatus: 'PENDING',
    couponCode: 'SRFIRST10',
    notes: 'Vacuum leak testing completed. Currently recharging R134a eco-gas.',
    inspectionPointsPassed: 18,
    totalInspectionPoints: 25
  },
  {
    id: 'b-10764',
    bookingNumber: 'SRMCT-10764',
    createdAt: 'Yesterday, 03:45 PM',
    customerName: 'Ananya Sharma',
    customerPhone: '9854098765',
    customerEmail: 'ananya.s@example.com',
    carBrand: 'Tata',
    carModel: 'Nexon',
    carFuel: 'Diesel',
    carYear: 2021,
    serviceId: 'srv-wheel-alignment',
    serviceTitle: '3D Laser Wheel Alignment & Balancing',
    serviceType: 'WORKSHOP',
    stage: 'COMPLETED',
    address: 'Survey Point, Beltola Tiniali',
    city: 'Guwahati',
    pincode: '781028',
    scheduledDate: '2026-09-04',
    timeSlot: '04:00 PM - 05:00 PM',
    technicianName: 'Suman Saikia',
    technicianPhone: '+91 98765 11006',
    workshopName: 'SR Multi Car Tech — Express Care Point',
    basePrice: 699,
    additionalCharges: 0,
    discount: 0,
    gst: 125,
    total: 824,
    paymentMethod: 'Credit Card',
    paymentStatus: 'PAID',
    notes: 'All 4 rims laser balanced and toe angle calibrated to 0.05°. Road tested perfectly.',
    inspectionPointsPassed: 20,
    totalInspectionPoints: 20
  }
];

interface BookingContextType {
  bookings: Booking[];
  addBooking: (newBookingData: Omit<Booking, 'id' | 'bookingNumber' | 'createdAt' | 'stage' | 'technicianName' | 'technicianPhone' | 'workshopName' | 'inspectionPointsPassed' | 'totalInspectionPoints'>) => Booking;
  updateBookingStage: (bookingNumber: string, newStage: Booking['stage'], note?: string) => void;
  getBooking: (query: string) => Booking | undefined;
  applyCoupon: (code: string, subtotal: number) => { valid: boolean; discount: number; message: string };
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_DEMO_BOOKINGS);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('srmct_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('LocalStorage error in BookingProvider', e);
    }
  }, []);

  const saveBookings = (updatedList: Booking[]) => {
    setBookings(updatedList);
    try {
      localStorage.setItem('srmct_bookings', JSON.stringify(updatedList));
    } catch (e) {
      console.warn(e);
    }
  };

  const addBooking = (data: Omit<Booking, 'id' | 'bookingNumber' | 'createdAt' | 'stage' | 'technicianName' | 'technicianPhone' | 'workshopName' | 'inspectionPointsPassed' | 'totalInspectionPoints'>): Booking => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const bookingNumber = `SRMCT-${randomSuffix}`;
    const id = `b-${randomSuffix}`;

    const newBooking: Booking = {
      ...data,
      id,
      bookingNumber,
      createdAt: 'Just now',
      stage: 'CONFIRMED',
      technicianName: 'Rajesh Bora (Senior Technician Assigned)',
      technicianPhone: '+91 98765 11002',
      workshopName: 'SR Multi Car Tech — Central Tech Hub',
      inspectionPointsPassed: 5,
      totalInspectionPoints: 50
    };

    const updated = [newBooking, ...bookings];
    saveBookings(updated);
    return newBooking;
  };

  const updateBookingStage = (bookingNumber: string, newStage: Booking['stage'], note?: string) => {
    const updated = bookings.map(b => {
      if (b.bookingNumber.toLowerCase() === bookingNumber.toLowerCase()) {
        return {
          ...b,
          stage: newStage,
          notes: note || b.notes
        };
      }
      return b;
    });
    saveBookings(updated);
  };

  const getBooking = (query: string): Booking | undefined => {
    if (!query) return undefined;
    const clean = query.trim().toLowerCase();
    return bookings.find(
      b => b.bookingNumber.toLowerCase() === clean || b.customerPhone.includes(clean)
    );
  };

  const applyCoupon = (code: string, subtotal: number) => {
    const cleanCode = code.trim().toUpperCase();
    const coupon = OFFERS_LIST.find(c => c.code.toUpperCase() === cleanCode);

    if (!coupon) {
      return { valid: false, discount: 0, message: 'Invalid coupon code. Try SRFIRST10 or SRCAR20.' };
    }

    if (subtotal < coupon.minOrder) {
      return { valid: false, discount: 0, message: `Minimum booking value of ₹${coupon.minOrder} required for ${coupon.code}.` };
    }

    let discount = 0;
    if (coupon.discountType === 'PERCENT') {
      discount = Math.round((subtotal * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else {
      discount = coupon.discountValue;
    }

    return { valid: true, discount, message: `Coupon ${coupon.code} applied! Saved ₹${discount}.` };
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        updateBookingStage,
        getBooking,
        applyCoupon
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
