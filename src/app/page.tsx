import FeaturesSection from '@/components/landing/FeatureSection';
import LandingSection from '@/components/landing/LandingSection';
import StepsSection from '@/components/landing/StepSection';
import Header from '@/components/ui/Header';

export default function page() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <LandingSection />
        <FeaturesSection />
        <StepsSection />
      </div>
    </>
  );
}
