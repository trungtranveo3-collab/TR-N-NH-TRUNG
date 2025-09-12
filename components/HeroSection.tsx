import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handleScrollToOrder = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      const headerOffset = 120; // Offset for the sticky header height + some space
      const elementPosition = orderForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Image Content Card - Placed first for mobile stacking */}
          <div className="lg:col-span-6 lg:order-2">
            <div className="info-card p-4 rounded-lg shadow-xl shadow-black/30 h-full flex items-center justify-center border-2 border-[#FDCB6E]/50">
              <img 
                src="/hau-bien-ob-product.png" 
                alt="Viên uống hàu biển OB tăng cường sinh lực nam giới" 
                className="w-full max-w-md mx-auto rounded-md object-contain"
              />
            </div>
          </div>

          {/* Text Content Card - Placed second, but ordered first on desktop */}
          <div className="lg:col-span-6 lg:order-1">
            <div className="info-card p-8 md:p-10 rounded-lg shadow-xl shadow-black/30 h-full flex flex-col border-2 border-transparent">
               <div className="text-center lg:text-left flex-grow">
                <h1 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-wide">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8">
                  {t.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {t.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-slate-200 text-lg">
                      <CheckIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <a 
                    href="#order-form" 
                    onClick={handleScrollToOrder} 
                    className="w-full text-center bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-4 px-6 rounded-full shadow-lg shadow-teal-500/30 hover:from-teal-600 hover:to-green-700 transition duration-300 transform hover:scale-105"
                    aria-label={t.ctaOrder.join(' ')}
                    >
                    <span className="block text-xl tracking-wider leading-tight">{t.ctaOrder[0]}</span>
                    <span className="block text-sm font-normal">{t.ctaOrder[2]}</span>
                  </a>
                  <a href="#order-form" onClick={handleScrollToOrder} className="w-full text-center bg-transparent border-2 border-[#FDCB6E] text-white font-bold py-3 px-6 rounded-full hover:bg-[#FDCB6E]/20 transition duration-300">
                    <span className="block text-lg leading-tight">{t.ctaConsult[0]}</span>
                    <span className="block text-lg font-bold text-[#FDCB6E] leading-tight">{t.ctaConsult[1]}</span>
                    <span className="block text-xs text-slate-300">{t.ctaConsult[2]}</span>
                  </a>
                </div>
                <p className="text-xs text-slate-400 text-center mb-2">{t.ctaMicrocopy}</p>
                <p className="text-sm font-semibold text-slate-200 text-center">{t.trustRow}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;