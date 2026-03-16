import React from 'react';
import { motion } from 'motion/react';
import jspm1 from '../accets/jspm1.png';
import jspm2 from '../accets/jspm2.png';

export default function Header() {
  return (
    <header className="w-full bg-black/40 backdrop-blur-xl border-b border-white/10 py-6 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Mobile Logo Container */}
        <div className="flex w-full md:w-auto justify-center md:justify-between items-center gap-8 md:gap-0 md:order-1">
          {/* Left Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center group"
          >
            <div className="relative p-2 bg-white rounded-xl shadow-lg">
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={jspm1}
                alt="JSPM Logo"
                className="h-14 md:h-20 w-auto object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Right Logo (Mobile Only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="md:hidden"
          >
            <div className="p-2 bg-white rounded-xl shadow-lg border border-white/10">
              <img
                src={jspm2}
                alt="Campus Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Center Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="text-center flex-1 md:order-2 mt-4 md:mt-0"
        >
          <h1 className="text-xl md:text-4xl font-black text-white tracking-tighter uppercase leading-tight">
            JSPM Narhe Technical Campus
          </h1>
          <div className="mt-3 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="hidden md:block h-px w-8 bg-accent/50" />
              <p className="text-xs md:text-base font-medium text-accent uppercase tracking-[0.2em] font-mono text-center">
                NAAC With an 'A' Grade
              </p>
              <div className="hidden md:block h-px w-8 bg-accent/50" />
            </div>
            <p className="text-xs font-mono text-gray-500 tracking-widest mt-1">
              INSTITUTE CODE : <span className="text-gray-300">06755</span>
            </p>
          </div>
        </motion.div>

        {/* Right Logo (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex items-center md:order-3"
        >
          <div className="p-2 bg-white rounded-xl shadow-lg border border-white/10 hover:border-accent/50 transition-colors">
            <img 
              src={jspm2}
              alt="Campus Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="mt-8 border-t border-white/5 pt-6 hidden md:block">
        <nav className="max-w-7xl mx-auto px-6">
          <ul className="flex justify-center items-center gap-10">
            {[
              { name: 'SPPU', url: 'http://www.unipune.ac.in/' },
              { name: 'AICTE', url: 'https://www.aicte-india.org/' },
              { name: 'MOODLE', url: 'http://114.143.232.170/moodle/' },
              { name: 'MOOC', url: 'https://swayam.gov.in/' },
              { name: 'NBA', url: 'https://www.nbaind.org/' },
              { name: 'Virtual Labs', url: 'https://www.vlab.co.in/' },
              { name: 'Career', url: 'https://jspmntc.edu.in/Details/99' },
              { name: 'Grievance', url: 'https://jspmntc.edu.in/Details/102' },
              { name: 'AICTE Feedback', url: 'https://css.aicte-india.org/feedback/index.php' }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Tech accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-accent blur-sm opacity-50" />
    </header>
  );
}
