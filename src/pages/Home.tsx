import React from 'react';
import Header from '../components/Header';
import Founders from '../components/Founders';
import Departments from '../components/Departments';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

const HUDCorner = ({ className }: { className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0.5, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    className={`absolute w-12 h-12 border-neon-cyan/40 ${className}`}
  />
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 shadow-[0_0_15px_var(--accent-glow)]"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        {/* Hero Section with Title Overlay */}
        <section className="h-[75vh] flex items-center justify-center px-6 relative overflow-hidden">
          {/* 3D Perspective Grid Background */}
          <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1000px' }}>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `conic-gradient(from 90deg at 1px 1px, transparent 90deg, #fff 0)`,
                backgroundSize: '50px 50px',
                transform: 'rotateX(60deg) translateY(-20%)',
                transformOrigin: 'top'
              }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center relative z-10 p-20"
          >
            {/* HUD Elements */}
            <HUDCorner className="top-0 left-0 border-t-2 border-l-2" />
            <HUDCorner className="top-0 right-0 border-t-2 border-r-2" />
            <HUDCorner className="bottom-0 left-0 border-b-2 border-l-2" />
            <HUDCorner className="bottom-0 right-0 border-b-2 border-r-2" />

            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4 relative">
              <motion.span
                animate={{
                  opacity: [1, 0.8, 1, 0.9, 1],
                  x: [0, -2, 2, -1, 0],
                  filter: [
                    'drop-shadow(0 0 0px var(--accent-glow))',
                    'drop-shadow(2px 0 5px #f0f)',
                    'drop-shadow(-2px 0 5px #0ff)',
                    'drop-shadow(0 0 0px var(--accent-glow))'
                  ]
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                TECHNO
              </motion.span>
              <motion.span
                animate={{
                  color: ['var(--accent-color)', '#ef4444', 'var(--accent-color)'],
                  textShadow: [
                    '0 0 20px var(--accent-glow)',
                    '0 0 40px var(--accent-glow)',
                    '0 0 20px var(--accent-glow)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-accent"
              >VISION</motion.span> 2026
            </h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 bg-neon-cyan/30" />
              <p className="text-sm md:text-xl text-cyan-400/80 font-mono tracking-[0.5em] uppercase">
                Innovate • Integrate • Inspire
              </p>
              <div className="h-px w-12 bg-neon-cyan/30" />
            </motion.div>
          </motion.div>

          {/* Scrolling Technical Data Decorative */}
          <div className="absolute bottom-10 left-10 hidden lg:block opacity-20 font-mono text-[10px] text-neon-cyan pointer-events-none">
            <motion.div
              animate={{ y: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(10)].map((_, i) => (
                <div key={i}>SCAN_TYPE: SECTOR_{Math.random().toString(16).slice(2, 6).toUpperCase()}</div>
              ))}
            </motion.div>
          </div>
        </section>

        <Founders />
        <Departments />
        <Leadership />
      </main>

      <Footer />
    </>
  );
}
