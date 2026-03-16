import React from 'react';
import { motion } from 'motion/react';
import JSPM from '../accets/JSPM.png';

export default function Founders() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] text-emerald-500 mb-20 font-mono text-center md:text-left"
        >
          Our Visionary Founder
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-[0.2em] mb-8 text-center md:text-left">
              Founder Secretary, JSPM & President, TSSM
            </div>
            
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
              Hon. Prof. Dr. <br />
              <span className="text-emerald-500">T. J. Sawant Sir</span>
            </h3>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic border-l-2 border-emerald-500/30 pl-6">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                A visionary educationist and a pioneer in the field of technical education in Maharashtra. 
                As the Founder Secretary of JSPM and President of TSSM, Hon. Prof. Dr. T. J. Sawant Sir has dedicated his life
                to creating world-class educational infrastructure. His unwavering commitment to excellence 
                has empowered thousands of young minds to achieve their professional dreams through 
                quality education and innovative learning environments.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-12 pt-12 border-t border-white/10">
              <div className="text-center md:text-left">
                <p className="text-4xl font-black text-white">20+</p>
                <p className="text-[10px] text-emerald-500 uppercase tracking-widest mt-2 font-mono">Institutes</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-black text-white">50k+</p>
                <p className="text-[10px] text-emerald-500 uppercase tracking-widest mt-2 font-mono">Alumni</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-black text-white">100+</p>
                <p className="text-[10px] text-emerald-500 uppercase tracking-widest mt-2 font-mono">Courses</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative inline-block justify-self-center md:justify-self-end order-1 md:order-2"
          >
            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-emerald-500/20 rounded-full -m-4 animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute inset-0 border border-emerald-500/10 rounded-full -m-8 animate-[pulse_6s_ease-in-out_infinite]" />
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-900 border border-white/10 rounded-full p-2">
                <img 
                  src={JSPM}
                  alt="Hon. Prof. Dr. T. J. Sawant Sir"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
