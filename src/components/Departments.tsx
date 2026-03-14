import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Code, Zap, Building, Briefcase, Terminal, Settings, BookOpen, ArrowRight } from 'lucide-react';

const departments = [
  { id: 'aids', name: 'AI & DS', fullName: 'AI & Data Science', icon: Brain, color: 'text-emerald-400', borderColor: 'hover:border-emerald-500/50', accent: 'bg-emerald-500/10' },
  { id: 'civil', name: 'Civil', fullName: 'Civil Engineering', icon: Building, color: 'text-orange-400', borderColor: 'hover:border-orange-500/50', accent: 'bg-orange-500/10' },
  { id: 'computer', name: 'Computer', fullName: 'Computer Engineering', icon: Code, color: 'text-blue-400', borderColor: 'hover:border-blue-500/50', accent: 'bg-blue-500/10' },
  { id: 'etc', name: 'E&TC', fullName: 'Electronics & Telecomm', icon: Zap, color: 'text-yellow-400', borderColor: 'hover:border-yellow-500/50', accent: 'bg-yellow-500/10' },
  { id: 'fe', name: 'FE', fullName: 'First Year Engineering', icon: BookOpen, color: 'text-pink-400', borderColor: 'hover:border-pink-500/50', accent: 'bg-pink-500/10' },
  { id: 'mba', name: 'MBA', fullName: 'Business Administration', icon: Briefcase, color: 'text-purple-400', borderColor: 'hover:border-purple-500/50', accent: 'bg-purple-500/10' },
  { id: 'mca', name: 'MCA', fullName: 'Computer Applications', icon: Terminal, color: 'text-indigo-400', borderColor: 'hover:border-indigo-500/50', accent: 'bg-indigo-500/10' },
  { id: 'mech', name: 'Mech', fullName: 'Mechanical Engineering', icon: Settings, color: 'text-red-400', borderColor: 'hover:border-red-500/50', accent: 'bg-red-500/10' },
];

export default function Departments() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 mb-4"
          >
            Academic Innovation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
          >
            Departments
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-1 bg-emerald-500 mt-6 rounded-full"
          />
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
                  rotateX: 5,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className={`relative h-full p-8 rounded-[2.5rem] border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 overflow-hidden group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-current/10`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Accent Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${dept.accent}`} />
                
                <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <dept.icon className={`w-7 h-7 ${dept.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{dept.name}</h3>
                  <p className="text-xs text-white/40 font-mono uppercase tracking-widest mb-8 leading-relaxed">
                    {dept.fullName}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-all duration-300">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Explore Event</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Icon Background */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <dept.icon size={120} strokeWidth={1} className={dept.color} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
