import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperCredit() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.4em]">
      <div className="flex items-center gap-3">
        <span>Made by</span>
        <motion.div className="flex items-center gap-4">
          <motion.a
            href="https://www.linkedin.com/in/kunal-sanjit-singh/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, color: '#fff' }}
            className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all flex items-center gap-2 group"
          >
            <span className="group-hover:text-accent transition-colors">Kunal Sanjit Singh</span>
            <Linkedin size={12} className="group-hover:text-accent transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/kunalsinghrajput_21?igsh=b21objl3dXprZHA2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#fff' }}
            className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all group"
          >
            <Instagram size={12} className="group-hover:text-accent transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
