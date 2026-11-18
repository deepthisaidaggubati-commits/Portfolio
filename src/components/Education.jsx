import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const educationData = [
  {
    institution: "Vignan's Lara Institute of Technology and Science",
    degree: "B.Tech – Computer Science and Engineering (AI & ML)",
    period: "2023 – 2027",
    score: "CGPA: 9.09 / 10",
    badge: "Current / Final Year",
    isCurrent: true,
    highlights: [
      "Specialization in Artificial Intelligence, Deep Learning & Cloud Computing",
      "Elected Student Class Representative for 2 consecutive academic years",
      "Top 20 Finalist in Internal Smart India Hackathon (SIH 2026)"
    ]
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate – MPC (Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    score: "95.33%",
    badge: "Higher Secondary",
    isCurrent: false,
    highlights: [
      "Rigorous analytical grounding in Advanced Mathematics and Physics",
      "Distinction-tier academic score of 95.33%"
    ]
  },
  {
    institution: "Oxford High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2021",
    score: "10.0 / 10.0 GPA",
    badge: "Secondary School",
    isCurrent: false,
    highlights: [
      "Perfect cumulative grade point average of 10.0 / 10.0 GPA",
      "Excellence in science exhibitions and institutional leadership"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <GraduationCap size={12} className="text-[#FF1744]" />
            <span>Academic Qualifications</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            Education & <span className="text-[#FF1744]">Academics</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Scholastic distinction, analytical discipline, and sustained academic excellence.
          </motion.p>
        </div>

        {/* Education 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => sound.playHover()}
              className={`rounded-2xl p-6 bg-[#151014] border transition-all duration-300 flex flex-col justify-between group ${
                edu.isCurrent 
                  ? 'border-[#FF1744]/40 hover:border-[#FF1744]/70 shadow-md' 
                  : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                {/* Header: Badge & Period */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    edu.isCurrent 
                      ? 'bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40' 
                      : 'bg-white/5 text-[#B9B1B5] border border-white/10'
                  }`}>
                    {edu.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#B9B1B5] flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                </div>

                {/* Score Big Display */}
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2 flex items-center justify-between">
                  <span>{edu.score}</span>
                  {edu.isCurrent && <Sparkles size={16} className="text-[#FF1744]" />}
                </div>

                <h3 className="text-base font-bold font-display text-white mb-1 group-hover:text-[#FF1744] transition-colors">
                  {edu.degree}
                </h3>
                
                <p className="text-xs font-mono text-slate-300 mb-4 flex items-center gap-1.5">
                  <Building size={12} className="text-[#B9B1B5]" />
                  <span>{edu.institution}</span>
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4 pt-3 border-t border-white/5">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#B9B1B5]">
                      <span className="text-[#FF1744] font-bold">›</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-[#B9B1B5] uppercase">
                Official Credential Record
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
