import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export const NutriRusEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 60, className = '' }) => {
  return (
    <img src="../assets/logo.png" alt="" width={size} height={size} />
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
