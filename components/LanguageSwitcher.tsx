import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-black/20 p-1 rounded-full border border-white/20">
      <button
        onClick={() => setLanguage('vi')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors duration-300 ${
          language === 'vi'
            ? 'bg-teal-400 text-slate-900'
            : 'bg-transparent text-white hover:bg-white/10'
        }`}
      >
        VI
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-bold rounded-full transition-colors duration-300 ${
          language === 'en'
            ? 'bg-teal-400 text-slate-900'
            : 'bg-transparent text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;