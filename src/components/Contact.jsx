import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.08
      }
    })
  };

  return (
    <section id={id} className="contact">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h3>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <motion.div 
            className="form-group"
            variants={formFieldVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
              required
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={formFieldVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
              required
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={formFieldVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
              required
            ></motion.textarea>
          </motion.div>

          <motion.button
            type="submit"
            className={`submit-btn ${submitted ? 'success' : ''}`}
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 10px 40px rgba(0, 212, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {submitted ? (
              <>
                <i className="fas fa-check"></i> Message Sent!
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        <motion.div 
          className="contact-info"
          variants={itemVariants}
        >
          <h4>Other Ways to Connect</h4>
          
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ x: 10 }}
          >
            <i className="fas fa-envelope"></i>
            <div>
              <h5>Email</h5>
              <a href="moaazstar002@gmail.com">moaazstar002@gmail.com</a>
            </div>
          </motion.div>

          <motion.div 
            className="info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ x: 10 }}
          >
            <i className="fas fa-phone"></i>
            <div>
              <h5>Phone</h5>
              <a href="tel:+2012892577489">+20 12892577489</a>
            </div>
          </motion.div>

          <div className="social-links">
            <h5 style={{ marginBottom: '15px' }}>Social Links</h5>
            <motion.a 
              href="https://www.linkedin.com/in/moaaz-hussain-4a4586337/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a 
              href="https://github.com/moaazstar002-coder" 
              className="social-btn"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
