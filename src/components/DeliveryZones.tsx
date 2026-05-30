import { MapPin, Truck, ShieldAlert, Award } from 'lucide-react';
import { DELIVERY_ZONES } from '../data';

export default function DeliveryZones() {
  return (
    <section id="delivery-section" className="py-16 px-4 bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[#db0075] block mb-2">Our Reach</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-brown font-bold">Delivery Coverage Across Mumbai</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Ensuring your cakes, cupcakes, and brownies arrive perfectly intact, beautifully fresh, and on schedule.
          </p>
          <div className="w-16 h-1 bg-[#db0075] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Highlight Quote Bar */}
        <div className="bg-pink-50/10 border-l-4 border-[#db0075] p-6 rounded-r-3xl mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#db0075]/10 text-[#db0075] flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-brown">Daily Delivery Timeline</h4>
            <p className="text-xs text-stone-600 mt-1">
              "Freshly delivered to your doorstep between <strong className="text-brand-brown">8:00 AM and 11:00 PM</strong> daily." We route your orders in specialized transit units to handle Mumbai heat and traffic gracefully!
            </p>
          </div>
        </div>

        {/* 3 Zone Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {DELIVERY_ZONES.map((zone, index) => {
            // Give icon background based on index to differentiate visually
            let iconColorClass = 'text-pink-600 bg-pink-100';
            let dotColor = 'bg-pink-500';
            if (index === 1) {
              iconColorClass = 'text-pink-600 bg-pink-100/70';
              dotColor = 'bg-[#db0075]';
            } else if (index === 2) {
              iconColorClass = 'text-pink-700 bg-pink-100';
              dotColor = 'bg-pink-600';
            }

            return (
              <div
                key={zone.name}
                className="bg-pink-50/10 p-6 sm:p-8 rounded-3xl border border-stone-100 hover:border-[#db0075]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${iconColorClass}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-brown font-serif">{zone.name}</h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-light font-sans">
                  {zone.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Delivery Guarantee Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6 bg-pink-50/30 border border-pink-200/40 text-stone-800 p-6 rounded-3xl font-sans">
          <div className="flex gap-3">
            <span className="text-lg shrink-0">👩‍🍳</span>
            <div>
              <h5 className="text-xs font-bold text-[#db0075] uppercase">Hygiene & Safety Assured</h5>
              <p className="text-[11px] text-stone-605 mt-1 font-sans leading-relaxed">Our workspace adheres closely to professional culinary safety protocols. Baked with absolute neatness.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-lg shrink-0">🍫</span>
            <div>
              <h5 className="text-xs font-bold text-[#db0075] uppercase">Freshness Commitment</h5>
              <p className="text-[11px] text-stone-605 mt-1 font-sans leading-relaxed">We prepare your orders specifically for your date window. Real fresh, no preservation agents ever used.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
