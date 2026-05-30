import React from 'react';
import { motion } from 'motion/react';
import heroCoverImg from '../assets/images/hero_cover_1779797137466.png';

export default function HeroSection() {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('catalog-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#ffeef3] via-[#fffbfc] to-white text-brand-brown py-12 sm:py-16">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent opacity-80 pointer-events-none"></div>
      
      {/* Subtle decorative sparkles in background */}
      <div className="absolute top-20 left-[5%] w-2 h-2 rounded-full bg-[#db0075] opacity-20 animate-ping hidden md:block"></div>
      <div className="absolute bottom-40 left-[45%] w-3 h-3 rounded-full bg-pink-300 opacity-20 animate-pulse hidden md:block"></div>

      {/* Two-Column Responsive Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Texts and Actions */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center space-y-6">
            
            {/* 2. Main Title Heading matching Monginis (Freshly Baked Happiness) */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-[#1e113a] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              >
                Freshly Baked <br />
                <span className="text-[#db0075] block mt-1">
                  Happiness
                </span>
              </motion.h1>
            </div>

            {/* 3. Slogan narrative description (Exact Copy from Screenshot) */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-base sm:text-lg text-stone-605 leading-relaxed font-normal"
            >
              Delicious cakes, pastries & treats made with love. Delivered fresh to your doorstep.
            </motion.p>

            {/* 4. Action Buttons (Fully rounded like Monginis) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-row gap-4 pt-2"
            >
              <button
                onClick={handleScrollToMenu}
                className="px-8 py-3.5 bg-[#db0075] hover:bg-[#c20068] text-white font-bold rounded-full transition-all shadow-md shadow-pink-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Order Online →</span>
              </button>
              <button
                onClick={handleScrollToMenu}
                className="px-8 py-3.5 bg-white hover:bg-pink-100/30 text-[#db0075] font-bold rounded-full border border-pink-300 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm shadow-xs"
              >
                <span>View Menu</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Highly polished cover poster matching Monginis styling */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center">
            
            {/* Soft backdrop glow */}
            <div className="absolute -z-10 w-[280px] sm:w-[350px] md:w-[400px] aspect-square rounded-full bg-gradient-to-tr from-pink-200/50 to-pink-50 blur-2xl"></div>

            {/* Platter Frame and Floating Badges */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square p-2"
            >
              {/* Main Banner Image Container */}
              <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white relative">
                <img
                  src={heroCoverImg}
                  alt="Signature Hazelnut Caramel Celebration Cake"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* FLOATING BADGE A (Top Right - "100% Fresh") */}
              <div className="absolute top-[8%] right-[5%] bg-white border border-stone-100/50 rounded-full px-3 py-1 flex items-center gap-1 shadow-md z-20">
                <span className="text-emerald-500 font-extrabold text-xs">✓</span>
                <span className="text-stone-700 font-bold text-[10px] uppercase tracking-wider">100% Fresh</span>
              </div>

              {/* FLOATING BADGE B (Bottom Left - "Rating Card") */}
              <div className="absolute -bottom-1 left-[4%] bg-white border border-stone-100/40 rounded-2xl p-2.5 shadow-xl z-20 flex items-center gap-2.5 min-w-[130px]">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ★
                </div>
                <div className="text-left leading-tight font-sans">
                  <div className="text-stone-850 font-black text-xs">4.9 Rating</div>
                  <span className="text-[9px] text-stone-500 font-semibold mt-0.5 block">2000+ Reviews</span>
                </div>
              </div>

              {/* FLOATING BADGE C (Middle Right - "Trending sticker") */}
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-[#db0075] text-white rounded-l-xl rounded-r-xs pl-3 pr-2.5 py-1.5 shadow-lg z-20 flex items-center gap-1 font-sans">
                <span className="text-[10px] animate-pulse">🔥</span>
                <span className="text-[9px] uppercase tracking-wider font-extrabold">Trending</span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
