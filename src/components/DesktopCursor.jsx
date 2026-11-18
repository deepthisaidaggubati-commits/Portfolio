import React, { useEffect, useState } from 'react';

const DesktopCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer and is not touch-only
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isLargeScreen = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || !isLargeScreen || prefersReducedMotion) {
      setIsDesktop(false);
      return;
    }

    setIsDesktop(true);

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    if (!isDesktop) return;

    let frameId;
    const lerp = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      frameId = requestAnimationFrame(lerp);
    };

    frameId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(frameId);
  }, [pos, isDesktop]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF1744] pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-[#FF1744]/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          backgroundColor: isHovered ? 'rgba(255, 23, 68, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};

export default DesktopCursor;
