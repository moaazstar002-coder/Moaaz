import { motion } from 'framer-motion';
import '../styles/about.css';
import moaazImage from '../assets/moaaz.jpg';
function About({ id }) {
  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5 + i * 0.1
      }
    })
  };

  return (
    <section id={id} className="about">
      <div className="about-container">
        <motion.div 
          className="about-image"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
<img src={moaazImage} alt="Moaaz Hussain" />
            <div className="image-border"></div>
          </div>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>About Me</h3>
          <p>
            I'm a passionate software developer at M.E.T University with a big vision for the future. I build websites using HTML, CSS, JavaScript, and React, and I also enjoy solving challenges with C++ and Python.
          </p>
          <p>
            Every day, I'm learning something new — because my goal isn't just to code… it's to create impact. I believe in writing clean, efficient code and creating user experiences that inspire.
          </p>
          
          <div className="about-stats">
            <motion.div 
              className="stat"
              variants={statVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>20+</h4>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div 
              className="stat"
              variants={statVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>2+</h4>
              <p>Years Experience</p>
            </motion.div>
            <motion.div 
              className="stat"
              variants={statVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
