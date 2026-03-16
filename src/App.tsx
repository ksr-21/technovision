/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentDetail from './pages/DepartmentDetail';
import ThreeScene from './components/ThreeScene';
import CursorEffect from './components/CursorEffect';
import { useScroll, useTransform, useMotionValueEvent } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();

  const accentColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#ef4444', '#3b82f6', '#ef4444']
  );

  const accentGlow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(239, 68, 68, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(239, 68, 68, 0.3)']
  );

  useMotionValueEvent(accentColor, "change", (latest) => {
    document.documentElement.style.setProperty('--accent-color', latest);
  });

  useMotionValueEvent(accentGlow, "change", (latest) => {
    document.documentElement.style.setProperty('--accent-glow', latest);
  });

  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-accent/30 selection:text-accent">
        
        {/* 3D Background */}
        <ThreeScene />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/department/:id" element={<DepartmentDetail />} />
          </Routes>
        </div>

        {/* Aesthetic Overlays */}
        <div className="fixed inset-0 pointer-events-none z-20 hidden md:block">
          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-accent/30" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-accent/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-accent/30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-accent/30" />
        </div>
      </div>
    </Router>
  );
}

