import HeroSection from '@/components/home/HeroSection';
import PopularServices from '@/components/home/PopularServices';
import ServiceCategoriesGrid from '@/components/home/ServiceCategoriesGrid';
import SpecialOffers from '@/components/home/SpecialOffers';
import OwnerSection from '@/components/home/OwnerSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import BrandCarousel from '@/components/home/BrandCarousel';
import WorkshopLocator from '@/components/home/WorkshopLocator';
import CustomerReviews from '@/components/home/CustomerReviews';
import StatsSection from '@/components/home/StatsSection';
import FaqSection from '@/components/home/FaqSection';
import CtaBanner from '@/components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 2. Hero & 3. Quick Booking Widget */}
      <HeroSection />

      {/* 4. Popular Services */}
      <PopularServices />

      {/* 5. Service Categories Grid */}
      <ServiceCategoriesGrid />

      {/* 6. Special Offers (Coming Soon) */}
      <SpecialOffers />

      {/* 7. Founder & German Diagnostic Technology */}
      <OwnerSection />

      {/* 8. Why Choose SR Multi Car Tech */}
      <WhyChooseUs />

      {/* 8. How It Works (4 Steps) */}
      <HowItWorks />

      {/* 9. Car Brands We Service */}
      <BrandCarousel />

      {/* 10. Workshop Locator */}
      <WorkshopLocator />

      {/* 11. Customer Reviews */}
      <CustomerReviews />

      {/* 12. Stats Section */}
      <StatsSection />

      {/* 13. FAQ Section */}
      <FaqSection />

      {/* 14. CTA Banner */}
      <CtaBanner />
    </>
  );
}
