import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';

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
            <button className="px-12 py-4 bg-emerald-500 text-black rounded-full text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all font-bold">
              Admissions 2026
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Admissions', 'Departments', 'Placements', 'Research', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-body text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Social</h4>
              <ul className="space-y-4">
                {['LinkedIn', 'Twitter', 'Instagram', 'Email'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-body text-sm text-white/60 hover:text-white transition-colors">{item}</a>
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
            <div className="flex items-center gap-2">
              <span>Made by</span>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                Kunal Sanjit Singh
                <Linkedin size={10} className="mb-0.5" />
              </a>
              <a
                href="https://www.instagram.com/kunalsinghrajput_21?igsh=b21objl3dXprZHA2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram size={10} className="mb-0.5" />
              </a>
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
