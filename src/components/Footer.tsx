import React from 'react';
import { Logo } from './Logo';
import { STORE_INFO } from '../data/products';
import { Instagram, MessageCircle, MapPin, Clock, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="bg-[#0F4C3A] text-white pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/80">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size={44} showText={true} light={true} />
            <p className="text-sm text-emerald-100/80 max-w-sm leading-relaxed">
              Indore’s fresh cold-pressed juice and wholesome beverage bar. Dedicated to living nutrition, zero added sugars, and energizing plant-based goodness.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-900/70 hover:bg-emerald-800 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() => onOpenWhatsApp('Hi NutriRus! Inquiring from your website footer.')}
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp contact"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Cold-Pressed Juices</a>
              </li>
              <li>
                <a href="#meals" className="hover:text-white transition-colors">22g Protein Meals</a>
              </li>
              <li>
                <a href="#detox-quiz" className="hover:text-white transition-colors">Detox Diagnostic</a>
              </li>
              <li>
                <a href="#cafe-interior" className="hover:text-white transition-colors">Zodiac Mall Cafe</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Store Info */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              Hours
            </h4>
            <div className="space-y-1.5 text-xs text-emerald-100">
              <p className="font-semibold text-white">Monday – Sunday</p>
              <p className="tabular-nums">8:00 AM – 11:00 PM</p>
              <p className="text-[11px] text-emerald-200/80 pt-1">
                Open every day including public holidays.
              </p>
            </div>
          </div>

          {/* Col 4: Scheme 140 Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
              Indore Store
            </h4>
            <div className="space-y-2 text-xs text-emerald-100">
              <p className="leading-relaxed">
                G-19, Zodiac Mall, Sampat Farms, Scheme No 140, Indore, Madhya Pradesh 452016
              </p>
              <p className="text-[11px] text-emerald-300">
                Call / WhatsApp: {STORE_INFO.phone}
              </p>
            </div>
          </div>

        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <p>
            © {new Date().getFullYear()} NutriRus. All rights reserved. Made with care in Indore.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Eat better. Drink better. Live better.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
