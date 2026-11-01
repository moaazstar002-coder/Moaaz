import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiCplusplus, 
  SiPython, 
  SiVite, 
  SiGit, 
  SiGithub, 
  SiRedux, 
  SiFigma, 
  SiFramer 
} from 'react-icons/si';
import { HiSparkles, HiCpuChip, HiGlobeAlt } from 'react-icons/hi2';
import { useSoundFeedback } from '../hooks/useSoundFeedback';

const categories = ['All', 'Frontend', 'Languages & Core', 'Tools & Workflow'];

const allSkills = [
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: '#61DAFB', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: SiJavascript, color: '#F7DF1E', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: '#06B6D4', level: 'Advanced' },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript, color: '#3178C6', level: 'Intermediate' },
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5, color: '#E34F26', level: 'Expert' },
  { name: 'CSS3 / Modern CSS', category: 'Frontend', icon: SiCss3, color: '#1572B6', level: 'Advanced' },
  { name: 'Framer Motion', category: 'Frontend', icon: SiFramer, color: '#0055FF', level: 'Advanced' },
  
  { name: 'C++', category: 'Languages & Core', icon: SiCplusplus, color: '#00599C', level: 'Strong' },
  { name: 'Python', category: 'Languages & Core', icon: SiPython, color: '#3776AB', level: 'Intermediate' },
  { name: 'Data Structures & Alg.', category: 'Languages & Core', icon: HiCpuChip, color: '#A855F7', level: 'Strong' },
  { name: 'RESTful APIs', category: 'Languages & Core', icon: HiGlobeAlt, color: '#10B981', level: 'Advanced' },

  { name: 'Vite', category: 'Tools & Workflow', icon: SiVite, color: '#646CFF', level: 'Advanced' },
  { name: 'Git', category: 'Tools & Workflow', icon: SiGit, color: '#F05032', level: 'Advanced' },
  { name: 'GitHub', category: 'Tools & Workflow', icon: SiGithub, color: '#FFFFFF', level: 'Advanced' },
  { name: 'Redux / Context', category: 'Tools & Workflow', icon: SiRedux, color: '#764ABC', level: 'Intermediate' },
  { name: 'Figma UI/UX', category: 'Tools & Workflow', icon: SiFigma, color: '#F24E1E', level: 'Intermediate' },
];

function Skills({ id }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { playClick } = useSoundFeedback();

  const filteredSkills = activeCategory === 'All' 
    ? allSkills 
    : allSkills.filter(s => s.category === activeCategory);

  const handleTabChange = (cat) => {
    playClick();
    setActiveCategory(cat);
  };

  return (
    <section id={id} className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HiSparkles className="w-4 h-4" />
          <span>Technical Arsenal</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills & <span className="text-gradient-cyan">Expertise</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-sm sm:text-base mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A balanced blend of cutting-edge modern web development and foundational computer science rigor.
        </motion.p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.03] border border-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full -z-10 shadow-md shadow-cyan-500/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-[#0e121e]/70 border border-white/[0.07] hover:border-white/20 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Ambient back glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5 text-slate-400">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{skill.category}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;
