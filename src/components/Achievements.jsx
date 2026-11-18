import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Users2, Mic, Code2, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const achievementsList = [
  {
    title: 'Internal Smart India Hackathon 2026',
    rank: 'Top 20 Finalist',
    category: 'National Hackathon',
    icon: Trophy,
    description: 'Secured Top 20 rank out of hundreds of institutional submissions for innovative AI-driven infrastructure and intelligent automation problem solving.',
    tags: ['SIH 2026', 'AI Innovation', 'Top 20 Finalist']
  },
  {
    title: 'Academic Performance & Distinction',
    rank: '9.09 / 10 CGPA',
    category: 'B.Tech CSE (AI & ML)',
    icon: GraduationCap,
    description: "Maintained top-tier cumulative academic ranking across semesters at Vignan's Lara Institute of Technology and Science.",
    tags: ['Academic Merit', 'Distinction', '9.09 CGPA']
  },
  {
    title: 'Class Representative Leadership',
    rank: '2 Consecutive Years',
    category: 'Student Governance',
    icon: Users2,
    description: 'Elected by faculty and students to coordinate academic schedules, advocate for peer cohorts, and manage institutional communications.',
    tags: ['Leadership', 'Cohort Management', '2 Years']
  },
  {
    title: 'Technical Project Development & Leadership',
    rank: 'Lead Developer',
    category: 'Engineering & Innovation',
    icon: Code2,
    description: 'Spearheaded end-to-end development on Traffic Digital Twins, SchedulaX, and Infant Distress Monitoring, leading collaborative developer sprints.',
    tags: ['Project Lead', 'AI Architecture', 'Open Source']
  },
  {
    title: 'College Event Hosting & Coordination',
    rank: 'Anchor & Lead Host',
    category: 'Public Speaking',
    icon: Mic,
    description: "Scripted and anchored college technical symposiums, fresher's, and farewell events, commanding stages before 1,000+ attendees.",
    tags: ['Stage Hosting', 'Public Speaking', 'Event Mgmt']
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <Trophy size={12} className="text-[#FF1744]" />
            <span>Honors & Distinctions</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            Key <span className="text-[#FF1744]">Achievements</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Recognitions in competitive hackathons, academic merit, student governance, and technical leadership.
          </motion.p>
        </div>

        {/* Achievements Grid with Framer Motion Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onMouseEnter={() => sound.playHover()}
                className="rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 p-6 flex flex-col justify-between transition-all duration-300 group shadow-md"
              >
                <div>
                  {/* Top Row: Icon & Rank */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#FF1744] flex items-center justify-center transition-colors group-hover:bg-[#FF1744]/10">
                      <IconComp size={18} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FF1744]/20 text-[#FF1744] border border-[#FF1744]/40">
                      {item.rank}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#B9B1B5] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-[#FF1744] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#B9B1B5] leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#070607] border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
