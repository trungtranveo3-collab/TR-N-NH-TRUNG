import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const FlameIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-4.5 0v5.25A2.25 2.25 0 0012 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75l-2.625 2.625M17.25 10.5l-2.625 2.625" />
    </svg>
);

const BatteryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6.75A2.25 2.25 0 015.25 4.5h9.75a2.25 2.25 0 012.25 2.25v.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 9h-1.5v6h1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.5h.75" />
    </svg>
);

const SadFaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.5 4.5 0 0012 15a4.5 4.5 0 00-3.182 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FDCB6E] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const iconMap = {
    FlameIcon: <FlameIcon />,
    BatteryIcon: <BatteryIcon />,
    SadFaceIcon: <SadFaceIcon />,
    ClockIcon: <ClockIcon />,
};

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].problem;

  return (
    <section className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto lg:items-stretch">
          {t.groups.map((group, groupIndex) => (
            <div key={groupIndex} className="info-card info-card-interactive p-8 rounded-lg shadow-xl shadow-black/30 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-center text-[#FDCB6E] mb-8">{group.title}</h3>
              <div className="space-y-8 flex-grow flex flex-col justify-center">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    {iconMap[item.icon as keyof typeof iconMap]}
                    <p className="mt-3 font-semibold text-lg text-slate-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;