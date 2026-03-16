import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';
import { departments } from '../data/departments';

export default function Departments() {
  return (
    <section id="departments" className="py-24 px-6 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-500 font-mono text-[10px] tracking-[0.6em] mb-4 uppercase"
          >
            Academic Innovation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center text-6xl md:text-8xl font-black text-white tracking-tighter uppercase relative"
          >
            Departments
            <motion.div
              initial={{ width: 0, x: "-50%" }}
              whileInView={{ width: "120px" }}
              className="absolute -bottom-6 left-1/2 h-1.5 bg-accent rounded-full shadow-[0_0_20px_var(--accent-glow)]"
            />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <Link key={dept.id} to={`/department/${dept.id}`} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative h-full rounded-[2.5rem] border border-white/10 bg-zinc-900/20 backdrop-blur-3xl transition-all duration-500 overflow-hidden group-hover:border-white/30 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]`}
              >
                {/* Event Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.eventImage}
                    alt={dept.eventName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                  {/* 2026 Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-bold text-white tracking-widest flex items-center gap-1.5`}
                    >
                      <Trophy size={10} className="text-accent" />
                      2026 EVENT
                    </motion.div>
                  </div>

                  {/* Department Icon Overlay */}
                  <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-xl`}>
                    <dept.icon className={`w-6 h-6 ${dept.textColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6 relative z-10">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${dept.accentBg}`} />

                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-accent transition-colors">
                    {dept.eventName}
                  </h3>

                  <p className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-4 ${dept.textColor} font-bold`}>
                    {dept.name}
                  </p>
                  
                  <p className="text-sm text-white/40 mb-8 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                    {dept.shortEventDescription}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Launch Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Background Icon */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                  <dept.icon size={120} strokeWidth={1} className={dept.textColor} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
