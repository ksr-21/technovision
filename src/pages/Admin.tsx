import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ChevronLeft, Database, Download, RefreshCw,
  Search, User, Mail, Phone, Building, Calendar,
  Trophy, CreditCard, Users, BookOpen
} from 'lucide-react';
import { db } from '../firebase';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';

interface RegistrationData {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
  teamName?: string;
  transactionId: string;
  eventId: string;
  eventName: string;
  eventCategory: string;
  timestamp: Timestamp;
}

export default function Admin() {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setLoginError(false);
      fetchRegistrations();
    } else {
      setLoginError(true);
    }
  };

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      if (!db) {
        throw new Error("Database not initialized.");
      }
      const q = query(collection(db, 'registrations'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as RegistrationData[];
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if previously authenticated in this session
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchRegistrations();
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      sessionStorage.setItem('admin_authenticated', 'true');
    }
  }, [isAuthenticated]);

  const filteredRegistrations = registrations.filter(reg =>
    reg.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToCSV = () => {
    const headers = ['Full Name', 'Email', 'Phone', 'College', 'Department', 'Year', 'Event', 'Category', 'Team Name', 'Transaction ID', 'Date'];

    // Function to escape and wrap fields in double quotes
    const escapeCSV = (val: string | undefined | null) => {
      if (!val) return '""';
      const str = String(val).replace(/"/g, '""'); // Escape double quotes
      return `"${str}"`;
    };

    const csvRows = filteredRegistrations.map(reg => [
      escapeCSV(reg.fullName),
      escapeCSV(reg.email),
      escapeCSV(reg.phone),
      escapeCSV(reg.college),
      escapeCSV(reg.department),
      escapeCSV(reg.year),
      escapeCSV(reg.eventName),
      escapeCSV(reg.eventCategory),
      escapeCSV(reg.teamName || 'N/A'),
      escapeCSV(reg.transactionId),
      escapeCSV(reg.timestamp?.toDate().toLocaleString() || 'N/A')
    ]);

    const csvContent = [headers.map(h => `"${h}"`).join(","), ...csvRows.map(row => row.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 relative z-10 shadow-2xl"
        >
          <div className="mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Exit</span>
            </button>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Admin <span className="text-accent">Access.</span></h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Enter the access key to view the registration data encrypted within our databases.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 block ml-4">Access Key</label>
              <div className="relative group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
                  autoFocus
                />
              </div>
              {loginError && (
                <p className="text-xs text-red-400 ml-4 font-mono">INVALID ACCESS KEY. ACCESS DENIED.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-accent text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              AUTHENTICATE
              <CreditCard size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-accent/30 selection:text-accent">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Back to Hub</span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-4">
              ADMIN <span className="text-accent">PANEL.</span>
              <div className="p-2 bg-accent/10 border border-accent/20 rounded-xl">
                <Database className="w-6 h-6 text-accent" />
              </div>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchRegistrations}
              className="p-4 bg-zinc-900 border border-white/10 rounded-2xl hover:bg-zinc-800 transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-6 py-4 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all duration-300"
            >
              <Download size={18} />
              EXPORT CSV
            </button>
          </div>
        </div>

        {/* Stats & Search */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-3 relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/20 group-focus-within:text-accent transition-colors">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, event or transaction ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-all backdrop-blur-xl"
            />
          </div>
          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-xl flex flex-col justify-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Total Registrations</span>
            <span className="text-3xl font-black text-accent">{filteredRegistrations.length}</span>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="p-6 text-[10px] font-mono uppercase tracking-widest text-white/40">Participant</th>
                  <th className="p-6 text-[10px] font-mono uppercase tracking-widest text-white/40">Academic Details</th>
                  <th className="p-6 text-[10px] font-mono uppercase tracking-widest text-white/40">Event / Team</th>
                  <th className="p-6 text-[10px] font-mono uppercase tracking-widest text-white/40">Payment</th>
                  <th className="p-6 text-[10px] font-mono uppercase tracking-widest text-white/40">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <RefreshCw className="w-8 h-8 text-accent animate-spin" />
                        <span className="text-sm font-mono text-white/40 animate-pulse">RETRIVING ENCRYPTED DATA...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-20 text-center">
                      <span className="text-white/20 font-mono italic">No records found matching your query.</span>
                    </td>
                  </tr>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <motion.tr
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={reg.id}
                      className="group hover:bg-white/5 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex flex-col gap-1">
                          <span className="font-bold text-white flex items-center gap-2">
                            <User size={14} className="text-accent" />
                            {reg.fullName}
                          </span>
                          <span className="text-xs text-white/40 flex items-center gap-2">
                            <Mail size={12} />
                            {reg.email}
                          </span>
                          <span className="text-xs text-white/40 flex items-center gap-2">
                            <Phone size={12} />
                            {reg.phone}
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex flex-col gap-1 text-xs">
                          <span className="text-white/60 flex items-center gap-2">
                            <Building size={12} />
                            {reg.college}
                          </span>
                          <span className="text-white/40 flex items-center gap-2">
                            <BookOpen size={12} />
                            {reg.department} ({reg.year})
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-black text-accent flex items-center gap-2">
                            <Trophy size={12} />
                            {reg.eventName}
                          </span>
                          {reg.teamName && (
                            <span className="text-[10px] text-white/40 flex items-center gap-2 uppercase tracking-tighter">
                              <Users size={12} />
                              Team: {reg.teamName}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded w-fit flex items-center gap-2">
                            <CreditCard size={12} />
                            {reg.transactionId}
                          </span>
                        </div>
                      </td>
                      <td className="p-6 text-xs text-white/40 font-mono">
                        <div className="flex items-center gap-2">
                          <Calendar size={12} />
                          {reg.timestamp?.toDate().toLocaleString() || 'Unknown'}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
