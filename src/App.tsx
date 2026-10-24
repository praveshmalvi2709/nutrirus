import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { MenuSection } from './components/MenuSection';
import { DetoxQuiz } from './components/DetoxQuiz';
import { CafeGallery } from './components/CafeGallery';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { ParallaxFruits } from './components/ParallaxFruits';
import { WhatsAppChat } from './components/WhatsAppChat';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppInitialMsg, setWhatsAppInitialMsg] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // WhatsApp Chat launcher
  const handleOpenWhatsApp = (customMsg?: string) => {
    if (customMsg) {
      setWhatsAppInitialMsg(customMsg);
    }
    setIsWhatsAppOpen(true);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1E2922] relative selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* Floating Parallax Fruits in background with scroll triggers */}
      <ParallaxFruits />

      {/* Top Bar Contract Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Content */}
      <main className="relative z-20 pt-16 sm:pt-20">
        {/* Hero Section with Product Spotlight */}
        <Hero
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* 5 Brand Pillars: Eat Better, Drink Better, Live Better */}
        <BrandStory />

        {/* Full Filterable Menu Catalog */}
        <div id="meals">
          <MenuSection
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        </div>

        {/* Interactive Detox Flowchart from the poster */}
        <DetoxQuiz
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
        />

        {/* Cafe Atmosphere & "DRINK TO THRIVE" Zodiac Mall Highlight */}
        <CafeGallery />

        {/* Location, 8am-11pm Hours, and Verified Reviews */}
        <LocationHours onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)} />

      {/* Interactive WhatsApp Inquiry Widget */}
      <WhatsAppChat
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        onOpen={() => setIsWhatsAppOpen(true)}
        initialMessage={whatsAppInitialMsg}
      />

      {/* Shopping Bag / Order Drawer with 1-click WhatsApp checkout */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Deep-dive Product Nutrition & Ingredients Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenWhatsApp={(msg) => handleOpenWhatsApp(msg)}
      />
    </div>
  );
}
