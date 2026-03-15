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
    <section className="py-24 px-6 bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-16 tracking-tighter">
          Institutional Leadership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
              <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider leading-relaxed">
                {leader.designation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
