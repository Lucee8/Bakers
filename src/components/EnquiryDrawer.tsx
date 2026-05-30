import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, MessageCircle, Info, Sparkles, CheckCircle, Trash2, PenTool, ClipboardSignature, Plus, Minus } from 'lucide-react';
import { CartItem } from './CatalogSection';
import { CONTACT_INFO } from '../data';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  onUpdateCustomText: (productId: string, text: string) => void;
  onUpdateEggless: (productId: string, isEggless: boolean) => void;
}

export default function EnquiryDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  onUpdateCustomText,
  onUpdateEggless
}: EnquiryDrawerProps) {
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingUnlocked = totalItems >= 50;

  // Compile detailed WhatsApp Message containing lists, custom messages and calculations
  const compileWhatsAppMessage = () => {
    let messageText = `Hello Vaishali, can you please review this Custom Order Enquiry? I compiled it from your Vaishali Bakers digital menu:

📋 ORDER SPECIFICATIONS:
`;

    cart.forEach((item, idx) => {
      const egglessTag = item.isEggless ? ' [100% Eggless Option]' : '';
      const customTxtTag = item.customText ? `\n   ↳ Custom message on cake: "${item.customText}"` : '';
      messageText += `\n${idx + 1}. ${item.name} (${item.quantity} units)${egglessTag}${customTxtTag}`;
    });

    messageText += `

📦 TOTAL ENQUIRY SPECIFICATIONS:
• Total Selected Items: ${totalItems} units
• Base Portion Units: Checked against catalog
• Delivery: ${freeShippingUnlocked ? 'Complimentary Delivery Unlocked (50+ units)!' : 'Standard Area Delivery required'}

Can you please confirm the custom pricing, ingredient availability, customized icing options, and delivery slot on my requested dates? Thank you!`;

    const encodedText = encodeURIComponent(messageText);
    window.open(`https://wa.me/919892047995?text=${encodedText}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-55 overflow-hidden">
          
          {/* Backdrop Blur Mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              
              {/* Header Box */}
              <div className="bg-brand-brown text-white px-5 py-5 border-b border-pink-500/10 flex items-center justify-between shadow-md font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-[#db0075] flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-black tracking-tight text-white leading-none">My Enquiry Basket</h3>
                    <span className="text-[10px] text-pink-200/80 font-sans tracking-wide mt-1 block">
                      {totalItems} item{totalItems !== 1 && 's'} selected
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {totalItems > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-xs text-pink-200 hover:text-red-400 font-bold transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#faf7f2] transition-colors cursor-pointer"
                    aria-label="Close basket"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Scrolling Body */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-50">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 select-none">
                    <div className="w-20 h-20 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-3xl mb-4 animate-bounce">
                      🧁
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brand-brown">Empty Enquiry Basket</h4>
                    <p className="text-xs text-stone-500 max-w-xs mt-2 leading-relaxed font-light">
                      Browse our digital menu under Cakes, Brownies, or Cupcakes and click "Add" to select customized treats for your celebration timeline!
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-5 py-2.5 bg-[#db0075] hover:bg-[#df006c] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer uppercase tracking-wider"
                    >
                      Explore Delicacies
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest block pb-1">
                      Customise Selected Cakes & Brownies
                    </div>

                    {/* Basket items map array */}
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs flex flex-col gap-3 relative hover:border-brand-pink/30 transition-all group font-sans"
                      >
                        {/* Top Line details */}
                        <div className="flex items-start gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-xl shrink-0 bg-stone-100 border border-stone-100"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-[13px] font-bold text-brand-brown truncate leading-tight group-hover:text-[#db0075] transition-colors">
                              {item.name}
                            </h5>
                          </div>

                          <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="p-1 rounded text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors ml-1 cursor-pointer"
                            title="Delete item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Middle customization inputs directly inside cards! (Superb dynamic form UX) */}
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/50 space-y-2 mt-1">
                          
                          {/* 100% Eggless Option Toggle Checker */}
                          <div className="flex items-center justify-between text-[11px]">
                            <label htmlFor={`eggless-${item.id}`} className="flex items-center gap-1.5 font-semibold text-stone-605 cursor-pointer select-none">
                              <span className="border border-emerald-600 rounded-[2px] w-3 h-3 flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                              </span>
                              <span>100% Eggless Customised</span>
                            </label>
                            <input
                              type="checkbox"
                              id={`eggless-${item.id}`}
                              checked={item.isEggless}
                              onChange={(e) => onUpdateEggless(item.id, e.target.checked)}
                              className="accent-emerald-650 rounded cursor-pointer w-3.5 h-3.5"
                            />
                          </div>

                          {/* Message on Cake (Standard Cakes category only) */}
                          {item.category === 'cakes' && (
                            <div className="pt-2 border-t border-stone-200/50">
                              <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1">
                                <PenTool className="w-3 h-3 text-[#db0075]" />
                                <span>Message to write on Cake</span>
                              </label>
                              <input
                                type="text"
                                placeholder='e.g., "Happy Birthday Nilesh! 🎂"'
                                value={item.customText || ''}
                                onChange={(e) => onUpdateCustomText(item.id, e.target.value)}
                                className="w-full text-xs bg-white border border-stone-200 rounded-lg py-1.5 px-2.5 mt-1 focus:outline-none focus:border-brand-pink text-brand-brown placeholder-stone-450"
                              />
                            </div>
                          )}

                        </div>

                        {/* Bottom slider layout */}
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                            Select Units:
                          </span>

                          <div className="flex items-center gap-2.5 bg-stone-100 px-2 py-1 rounded-xl">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded text-brand-brown hover:bg-stone-200 transition-colors cursor-pointer"
                              aria-label="Reduce"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-black font-mono text-brand-brown">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded text-brand-brown hover:bg-stone-200 transition-colors cursor-pointer"
                              aria-label="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}

                    {/* Progress to free shipping inside drawer */}
                    <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm text-xs font-sans">
                      {freeShippingUnlocked ? (
                        <div className="flex items-start gap-2.5 text-emerald-800">
                          <span className="text-base leading-none">🚚</span>
                          <div>
                            <p className="font-bold">Complimentary Delivery Unlocked!</p>
                            <p className="text-[11px] text-stone-500 mt-0.5">Your list is {totalItems} items. Compliments from Vaishali!</p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="font-bold text-pink-900">Add <span className="font-mono text-xs font-bold text-[#db0075] underline underline-offset-2">{50 - totalItems}</span> more units for FREE insulated transit delivery.</p>
                          <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-1.5 border border-stone-250">
                            <div
                              className="bg-[#db0075] h-full transition-all duration-300"
                              style={{ width: `${(totalItems / 50) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Drawer Bottom Checkout Calculator Panel */}
              <div className="bg-stone-50 p-5 border-t border-stone-200 font-sans">
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-xs text-stone-500">
                    <span>Total Selected Units</span>
                    <span className="font-mono font-bold text-brand-brown">{totalItems} units</span>
                  </div>

                  <div className="flex justify-between text-xs text-stone-500">
                    <span>Insulated Local Delivery</span>
                    {freeShippingUnlocked ? (
                      <span className="text-emerald-600 font-bold uppercase text-[10px]">Complimentary Delivery</span>
                    ) : (
                      <span className="italic text-stone-405 font-medium">Standard Area rate</span>
                    )}
                  </div>

                  <div className="h-[1px] bg-stone-200 my-2"></div>

                  <div className="flex flex-col gap-0.5 text-left text-xs text-[#db0075] bg-pink-50/40 p-2.5 rounded-lg border border-pink-100/40">
                    <span className="font-extrabold uppercase text-[9px] tracking-wider">Custom Quote Inquiry</span>
                    <p className="text-[11px] leading-relaxed font-medium text-stone-600">
                      Prices are removed for custom home baking. Nilesh & Vaishali will confirm your custom request & ingredients over WhatsApp directly!
                    </p>
                  </div>
                </div>

                {/* Main WhatsApp Send Action Button */}
                <button
                  onClick={compileWhatsAppMessage}
                  disabled={cart.length === 0}
                  className={`w-full text-white font-extrabold py-4 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer ${
                    cart.length === 0
                      ? 'bg-stone-300 text-stone-400 cursor-not-allowed shadow-none'
                      : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-gray-400 mt-2.5 leading-normal">
                  No payment details needed. This compiles an instant WhatsApp request directly to Nilesh & Vaishali to setup timings.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
