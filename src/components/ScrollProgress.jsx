import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 origin-left z-50 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
