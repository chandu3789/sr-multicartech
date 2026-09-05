import { NextResponse } from 'next/server';
import { Booking } from '@/lib/data/types';

// In-memory demo store for API requests
let mockBookings: Booking[] = [
  {
    id: 'b-10821',
    bookingNumber: 'SRMCT-10821',
    createdAt: 'Today, 09:15 AM',
    customerName: 'Purna Rao',
    customerPhone: '9550425789',
    customerEmail: 'customer@srmulticartech.com',
    carBrand: 'Hyundai',
    carModel: 'Creta SX',
    carFuel: 'Petrol',
    carYear: 2022,
    serviceId: 'srv-comprehensive',
    serviceTitle: 'Comprehensive Car Service',
    serviceType: 'PICKUP_DROP',
    stage: 'INSPECTION_STARTED',
    address: 'Near Main Road, Satrampadu',
    city: 'Eluru, Andhra Pradesh',
    pincode: '534007',
    scheduledDate: '2026-09-05',
    timeSlot: '10:00 AM - 11:00 AM',
    technicianName: 'Rajesh (Master Technician)',
    technicianPhone: '+91 95504 25789',
    workshopName: 'SR Multi Car Tech — Satrampadu, Eluru',
    basePrice: 3999,
    additionalCharges: 0,
    discount: 400,
    gst: 647,
    total: 4246,
    paymentMethod: 'UPI',
    paymentStatus: 'PAID',
    couponCode: 'SRFIRST10',
    notes: 'Engine oil replacement and 50-point safety inspection underway.',
    inspectionPointsPassed: 28,
    totalInspectionPoints: 50
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (query) {
    const clean = query.trim().toLowerCase();
    const match = mockBookings.find(
      b => b.bookingNumber.toLowerCase() === clean || b.customerPhone.includes(clean)
    );
    if (match) {
      return NextResponse.json({ success: true, booking: match });
    }
    return NextResponse.json({ success: false, message: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, bookings: mockBookings });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const bookingNumber = `SRMCT-${randomSuffix}`;

    const newBooking: Booking = {
      ...body,
      id: `b-${randomSuffix}`,
      bookingNumber,
      createdAt: 'Just now',
      stage: 'CONFIRMED',
      technicianName: 'Rajesh (Assigned Master Technician)',
      technicianPhone: '+91 95504 25789',
      workshopName: 'SR Multi Car Tech — Satrampadu, Eluru',
      inspectionPointsPassed: 5,
      totalInspectionPoints: 50
    };

    mockBookings.unshift(newBooking);
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create booking' }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { bookingNumber, stage, note } = body;

    const booking = mockBookings.find(
      b => b.bookingNumber.toLowerCase() === bookingNumber.toLowerCase()
    );

    if (!booking) {
      return NextResponse.json({ success: false, message: 'Booking not found' }, { status: 404 });
    }

    if (stage) booking.stage = stage;
    if (note) booking.notes = note;

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update booking' }, { status: 400 });
  }
}
