import { motion } from 'framer-motion';
import { HiCodeBracket } from 'react-icons/hi2';

function Preloader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080e]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <div className="flex flex-col items-center max-w-xs text-center px-4">
        {/* Animated Cyber Logo */}
        <motion.div
          className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 p-[1px] shadow-[0_0_30px_rgba(99,102,241,0.5)] mb-6 flex items-center justify-center"
          initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          <div className="w-full h-full bg-[#0c0e18] rounded-2xl flex items-center justify-center">
            <HiCodeBracket className="w-8 h-8 text-cyan-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-2xl font-bold tracking-tight text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Moaaz <span className="text-gradient">Hussain</span>
        </motion.h1>

        <motion.p
          className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          System Initializing...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-[1px] border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>

        {/* Quick Click to Skip */}
        <button
          onClick={onComplete}
          className="mt-6 text-[11px] text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider"
        >
          Click to enter &rarr;
        </button>
      </div>
    </motion.div>
  );
}

export default Preloader;
