import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCardVisual } from './ProductCardVisual';
import { Plus, Info, Check, Filter } from 'lucide-react';

interface MenuSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'juices', label: 'Cold-Pressed Juices' },
    { id: 'meals', label: '22g Protein Meals' },
    { id: 'wraps', label: 'Artisan Wraps' },
    { id: 'cleanses', label: 'Detox Cleanses' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (p: Product) => {
    onAddToCart(p);
    setAddedId(p.id);
    setTimeout(() => {
      setAddedId((current) => (current === p.id ? null : current));
    }, 1500);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#FBF9F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
              Wholesome Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C3A] font-display">
              Fresh Daily Offerings
            </h2>
            <p className="text-sm text-stone-600 max-w-lg">
              Hydraulic cold-pressed bottles, whole grain protein boxes, and fresh superfood bowls prepared with zero compromises.
            </p>
          </div>

          {/* Functional Segmented Category Tabs (Anti-pill compliant) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-[#0F4C3A] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 3-column desktop layout with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
              >
                {/* Visual Area */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="cursor-pointer relative overflow-hidden"
                >
                  <ProductCardVisual product={product} />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#0F4C3A] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick info trigger */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-[#15803D] shadow-xs transition-colors"
                    aria-label="View nutritional info"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                      <span className="uppercase tracking-wider">{product.category}</span>
                      <span>{product.volumeOrWeight}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-lg font-bold text-stone-900 font-display group-hover:text-[#15803D] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Ingredients */}
                    <div className="pt-1 flex flex-wrap gap-1 text-[11px] text-stone-600">
                      {product.ingredients.slice(0, 3).map((item, i) => (
                        <span key={i} className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                          {item}
                        </span>
                      ))}
                      {product.ingredients.length > 3 && (
                        <span className="text-stone-400 self-center text-[10px]">
                          +{product.ingredients.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 font-medium block">Price</span>
                      <span className="text-xl font-extrabold text-[#0F4C3A] font-display tabular-nums">
                        ₹{product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs ${
                        isJustAdded
                          ? 'bg-[#15803D] text-white'
                          : 'bg-[#0F4C3A] hover:bg-[#15803D] text-white active:scale-95'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
