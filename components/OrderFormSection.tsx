
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const OrderFormSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].order;

  return (
    <div id="order-form" className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        {t.title}
      </h2>
      
      {/* Order Form */}
      <div className="info-card p-8 rounded-lg shadow-xl shadow-black/30 flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6">{t.form.title}</h3>
        <form>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">{t.form.nameLabel}</label>
              <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-1">{t.form.phoneLabel}</label>
              <input type="tel" name="phone" id="phone" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.phonePlaceholder} />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-slate-200 mb-1">{t.form.addressLabel}</label>
              <input type="text" name="address" id="address" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.addressPlaceholder} />
            </div>
            <div>
              <label htmlFor="vat-info" className="block text-sm font-medium text-slate-200 mb-1">{t.form.vatLabel}</label>
              <input type="text" name="vat-info" id="vat-info" className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.vatPlaceholder} />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-200 mb-1">{t.form.notesLabel}</label>
              <textarea name="notes" id="notes" rows={3} className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.notesPlaceholder}></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-teal-500/30 hover:from-teal-600 hover:to-green-700 transition duration-300 text-xl transform hover:scale-105">
                {t.form.submitButton}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFormSection;
