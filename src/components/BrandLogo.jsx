import React from 'react';

const BrandLogo = ({ size = 'md', showText = true, className = '' }) => {
  const sizeMap = {
    sm: { icon: 34, text: 'text-xs' },
    md: { icon: 42, text: 'text-sm' },
    lg: { icon: 50, text: 'text-base' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 group focus:outline-none select-none ${className}`}>
      {/* Custom Interlocking Geometric DS Monogram Tile */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-[#151014] p-1 border border-white/10 group-hover:border-[#FF1744]/60 transition-all duration-300 shadow-md"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Titanium Silver Gradient */}
            <linearGradient id="ds-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D8D3D6" />
              <stop offset="100%" stopColor="#8A8286" />
            </linearGradient>

            {/* Precision Crimson Red Gradient */}
            <linearGradient id="ds-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1744" />
              <stop offset="60%" stopColor="#D50032" />
              <stop offset="100%" stopColor="#A00028" />
            </linearGradient>
          </defs>

          {/* Letter 'D' - Geometric Structural Contour */}
          <path
            d="M26 22 H48 C66 22, 78 34, 78 50 C78 66, 66 78, 48 78 H26 V22 Z"
            stroke="url(#ds-silver)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:stroke-white"
          />

          {/* Letter 'S' - Interlocking Ribbon Weaving Across 'D' */}
          <path
            d="M65 34 C58 26, 42 26, 36 34 C30 42, 38 49, 52 53 C67 57, 74 65, 68 73 C61 82, 42 82, 34 73"
            stroke="url(#ds-crimson)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,23,68,0.7)]"
          />

          {/* Central Interlocking Node Accent */}
          <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-extrabold tracking-wider text-white ${currentSize.text} leading-none group-hover:text-white transition-colors`}>
            DAGGUBATI <span className="text-[#FF1744]">DEEPTHI SAI</span>
          </span>
          <span className="text-[10px] font-mono text-[#B9B1B5] flex items-center gap-1.5 uppercase tracking-widest mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
            AI & ML Engineer
          </span>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
