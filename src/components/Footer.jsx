import { HiCodeBracket, HiHeart } from 'react-icons/hi2';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-28 border-t border-white/[0.06] bg-[#07080e] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <HiCodeBracket className="w-4 h-4 text-cyan-400" />
          <span>Moaaz Hussain</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500 font-normal">Portfolio {currentYear}</span>
        </div>

        {/* Made with */}
        <div className="flex items-center gap-1 text-slate-500">
          <span>Engineered with</span>
          <HiHeart className="w-3.5 h-3.5 text-rose-500 inline mx-0.5" />
          <span>using React & Tailwind CSS</span>
        </div>

        {/* Back to top hint */}
        <p className="text-slate-500 text-[11px] font-mono">
          Obsidian Dark Mode Active
        </p>
      </div>
    </footer>
  );
}

export default Footer;
