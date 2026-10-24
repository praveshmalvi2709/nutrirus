import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { CheckCircle2, Sparkles, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';
import { ProductCardVisual } from './ProductCardVisual';

interface DetoxQuizProps {
  onAddToCart: (product: Product) => void;
  onOpenWhatsApp: (msg: string) => void;
}

export const DetoxQuiz: React.FC<DetoxQuizProps> = ({ onAddToCart, onOpenWhatsApp }) => {
  // Interactive Decision tree from the poster
  const [dinnerRoutineSame, setDinnerRoutineSame] = useState<boolean | null>(true);
  const [bloatedAndTired, setBloatedAndTired] = useState<boolean | null>(true);
  const [energyGoal, setEnergyGoal] = useState<'digestion' | 'immunity' | 'hydration' | 'protein'>('digestion');

  // Match recommendation based on choices
  let recommendedId = 'green-island';
  let recommendationReason = 'Intensive leafy green cleanse to kickstart metabolism and alleviate bloating.';

  if (!bloatedAndTired && energyGoal === 'hydration') {
    recommendedId = 'refresh-plus';
    recommendationReason = 'Pure coconut water and pineapple electrolytes for deep cellular hydration.';
  } else if (energyGoal === 'immunity') {
    recommendedId = 'orange-shine';
    recommendationReason = 'Beta-carotene and vitamin C surge to revitalize immunity and cellular vitality.';
  } else if (energyGoal === 'protein') {
    recommendedId = 'protein-power-box';
    recommendationReason = '22g of clean protein with herb-grilled paneer and quinoa brown rice to replace repetitive dinner.';
  } else {
    recommendedId = dinnerRoutineSame ? 'detox-starter-cleanse' : 'daily-greens';
    recommendationReason = 'Complete alkalizing reset to break routine and flush water retention.';
  }

  const recommendedProduct = PRODUCTS.find((p) => p.id === recommendedId) || PRODUCTS[0];

  return (
    <section id="detox-quiz" className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F2EB] to-[#FBF9F4] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading matching poster */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
            Interactive Wellness Flowchart
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C3A] font-display" style={{ textWrap: 'balance' }}>
            Time to Upgrade Your Detox Game.
          </h2>
          <p className="text-base text-stone-600">
            As featured in our Scheme 140 cafe: take the simple 3-question diagnostic to discover the exact cold-pressed juice or clean meal your body is asking for today.
          </p>
        </div>

        {/* Flowchart Interactive Board */}
        <div className="bg-white rounded-3xl p-4 sm:p-10 shadow-lg border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Columns: Questions and toggles */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Question 1: Same old dinner routine? */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    Same old heavy dinner routine?
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:pl-8">
                  <button
                    onClick={() => setDinnerRoutineSame(true)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between ${
                      dinnerRoutineSame === true
                        ? 'bg-[#0F4C3A] text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>Yes, stuck on repeat</span>
                    {dinnerRoutineSame === true && <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0 ml-2" />}
                  </button>
                  <button
                    onClick={() => setDinnerRoutineSame(false)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between ${
                      dinnerRoutineSame === false
                        ? 'bg-[#0F4C3A] text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>No, trying to eat clean</span>
                    {dinnerRoutineSame === false && <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0 ml-2" />}
                  </button>
                </div>
              </div>

              {/* Question 2: Feeling bloated and tired? */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">2</span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    Feeling bloated and sluggish throughout the day?
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:pl-8">
                  <button
                    onClick={() => setBloatedAndTired(true)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between ${
                      bloatedAndTired === true
                        ? 'bg-[#0F4C3A] text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>Yes, heavy digestion</span>
                    {bloatedAndTired === true && <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0 ml-2" />}
                  </button>
                  <button
                    onClick={() => setBloatedAndTired(false)}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex items-center justify-between ${
                      bloatedAndTired === false
                        ? 'bg-[#0F4C3A] text-white shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span>No, digestion is fine</span>
                    {bloatedAndTired === false && <CheckCircle2 className="w-4 h-4 text-[#FBBF24] shrink-0 ml-2" />}
                  </button>
                </div>
              </div>

              {/* Question 3: What's your target wellness priority? */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-display">
                    What is your main priority right now?
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:pl-8">
                  {[
                    { key: 'digestion', label: 'Gut Reset', emoji: '🌿' },
                    { key: 'hydration', label: 'Hydration', emoji: '💧' },
                    { key: 'immunity', label: 'Immunity', emoji: '🍊' },
                    { key: 'protein', label: '22g Protein', emoji: '💪' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setEnergyGoal(item.key as any)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                        energyGoal === item.key
                          ? 'bg-emerald-50 border-[#15803D] text-[#0F4C3A] shadow-xs'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <div className="text-base mb-1">{item.emoji}</div>
                      <div>{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Matched Result Card */}
            <div className="lg:col-span-5 bg-stone-50 p-6 rounded-2xl border border-stone-200 text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-extrabold rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Personalized Match</span>
              </div>

              <div className="max-w-[200px] mx-auto">
                <ProductCardVisual product={recommendedProduct} className="h-56" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-[#0F4C3A] font-display">
                  {recommendedProduct.name}
                </h4>
                <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
                  {recommendationReason}
                </p>
                <p className="text-lg font-extrabold text-[#D97706] font-display mt-2 tabular-nums">
                  ₹{recommendedProduct.price}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onAddToCart(recommendedProduct)}
                  className="w-full py-3 px-4 bg-[#0F4C3A] hover:bg-[#15803D] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                >
                  Add {recommendedProduct.name} to Bag
                </button>
                <button
                  onClick={() =>
                    onOpenWhatsApp(
                      `Hi NutriRus! I did your Detox Flowchart and matched with "${recommendedProduct.name}". Can you deliver this to my address in Indore?`
                    )
                  }
                  className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-[#166534] border border-emerald-200 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
