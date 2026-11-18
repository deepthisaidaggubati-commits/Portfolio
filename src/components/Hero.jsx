import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal,
  Cpu,
  GraduationCap,
  Github,
  Linkedin,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const roles = [
  "Software Developer",
  "AI & ML Enthusiast",
  "Full Stack Developer",
  "Aspiring Cloud & Data Engineer"
];

const Hero = () => {
  // Dynamic Typewriter State
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse-Responsive Spotlight Coordinates
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const fullText = roles[roleIndex];
    let speed = isDeleting ? 45 : 90;

    if (!isDeleting && currentText === fullText) {
      speed = 2200; // Pause when word is completely typed
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-24 lg:pt-28 pb-12 flex items-center justify-center overflow-hidden bg-[#070607]"
    >
      {/* Interactive Mouse Spotlight Gradient (Follows pointer softly) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-30"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(160, 0, 40, 0.22), transparent 75%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Dynamic Intro & Typewriter */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Availability Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] mb-5 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-pulse" />
              <span className="tracking-wide">Available for 2027 Full-Time Opportunities</span>
            </motion.div>

            {/* Sub-label */}
            <p className="text-xs font-mono text-[#B9B1B5] tracking-widest uppercase mb-1.5 flex items-center gap-2 font-medium">
              <Terminal size={13} className="text-[#FF1744]" />
              <span>Hello, I'm</span>
            </p>

            {/* Main Name Heading with Editorial Typography */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight font-display text-white mb-2 leading-[1.1]">
              DAGGUBATI <br />
              <span className="text-[#FF1744]">
                DEEPTHI SAI
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="text-lg sm:text-xl font-bold font-display text-slate-100 mb-3">
              "Building Intelligent Digital Experiences."
            </h2>

            {/* Dynamic Typewriter Role */}
            <div className="h-8 sm:h-9 flex items-center gap-2 mb-4 text-base sm:text-lg font-mono text-slate-200">
              <span className="text-[#FF1744] font-bold">&gt;</span>
              <span className="font-semibold text-white border-b border-[#FF1744]/70 pb-0.5 min-w-[200px]">
                {currentText}
              </span>
              <span className="w-2 h-5 bg-[#FF1744] animate-pulse inline-block" />
            </div>

            {/* Professional Introduction */}
            <p className="text-[#B9B1B5] text-xs sm:text-sm leading-relaxed max-w-xl mb-6 font-sans">
              Final-year B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning at Vignan's Lara Institute of Technology & Science. Passionate about architecting scalable systems, deep neural forecasting models, and resilient full-stack applications that convert complex real-world challenges into high-performance software.
            </p>

            {/* Action Buttons: Explore My Work, Download Resume, Let's Connect */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Explore My Work (Smooth Scroll to Projects) */}
              <a
                href="#projects"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="group px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-[#FF1744] hover:bg-[#D50032] shadow-sm hover:shadow-[0_0_20px_rgba(255,23,68,0.35)] transition-all flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download Resume (Points directly to official /Deepthi_Resume.pdf) */}
              <a
                href={personalInfo.resumeUrl}
                download="Deepthi_Resume.pdf"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-white bg-[#151014] border border-white/10 hover:border-[#FF1744]/60 hover:bg-[#1A1419] transition-all flex items-center gap-2 shadow-sm"
              >
                <Download size={14} className="text-[#FF1744]" />
                <span>Download Resume</span>
              </a>

              {/* Let's Connect */}
              <a
                href="#contact"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-5 py-2.5 rounded-xl font-mono text-xs font-medium text-[#B9B1B5] hover:text-white bg-[#151014] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Metric Badges & Verified Profile Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base">9.09</span>
                <span className="text-[11px] font-mono text-[#B9B1B5]">CGPA (AI & ML)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base">2027</span>
                <span className="text-[11px] font-mono text-[#B9B1B5]">Vignan's Lara</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base">Top 20</span>
                <span className="text-[11px] font-mono text-[#B9B1B5]">SIH '26</span>
              </div>

              {/* Verified Links */}
              <div className="ml-auto flex items-center gap-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-all"
                  title="GitHub Profile"
                >
                  <Github size={14} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Genuine Portrait in Architectural Frame with Floating Tech Highlights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Soft Ambient Rim Light */}
            <div className="absolute inset-0 max-w-[340px] max-h-[420px] m-auto rounded-3xl bg-[#A00028]/25 blur-3xl pointer-events-none" />

            {/* Frame Container */}
            <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
              
              <div className="relative rounded-2xl overflow-hidden bg-[#151014] border border-white/10 group-hover:border-[#FF1744]/40 p-2 shadow-2xl transition-all duration-300">
                
                {/* Genuine Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[3.6/4.5] bg-[#070607]">
                  <img
                    src="/assets/deepthi-profile-enhanced.png"
                    alt="Daggubati Deepthi Sai"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.target.src = '/assets/deepthi-profile.png';
                    }}
                  />

                  {/* Gradient at base */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070607] via-[#070607]/60 to-transparent pointer-events-none" />

                  {/* Identification Overlay at Base */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#151014]/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-white text-xs">Daggubati Deepthi Sai</h3>
                        <p className="text-[10px] font-mono text-[#B9B1B5]">B.Tech CSE (AI & ML) • 2023–2027</p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                        9.09
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Technology Badge 1: Top Right */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#151014]/95 border border-white/15 shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <Cpu size={13} className="text-[#FF1744]" />
                <span className="text-[10px] font-mono font-bold text-white">Full-Stack & ML</span>
              </motion.div>

              {/* Floating Technology Badge 2: Bottom Left */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-[#151014]/95 border border-white/15 shadow-xl flex items-center gap-2 backdrop-blur-md"
              >
                <GraduationCap size={13} className="text-[#FF1744]" />
                <span className="text-[10px] font-mono text-[#B9B1B5]">Class Rep (2 Years)</span>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
