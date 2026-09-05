import React from 'react';
import {
  Users,
  BadgePercent,
  ShieldCheck,
  FileCheck2,
  Award,
  Smartphone,
  Truck,
  Home,
  Activity,
  Headphones
} from 'lucide-react';

export default function WhyChooseUs() {
  const trustPoints = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Experienced Technicians',
      desc: 'Factory-trained master diagnostic mechanics with over 8+ years of hands-on experience.'
    },
    {
      icon: <BadgePercent className="w-5 h-5" />,
      title: 'Transparent Pricing',
      desc: '100% upfront estimates with zero hidden extras or unauthorized part replacements.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: '100% Genuine Parts',
      desc: 'Only authentic OEM/OES certified spares, synthetic lubricants, and sealed filters.'
    },
    {
      icon: <FileCheck2 className="w-5 h-5" />,
      title: '50-Point Quality Inspection',
      desc: 'Every car undergoes a stringent multi-point checklist with digital health report.'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Service Warranty',
      desc: 'Up to 2 years warranty on body paint and 1000 km warranty on periodic services.'
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: 'Convenient Online Booking',
      desc: 'Reserve a service slot in under 60 seconds with instant booking ID and schedule confirmation.'
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: 'Free Pickup & Drop',
      desc: 'Complimentary doorstep valet service across all major residential and corporate zones.'
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: 'Doorstep Service',
      desc: 'Mobile van equipped with pressure cleaners, oil suction, and battery testers for on-site care.'
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: 'Digital Service Tracking',
      desc: 'Track vehicle arrival, live inspection photos, parts fitted, and test drive in real time.'
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: 'Dedicated Customer Support',
      desc: 'Assigned service advisor available over direct call and WhatsApp throughout the job.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Why Choose SR Multi Car Tech?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Built from the ground up to eliminate dishonest quotes, poor workmanship, and inconvenient workshop visits.
          </p>
        </div>

        {/* 10 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {trustPoints.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-rose-200 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
