import HeroSection from '@/components/sections/HeroSection';
import QuickAccessStatisticsSection from '@/components/sections/QuickAccessStatisticsSection';
import CompanyOverviewSection from '@/components/sections/CompanyOverviewSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DigitalBankingSection from '@/components/sections/DigitalBankingSection';
import FounderSection from '@/components/sections/FounderSection';
import REAVEMGroupSection from '@/components/sections/REAVEMGroupSection';
import UBAPartnershipSection from '@/components/sections/UBAPartnershipSection';
import TransferSection from '@/components/sections/TransferSection';
import PricingSection from '@/components/sections/PricingSection';
import AnimatedBackground from '@/components/sections/AnimatedBackground';
import TermsConsentBanner from '@/components/TermsConsentBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickAccessStatisticsSection />
      <CompanyOverviewSection />
      <div className="relative">
        <AnimatedBackground />
        <ServicesSection />
      </div>
      <DigitalBankingSection />
      <FounderSection />
      <div className="relative">
        <AnimatedBackground />
        <REAVEMGroupSection />
      </div>
      <UBAPartnershipSection />
      <TransferSection />
      <PricingSection />
      <TermsConsentBanner />
    </>
  );
}


