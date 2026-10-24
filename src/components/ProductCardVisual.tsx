import React from 'react';
import { Product } from '../types';
import { NutriRusEmblem } from './Logo';

interface VisualProps {
  product: Product;
  className?: string;
}

export const ProductCardVisual: React.FC<VisualProps> = ({ product, className = '' }) => {
  if (product.category === 'juices') {
    // Generate custom liquid colors based on juice id
    let liquidGradient = 'from-emerald-400 via-green-500 to-emerald-700';
    let liquidColor = '#22c55e';

    if (product.id === 'orange-shine') {
      liquidGradient = 'from-amber-400 via-orange-500 to-amber-600';
      liquidColor = '#f97316';
    } else if (product.id === 'refresh-plus') {
      liquidGradient = 'from-yellow-300 via-amber-400 to-yellow-500';
      liquidColor = '#eab308';
    } else if (product.id === 'ocean-glow') {
      liquidGradient = 'from-cyan-300 via-teal-400 to-sky-600';
      liquidColor = '#06b6d4';
    } else if (product.id === 'green-island') {
      liquidGradient = 'from-lime-400 via-emerald-500 to-green-700';
      liquidColor = '#16a34a';
    } else if (product.id === 'nine-essentials') {
      liquidGradient = 'from-emerald-300 via-green-600 to-teal-800';
      liquidColor = '#059669';
    }

    return (
      <div className={`relative flex items-center justify-center p-6 bg-gradient-to-b from-[#F7F5EE] to-[#EDE9DE] rounded-2xl overflow-hidden min-h-[260px] ${className}`}>
        {/* Soft background ambient glow */}
        <div
          className="absolute w-36 h-36 rounded-full blur-2xl opacity-40 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: liquidColor }}
        />

        {/* Realistic Bottle Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Bottle White Cap with ridges */}
          <div className="w-12 h-4.5 bg-white rounded-t-sm shadow-xs border border-stone-200 flex items-center justify-around px-1">
            <div className="w-0.5 h-2.5 bg-stone-300" />
            <div className="w-0.5 h-2.5 bg-stone-300" />
            <div className="w-0.5 h-2.5 bg-stone-300" />
            <div className="w-0.5 h-2.5 bg-stone-300" />
          </div>
          {/* Bottle Neck */}
          <div className="w-10 h-2.5 bg-white/70 backdrop-blur-xs border-x border-stone-200/60" />

          {/* Square Bottle Body */}
          <div className="w-28 h-52 rounded-2xl relative overflow-hidden shadow-lg border border-white/60">
            {/* Liquid Fill */}
            <div className={`absolute inset-0 bg-gradient-to-b ${liquidGradient} opacity-95`}>
              {/* Highlight sheen */}
              <div className="absolute top-0 right-2 w-2 h-full bg-white/20 blur-[1px]" />
              <div className="absolute top-10 left-3 w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="absolute top-20 left-4 w-1 h-1 rounded-full bg-white/40" />
            </div>

            {/* NutriRus Printed Label (exact to images) */}
            <div className="absolute inset-x-2 top-7 bottom-5 bg-white/95 rounded-lg shadow-xs p-2 flex flex-col justify-between border border-stone-100 text-stone-900">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <NutriRusEmblem size={15} />
                  <span className="text-[12px] font-bold tracking-tight text-[#0F4C3A]">NutriRus</span>
                </div>
                <div className="mt-1">
                  <span className="text-[12px] font-extrabold block text-stone-900 leading-tight">
                    {product.name}
                  </span>
                </div>
              </div>

              {/* Ingredients list on bottle label */}
              <div className="text-center space-y-0.5 my-1">
                {product.ingredients.slice(0, 4).map((ing, idx) => (
                  <p key={idx} className="text-[8.5px] font-medium text-stone-600 leading-tight">
                    {ing}
                  </p>
                ))}
              </div>

              {/* Label Footer */}
              <div className="text-center pt-1 border-t border-stone-100">
                <p className="text-[7px] uppercase tracking-wider text-emerald-800 font-semibold truncate">
                  {product.tagline}
                </p>
                <div className="flex justify-between items-center text-[7.5px] text-stone-500 font-bold mt-0.5 px-0.5">
                  <span>Cold Pressed</span>
                  <span className="text-emerald-700">{product.volumeOrWeight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottle Soft Shadow */}
          <div className="w-24 h-2.5 bg-stone-800/15 rounded-full blur-xs mt-1.5" />
        </div>
      </div>
    );
  }

  if (product.category === 'meals') {
    return (
      <div className={`relative flex items-center justify-center p-5 bg-[#F7F5EE] rounded-2xl overflow-hidden min-h-[260px] ${className}`}>
        {/* NutriRus Branded Eco Box Visual */}
        <div className="relative z-10 w-full max-w-[270px]">
          {/* Cardboard Box Top Rim */}
          <div className="bg-[#14532D] text-white px-3 py-1.5 rounded-t-xl text-[11px] font-bold flex justify-between items-center shadow-xs">
            <span className="flex items-center gap-1.5">
              <NutriRusEmblem size={14} />
              <span className="tracking-wide">NutriRus Meal Box</span>
            </span>
            <span className="text-[#FBBF24] font-extrabold text-[10px]">
              {product.id === 'protein-power-box' ? '22G PROTEIN' : 'CLEAN MEAL'}
            </span>
          </div>

          {/* Meal Box Compartments */}
          <div className="bg-white p-3 rounded-b-xl border border-stone-200 shadow-md space-y-2">
            <div className="grid grid-cols-2 gap-2 text-left">
              {/* Grilled Paneer Cubes */}
              <div className="bg-amber-50/90 p-2 rounded-lg border border-amber-200/70">
                <div className="w-full h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="w-7 h-7 bg-amber-50 rounded border border-amber-300 shadow-xs transform rotate-6 flex flex-col justify-around p-1">
                    <div className="h-0.5 bg-amber-600 rounded-full" />
                    <div className="h-0.5 bg-amber-600 rounded-full" />
                  </div>
                </div>
                <p className="text-[10px] font-bold text-amber-950 mt-1">Herb Grilled Paneer</p>
                <p className="text-[8px] text-amber-800">High protein, charred</p>
              </div>

              {/* Quinoa Brown Rice */}
              <div className="bg-stone-50 p-2 rounded-lg border border-stone-200/70">
                <div className="w-full h-12 bg-gradient-to-br from-stone-200 to-amber-100/70 rounded flex items-center justify-center p-1 text-center">
                  <div className="text-[9px] text-stone-600 font-mono">✦ ✦ ✦ ✦<br />✦ ✦ ✦</div>
                </div>
                <p className="text-[10px] font-bold text-stone-900 mt-1">Quinoa Brown Rice</p>
                <p className="text-[8px] text-stone-600">Herbs & seeds</p>
              </div>

              {/* Roasted Veggies */}
              <div className="bg-emerald-50/90 p-2 rounded-lg border border-emerald-200/70">
                <div className="w-full h-10 bg-gradient-to-br from-emerald-100 to-green-200 rounded flex items-center justify-center gap-1">
                  <span className="text-xs">🥦</span>
                  <span className="text-xs">🥕</span>
                </div>
                <p className="text-[10px] font-bold text-emerald-950 mt-1">Roasted Veggies</p>
                <p className="text-[8px] text-emerald-800">Broccoli & zucchini</p>
              </div>

              {/* Creamy Dip / Hummus */}
              <div className="bg-lime-50/90 p-2 rounded-lg border border-lime-200/70">
                <div className="w-full h-10 bg-gradient-to-br from-lime-100 to-emerald-200/70 rounded-full flex items-center justify-center">
                  <span className="text-[11px] font-bold text-emerald-800">🥑 Dip</span>
                </div>
                <p className="text-[10px] font-bold text-lime-950 mt-1">
                  {product.id === 'mediterranean-hummus-box' ? 'Classic Hummus' : 'Green Herb Crema'}
                </p>
                <p className="text-[8px] text-lime-800">Fresh wholesome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.category === 'wraps') {
    return (
      <div className={`relative flex items-center justify-center p-5 bg-[#F7F5EE] rounded-2xl overflow-hidden min-h-[260px] ${className}`}>
        {/* Artisan Wrap Rolled in NutriRus Branded Paper Visual */}
        <div className="relative z-10 w-full max-w-[220px] flex flex-col items-center">
          {/* Top filling exposed */}
          <div className="w-24 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-full border-2 border-amber-300 p-2 shadow-inner flex flex-col items-center justify-center">
            <div className="flex gap-1 items-center">
              <div className="w-3.5 h-3.5 bg-amber-50 rounded border border-amber-400" />
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </div>
            <span className="text-[8px] font-bold text-amber-900 mt-0.5">Charred Paneer & Greens</span>
          </div>

          {/* Branded Paper Wrapper (matches user image!) */}
          <div className="w-28 bg-white rounded-b-2xl border border-stone-200 shadow-lg p-2.5 text-center space-y-1.5">
            <div className="flex justify-center items-center gap-1 opacity-90">
              <NutriRusEmblem size={20} />
              <NutriRusEmblem size={20} />
            </div>
            <div className="bg-[#15803D] text-white py-0.5 px-2 rounded font-bold text-[9px] tracking-wider uppercase">
              NutriRus Wrap
            </div>
            <p className="text-[8px] text-stone-500 font-medium">Whole Wheat • 16g Protein</p>
          </div>
        </div>
      </div>
    );
  }

  // Cleanses pack visual
  return (
    <div className={`relative flex items-center justify-center p-5 bg-gradient-to-b from-[#E8F5E9] to-[#C8E6C9] rounded-2xl overflow-hidden min-h-[260px] ${className}`}>
      <div className="flex items-end justify-center -space-x-2 py-2 z-10">
        <div className="w-11 h-24 bg-emerald-600 rounded-lg shadow-md border border-white/60 p-1 flex flex-col justify-end text-[7px] text-white font-bold text-center">
          Daily Greens
        </div>
        <div className="w-11 h-28 bg-amber-500 rounded-lg shadow-lg border border-white/60 p-1 flex flex-col justify-end text-[7px] text-white font-bold text-center z-10">
          Orange Shine
        </div>
        <div className="w-11 h-24 bg-yellow-400 rounded-lg shadow-md border border-white/60 p-1 flex flex-col justify-end text-[7px] text-stone-900 font-bold text-center">
          Refresh+
        </div>
        <div className="w-11 h-26 bg-teal-600 rounded-lg shadow-lg border border-white/60 p-1 flex flex-col justify-end text-[7px] text-white font-bold text-center z-20">
          Nine Essentials
        </div>
      </div>
    </div>
  );
};
