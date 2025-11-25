import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import QuickAccessSection from '@/components/sections/QuickAccessSection';
import CompanyOverviewSection from '@/components/sections/CompanyOverviewSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DigitalBankingSection from '@/components/sections/DigitalBankingSection';
import FounderSection from '@/components/sections/FounderSection';
import REAVEMGroupSection from '@/components/sections/REAVEMGroupSection';
import UBAPartnershipSection from '@/components/sections/UBAPartnershipSection';
import TransferSection from '@/components/sections/TransferSection';
import PricingSection from '@/components/sections/PricingSection';
import AgenciesSection from '@/components/sections/AgenciesSection';
import SecuritySection from '@/components/sections/SecuritySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import AnimatedBackground from '@/components/sections/AnimatedBackground';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <QuickAccessSection />
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
      <AgenciesSection />
      <SecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}


