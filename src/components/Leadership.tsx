import React from 'react';
import { motion } from 'motion/react';

const leaders = [
  {
    name: 'Hon. Mr. Rushiraj T. Sawant',
    designation: 'Trustee JSPM & TSSM',
  },
  {
    name: 'Dr. S. R. Thite',
    designation: 'Campus Director',
  },
  {
    name: 'Dr. S. P. Bhosle',
    designation: 'Director, JSPM NTC',
  },
  {
    name: 'Dr. M. M. Sardeshmukh',
    designation: 'Deputy Director, JSPM NTC',
  },
  {
    name: 'Prof. S. P. Naik',
    designation: 'HOD AI & DS Engg. Event Co-ordinator',
  },
  {
    name: 'Dr. B. B. Khapale',
    designation: 'HOD Civil Engg. Event Co-ordinator',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 px-6 bg-black/60 border-b border-white/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-accent mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-4xl md:text-6xl font-black text-white tracking-tighter uppercase"
          >
            Institutional <span className="text-accent">Leadership</span>
          </motion.h2>
          <p className="text-gray-500 font-mono text-xs tracking-[0.3em] mt-4 uppercase">Governance & Excellence</p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
              transition={{ delay: index * 0.05 }}
              className="group flex flex-col items-center p-10 rounded-xl bg-zinc-950/40 backdrop-blur-md border border-white/5 hover:bg-zinc-900/60 transition-all text-center relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/0 group-hover:border-accent/100 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/0 group-hover:border-accent/100 transition-colors" />

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors">{leader.name}</h3>
              <div className="w-8 h-px bg-white/10 mb-4 group-hover:w-16 group-hover:bg-accent/50 transition-all" />
              <p className="text-gray-400 font-mono text-[10px] uppercase tracking-wider leading-relaxed">
                {leader.designation}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scrolling Container */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <motion.div
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6 whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            {[...leaders, ...leaders].map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className="w-[280px] flex-shrink-0 flex flex-col items-center p-10 rounded-xl bg-zinc-950/40 backdrop-blur-md border border-white/5 text-center relative overflow-hidden"
              >
                <h3 className="text-lg font-bold text-white mb-3 whitespace-normal">{leader.name}</h3>
                <div className="w-8 h-px bg-white/10 mb-4" />
                <p className="text-gray-400 font-mono text-[10px] uppercase tracking-wider leading-relaxed whitespace-normal">
                  {leader.designation}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
