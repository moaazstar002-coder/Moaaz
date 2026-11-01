import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCodeBracket, HiBars3, HiXMark } from 'react-icons/hi2';
import { useSoundFeedback } from '../hooks/useSoundFeedback';

function Navigation({ onNavigate, activeSection = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playClick } = useSoundFeedback();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-me', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07080e]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
            <div className="w-full h-full bg-[#0c0e18] rounded-xl flex items-center justify-center">
              <HiCodeBracket className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight flex items-center gap-1.5">
              Moaaz <span className="text-gradient">Hussain</span>
            </h1>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              software developer
            </p>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0e121e]/70 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-full -z-10 shadow-sm shadow-indigo-500/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Talk</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden px-5 py-4 bg-[#07080e]/95 backdrop-blur-2xl border-b border-white/[0.08] mt-2 shadow-2xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="mt-2 w-full py-2.5 text-center text-sm font-semibold rounded-xl bg-indigo-600 text-white"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navigation;
