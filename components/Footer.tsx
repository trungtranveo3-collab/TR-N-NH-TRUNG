import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-transparent text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-12 text-center">
        <div className="mb-8 flex flex-col items-center">
           <img 
            src="/logo-anphar-vietnam.png"
            alt="ANPHAR VIỆT NAM Logo" 
            className="h-12 sm:h-16 mb-6"
          />
          <h4 className="font-bold text-xl mb-4 text-white">
            {t.companyName}
          </h4>
          <div className="text-slate-200">
            <p>{t.addressLabel}: Số 161/3, Ni Sư Huỳnh Liên, P. Bảy Hiền, TP.HCM</p>
            <p>{t.phoneLabel}: (028) 7307 1686 - 1800 6027</p>
            <p>Hotline: 0915 785 246</p>
            <p>Email: admin@anphar.vn</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)]">
          <p className="text-sm text-slate-300">
            {t.disclaimer}
          </p>
          <p className="text-sm text-slate-300 mt-2">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;