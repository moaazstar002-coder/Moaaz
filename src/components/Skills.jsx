import { motion } from 'framer-motion';
import '../styles/skills.css';

function Skills({ id }) {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'TypeScript', 'Responsive Design', 'Tailwind CSS']
    },
    {
      title: 'Tools & Libraries',
      skills: ['Git', 'VS Code', 'Figma', 'Webpack', 'Vite', 'Redux', 'Framer Motion']
    },
    {
      title: 'Other Skills',
      skills: ['UI/UX Design', 'Web Performance', 'SEO', 'Problem Solving', 'C++']
    }
  ];

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.08
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id={id} className="skills">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Expertise
      </motion.h3>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={catIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.2, duration: 0.6 }}
          >
            <h4>{category.title}</h4>
            <div className="skill-list">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-badge"
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 8px 30px rgba(127, 58, 170, 0.8)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
