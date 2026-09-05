import { NextResponse } from 'next/server';
import { CAR_BRANDS } from '@/lib/data/carData';

export async function GET() {
  return NextResponse.json({ success: true, brands: CAR_BRANDS });
}
