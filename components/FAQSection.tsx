import React from 'react';
import AccordionItem from './Accordion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].faq;

  return (
    <section id="faq" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t.title}
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {t.questions.map((item, index) => (
            <AccordionItem key={index} title={item.q}>
              <p className="text-slate-200 whitespace-pre-line">{item.a}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
