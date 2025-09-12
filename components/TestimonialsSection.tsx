import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-[#FDCB6E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
)

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const testimonialCards = [
      {...t.cards[0], avatar: '/avatar-customer-1.png'},
      {...t.cards[1], avatar: '/avatar-customer-2.png'}
  ]

  return (
    <section id="testimonials" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          {t.title}
        </h2>
        
        {/* Customer Testimonials */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-10">{t.subtitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto md:items-stretch">
            {testimonialCards.map((testimonial, index) => (
              <div key={index} className="info-card info-card-interactive p-6 rounded-lg shadow-lg shadow-black/20 flex gap-6 items-start h-full">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/30 flex-shrink-0" />
                <div className="flex-1">
                  <QuoteIcon />
                  <p className="text-slate-200 italic my-3">"{testimonial.quote}"</p>
                  <p className="font-bold text-white">{testimonial.name}, {testimonial.age} {t.ageSuffix}</p>
                  <p className="text-slate-300">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert and Certification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Expert Opinion */}
          <div className="info-card p-8 rounded-lg shadow-xl shadow-black/30 flex flex-col items-center text-center h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">{t.expert.title}</h3>
            <img src="/avatar-expert.png" alt={t.expert.expertName} className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white/30 mb-6" />
            <div className="flex-grow flex items-center">
                <div>
                    <p className="text-lg text-slate-200 italic">“{t.expert.quote}”</p>
                    <p className="mt-4 font-bold text-slate-100">- {t.expert.expertName}.</p>
                </div>
            </div>
          </div>
          
          {/* Certification */}
          <div className="info-card p-8 rounded-lg shadow-xl shadow-black/30 flex flex-col justify-center items-center text-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-xl sm:text-2xl font-bold text-slate-100 mt-4">{t.certification.title}</p>
            <p className="text-lg sm:text-xl text-slate-300 mt-2">{t.certification.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;