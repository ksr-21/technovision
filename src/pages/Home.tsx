import React from 'react';
import Header from '../components/Header';
import Founders from '../components/Founders';
import Departments from '../components/Departments';
import Leadership from '../components/Leadership';
import Footer from '../components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

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
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        {/* Hero Section with Title Overlay */}
        <section className="h-[60vh] flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
              TECHNO<motion.span
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
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase">
              Innovate • Integrate • Inspire
            </p>
          </motion.div>
        </section>

        <Founders />
        <Departments />
        <Leadership />
      </main>

      <Footer />
    </>
  );
}
