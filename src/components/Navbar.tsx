import React, { useState } from "react";
import { Logo } from "./Logo";
import { ShoppingBag, MessageCircle, Menu, X, Phone } from "lucide-react";
import { STORE_INFO } from "../data/products";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenWhatsApp,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#15803D] rounded-lg"
        >
          <Logo size={36} showText={true} />
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a
            href="#menu"
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#15803D]"
          >
            Menu & Juices
          </a>
          <a
            href="#meals"
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#15803D]"
          >
            22g Protein Meals
          </a>
          <a
            href="#detox-quiz"
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#15803D]"
          >
            Detox Guide
          </a>
          <a
            href="#cafe-interior"
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#15803D]"
          >
            Cafe & Vibe
          </a>
          <a
            href="#store-info"
            className="hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#15803D]"
          >
            Visit Indore
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Cart Drawer + WhatsApp fast trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenWhatsApp}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#166534] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#15803D]"
            aria-label="Direct WhatsApp inquiry"
          >
            <MessageCircle className="w-4 h-4 text-[#15803D]" />
            <span>WhatsApp Us</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0F4C3A] hover:bg-[#14532D] active:scale-[0.98] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#15803D]"
            aria-label="View order bag"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 text-[11px] font-bold text-stone-900 bg-[#FBBF24] rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg focus-visible:outline-2 focus-visible:outline-[#15803D]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F4] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Menu & Cold-Pressed Juices
            </a>
            <a
              href="#meals"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              22g Protein Meals & Bowls
            </a>
            <a
              href="#detox-quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Upgrade Your Detox Game
            </a>
            <a
              href="#cafe-interior"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Cafe Ambiance (Drink to Thrive)
            </a>
            <a
              href="#store-info"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors"
            >
              Hours & Zodiac Mall Location
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#15803D] rounded-xl shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with NutriRus on WhatsApp</span>
            </button>
            <div className="text-center text-xs text-stone-500 pt-1">
              {STORE_INFO.landmark} • 8:00 AM – 11:00 PM
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
