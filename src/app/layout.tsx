import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import SosModal from '@/components/common/SosModal';
import { SosProvider } from '@/lib/context/SosContext';
import { CityProvider } from '@/lib/context/CityContext';
import { CarProvider } from '@/lib/context/CarContext';
import { BookingProvider } from '@/lib/context/BookingContext';

export const metadata: Metadata = {
  title: 'SR Multicartech | Premium Car Service & Auto Repair',
  description:
    'SR Multicartech is a premium automobile service and repair garage in Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple. Expert denting, painting, full engine works, body repair, genuine spare parts, car detailing, and German diagnostic technology.',
  keywords: [
    'SR Multicartech',
    'automobile service',
    'car repair',
    'denting',
    'painting',
    'engine works',
    'body repair',
    'car detailing',
    'Satrampadu',
    'Eluru car service',
    'German car diagnostics',
    'genuine spare parts',
    'anti rust treatment'
  ],
  authors: [{ name: 'BRR — Birlangi Ratnala Ramesh' }],
  openGraph: {
    title: 'SR Multicartech | Premium Car Service & Auto Repair',
    description:
      'Advanced Automotive Care. Experienced Hands. Advanced Technology. Founder BRR with 15+ years experience in Satrampadu, Eluru.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SR Multicartech'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: 'SR Multicartech',
  image: 'https://srmulticartech.com/images/sr-logo.png',
  telephone: '+919550425789',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Satrampadu, Opp. Aditya Degree College, Near Ambika Devi Temple',
    addressLocality: 'Satrampadu, Eluru',
    addressRegion: 'Andhra Pradesh',
    postalCode: '534007',
    addressCountry: 'IN'
  },
  founder: {
    '@type': 'Person',
    name: 'Birlangi Ratnala Ramesh (BRR)',
    jobTitle: 'Founder & Owner'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:30'
    }
  ],
  priceRange: '₹₹'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-20 md:pb-0 overflow-x-hidden antialiased">
        <CityProvider>
          <CarProvider>
            <BookingProvider>
              <SosProvider>
                <Header />
                <main className="flex-grow w-full overflow-x-hidden">
                  {children}
                </main>
                <Footer />
                <FloatingActions />
                <MobileBottomBar />
                <SosModal />
              </SosProvider>
            </BookingProvider>
          </CarProvider>
        </CityProvider>
      </body>
    </html>
  );
}
