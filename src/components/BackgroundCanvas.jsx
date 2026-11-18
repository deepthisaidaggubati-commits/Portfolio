import React from 'react';

const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Background Base */}
      <div className="absolute inset-0 bg-[#070607]" />

      {/* Strategic Soft Ambient Crimson Lights */}
      {/* Hero Ambient Glow */}
      <div 
        className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(160, 0, 40, 0.45) 0%, rgba(7, 6, 7, 0) 70%)'
        }}
      />

      {/* Mid-Page Ambient Light */}
      <div 
        className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full opacity-20 blur-[180px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 23, 68, 0.3) 0%, rgba(7, 6, 7, 0) 70%)'
        }}
      />

      {/* Bottom Section Ambient Light */}
      <div 
        className="absolute bottom-10 right-10 w-[650px] h-[650px] rounded-full opacity-25 blur-[190px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(160, 0, 40, 0.4) 0%, rgba(7, 6, 7, 0) 70%)'
        }}
      />

      {/* Subtle Geometric Engineering Grid Line Texture (Very Low Opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

export default BackgroundCanvas;
