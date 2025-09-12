import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const StickyCTA: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handleScrollToOrder = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3 z-50 border-t border-white/20 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)]">
      <a
        href="#order-form"
        onClick={handleScrollToOrder}
        className="w-full inline-block text-center bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-teal-500/40 hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
      >
        <span className="block text-lg tracking-wider leading-tight">{t.ctaOrder[0]}</span>
        <span className="block text-xs font-normal">{t.ctaOrder[2]}</span>
      </a>
    </div>
  );
};

export default StickyCTA;