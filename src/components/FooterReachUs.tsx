import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Globe, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function FooterReachUs() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact-section" className="bg-stone-50 text-stone-800 pt-16 pb-24 sm:pb-12 px-4 relative border-t border-pink-200/30">
      
      {/* Decorative top wave/gradient or brand pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-[#db0075] to-indigo-900"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          
          {/* Column 1: Core Bakery Contact Details (Lg: 5-cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[#db0075] text-xs font-bold uppercase tracking-widest block mb-2">Connect With Vaishali</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-brown font-extrabold mb-4">The Reach-Us Hub</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 font-normal max-w-md font-sans">
                Every celebration is unique, and we understand that choosing the correct cupcakes or themed brownie tier can hold key importance. Talk to us directly or email our home bakery workspace to finalize dates, custom messaging, or flavor substitutions!
              </p>

              {/* Contact item links list */}
              <div className="space-y-6 animate-fade-in">
                
                {/* 1. Address */}
                <div className="flex items-start gap-4 font-sans">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#db0075] border border-pink-200/40 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block">Home Workspace Address</span>
                    <p className="text-xs sm:text-sm text-brand-brown font-bold mt-1 leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                    <span className="inline-block text-[11px] text-[#db0075] mt-1 bg-pink-50 px-2 py-0.5 rounded font-semibold">
                      Central Mumbai Zone
                    </span>
                  </div>
                </div>

                {/* 2. Direct Call Line */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-1 font-sans">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block">Direct Mobile Dial</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-lg font-bold text-brand-brown hover:text-emerald-600 transition-colors block mt-0.5 font-mono tracking-tight"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-stone-500 leading-normal font-sans">Click to call directly on mobile devices.</p>
                  </div>
                </div>

                {/* 3. Direct Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#db0075] border border-pink-200/30 flex items-center justify-center shrink-0 mt-1 font-sans">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block">Official Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-brand-brown hover:text-[#db0075] transition-colors block mt-1 underline underline-offset-4"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <p className="text-xs text-stone-500 mt-1 leading-normal font-sans">Write for invoice quotes and corporate contracts.</p>
                  </div>
                </div>

                {/* 4. Booking Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#db0075] border border-pink-200/30 flex items-center justify-center shrink-0 mt-1 font-sans">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block">Operating Desk Slots</span>
                    <p className="text-xs sm:text-sm text-brand-brown font-bold mt-1 leading-normal">
                      Every day from {CONTACT_INFO.hours}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5 leading-normal font-sans">Fresh pickups scheduled strictly on reservation details.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels Row */}
            <div className="mt-10 pt-6 border-t border-stone-200 font-sans">
              <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest block mb-3">Our Social Platforms</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-xs text-stone-700 hover:bg-[#db0075] hover:text-white hover:border-[#db0075] flex items-center justify-center transition-all"
                  aria-label="Instagram Link"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-xs text-stone-700 hover:bg-[#db0075] hover:text-white hover:border-[#db0075] flex items-center justify-center transition-all"
                  aria-label="Facebook Link"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-xs text-stone-700 hover:bg-[#db0075] hover:text-white hover:border-[#db0075] flex items-center justify-center transition-all"
                  aria-label="Website Link"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Styled Google Maps Location Embed (Lg: 7-cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between font-sans">
            <div className="h-full min-h-[320px] rounded-3xl overflow-hidden border-2 border-pink-200/20 relative group shadow-2xl flex flex-col bg-white">
              
              {/* Maps Header Panel */}
              <div className="bg-white text-brand-brown px-4 py-3 flex justify-between items-center text-xs font-semibold border-b border-stone-100">
                <div className="flex items-center gap-1.5 text-brand-brown">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#db0075] animate-ping animate-pulse"></span>
                  <span className="text-brand-brown font-semibold">Kanjurmarg Workspace Satellite Locator</span>
                </div>
                <a
                  href="https://maps.google.com/?q=232/B-3,+Dockyard+Colony,+Kanjurmarg+(W),+Mumbai+400078"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[#db0075] hover:text-pink-700 font-bold"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Maps Iframe */}
              <iframe
                title="Dockyard Colony Kanjurmarg Google Maps Embed Location"
                src="https://maps.google.com/maps?q=Dockyard%20Colony,%20Kanjurmarg%20(W),%20Mumbai%20400078&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0 w-full flex-1 min-h-[250px] grayscale contrast-110 brightness-95 opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Maps Footer Warning Banner */}
              <div className="bg-pink-50/10 text-xs py-2 px-4 border-t border-stone-100 flex items-center gap-2 text-stone-500">
                <span>📍</span>
                <span>Dockyard Colony is close to Kanjurmarg West Railway station layout.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Legal Copyright Footer Block */}
        <div className="border-t border-stone-200 pt-8 mt-12 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600">
          <div className="text-left">
            <p className="font-semibold text-brand-brown">Vaishali Bakers | Handcrafted Bakery Hub</p>
            <p className="mt-1 text-stone-500 font-normal">Fresh luxury cupcakes and customizable premium brownie boxes delivered throughout Mumbai.</p>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <p className="font-mono text-stone-500">
              © {currentYear} Vaishali Bakers. All Rights Reserved.
            </p>
            <p className="mt-1 text-[11px] text-stone-500 font-light font-sans">
              Created by <span className="font-semibold text-[#db0075]">{CONTACT_INFO.owner}</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
