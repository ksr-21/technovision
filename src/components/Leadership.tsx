import React from 'react';
import { motion } from 'motion/react';

const leaders = [
  {
    name: 'Dr. R. K. Lad',
    designation: 'Director',
    image: 'https://picsum.photos/seed/director/300/300',
  },
  {
    name: 'Dr. S. S. Deshpande',
    designation: 'Deputy Director',
    image: 'https://picsum.photos/seed/deputy/300/300',
  },
  {
    name: 'Prof. A. B. Patil',
    designation: 'Faculty Co-ordinator',
    image: 'https://picsum.photos/seed/coordinator/300/300',
  },
];

export default function Leadership() {
  return (
    <section className="py-24 px-6 bg-black/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-16 tracking-tighter">
          Institutional Leadership
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-48 h-48 mb-6 cursor-default"
              >
                <div className="absolute inset-0 border-2 border-dashed border-emerald-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-white/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-white">{leader.name}</h3>
              <p className="text-emerald-400 font-mono text-sm mt-1 uppercase tracking-wider">
                {leader.designation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
