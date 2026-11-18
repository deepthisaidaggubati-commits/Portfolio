import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  Cloud, 
  Cpu, 
  Sparkles,
  Check,
  Layers,
  Wrench
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core Languages',
    category: 'languages',
    icon: Terminal,
    skills: [
      { name: 'Python', context: 'Primary • AI/ML, Graph WaveNet & Automation' },
      { name: 'Java', context: 'OOP Principles, Data Structures & Concurrency' },
      { name: 'C', context: 'Foundational Systems & Memory Management' },
      { name: 'C++', context: 'Algorithmic Problem Solving & High Performance' },
      { name: 'JavaScript', context: 'ES6+, Asynchronous Events & DOM Logic' }
    ],
    description: 'Algorithmic development, object-oriented systems, and asynchronous execution across languages.'
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Client Interfaces',
    category: 'software',
    icon: Layout,
    skills: [
      { name: 'HTML5', context: 'Semantic Web Structure & Accessibility Standards' },
      { name: 'CSS3', context: 'Flexbox, CSS Grid & Responsive Typography' },
      { name: 'React.js', context: 'Custom Hooks, Component Lifecycles & State Management' }
    ],
    description: 'Modern component architectures, accessible markup, responsive grid layouts, and client-side routing.'
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Services & Routing',
    category: 'software',
    icon: Server,
    skills: [
      { name: 'Node.js', context: 'Event-driven Asynchronous Server Execution' },
      { name: 'Express.js', context: 'RESTful API Routing, Middleware & Controllers' },
      { name: 'REST APIs', context: 'HTTP Contracts, JSON Telemetry & Endpoints' }
    ],
    description: 'Scalable server design, route middleware, request validation, and clean RESTful endpoint contracts.'
  },
  {
    id: 'database',
    title: 'Database Systems',
    subtitle: 'Data Persistence',
    category: 'data',
    icon: Database,
    skills: [
      { name: 'MySQL', context: 'Relational Schemas, Constraints, Joins & Queries' },
      { name: 'MongoDB', context: 'Document-oriented NoSQL Collections & Aggregations' }
    ],
    description: 'Relational schema design, normalization, indexing, and flexible NoSQL document storage.'
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    subtitle: 'Intelligence & Analytics',
    category: 'ai',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', context: 'Supervised, Unsupervised & Ensemble Algorithms' },
      { name: 'Data Analysis', context: 'Exploratory Workflows, Cleansing & Statistical Analysis' },
      { name: 'NumPy', context: 'Vectorized Array Operations & Linear Algebra' },
      { name: 'Pandas', context: 'DataFrame Transformations, Groupby & ETL Pipelines' },
      { name: 'Scikit-learn', context: 'Model Training, Cross-Validation & Hyperparameter Tuning' },
      { name: 'Power BI', context: 'DAX Measures, Data Modeling & Interactive KPI Dashboards' }
    ],
    description: 'Statistical modeling, exploratory data analysis, neural forecasting, and enterprise dashboards.'
  },
  {
    id: 'cloud-tools',
    title: 'Cloud & Tooling',
    subtitle: 'Infrastructure & DevOps',
    category: 'tools',
    icon: Cloud,
    skills: [
      { name: 'Azure', context: 'Cloud Compute, Resource Groups & Azure Security' },
      { name: 'Git', context: 'Distributed Version Control, Branching & Git Flow' },
      { name: 'GitHub', context: 'Collaborative Code Review, Pull Requests & Releases' },
      { name: 'VS Code', context: 'Primary Development Environment & Debugging' },
      { name: 'Jupyter Notebook', context: 'Data Science Exploration & Model Prototyping' }
    ],
    description: 'Cloud resource provisioning, distributed Git workflows, and developer productivity tools.'
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    subtitle: 'Foundations & Rigor',
    category: 'foundations',
    icon: Cpu,
    skills: [
      { name: 'DSA', context: 'Data Structures, Graph Traversal & Dynamic Programming' },
      { name: 'OOP', context: 'Encapsulation, Inheritance, Polymorphism & Modularity' },
      { name: 'DBMS', context: 'ACID Properties, Transactions & Relational Algebra' },
      { name: 'Operating Systems', context: 'Process Scheduling, Concurrency & Virtual Memory' }
    ],
    description: 'Underlying computer science theory, complexity optimization, and system software principles.'
  }
];

const filterTabs = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages' },
  { id: 'software', label: 'Full Stack & APIs' },
  { id: 'data', label: 'Databases' },
  { id: 'ai', label: 'AI & Analytics' },
  { id: 'tools', label: 'Cloud & Tools' },
  { id: 'foundations', label: 'Core CS' },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSkillDetail, setActiveSkillDetail] = useState(null);

  const filteredCategories = skillCategories.filter(cat => {
    if (activeFilter === 'all') return true;
    return cat.category === activeFilter;
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <Code2 size={12} className="text-[#FF1744]" />
            <span>Interactive Tech Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            Technical <span className="text-[#FF1744]">Skills & Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Filter by discipline to explore verified capabilities across software engineering, algorithms, AI, and cloud tooling.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#151014] border border-white/10">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveFilter(tab.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/15 shadow-sm'
                      : 'text-[#B9B1B5] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredCategories.map((group) => {
              const IconComp = group.icon;
              return (
                <motion.div
                  layout
                  key={group.id}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => sound.playHover()}
                  className="p-5 rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Icon, Category Name, Subtitle */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF1744] group-hover:bg-[#FF1744]/10 transition-colors">
                        <IconComp size={16} />
                      </div>
                      <span className="text-[10px] font-mono text-[#B9B1B5] uppercase">
                        {group.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-[#FF1744] transition-colors">
                      {group.title}
                    </h3>
                    
                    <p className="text-[11px] text-[#B9B1B5] mb-4 leading-relaxed font-sans">
                      {group.description}
                    </p>
                  </div>

                  {/* Interactive Skills Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {group.skills.map((skill, sIdx) => {
                      const isHovered = activeSkillDetail?.name === skill.name;
                      return (
                        <div 
                          key={sIdx}
                          className="relative group/pill"
                          onMouseEnter={() => setActiveSkillDetail(skill)}
                          onMouseLeave={() => setActiveSkillDetail(null)}
                        >
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono cursor-pointer transition-all inline-block ${
                              isHovered
                                ? 'bg-[#FF1744] text-white shadow-sm'
                                : 'bg-[#070607] border border-white/10 text-slate-200 hover:border-[#FF1744]/50'
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Live Contextual Detail Inspector Bar */}
        <div className="mt-6 p-4 rounded-xl bg-[#151014] border border-white/10 flex items-center justify-between min-h-[50px]">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#FF1744] font-bold">› INSPECTOR:</span>
            {activeSkillDetail ? (
              <span className="text-white">
                <span className="font-bold text-[#FF1744]">{activeSkillDetail.name}</span> — {activeSkillDetail.context}
              </span>
            ) : (
              <span className="text-[#B9B1B5]">Hover over any skill tag above to view its real-world engineering application</span>
            )}
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#7E777B]">
            Verified Experience • Zero Inventions
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
