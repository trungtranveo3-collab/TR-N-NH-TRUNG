import React from 'react';
import type { CartItem } from '../App';

interface MiniCartProps {
  item: CartItem;
  totalPrice: number;
  onUpdateQuantity: (quantity: number) => void;
  onClose: () => void;
  onCheckout: () => void;
}

const MiniCart: React.FC<MiniCartProps> = ({ item, totalPrice, onUpdateQuantity, onClose, onCheckout }) => {

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 w-full max-w-sm p-4 bg-slate-800/70 backdrop-blur-md rounded-lg shadow-2xl shadow-black/50 border border-white/20 text-white"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 id="cart-heading" className="text-lg font-bold text-teal-300">Giỏ Hàng Tạm Tính</h2>
        <button onClick={onClose} className="text-slate-300 hover:text-white transition-colors" aria-label="Đóng">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
            <p className="font-semibold flex-1">{item.title}</p>
            <div className="flex items-center border border-white/30 rounded-md">
                <button onClick={() => onUpdateQuantity(item.quantity - 1)} className="px-3 py-1 text-lg hover:bg-white/10 rounded-l-md transition-colors" aria-label="Giảm số lượng">-</button>
                <span className="px-3 py-1 font-bold bg-white/10">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.quantity + 1)} className="px-3 py-1 text-lg hover:bg-white/10 rounded-r-md transition-colors" aria-label="Tăng số lượng">+</button>
            </div>
        </div>

        <div className="border-t border-white/20 pt-3 mt-3">
             <div className="flex justify-between items-center text-lg">
                <span className="text-slate-300">Tạm tính:</span>
                <span className="font-bold text-[#FDCB6E]">{totalPrice.toLocaleString('vi-VN')}đ</span>
            </div>
        </div>

        <button 
            onClick={onCheckout}
            className="w-full mt-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-bold py-3 px-6 rounded-full hover:from-teal-600 hover:to-green-700 transition duration-300 transform hover:scale-105"
        >
            Đi đến thanh toán
        </button>
      </div>
    </div>
  );
};

export default MiniCart;