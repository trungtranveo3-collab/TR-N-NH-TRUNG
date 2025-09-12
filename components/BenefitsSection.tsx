import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const HeartSparkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const CrownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214C15.635 5.357 15.893 5.517 16.129 5.693 16.136 5.7 16.142 5.708 16.149 5.715 17.39 6.55 18 7.85 18 9.25c0 1.4-.61 2.7-1.851 3.535-.007.007-.013.014-.021.021-1.24 1.043-2.9 1.694-4.629 1.694s-3.389-.651-4.629-1.694c-.007-.007-.014-.014-.021-.021C5.61 11.95 5 10.65 5 9.25c0-1.4.61-2.7 1.851-3.535.007-.007.013-.014.021-.021.236-.176.494-.336.767-.479M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>

);

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-5.122 0-9.25-4.128-9.25-9.25S6.878 3.25 12 3.25c5.122 0 9.25 4.128 9.25 9.25 0 1.345-.283 2.62-.795 3.785a.75.75 0 01-1.32.555 7.75 7.75 0 00-14.22 0 .75.75 0 01-1.32-.555A9.218 9.218 0 012.75 12.5 9.25 9.25 0 0112 3.25z" />
    </svg>
);

const BenefitsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].benefits;
  
  const benefits = [
    { icon: <HeartSparkIcon />, title: t.cards[0].title, description: t.cards[0].description },
    { icon: <ShieldIcon />, title: t.cards[1].title, description: t.cards[1].description },
    { icon: <CrownIcon />, title: t.cards[2].title, description: t.cards[2].description },
    { icon: <LeafIcon />, title: t.cards[3].title, description: t.cards[3].description },
  ];

  return (
    <section id="benefits" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:items-stretch">
          {benefits.map((benefit, index) => (
            <div key={index} className="info-card info-card-interactive text-center p-8 rounded-lg shadow-lg shadow-black/20 flex flex-col h-full">
              {benefit.icon}
              <h3 className="mt-4 font-bold text-xl text-white">{benefit.title}</h3>
              <p className="mt-2 text-slate-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;