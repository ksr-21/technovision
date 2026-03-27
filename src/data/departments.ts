import {
  Brain, Code, Zap, Building, Briefcase, Terminal, Settings,
  BookOpen, Cpu, Network, Binary, Ruler, HardHat, Globe, TrendingUp,
  Atom, Lightbulb, Database, Layers
} from 'lucide-react';
import aidsScanner from '../accets/AIDS129.jpeg';
import civilScanner from '../accets/civil.jpeg';
import computerScanner from '../accets/CS50.jpeg';
import civ1 from '../accets/civ1.png';
import civ3 from '../accets/civ3.png';
import etcScanner from '../accets/E&TC.jpeg';
import mechScanner from '../accets/Mech300.jpeg';
import mbaScanner from '../accets/MBA50.jpeg';
import mcaScanner from '../accets/MCA50.jpeg';

export const departments = [
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
    accentBg: 'bg-emerald-500/10',
    registrationFee: '₹129',
    isTeamEvent: true,
    paymentScanner: aidsScanner,
    eventName: 'Intelligence Arena',
    shortEventDescription: 'A multi-round challenge blending coding, cryptography, and AI video creation.',
    eventImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
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
    accentBg: 'bg-orange-500/10',
    registrationFee: '₹300 (Max 3 members)',
    isTeamEvent: true,
    paymentScanner: civilScanner,
    eventName: 'LoadBearing Bridge contest',
    shortEventDescription: 'Build and test the ultimate popsicle stick bridge for maximum load capacity.',
    eventImage: 'https://images.unsplash.com/photo-1517713982677-4b66332f98de?auto=format&fit=crop&q=80&w=800',
    description: 'Load bearing bridge using popsicle sticks is a popular educational and competition activity. Proposed date: 10th April, 2026. Rules: 1) Max 3 members per team. 2) Span: 50-60 cm, Max weight: 500g. 3) Types: Warren, Pratt, Howe, and other truss bridges. 4) Materials: Ice cream sticks, Fevicol. 5) No metal/ready-made/3D printed parts. 6) Pre-built; no modifications after submission. 7) Evaluation: Load-bearing (35%), Efficiency (30%), Design (15%), Aesthetics (10%), Presentation (10%). 8) Disqualification for prohibited materials or exceeding limits.',
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
    accentBg: 'bg-blue-500/10',
    registrationFee: '₹50 per student',
    isTeamEvent: false,
    paymentScanner: computerScanner,
    eventName: 'Develop in DARK',
    shortEventDescription: 'Test your creativity, speed, and AI skills in an exciting 3-round Prompting Competition!',
    eventImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    description: "Get ready to test your creativity, speed, and AI skills in an exciting 3-round Prompting Competition! Round 1 (Scenario to Image): Participants will be given a scenario. Your task is to write an effective prompt to generate the best possible image using AI tools. Round 2 (Rapid Fire): A fast-paced round where you'll be given multiple tasks. You must quickly craft accurate prompts based on each task. Round 3 (Mystery Round): Expect the unexpected! A fun and challenging round designed to test your creativity and adaptability.",
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
    accentBg: 'bg-yellow-500/10',
    registrationFee: '₹400 per team',
    isTeamEvent: true,
    paymentScanner: etcScanner,
    eventName: 'RC Grand Prix',
    shortEventDescription: 'An adrenaline-pumping RC race featuring obstacles and lap challenges.',
    eventImage: 'https://images.unsplash.com/photo-1591702548275-3eba01c24769?auto=format&fit=crop&q=80&w=800',
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
    accentBg: 'bg-red-500/10',
    registrationFee: '₹300 per student',
    isTeamEvent: true,
    paymentScanner: mechScanner,
    eventName: 'ROBO SOCCER',
    shortEventDescription: 'Design and control custom robots to compete in a high-stakes soccer tournament.',
    eventImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
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
    accentBg: 'bg-pink-500/10',
    registrationFee: null,
    isTeamEvent: false,
    eventName: 'Tech Canvas',
    shortEventDescription: 'Showcase your technical research and innovation through creative visual posters.',
    eventImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
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
    accentBg: 'bg-purple-500/10',
    registrationFee: '₹50 per student',
    isTeamEvent: false,
    paymentScanner: mbaScanner,
    eventName: 'Biz Carnival',
    shortEventDescription: 'A dynamic platform for future leaders to showcase business strategy and innovation.',
    eventImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
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
    accentBg: 'bg-indigo-500/10',
    registrationFee: '₹50 per student',
    isTeamEvent: false,
    paymentScanner: mcaScanner,
    eventName: 'Coding Hunt',
    shortEventDescription: 'A fast-paced scavenger hunt where code puzzles lead you to the finish line.',
    eventImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
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
  {
    id: 'civil-knockdown',
    name: 'Civil',
    fullName: 'Civil Engineering',
    icon: Building,
    color: 'orange',
    theme: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-400',
    accentColor: 'orange',
    accentBg: 'bg-orange-500/10',
    registrationFee: '₹30 per student',
    isTeamEvent: false,
    paymentScanner: civ1,
    eventName: 'One Shot Knockdown',
    shortEventDescription: 'Knock down a pyramid of steel glasses using a single throw of a rubber ball.',
    eventImage: 'https://images.unsplash.com/photo-1616091093714-c64882e9ab55?auto=format&fit=crop&q=80&w=800',
    description: 'Participants must knock down a pyramid of steel glasses using a single throw of a rubber ball. Rules: 1. Eligibility: Open to all registered college students. 2. Objective: Knock down all glasses in a pyramid using a single throw. 3. Attempt Rule: Three chances per round. 4. Throwing Line: Stand behind the marked line. 5. Throw Type: Only overarm throwing. 6. Scoring: Full pyramid knockdown = Winner. 7. Equipment: Only provided rubber ball. 8. Fair Play: Misconduct leads to disqualification. 9. Safety: Follow instructions. 10. Decision: Final and binding.',
    coordinators: {
      faculty: [
        { name: 'Prof. Patil A. B.', phone: '9503711944', email: 'akshayucoer@gmail.com' },
        { name: 'Prof. N. C. Lokhande', phone: '7038213197', email: 'lokhandenikita2018@gmail.com' }
      ],
      students: [
        { name: 'Pratik Chavan', phone: '7775937958', email: 'pratikc@gmail.com' },
        { name: 'Vinay Gaonkar', phone: '9307362417', email: 'Gaonkarvinay123@gmail.com' }
      ]
    },
    bgElements: [Ruler, HardHat, Building]
  },
  {
    id: 'civil-quiz',
    name: 'Civil',
    fullName: 'Civil Engineering',
    icon: Building,
    color: 'orange',
    theme: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-400',
    accentColor: 'orange',
    accentBg: 'bg-orange-500/10',
    registrationFee: '₹50 per student',
    isTeamEvent: false,
    paymentScanner: civ3,
    eventName: 'Quiz competition',
    shortEventDescription: 'Test your technical knowledge and compete with the best in this exciting quiz.',
    eventImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    description: 'Test your knowledge, challenge your mind, and compete with the best! Rules: 1) Total 30 Technical questions. 2) Correct answer +1 marks. 3) Wrong answer -0.5 marks. 4) Priority to first buzzer. 5) Tie up: 5 additional questions. 6) Reporting time: 10 am. 7) Entry fees: Rs.50.',
    coordinators: {
      faculty: [
        { name: 'Nimbekar A.P.', phone: '7843025371', email: 'abhishek.nimbekar@gmail.com' },
        { name: 'Wayal P. V.', phone: '8805488865', email: 'pravinwayal@gmail.com' }
      ],
      students: [
        { name: 'Smit Gadhe', phone: '9699122880', email: 'smitmg.g10@gmail.com' },
        { name: 'Vaibhav Kale', phone: '8956827589', email: 'Smitg2005@gmail.com' }
      ]
    },
    bgElements: [Ruler, HardHat, Building]
  },
];
