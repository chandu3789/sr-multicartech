import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { issue, mobile, location, vehicle } = await request.json();

    const dispatchId = `SOS-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      dispatchId,
      status: 'DISPATCHED',
      etaMinutes: 18,
      assignedUnit: 'Rapid Breakdown Rescue Van #4',
      technician: {
        name: 'Dhiraj',
        phone: '+91 95504 25789'
      },
      message: 'Technician dispatched and en route to your GPS location.'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process SOS request' }, { status: 400 });
  }
}
