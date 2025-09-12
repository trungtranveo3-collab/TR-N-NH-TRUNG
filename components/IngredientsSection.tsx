import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const CheckCircleIcon = () => (
    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const IngredientsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].ingredients;

  const images = [
    "/ingredient-oyster.png", // Oyster
    "/ingredient-zinc.png",   // Zinc
    "/ingredient-selenium.png"// Selenium
  ];

  return (
    <section id="ingredients" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          {t.title}
        </h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {t.items.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Column 1: Text Info (.feature-info) */}
              <div className="info-card p-8 rounded-lg shadow-xl shadow-black/30 h-full">
                <h3 className="text-2xl font-bold text-[#FDCB6E] mb-4">{item.title}</h3>
                <p className="text-slate-200 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircleIcon />
                      <span className="text-slate-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Image (.feature-image) */}
              <div className="info-card p-4 rounded-lg shadow-xl shadow-black/30 h-full">
                 <img 
                    src={images[index]} 
                    alt={item.title} 
                    className="rounded-md w-full h-full object-cover" 
                    loading="lazy"
                  />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-slate-300 italic max-w-3xl mx-auto">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
};

export default IngredientsSection;