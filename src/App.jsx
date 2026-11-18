import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import DesktopCursor from './components/DesktopCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070607] text-white selection:bg-[#FF1744] selection:text-white font-sans overflow-x-hidden">
      {/* Subtle Desktop-Only Interactive Cursor */}
      <DesktopCursor />

      {/* Refined, High-Performance Ambient Atmosphere */}
      <BackgroundCanvas />

      {/* Sticky Editorial Navigation with Gliding Active Pill */}
      <Navbar />

      {/* Main Content Flow - Direct Immediate Entrance */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
