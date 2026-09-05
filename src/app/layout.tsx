import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import SupportChatWidget from '@/components/chat/SupportChatWidget';
import { CarProvider } from '@/lib/context/CarContext';
import { BookingProvider } from '@/lib/context/BookingContext';
import { CityProvider } from '@/lib/context/CityContext';

export const metadata: Metadata = {
  title: 'SR Multi Car Tech — Complete Car Care. One Trusted Place.',
  description: 'Book certified car servicing, periodic maintenance, AC repair, denting & painting, battery replacement, 3D wheel alignment, and 24/7 roadside SOS assistance with free pickup and drop.',
  keywords: 'car service, auto repair, car maintenance, AC repair, battery jumpstart, Guwahati car service, wheel alignment, denting painting, car spa, mobile mechanic',
  openGraph: {
    title: 'SR Multi Car Tech — Expert Car Service, Wherever You Need It',
    description: 'Transparent pricing, skilled technicians, and reliable car care for every journey. Certified OEM parts and up to 2 years warranty.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SR Multi Car Tech'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-rose-500 selection:text-white pb-16 md:pb-0">
        <CityProvider>
          <CarProvider>
            <BookingProvider>
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <FloatingActions />
              <SupportChatWidget />
            </BookingProvider>
          </CarProvider>
        </CityProvider>
      </body>
    </html>
  );
}
