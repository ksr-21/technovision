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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200 cursor-none">
        <CursorEffect />
        
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
        <div className="fixed inset-0 pointer-events-none z-20">
          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-emerald-500/30" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-emerald-500/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-emerald-500/30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-emerald-500/30" />
        </div>
      </div>
    </Router>
  );
}

