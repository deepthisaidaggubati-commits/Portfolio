import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const experiences = [
  {
    id: 'infosys',
    company: 'Infosys Springboard',
    role: 'Virtual Internship 7.0 (B2)',
    period: '15 July 2026 – 20 September 2026',
    badge: 'Enterprise Virtual Internship',
    focus: 'Python, AI fundamentals, cloud technologies, and Microsoft Azure.',
    contributions: [
      'Completed all core technical project deliverables for the AI-Powered Malware Classification and Threat Intelligence Platform.',
      'Gained applied exposure to Python model development, Azure cloud fundamentals, and static PE binary analysis.',
      'Authored structured technical project documentation and submitted milestone deliverables on schedule.'
    ],
    skills: ['Python', 'AI Fundamentals', 'Cloud Technologies', 'Microsoft Azure', 'Malware Classification']
  },
  {
    id: 'smartbridge',
    company: 'SmartBridge Educational Services',
    role: 'AI & ML Intern',
    period: 'July 2026',
    badge: '120-Hour Technical Internship',
    focus: 'AI, machine learning, exploratory data analysis, and predictive model development.',
    contributions: [
      'Completed 120 hours of focused virtual training in applied artificial intelligence and machine learning pipelines.',
      'Conducted exploratory data analysis, feature preprocessing, and supervised classification model training.',
      'Evaluated predictive performance using precision, recall, and multi-class confusion matrices.'
    ],
    skills: ['Machine Learning', 'Data Analysis', 'Model Development', 'Python', 'Scikit-Learn']
  },
  {
    id: 'saiket',
    company: 'SaiKet Systems',
    role: 'Data Visualization Intern',
    period: 'February 2026',
    badge: 'Industry Internship',
    focus: 'Data visualization, business intelligence dashboards, and DAX reporting metrics.',
    contributions: [
      'Designed interactive Power BI visualizations transforming transactional datasets into intuitive executive views.',
      'Formulated DAX calculated columns and measures to track key operational indicators and client retention.',
      'Assisted in data extraction, data cleansing, and visual storytelling for stakeholder presentations.'
    ],
    skills: ['Power BI', 'DAX Measures', 'Data Visualization', 'Excel', 'Analytics']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <Briefcase size={12} className="text-[#FF1744]" />
            <span>Interactive Timeline</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            Professional <span className="text-[#FF1744]">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Verified internship track record across enterprise artificial intelligence, cloud architectures, and data visualization.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Timeline Guide Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#FF1744] via-[#A00028] to-white/10 transform sm:-translate-x-1/2" 
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <motion.div 
                    whileHover={{ scale: 1.25 }}
                    className="absolute left-4 sm:left-1/2 w-7 h-7 -translate-x-1/2 rounded-full bg-[#151014] border-2 border-[#FF1744] flex items-center justify-center z-10 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF1744]" />
                  </motion.div>

                  {/* Content Card (Half Width) */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <div 
                      onMouseEnter={() => sound.playHover()}
                      className="p-6 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 group shadow-md"
                    >
                      {/* Top Header: Badge & Date */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                          {exp.badge}
                        </span>
                        <span className="text-[11px] font-mono text-[#B9B1B5] flex items-center gap-1">
                          <Calendar size={11} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Company & Role */}
                      <h3 className="text-base sm:text-lg font-bold font-display text-white mb-0.5 group-hover:text-[#FF1744] transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-mono text-slate-200 mb-3 font-semibold">
                        {exp.role}
                      </p>

                      <p className="text-xs text-[#B9B1B5] mb-4 leading-relaxed font-sans">
                        {exp.focus}
                      </p>

                      {/* Contributions */}
                      <div className="space-y-1.5 mb-4">
                        {exp.contributions.map((item, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#B9B1B5]">
                            <CheckCircle2 size={13} className="text-[#FF1744] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#070607] border border-white/10 text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
