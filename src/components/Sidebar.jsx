import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiHome, 
  HiUser, 
  HiCodeBracketSquare, 
  HiBriefcase, 
  HiEnvelope, 
  HiArrowUp,
  HiSpeakerWave,
  HiSpeakerXMark
} from 'react-icons/hi2';
import { useSoundFeedback, soundManager } from '../hooks/useSoundFeedback';

function Sidebar({ onNavigate, activeSection = 'home' }) {
  const [isMuted, setIsMuted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { playClick } = useSoundFeedback();

  const navItems = [
    { id: 'home', icon: HiHome, label: 'Home' },
    { id: 'about-me', icon: HiUser, label: 'About' },
    { id: 'skills', icon: HiCodeBracketSquare, label: 'Skills' },
    { id: 'projects', icon: HiBriefcase, label: 'Projects' },
    { id: 'contact', icon: HiEnvelope, label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    playClick();
    onNavigate(id);
  };

  const toggleSound = () => {
    soundManager.muted = !soundManager.muted;
    setIsMuted(soundManager.muted);
    if (!soundManager.muted) {
      soundManager.playClick();
    }
  };

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.aside
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, type: 'spring', damping: 20 }}
    >
      <div className="flex items-center gap-1.5 p-2 bg-[#0e121e]/85 backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative p-3 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
                aria-label={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarActivePill"
                    className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-full -z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon className="w-5 h-5" />
              </button>

              {/* Sleek Tooltip */}
              <AnimatePresence>
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#171b2d] border border-white/10 text-white text-[11px] font-medium rounded-lg shadow-xl pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 3, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-5 bg-white/10 mx-1" />

        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="p-3 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-full transition-colors relative"
          title={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
          aria-label="Toggle sound feedback"
        >
          {isMuted ? (
            <HiSpeakerXMark className="w-5 h-5 text-rose-400" />
          ) : (
            <HiSpeakerWave className="w-5 h-5 text-indigo-400" />
          )}
        </button>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/[0.06] rounded-full transition-colors"
          title="Back to Top"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-5 h-5" />
        </button>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
