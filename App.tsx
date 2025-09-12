
import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import IngredientsSection from './components/IngredientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import OrderFormSection from './components/OrderFormSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import FAQSection from './components/FAQSection';
import StickyCTA from './components/StickyCTA';
import Header from './components/Header';
import PartnerPharmaciesSection from './components/PartnerPharmaciesSection';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="p-[2px] rounded-none sm:rounded-lg max-w-screen-2xl mx-auto my-4 sm:my-8 relative overflow-hidden led-chase-border shadow-2xl shadow-black/50">
        <div className="overflow-x-hidden bg-black/25 backdrop-blur-lg rounded-none sm:rounded-lg h-full w-full">
          <Header />
          <main>
            <HeroSection />
            <FAQSection />
            <ProblemSection />
            <BenefitsSection />
            <IngredientsSection />
            <TestimonialsSection />
            <PricingSection />
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <PartnerPharmaciesSection />
                  <OrderFormSection />
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
        <StickyCTA />
      </div>
    </LanguageProvider>
  );
};

export default App;
