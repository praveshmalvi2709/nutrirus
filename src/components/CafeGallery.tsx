import React from 'react';
import { Sparkles, MapPin, Coffee, UtensilsCrossed, Users, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const CafeGallery: React.FC = () => {
  return (
    <section id="cafe-interior" className="py-16 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
            Experience The Vibe
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C3A] font-display" style={{ textWrap: 'balance' }}>
            Drink to Thrive at Zodiac Mall
          </h2>
          <p className="text-base text-stone-600">
            Step into our sunlit oasis in Scheme 140. Designed with warm timber, lush hanging greenery, sunny banquettes, and an uplifting atmosphere made for conscious nourishment.
          </p>
        </div>

        {/* Cafe Feature Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Showcase (Recreating the cafe interior photo with CSS/SVG depth) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#FEF9EE] via-[#FDF5E6] to-[#FAF1DE] rounded-3xl p-6 sm:p-10 border border-amber-200/60 shadow-md relative overflow-hidden flex flex-col justify-between">
            {/* The Iconic Wall Marquee from the photo */}
            <div className="space-y-4">
              <div className="inline-block bg-[#166534] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md">
                Cafe Feature Wall
              </div>

              {/* Wooden Slat Wall Visual */}
              <div className="bg-[#6B4423] p-6 rounded-2xl shadow-inner relative overflow-hidden border-2 border-[#54341A]">
                {/* Slats pattern */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(0,0,0,0.18)_6px,rgba(0,0,0,0.18)_8px)]" />

                {/* Glowing "DRINK TO THRIVE" Sign */}
                <div className="relative z-10 py-6 sm:py-8 text-center">
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider sm:tracking-widest font-display drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]">
                    DRINK TO THRIVE
                  </h3>
                  <p className="text-amber-200 text-[11px] sm:text-xs font-semibold tracking-wider mt-2 uppercase">
                    NutriRus Juice Bar • Scheme 140 Indore
                  </p>
                </div>
              </div>

              {/* Cafe Interior Aesthetic details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4">
                <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200 text-center flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-0">
                  <div className="w-12 sm:w-full h-8 bg-[repeating-linear-gradient(90deg,#FACC15,#FACC15_12px,#FFFFFF_12px,#FFFFFF_24px)] rounded sm:mb-2 border border-amber-200 shrink-0" />
                  <div className="text-left sm:text-center">
                    <p className="text-xs font-bold text-stone-900">Striped Banquettes</p>
                    <p className="text-[10px] text-stone-500">Sunny yellow booths</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200 text-center flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-0">
                  <div className="w-8 h-8 rounded-full bg-[#B7798D] sm:mx-auto sm:mb-2 border-2 border-[#78350F] shrink-0" />
                  <div className="text-left sm:text-center">
                    <p className="text-xs font-bold text-stone-900">Bistro Seating</p>
                    <p className="text-[10px] text-stone-500">Dusty rose curved chairs</p>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-amber-200 text-center flex sm:flex-col items-center sm:justify-center gap-3 sm:gap-0">
                  <div className="text-2xl sm:text-xl sm:mb-1 shrink-0 w-8 text-center">🌿</div>
                  <div className="text-left sm:text-center">
                    <p className="text-xs font-bold text-stone-900">Hanging Planters</p>
                    <p className="text-[10px] text-stone-500">Lush cascading pothos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-8 pt-6 border-t border-amber-200/80 flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-[#0F4C3A]">Free Wi-Fi & Work-Friendly Vibes</span>
              <span className="font-bold text-[#E08714]">8:00 AM – 11:00 PM Daily</span>
            </div>
          </div>

          {/* Right 5 Columns: Highlights & Visit Perks */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-[#FBF9F4] p-6 rounded-3xl border border-stone-200 space-y-4">
              <h3 className="text-lg font-bold text-[#0F4C3A] font-display flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#15803D]" />
                <span>Why Indore Locals Love NutriRus</span>
              </h3>
              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">✓</span>
                  <span><strong>Zero Refined Sugar:</strong> Sweetened purely with fruits like fresh green apples, Nagpur oranges, and coconut water.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">✓</span>
                  <span><strong>Gym & Macro Friendly:</strong> High-protein boxes clearly labeling carbs, fats, and 22g protein per box.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">✓</span>
                  <span><strong>Cold Hydraulic Pressing:</strong> No high-speed metal blades generating heat; nutrients stay living and active.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">✓</span>
                  <span><strong>Direct WhatsApp Orders:</strong> Get delivery straight to your doorstep across Indore without third-party markups.</span>
                </li>
              </ul>
            </div>

            {/* Quick Visit Card */}
            <div className="bg-[#0F4C3A] text-white p-6 rounded-3xl shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#FBBF24] tracking-wider uppercase">
                  Dine-In & Takeaway
                </span>
                <span className="text-xs bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-200">
                  Open Today
                </span>
              </div>
              <p className="text-base font-bold font-display">
                G-19, Zodiac Mall, Sampat Farms, Scheme 140
              </p>
              <p className="text-xs text-emerald-100">
                Easy parking, air-conditioned seating, cozy work corners.
              </p>
              <div className="pt-2">
                <a
                  href="#store-info"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBBF24] hover:underline"
                >
                  <span>View Directions & Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
