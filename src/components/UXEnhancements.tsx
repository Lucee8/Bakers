import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  imageTitle: string;
  onClose: () => void;
}

export function ImageLightbox({ isOpen, imageUrl, imageTitle, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="image-lightbox-overlay"
          className="fixed inset-0 z-55 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Top Panel */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[#faf7f2] z-10 select-none font-sans">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#db0075]">Vaishali Bakers Showcase</span>
              <span className="text-sm font-serif font-semibold">{imageTitle}</span>
            </div>
            <button
              onClick={onClose}
              id="close-lightbox-btn"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#faf7f2] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image Card */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent close on outer image click
          >
            <img
              src={imageUrl}
              alt={imageTitle}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Bottom Prompt Information */}
          <div className="absolute bottom-6 text-[#faf7f2]/65 text-xs text-center select-none font-light">
            <span>"Eat with your eyes!" Tap anywhere to dismiss. Custom portions available on WhatsApp.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FloatingWhatsAppButton() {
  const triggerWhatsApp = () => {
    const text = encodeURIComponent("Hello Vaishali, I would like to enquire about your baking menu and bulk cupcake availability. Thank you!");
    window.open(`https://wa.me/919892047995?text=${text}`, '_blank');
  };

  return (
    <div id="floating-whatsapp-trigger" className="fixed bottom-6 right-6 z-50 select-none">
      <motion.button
        onClick={triggerWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-2xl flex items-center justify-center transition-all cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow pulsing rings */}
        <span className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-75 scale-105"></span>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
        </span>

        {/* Logo Icon (slightly smaller) */}
        <MessageCircle className="w-5 h-5" />

        {/* Hover Tooltip display text (positioned to the left of the button) */}
        <span className="absolute right-13 whitespace-nowrap bg-brand-brown text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
          Chat with Vaishali
        </span>
      </motion.button>
    </div>
  );
}


