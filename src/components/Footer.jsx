import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

const Footer = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070607] border-t border-white/10 pt-14 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand & Identity with Custom Monogram */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <BrandLogo size="md" />
            <p className="text-xs font-mono text-[#B9B1B5] mt-2">
              "Building Intelligent Digital Experiences."
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#B9B1B5]">
            <a href="#about" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">About</a>
            <a href="#skills" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Skills</a>
            <a href="#projects" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Projects</a>
            <a href="#experience" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Experience</a>
            <a href="#education" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Education</a>
            <a href="#achievements" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Achievements</a>
            <a href="#certifications" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Certifications</a>
            <a href="#contact" onClick={() => sound.playClick()} className="hover:text-[#FF1744] transition-colors">Contact</a>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-xl bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-colors"
              title="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-xl bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-xl bg-[#151014] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-colors"
              title="Instagram"
            >
              <Instagram size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#151014] border border-white/10 text-[#FF1744] hover:bg-[#FF1744] hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Legal & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#B9B1B5] gap-3">
          <p>© {new Date().getFullYear()} Daggubati Deepthi Sai. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
