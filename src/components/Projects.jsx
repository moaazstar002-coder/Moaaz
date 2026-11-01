import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiArrowTopRightOnSquare, HiEye, HiStar } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

import gamersNestImg from "../assets/GEMR'S NEST .png";
import eduVerseImg from "../assets/courses.png";
import pmImg from "../assets/PM.png";
import taskManagerImg from "../assets/todo.png";
import landingImg from "../assets/landing.png";
import animeImg from "../assets/anime.png";
import { useSoundFeedback } from '../hooks/useSoundFeedback';

const projectCategories = ['All', 'Featured', 'Web Apps', 'Frontend'];

const projectsList = [
  {
    id: 1,
    title: "GAMER's NEST",
    description: "Full-scale gaming social media platform featuring dynamic feeds, sleek responsive UI, custom gamer profiles, and interactive community elements.",
    tags: ["React", "Redux/Context", "REST APIs", "Tailwind CSS"],
    category: "Web Apps",
    featured: true,
    liveUrl: "https://gamersnest-v01.netlify.app/",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: gamersNestImg
  },
  {
    id: 2,
    title: "EduVerse",
    description: "Modern interactive learning platform delivering modular courses, interactive assessments, and smooth educational dashboard experience.",
    tags: ["React", "JavaScript", "APIs", "Modern CSS"],
    category: "Web Apps",
    featured: true,
    liveUrl: "https://eduverse02.netlify.app/",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: eduVerseImg
  },
  {
    id: 3,
    title: "Products Manager",
    description: "Real-time inventory and product management dashboard with CRUD operations, search filters, and smooth responsive table management.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    category: "Web Apps",
    featured: false,
    liveUrl: "https://products-manger-02.netlify.app",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: pmImg
  },
  {
    id: 4,
    title: "Task Manager",
    description: "High-productivity workflow application with task prioritization, state persistence, category filtering, and clean UX.",
    tags: ["React", "LocalStorage", "UI/UX"],
    category: "Web Apps",
    featured: false,
    liveUrl: "https://task-manager-0-2.netlify.app",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: taskManagerImg
  },
  {
    id: 5,
    title: "Futuristic Landing Page",
    description: "High-conversion landing page built with silky-smooth micro-animations, glassmorphic layout, and responsive layouts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    featured: false,
    liveUrl: "https://landing-page-002.netlify.app",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: landingImg
  },
  {
    id: 6,
    title: "Anime Hub",
    description: "Dynamic entertainment explorer with live API search, categorized anime rankings, and responsive detail view.",
    tags: ["React", "REST APIs", "JavaScript"],
    category: "Frontend",
    featured: false,
    liveUrl: "https://anime-02.netlify.app/",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: animeImg
  },
  {
    id: 7,
    title: "Moodify Music Experience",
    description: "Intelligent mood-driven music recommendation web application providing curated soundscapes based on user emotional state.",
    tags: ["React", "Web API", "Modern Audio"],
    category: "Web Apps",
    featured: false,
    liveUrl: "https://moodify-appv-0.netlify.app/",
    githubUrl: "https://github.com/moaazstar002-coder",
    image: null
  },
];

function Projects({ id }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const { playClick } = useSoundFeedback();

  const filteredProjects = projectsList.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Featured') return project.featured;
    return project.category === activeCategory;
  });

  const handleTabChange = (cat) => {
    playClick();
    setActiveCategory(cat);
  };

  return (
    <section id={id} className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HiSparkles className="w-4 h-4" />
          <span>Curated Portfolio</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured <span className="text-gradient">Creations</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-sm sm:text-base mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A selection of real-world web apps, creative platforms, and client solutions engineered with care.
        </motion.p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {projectCategories.map((category) => {
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
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10 shadow-md shadow-indigo-500/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#07080e]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-indigo-900/30 to-purple-900/20 text-slate-500">
                    <span className="font-mono text-sm tracking-wider">Interactive Sound App</span>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e121e] via-transparent to-black/20" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-indigo-600/90 border border-indigo-400/30 text-white text-[11px] font-semibold flex items-center gap-1 shadow-lg backdrop-blur-md">
                    <HiStar className="w-3.5 h-3.5 text-amber-300" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Quick Live Preview overlay button on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-black font-semibold shadow-xl hover:scale-110 transition-transform"
                    title="Live Preview"
                  >
                    <HiEye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#121626] border border-white/20 text-white hover:scale-110 transition-transform"
                    title="Source Code"
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-md bg-white/[0.04]">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-indigo-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;
