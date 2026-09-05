export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does SR Multi Car Tech compare with authorized service centers?',
    answer: 'SR Multi Car Tech delivers dealer-grade servicing at up to 40% lower cost by eliminating dealership markup on labor while strictly using 100% genuine OEM/OES certified spare parts and premium lubricants (Castrol, Shell, Bosch, Mobil). Plus, you get live digital tracking, free pickup & drop, and unconditional service warranties.'
  },
  {
    id: 'faq-2',
    category: 'Booking & Pickup',
    question: 'Is car pickup and drop completely free?',
    answer: 'Yes! Complimentary door-to-door pickup and drop is included with all major service packages within municipal city limits. You can track the driver arrival and live service status straight from our website or WhatsApp.'
  },
  {
    id: 'faq-3',
    category: 'Doorstep Service',
    question: 'Can I get my car serviced right at my home or office?',
    answer: 'Absolutely. For Periodic Maintenance (Basic & Standard), AC Filter & Disinfection, Battery Replacement, Jumpstarts, and Quick Inspections, our specially outfitted mobile service vans can service your car right in your driveway or parking space.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & Billing',
    question: 'Are there any hidden or surprise charges after booking?',
    answer: 'Never. We uphold an ironclad transparent pricing policy. Every quote includes detailed line items for parts, labor, and GST. If our technician discovers any additional wear or necessary component renewal during the 50-point inspection, you will receive an approval notification with exact photos and pricing before any work proceeds.'
  },
  {
    id: 'faq-5',
    category: 'Warranty',
    question: 'What warranty is offered on repairs and services?',
    answer: 'We provide up to 1,000 km or 1 Month warranty on periodic maintenance, 6 months warranty on AC repairs, and up to 2 years warranty on DuPont paint booth denting and painting against peeling and color fading. Batteries carry manufacturer warranties up to 55 months.'
  },
  {
    id: 'faq-6',
    category: 'Emergency & SOS',
    question: 'How quickly does the Roadside Assistance / SOS team arrive?',
    answer: 'Our average SOS arrival time is 25–35 minutes within city limits. We have rapid-dispatch mobile motorcycle units with jumpstarters and puncture kits, as well as dedicated hydraulic flatbed recovery trucks stationed across prime hubs.'
  },
  {
    id: 'faq-7',
    category: 'Insurance',
    question: 'Do you offer cashless insurance claim processing?',
    answer: 'Yes, SR Multi Car Tech is tied up with leading Indian insurance providers including ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India, United India, and Reliance General. We handle surveyor inspection, digital paperwork, and cashless settlement directly.'
  }
];
