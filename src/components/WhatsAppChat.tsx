import React, { useState, useEffect } from 'react';
import { STORE_INFO } from '../data/products';
import { MessageCircle, X, Send, Sparkles, CheckCheck } from 'lucide-react';
import { NutriRusEmblem } from './Logo';

interface WhatsAppChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialMessage?: string;
}

export const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  isOpen,
  onClose,
  onOpen,
  initialMessage = '',
}) => {
  const [message, setMessage] = useState(
    initialMessage || 'Hi NutriRus! I would like to inquire about your fresh juices and meals for delivery in Indore.'
  );

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const quickQuestions = [
    '🥤 I would like to order fresh juices for delivery today.',
    '💪 How can I get the 22g Protein Box for lunch in Indore?',
    '🌿 Can you explain how the 3-Day Detox Cleanse works?',
    '📍 Do you deliver to Vijay Nagar / Palasia / Scheme 54?',
    '🥗 Are all your meals 100% vegetarian?',
  ];

  const handleSend = () => {
    const textToSend = message.trim();
    if (!textToSend) return;
    const encoded = encodeURIComponent(textToSend);
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <>
      {/* Floating Bottom-Right WhatsApp Bubble */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={onOpen}
            className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#25D366]"
            aria-label="Chat with NutriRus on WhatsApp"
          >
            {/* Ripple Pulse */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-emerald-700 border-2 border-white"></span>
            </span>

            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold leading-tight">Chat on WhatsApp</span>
              <span className="text-[10px] text-emerald-100 font-medium">Online • Indore G-19</span>
            </div>
          </button>
        )}

        {/* WhatsApp Modal / Slide Popup */}
        {isOpen && (
          <div className="w-[calc(100vw-32px)] sm:w-[380px] max-w-[380px] bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] text-white p-3.5 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <NutriRusEmblem size={28} />
                </div>
                <div>
                  <h4 className="text-sm font-bold flex items-center gap-1.5 font-display">
                    <span>NutriRus Indore</span>
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  </h4>
                  <p className="text-[11px] text-emerald-100">
                    Typically replies in ~5 mins (8am - 11pm)
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body simulating WhatsApp conversation */}
            <div className="p-4 bg-[#EFEAE2] min-h-[220px] max-h-[300px] overflow-y-auto space-y-3">
              {/* Automated Greeting Bubble */}
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-stone-800 max-w-[85%] space-y-1">
                <p className="font-bold text-[#0F4C3A]">NutriRus Fresh Bar 🌿</p>
                <p>
                  Namaste! Welcome to NutriRus Indore. How can we help you eat and drink better today?
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-stone-400">
                  <span>8:00 AM</span>
                  <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                </div>
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block px-1">
                  Quick Inquiries:
                </span>
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage(q)}
                    className="w-full text-left p-2 rounded-xl bg-white/90 hover:bg-white text-xs text-stone-700 hover:text-[#0F4C3A] border border-stone-200/80 shadow-2xs transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input & Send on WhatsApp Button */}
            <div className="p-3 bg-white border-t border-stone-200 space-y-2">
              <div className="relative">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or inquiry..."
                  className="w-full p-2.5 text-xs text-stone-900 bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
                />
              </div>

              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Start Chat on WhatsApp</span>
              </button>
              <p className="text-[10px] text-center text-stone-400">
                Direct to {STORE_INFO.phone} • G-19 Zodiac Mall Indore
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
