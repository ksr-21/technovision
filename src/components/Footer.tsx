import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import DeveloperCredit from './DeveloperCredit';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-8 md:px-24 bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-display text-7xl text-white mb-12">
              Shaping the <br />
              Future of <br />
              <span className="italic text-white/40">Students.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About', href: '#about', type: 'anchor' },
                  { name: 'Registration', href: '/register', type: 'link' },
                  { name: 'Competitions', href: '#departments', type: 'anchor' },
                  { name: 'Leadership', href: '#leadership', type: 'anchor' },
                  { name: 'Contact', href: '#contact', type: 'anchor' }
                ].map(item => (
                  <li key={item.name}>
                    {item.type === 'link' ? (
                      <Link to={item.href} className="text-body text-sm text-white/60 hover:text-white transition-colors">{item.name}</Link>
                    ) : (
                      <a href={item.href} className="text-body text-sm text-white/60 hover:text-white transition-colors">{item.name}</a>
                    )}
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 pt-12 border-t border-white/10">
          <DeveloperCredit />

          <div className="flex items-center gap-4 order-3 md:order-2">
            <span className="text-white font-serif text-xl italic">JSPM.</span>
            <span className="text-white/20 text-xs uppercase tracking-widest">© 2026</span>
          </div>

          <div className="text-white/20 text-[10px] uppercase tracking-[0.4em] text-center md:text-right order-2 md:order-3">
            JSPM Narhe Technical Campus • Pune
          </div>
        </div>
      </div>
    </footer>
  );
}
