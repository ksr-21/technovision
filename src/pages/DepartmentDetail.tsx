import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Brain, Code, Zap, Building, Briefcase, Terminal, Settings, 
  BookOpen, Phone, Mail, Trophy, ArrowLeft, User, 
  Cpu, Network, Binary, Ruler, HardHat, Globe, TrendingUp, 
  Atom, Lightbulb, Database, Layers
} from 'lucide-react';

const departments = [
  { 
    id: 'aids',
    name: 'AI & DS', 
    fullName: 'Artificial Intelligence & Data Science', 
    icon: Brain, 
    color: 'emerald',
    theme: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    accentColor: 'emerald',
    eventName: 'Intelligence Arena',
    description: 'Intelligence Arena is a thrilling team-based competition that blends coding challenges, logical puzzles, and Cryptography tasks. Participants solve multiple rounds of problems, each revealing clues. As teams progress, they piece together to solve the problem given. In the final stage, teams use AI tools to create a short video presenting their theory of the case/problem given. The fastest team, with possible bonus time for the most creative AI video, wins the competition.',
    coordinators: {
      faculty: [{ name: 'Kalyani A.', phone: '9579102113', email: 'kalyani.jspm@gmail.com' }],
      students: [
        { name: 'Mukta Dhage', phone: '8830931993', email: 'muktadhage23@gmail.com' },
        { name: 'Prathamesh Renuse', phone: '8796550287', email: 'prathamrenuse25@gmail.com' }
      ]
    },
    bgElements: [Network, Cpu, Brain]
  },
  { 
    id: 'civil',
    name: 'Civil', 
    fullName: 'Civil Engineering', 
    icon: Building, 
    color: 'orange',
    theme: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-400',
    accentColor: 'orange',
    eventName: 'LoadBearing Bridge contest',
    description: 'Load bearing bridge using popsicle sticks is a popular educational and competition activity. It helps in understanding basic principles of structural engineering, load distribution, and design efficiency. By using simple materials like wooden popsicle sticks and glue, students can create a small-scale model of a bridge that demonstrates how real bridges support loads and maintain stability. This activity improves creativity, problem-solving ability, and practical knowledge of structural design.',
    coordinators: {
      faculty: [{ name: 'Mahesh D Anap', phone: '7249530830', email: 'mahesh.anap1988@gmail.com' }],
      students: [
        { name: 'Siddhant Jawalkar', phone: '7775807775', email: 'siddhantjawalkar6747@gmail.com' },
        { name: 'Vaishnavi Balaji Naiknaware', phone: '9767235874', email: 'vaishnavinaiknaware9406@gmail.com' }
      ]
    },
    bgElements: [Ruler, HardHat, Building]
  },
  { 
    id: 'computer',
    name: 'Computer', 
    fullName: 'Computer Engineering', 
    icon: Code, 
    color: 'blue',
    theme: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    accentColor: 'blue',
    eventName: 'Develop in Dark',
    description: "Develop in Dark is to enhance students' programming and problem-solving skills. In this event, participants were required to write programs for given problems without compiling or running the code, which tested their logical thinking, syntax knowledge, and coding accuracy. Evaluated based on the correctness of logic, syntax accuracy, and expected output of the code. After submission, judges compiled the programs to verify the results.",
    coordinators: {
      faculty: [{ name: 'Prof Snehal Ralebhat', phone: '8459829088', email: 'snehalralebhat0601@gmail.com' }],
      students: [
        { name: 'Prathmesh Patil', phone: '9518375412', email: 'patilprathmesh451@gmail.com' },
        { name: 'Kunal Singh', phone: '8789548725', email: '' }
      ]
    },
    bgElements: [Binary, Code, Terminal]
  },
  { 
    id: 'etc',
    name: 'E&TC', 
    fullName: 'Electronics & Telecommunication', 
    icon: Zap, 
    color: 'yellow',
    theme: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    accentColor: 'yellow',
    eventName: 'RC Grand Prix',
    description: 'The RC Race Competition is an exciting technical event where participants control remote-controlled cars to complete different racing challenges. The competition is conducted in three stages: Line Follower, Obstacle Race, and the final Lap Race. The overall performance across all stages will determine the winners.',
    coordinators: {
      faculty: [
        { name: 'Mr. R. P. Khadse', phone: '9850163720', email: 'khadserp@gmail.com' },
        { name: 'Mr. G. M. Kale', phone: '9689258728', email: 'ganraj.m.kale@gmail.com' }
      ],
      students: [
        { name: 'Yash Waghmare', phone: '9146632088', email: 'Yashwagh0903@gmail.com' },
        { name: 'Shekhar Ghanghav', phone: '8554026963', email: 'Shekharghanghav2@gmail.com' }
      ]
    },
    bgElements: [Zap, Cpu, Network]
  },
  { 
    id: 'mech',
    name: 'Mech', 
    fullName: 'Mechanical Engineering', 
    icon: Settings, 
    color: 'red',
    theme: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    accentColor: 'red',
    eventName: 'ROBO SOCCER',
    description: 'Robo Soccer is an exciting robotics competition where teams design and control robots to play soccer on a mini arena. The robots must dribble, pass, and push the ball to score goals against the opponent team. It tests skills in robot design, control systems, and team strategy.',
    coordinators: {
      faculty: [
        { name: 'Mr. V. D. Karande', phone: '9960096961', email: 'vijaykarande999@gmail.com' },
        { name: 'Mr. A. S. Patil', phone: '7038885583', email: 'er.atulpatil@gmail.com' }
      ],
      students: [
        { name: 'Prathmesh Mane', phone: '7977902410', email: 'pm410728@gmail.com' },
        { name: 'Harshal Patil', phone: '9823418672', email: '' },
        { name: 'Yash Shinde', phone: '8459984641', email: '' }
      ]
    },
    bgElements: [Settings, Cpu, Ruler]
  },
  { 
    id: 'fe',
    name: 'FE', 
    fullName: 'First Year Engineering', 
    icon: BookOpen, 
    color: 'pink',
    theme: 'from-pink-500/20 to-purple-500/20',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400',
    accentColor: 'pink',
    eventName: 'Tech Canvas',
    description: 'Technical poster presentation competitions for engineering students are designed to showcase research, innovative ideas, and technical expertise in a visual, concise, and engaging format. These events encourage students to translate complex engineering concepts into clear, impactful, and professional presentations.',
    coordinators: {
      faculty: [{ name: 'Pranjal J. Kajale', phone: '8830859272', email: 'pranjali.kajale25@gmail.com' }],
      students: [
        { name: 'UNDRE SUMIT BHUJANG', phone: '8208324172', email: 'sumitundre80@gmail.com' },
        { name: 'SINGH ADITYA UMASHANKAR', phone: '8850590550', email: 'adityaazz069@gmail.com' }
      ]
    },
    bgElements: [Atom, Lightbulb, BookOpen]
  },
  { 
    id: 'mba',
    name: 'MBA', 
    fullName: 'Business Administration', 
    icon: Briefcase, 
    color: 'purple',
    theme: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    accentColor: 'purple',
    eventName: 'Biz Carnival',
    description: 'Biz Carnival is a management event featuring interactive activities focused on decision-making. It provides a platform to develop managerial skills, teamwork, leadership, and innovative thinking through practical, engaging competitions.',
    coordinators: {
      faculty: [{ name: 'Prof. Pratibha Rasal', phone: '8600618558', email: 'pratibharasalmba@gmail.com' }],
      students: [
        { name: 'Ms. Divya Avinash Rawade', phone: '7058847115', email: 'divyarawade867@gmail.com' },
        { name: 'Mr. Sanket Sharadrao Gorde', phone: '8888380365', email: 'sanketgorde2020@gmail.com' }
      ]
    },
    bgElements: [Globe, TrendingUp, Briefcase]
  },
  { 
    id: 'mca',
    name: 'MCA', 
    fullName: 'Computer Applications', 
    icon: Terminal, 
    color: 'indigo',
    theme: 'from-indigo-500/20 to-blue-500/20',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400',
    accentColor: 'indigo',
    eventName: 'Coding Hunt',
    description: 'A Coding Hunt is a fun and competitive event where participants solve programming puzzles or coding challenges to find the next clue or reach the final solution. Core objectives include enhancing coding skills and promoting analytical thinking.',
    coordinators: {
      faculty: [{ name: 'Prof. Dhanshri R. Abhang', phone: '8459107455', email: 'abhangdh@gmail.com' }],
      students: [
        { name: 'Roshani Gupta', phone: '7972831157', email: 'roshanivm693@gmail.com' },
        { name: 'Abhijit Tikone', phone: '8796873220', email: 'abhijittikone0@gmail.com' }
      ]
    },
    bgElements: [Database, Layers, Terminal]
  },
];

const ThematicBackground = ({ deptId }: { deptId: string }) => {
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Department Specific Immersive Elements */}
      {deptId === 'computer' && (
        <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-none select-none overflow-hidden flex flex-wrap gap-4 p-4">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 1000, opacity: [0, 1, 0] }}
              transition={{ duration: 4 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
              className={`${i % 2 === 0 ? 'text-blue-500' : 'text-cyan-400'} whitespace-pre`}
            >
              {`// SYSTEM_BOOT\nconst core = 0x${Math.random().toString(16).slice(2, 6)};\nif (core > 0x${Math.random().toString(16).slice(2, 4)}) {\n  execute(core);\n}\n`.repeat(8)}
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
        </div>
      )}

      {deptId === 'aids' && (
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[...Array(25)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 5 + 2}
                fill="url(#nodeGradient)"
                animate={{ 
                  opacity: [0.2, 0.8, 0.2], 
                  scale: [1, 1.8, 1],
                  cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="currentColor"
                strokeWidth="0.8"
                className="text-emerald-500/20"
                animate={{ opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
              />
            ))}
          </svg>
          <div className="absolute top-1/4 right-1/4 opacity-10 animate-pulse">
            <Brain size={300} strokeWidth={0.1} className="text-emerald-500" />
          </div>
        </div>
      )}

      {deptId === 'civil' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,#f97316_49%,#f97316_51%,transparent_52%)] bg-[size:100px_100px]" />
          <div className="absolute inset-0 border-[2px] border-orange-500/10 m-10" />
          <div className="absolute inset-0 border-[2px] border-orange-500/10 m-20" />
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute border-t border-orange-500/20 w-full flex justify-between px-4" style={{ top: `${12.5 * i}%` }}>
              <span className="text-[8px] text-orange-500/40 font-mono">X_AXIS_REF_{i}00</span>
              <span className="text-[8px] text-orange-500/40 font-mono">Y_AXIS_REF_{i}00</span>
            </div>
          ))}
          <div className="absolute bottom-10 right-10 opacity-20">
            <Ruler size={200} strokeWidth={0.2} className="text-orange-500 rotate-45" />
          </div>
        </div>
      )}

      {deptId === 'mech' && (
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-500"
              style={{ 
                left: `${(i % 3) * 30 + 5}%`, 
                top: `${Math.floor(i / 3) * 30 + 5}%` 
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
            >
              <Settings size={120 + i * 40} strokeWidth={0.1} />
            </motion.div>
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(239,68,68,0.05)_100%)]" />
        </div>
      )}

      {deptId === 'etc' && (
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100h50v50h50v-100h50v50h50" fill="none" stroke="#eab308" strokeWidth="1" />
              <circle cx="50" cy="100" r="3" fill="#eab308" />
              <circle cx="100" cy="150" r="3" fill="#eab308" />
              <circle cx="150" cy="50" r="3" fill="#eab308" />
              <motion.circle
                cx="50" cy="100" r="5"
                fill="#eab308"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-yellow-500/30"
              style={{ 
                top: `${20 * i}%`, 
                left: 0, 
                right: 0,
                boxShadow: '0 0 10px #eab308'
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      )}

      {deptId === 'fe' && (
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="science" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="25" fill="none" stroke="#ec4899" strokeWidth="0.3" />
              <ellipse cx="75" cy="75" rx="40" ry="15" fill="none" stroke="#ec4899" strokeWidth="0.3" transform="rotate(45 75 75)" />
              <ellipse cx="75" cy="75" rx="40" ry="15" fill="none" stroke="#ec4899" strokeWidth="0.3" transform="rotate(-45 75 75)" />
              <motion.circle
                cx="75" cy="75" r="3"
                fill="#ec4899"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#science)" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <Atom size={400} strokeWidth={0.05} className="text-pink-500 animate-spin-slow" />
          </div>
        </div>
      )}

      {deptId === 'mba' && (
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1600 800" preserveAspectRatio="none">
            <motion.path
              d="M0 600 Q 200 400 400 500 T 800 300 T 1200 400 T 1600 200"
              fill="none"
              stroke="#a855f7"
              strokeWidth="3"
              animate={{ d: [
                "M0 600 Q 200 400 400 500 T 800 300 T 1200 400 T 1600 200",
                "M0 600 Q 200 500 400 400 T 800 400 T 1200 300 T 1600 300"
              ]}}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M0 700 Q 300 500 600 600 T 1000 400 T 1600 500"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
              strokeDasharray="10 10"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </svg>
          <div className="absolute top-10 left-10 font-mono text-[8px] text-purple-500/30 uppercase tracking-widest">
            Market_Analysis_v2.0<br/>Growth_Projection_Active
          </div>
        </div>
      )}

      {deptId === 'mca' && (
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 p-10">
            {[...Array(32)].map((_, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                className="h-24 border border-indigo-500/20 rounded-xl flex flex-col items-center justify-center font-mono text-[7px] text-indigo-500/40 bg-indigo-500/5"
              >
                <Database size={12} className="mb-1" />
                TABLE_{i}<br/>ID: UUID<br/>VAL: BLOB
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.1)_0%,transparent_50%)]" />
        </div>
      )}

      {/* Floating Icons Overlay */}
      {[...Array(8)].map((_, i) => {
        const Icon = dept.bgElements[i % dept.bgElements.length];
        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0.5
            }}
            animate={{ 
              opacity: [0.03, 0.1, 0.03],
              y: [null, "-=50", "+=50"],
              rotate: 360
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute ${dept.textColor}`}
          >
            <Icon size={100} strokeWidth={0.3} />
          </motion.div>
        );
      })}

      {/* Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[180px] opacity-10 bg-current ${dept.textColor}`} />
    </div>
  );
};

export default function DepartmentDetail() {
  const { id } = useParams();
  const dept = departments.find(d => d.id === id);

  if (!dept) return <div>Department not found</div>;

  return (
    <div className="min-h-screen bg-zinc-950 relative selection:bg-white/10">
      <Header />
      
      <main className="py-24 px-6 relative">
        {/* Department Specific Background */}
        <ThematicBackground deptId={dept.id} />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono">Back to Hub</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`lg:col-span-8 relative p-8 md:p-16 rounded-[3rem] border ${dept.borderColor} bg-zinc-900/40 backdrop-blur-2xl overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`p-5 rounded-[2rem] bg-white/5 border ${dept.borderColor} shadow-2xl shadow-current/10`}
                  >
                    <dept.icon className={`w-12 h-12 ${dept.textColor}`} />
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
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border ${dept.borderColor} flex items-center justify-center`}>
                      <Trophy className={`w-6 h-6 ${dept.textColor}`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Recognition</p>
                      <p className="text-sm font-bold text-white uppercase tracking-wider">Prizes & Certificates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border ${dept.borderColor} flex items-center justify-center`}>
                      <User className={`w-6 h-6 ${dept.textColor}`} />
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
                className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl"
              >
                <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Faculty Mentors
                </h4>
                <div className="space-y-6">
                  {dept.coordinators.faculty.map((fac, i) => (
                    <div key={i} className="group">
                      <p className="text-white font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors">{fac.name}</p>
                      <div className="flex flex-col gap-2">
                        <a href={`tel:${fac.phone}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-all">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-emerald-500/30">
                            <Phone size={14} />
                          </div>
                          {fac.phone}
                        </a>
                        <a href={`mailto:${fac.email}`} className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-all">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-emerald-500/30">
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
                className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl"
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
