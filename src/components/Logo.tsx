import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export const NutriRusEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NutriRus Emblem"
    >
      <defs>
        <linearGradient id="citrusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="greenStem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#166534" />
        </linearGradient>
      </defs>

      {/* Outer subtle ring */}
      <circle cx="100" cy="100" r="95" stroke="#F59E0B" strokeWidth="2.5" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="88" stroke="#166534" strokeWidth="6" strokeLinecap="round" />

      {/* Citrus Slice (Upper Right / Center background) */}
      <g transform="translate(100, 100) rotate(-15) translate(-100, -100)">
        {/* Citrus outer rim */}
        <path
          d="M 40 100 A 60 60 0 0 1 160 100 Z"
          fill="url(#citrusGradient)"
          opacity="0.95"
        />
        {/* White Pith Segments */}
        <line x1="100" y1="100" x2="60" y2="55" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="100" y1="100" x2="80" y2="44" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="100" y1="100" x2="100" y2="40" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="100" y1="100" x2="120" y2="44" stroke="#FFFFFF" strokeWidth="3" />
        <line x1="100" y1="100" x2="140" y2="55" stroke="#FFFFFF" strokeWidth="3" />
        {/* Lower rind arc */}
        <path
          d="M 60 120 Q 100 155 140 120"
          stroke="url(#citrusGradient)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* The organic intertwined "NR" Green Ribbon */}
      <path
        d="M 38 135 C 32 145 42 152 48 142 C 58 122 62 70 66 62 C 69 56 74 58 76 68 C 80 88 88 138 98 142 C 104 144 110 134 116 112 C 122 88 132 62 148 62 C 164 62 172 74 168 90 C 162 108 146 118 130 118 C 122 118 116 112 116 106 C 116 94 130 92 138 92 C 146 92 156 96 156 102 C 156 122 136 148 116 148 C 98 148 88 132 84 118"
        stroke="#15803D"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Top right flourish curl */}
      <path
        d="M 152 74 C 166 65 178 72 176 82 C 174 90 165 92 158 88"
        stroke="#15803D"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ size = 42, className = '', showText = true, light = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <NutriRusEmblem size={size} />
      {showText && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-tight leading-none font-display ${light ? 'text-white' : 'text-[#0F4C3A]'}`}>
            Nutri<span className="text-[#E08714]">Rus</span>
          </span>
          <span className={`text-[10px] tracking-wider uppercase font-semibold mt-0.5 ${light ? 'text-emerald-200' : 'text-[#2E7D32]'}`}>
            Fresh Juice & Bowls
          </span>
        </div>
      )}
    </div>
  );
};
