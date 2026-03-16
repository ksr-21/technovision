import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-8 md:px-24 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-display text-7xl text-white mb-12">
              Shaping the <br />
              Future of <br />
              <span className="italic text-white/40">Engineering.</span>
            </h2>
            <button id="registration" className="px-12 py-4 bg-accent text-black rounded-full text-sm uppercase tracking-widest hover:opacity-80 transition-all font-bold">
              Admissions 2026
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Registration', href: '#registration' },
                  { name: 'Departments', href: '#departments' },
                  { name: 'Leadership', href: '#leadership' },
                  { name: 'Contact', href: '#contact' }
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-body text-sm text-white/60 hover:text-white transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Connect</h4>
              <ul className="space-y-4">
                {[
                  { name: 'College Website', href: 'https://jspmntc.edu.in/' },
                  { name: 'Instagram', href: 'https://www.instagram.com/jspmntc_pune/' },
                  { name: 'Email', href: 'mailto:director@jspmntc.edu.in' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/school/jspm-narhe-technical-campus-pune/' }
                ].map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-white font-serif text-xl italic">JSPM.</span>
            <span className="text-white/20 text-xs uppercase tracking-widest">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-white/20 text-[10px] uppercase tracking-[0.4em]">
            <div className="flex items-center gap-3">
              <span>Made by</span>
              <motion.div className="flex items-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, color: '#fff' }}
                  className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all flex items-center gap-2 group"
                >
                  <span className="group-hover:text-accent transition-colors">Kunal Sanjit Singh</span>
                  <Linkedin size={12} className="group-hover:text-accent transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/kunalsinghrajput_21?igsh=b21objl3dXprZHA2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#fff' }}
                  className="p-2 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <Instagram size={12} className="group-hover:text-accent transition-colors" />
                </motion.a>
              </motion.div>
            </div>
          </div>
          <div className="text-white/20 text-[10px] uppercase tracking-[0.4em]">
            Narhe Technical Campus • Pune • India
          </div>
        </div>
      </div>
    </footer>
  );
}
