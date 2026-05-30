import React, { useState } from 'react';
import { ChefHat, ShoppingBag, Menu, X, ShoppingCart } from 'lucide-react';
import QuickHeader from './components/QuickHeader';
import HeroSection from './components/HeroSection';
import logoImg from './assets/images/vaishali_logo_exact_1780074012944.png';
import BulkPromo from './components/BulkPromo';
import CatalogSection, { CartItem } from './components/CatalogSection';
import TestimonialsSection from './components/TestimonialsSection';
import DeliveryZones from './components/DeliveryZones';
import FooterReachUs from './components/FooterReachUs';
import {
  ImageLightbox,
  FloatingWhatsAppButton,
} from './components/UXEnhancements';
import EnquiryDrawer from './components/EnquiryDrawer';
import { Product } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // Interactive Cart selection lists state
  const [cart, setCart] = useState<CartItem[]>([]);

  // Lightbox Zoom global state
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    url: '',
    title: '',
  });

  const openLightbox = (url: string, title: string) => {
    setLightbox({ isOpen: true, url, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          unit: product.unit,
          category: product.category,
          image: product.image,
          quantity: 1,
          isEggless: true, // Default to 100% Eggless customized for Indian context
          customText: '',
        },
      ];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleUpdateCustomText = (productId: string, customText: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, customText } : item))
    );
  };

  const handleUpdateEggless = (productId: string, isEggless: boolean) => {
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, isEggless } : item))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((acc, current) => acc + current.quantity, 0);
  const cartTotalPrice = cart.reduce((acc, current) => acc + (current.price * current.quantity), 0);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100 selection:text-pink-700 overflow-x-hidden">
      
      {/* 1. Thin Info Top Bar */}
      <QuickHeader />

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 sm:top-auto border-b border-pink-100 z-30 transition-all select-none shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* Logo Name reminiscent of Monginis pink-themed bold font */}
          <div 
            onClick={() => scrollToSection('hero-section')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-100 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white">
              <img 
                src={logoImg} 
                alt="Vaishali Bakers Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl font-extrabold text-[#db0075] tracking-tight">vaishali <span className="text-brand-brown">bakers</span></span>
              <span className="text-[9px] uppercase tracking-widest text-[#db0075] font-black leading-none">Freshly Baked Happiness</span>
            </div>
          </div>

          {/* Nav Anchors - Desktop layout */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero-section')}
              className="text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('catalog-section')}
              className="text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Our Menu
            </button>
            <button
              onClick={() => scrollToSection('bulk-section')}
              className="text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Bulk Orders
            </button>
            <button
              onClick={() => scrollToSection('delivery-section')}
              className="text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Delivery Zones
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer font-serif italic"
            >
              Reach Us ✦
            </button>
          </div>

          {/* Basket status & hamburger icons on navbar */}
          <div className="flex items-center gap-2">
            
            {/* Visual Header Basket Button with Pulsing Dot */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2.5 rounded-full bg-pink-550 hover:bg-[#db0075]/10 bg-slate-50 border border-pink-200 text-[#db0075] hover:text-[#db0075] transition-all cursor-pointer shadow-sm"
              aria-label="View shopping basket"
            >
              <ShoppingCart className="w-4 h-4 text-[#db0075]" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#db0075] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Call to action button on desktop */}
            <button
              onClick={() => scrollToSection('bulk-section')}
              className="hidden md:flex bg-[#db0075] hover:bg-[#df006c] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-md hover:-translate-y-0.5 transition-all items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bulk order deal</span>
            </button>

            {/* Hamburger Menu on Mobile view */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-brown hover:text-[#db0075] md:hidden transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown layout */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 py-4 px-4 shadow-xl space-y-3">
            <button
              onClick={() => scrollToSection('hero-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('catalog-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Our Menu
            </button>
            <button
              onClick={() => scrollToSection('bulk-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Bulk Orders & Calculator
            </button>
            <button
              onClick={() => scrollToSection('delivery-section')}
              className="block w-full text-left py-2 text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors cursor-pointer"
            >
              Delivery Coverage
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="block w-full text-left py-2 text-sm font-bold text-[#db0075] transition-colors cursor-pointer"
            >
              Reach Us / Kanjurmarg Location
            </button>
          </div>
        )}
      </nav>

      {/* 3. Hero Visual Section */}
      <HeroSection />

      {/* 4. Product Digital Catalog with Grid filters */}
      <CatalogSection 
        onPhotoClick={openLightbox} 
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* 5. Specialized Bulk Order Promo Area */}
      <BulkPromo />

      {/* 5.5 Verified Client Reviews & Testimonials Carousel */}
      <TestimonialsSection />

      {/* 6. Location & Coverage Block */}
      <DeliveryZones />

      {/* 7. Footer containing crucial links, Social and Maps */}
      <FooterReachUs />

      {/* 8. Sliding Enquiry List Drawer Visual overlay */}
      <EnquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onUpdateCustomText={handleUpdateCustomText}
        onUpdateEggless={handleUpdateEggless}
      />

      {/* 9. Lightbox visual pop-up modal overlay */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.url}
        imageTitle={lightbox.title}
        onClose={closeLightbox}
      />

      {/* 10. Persistent Sticky Floater checkout bar when items are added (Refer to 'more dynamic') */}
      {totalItemsCount > 0 && !isDrawerOpen && (
        <div className="fixed bottom-24 sm:bottom-6 left-6 z-50 animate-bounce select-none">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 bg-[#db0075] text-white font-extrabold px-4.5 py-3.5 rounded-2xl shadow-2xl hover:bg-[#df006c] transition-all border border-pink-400/20 text-xs uppercase tracking-wider cursor-pointer font-sans"
          >
            <ShoppingCart className="w-4.5 h-4.5 text-white" />
            <span>📋 Basket ({totalItemsCount} Selected Items)</span>
          </button>
        </div>
      )}

      {/* 11. Constant UX components */}
      <FloatingWhatsAppButton />
    </div>
  );
}
