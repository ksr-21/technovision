import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, Trophy, User, ArrowRight } from 'lucide-react';
import { departments } from '../data/departments';
import { ThematicBackground } from '../components/ThematicBackground';
import DeveloperCredit from '../components/DeveloperCredit';

export default function DepartmentDetail() {
  const { id } = useParams();
  const dept = departments.find(d => d.id === id);

  if (!dept) return <div>Department not found</div>;

  return (
    <div className="min-h-screen bg-zinc-950 relative selection:bg-white/10">
      <main className="py-24 px-6 relative">
        {/* Department Specific Background */}
        <ThematicBackground deptId={dept.id} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`lg:col-span-8 relative rounded-[3rem] border ${dept.borderColor} bg-zinc-950/60 backdrop-blur-3xl overflow-hidden group shadow-2xl shadow-current/5`}
            >
              {/* Event Image Banner */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={dept.eventImage}
                  alt={dept.eventName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              </div>

              <div className="relative z-10 p-8 md:p-16 -mt-32">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-20 h-20 rounded-[2rem] bg-zinc-900 border ${dept.borderColor} shadow-2xl shadow-current/10 flex items-center justify-center`}
                  >
                    <dept.icon className={`w-10 h-10 ${dept.textColor}`} />
                  </motion.div>
                  <div>
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs font-mono uppercase tracking-[0.4em] text-white/30 mb-2"
                    >
                      {dept.fullName}
                    </motion.p>
                    <motion.h3 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                      {dept.eventName}
                    </motion.h3>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mb-10"
                >
                  <Link
                    to={`/register/${dept.id}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-accent/20 group"
                  >
                    REGISTER FOR THIS EVENT
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-xl text-gray-400 leading-relaxed font-light first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-white">
                    {dept.description}
                  </p>
                </motion.div>

                <div className="mt-16 flex flex-wrap gap-8 items-center border-t border-white/5 pt-12">
                  <div className="flex items-center gap-4 group/item transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border ${dept.borderColor} flex items-center justify-center shadow-lg shadow-current/10`}>
                      <Trophy className={`w-6 h-6 ${dept.textColor} transition-transform duration-500 group-hover/item:rotate-12`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Recognition</p>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Prizes & Certificates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group/item transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border ${dept.borderColor} flex items-center justify-center shadow-lg shadow-current/10`}>
                      <User className={`w-6 h-6 ${dept.textColor} transition-transform duration-500 group-hover/item:scale-110`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Participation</p>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Open for All Students</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-current to-transparent opacity-5 ${dept.textColor} blur-3xl`} />

            </motion.div>

            {/* Sidebar: Coordinators */}
            <div className="lg:col-span-4 space-y-8">
              {/* Faculty Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2.5rem] bg-zinc-950/60 border border-white/10 backdrop-blur-3xl shadow-xl shadow-current/5"
              >
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Faculty Mentors
                </h4>
                <div className="space-y-6">
                  {dept.coordinators.faculty.map((fac, i) => (
                    <div key={i} className="group">
                      <p className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors">{fac.name}</p>
                      <div className="flex flex-col gap-2">
                        <a href={`tel:${fac.phone}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-all">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-accent/30">
                            <Phone size={14} />
                          </div>
                          {fac.phone}
                        </a>
                        <a href={`mailto:${fac.email}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-all">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-accent/30">
                            <Mail size={14} />
                          </div>
                          {fac.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Student Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-[2.5rem] bg-zinc-950/60 border border-white/10 backdrop-blur-3xl shadow-xl shadow-current/5"
              >
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Student Leads
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {dept.coordinators.students.map((stu, i) => (
                    <div key={i} className="group">
                      <p className="text-white font-bold text-sm mb-2 group-hover:text-blue-400 transition-colors">{stu.name}</p>
                      <a href={`tel:${stu.phone}`} className="flex items-center gap-3 text-xs text-white/40 hover:text-white transition-all">
                        <Phone size={12} />
                        {stu.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Developer Credit for Mobile/Tablet */}
            <div className="lg:hidden col-span-1 flex justify-center mt-12">
              <DeveloperCredit />
            </div>

            {/* Developer Credit for Desktop Sidebar */}
            <div className="hidden lg:flex justify-center pt-8">
              <DeveloperCredit />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
