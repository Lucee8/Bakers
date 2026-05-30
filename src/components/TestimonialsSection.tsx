import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play, Heart, ShieldCheck } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  itemOrdered: string;
  avatarBg: string;
  avatarText: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sneha Iyer",
    location: "Kanjurmarg West, Mumbai",
    rating: 5,
    comment: "The Rasmalai Cake was the star of our anniversary party! It was incredibly moist, 100% eggless, and loaded with real Rasmalai chunks and pistachios. Everyone kept asking where we ordered it from!",
    itemOrdered: "Signature Rasmalai Cake (1 Kg)",
    avatarBg: "bg-pink-100 text-pink-700",
    avatarText: "SI"
  },
  {
    id: 2,
    name: "Amit Gangar",
    location: "Vashi, Navi Mumbai",
    rating: 5,
    comment: "I order Vaishali's Walnut Fudge Brownies almost every other week. They are super dense, fudgy, and packed with crispy premium California walnuts. Best eggless brownies in Mumbai, hands down!",
    itemOrdered: "Box of Walnut Fudge Brownies",
    avatarBg: "bg-amber-100 text-amber-700",
    avatarText: "AG"
  },
  {
    id: 3,
    name: "Priyanshi Mehta",
    location: "Ghatkopar, Mumbai",
    rating: 5,
    comment: "Ordered a Photo Print Cake for my daughter's birthday. The print quality was high definition and edible colors were perfectly safe. The vanilla diplomat cream layer inside was simply divine!",
    itemOrdered: "Customized Edible Photo Cake",
    avatarBg: "bg-indigo-100 text-indigo-700",
    avatarText: "PM"
  },
  {
    id: 4,
    name: "Vinay Shenoy",
    location: "Mulund East, Mumbai",
    rating: 5,
    comment: "Their Gulab Gulkand Rose Cake is a literal culinary masterpiece. The beautiful fusion of aromatic rose-petal preservation (gulkand) and soft gulab jamun toppings is royal. Pure bliss in every bite!",
    itemOrdered: "Royal Gulab Gulkand Fusion Cake",
    avatarBg: "bg-emerald-100 text-emerald-700",
    avatarText: "VS"
  },
  {
    id: 5,
    name: "Anjali Deshmukh",
    location: "Andheri, Mumbai",
    rating: 5,
    comment: "Nostalgic, soft, and perfect! Vaishali's Tutti Frutti Vanilla sponge cupcakes remind me of the old traditional bakeries but with premium fresh butter softness. Excellent addition for our high-tea kitty party.",
    itemOrdered: "Tutti Frutti Dry Muffin Cupcakes",
    avatarBg: "bg-rose-100 text-rose-700",
    avatarText: "AD"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play configurations
  const slideDuration = 6000; // 6 seconds per slide
  const progressStep = 100 / (slideDuration / 50); // Speed of progress increments

  // Change slide function
  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setProgress(0);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setProgress(0);
  };

  // Manage timers
  useEffect(() => {
    if (isPlaying) {
      // Progress bar interval updates every 50ms
      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + progressStep;
        });
      }, 50);
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    }

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, currentIndex]);

  // Framer motion animation variants
  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0,
      scale: 0.98
    }),
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.25
      }
    })
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials-section" className="py-16 px-4 bg-[#faf7f2] relative overflow-hidden font-sans border-y border-pink-100/30">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-10 left-10 text-pink-200/20 text-8xl font-serif select-none pointer-events-none">✿</div>
      <div className="absolute bottom-10 right-10 text-pink-200/20 text-8xl font-serif select-none pointer-events-none">✿</div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#db0075] block mb-2">Sweet Praise & Smiles</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-brown font-bold tracking-tight">Verified Customer Stories</h2>
          <div className="w-16 h-1 bg-[#db0075] mx-auto mt-4 rounded-full"></div>
          <p className="text-xs text-stone-500 mt-3 max-w-md mx-auto">
            Read real, glowing feedback shared by families and sweet-tooths across Mumbai who choose our eggless wonders.
          </p>
        </div>

        {/* Carousel Outer Shell */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-pink-100 shadow-xl overflow-hidden min-h-[300px] flex flex-col justify-between relative">
            
            {/* Top quote icon decoration */}
            <div className="absolute top-6 right-8 text-pink-100 select-none pointer-events-none">
              <Quote className="w-16 h-16 transform rotate-180 fill-current opacity-60" />
            </div>

            {/* Slider window */}
            <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="active"
                  exit="exit"
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Stars & Verification label */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4.5 h-4.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] text-stone-400 font-extrabold uppercase bg-stone-100 px-2 py-0.5 rounded tracking-wider flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                        <span>Verified Customer</span>
                      </span>
                    </div>

                    {/* Actual Review Text */}
                    <blockquote>
                      <p className="text-[#1e113a] text-base sm:text-lg font-medium leading-relaxed font-sans italic">
                        "{activeTestimonial.comment}"
                      </p>
                    </blockquote>
                  </div>

                  {/* Profile + Order Details Info footer */}
                  <div className="flex items-center gap-4 mt-8 border-t border-pink-50/60 pt-6">
                    {/* Circle Initials Avatar */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border border-current/10 shadow-sm ${activeTestimonial.avatarBg}`}>
                      {activeTestimonial.avatarText}
                    </div>

                    <div className="min-w-0">
                      <cite className="not-italic font-black text-[#1e113a] text-sm tracking-tight block">
                        {activeTestimonial.name}
                      </cite>
                      <span className="text-xs text-stone-500 block font-normal">
                        📍 {activeTestimonial.location}
                      </span>
                      {/* Product Stamp tag */}
                      <span className="inline-block mt-1 text-[10px] text-[#db0075] bg-pink-50/50 px-2.5 py-0.5 rounded-full font-bold border border-pink-100/50">
                        🍰 {activeTestimonial.itemOrdered}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Continuous Progress Indicator Bar */}
            <div className="w-full bg-stone-100 h-1">
              <div 
                className="bg-gradient-to-r from-pink-500 via-[#db0075] to-brand-brown h-full transition-all duration-50"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

          </div>

          {/* Quick Manual Slider Navigation Controls */}
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white border border-pink-100 text-[#db0075] hover:bg-pink-50 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
            aria-label="Previous feedback"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white border border-pink-100 text-[#db0075] hover:bg-pink-50 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
            aria-label="Next feedback"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Playback Toolbar + Navigation Dots */}
        <div className="flex items-center justify-between mt-6 px-2 text-stone-500">
          
          {/* Pause / Play Control toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-stone-400 hover:text-[#db0075] text-xs font-bold transition-colors flex items-center gap-1.5 bg-white border border-stone-100 shadow-xs px-3 py-1.5 rounded-full cursor-pointer"
            title={isPlaying ? "Pause autoplay carousel" : "Start autoplay carousel"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="text-[10px]">Autoplay Active</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span className="text-[10px]">Autoplay Paused</span>
              </>
            )}
          </button>

          {/* Bullet Indicators Layout */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-[#db0075]' : 'w-2 bg-stone-300 hover:bg-pink-300'
                }`}
                aria-label={`Go to customer review ${idx + 1}`}
                title={`Story from ${testimonial.name}`}
              />
            ))}
          </div>

          {/* Love stamp counter equivalent */}
          <div className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wider flex items-center gap-1">
            <Heart className="w-3 h-3 text-[#db0075] fill-[#db0075]" />
            <span>Pure Delights</span>
          </div>

        </div>

      </div>
    </section>
  );
}
