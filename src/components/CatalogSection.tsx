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
                    <div className="relative aspect-square w-full rounded-[1.8rem] overflow-hidden bg-stone-55 shadow-inner">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        className="w-full h-full object-cover select-none"
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
        {/* SUB HEADER CATEGORY TABS BANNER */}
        {/* ========================================== */}
        <div id="category-sub-header" className="scroll-mt-4 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-stone-200/60 pb-5">
            <div>
              <h3 className="text-2xl font-serif text-[#1e113a] font-bold tracking-tight">
                {getCategoryTitle()}
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Showing {filteredProducts.length} delicious item{filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>

            {/* Premium Category Pills */}
            <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto no-scrollbar py-1">
              {(['all', 'cakes', 'brownies', 'chocolate-cupcakes', 'vanilla-cupcakes', 'chocolates'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => selectCategory(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? 'bg-[#db0075] text-white shadow-xs'
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
        <div ref={catalogListRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              // Retrieve cart quantity for this item
              const cartItem = cart.find((item) => item.id === product.id);
              const currentQty = cartItem ? cartItem.quantity : 0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  id={`product-${product.id}`}
                  key={product.id}
                  className="bg-white rounded-3xl border border-stone-150 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Photo area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                    />

                    {/* Category Label Overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs py-1 px-3 rounded-full border border-stone-100 shadow-xs flex items-center gap-1.5 z-10">
                      <Cake className="w-3 h-3 text-[#db0075]" />
                      <span className="text-[10px] uppercase font-bold text-stone-650 tracking-wider">
                        {product.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Vegetarian Indicator */}
                    {product.isVeg && (
                      <div className="absolute bottom-4 left-4 bg-white rounded-md p-1 border border-stone-200/60 shadow-xs z-10" title="100% Pure Veg (Eggless)">
                        <div className="border border-green-600 p-[2px] rounded-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                    )}

                    {/* Badge Overlay */}
                    {product.badge && (
                      <div className={`absolute top-4 right-4 text-[10px] font-extrabold tracking-wider uppercase py-1 px-3.5 rounded-full text-white z-10 shadow-xs ${
                        product.badgeColor === 'pink' ? 'bg-[#db0075]' :
                        product.badgeColor === 'teal' ? 'bg-teal-500' : 'bg-[#e5a93b]'
                      }`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Hover controls info bar */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => onPhotoClick(product.image, product.name)}
                        className="p-3 rounded-full bg-white text-stone-800 shadow-lg hover:text-[#db0075] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        title="View Full Resolution Image"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShareProduct(product)}
                        className="p-3 rounded-full bg-white text-stone-800 shadow-lg hover:text-teal-500 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        title="Share Delicacy Details"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Details block */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-3">
                      <h4 className="text-xl font-serif text-[#1e113a] font-bold tracking-tight capitalize leading-tight group-hover:text-[#db0075] transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-[11px] font-sans font-bold text-stone-400 uppercase tracking-widest mt-1">
                        Sizing: {product.unit}
                      </p>
                    </div>

                    <p className="text-sm font-sans text-stone-550 leading-relaxed flex-grow">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {product.features.map((feat, idx) => (
                        <span key={idx} className="text-[10px] bg-stone-50 text-stone-500 border border-stone-250/50 py-0.5 px-2.5 rounded-md">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* CTA Ordering section */}
                    <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-stone-100">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider leading-none">
                          Inquiry Price
                        </span>
                        <span className="text-2xl font-sans text-[#1e113a] font-black tracking-tight mt-0.5 inline-block">
                          {product.price > 0 ? `₹${product.price}` : 'Customized'}
                        </span>
                      </div>

                      {currentQty > 0 ? (
                        <div className="flex items-center gap-2.5 bg-pink-50/50 text-[#db0075] border border-pink-100 py-1.5 px-3 rounded-full shadow-xs">
                          <button
                            onClick={() => onUpdateQuantity(product.id, currentQty - 1)}
                            className="p-1 rounded-full hover:bg-white active:scale-90 transition-all text-[#db0075] cursor-pointer"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-black w-5 text-center select-none text-[#1e113a]">
                            {currentQty}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(product.id, currentQty + 1)}
                            className="p-1 rounded-full hover:bg-white active:scale-90 transition-all text-[#db0075] cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onAddToCart(product)}
                          className="px-6 py-2.5 rounded-full bg-[#db0075] hover:bg-[#db0075]/90 hover:scale-[1.03] active:scale-95 text-white text-xs font-black tracking-wide uppercase transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Inquiry</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-150">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2rem] max-w-md w-full p-6 shadow-2xl relative border border-stone-100"
            >
              <button
                onClick={() => setShareProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 text-stone-455 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-serif text-[#1e113a] font-bold mb-1">
                Share this delicacy
              </h3>
              <p className="text-xs text-stone-450 mb-4">
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
                  className="flex items-center justify-center gap-2 w-full py-3 border border-stone-200 hover:bg-stone-50 text-stone-650 rounded-xl text-xs font-bold transition-colors cursor-pointer"
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