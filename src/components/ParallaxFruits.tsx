import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

// Crisp SVG Fruit Illustrations
export const OrangeSliceSVG: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 80, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="orangeRind" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="orangePulp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#orangeRind)" />
    <circle cx="50" cy="50" r="44" fill="#FEF3C7" />
    <circle cx="50" cy="50" r="41" fill="url(#orangePulp)" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M 50 50 L 46 16 A 35 35 0 0 1 54 16 Z"
          fill="#FDE68A"
          opacity="0.3"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="10"
          stroke="#FEF3C7"
          strokeWidth="2"
        />
        <circle cx="50" cy="28" r="1.5" fill="#FFFFFF" opacity="0.6" />
      </g>
    ))}
    <circle cx="50" cy="50" r="6" fill="#FEF3C7" />
  </svg>
);

export const GreenAppleSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 70,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="appleGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#86EFAC" />
        <stop offset="60%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>
    <path
      d="M 50 26 C 36 14 14 26 14 54 C 14 80 34 94 50 94 C 66 94 86 80 86 54 C 86 26 64 14 50 26 Z"
      fill="url(#appleGrad)"
    />
    <ellipse
      cx="34"
      cy="42"
      rx="8"
      ry="16"
      transform="rotate(-25 34 42)"
      fill="#FFFFFF"
      opacity="0.3"
    />
    <path
      d="M 50 24 C 52 14 62 10 65 6"
      stroke="#78350F"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M 52 18 C 60 14 68 18 68 18 C 68 18 64 24 56 22 Z"
      fill="#4ADE80"
    />
  </svg>
);

export const CucumberSliceSVG: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 65, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="cukeSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#166534" />
        <stop offset="100%" stopColor="#14532D" />
      </linearGradient>
      <linearGradient id="cukeFlesh" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#96ffbd" />
        <stop offset="100%" stopColor="#96ffbd" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#cukeSkin)" />
    <circle cx="50" cy="50" r="44" fill="url(#cukeFlesh)" />
    <circle cx="50" cy="50" r="26" fill="#86EFAC" opacity="0.35" />
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <ellipse
        key={i}
        cx={50 + 15 * Math.cos((angle * Math.PI) / 180)}
        cy={50 + 15 * Math.sin((angle * Math.PI) / 180)}
        rx="3"
        ry="6"
        transform={`rotate(${angle + 90} ${50 + 15 * Math.cos((angle * Math.PI) / 180)} ${50 + 15 * Math.sin((angle * Math.PI) / 180)})`}
        fill="#FFFFFF"
        opacity="0.8"
      />
    ))}
  </svg>
);

export const MintLeafSVG: React.FC<{ size?: number; className?: string }> = ({
  size = 55,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    <path
      d="M 12 68 C 12 40 40 12 68 12 C 68 40 40 68 12 68 Z"
      fill="url(#mintGrad)"
    />
    <path
      d="M 14 66 Q 38 40 66 14"
      stroke="#BBF7D0"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M 28 52 Q 40 50 48 54"
      stroke="#BBF7D0"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M 40 40 Q 52 38 60 42"
      stroke="#BBF7D0"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PineappleWedgeSVG: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 70, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="pineappleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
    </defs>
    <path
      d="M 20 80 L 80 80 L 88 40 C 70 30 30 30 12 40 Z"
      fill="url(#pineappleGrad)"
    />
    <path
      d="M 12 40 C 30 30 70 30 88 40"
      stroke="#B45309"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <line x1="30" y1="50" x2="40" y2="70" stroke="#CA8A04" strokeWidth="2" />
    <line x1="50" y1="50" x2="60" y2="70" stroke="#CA8A04" strokeWidth="2" />
  </svg>
);

export const AvocadoHalveSVG: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 65, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 90 110"
    fill="none"
    className={className}
  >
    <path
      d="M 45 10 C 30 10 15 28 10 52 C 5 78 20 102 45 102 C 70 102 85 78 80 52 C 75 28 60 10 45 10 Z"
      fill="#14532D"
    />
    <path
      d="M 45 16 C 33 16 20 32 16 54 C 12 76 24 96 45 96 C 66 96 78 76 74 54 C 70 32 57 16 45 16 Z"
      fill="#BEF264"
    />
    <ellipse cx="45" cy="68" rx="18" ry="22" fill="#78350F" />
    <ellipse cx="40" cy="62" rx="4" ry="7" fill="#92400E" opacity="0.7" />
  </svg>
);

export const ParallaxFruits: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Physics-based spring smoothing to eliminate jitter / fidgeting on scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.2,
    restDelta: 0.0001,
  });

  // Pure scroll parallax translations - smooth single-dimension transforms
  const yOrange = useTransform(smoothProgress, [0, 1], [0, 520]);
  const rotateOrange = useTransform(smoothProgress, [0, 1], [0, 160]);

  const yApple = useTransform(smoothProgress, [0, 1], [0, -320]);
  const rotateApple = useTransform(smoothProgress, [0, 1], [0, -90]);

  const yCuke = useTransform(smoothProgress, [0, 1], [0, 380]);
  const rotateCuke = useTransform(smoothProgress, [0, 1], [0, 120]);

  const yMintTop = useTransform(smoothProgress, [0, 1], [0, -260]);
  const rotateMintTop = useTransform(smoothProgress, [0, 1], [0, 240]);

  const yPineapple = useTransform(smoothProgress, [0, 1], [0, 500]);
  const rotatePineapple = useTransform(smoothProgress, [0, 1], [0, 75]);

  const yAvocado = useTransform(smoothProgress, [0, 1], [0, -400]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Top Right Juicy Orange - gentle separate float container */}
      <motion.div
        style={{ y: yOrange, rotate: rotateOrange }}
        className="absolute top-28 right-3 sm:right-12 md:right-20 opacity-60 sm:opacity-80"
      >
        <div className="animate-[bounce_7s_ease-in-out_infinite] filter drop-shadow-sm">
          <OrangeSliceSVG size={70} className="sm:w-[85px] sm:h-[85px]" />
        </div>
      </motion.div>

      {/* 2. Middle Left Crisp Green Apple */}
      <motion.div
        style={{ y: yApple, rotate: rotateApple }}
        className="absolute top-[42vh] left-2 sm:left-8 md:left-14 opacity-50 sm:opacity-75"
      >
        <div className="animate-[pulse_8s_ease-in-out_infinite] filter drop-shadow-sm">
          <GreenAppleSVG size={54} className="sm:w-[70px] sm:h-[70px]" />
        </div>
      </motion.div>

      {/* 3. Center Right Cucumber Slice */}
      <motion.div
        style={{ y: yCuke, rotate: rotateCuke }}
        className="absolute top-[70vh] right-3 sm:right-10 md:right-24 opacity-50 sm:opacity-70"
      >
        <div className="animate-[pulse_6s_ease-in-out_infinite] filter drop-shadow-sm">
          <CucumberSliceSVG size={50} className="sm:w-[65px] sm:h-[65px]" />
        </div>
      </motion.div>

      {/* 4. Top Left Mint Leaf */}
      <motion.div
        style={{ y: yMintTop, rotate: rotateMintTop }}
        className="absolute top-36 left-4 sm:left-12 md:left-24 opacity-60 sm:opacity-85"
      >
        <div className="filter drop-shadow-sm">
          <MintLeafSVG size={40} className="sm:w-[50px] sm:h-[50px]" />
        </div>
      </motion.div>

      {/* 5. Lower Left Golden Pineapple Wedge (desktop only to keep mobile clean) */}
      <motion.div
        style={{ y: yPineapple, rotate: rotatePineapple }}
        className="hidden md:block absolute top-[115vh] left-16 opacity-70 filter drop-shadow-sm"
      >
        <PineappleWedgeSVG size={72} />
      </motion.div>

      {/* 6. Lower Right Avocado (desktop only to prevent mobile clutter) */}
      <motion.div
        style={{ y: yAvocado }}
        className="hidden md:block absolute top-[145vh] right-16 opacity-75 filter drop-shadow-sm"
      >
        <AvocadoHalveSVG size={68} />
      </motion.div>
    </div>
  );
};
