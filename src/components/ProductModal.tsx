import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCardVisual } from './ProductCardVisual';
import { X, Check, Plus, Minus, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onOpenWhatsApp: (msg: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenWhatsApp,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
      />

      <div className="min-h-screen px-3 sm:px-4 text-center flex items-center justify-center py-6">
        <div className="inline-block w-full max-w-2xl bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all relative border border-stone-200 max-h-[92vh] flex flex-col">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12">
            
            {/* Visual Column */}
            <div className="md:col-span-5 bg-[#FBF9F4] p-5 sm:p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-stone-200">
              <ProductCardVisual product={product} className="w-full h-48 sm:h-64" />
              <div className="mt-3 text-center">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {product.category === 'juices' ? '100% Raw Cold-Pressed' : 'Nutrient-Dense Food'}
                </span>
                <p className="text-xs text-stone-500 mt-1">{product.volumeOrWeight}</p>
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-7 p-5 sm:p-8 space-y-4 sm:space-y-5">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#E08714] uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F4C3A] font-display mt-0.5">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Nutrition Stats Strip */}
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 grid grid-cols-4 gap-1.5 text-center">
                <div>
                  <span className="text-[9px] sm:text-[10px] text-stone-500 font-bold uppercase block">Calories</span>
                  <span className="text-xs sm:text-sm font-extrabold text-stone-900 font-display tabular-nums">
                    {product.nutrition.calories}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-stone-500 font-bold uppercase block">Protein</span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#15803D] font-display tabular-nums">
                    {product.nutrition.protein}
                  </span>
                </div>
                {product.nutrition.carbs && (
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 font-bold uppercase block">Carbs</span>
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 font-display tabular-nums">
                      {product.nutrition.carbs}
                    </span>
                  </div>
                )}
                {product.nutrition.fat && (
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 font-bold uppercase block">Fat</span>
                    <span className="text-xs sm:text-sm font-extrabold text-stone-900 font-display tabular-nums">
                      {product.nutrition.fat}
                    </span>
                  </div>
                )}
              </div>

              {/* Key Ingredients */}
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-600 block">
                  Pure Ingredients:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-emerald-50 text-[#166534] border border-emerald-100 rounded-md text-[11px] sm:text-xs font-semibold"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-600 block">
                  Benefits & Micronutrients:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-stone-700">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center justify-between sm:block">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-semibold block">Total Price</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#0F4C3A] font-display tabular-nums">
                    ₹{product.price * quantity}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2 bg-stone-100 rounded-xl p-1 shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, quantity);
                      onClose();
                    }}
                    className="flex-1 sm:flex-none py-3 px-5 bg-[#0F4C3A] hover:bg-[#15803D] text-white text-xs font-bold rounded-xl shadow-xs transition-colors text-center"
                  >
                    Add {quantity > 1 ? `(${quantity})` : ''} to Bag
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
