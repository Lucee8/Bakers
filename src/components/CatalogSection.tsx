import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, MessageCircle, Heart, Plus, Minus, Cake, Sparkles, Award, Coffee, Share2, X, Copy, Check, Instagram, Send, ExternalLink } from 'lucide-react';
import { PRODUCTS, Product } from '../data';
import cakesSpecialImg from '../assets/images/cakes_special_1779797201179.png';
import browniesSpecialImg from "../assets/images/Brownie01.png";
import cupcakesSpecialImg from '../assets/images/Cupcake01.png';
import Vanillasponge from '../assets/images/Vanilla sponge cupcakes.jpeg';



// Custom interface representing a product in the active selection
export interface CartItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  quantity: number;
  customText?: string;
  isEggless?: boolean;
}

interface CatalogProps {
  onPhotoClick: (image: string, title: string) => void;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export default function CatalogSection({
  onPhotoClick,
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity
}: CatalogProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'cakes' | 'brownies' | 'chocolate-cupcakes' | 'vanilla-cupcakes' | 'chocolates'>('all');
  const catalogListRef = useRef<HTMLDivElement>(null);

  const [shareProduct, setShareProduct] = useState<Product | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareWhatsApp = (product: Product) => {
    const text = `✨ *Deliciousness from Vaishali Bakers!* 🧁✨\n\nCheckout *${product.name}*!\n\n"${product.description}"\n\n🎂 100% pure vegetarian (eggless) and freshly baked for your matches & events!\n\n👉 View more or order here: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyInstagram = (product: Product) => {
    const text = `🧁 Vaishali Bakers - ${product.name}\n\n"${product.description}"\n\n🎂 Pure eggless premium delights baked with love in Kanjurmarg, Mumbai!\n\n👉 Order yours now! ${window.location.origin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = (product: Product) => {
    const link = `${window.location.origin}/#product-${product.id}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Filter products based on activeTab
  const filteredProducts = PRODUCTS.filter(
    (product) => activeTab === 'all' || product.category === activeTab
  );

  // Handle category category card selection with smooth scrolling
  const selectCategory = (category: 'all' | 'cakes' | 'brownies' | 'chocolate-cupcakes' | 'vanilla-cupcakes' | 'chocolates') => {
    setActiveTab(category);
    setTimeout(() => {
      const headerElement = document.getElementById('category-sub-header');
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Quick category card details corresponding to first screenshot
  // Quick category card details corresponding to first screenshot
  const categoryHighlights = [
    {
      id: 'cakes' as const,
      label: 'Cakes',
      labelColor: 'text-[#db0075]',
      image: cakesSpecialImg,
      caption: 'Fresh Customised celebration cakes'
    },
    {
      id: 'brownies' as const,
      label: 'Brownies',
      labelColor: 'text-[#1e113a]',
      image: browniesSpecialImg,
      caption: 'Fudgy rich brownies'
    },
    {
      id: 'chocolate-cupcakes' as const,
      label: 'Chocolate Cupcakes',
      labelColor: 'text-[#db0075]',
      image: cupcakesSpecialImg,
      caption: 'Elegant chocolate cupcakes'
    },
    {
      id: 'vanilla-cupcakes' as const,
      label: 'Vanilla sponge cupcakes',
      labelColor: 'text-[#1e113a]',
      image: Vanillasponge,
      caption: 'Soft vanilla sponge cupcakes'
    }
    {
      id: 'chocolates' as const,
      label: 'Chocolates',
      labelColor: 'text-[#db0075]',
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=600',
      caption: 'Handcrafted premium chocolates'
    }
  ];

  // Map category helper tags to aesthetic sparkles matching image
  const getCategoryTitle = () => {
    switch (activeTab) {
      case 'cakes':
        return 'Custom Celebration Cakes';
      case 'brownies':
        return 'Brownies';
      case 'chocolate-cupcakes':
        return 'Cupcakes';
      case 'vanilla-cupcakes':
        return 'Vanilla Sponge Cupcakes';
      default:
      case 'chocolates':
        return 'Gourmet Handcrafted Chocolates';
      default:
        return 'Our Complete Collection';
    }
  };

  return (
    <section id="catalog-section" className="py-16 px-4 bg-white relative border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================== */}
        {/* "OUR MENU" HERO BRAND CARDS (Refer to Screenshot 1) */}
        {/* ========================================== */}
        {categoryHighlights.length > 1 && (
          <div className="mb-14">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-sans text-[#1e113a] font-extrabold tracking-tight">Our Menu</h2>
              <p className="text-sm sm:text-base font-sans text-gray-500 mt-2">Explore our freshly baked delights</p>
            </div>

            {/* Grid Layout of the Category Cover Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-center">
              {categoryHighlights.map((cat) => {
                const works = activeTab === cat.id;
                return (
                  <motion.div
                    key={cat.id}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => selectCategory(works ? 'all' : cat.id)}
                    className={`bg-white rounded-[2.2rem] p-3.5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-2 w-full ${
                      works ? 'border-[#db0075] shadow-pink-100 bg-pink-50/10' : 'border-stone-100'
                    }`}
                  >
                    <div className="relative aspect-square w-full rounded-[1.8rem] overflow-hidden bg-stone-50 shadow-inner">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dark gradient mapping inside circle */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                    <div className="text-center pt-3.5 pb-2">
                      <span className={`text-[14px] sm:text-[16px] block font-sans font-black tracking-tight leading-none ${cat.labelColor}`}>
                        {cat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* SUB-CATEGORY HEADINGS ROW (Refer to Screenshot 2) */}
        {/* ========================================== */}
        <div id="category-sub-header" className="pt-8 border-t border-stone-200/50 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 scroll-mt-24">
          <div className="flex items-start gap-2.5">
            <span className="text-[#db0075] text-2xl shrink-0 leading-none">✦</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-sans text-brand-brown font-extrabold leading-none tracking-tight">
                {getCategoryTitle()}
              </h3>
              <p className="text-sm text-stone-500 font-sans mt-1.5">Explore our finest collection</p>
            </div>
          </div>

          {/* Quick tab filters toggle pills */}
          {categoryHighlights.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-pink-50/40 rounded-xl border border-pink-100/20 max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'all' ? 'bg-[#db0075] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Items
              </button>
              {categoryHighlights.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setActiveTab(ch.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === ch.id ? 'bg-[#db0075] text-white shadow-xs' : 'text-stone-600 hover:text-[#db0075]'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ========================================== */}
        {/* PRODUCT CATALOG SELECTION GRID */}
        {/* ========================================== */}
        <div ref={catalogListRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              // Retrieve cart quantity for this item
              const cartItem = cart.find((item) => item.id === product.id);
              const currentQty = cartItem ? cartItem.quantity : 0;

              // Matching tag colors from screenshots
              let tagColorClass = 'bg-[#db0075] text-white'; // Bestseller Magenta
              if (product.badgeColor === 'teal') {
                tagColorClass = 'bg-[#0d9488] text-white'; // New Arrival Teal
              } else if (product.badgeColor === 'gold') {
                tagColorClass = 'bg-pink-100 text-[#1e113a] font-black border border-pink-200'; // Promo brand-pink/plum tag
              }

              return (
                <motion.div
                  key={`${activeTab}-${product.id}`}
                  layout
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ 
                    default: { 
                      duration: 0.35, 
                      ease: [0.16, 1, 0.3, 1], 
                      delay: index * 0.035 
                    },
                    layout: { 
                      type: 'spring', 
                      stiffness: 280, 
                      damping: 28 
                    }
                  }}
                  className="bg-white rounded-[1.25rem] overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  {/* Photo area with zoom modal trigger */}
                  <div className="relative aspect-square bg-stone-50 overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => onPhotoClick(product.image, product.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-zoom-in select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Zoom Clickable Hand Glass Indicator */}
                    <div
                      onClick={() => onPhotoClick(product.image, product.name)}
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in"
                    >
                      <span className="flex items-center gap-1 bg-white text-stone-800 rounded-full py-1 px-3 text-[10px] font-bold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3 h-3 text-[#db0075]" />
                        <span>Zoom</span>
                      </span>
                    </div>

                    {/* Standard Pink/Teal Round Banner Tag (Screenshot 2) */}
                    {product.badge && (
                      <span className={`absolute top-2.5 left-2.5 text-[9px] sm:text-[10px] tracking-wide font-extrabold px-2 py-1 rounded-[4px] shadow-xs flex items-center gap-0.5 leading-none ${tagColorClass}`}>
                        <span className="text-amber-300">★</span>
                        <span className="capitalize">{product.badge}</span>
                      </span>
                    )}

                    {/* Share Button on Card Image */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShareProduct(product);
                      }}
                      className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs shadow-xs hover:shadow-md border border-stone-200/40 flex items-center justify-center text-[#db0075] sm:text-stone-600 hover:text-[#db0075] hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                      title={`Share ${product.name}`}
                      aria-label="Share product on social media"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Body textual content */}
                  <div className="p-3 sm:p-4.5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Veg Green Box Indicator placed directly before title (Screenshot 2) */}
                      <div className="text-left">
                        {product.isVeg && (
                          <div className="border-[1.5px] border-emerald-600 rounded-[2px] w-3.5 h-3.5 p-[1px] inline-flex items-center justify-center bg-white mb-1.5" title="100% Eggless Vegetarian">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                          </div>
                        )}
                        <h4 className="text-[13.5px] sm:text-[16px] font-bold text-brand-brown tracking-tight group-hover:text-[#db0075] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] leading-snug">
                          {product.name}
                        </h4>
                      </div>

                      {/* Brief single-portion description */}
                      <p className="text-[10.5px] sm:text-xs text-[#71717a] font-normal leading-normal mt-1 mb-2.5 line-clamp-2 h-8 sm:h-9 overflow-hidden">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Order Action Box - Styled directly to match second screenshot */}
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                      {/* Left: Size options for ordering */}
                      <div className="flex flex-col text-left">
                        <span className="text-[9px] uppercase tracking-wider text-stone-400 font-extrabold">Standard Size</span>
                        <span className="text-[11px] font-bold text-stone-600 whitespace-nowrap">{product.unit}</span>
                      </div>

                      {/* Dynamic Morphing Swiggy Button on Right */}
                      <div className="flex flex-col items-center shrink-0 w-[72px] sm:w-[82px]">
                        <AnimatePresence mode="wait">
                          {currentQty === 0 ? (
                            <motion.button
                              key="add-btn"
                              initial={{ scale: 0.94, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.94, opacity: 0 }}
                              onClick={() => {
                                onAddToCart(product);
                              }}
                              className="w-full h-[26px] sm:h-[30px] bg-[#db0075] hover:bg-[#df006c] text-white font-extrabold rounded-md sm:rounded-lg text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center shadow-xs"
                            >
                              Add
                            </motion.button>
                          ) : (
                            <motion.div
                              key="qty-slider"
                              initial={{ scale: 0.92, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.92, opacity: 0 }}
                              className="flex items-center justify-between w-full bg-[#db0075] text-white px-1.5 h-[26px] sm:h-[30px] rounded-md sm:rounded-lg text-xs font-bold shadow-xs"
                            >
                              <button
                                onClick={() => onUpdateQuantity(product.id, currentQty - 1)}
                                className="p-0.5 text-white hover:text-stone-200 transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                              <span className="font-mono text-xs font-black">{currentQty}</span>
                              <button
                                onClick={() => onUpdateQuantity(product.id, currentQty + 1)}
                                className="p-0.5 text-white hover:text-stone-200 transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {/* Help tag below */}
                        <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wide mt-1 select-none leading-none capitalize select-none">
                          Customize
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Outer instructions card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-6 border-l-4 border-[#db0075] bg-pink-50/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            <span className="text-xl">🍪</span>
            <div>
              <h5 className="text-xs uppercase tracking-widest font-extrabold text-brand-brown">Custom Portion Ordering?</h5>
              <p className="text-[11px] text-stone-500 leading-normal mt-0.5">We cater to larger 1kg/2kg structures, egged versions, corporate logos, and customized cupcakes themes. Write to email: <strong className="text-brand-pink underline">vaishalisarang1985@gmail.com</strong>.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919892047995"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 py-3 px-5 rounded-full shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Discuss Custom Themes</span>
          </a>
        </div>

        {/* ========================================== */}
        {/* INTERACTIVE SOCIAL SHARE MODAL */}
        {/* ========================================== */}
        <AnimatePresence>
          {shareProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShareProduct(null)}
                className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs cursor-pointer z-40"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                className="bg-white rounded-3xl w-full max-w-sm sm:max-w-md border border-pink-100 shadow-2xl p-5 sm:p-6 relative overflow-hidden z-50 flex flex-col gap-6 text-[#1e113a]"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-pink-100/40 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✨</span>
                    <div className="text-left">
                      <h4 className="font-sans font-extrabold text-[#db0075] tracking-tight text-lg leading-tight">Spread the Joy!</h4>
                      <p className="text-[10px] text-stone-500 uppercase font-bold tracking-wider leading-none mt-0.5">Share Vaishali Bakers Delights</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShareProduct(null)}
                    className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 hover:text-[#db0075] hover:bg-pink-50 flex items-center justify-center transition-all cursor-pointer border border-stone-200/20"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Digital Postcard Item Card */}
                <div className="bg-pink-50/10 rounded-2xl p-3.5 border border-pink-100/20 flex gap-4 text-left">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 shadow-inner bg-slate-50 border border-stone-100">
                    <img
                      src={shareProduct.image}
                      alt={shareProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0 font-sans">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        {shareProduct.isVeg && (
                          <span className="border border-emerald-600 rounded-[2.5px] w-3 h-3 p-[1px] inline-flex items-center justify-center bg-white shrink-0" title="Pure Veg">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          </span>
                        )}
                        <span className="text-[9px] uppercase tracking-widest text-[#db0075] font-extrabold bg-pink-100/50 px-1.5 py-0.5 rounded shrink-0 leading-none">
                          Homemade
                        </span>
                      </div>
                      <h5 className="font-sans font-extrabold text-[#1f1135] tracking-tight leading-tight text-sm sm:text-base truncate">
                        {shareProduct.name}
                      </h5>
                    </div>
                    <p className="text-[10px] sm:text-xs text-stone-500 leading-snug line-clamp-2 pr-2 mt-1">
                      {shareProduct.description}
                    </p>
                  </div>
                </div>

                {/* Action Channels Group */}
                <div className="flex flex-col gap-3 font-sans">
                  
                  {/* WhatsApp option */}
                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(shareProduct)}
                    className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center justify-between px-5 shadow-xs group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 fill-white/10 group-hover:scale-110 transition-transform" />
                      <span>Share on WhatsApp</span>
                    </div>
                    <span className="text-[10.5px] font-black bg-white/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Send Msg
                    </span>
                  </button>

                  {/* Instagram Story Copy option */}
                  <button
                    type="button"
                    onClick={() => handleCopyInstagram(shareProduct)}
                    className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#db0075] via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-sm tracking-wide transition-all cursor-pointer flex items-center justify-between px-5 shadow-xs group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 font-sans">
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div className="flex flex-col text-left">
                        <span>Copy Instagram Caption</span>
                        <span className="text-[9px] text-white/85 font-normal leading-none mt-0.5">Link + description ready</span>
                      </div>
                    </div>
                    <span className="text-[10.5px] font-black bg-white/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {copied ? 'Copied! ✅' : 'Copy'}
                    </span>
                  </button>

                  {/* Copy Link option */}
                  <button
                    type="button"
                    onClick={() => handleCopyLink(shareProduct)}
                    className="w-full h-12 rounded-2xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 font-extrabold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between px-5"
                  >
                    <div className="flex items-center gap-3">
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-600 animate-pulse" /> : <Copy className="w-4 h-4 text-stone-500" />}
                      <span>Copy Direct Product Link</span>
                    </div>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {copiedLink ? 'Copied' : 'Click to copy'}
                    </span>
                  </button>

                </div>

                {/* Feedback Toast / Note inside modal */}
                <div className="text-center pt-1 border-t border-stone-100">
                  <p className="text-[11px] text-stone-400 font-medium min-h-[16px] font-sans">
                    {copied ? (
                      <span className="text-[#db0075] font-bold">✨ Caption copied! Paste it into your Instagram post, Story, or DM! ✨</span>
                    ) : copiedLink ? (
                      <span className="text-emerald-600 font-bold">✨ Direct copy link saved! Paste to share anywhere! ✨</span>
                    ) : (
                      <span>Select a social platform to share with friends and family</span>
                    )}
                  </p>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
