import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const PartnerPharmaciesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].partners;

  const content = {
    vi: {
      availability: "Sản phẩm Hàu Biển OB chính hãng đã có mặt tại chuỗi nhà thuốc FPT Long Châu và các nhà thuốc lớn khác trên toàn quốc.",
      more: "... và nhiều nhà thuốc uy tín khác trên toàn quốc."
    },
    en: {
      availability: "Genuine Oyster OB product is available at the FPT Long Chau pharmacy chain and other major pharmacies nationwide.",
      more: "... and many other trusted pharmacies nationwide."
    }
  }

  const sectionContent = content[language];

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        {t.title}
      </h2>
      
      <div className="info-card p-8 rounded-lg shadow-xl shadow-black/30 flex-grow flex flex-col justify-center items-center">
        <p className="text-slate-200 text-lg text-center mb-8">
          {sectionContent.availability}
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8">
          {/* Placeholder for FPT Long Châu logo as mentioned in FAQ */}
          <img 
            src="/logo-long-chau.png" 
            alt="FPT Long Châu Pharmacy Logo" 
            className="h-20 sm:h-24 object-contain brightness-0 invert" 
          />
        </div>
        <p className="text-slate-400 text-center mt-8 text-sm">
          {sectionContent.more}
        </p>
      </div>
    </div>
  );
};

export default PartnerPharmaciesSection;
