import { NextResponse } from 'next/server';
import { SERVICE_PACKAGES, SERVICE_CATEGORIES } from '@/lib/data/servicesData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (category && category !== 'all') {
    const filtered = SERVICE_PACKAGES.filter(s => s.categoryId === category);
    return NextResponse.json({ success: true, services: filtered, categories: SERVICE_CATEGORIES });
  }

  return NextResponse.json({ success: true, services: SERVICE_PACKAGES, categories: SERVICE_CATEGORIES });
}
