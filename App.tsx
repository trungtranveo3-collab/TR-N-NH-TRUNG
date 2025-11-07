import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import BenefitsSection from './components/BenefitsSection';
import IngredientsSection from './components/IngredientsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import OrderFormSection from './components/OrderFormSection';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import FAQSection from './components/FAQSection';
import StickyCTA from './components/StickyCTA';
import Header from './components/Header';
import PartnerPharmaciesSection from './components/PartnerPharmaciesSection';
import MiniCart from './components/MiniCart';

// Định nghĩa kiểu dữ liệu cho một sản phẩm trong giỏ hàng
export interface CartItem {
  title: string;
  unitPrice: number;
  quantity: number;
}

const App: React.FC = () => {
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Hàm tính toán tổng giá tiền tối ưu dựa trên số lượng
  const calculateTotalPrice = (quantity: number): number => {
    if (quantity <= 0) return 0;
    
    // Bảng giá các gói combo, key là số lượng hộp
    const priceTiers: { [key: number]: number } = {
        7: 1645000, // Gói "Mua 6 tặng 1" là 7 hộp
        3: 889000,
        2: 625000,
        1: 329000,
    };
    
    const availablePackages = Object.keys(priceTiers).map(Number).sort((a, b) => b - a);

    let remainingQty = quantity;
    let total = 0;

    // Áp dụng các gói lớn nhất trước để có giá tốt nhất
    while (remainingQty > 0) {
        const bestPackage = availablePackages.find(pkgQty => remainingQty >= pkgQty);
        
        if (bestPackage) {
            total += priceTiers[bestPackage];
            remainingQty -= bestPackage;
        } else {
            // Trường hợp này không nên xảy ra nếu có gói 1 sản phẩm
            break; 
        }
    }
    return total;
  };

  // Tự động tính lại giá khi số lượng trong giỏ hàng thay đổi
  useEffect(() => {
    if (cartItem) {
      const price = calculateTotalPrice(cartItem.quantity);
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  }, [cartItem]);

  const scrollToOrderForm = () => {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      const headerOffset = 120; // Bù trừ cho chiều cao của header dính
      const elementPosition = orderForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Hàm xử lý khi người dùng thêm sản phẩm vào giỏ
  const handleAddToCart = (plan: { title: string; price: string; }) => {
    let initialQuantity = 1;
    if (plan.title.includes("Mua 6")) initialQuantity = 7; // Gói "Mua 6 tặng 1" nhận được 7 hộp
    else if (plan.title.includes("3 Hộp")) initialQuantity = 3;
    else if (plan.title.includes("2 Hộp")) initialQuantity = 2;
    
    setCartItem({
      title: 'Hàu Biển OB', // Sử dụng tên sản phẩm chung
      unitPrice: 329000,
      quantity: initialQuantity,
    });
    setIsCartVisible(true); // Hiển thị giỏ hàng
    
    setTimeout(scrollToOrderForm, 100);
  };

  // Hàm cập nhật số lượng sản phẩm
  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItem(null); // Nếu số lượng nhỏ hơn 1, xóa lựa chọn
      setIsCartVisible(false); // và đóng giỏ hàng
      return;
    }
    if (cartItem) {
      setCartItem({ ...cartItem, quantity: newQuantity });
    }
  };

  // Hàm chỉ để đóng giao diện giỏ hàng
  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  // Hàm xử lý khi nhấn "Đi đến thanh toán"
  const handleCheckout = () => {
    scrollToOrderForm();
    setIsCartVisible(false); // Chỉ ẩn giao diện giỏ hàng, không xóa thông tin
  };

  return (
    <LanguageProvider>
      <div className="p-[2px] rounded-none sm:rounded-lg max-w-screen-2xl mx-auto my-4 sm:my-8 relative overflow-hidden led-chase-border shadow-2xl shadow-black/50">
        <div className="overflow-x-hidden bg-black/25 backdrop-blur-lg rounded-none sm:rounded-lg h-full w-full">
          <Header />
          <main>
            <HeroSection />
            <ProblemSection />
            <BenefitsSection />
            <IngredientsSection />
            <TestimonialsSection />
            <PricingSection onAddToCart={handleAddToCart} />
            <section className="py-20 md:py-28">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <div className="lg:col-span-1 flex flex-col">
                    <PartnerPharmaciesSection />
                  </div>
                  <div className="lg:col-span-1 flex flex-col">
                    <OrderFormSection 
                      cartItem={cartItem} 
                      totalPrice={totalPrice}
                      onUpdateQuantity={handleUpdateQuantity} 
                    />
                  </div>
                </div>
              </div>
            </section>
            <FAQSection />
          </main>
          <Footer />
        </div>
        <StickyCTA />
        {isCartVisible && cartItem && (
          <MiniCart 
            item={cartItem} 
            totalPrice={totalPrice}
            onUpdateQuantity={handleUpdateQuantity} 
            onClose={handleCloseCart}
            onCheckout={handleCheckout}
          />
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;