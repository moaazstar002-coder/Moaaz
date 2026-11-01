import { motion } from 'framer-motion';
import { HiAcademicCap, HiSparkles, HiCodeBracket, HiMapPin, HiCheckBadge, HiCommandLine } from 'react-icons/hi2';
import moaazImage from '../assets/moaaz.jpg';
import TerminalWidget from './TerminalWidget';

function About({ id }) {
  return (
    <section id={id} className="relative py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <HiSparkles className="w-4 h-4" />
          <span>Get To Know Me</span>
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About <span className="text-gradient">Moaaz Hussain</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-sm sm:text-base mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A glimpse into my background, academic journey, and what drives my craft.
        </motion.p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bento 1: Profile Photo Card */}
        <motion.div
          className="md:col-span-1 rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] p-6 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-xl group hover:border-indigo-500/40 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-indigo-500/15 to-transparent pointer-events-none" />

          <div className="relative mb-5">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <img
                src={moaazImage}
                alt="Moaaz Hussain"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Status Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#121626] border border-white/10 rounded-full flex items-center gap-1.5 text-xs text-slate-200 shadow-lg whitespace-nowrap">
              <HiCheckBadge className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Dev</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-2">Moaaz Hussain</h3>
          <p className="text-xs text-indigo-400 font-mono mt-0.5">Software Engineer</p>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-3 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
            <HiMapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Egypt • Remote Worldwide</span>
          </div>
        </motion.div>

        {/* Bento 2: Primary Story & Mission */}
        <motion.div
          className="md:col-span-2 rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl hover:border-indigo-500/40 transition-colors"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HiCodeBracket className="w-4 h-4" />
              <span>My Philosophy & Story</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              "My goal isn't just to write code… it's to create meaningful impact."
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I'm a passionate software developer studying at <strong className="text-indigo-300 font-semibold">M.E.T University</strong> with a bold vision for modern tech. I specialize in building responsive, lightning-fast web applications using React, JavaScript, and Tailwind CSS, while tackling deep algorithmic challenges with C++ and Python.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every day is an opportunity to learn, optimize, and elevate digital experiences. I believe in clean code, modular component architecture, and designs that captivate users from the very first interaction.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-xl sm:text-2xl font-bold text-indigo-400">Clean Code</div>
              <p className="text-[11px] text-slate-400 mt-0.5">DRY & Reusable Design</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">High Speed</div>
              <p className="text-[11px] text-slate-400 mt-0.5">60+ FPS & Instant Load</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">Growth</div>
              <p className="text-[11px] text-slate-400 mt-0.5">Daily Continuous Learning</p>
            </div>
          </div>
        </motion.div>

        {/* Bento 3: Academic Background */}
        <motion.div
          className="md:col-span-1 rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] p-6 backdrop-blur-xl hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <HiAcademicCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Education</h4>
              <p className="text-xs text-slate-400">Computer & Information Science</p>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Undergraduate software developer at <span className="text-purple-300 font-medium">M.E.T University</span>, building strong theoretical foundations in data structures, algorithms, and software design principles.
          </p>
          <div className="text-xs text-indigo-400 font-mono bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/20">
            Focus: Web Architecture, Algorithms & High-Performance UI
          </div>
        </motion.div>

        {/* Bento 4: Technical Mindset */}
        <motion.div
          className="md:col-span-2 rounded-3xl bg-[#0e121e]/70 border border-white/[0.08] p-6 backdrop-blur-xl hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              What Drives My Craft
            </h4>
            <span className="text-xs font-mono text-slate-400">Modern Standards</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h5 className="text-sm font-semibold text-white mb-1">Architecture</h5>
              <p className="text-xs text-slate-400">Modular components with hooks and clean separation of concerns.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h5 className="text-sm font-semibold text-white mb-1">Interaction</h5>
              <p className="text-xs text-slate-400">Fluid micro-interactions, responsive states, and intuitive UX.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h5 className="text-sm font-semibold text-white mb-1">Problem Solving</h5>
              <p className="text-xs text-slate-400">Tackling algorithmic bottlenecks with algorithmic rigor.</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Developer Terminal Showcase */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <HiCommandLine className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Interactive Developer Terminal
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
            Try typing: whoami, skills, projects, contact, clear
          </span>
        </div>
        <TerminalWidget />
      </motion.div>
    </section>
  );
}

export default About;
