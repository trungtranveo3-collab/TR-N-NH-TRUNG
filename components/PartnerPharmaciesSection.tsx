
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

// The requested filenames. Users should place these in `public/pharmacies/`.
const partnerImages = [
  '/pharmacies/pharmacy-image-1.png',
  '/pharmacies/pharmacy-image-2.png',
  '/pharmacies/pharmacy-image-3.png',
  '/pharmacies/pharmacy-image-4.png',
  '/pharmacies/pharmacy-image-5.png',
  '/pharmacies/pharmacy-image-6.png',
  '/pharmacies/pharmacy-image-7.png',
  '/pharmacies/pharmacy-image-8.png',
  '/pharmacies/pharmacy-image-9.png',
  '/pharmacies/pharmacy-image-10.png'
];

const PartnerPharmaciesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].partners;

  // This component implements a seamless, auto-scrolling marquee of logos.
  // It pauses on hover for better user experience.
  // The animation itself is defined in index.html.
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        {t.title}
      </h2>
      
      <div 
        className="info-card rounded-lg shadow-xl shadow-black/30 flex-grow flex justify-center items-center overflow-hidden p-0 relative"
      >
        {/* These gradients create a fade-in/fade-out effect at the edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(210,15%,18%)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(210,15%,18%)] to-transparent z-10 pointer-events-none"></div>
        
        <div className="w-full flex items-center group">
          {/* The scrolling element uses a custom animation defined in `index.html` */}
          <div className="flex items-center [animation:marquee-animation_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            
            {/* The image list is rendered twice to create the seamless loop effect */}
            {[...partnerImages, ...partnerImages].map((src, index) => (
              <div key={index} className="flex-shrink-0 w-48 py-8 ml-[-64px]">
                 <div className="aspect-[4/3] bg-white/5 p-2 rounded-lg shadow-lg border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/20 hover:z-20 relative">
                    <img
                      src={src}
                      alt={`Partner logo ${index % partnerImages.length + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPharmaciesSection;