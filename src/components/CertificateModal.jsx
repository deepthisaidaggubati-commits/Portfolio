import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ShieldCheck, Building2, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#151014] border border-white/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
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

          {/* Certificate Badge & Issuer */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#FF1744] flex items-center justify-center">
              <Award size={20} />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                {cert.badge}
              </span>
              <div className="text-xs font-mono text-[#B9B1B5] flex items-center gap-1.5 mt-0.5">
                <Building2 size={12} className="text-[#FF1744]" />
                <span>{cert.issuer}</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-white mb-1.5">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-4">
            <ShieldCheck size={14} className="text-[#FF1744]" />
            <span>Verified Academic / Professional Record</span>
            <span className="text-white/20">•</span>
            <span className="text-[#B9B1B5]">{cert.date}</span>
          </div>

          {/* Certificate Description */}
          <div className="p-4 rounded-xl bg-[#070607] border border-white/5 text-xs text-slate-200 leading-relaxed mb-5 font-sans">
            <p>{cert.description}</p>
          </div>

          {/* Status checklist */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-xs text-[#B9B1B5]">
              <CheckCircle2 size={13} className="text-[#FF1744] shrink-0" />
              <span>Certified under curriculum standards of {cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#B9B1B5]">
              <CheckCircle2 size={13} className="text-[#FF1744] shrink-0" />
              <span>Conferred to Daggubati Deepthi Sai (Vignan's Lara Institute)</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {cert.file ? (
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 py-2 rounded-xl bg-[#FF1744] hover:bg-[#D50032] text-white font-mono text-xs font-bold flex items-center gap-2 transition-colors"
              >
                <FileText size={14} />
                <span>Open Document ({cert.file.endsWith('.pdf') ? 'PDF' : 'Image'})</span>
                <ExternalLink size={12} />
              </a>
            ) : (
              <div className="text-[11px] font-mono text-[#B9B1B5]">
                Verified by Institutional Registry
              </div>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs hover:border-[#FF1744]/40 transition-colors ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CertificateModal;
