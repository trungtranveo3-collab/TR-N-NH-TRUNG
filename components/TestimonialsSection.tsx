import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const QuoteIcon = () => (
    <svg className="w-8 h-8 text-[#FDCB6E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
)

const OfficialSealIcon = () => (
  <div className="relative h-20 w-20">
    {/* Faint spinning glow for effect */}
    <svg className="absolute inset-0 h-full w-full text-amber-400/30 animate-spin" style={{ animationDuration: '10s', animationTimingFunction: 'linear' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {/* Main seal icon */}
    <svg className="relative h-full w-full text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15.7L8.23 18L9.23 13.7L6 10.8L10.33 10.4L12 6.5L13.67 10.4L18 10.8L14.77 13.7L15.77 18L12 15.7Z" fill="currentColor" />
    </svg>
  </div>
);


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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Customer Testimonials */}
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

          {/* Certification Card */}
          <div className="info-card info-card-interactive p-6 rounded-lg shadow-lg shadow-amber-500/10 flex flex-col justify-center items-center text-center h-full border-2 border-amber-400/50 bg-amber-400/5 hover:border-amber-400 hover:shadow-amber-500/20">
            <OfficialSealIcon />
            <p className="text-xl sm:text-2xl font-bold text-slate-100 mt-4">{t.certification.title}</p>
            <p className="text-lg sm:text-xl text-slate-300 mt-2">{t.certification.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;