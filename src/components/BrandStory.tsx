import React, { useState } from "react";
import {
  Sparkles,
  HeartPulse,
  Droplets,
  Utensils,
  Clock,
  X,
  ZoomIn,
} from "lucide-react";
import { NutriRusEmblem } from "./Logo";

interface BrandPoster {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

export const BrandStory: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<BrandPoster | null>(null);

  const pillars = [
    {
      icon: <Utensils className="w-5 h-5 text-[#15803D]" />,
      title: "Eat Clean, Feel Good",
      desc: "No seed oils, refined sugars, or preservatives. Wholesome macro-balanced ingredients cooked fresh.",
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-[#15803D]" />,
      title: "Nourish Your Body",
      desc: "Hydraulic cold-pressed extraction preserves vital living enzymes, polyphenols, and essential micronutrients.",
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#15803D]" />,
      title: "Stay Hydrated, Stay Energized",
      desc: "Electrolyte-rich coconut water, cucumber, and botanical elixirs that replenish at a cellular level.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#15803D]" />,
      title: "Small Choices, Big Impact",
      desc: "Swapping one heavy meal or soda with a NutriRus juice can transform your day and mood.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#15803D]" />,
      title: "Consistency is Wellness",
      desc: "Convenient daily delivery across Indore so you can maintain healthy habits without friction.",
    },
  ];

  const brandPosters: BrandPoster[] = [
    {
      src: "/assets/786213692_18090585566227329_8627960629966783506_n_5504df62.jpg",
      title: "Welcome to Better Living",
      subtitle: "Nourish your body • Consistency is wellness",
      tag: "Brand Philosophy",
    },
    {
      src: "/assets/841064445_18095254172227329_4257205599783248975_n_8411452e.jpg",
      title: "Wholesome Protein Meal Box",
      subtitle:
        "Grilled Paneer, Quinoa Brown Rice, Classic Hummus & Roasted Veggies",
      tag: "Inside the Box",
    },
    {
      src: "/assets/789136480_18090930089227329_8858019907936956576_n_e0c2172a.jpg",
      title: "Welcome to Better Eating",
      subtitle: "Artisan Grilled Paneer Wrap in custom NutriRus wrap",
      tag: "Fresh Wraps",
    },
    {
      src: "/assets/833217959_18094701869227329_1905789431882831131_n_9a792fd6.jpg",
      title: "Upgrade Your Detox Game",
      subtitle:
        "Green Island, Nine Essentials, Refresh+ & Green Elixir (300ml)",
      tag: "Cold-Pressed Lineup",
    },
    {
      src: "/assets/785350515_18090452276227329_5583839299005509793_n_9bf33eab.jpg",
      title: "We Are Now Open in Indore",
      subtitle: "Signature NutriRus Buddha Bowl • Zodiac Mall, Scheme 140",
      tag: "Signature Bowl",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <NutriRusEmblem size={24} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
              Our Food & Beverage Constitution
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#0F4C3A] font-display"
            style={{ textWrap: "balance" }}
          >
            Welcome to Better Living.
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Founded with one clear mission in Indore: to make healthy, wholesome
            nutrition delicious, accessible, and uncompromised.
          </p>
        </div>

        {/* 5 Pillars Grid matching the poster layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBF9F4] border border-stone-200/90 hover:border-[#15803D] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3.5">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2 font-display">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase: The 5 Official NutriRus Brand Images */}
        <div className="mt-12 sm:mt-16 pt-12 border-t border-stone-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#15803D]">
                Crafted Fresh Daily
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F4C3A] font-display mt-1">
                Inside Our Kitchen & Press Bar
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md">
              Tap any card to view full details of our signature bowls, wraps,
              meal boxes, and cold-pressed detox bottles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {brandPosters.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#FBF9F4] border border-stone-200/90 hover:border-[#15803D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.src}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5">
                    <span className="text-[11px] font-semibold text-white">
                      Click to enlarge
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/90 text-[#0F4C3A] flex items-center justify-center shadow-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803D]">
                      {item.tag}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 font-display mt-0.5 line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Highlights Triad: Drinking, Eating, Living */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-stone-100">
          <div className="p-5 sm:p-7 rounded-2xl bg-[#0F4C3A] text-white space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#FBBF24]">
              01. Beverage Bar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Better Drinking.
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              300ml cold-pressed bottles. Never heated, never pasteurized.
              Greens, citrus, and blue spirulina crafted daily in Indore.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-[#F59E0B] text-amber-950 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#78350F]">
              02. Kitchen Eats
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Better Eating.
            </h3>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              22g protein power meal boxes, whole-grain seed bowls, and artisan
              paneer wraps that fuel recovery without feeling heavy.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl bg-[#14532D] text-white space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#86EFAC]">
              03. Community Vibe
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Better Living.
            </h3>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              Dine-in at our sun-drenched Zodiac Mall cafe under the "DRINK TO
              THRIVE" marquee, or get fresh delivery right to your door.
            </p>
          </div>
        </div>

        {/* Lightbox Modal for full-size poster inspection */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[75vh] overflow-hidden bg-stone-100 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803D]">
                    {selectedImage.tag}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {selectedImage.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
