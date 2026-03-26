import { motion, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import '../styles/hero.css';

function Hero({ id }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yAlt = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1
      },
    },
  };

  return (
    <section id={id} className="hero">
      <ParticlesBackground />
      <motion.div className="hero-background-blob" style={{ y, x: -100 }} />
      <motion.div className="hero-background-blob alt" style={{ y: yAlt, x: 100 }} />
      
      <motion.div
        className="hero-content glass-panel"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={titleVariants} className="hero-title">
          Welcome to <span className="text-gradient">My World</span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
         It all starts here.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="hero-cta"
        >
          <motion.a 
            href="#projects" 
            className="cta-button primary"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--shadow-color)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="cta-button secondary"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="scroll-indicator"
        >
          <i className="fas fa-arrow-down"></i>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
