import React from 'react';
import { STORE_INFO } from '../data/products';
import { MapPin, Clock, Star, Phone, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react';

interface LocationHoursProps {
  onOpenWhatsApp: (msg?: string) => void;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ onOpenWhatsApp }) => {
  const reviews = [
    {
      name: 'Dr. Ananya Sharma',
      role: 'Fitness Enthusiast • Scheme 54',
      rating: 5,
      comment: 'Finally a legit cold-pressed juice bar in Indore! The Green Island and 22g Protein Box are staples for my post-workout dinner. Zero sugar and 100% real taste.',
    },
    {
      name: 'Rohan Verma',
      role: 'Indore Foodie Guide',
      rating: 5,
      comment: 'Super aesthetic cafe at Zodiac Mall with yellow striped booths and the "DRINK TO THRIVE" wall! The Refresh+ with fresh tender coconut water and pineapple is a revelation.',
    },
    {
      name: 'Kavita Patel',
      role: 'Regular Customer • Scheme 140',
      rating: 4.5,
      comment: 'Ordered their 3-day cleanse on WhatsApp and had fresh cold bottles delivered to my apartment every morning. My skin glowed and bloat completely vanished.',
    },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'NutriRus G-19 Zodiac Mall Sampat Farms Scheme No 140 Indore Madhya Pradesh 452016'
  )}`;

  return (
    <section id="store-info" className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
            Visit Us in Indore
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F4C3A] font-display">
            Location, Hours & Reviews
          </h2>
          <p className="text-base text-stone-600">
            Open 7 days a week for dine-in, takeaway, and direct doorstep delivery across Indore.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Card 1: Address & Direction */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-7 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#15803D] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-stone-400">Store Address</span>
                <h3 className="text-xl font-bold text-stone-900 font-display mt-1">
                  G-19, Zodiac Mall
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  Sampat Farms, Scheme No 140, Indore, Madhya Pradesh 452016
                </p>
                <p className="text-xs text-stone-500 mt-2 font-medium">
                  Landmark: Ground Floor, Zodiac Mall courtyard
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#0F4C3A] hover:bg-[#15803D] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={() => onOpenWhatsApp('Hi NutriRus! What is the best route or landmark to reach your Zodiac Mall store?')}
                className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#15803D]" />
                <span>Ask on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Card 2: Operating Hours & Contact */}
          <div className="lg:col-span-4 bg-white p-5 sm:p-7 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#D97706] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase text-stone-400">Operating Schedule</span>
                <h3 className="text-xl font-bold text-stone-900 font-display mt-1">
                  8:00 AM – 11:00 PM
                </h3>
                <p className="text-sm font-semibold text-[#15803D] mt-1">
                  Monday to Sunday (Open Every Day)
                </p>
                <p className="text-xs text-stone-500 mt-2">
                  Morning press batches start at 7:30 AM. Fresh evening meals served till 11:00 PM.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span className="font-medium">Direct Inquiries:</span>
                <span className="font-bold text-stone-900 tabular-nums">{STORE_INFO.phone}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span className="font-medium">Instagram:</span>
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#15803D] hover:underline flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@{STORE_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Rating & Social Proof */}
          <div className="lg:col-span-3 bg-[#0F4C3A] text-white p-7 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <div>
                <div className="text-4xl font-extrabold font-display tabular-nums text-[#FBBF24]">
                  {STORE_INFO.rating} / 5.0
                </div>
                <p className="text-xs text-emerald-200 mt-1">
                  Based on {STORE_INFO.totalReviews}+ happy customer reviews across Indore
                </p>
              </div>

              <p className="text-xs text-emerald-100/90 leading-relaxed pt-2">
                "Best healthy food stop in Scheme 140! Cleanest ingredients, authentic cold press juice, and delicious paneer bowls."
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-800/80">
              <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold block">
                Indore Delivery Guarantee
              </span>
              <p className="text-xs text-white font-medium mt-0.5">
                Chilled insulated delivery within 45 mins.
              </p>
            </div>
          </div>

        </div>

        {/* Customer Reviews Carousel / Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-stone-900 font-display">
            What Indore Health Enthusiasts Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100">
                  <p className="text-xs font-bold text-stone-900">{rev.name}</p>
                  <p className="text-[11px] text-stone-500">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
