
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

// I have prepared the image names for you as requested.
// Please create a 'pharmacies' folder inside the 'public' folder and add your 10 images (1200x800px) with these names.
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
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayIntervalRef = useRef<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalImages = partnerImages.length;

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  }, [totalImages]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  }, [totalImages]);

  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    autoplayIntervalRef.current = window.setInterval(() => {
      goToNext();
    }, 5000);
  }, [goToNext]);

  const resetAutoplay = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [startAutoplay]);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX; // Reset on new touch
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // Minimum distance for a swipe
    if (touchStartX.current - touchEndX.current > swipeThreshold) {
      goToNext();
    } else if (touchEndX.current - touchStartX.current > swipeThreshold) {
      goToPrevious();
    }
    startAutoplay(); // Restart autoplay after user interaction
  };

  const getSlideStyle = (index: number) => {
    let offset = index - currentIndex;
    
    // Handle wrap-around for a seamless loop
    if (offset > totalImages / 2) {
      offset -= totalImages;
    }
    if (offset < -totalImages / 2) {
      offset += totalImages;
    }
    
    const isCenter = offset === 0;
    const isAdjacent = Math.abs(offset) === 1;
    const isHidden = Math.abs(offset) > 1;

    const transform = `translateX(${offset * 50}%) scale(${isCenter ? 1 : (2/3)})`;
    const opacity = isCenter ? 1 : (isAdjacent ? 0.6 : 0);
    const zIndex = isCenter ? 10 : (isAdjacent ? 5 : 1);
    const filter = isCenter ? 'blur(0px) brightness(1)' : 'blur(4px) brightness(0.7)';

    return {
      transform,
      opacity: isHidden ? 0 : opacity,
      zIndex,
      filter,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      visibility: isHidden ? 'hidden' as const : 'visible' as const,
    };
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        {t.title}
      </h2>
      
      <div 
        className="info-card p-2 sm:p-4 rounded-lg shadow-xl shadow-black/30 flex-grow flex flex-col justify-center items-center"
      >
        <div 
          className="relative w-full aspect-[1200/800] max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides container */}
          <div className="relative w-full h-full">
            {partnerImages.map((src, index) => (
              <div
                key={index}
                className="absolute w-full h-full top-0 left-0 flex items-center justify-center"
                style={getSlideStyle(index)}
              >
                <img
                  src={src}
                  alt={`Partner image ${index + 1}`}
                  className="w-full h-full object-contain rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button 
            onClick={() => { goToPrevious(); resetAutoplay(); }} 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition focus:outline-none z-20"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={() => { goToNext(); resetAutoplay(); }} 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition focus:outline-none z-20"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerPharmaciesSection;