import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Deepthi-Shell [v2.4.0-release]' },
    { type: 'system', text: "Type 'help' to inspect available system commands, or click the pills below." },
    { type: 'command', text: 'whoami' },
    ...terminalCommands.whoami.map((line) => ({ type: 'output', text: line }))
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const quickPills = ['whoami', 'skills', 'projects', 'education', 'stats', 'contact'];

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    sound.playClick();

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const newHistory = [...history, { type: 'command', text: trimmed }];

    if (terminalCommands[trimmed]) {
      const outputLines = terminalCommands[trimmed].map((line) => ({
        type: 'output',
        text: line,
      }));
      setHistory([...newHistory, ...outputLines]);
    } else {
      setHistory([
        ...newHistory,
        {
          type: 'error',
          text: `Command not found: '${trimmed}'. Type 'help' to view valid commands.`,
        },
      ]);
    }
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl flex flex-col font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="bg-dark-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-slate-400 text-xs flex items-center gap-1.5 font-medium">
            <TerminalIcon size={14} className="text-cyan-400" />
            deepthi@portfolio-core: ~
          </span>
        </div>
        <div className="text-[11px] text-slate-500 flex items-center gap-2">
          <span>bash 5.2</span>
        </div>
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="px-4 py-2.5 bg-dark-950/60 border-b border-slate-800/80 flex flex-wrap items-center gap-2">
        <span className="text-[11px] text-slate-400 uppercase tracking-wider">Quick Commands:</span>
        {quickPills.map((pill) => (
          <button
            key={pill}
            onClick={() => executeCommand(pill)}
            onMouseEnter={() => sound.playHover()}
            className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800/60 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-500/40 border border-slate-700 text-slate-300 transition-all cursor-pointer"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 bg-dark-950/80 max-h-72 min-h-56 overflow-y-auto space-y-1.5 font-mono text-slate-300">
        {history.map((item, idx) => {
          if (item.type === 'command') {
            return (
              <div key={idx} className="flex items-start gap-2 text-cyan-400 pt-1">
                <span className="text-slate-500">$</span>
                <span className="font-semibold text-slate-100">{item.text}</span>
              </div>
            );
          }
          if (item.type === 'system') {
            return (
              <div key={idx} className="text-slate-400 italic">
                # {item.text}
              </div>
            );
          }
          if (item.type === 'error') {
            return (
              <div key={idx} className="text-rose-400">
                {item.text}
              </div>
            );
          }
          return (
            <div key={idx} className="text-slate-300 leading-relaxed pl-3 border-l border-slate-800">
              {item.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Interactive Command Input Form */}
      <form onSubmit={handleSubmit} className="p-3 bg-dark-900/90 border-t border-slate-800 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or any command and press Enter..."
          className="flex-1 bg-transparent text-slate-100 focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="px-3 py-1 rounded bg-slate-800 hover:bg-cyan-600 hover:text-dark-950 text-slate-300 transition-colors text-xs flex items-center gap-1 font-mono"
        >
          <span>Run</span>
          <CornerDownLeft size={12} />
        </button>
      </form>
    </div>
  );
};

export default InteractiveTerminal;
