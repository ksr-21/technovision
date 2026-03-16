import React from 'react';
import { motion } from 'motion/react';
import jspm1 from '../accets/jspm1.png';
import jspm2 from '../accets/jspm2.png';

export default function Header() {
  return (
    <header className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 py-4 px-4 md:py-6 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-10">
        {/* Left Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center group shrink-0"
        >
          <div className="relative p-1.5 md:p-2 bg-white rounded-lg md:rounded-xl shadow-lg">
            <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={jspm1}
              alt="JSPM Logo"
              className="h-10 md:h-20 w-auto object-contain relative z-10"
            />
          </div>
        </motion.div>

        {/* Center Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="text-center flex-1"
        >
          <h1 className="text-[10px] sm:text-xs md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">
            <span className="md:hidden">JSPM NTC</span>
            <span className="hidden md:inline">JSPM Narhe Technical Campus</span>
          </h1>
          <div className="mt-1 md:mt-3 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="hidden md:block h-px w-8 bg-accent/50" />
              <p className="text-[8px] md:text-base font-medium text-accent uppercase tracking-[0.2em] font-mono text-center">
                NAAC With an 'A' Grade
              </p>
              <div className="hidden md:block h-px w-8 bg-accent/50" />
            </div>
            <p className="hidden md:block text-xs font-mono text-gray-500 tracking-widest mt-1">
              INSTITUTE CODE : <span className="text-gray-300">06755</span>
            </p>
          </div>
        </motion.div>

        {/* Right Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center shrink-0"
        >
          <div className="p-1.5 md:p-2 bg-white rounded-lg md:rounded-xl shadow-lg border border-white/10 hover:border-accent/50 transition-colors">
            <img 
              src={jspm2}
              alt="Campus Logo" 
              className="h-10 md:h-16 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
