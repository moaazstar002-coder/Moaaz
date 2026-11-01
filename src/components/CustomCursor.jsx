import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High-performance Framer Motion values (Zero React re-renders on mousemove!)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Physics-based spring animations for smooth lag-free trailing
  const springConfigFast = { damping: 28, stiffness: 450, mass: 0.1 };
  const springConfigSmooth = { damping: 20, stiffness: 220, mass: 0.5 };

  const dotX = useSpring(mouseX, springConfigFast);
  const dotY = useSpring(mouseY, springConfigFast);
  const ringX = useSpring(mouseX, springConfigSmooth);
  const ringY = useSpring(mouseY, springConfigSmooth);

  useEffect(() => {
    // Hide cursor on touch devices for mobile performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive') ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Central Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
          scale: isHovered ? 0.5 : 1,
        }}
      />

      {/* Outer Luminous Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-indigo-400/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 ${
          isHovered
            ? 'w-14 h-14 bg-indigo-500/15 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.4)]'
            : 'w-8 h-8 bg-transparent shadow-[0_0_10px_rgba(99,102,241,0.2)]'
        }`}
        style={{
          x: ringX,
          y: ringY,
        }}
      />
    </div>
  );
}

export default CustomCursor;
