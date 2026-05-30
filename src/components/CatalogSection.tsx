import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Grid, Eye, MessageCircle, Heart, Plus, Minus, Cake, Sparkles, Award, Coffee, Share2, X, Copy, Check, Instagram, Send, ExternalLink } from 'lucide-react';
import { PRODUCTS, Product } from '../data';
import cakesSpecialImg from '../assets/images/cakes_special_1779797201179.png';
import browniesSpecialImg from '../assets/images/brownies_special_1779797159768.png';
import cupcakesSpecialImg from '../assets/images/cupcakes_special_1779797178372.png';

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
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600',
      caption: 'Soft vanilla sponge cupcakes'
    },
    {
      id: 'chocolates' as const,
      label: 'Chocolates',
      labelColor: 'text-[#db0075]',
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=600',
      caption: 'Handcrafted premium chocolates'
    }
  ];

  // Map category helper tags to aesthetic title text
  const getCategoryTitle = () => {
    switch (activeTab) {
      case 'cakes':
        return 'Custom Celebration Cakes';
      case 'brownies':
        return 'Signature Walnut Brownies';
      case 'chocolate-cupcakes':
        return 'Gourmet Chocolate Cupcakes';
      case 'vanilla-cupcakes':
        return 'Vanilla Sponge Cupcakes';
      case 'chocolates':
        return 'Gourmet Handcrafted Chocolates';
      default:
        return 'Our Complete Collection';
    }
  };

  const renderProductCard = (product: Product, index: number = 0) => {
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        id={`product-${product.id}`}
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
            {/* Veg Green Box Indicator side-by-side with Title (Screenshot 2 native style) */}
            <div className="text-left flex items-start gap-1.5 mb-1 bg-white">
              {product.isVeg && (
                <div className="border-[1.5px] border-emerald-600 rounded-[2px] w-3.2 h-3.2 p-[1px] inline-flex items-center justify-center bg-white mt-1 shrink-0" title="100% Eggless Vegetarian">
                  <div className="w-1.2 h-1.2 rounded-full bg-emerald-600"></div>
                </div>
              )}
              <h4 className="text-[13.5px] sm:text-[16px] font-bold text-brand-brown tracking-tight group-hover:text-[#db0075] transition-colors line-clamp-2 min-h-[38px] sm:min-h-[44px] leading-snug">
                {product.name}
              </h4>
            </div>

            {/* Brief description */}
            <p className="text-[10.5px] sm:text-xs text-[#71717a] font-normal leading-normal mt-0.5 mb-2.5 line-clamp-2 h-8 sm:h-9 overflow-hidden">
              {product.description}
            </p>
          </div>

          {/* Bottom Order Action Box - Styled directly to match second screenshot */}
          <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
            {/* Left: Size & Price options side-by-side for compact ordering */}
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-wider text-stone-400 font-extrabold pb-0.5">Price & Size</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[12.5px] font-black text-stone-850">
                  {product.price > 0 ? `₹${product.price}` : 'Customized'}
                </span>
                <span className="text-[10px] font-medium text-stone-300 select-none">•</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-stone-500 whitespace-nowrap">{product.unit}</span>
              </div>
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
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium tracking-wide mt-1 select-none leading-none capitalize">
                Customize
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="catalog-section" className="py-16 px-4 bg-white relative border-t border-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================== */}
        {/* "OUR MENU" HERO BRAND CARDS */}
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
                        className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-105"
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
           {/* ========================================== */}
        {/* SUB HEADER CATEGORY TABS BANNER */}
        {/* ========================================== */}
        <div id="category-sub-header" className="scroll-mt-4 mb-10 text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-stone-200/60 pb-5 mb-8">
            <div>
              <h3 className="text-3xl font-serif text-[#1e113a] font-bold tracking-tight">
                {getCategoryTitle()}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Showing {filteredProducts.length} delicious item{filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>

            {/* Premium Category Pills */}
            <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto no-scrollbar py-1">
              {(['all', 'cakes', 'brownies', 'chocolate-cupcakes', 'vanilla-cupcakes', 'chocolates'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => selectCategory(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 capitalize cursor-pointer whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-[#db0075] text-white shadow-xs animate-none'
                      : 'bg-stone-50 border border-stone-200 text-stone-500 hover:text-stone-700 hover:bg-stone-100/70'
                  }`}
                >
                  {tab === 'all' ? 'All Items' : tab.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PRODUCTS DIRECTORY GRID */}
        {/* ========================================== */}
        <div ref={catalogListRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => renderProductCard(product, idx))}
          </AnimatePresence>
        </div>
          </div>
        )}

        {/* Personalized disclaimer note */}
        <div className="mt-14 p-5 rounded-2xl bg-stone-50/60 border border-stone-150/80 text-center max-w-2xl mx-auto">
          <p className="text-[11px] text-stone-500 leading-normal">
            We cater to larger 1kg/2kg structures, egged versions, corporate logos, and customized cupcakes themes. Write to email: <strong className="text-[#db0075] underline">vaishalisarang1985@gmail.com</strong>.
          </p>
        </div>
      </div>

      {/* Share product popup modal */}
      <AnimatePresence>
        {shareProduct && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShareProduct(null)}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs cursor-pointer z-40"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] max-w-md w-full p-6 shadow-2xl relative border border-stone-100 z-50"
            >
              <button
                onClick={() => setShareProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-400 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-serif text-[#1e113a] font-bold mb-1 text-left">
                Share this delicacy
              </h3>
              <p className="text-xs text-stone-500 mb-4 text-left">
                Send details of '{shareProduct.name}' over social channels!
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleShareWhatsApp(shareProduct)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Share on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleCopyInstagram(shareProduct)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-pink-600 text-white rounded-xl text-xs font-bold hover:bg-pink-700 transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  {copied ? <span>Copied to Clipboard!</span> : <span>Copy Instagram Post Text</span>}
                </button>

                <button
                  onClick={() => handleCopyLink(shareProduct)}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-stone-200 hover:bg-stone-50 text-stone-600 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Direct Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Direct Product Link</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
