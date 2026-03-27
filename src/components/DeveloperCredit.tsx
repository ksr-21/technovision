import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperCredit() {
  return (
    <div className="flex flex-col items-center gap-3 text-center opacity-60 hover:opacity-100 transition-opacity duration-500 py-8">
      <div className="flex flex-col md:flex-row items-center gap-4 text-white/60 text-[10px] uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2">
          <span className="font-medium">Made by</span>
          <div className="flex items-center gap-2">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, color: '#fff' }}
              className="px-3 py-1 bg-white/10 rounded-full border border-white/20 hover:border-accent/50 hover:bg-accent/10 transition-all flex items-center gap-1.5 group"
            >
              <span className="group-hover:text-accent font-black transition-colors text-white">Kunal Sanjit Singh</span>
              <Linkedin size={12} className="group-hover:text-accent transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/kunalsinghrajput_21?igsh=b21objl3dXprZHA2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#fff' }}
              className="p-1.5 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 transition-all group"
            >
              <Instagram size={10} className="group-hover:text-accent transition-colors" />
            </motion.a>
            <motion.a
              href="https://wa.me/918789548725"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#fff' }}
              className="p-1.5 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 transition-all group"
            >
              <MessageCircle size={10} className="group-hover:text-accent transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
      <p className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-light max-w-sm italic">
        If you want to create your any project or website then contact me
      </p>
    </div>
  );
}
