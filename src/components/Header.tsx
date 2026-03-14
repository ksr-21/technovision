import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 py-6 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center group"
        >
          <div className="relative p-2 bg-white rounded-xl shadow-lg">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://jspmntc.edu.in/storage/Menus/ListMenu/20/1750230968jspm1.webp" 
              alt="JSPM Logo" 
              className="h-16 md:h-20 w-auto object-contain relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-emerald-500 font-mono font-bold text-xl mt-2 tracking-widest">JSPM</span>
        </motion.div>

        {/* Center Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="text-center flex-1"
        >
          <h1 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">
            JSPM Narhe Technical Campus
          </h1>
          <div className="mt-3 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-emerald-500/50" />
              <p className="text-sm md:text-base font-medium text-emerald-400 uppercase tracking-[0.2em] font-mono">
                NAAC With an 'A' Grade
              </p>
              <div className="h-px w-8 bg-emerald-500/50" />
            </div>
            <p className="text-xs font-mono text-gray-500 tracking-widest mt-1">
              INSTITUTE CODE : <span className="text-gray-300">06755</span>
            </p>
          </div>
        </motion.div>

        {/* Right Logos */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-6"
        >
          <div className="p-2 bg-white rounded-xl shadow-lg border border-white/10 hover:border-emerald-500/50 transition-colors">
            <img 
              src="https://jspmntc.edu.in/storage/Menus/ListMenu/20/17502310382Logo.png" 
              alt="Campus Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Tech accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-emerald-500 blur-sm opacity-50" />
    </header>
  );
}
