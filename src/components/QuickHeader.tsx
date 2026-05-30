import { Clock, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function QuickHeader() {
  return (
    <div id="quick-header" className="bg-pink-50/50 text-stone-750 text-[11px] py-1.5 px-4 border-b border-pink-100/40 z-40 sticky top-0 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side: Hours & Location */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#db0075]" />
            <span>Open: {CONTACT_INFO.hours}</span>
          </div>
          <div className="h-3 w-[1px] bg-pink-200 hidden sm:block"></div>
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#db0075]" />
            <span>Serving Navi Mumbai, Central & Western Mumbai</span>
          </div>
        </div>

        {/* Right Side: Call Us */}
        <div className="flex items-center gap-3">
          <span className="text-stone-500 font-light">Need a Custom Cake?</span>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            id="header-call-btn"
            className="flex items-center gap-1 bg-pink-100 hover:bg-pink-200 text-[#db0075] px-3 py-0.5 rounded-full border border-pink-200/40 transition-all font-semibold text-xs"
          >
            <Phone className="w-3 h-3" />
            <span>Call {CONTACT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
