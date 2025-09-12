

import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

const OrderFormSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].order;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const webhookUrl = 'https://us-central1-zenleads-ai.cloudfunctions.net/publicWebhook/Wzhq5IHsdOg12uKFB6do';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Lỗi máy chủ: ' + response.status);
      }

      const responseData = await response.json();

      if (responseData.redirectTo) {
        window.location.href = responseData.redirectTo;
      } else {
        alert('Gửi thông tin thành công! Cảm ơn bạn.');
        form.reset();
      }
    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="order-form" className="flex flex-col h-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        {t.title}
      </h2>
      
      {/* Order Form */}
      <div className="info-card p-6 rounded-lg shadow-xl shadow-black/30 flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-4">{t.form.title}</h3>
        <form id="contact-form-landing-page" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="ho_ten" className="block text-sm font-medium text-slate-200 mb-1">{t.form.nameLabel}</label>
              <input type="text" name="ho_ten" id="ho_ten" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.namePlaceholder} />
            </div>
            <div>
              <label htmlFor="so_dien_thoai" className="block text-sm font-medium text-slate-200 mb-1">{t.form.phoneLabel}</label>
              <input type="tel" name="so_dien_thoai" id="so_dien_thoai" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.phonePlaceholder} />
            </div>
            <div>
              <label htmlFor="dia_chi" className="block text-sm font-medium text-slate-200 mb-1">{t.form.addressLabel}</label>
              <input type="text" name="dia_chi" id="dia_chi" required className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.addressPlaceholder} />
            </div>
            <div>
              <label htmlFor="thong_tin_vat" className="block text-sm font-medium text-slate-200 mb-1">{t.form.vatLabel}</label>
              <input type="text" name="thong_tin_vat" id="thong_tin_vat" className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.vatPlaceholder} />
            </div>
            <div>
              <label htmlFor="ghi_chu" className="block text-sm font-medium text-slate-200 mb-1">{t.form.notesLabel}</label>
              <textarea name="ghi_chu" id="ghi_chu" rows={2} className="w-full px-4 py-3 bg-white/10 border border-white/30 text-slate-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 placeholder-slate-400" placeholder={t.form.notesPlaceholder}></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="pulsing-button w-full bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-8 rounded-full hover:from-teal-600 hover:to-green-700 transition duration-300 text-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang gửi...' : t.form.submitButton}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderFormSection;