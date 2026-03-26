import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/scroll-progress.css';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
}

export default ScrollProgress;
