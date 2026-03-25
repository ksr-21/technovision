import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  User, Mail, Phone, Building, BookOpen,
  Trophy, ArrowRight, CheckCircle, ChevronLeft,
  Users, CreditCard, Loader2, Upload
} from 'lucide-react';
import { departments } from '../data/departments';
import { ThematicBackground } from '../components/ThematicBackground';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import DeveloperCredit from '../components/DeveloperCredit';

export default function Registration() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedDeptId, setSelectedDeptId] = useState(id || '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [qrCodeFile, setQrCodeFile] = useState<File | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('TIMEOUT')), 30000)
      );

      const submissionPromise = (async () => {
        let paymentProofUrl = '';

        if (qrCodeFile && storage) {
          const storageRef = ref(storage, `payment_proofs/${Date.now()}_${qrCodeFile.name}`);
          const snapshot = await uploadBytes(storageRef, qrCodeFile);
          paymentProofUrl = await getDownloadURL(snapshot.ref);
        }

        const registrationData = {
          ...formData,
          eventId: selectedDeptId,
          eventName: selectedDept?.eventName || 'General Registration',
          eventCategory: selectedDept?.name || 'N/A',
          paymentProofUrl,
          timestamp: serverTimestamp(),
        };

        if (!db) throw new Error("Database not initialized");
        await addDoc(collection(db, 'registrations'), registrationData);

        return true;
      })();

      // Race the submission against the timeout
      await Promise.race([submissionPromise, timeoutPromise]);

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      console.error("Error saving registration: ", err);
      if (err.message === 'TIMEOUT') {
        setError("Request timed out. Please check your connection and try again.");
      } else {
        setError("Failed to submit registration. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
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

              <AnimatePresence mode="wait">
                {selectedDept?.registrationFee && (
                  <motion.div
                    key={`fee-${selectedDeptId}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`mt-4 inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${selectedDept.accentBg} border ${selectedDept.borderColor} backdrop-blur-xl`}
                  >
                    <div className={`p-2 rounded-lg bg-white/5`}>
                      <CreditCard size={16} className={selectedDept.textColor} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 text-white">Entry Fee</span>
                      <span className={`text-sm font-black uppercase tracking-tight ${selectedDept.textColor}`}>
                        {selectedDept.registrationFee}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
              {selectedDept?.isTeamEvent && (
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

            <div className="md:col-span-2 space-y-6">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Payment Details</label>

              <AnimatePresence mode="wait">
                {selectedDept?.paymentScanner && (
                  <motion.div
                    key={`scanner-${selectedDeptId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl"
                  >
                    <div className="relative group/qr shrink-0">
                      <div className={`absolute -inset-4 rounded-xl opacity-20 blur-2xl transition-all duration-500 group-hover/qr:opacity-40 ${selectedDept.accentBg}`} />
                      <img
                        src={selectedDept.paymentScanner}
                        alt="Payment Scanner"
                        className="w-48 h-48 rounded-xl relative z-10 border border-white/20 shadow-2xl"
                      />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <h3 className="text-xl font-black text-white tracking-tight">Scan to Pay</h3>
                      <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                        Please pay the registration fee of <span className={`font-bold ${selectedDept.textColor}`}>{selectedDept.registrationFee}</span> using the QR code.
                        After payment, enter the transaction ID below to complete your registration.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Upload Payment Screenshot</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                    <Upload size={18} />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => setQrCodeFile(e.target.files ? e.target.files[0] : null)}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
                  />
                </div>
                <p className="text-[9px] text-white/20 ml-4 italic">
                  * Proof will be securely stored in our encrypted event database for verification.
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Transaction ID (Optional)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
                    <CreditCard size={18} />
                  </div>
                  <input
                    type="text"
                    name="transactionId"
                    placeholder="TXN123456789 (Optional)"
                    value={formData.transactionId}
                    onChange={handleChange}
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                  />
                </div>
                <p className="text-[9px] text-white/20 ml-4 italic">
                  * Enter your unique Payment Transaction ID (e.g., UTR, Ref No.) if available.
                </p>
              </div>
            </div>

            {error && (
              <div className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="md:col-span-2 mt-8 flex flex-col gap-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-accent text-white font-black rounded-[2rem] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    PROCESSING...
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    COMPLETE REGISTRATION
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex justify-center border-t border-white/5 pt-12">
                <DeveloperCredit />
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
