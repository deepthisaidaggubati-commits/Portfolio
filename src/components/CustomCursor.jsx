import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = Boolean(
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      );
      setIsHovering(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Neon Red Halo */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out will-change-transform ${
          isHovering
            ? 'w-12 h-12 -ml-6 -mt-6 border border-[#FF1744] bg-[#FF1744]/15 backdrop-blur-[1px] scale-125 shadow-[0_0_25px_rgba(255,23,68,0.5)]'
            : 'w-8 h-8 -ml-4 -mt-4 border border-[#FF1744]/40 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
      {/* Center Precision Dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full bg-[#FF1744] transition-transform duration-75 will-change-transform ${
          isHovering ? 'w-2.5 h-2.5 -ml-1.5 -mt-1.5 scale-150 shadow-[0_0_15px_#FF1744]' : 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] shadow-[0_0_8px_#FF1744]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
