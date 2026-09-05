import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Legal & Privacy</span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Privacy Policy</h1>
            <p className="text-xs text-slate-400 mt-1">Last updated: August 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              At SR Multi Car Tech, we collect information you provide directly when booking a service, requesting emergency SOS roadside assistance, creating an account, or communicating with our customer care advisors. This includes your name, phone number, email address, physical vehicle location, and car details (make, model, fuel, and registration number).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              Your information is utilized solely to provide, schedule, and complete automotive repair services, dispatch technicians and recovery flatbeds to your location, deliver digital inspection reports, process cashless insurance claims, and send service updates via SMS, email, and WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Payment Security</h2>
            <p>
              We prioritize data security. We do NOT store payment card credentials on our servers. All digital transactions are processed through encrypted, PCI-DSS compliant payment gateways (such as Razorpay).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Contact Information</h2>
            <p>
              For any questions regarding our privacy practices or data policies, contact us at <strong>care@srmulticartech.com</strong> or call <strong>+91 98765 43210</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
