import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Github, 
  ChevronRight,
  ShieldAlert,
  Car,
  CalendarCheck,
  HeartPulse,
  BarChart3,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import { sound } from '../utils/soundEffects';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Simulation' },
  { id: 'fullstack', label: 'Full Stack & Automation' },
  { id: 'analytics', label: 'Data & Analytics' },
];

const projectsList = [
  {
    id: 'traffic-digital-twin',
    number: '01',
    category: 'ai',
    title: 'AI-Driven Traffic Digital Twin Framework',
    subtitle: 'Urban Mobility Simulation & Adaptive Signal Control',
    badge: 'Flagship AI Simulation',
    icon: Car,
    image: '/assets/project-traffic.png',
    tech: ['Graph WaveNet', 'MPLight', 'SUMO', 'Python', 'Reinforcement Learning'],
    description: 'An AI-driven traffic simulation and digital twin framework that models urban corridor dynamics in SUMO, forecasts multi-intersection congestion using Graph WaveNet, and explores multi-agent reinforcement learning (MPLight) for intelligent signal control.',
    overview: 'Urban traffic congestion causes critical transit delays and excessive vehicular emissions. This digital twin framework simulates complex arterial networks in SUMO via TraCI. Real-time velocity, density, and queue telemetry are processed through spatial-temporal graph neural networks and reinforcement learning agents to optimize phase switching dynamically.',
    keyFeatures: [
      'SUMO micro-simulation integration with Python TraCI interface',
      'Graph WaveNet spatial-temporal dependency forecasting across arterial nodes',
      'Adaptive reinforcement learning policy exploration for phase switching',
      'Scenario evaluations for peak-hour bottlenecks and emergency vehicle routing'
    ],
    github: 'https://github.com/deepthisaidaggubati-commits',
    featured: true
  },
  {
    id: 'schedulax',
    number: '02',
    category: 'fullstack',
    title: 'SchedulaX',
    subtitle: 'Intelligent Timetable & Faculty Allocation System',
    badge: 'Full Stack & Algorithms',
    icon: CalendarCheck,
    image: '/assets/project-schedulax.png',
    tech: ['Python', 'React.js', 'Node.js', 'Constraint Satisfaction'],
    description: 'An intelligent scheduling system that automates the generation of clash-free academic timetables, manages faculty availability matrices, and provides dynamic substitute assignment upon sudden instructor leave.',
    overview: 'Academic institutions frequently struggle with classroom conflicts and unplanned faculty absences. SchedulaX resolves multi-variable constraint satisfaction problems using heuristic optimization to produce conflict-free schedule matrices and instantaneous substitute reallocation.',
    keyFeatures: [
      'Clash-free lecture scheduling across departments and shared lab facilities',
      'Faculty availability matrix and classroom capacity constraints',
      'Automated substitute assignment when teachers report absence',
      'Zero room-overlap scheduling engine with exportable timetables'
    ],
    github: 'https://github.com/deepthisaidaggubati-commits',
    featured: false
  },
  {
    id: 'baby-monitoring-system',
    number: '03',
    category: 'ai',
    title: 'Baby Monitoring System',
    subtitle: 'Intelligent Infant Distress & Wellness Detection',
    badge: 'Computer Vision & Audio ML',
    icon: HeartPulse,
    image: '/assets/project-baby-monitor.png',
    tech: ['Python', 'Machine Learning', 'Computer Vision', 'Audio Processing'],
    description: 'An intelligent monitoring system combining image and acoustic signal processing to detect infant distress, irregular posture changes, and hazardous sleeping positions in real time.',
    overview: 'A dual-modal wellness surveillance platform combining computer vision pose analysis with audio frequency classification. Continuously monitors video feeds for hazardous sleeping postures while analyzing audio spectrograms to differentiate distress cries from ambient nursery noises.',
    keyFeatures: [
      'Computer vision posture tracking to detect dangerous roll-over positions',
      'Acoustic signal spectrogram feature extraction for distress cry detection',
      'Automated real-time alert engine with low false-alarm thresholding',
      'Local edge-processing architecture prioritizing family privacy'
    ],
    github: 'https://github.com/deepthisaidaggubati-commits',
    featured: false
  },
  {
    id: 'threatlens-ai',
    number: '04',
    category: 'ai',
    title: 'ThreatLens AI',
    subtitle: 'AI-Powered Malware Classification Platform',
    badge: 'Cybersecurity & Cloud',
    icon: ShieldAlert,
    image: '/assets/project-threatlens.png',
    tech: ['EMBER Dataset', 'XGBoost', 'YARA Rules', 'Python', 'Azure'],
    description: 'An AI-powered malware classification system combining machine learning and rule-based detection techniques to analyze and categorize malicious PE binaries using the EMBER benchmark dataset.',
    overview: 'Engineered as part of the Infosys Springboard Virtual Internship initiative. Evaluates 1.1 million portable executable files from the benchmark EMBER dataset, combining XGBoost gradient-boosted decision trees with custom YARA pattern matching rules to identify binary threats and evasion techniques.',
    keyFeatures: [
      'EMBER 1.1M PE binary benchmark dataset feature extraction and preprocessing',
      'XGBoost gradient boosting classifier for high-accuracy static detection',
      'YARA rule matching for targeted signature classification and IOC identification',
      'Cloud deployment model designed on Microsoft Azure infrastructure'
    ],
    github: 'https://github.com/deepthisaidaggubati-commits',
    featured: false
  },
  {
    id: 'customer-churn-powerbi',
    number: '05',
    category: 'analytics',
    title: 'Customer Churn Analytics',
    subtitle: 'Business Intelligence & Retention Diagnostics',
    badge: 'Data Visualization & BI',
    icon: BarChart3,
    image: '/assets/powerbi-dashboard.png',
    tech: ['Power BI', 'DAX Measures', 'Data Modeling', 'Excel Analytics'],
    description: 'An interactive enterprise Power BI dashboard providing deep diagnostics into customer attrition patterns, demographic churn drivers, contract longevity, and revenue impact.',
    overview: 'Developed to analyze customer attrition drivers for subscription-based telecommunications services. Built with custom DAX calculations, relational data schemas, and interactive parameter slicers, isolating high-risk customer segments to enable strategic retention campaigns.',
    keyFeatures: [
      'Interactive executive KPI dashboard tracking churn rate and revenue at risk',
      'DAX calculated measures segmenting tenure, contract type, and payment methods',
      'Cohort behavioral analysis and correlation drill-downs',
      'Actionable retention insights supported by genuine project visual analytics'
    ],
    github: 'https://github.com/deepthisaidaggubati-commits',
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsList.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#070607]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151014] border border-white/10 text-xs font-mono text-[#B9B1B5] uppercase tracking-wider mb-2.5"
          >
            <FolderGit2 size={12} className="text-[#FF1744]" />
            <span>Interactive Portfolio Gallery</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-2"
          >
            Featured <span className="text-[#FF1744]">Engineering Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#B9B1B5] max-w-2xl text-xs sm:text-sm font-sans"
          >
            Filter by domain to inspect technical architectures in AI simulation, machine learning, scheduling algorithms, and enterprise analytics.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#151014] border border-white/10">
            {projectCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveFilter(cat.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/15 shadow-sm'
                      : 'text-[#B9B1B5] hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid with Framer Motion Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-[#151014] border border-white/10 hover:border-[#FF1744]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* 16:9 Image Preview Container with Hover Zoom & Overlay */}
                <div className="relative aspect-video overflow-hidden bg-[#070607]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151014] via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Project Number Watermark */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#070607]/85 backdrop-blur-md border border-white/10 font-mono text-xs font-bold text-white">
                    PROJECT {project.number}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#070607]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-[#FF1744] font-semibold">
                    {project.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-1.5 group-hover:text-[#FF1744] transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-[#FF1744] mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-[#B9B1B5] leading-relaxed mb-4 line-clamp-3 font-sans">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#070607] border border-white/10 text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-[#FF1744] transition-colors"
                    >
                      <span>Case Study Deep Dive</span>
                      <ChevronRight size={14} />
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="p-2 rounded-lg bg-[#070607] border border-white/10 text-[#B9B1B5] hover:text-white hover:border-[#FF1744]/40 transition-all"
                      title="View GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
