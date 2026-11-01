import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCommandLine } from 'react-icons/hi2';
import { useSoundFeedback } from '../hooks/useSoundFeedback';

const initialHistory = [
  {
    type: 'system',
    text: 'Moaaz OS [Version 2.4.0 (x86_64-pc-linux-gnu)]\nType "help" to see all available commands, or click the quick tags below.',
  },
];

const availableCommands = [
  { cmd: 'help', desc: 'List all available terminal commands' },
  { cmd: 'whoami', desc: 'Display developer profile & academic info' },
  { cmd: 'skills', desc: 'Inspect current tech stack & libraries' },
  { cmd: 'projects', desc: 'View highlighted software engineering projects' },
  { cmd: 'contact', desc: 'Retrieve direct contact channels' },
  { cmd: 'clear', desc: 'Clear terminal screen' },
];

function TerminalWidget() {
  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const [commandIndex, setCommandIndex] = useState(-1);
  const [cmdHistoryList, setCmdHistoryList] = useState([]);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const { playClick, playSuccess } = useSoundFeedback();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCommand) => {
    const trimmed = rawCommand.trim().toLowerCase();
    if (!trimmed) return;

    playClick();
    setCmdHistoryList((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    const newHistoryEntry = { type: 'input', text: trimmed };

    let responseEntry = null;

    switch (trimmed) {
      case 'help':
        responseEntry = {
          type: 'output',
          text: 
            'Available Commands:\n' +
            '  whoami     - Learn about Moaaz Hussain & background\n' +
            '  skills     - View frontend, backend & core proficiencies\n' +
            '  projects   - Show highlights from live applications\n' +
            '  contact    - Get email, phone, and social links\n' +
            '  clear      - Clear the terminal console\n' +
            '  sudo       - Attempt privileged execution\n' +
            '  date       - Print current local session time',
        };
        break;

      case 'whoami':
      case 'about':
        responseEntry = {
          type: 'output',
          text:
            'Moaaz Hussain | Software Developer\n' +
            '• University: M.E.T University (Computer Science)\n' +
            '• Location: Egypt (Remote worldwide)\n' +
            '• Core Mission: Creating impact through clean, high-performance software.\n' +
            '• Passions: Modern React architecture, UI/UX, C++, and algorithmic problem solving.',
        };
        break;

      case 'skills':
        responseEntry = {
          type: 'output',
          text:
            '=== TECHNICAL ARSENAL ===\n' +
            '• Frontend: React.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion\n' +
            '• Core & Systems: C++, Python, Data Structures & Algorithms, REST APIs\n' +
            '• Tools: Vite, Git, GitHub, Redux, Figma, Postman, Webpack',
        };
        break;

      case 'projects':
        responseEntry = {
          type: 'output',
          text:
            '=== RECENT BUILDS ===\n' +
            '1. Elegance       -> Modern luxury e-commerce platform (React + Tailwind)\n' +
            '2. Masar          -> Logistics dashboard & shipment tracker (React + FastAPI)\n' +
            '3. GAMER\'S NEST   -> Gaming social community platform (React + Tailwind)\n' +
            '4. EduVerse       -> Modern online course ecosystem\n' +
            '5. Products Mgr   -> Inventory CRUD dashboard\n' +
            '6. Task Manager   -> Productivity tracker\n' +
            'Type "contact" to reach out for custom project inquiries.',
        };
        break;

      case 'contact':
        responseEntry = {
          type: 'output',
          text:
            '=== CONTACT DETAILS ===\n' +
            '• Email:    moaazstar002@gmail.com\n' +
            '• Phone:    +20 12892577489\n' +
            '• LinkedIn: linkedin.com/in/moaaz-hussain-4a4586337\n' +
            '• GitHub:   github.com/moaazstar002-coder',
        };
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        responseEntry = {
          type: 'error',
          text: 'bash: sudo: moaaz is not in the sudoers file. This incident will be reported.',
        };
        break;

      case 'date':
        responseEntry = {
          type: 'output',
          text: new Date().toString(),
        };
        break;

      default:
        responseEntry = {
          type: 'error',
          text: `bash: command not found: ${trimmed}. Type "help" for a list of available commands.`,
        };
    }

    setHistory((prev) => [...prev, newHistoryEntry, responseEntry]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistoryList.length > 0) {
        const nextIndex = commandIndex + 1 < cmdHistoryList.length ? commandIndex + 1 : commandIndex;
        setCommandIndex(nextIndex);
        setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIndex = commandIndex - 1;
        setCommandIndex(nextIndex);
        setInputVal(cmdHistoryList[cmdHistoryList.length - 1 - nextIndex] || '');
      } else {
        setCommandIndex(-1);
        setInputVal('');
      }
    }
  };

  const handleChipClick = (cmd) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full rounded-2xl bg-[#090b14]/90 border border-white/[0.08] backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-xs text-slate-300 flex flex-col">
      {/* Terminal Titlebar */}
      <div className="px-4 py-3 bg-[#0d101d] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors cursor-pointer inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors cursor-pointer inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors cursor-pointer inline-block" />
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
          <HiCommandLine className="w-4 h-4 text-indigo-400" />
          <span>bash — moaaz@portfolio:~</span>
        </div>

        <div className="w-12 text-right">
          <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Live
          </span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto space-y-3 cursor-text selection:bg-indigo-500/40"
      >
        {history.map((item, index) => {
          if (item.type === 'system') {
            return (
              <div key={index} className="text-slate-400 whitespace-pre-wrap leading-relaxed">
                {item.text}
              </div>
            );
          }
          if (item.type === 'input') {
            return (
              <div key={index} className="flex items-center gap-2 text-white">
                <span className="text-cyan-400">moaaz@dev:~$</span>
                <span className="text-indigo-200 font-semibold">{item.text}</span>
              </div>
            );
          }
          if (item.type === 'error') {
            return (
              <div key={index} className="text-rose-400 whitespace-pre-wrap pl-4 border-l-2 border-rose-500/40">
                {item.text}
              </div>
            );
          }
          return (
            <div key={index} className="text-slate-200 whitespace-pre-wrap pl-4 border-l-2 border-indigo-500/40 leading-relaxed">
              {item.text}
            </div>
          );
        })}

        {/* Current Active Input Line */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-cyan-400 select-none">moaaz@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white outline-none border-none p-0 focus:ring-0 text-xs font-mono caret-cyan-400"
            autoFocus
            spellCheck="false"
            autoComplete="off"
            placeholder="Type 'help' or click commands..."
          />
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Quick Suggestion Chips Footer */}
      <div className="p-3 bg-[#0c0e1a] border-t border-white/[0.06] flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mr-1">
          Quick Run:
        </span>
        {availableCommands.map((item) => (
          <button
            key={item.cmd}
            onClick={() => handleChipClick(item.cmd)}
            className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-indigo-600/20 hover:text-indigo-300 border border-white/[0.06] text-[11px] text-slate-400 transition-colors"
          >
            ${item.cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TerminalWidget;
