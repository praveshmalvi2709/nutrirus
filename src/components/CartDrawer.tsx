import React, { useState } from 'react';
import { CartItem } from '../types';
import { STORE_INFO } from '../data/products';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 499 ? 0 : 40) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#15803D', '#F59E0B', '#22C55E', '#FBBF24'],
    });

    // Build the formatted order text
    let text = `🌿 *New NutriRus Order from Website* 🌿\n\n`;
    if (customerName) text += `*Name:* ${customerName}\n`;
    text += `*Order Type:* ${orderType === 'delivery' ? 'Doorstep Delivery' : 'Store Pickup (Zodiac Mall)'}\n`;
    if (orderType === 'delivery' && address) text += `*Address / Indore Landmark:* ${address}\n`;
    text += `\n*Items Ordered:*\n`;

    items.forEach((item) => {
      text += `• ${item.quantity}x ${item.product.name} (${item.product.volumeOrWeight}) - ₹${item.product.price * item.quantity}\n`;
    });

    text += `\n*Subtotal:* ₹${subtotal}\n`;
    if (orderType === 'delivery') {
      text += `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE (Orders above ₹499)' : `₹${deliveryFee}`}\n`;
    }
    text += `*Total Amount:* ₹${grandTotal}\n\n`;
    text += `_Please confirm my order and estimated preparation/delivery time!_`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#FBF9F4] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0F4C3A]" />
              <h3 className="text-lg font-bold text-[#0F4C3A] font-display">
                Your Fresh Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#15803D] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">
                  Your bag is empty
                </h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our cold-pressed juices, 22g protein boxes, and detox cleanses.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 bg-[#0F4C3A] hover:bg-[#15803D] text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-stone-900 truncate font-display">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-stone-500">
                          ₹{item.product.price} • {item.product.volumeOrWeight}
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-stone-100 rounded-lg p-1">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded bg-white flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Total for item & delete */}
                      <div className="text-right">
                        <p className="text-xs font-bold text-stone-900 tabular-nums">
                          ₹{item.product.price * item.quantity}
                        </p>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[11px] text-red-500 hover:text-red-700 font-medium"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Options */}
                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                    Fulfillment Preference
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setOrderType('delivery')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#0F4C3A] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      Doorstep Delivery
                    </button>
                    <button
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                        orderType === 'takeaway'
                          ? 'bg-[#0F4C3A] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      Zodiac Mall Pickup
                    </button>
                  </div>

                  {/* Customer Details */}
                  <div className="space-y-2 pt-2">
                    <input
                      type="text"
                      placeholder="Your Name (optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 text-xs bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                    />
                    {orderType === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Delivery Address / Area (e.g. Scheme 140, Vijay Nagar)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2.5 text-xs bg-stone-50 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-[#15803D]"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-stone-900 tabular-nums">₹{subtotal}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Indore Delivery:</span>
                    <span className="font-semibold text-stone-900 tabular-nums">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-100">
                  <span>Total Payable:</span>
                  <span className="text-[#0F4C3A] tabular-nums font-display">₹{grandTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Order on WhatsApp (₹{grandTotal})</span>
              </button>

              <p className="text-[10px] text-center text-stone-400">
                Direct to NutriRus G-19 Zodiac Mall Indore • Cash/UPI on Delivery
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
