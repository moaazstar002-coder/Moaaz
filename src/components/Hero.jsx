import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiEnvelope, HiSparkles, HiChevronDown } from 'react-icons/hi2';
import ParticlesBackground from './ParticlesBackground';
import { useSoundFeedback } from '../hooks/useSoundFeedback';

const roles = [
  'Full-Stack Developer',
  'React & Modern UI Craftsman',
  'C++ & Python Problem Solver',
  'Creative Web Architect',
];

function Hero({ id, onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const { playClick } = useSoundFeedback();

  // Smooth cycling through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleActionClick = (targetId) => {
    playClick();
    onNavigate ? onNavigate(targetId) : document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      {/* High-Performance Canvas */}
      <ParticlesBackground />

      {/* Ambient Radial Mesh Highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Live Availability Badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Freelance & New Opportunities</span>
        </motion.div>

        {/* Name & Super Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-indigo-400 mb-2 block font-medium">
            Welcome to the digital realm of
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            Moaaz <span className="text-gradient">Hussain</span>
          </h1>
        </motion.div>

        {/* Dynamic Role Switcher */}
        <motion.div
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <HiSparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-base sm:text-xl font-semibold text-slate-200">
                {roles[roleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Subtitle / Bio hook */}
        <motion.p
          className="max-w-2xl text-slate-300 text-sm sm:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Passionate software engineering student at <span className="text-indigo-300 font-medium">M.E.T University</span> crafting high-performance, visually inspiring web experiences with modern React, C++, and clean architectural design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            onClick={() => handleActionClick('projects')}
            className="btn-primary group"
          >
            <span>Explore Projects</span>
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleActionClick('contact')}
            className="btn-secondary group"
          >
            <HiEnvelope className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span>Get In Touch</span>
          </button>
        </motion.div>

        {/* Quick Highlights Counter Grid */}
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl w-full p-4 sm:p-6 rounded-2xl bg-[#0e121e]/60 border border-white/[0.06] backdrop-blur-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              20+
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Projects Completed
            </p>
          </div>
          <div className="text-center border-x border-white/[0.08]">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              2+
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              100%
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
              Client Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => handleActionClick('about-me')}
          className="mt-12 text-slate-500 hover:text-indigo-400 transition-colors flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

      </div>
    </section>
  );
}

export default Hero;
