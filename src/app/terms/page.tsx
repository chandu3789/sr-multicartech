import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Legal Agreement</span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Terms & Conditions</h1>
            <p className="text-xs text-slate-400 mt-1">Effective Date: August 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Service Scope & Upfront Pricing</h2>
            <p>
              SR Multi Car Tech offers multi-brand automotive servicing, repair, detailing, body shop, and roadside emergency assistance. All prices displayed on our website represent starting estimates for standard vehicle classes. Any additional wear, mechanical part replacement, or specialized fluid discovered during the multi-point inspection will be submitted to the car owner for digital approval prior to commencing work.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Service Warranties</h2>
            <p>
              Periodic car services carry an unconditional warranty of 1,000 km or 1 Month, whichever occurs first. DuPont paint booth refinishing carries up to 2 years warranty against paint peeling or bubbling under normal usage conditions. New batteries carry standard manufacturer warranty cards (up to 55 months).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Valet Pickup & Drop Service</h2>
            <p>
              Complimentary pickup and drop is performed by licensed, verified company drivers. Car owners are advised to remove personal valuables and loose currency prior to vehicle handover.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Cancellations & Rescheduling</h2>
            <p>
              Customers may reschedule or cancel any appointment free of charge before technician dispatch or vehicle collection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
