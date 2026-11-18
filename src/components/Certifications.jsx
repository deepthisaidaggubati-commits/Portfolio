import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, ChevronRight, Building2, ExternalLink, FileText } from 'lucide-react';
import CertificateModal from './CertificateModal';
import { sound } from '../utils/soundEffects';

const certCategories = [
  { id: 'all', label: 'All Credentials' },
  { id: 'cisco', label: 'Cisco Networking' },
  { id: 'internships', label: 'Internships & Industry' },
  { id: 'nptel', label: 'NPTEL & CS Core' },
  { id: 'analytics', label: 'Analytics & Tools' },
];

const certificatesList = [
  {
    title: 'CyberOps Associate Certification',
    issuer: 'Cisco Networking Academy',
    category: 'cisco',
    badge: 'Industry Security Credential',
    date: '2026',
    description: 'Demonstrated knowledge of cybersecurity operations, security monitoring, threat detection methodologies, incident response, host and network analysis.',
    verified: true,
    file: '/certificates/cisco-cyberops.pdf'
  },
  {
    title: 'AI & Machine Learning Internship (120 Hours)',
    issuer: 'SmartBridge Educational Services / APSCHE',
    category: 'internships',
    badge: 'Verified Technical Internship',
    date: 'July 2026',
    description: '120 hours of hands-on internship in machine learning model development, exploratory data analysis, feature engineering, and model deployment.',
    verified: true,
    file: '/certificates/smartbridge-internship.pdf'
  },
  {
    title: 'Data Visualization & Power BI Internship',
    issuer: 'SaiKet Systems',
    category: 'internships',
    badge: 'Industry Internship',
    date: 'February 2026',
    description: 'Applied internship developing executive Power BI analytics dashboards, data modeling, DAX measure formulations, and reporting metrics.',
    verified: true,
    file: '/certificates/saiket-internship.pdf'
  },
  {
    title: 'Professional Employability & Core Skills',
    issuer: 'Wadhwani Foundation',
    category: 'internships',
    badge: 'Professional Certification',
    date: '2026',
    description: 'Advanced professional development curriculum covering analytical reasoning, problem solving, teamwork, and technical workplace collaboration.',
    verified: true,
    file: '/certificates/wadhwani-foundation.pdf'
  },
  {
    title: 'Data Analysis with Excel',
    issuer: 'Corporate & Analytics Foundation',
    category: 'analytics',
    badge: 'Analytics Credential',
    date: '2026',
    description: 'Advanced data modeling, formulaic computing, pivot tables, statistical summaries, and exploratory dashboard construction.',
    verified: true,
    file: '/certificates/excel-certification.pdf'
  },
  {
    title: 'Flipkart GRiD & Unstop Hackathon Competition',
    issuer: 'Flipkart / Unstop',
    category: 'internships',
    badge: 'National Technical Challenge',
    date: '2026',
    description: 'Competitive participation in national-level technical problem-solving, algorithmic design, and full-stack software application challenges.',
    verified: true,
    file: '/certificates/flipkart-unstop.pdf'
  },
  {
    title: 'Cloud Computing & Distributed Systems',
    issuer: 'NPTEL (IIT Kharagpur)',
    category: 'nptel',
    badge: 'Elite / National Credential',
    date: '2026',
    description: 'Comprehensive study of cloud architecture, distributed virtualization, hypervisors, service models (IaaS, PaaS, SaaS), resource provisioning, and cloud data security.',
    verified: true
  },
  {
    title: 'Data Structures and Algorithms using Java',
    issuer: 'NPTEL (IIT)',
    category: 'nptel',
    badge: 'Core Computer Science',
    date: '2025',
    description: 'Algorithmic complexity, linked lists, balanced binary search trees, heaps, graph traversals (BFS/DFS), Dijkstra shortest path, and dynamic programming.',
    verified: true
  },
  {
    title: 'Academic Bonafide & Institutional Excellence',
    issuer: "Vignan's Lara Institute of Technology & Science",
    category: 'nptel',
    badge: 'Institutional Merit',
    date: '2026',
    description: "Official institutional bonafide certifying high academic merit, B.Tech CSE (AI & ML) enrollment, and 9.09 cumulative CGPA.",
    verified: true,
    file: '/certificates/vignan-bonafide.jpg'
  }
];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  const filtered = certificatesList.filter(
    c => activeCategory === 'all' || c.category === activeCategory
  );

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5">
            <Award size={12} className="text-[#FF1744]" />
            <span>Credentials & Verifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2">
            Certifications & <span className="text-[#FF1744]">Credentials</span>
          </h2>
          <p className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans">
            Formal technical certifications across networking, machine learning, cloud architectures, and data analytics.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#151014] border border-white/10">
            {certCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white/10 text-white border border-white/15'
                    : 'text-[#B9B1B5] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sound.playHover()}
              className="p-6 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Badge & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#B9B1B5]">{cert.date}</span>
                </div>

                <h3 className="text-base font-bold font-display text-white mb-1 group-hover:text-[#FF1744] transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-mono text-slate-300 mb-3 flex items-center gap-1.5">
                  <Building2 size={12} className="text-[#B9B1B5]" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs text-[#B9B1B5] leading-relaxed mb-4 line-clamp-3 font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer: View Credential Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => {
                    sound.playClick();
                    setSelectedCert(cert);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#FF1744] transition-colors"
                >
                  <span>Verify Credential</span>
                  <ChevronRight size={14} />
                </button>

                {cert.file && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#FF1744] bg-[#FF1744]/10 px-2 py-0.5 rounded border border-[#FF1744]/25">
                    <FileText size={10} />
                    <span>Doc Attached</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};

export default Certifications;
