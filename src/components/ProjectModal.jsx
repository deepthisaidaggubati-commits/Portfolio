import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Cpu, Layers, ShieldCheck, ExternalLink } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#151014] border border-white/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-colors"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="mb-5 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                {project.badge}
              </span>
              <span className="text-[11px] font-mono text-[#B9B1B5]">PROJECT {project.number}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#FF1744]">{project.subtitle}</p>
          </div>

          {/* Project Visual Image (16:9 aspect ratio, fully visible) */}
          {project.image && (
            <div className="mb-6 rounded-xl overflow-hidden border border-white/10 aspect-video w-full bg-[#070607]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Overview & In-Depth Details */}
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
                <Cpu size={14} className="text-[#FF1744]" />
                System Architecture & Problem Context
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-sans">{project.overview}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
                <Layers size={14} className="text-[#FF1744]" />
                Technical Implementation
              </h4>
              <p className="text-[#B9B1B5] text-xs sm:text-sm leading-relaxed font-sans">{project.description}</p>
            </div>

            {project.keyFeatures && (
              <div>
                <h4 className="text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                  <ShieldCheck size={14} className="text-[#FF1744]" />
                  Core Engineering Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="p-2.5 rounded-xl bg-[#070607] border border-white/5 flex items-start gap-2 text-xs text-[#B9B1B5]">
                      <span className="text-[#FF1744] font-bold">›</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tech stack pills & footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#070607] border border-white/10 text-white">
                  {t}
                </span>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-[#FF1744] hover:bg-[#D50032] text-white flex items-center gap-2 transition-colors ml-auto shadow-sm"
              >
                <Github size={14} />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
