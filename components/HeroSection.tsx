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
        {/* --- RESPONSIVE LAYOUT: 2 columns on desktop, stacks on mobile --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* --- LEFT COLUMN (Desktop): Avatar/Product Image --- */}
          {/* Stacks on top on mobile */}
          <div className="lg:col-span-5">
            <div className="info-card p-6 md:p-8 rounded-lg shadow-xl shadow-black/30 h-full flex items-center justify-center border-2 border-white/10">
              <img 
                src="/hau-bien-ob-product.png" 
                alt="Viên uống hàu biển OB tăng cường sinh lực nam giới" 
                // Image scales automatically to prevent overflow
                className="w-full max-w-sm mx-auto rounded-md object-contain"
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN (Desktop): Title, Description, CTA --- */}
          {/* Stacks below on mobile, content is centered */}
          <div className="lg:col-span-7">
            <div className="info-card p-6 md:p-8 rounded-lg shadow-xl shadow-black/30 h-full flex flex-col border-2 border-transparent text-center lg:text-left">
              <div className="flex-grow">
                {/* --- RESPONSIVE TYPOGRAPHY: Larger on desktop, smaller on mobile --- */}
                <h1 className="text-[28px] md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                  {t.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8">
                  {t.description}
                </p>
                <ul className="space-y-4 mb-10 flex flex-col items-center lg:items-start">
                  {t.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-slate-200 text-lg">
                      <CheckIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                {/* --- RESPONSIVE CTA BUTTONS --- */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:justify-start">
                  {/* Primary CTA: Full-width on mobile, pill-shape, gradient hover */}
                  <a 
                    href="#order-form" 
                    onClick={handleScrollToOrder} 
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-teal-500/30 hover:from-teal-600 hover:to-green-700 transition duration-300 transform hover:scale-105"
                    aria-label={t.ctaOrder.join(' ')}
                    >
                    <span className="block text-xl tracking-wider leading-tight">{t.ctaOrder[0]}</span>
                    <span className="block text-sm font-normal">{t.ctaOrder[2]}</span>
                  </a>
                  {/* Secondary CTA: Uses brand color, high-contrast hover */}
                  <a 
                    href="#order-form" 
                    onClick={handleScrollToOrder} 
                    className="w-full sm:w-auto text-center bg-transparent border-2 border-[#FFC045] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[#FFC045] hover:text-slate-900 group"
                  >
                    <span className="block text-lg leading-tight">{t.ctaConsult[0]}</span>
                    <span className="block text-lg font-bold text-[#FFC045] leading-tight group-hover:text-slate-900 transition-colors duration-300">{t.ctaConsult[1]}</span>
                    <span className="block text-xs text-slate-300 group-hover:text-slate-700 transition-colors duration-300">{t.ctaConsult[2]}</span>
                  </a>
                </div>
                <p className="text-xs text-slate-400 text-center lg:text-left mb-2">{t.ctaMicrocopy}</p>
                <div className="flex items-center justify-center lg:justify-start mt-2">
                  <span className="text-lg text-[#FDCB6E] mr-2" aria-hidden="true">★★★★★</span>
                  <p className="text-sm font-semibold text-slate-200">{t.trustRow}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;