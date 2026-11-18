import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Sparkles, 
  BrainCircuit, 
  Layers, 
  CloudLightning, 
  Cpu, 
  GraduationCap, 
  Trophy, 
  Users, 
  Compass, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

// Animated Number Counter Component
const AnimatedStatCounter = ({ target, decimals = 0, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1600; // ms

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easedProgress * target;
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-xl sm:text-2xl font-extrabold font-display text-white mb-0.5">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </div>
  );
};

const technicalPillars = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Developing predictive neural models, spatial-temporal Graph WaveNet forecasting, and reinforcement learning controllers for complex simulation environments.',
    icon: BrainCircuit,
    highlights: ['Graph WaveNet & SUMO', 'Reinforcement Learning (MPLight)', 'PyTorch & Scikit-learn', 'Feature Engineering']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Software Engineering',
    description: 'Building responsive, accessible web architectures in React with clean component hierarchies, backed by scalable Node.js/Express REST APIs.',
    icon: Layers,
    highlights: ['React.js Modern Hooks', 'RESTful API Services', 'State Management', 'Tailwind CSS Systems']
  },
  {
    id: 'cloud-data',
    title: 'Cloud & Data Platforms',
    description: 'Leveraging Microsoft Azure cloud services, relational MySQL schemas, NoSQL document stores, and Power BI business intelligence dashboards.',
    icon: CloudLightning,
    highlights: ['Microsoft Azure Infrastructure', 'MySQL & MongoDB Persistence', 'DAX Measures & Power BI', 'Data Pipelines']
  },
  {
    id: 'algorithms',
    title: 'Algorithmic Problem Solving',
    description: 'Analyzing computational complexity with rigorous Data Structures & Algorithms in C++, Java, and Python with a focus on optimization and maintainability.',
    icon: Cpu,
    highlights: ['Complexity Analysis O(n)', 'Trees, Graphs & Dynamic Prog', 'Object-Oriented Design', 'Clean Modular Code']
  }
];

const About = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <User size={12} className="text-[#FF1744]" />
            <span>Profile & Background</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            About <span className="text-[#FF1744]">Daggubati Deepthi Sai</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Final-year Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning.
          </motion.p>
        </div>

        {/* 4 Interactive Counter Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-12">
          {/* Stat 1: 9.09 CGPA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            onMouseEnter={() => sound.playHover()}
            className="p-4 sm:p-5 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                <GraduationCap size={16} />
              </div>
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase">Verified</span>
            </div>
            <AnimatedStatCounter target={9.09} decimals={2} suffix=" / 10" />
            <div className="text-xs font-bold text-slate-200 mb-0.5">Academic CGPA</div>
            <div className="text-[11px] font-mono text-[#B9B1B5]">B.Tech CSE (AI & ML)</div>
          </motion.div>

          {/* Stat 2: 2027 Graduation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onMouseEnter={() => sound.playHover()}
            className="p-4 sm:p-5 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                <Sparkles size={16} />
              </div>
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase">Batch</span>
            </div>
            <AnimatedStatCounter target={2027} decimals={0} suffix="" />
            <div className="text-xs font-bold text-slate-200 mb-0.5">Graduation Year</div>
            <div className="text-[11px] font-mono text-[#B9B1B5]">Vignan's Lara Institute</div>
          </motion.div>

          {/* Stat 3: Top 20 SIH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            onMouseEnter={() => sound.playHover()}
            className="p-4 sm:p-5 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                <Trophy size={16} />
              </div>
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase">Rank</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mb-0.5">
              Top 20
            </div>
            <div className="text-xs font-bold text-slate-200 mb-0.5">Internal SIH 2026</div>
            <div className="text-[11px] font-mono text-[#B9B1B5]">Smart India Hackathon</div>
          </motion.div>

          {/* Stat 4: 2 Years Class Rep */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onMouseEnter={() => sound.playHover()}
            className="p-4 sm:p-5 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744]">
                <Users size={16} />
              </div>
              <span className="text-[10px] font-mono text-[#B9B1B5] uppercase">Elected</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold font-display text-white mb-0.5">
              2 Years
            </div>
            <div className="text-xs font-bold text-slate-200 mb-0.5">Class Representative</div>
            <div className="text-[11px] font-mono text-[#B9B1B5]">Student Leadership</div>
          </motion.div>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Academic Pedigree & Leadership Dossier (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Academic Pedigree Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#151014] border border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-[#FF1744]" />
                <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                  Academic Foundation
                </h3>
              </div>
              <p className="text-xs font-mono text-[#FF1744] mb-2 font-semibold">
                B.Tech in Computer Science & Engineering (AI & ML)
              </p>
              <p className="text-xs text-[#B9B1B5] leading-relaxed mb-4">
                Vignan's Lara Institute of Technology & Science, Vadlamudi, Guntur (2023–2027). Consistently maintaining an academic cumulative GPA of <span className="text-white font-bold">9.09 / 10.0</span> with distinctions across algorithmic computing, database management, and neural systems.
              </p>
              <div className="p-2.5 rounded-xl bg-[#070607] border border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#B9B1B5]">Cumulative CGPA</span>
                <span className="text-white font-bold bg-[#FF1744]/20 px-2 py-0.5 rounded border border-[#FF1744]/40">9.09 / 10.0</span>
              </div>
            </motion.div>

            {/* Leadership Spotlight Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#151014] border border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users size={16} className="text-[#FF1744]" />
                <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                  Elected Leadership
                </h3>
              </div>
              <h4 className="text-xs font-mono text-white font-bold mb-1.5">
                Class Representative (2 Consecutive Academic Years)
              </h4>
              <p className="text-xs text-[#B9B1B5] leading-relaxed">
                Chosen by faculty and peers to represent the CSE (AI & ML) cohort. Coordinated academic schedules, facilitated transparent communication between department leadership and students, organized collaborative peer study groups, and managed technical team logistics for institutional hackathons.
              </p>
            </motion.div>

            {/* Career Goals Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#151014] border border-white/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <Compass size={16} className="text-[#FF1744]" />
                <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                  Career Goals & Trajectory
                </h3>
              </div>
              <p className="text-xs text-[#B9B1B5] leading-relaxed">
                Aiming to join forward-thinking engineering organizations as a Software Engineer or AI/ML Developer. Committed to architecting resilient distributed backends, deploying machine learning models into real-time production pipelines, and continuously mastering state-of-the-art cloud and data technologies.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Personal Narrative & Interactive Technical Specialization (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Personal Narrative Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#151014] border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#FF1744] uppercase tracking-wider flex items-center gap-2 font-semibold">
                  <Sparkles size={13} />
                  Personal Journey & Engineering Philosophy
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#B9B1B5] border border-white/10">
                  Batch 2023–2027
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#B9B1B5] leading-relaxed font-sans">
                <p>
                  I am a passionate software developer and AI/ML practitioner who believes technology should solve tangible, high-stakes human challenges. My journey in Computer Science at Vignan's Lara Institute has allowed me to establish deep foundations in Data Structures, Object-Oriented Design, and Neural Networks while actively building production-style software.
                </p>
                <p>
                  Through competitive hackathons—including securing a Top 20 finish in the Internal Smart India Hackathon '26—and virtual internships with Infosys Springboard and SmartBridge, I have honed the discipline of writing maintainable, modular code and working across the full application lifecycle.
                </p>
                <p>
                  Whether implementing multi-agent reinforcement learning algorithms in SUMO for smart traffic control, engineering heuristic scheduling engines in SchedulaX, or building interactive Power BI enterprise dashboards, I approach every project with curiosity, architectural rigor, and an uncompromising focus on user experience.
                </p>
              </div>
            </motion.div>

            {/* Interactive Technical Specialization Tabs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#151014] border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744]" />
                  Interactive Technical Specialization
                </h3>
                <span className="text-[10px] font-mono text-[#B9B1B5]">Click to explore</span>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {technicalPillars.map((pillar, idx) => {
                  const IconComp = pillar.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => {
                        sound.playClick();
                        setActivePillar(idx);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        isActive 
                          ? 'bg-white/10 border-[#FF1744]/70 text-white shadow-sm' 
                          : 'bg-[#070607] border-white/5 text-[#B9B1B5] hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <IconComp size={14} className={isActive ? 'text-[#FF1744]' : 'text-[#B9B1B5]'} />
                        <span className="text-[11px] font-bold truncate">{pillar.title.split('&')[0]}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Detail Box */}
              <div className="p-4 rounded-xl bg-[#070607] border border-white/5">
                <h4 className="text-sm font-bold font-display text-white mb-1.5 flex items-center gap-2">
                  <span className="text-[#FF1744] font-bold">›</span>
                  <span>{technicalPillars[activePillar].title}</span>
                </h4>
                <p className="text-xs text-[#B9B1B5] leading-relaxed mb-3">
                  {technicalPillars[activePillar].description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technicalPillars[activePillar].highlights.map((h, hIdx) => (
                    <span 
                      key={hIdx} 
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151014] text-slate-200 border border-white/10"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
