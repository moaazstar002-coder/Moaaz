import { motion } from 'framer-motion';
import '../styles/navigation.css';

function Navigation({ onNavigate }) {
  return (
    <header className="navbar">
      <motion.div 
        className="navbar-brand"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="brand-logo-container">
          <div className="brand-logo">
            <i className="fas fa-code"></i>
          </div>
          <h1>Moaaz Hussain</h1>
        </div>
      </motion.div>
    </header>
  );
}

export default Navigation;
