import { NextResponse } from 'next/server';
import { OFFERS_LIST } from '@/lib/data/offersData';

export async function GET() {
  return NextResponse.json({ success: true, coupons: OFFERS_LIST });
}

export async function POST(request: Request) {
  try {
    const { code, amount } = await request.json();
    const clean = (code || '').trim().toUpperCase();

    const coupon = OFFERS_LIST.find(c => c.code.toUpperCase() === clean);
    if (!coupon) {
      return NextResponse.json({ success: false, message: 'Invalid coupon code' }, { status: 404 });
    }

    if (amount < coupon.minOrder) {
      return NextResponse.json({
        success: false,
        message: `Minimum booking value of ₹${coupon.minOrder} required for ${coupon.code}`
      }, { status: 400 });
    }

    let discount = 0;
    if (coupon.discountType === 'PERCENT') {
      discount = Math.round((amount * coupon.discountValue) / 100);
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else {
      discount = coupon.discountValue;
    }

    return NextResponse.json({
      success: true,
      coupon: coupon.code,
      discount,
      message: `Coupon ${coupon.code} applied! Saved ₹${discount}.`
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Validation failed' }, { status: 400 });
  }
}
