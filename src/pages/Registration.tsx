import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  User, Mail, Phone, Building, BookOpen,
  Trophy, ArrowRight, CheckCircle, ChevronLeft,
  Users, CreditCard
} from 'lucide-react';
import { departments } from '../data/departments';
import { ThematicBackground } from '../components/ThematicBackground';

export default function Registration() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedDeptId, setSelectedDeptId] = useState(id || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    teamName: '',
    transactionId: ''
  });

  const selectedDept = departments.find(d => d.id === selectedDeptId);

  useEffect(() => {
    if (id) {
      setSelectedDeptId(id);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
        <ThematicBackground deptId={selectedDeptId || 'aids'} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 text-center relative z-10 shadow-2xl"
        >
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Registration Complete!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Thank you for registering for {selectedDept?.eventName || 'Technovision 2026'}.
            Our coordinators will contact you shortly with further details.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Back to Hub
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 relative selection:bg-accent/30 selection:text-accent">
      <ThematicBackground deptId={selectedDeptId || 'aids'} />

      <main className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-widest">Return</span>
            </button>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              SECURE YOUR <span className="text-accent">SLOT.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light tracking-wide max-w-2xl">
              Join the elite competition and showcase your technical prowess at Technovision 2026.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Competition Selection */}
            <div className="md:col-span-2 space-y-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Select Competition</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Trophy size={18} className="text-accent" />
                </div>
                <select
                  name="deptId"
                  value={selectedDeptId}
                  onChange={(e) => setSelectedDeptId(e.target.value)}
                  required
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white appearance-none focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                >
                  <option value="" disabled>Choose an event...</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.eventName} ({dept.name})</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <ArrowRight size={18} className="text-white/20 rotate-90" />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <label htmlFor="fullName" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <User size={18} />
                </div>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="phone" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Phone Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <Phone size={18} />
                </div>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="college" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">College Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <Building size={18} />
                </div>
                <input
                  id="college"
                  type="text"
                  name="college"
                  placeholder="Your University"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="department" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Academic Department</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <BookOpen size={18} />
                </div>
                <input
                  id="department"
                  type="text"
                  name="department"
                  placeholder="e.g. Computer Engineering"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="year" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Year of Study</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <div className="text-[10px] font-bold">YR</div>
                </div>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white appearance-none focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                >
                  <option value="" disabled>Select Year</option>
                  <option value="FE">First Year</option>
                  <option value="SE">Second Year</option>
                  <option value="TE">Third Year</option>
                  <option value="BE">Final Year</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <AnimatePresence>
              {(selectedDeptId === 'aids' || selectedDeptId === 'mech' || selectedDeptId === 'etc') && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:col-span-2 space-y-4 overflow-hidden"
                >
                  <label htmlFor="teamName" className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Team Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                      <Users size={18} />
                    </div>
                    <input
                      id="teamName"
                      type="text"
                      name="teamName"
                      placeholder="Enter your team's cool name"
                      value={formData.teamName}
                      onChange={handleChange}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="md:col-span-2 space-y-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Payment Transaction ID (Optional)</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                  <CreditCard size={18} />
                </div>
                <input
                  type="text"
                  name="transactionId"
                  placeholder="TXN123456789"
                  value={formData.transactionId}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                />
              </div>
              <p className="text-[9px] text-white/20 ml-4 italic">* If payment is required, please contact event coordinators listed on the competition page.</p>
            </div>

            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                className="w-full py-6 bg-accent text-white font-black rounded-[2rem] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 group"
              >
                COMPLETE REGISTRATION
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
