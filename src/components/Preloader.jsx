import { motion } from 'framer-motion';
import '../styles/preloader.css';

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.2, 1], 
            opacity: [0, 1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 1.5, 
            times: [0, 0.6, 1], 
            ease: "easeInOut" 
          }}
        >
          <i className="fas fa-code"></i>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="preloader-text text-gradient"
        >
          Moaaz Hussain
        </motion.h1>
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
