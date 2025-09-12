import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const PricingCard: React.FC<{ title: string; price: string; savings?: string; isRecommended?: boolean; buttonText: string; recommendedText: string; savingsText: string; }> = ({ title, price, savings, isRecommended, buttonText, recommendedText, savingsText }) => {
  const handleScrollToOrder = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`rounded-lg p-6 text-center flex flex-col ${isRecommended ? 'bg-white/5 border-teal-400 border-2 relative shadow-2xl shadow-teal-500/30 transition-transform duration-300 transform hover:-translate-y-2' : 'info-card info-card-interactive shadow-lg shadow-black/20'}`}>
      {isRecommended && (
        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full">{recommendedText}</span>
      )}
      <div className="flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-2xl sm:text-3xl font-bold text-[#FDCB6E] mb-2">{price}</p>
        {savings && (
          <p className="text-green-400 font-semibold mb-6">{savingsText} {savings}</p>
        )}
        {!savings && <p className="mb-6 h-[24px]"></p>}
      </div>
      <a 
        href="#order-form" 
        onClick={handleScrollToOrder}
        className={`w-full block font-bold py-3 px-6 rounded-full transition duration-300 mt-4 text-lg ${isRecommended ? 'bg-gradient-to-r from-teal-500 to-green-600 text-white hover:from-teal-600 hover:to-green-700' : 'bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500/20'}`}>
        {buttonText}
      </a>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].pricing;

  return (
    <section id="pricing" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto sm:items-stretch">
          {t.plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title} 
              price={plan.price} 
              savings={plan.savings}
              isRecommended={plan.isRecommended}
              buttonText={t.buyNow}
              recommendedText={t.recommended}
              savingsText={t.save}
            />
          ))}
        </div>
        <p className="text-center mt-12 text-lg font-semibold text-green-400">
          {t.shipping}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;