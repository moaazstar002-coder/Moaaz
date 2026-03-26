import { motion } from 'framer-motion';
import '../styles/footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {currentYear} Moaaz Hussain. All rights reserved.</p>
        
      </motion.div>
    </footer>
  );
}

export default Footer;
