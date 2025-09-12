

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

// The requested filenames. Users should place these in `public/`.
const partnerImages = [
  '/pharmacy-image-1.png',
  '/pharmacy-image-2.png',
  '/pharmacy-image-3.png',
  '/pharmacy-image-4.png',
  '/pharmacy-image-5.png',
  '/pharmacy-image-6.png',
  '/pharmacy-image-7.png',
  '/pharmacy-image-8.png',
  '/pharmacy-image-9.png',
  '/pharmacy-image-10.png'
];

const PartnerPharmaciesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].partners;

  const numImages = partnerImages.length;
  const anglePerItem = 360 / numImages;
  // This radius is calculated to provide good spacing for items of a certain width.
  // A good approximation is: radius ≈ (itemWidth / 2) / tan(π / numItems)
  const radius = 380; // in pixels

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        {t.title}
      </h2>
      
      {/* The main container for the 3D carousel, using new styles from index.html */}
      <div className="carousel-container flex-grow">
        <div className="carousel-track">
          {partnerImages.map((src, index) => {
            const itemAngle = anglePerItem * index;
            // Applying unique inline styles to position each item in a 3D circle
            const style = {
              transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
            };
            return (
              <div key={index} className="carousel-item" style={style}>
                 <img
                      src={src}
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerPharmaciesSection;