import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * High-performance 3D Tilt Card with dynamic cursor sheen
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional CSS classes
 * @param {number} maxTilt - Maximum rotation degree (default: 8)
 */
function TiltCard({ children, className = '', maxTilt = 8, ...props }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState({
    rotateX: 0,
    rotateY: 0,
    sheenX: 50,
    sheenY: 50,
    opacity: 0,
  });

  const handleMouseMove = (e) => {
    // Check if device is touch-based
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizing between -0.5 and 0.5
    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    setTransformStyle({
      rotateX: -normalizedY * maxTilt,
      rotateY: normalizedX * maxTilt,
      sheenX: (x / rect.width) * 100,
      sheenY: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      rotateX: 0,
      rotateY: 0,
      sheenX: 50,
      sheenY: 50,
      opacity: 0,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-[1000px] transform-gpu transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${transformStyle.rotateX}deg) rotateY(${transformStyle.rotateY}deg)`,
      }}
      {...props}
    >
      {/* Dynamic Cursor Sheen Overlay */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: transformStyle.opacity,
          background: `radial-gradient(circle 350px at ${transformStyle.sheenX}% ${transformStyle.sheenY}%, rgba(99, 102, 241, 0.15), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default TiltCard;

