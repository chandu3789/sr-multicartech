import React from 'react';
import { Car, Users, Layers, Star } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Car className="w-6 h-6 text-rose-500" />,
      number: '10,000+',
      label: 'Cars Serviced & Maintained',
      subtext: 'Across hatchback, sedan & SUV segments'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      number: '50+',
      label: 'Expert Technicians',
      subtext: 'Certified mechanical & electrical specialists'
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-500" />,
      number: '25+',
      label: 'Service Categories',
      subtext: 'From express lube to full accident repair'
    },
    {
      icon: <Star className="w-6 h-6 text-rose-500" />,
      number: '4.8 / 5',
      label: 'Customer Rating',
      subtext: 'Based on 2,500+ verified customer reviews'
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1 font-sans">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
