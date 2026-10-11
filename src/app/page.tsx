import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import QuickTrustBar from '@/components/home/QuickTrustBar';
import OwnerSection from '@/components/home/OwnerSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechnologySection from '@/components/home/TechnologySection';
import PortfolioSection from '@/components/home/PortfolioSection';
import CustomerReviews from '@/components/home/CustomerReviews';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import ContactSection from '@/components/home/ContactSection';
import FaqSection from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Trust Bar */}
      <QuickTrustBar />

      {/* 3. Owner / Founder Profile (BRR — Birlangi Ratnala Ramesh) */}
      <OwnerSection />

      {/* 4. Complete Services Section (12 Services Categorized) */}
      <ServicesSection />

      {/* 5. Advanced Technology & Diagnostics Section */}
      <TechnologySection />

      {/* 6. Our Work / Portfolio (Interactive Gallery & Lightbox) */}
      <PortfolioSection />

      {/* 7. Customer Reviews & Experiences */}
      <CustomerReviews />

      {/* 9. Why Choose SR Multicartech */}
      <WhyChooseUs />

      {/* 10. Service Process (4-Step Timeline) */}
      <HowItWorks />

      {/* 11. Contact & Service Enquiry Form */}
      <ContactSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />
    </>
  );
}
