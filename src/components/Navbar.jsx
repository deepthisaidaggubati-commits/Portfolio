import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  ChevronRight,
  Download
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 30);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollPos / winHeight) * 100);
      }

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundEnabled(newState);
  };

  const handleLinkClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#070607] z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#A00028] via-[#FF1744] to-[#FF003C] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Editorial Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3.5 bg-[#070607]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Custom DS Monogram Logo */}
            <a href="#hero" onClick={() => sound.playClick()} className="shrink-0">
              <BrandLogo size="md" />
            </a>

            {/* Desktop Navigation Links with Animated Pill Glider */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#151014]/85 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className={`relative px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors z-10 ${
                      isActive ? 'text-white font-semibold' : 'text-[#B9B1B5] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/15 -z-10 shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Utilities: Sound Toggle, Resume, Mobile Menu Toggle */}
            <div className="flex items-center gap-2.5">
              
              {/* Sound Toggle Button */}
              <button
                onClick={toggleSound}
                className="p-2 rounded-xl bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-all text-xs"
                title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              >
                {soundEnabled ? <Volume2 size={15} className="text-[#FF1744]" /> : <VolumeX size={15} />}
              </button>

              {/* Download Resume Quick Pill */}
              <a
                href={personalInfo.resumeUrl}
                download="Deepthi_Resume.pdf"
                onClick={() => sound.playClick()}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs font-semibold bg-[#151014] text-white border border-white/15 hover:border-[#FF1744]/60 hover:bg-[#1A1419] transition-all"
              >
                <Download size={13} className="text-[#FF1744]" />
                <span>Resume</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="lg:hidden p-2 rounded-xl bg-[#151014] border border-white/10 text-white hover:border-[#FF1744]/50 transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#070607]/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col space-y-2 max-w-sm mx-auto w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 rounded-2xl bg-[#151014] border border-white/5 text-white font-display font-medium text-base hover:border-[#FF1744]/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="text-[#B9B1B5]" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  download="Deepthi_Resume.pdf"
                  onClick={handleLinkClick}
                  className="w-full py-3 rounded-2xl font-mono text-xs font-bold text-center bg-[#FF1744] text-white flex items-center justify-center gap-2"
                >
                  <Download size={14} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
