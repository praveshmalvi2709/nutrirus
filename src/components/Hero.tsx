import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenWhatsApp: (customMsg?: string) => void;
}

const HERO_SLIDES = [
  {
    src: '/assets/aistudio/841229967_18095820698227329_4814920154968075770_n_88fe6399.jpg',
    title: 'Signature Cold-Pressed Lineup',
    subtitle: 'Green Island • Orange Shine • Refresh+ • Blue Spirulina',
  },
  {
    src: '/assets/aistudio/785200593_18090930098227329_1875046738226341858_n_abb4a313.jpg',
    title: 'Refresh+ (300ml)',
    subtitle: 'Cucumber, Apple, Lemon, Ginger & Mint',
  },
  {
    src: '/assets/aistudio/787036400_18090585578227329_9097589217674644502_n_9ac3b303.jpg',
    title: 'Orange Shine (300ml)',
    subtitle: 'Orange, Carrot & Fresh Mint • Supports Immune System',
  },
  {
    src: '/assets/aistudio/830872566_18094701890227329_6789745595925061865_n_0a2d4578.jpg',
    title: 'Green Island (300ml)',
    subtitle: 'Kale, Lettuce, Spinach, Celery, Cucumber, Coriander, Ginger & Lemon',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle organic background gradient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-amber-100/30 to-green-100/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Brand Story & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status / Location editorial tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-stone-200/90 rounded-full shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#15803D]" />
              <span className="text-xs font-semibold text-stone-700 tracking-wide">
                Freshly Pressed in Indore • Scheme 140
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-xs font-bold text-[#E08714] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#E08714] text-[#E08714]" />
                4.5/5 Rating
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F4C3A] leading-[1.12] sm:leading-[1.08] font-display" style={{ textWrap: 'balance' }}>
                Eat better. Drink better.{' '}
                <span className="text-[#D97706] inline-block">Live better.</span>
              </h1>
              <p className="text-base sm:text-xl text-stone-600 max-w-xl font-normal leading-relaxed">
                Indore’s premier fresh juice & beverage bar. Pure hydraulic cold-pressed juices, energizing power bowls, and high-protein clean meals crafted without added sugars or artificial shortcuts.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#0F4C3A] hover:bg-[#15803D] active:scale-[0.98] rounded-xl shadow-md shadow-emerald-950/10 transition-all focus-visible:outline-2 focus-visible:outline-[#15803D] text-center"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenWhatsApp('Hi NutriRus! I would like to order fresh juices and meals for delivery in Indore.')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0F4C3A] bg-white hover:bg-emerald-50/80 border border-stone-300 hover:border-[#15803D] active:scale-[0.98] rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-[#15803D] text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#15803D]" />
                <span>WhatsApp Order & Inquiry</span>
              </button>
            </div>

            {/* Nutrition & Trust Indicators */}
            <div className="pt-5 border-t border-stone-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div className="bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-stone-200/60">
                <p className="text-lg sm:text-2xl font-extrabold text-[#0F4C3A] font-display tabular-nums">100%</p>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-tight">Raw Cold-Pressed</p>
              </div>
              <div className="bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-stone-200/60">
                <p className="text-lg sm:text-2xl font-extrabold text-[#D97706] font-display tabular-nums">22g</p>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-tight">Protein Bowls</p>
              </div>
              <div className="bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl border sm:border-0 border-stone-200/60">
                <p className="text-lg sm:text-2xl font-extrabold text-[#0F4C3A] font-display tabular-nums">8am–11pm</p>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-tight">Open 7 Days</p>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Auto-fading Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-stone-200/60 border border-stone-200/90 bg-stone-900 aspect-[4/5] w-full max-w-md mx-auto">
              <AnimatePresence mode="sync">
                <motion.img
                  key={HERO_SLIDES[currentIndex].src}
                  src={HERO_SLIDES[currentIndex].src}
                  alt={HERO_SLIDES[currentIndex].title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Bottom Scrim & Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 sm:p-6 pt-16 flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {HERO_SLIDES[currentIndex].title}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      {HERO_SLIDES[currentIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex items-center gap-2 mt-4">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Show slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? 'w-7 bg-[#FBBF24]'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
