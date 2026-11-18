export const personalInfo = {
  name: "Daggubati Deepthi Sai",
  title: "AI & ML Engineer • Full Stack Developer",
  roles: [
    "Software Developer",
    "AI & ML Enthusiast",
    "Full Stack Developer",
    "Aspiring Cloud & Data Engineer"
  ],
  tagline: "Turning Ideas Into Intelligent Digital Experiences.",
  subTagline: "Final-year B.Tech CSE (AI & ML) student at Vignan's Lara Institute with a 9.09 CGPA. Passionate about architecting intelligent systems, robust full-stack web applications, and data-driven solutions.",
  email: "deepthisaidaggubati@gmail.com",
  phone: "+91 93819 71483",
  location: "Andhra Pradesh, India",
  status: "Open to Full-Time Roles & High-Impact Internships",
  resumeUrl: "/Deepthi_Resume.pdf",
  socials: {
    github: "https://github.com/deepthisaidaggubati-commits",
    linkedin: "https://linkedin.com/in/deepthisai-daggubati-05328b398",
    email: "mailto:deepthisaidaggubati@gmail.com",
    instagram: "https://instagram.com/deepthisai_daggubati",
  },
  stats: [
    { label: "CGPA (B.Tech)", value: "9.09/10", icon: "GraduationCap", detail: "Top tier academic ranking" },
    { label: "SIH 2026", value: "Top 20", icon: "Trophy", detail: "Smart India Hackathon internal" },
    { label: "Core Projects", value: "6+", icon: "Code2", detail: "AI/ML & Full-Stack systems" },
    { label: "Certifications", value: "10+", icon: "Award", detail: "NPTEL, Infosys, Cisco, Azure" },
  ]
};

export const aboutData = {
  summary: `I am a final-year Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning at Vignan's Lara Institute of Technology and Science. Driven by a relentless curiosity for how intelligent software reshapes society, I bridge the gap between machine learning models and scalable full-stack engineering.`,
  detailed: [
    `With an academic standing of 9.09 CGPA and multiple hands-on internships across Infosys Springboard and SmartBridge, I have honed expertise in building predictive AI pipelines, deep learning architectures, and responsive web platforms.`,
    `My work spans high-concurrency traffic digital twins using Graph WaveNet and SUMO, cognitive retention models for adaptive learning (StudyTwin AI), and cyber threat intelligence detection engines trained on millions of portable executable signatures (ThreatLens AI).`,
    `Beyond code, I have served as Class Representative for two consecutive years, steering collaborative cohorts and anchoring flagship institutional symposiums.`
  ],
  pillars: [
    {
      title: "Intelligent Systems & AI",
      description: "Developing predictive neural networks, reinforcement learning simulations, and NLP workflows tailored for real-world automation.",
      icon: "BrainCircuit",
      accent: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30"
    },
    {
      title: "Full Stack Architecture",
      description: "Crafting end-to-end web apps with React.js, Node.js, Express, and modern styling architectures that prioritize micro-interactions and performance.",
      icon: "Layers",
      accent: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    },
    {
      title: "Cloud & Data Engineering",
      description: "Harnessing Microsoft Azure, distributed pipelines, and structured databases (MySQL, MongoDB) to reliably store and ingest data.",
      icon: "CloudLightning",
      accent: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30"
    },
    {
      title: "Algorithmic Rigor",
      description: "Strong command of Data Structures, Algorithms, and Object-Oriented Design to write clean, time-efficient, and maintainable software.",
      icon: "Cpu",
      accent: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-500/30"
    }
  ],
  education: [
    {
      institution: "Vignan's Lara Institute of Technology & Science",
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      period: "2023 – 2027",
      score: "CGPA: 9.09 / 10",
      highlights: [
        "Specialization in Artificial Intelligence, Deep Learning & Cloud Computing",
        "Elected as Student Class Representative for 2 consecutive years",
        "Top 20 Finalist in Internal Smart India Hackathon (SIH 2026)"
      ],
      current: true
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate Education (MPC - Mathematics, Physics, Chemistry)",
      period: "2021 – 2023",
      score: "95.33%",
      highlights: ["Excellence in Mathematics and Physics analytical reasoning"]
    },
    {
      institution: "Oxford High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2021",
      score: "GPA: 10.0 / 10",
      highlights: ["Valedictorian tier academic record with perfect cumulative grade point"]
    }
  ]
};

export const skillsCategories = [
  {
    id: "all",
    label: "All Skills"
  },
  {
    id: "languages",
    label: "Languages"
  },
  {
    id: "aiml",
    label: "AI & Machine Learning"
  },
  {
    id: "frontend",
    label: "Frontend & UI"
  },
  {
    id: "backend-db",
    label: "Backend & Databases"
  },
  {
    id: "cloud-tools",
    label: "Cloud & Tools"
  }
];

export const skillsList = [
  { name: "Python", category: "languages", level: 92, icon: "FileCode2", tag: "Primary", highlight: true },
  { name: "Java", category: "languages", level: 88, icon: "Coffee", tag: "DSA & OOP", highlight: true },
  { name: "C / C++", category: "languages", level: 85, icon: "Terminal", tag: "Core Systems" },
  { name: "JavaScript (ES6+)", category: "languages", level: 86, icon: "Braces", tag: "Web Logic" },

  { name: "Machine Learning", category: "aiml", level: 90, icon: "Brain", tag: "Scikit-Learn, XGBoost", highlight: true },
  { name: "Deep Learning & NLP", category: "aiml", level: 84, icon: "Sparkles", tag: "Neural Networks" },
  { name: "Graph WaveNet & SUMO", category: "aiml", level: 88, icon: "GitFork", tag: "Traffic Sim & RL", highlight: true },
  { name: "Data Analysis & Pandas", category: "aiml", level: 90, icon: "BarChart3", tag: "NumPy, Seaborn" },

  { name: "React.js", category: "frontend", level: 88, icon: "Atom", tag: "Components & Hooks", highlight: true },
  { name: "HTML5 & Semantic Web", category: "frontend", level: 95, icon: "Layout", tag: "Structure" },
  { name: "CSS3 & Tailwind CSS", category: "frontend", level: 92, icon: "Palette", tag: "Modern Styling", highlight: true },
  { name: "Responsive UI/UX", category: "frontend", level: 90, icon: "Smartphone", tag: "Cross-Platform" },

  { name: "Node.js & Express", category: "backend-db", level: 82, icon: "Server", tag: "RESTful APIs" },
  { name: "MySQL", category: "backend-db", level: 88, icon: "Database", tag: "Relational Queries", highlight: true },
  { name: "MongoDB", category: "backend-db", level: 84, icon: "Boxes", tag: "NoSQL Collections" },
  { name: "Data Structures & Algorithms", category: "backend-db", level: 90, icon: "Binary", tag: "Optimized Solving", highlight: true },

  { name: "Microsoft Azure", category: "cloud-tools", level: 85, icon: "Cloud", tag: "Cloud Services", highlight: true },
  { name: "Git & GitHub", category: "cloud-tools", level: 90, icon: "GitBranch", tag: "Version Control", highlight: true },
  { name: "Power BI", category: "cloud-tools", level: 86, icon: "PieChart", tag: "Visual Dashboards" },
  { name: "VS Code & Postman", category: "cloud-tools", level: 92, icon: "Wrench", tag: "Dev Environment" }
];

export const projectsData = [
  {
    id: "traffic-digital-twin",
    title: "AI-Driven Traffic Digital Twin Framework",
    subtitle: "Urban Congestion Mitigation & Signal Synchronization",
    badge: "AI & Simulation",
    status: "Active / Advanced Research",
    featured: true,
    image: "/assets/deepthi-profile.png",
    overview: "An intelligent urban mobility simulation and digital twin framework designed to eliminate vehicle bottlenecking. Fuses spatio-temporal Graph WaveNet traffic velocity forecasting with MPLight multi-agent reinforcement learning for adaptive signal actuation in real-time SUMO environments.",
    description: "Built using Simulation of Urban MObility (SUMO) and TraCI Python client. Synthesizes sensor telemetry into graph structures where nodes represent intersections and edges represent arterial traffic links. Graph WaveNet dynamically predicts traffic density 15 minutes ahead, giving the RL agents preemptive control to prevent queue spillovers.",
    metrics: [
      { label: "Delay Reduction", value: "-34.2%" },
      { label: "Throughput Boost", value: "+28.7%" },
      { label: "Forecast Accuracy", value: "94.6%" },
      { label: "Engine", value: "SUMO + TraCI" }
    ],
    tech: ["Python", "Graph WaveNet", "MPLight RL", "SUMO Simulation", "TraCI", "PyTorch"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "SUMO Micro-Simulation Grid with multi-phase traffic lights",
      "Spatio-Temporal Graph Convolutional Network (Graph WaveNet)",
      "MPLight Multi-Agent Reinforcement Learning Controller",
      "Dynamic Pressure and Phase Allocation Policy engine"
    ]
  },
  {
    id: "studytwin-ai",
    title: "StudyTwin AI – Cognitive Retention Platform",
    subtitle: "Adaptive Learning Engine & Spaced Repetition",
    badge: "Machine Learning",
    status: "Featured Platform",
    featured: true,
    overview: "An AI-powered personalized educational ecosystem engineered to combat learner attrition. Implements an algorithmic cognitive forgetting-risk model to assess concept decay and dynamically calibrate review intervals.",
    description: "StudyTwin AI tracks student comprehension through micro-assessments, difficulty curves, and response latency. By modeling Ebbinghaus forgetting curves with tailored machine learning regressors, the platform alerts students before memory retention drops below optimal recall thresholds.",
    metrics: [
      { label: "Recall Retention", value: "+46%" },
      { label: "Model AUC", value: "0.912" },
      { label: "Curriculum Adaptation", value: "Real-time" },
      { label: "Architecture", value: "ML + React" }
    ],
    tech: ["Python", "Scikit-Learn", "React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "Knowledge Tracing Bayesian / Regressor module",
      "Dynamic spaced-repetition scheduling algorithm",
      "Interactive learner dashboard with retention heatmaps",
      "RESTful API service for performance telemetry"
    ]
  },
  {
    id: "threatlens-ai",
    title: "ThreatLens AI – Cyber Threat Intelligence",
    subtitle: "EMBER-Trained Portable Executable Malware Classifier",
    badge: "Cybersecurity & AI",
    status: "Infosys Springboard Flagship",
    featured: true,
    overview: "An enterprise-grade cyber threat intelligence platform that screens and classifies malicious binaries in milliseconds. Developed and evaluated during the Infosys Springboard Virtual Internship 7.0 program.",
    description: "Harnesses the EMBER benchmark dataset of over 1.1 million Windows PE files. Combines gradient-boosted decision trees (XGBoost) with custom YARA pattern matching rules for static binary analysis, extracting entropy, section headers, imported DLLs, and bytecode histograms.",
    metrics: [
      { label: "Test Accuracy", value: "98.3%" },
      { label: "Inference Time", value: "<45ms" },
      { label: "Dataset Scale", value: "1.1M PE Files" },
      { label: "False Positive Rate", value: "<0.8%" }
    ],
    tech: ["Python", "XGBoost", "YARA Rules", "PEFile", "EMBER Dataset", "Azure"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "PE Header & Section Entropy feature extractor",
      "Lightweight YARA rule-matching signature engine",
      "XGBoost Gradient Boosting predictive classifier",
      "Automated threat severity rating & mitigation report generation"
    ]
  },
  {
    id: "baby-monitoring-system",
    title: "Intelligent Infant Distress Monitoring System",
    subtitle: "Multi-Modal Audio & Visual Wellness Detection",
    badge: "Computer Vision & ML",
    status: "Completed",
    featured: true,
    overview: "A non-invasive automated nursery monitoring system designed to detect infant distress, irregular movement patterns, and crying episodes with instant automated alerts for parents and caregivers.",
    description: "Fuses computer vision video streams with acoustic spectrogram classification. Detects rolling over into hazardous prone positions and distinguishes distress cries from ambient room acoustics using convolutional audio classification models.",
    metrics: [
      { label: "Cry Detection F1", value: "0.93" },
      { label: "Alert Dispatch", value: "<1.2s" },
      { label: "Modalities", value: "Audio + Video" },
      { label: "Latency", value: "Edge-Ready" }
    ],
    tech: ["Python", "OpenCV", "Librosa", "TensorFlow / Keras", "Twilio API", "NumPy"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "Real-time video posture & roll-over bounding tracker",
      "MFCC audio spectrogram extraction with Librosa",
      "Instantaneous SMS / Push emergency dispatcher",
      "Local edge processing mode for privacy and zero cloud latency"
    ]
  },
  {
    id: "schedulax",
    title: "SchedulaX – Faculty & Timetable Allocation Engine",
    subtitle: "Clash-Free Academic Scheduling Algorithm",
    badge: "Full Stack & Algorithms",
    status: "Academic Innovation",
    featured: false,
    overview: "An automated scheduling platform that generates multi-department clash-free course timetables while seamlessly handling dynamic teacher absences with smart substitute reallocation.",
    description: "Eliminates room overlapping and faculty lecture clashes by leveraging constraint satisfaction optimization algorithms. Provides an intuitive admin interface for academic coordinators to review schedules.",
    metrics: [
      { label: "Clash Conflicts", value: "0" },
      { label: "Generation Time", value: "<3.5s" },
      { label: "Substitutions", value: "Automated" }
    ],
    tech: ["Python", "Constraint Programming", "Flask", "SQLite", "HTML5/CSS3"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "Constraint Satisfaction Problem (CSP) Solver core",
      "Faculty skill-matrix substitute matching logic",
      "PDF & Excel export generation module"
    ]
  },
  {
    id: "customer-churn-powerbi",
    title: "Customer Churn Intelligence & Analytics",
    subtitle: "Predictive Analytics & Power BI Executive Dashboard",
    badge: "Data Visualization",
    status: "Completed",
    featured: false,
    image: "/assets/powerbi-dashboard.png",
    overview: "Comprehensive telecommunications churn predictive analytics workflow featuring exploratory data analysis in Python and a multi-page interactive Power BI executive dashboard.",
    description: "Evaluated 7,000+ customer profiles across contract duration, payment methods, and monthly charges to pinpoint root causes behind churn spikes, helping business leaders prioritize retention incentives.",
    metrics: [
      { label: "Analyzed Records", value: "7,043" },
      { label: "Retention Impact", value: "+18%" },
      { label: "BI Views", value: "4 Executive Pages" }
    ],
    tech: ["Power BI", "Python", "Pandas", "DAX", "Seaborn", "Excel"],
    github: "https://github.com/deepthisaidaggubati-commits",
    demo: null,
    architecture: [
      "Data ingestion, outlier cleaning, and categorical one-hot encoding",
      "DAX calculated measures and customer tenure cohort grouping",
      "Interactive KPI drill-down dashboard with predictive risk filters"
    ]
  }
];

export const experienceData = [
  {
    id: "saiket",
    role: "Data Visualization Intern",
    company: "SaiKet Systems",
    location: "Remote / Hyderabad",
    period: "Feb 2026",
    badge: "Internship",
    description: "Spearheaded interactive dashboard development, business metric transformation, and automated reporting workflows for client stakeholders.",
    contributions: [
      "Engineered automated Power BI reports connecting directly to live transactional data sources.",
      "Formulated complex DAX measures to calculate customer cohort retention, monthly churn rates, and KPI performance indicators.",
      "Constructed intuitive visual hierarchies that decreased executive reporting turnaround times by 40%."
    ],
    skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "Excel"]
  },
  {
    id: "infosys-springboard",
    role: "Virtual Internship 7.0 (B2) – AI & Cloud",
    company: "Infosys Springboard",
    location: "Virtual",
    period: "Jul 2026 – Sep 2026",
    badge: "Verified Internship",
    description: "Selected for rigorous virtual internship program focused on Enterprise AI and Cloud Security intelligence.",
    contributions: [
      "Led technical development on 'AI-Powered Malware Classification and Cybersecurity Threat Intelligence Platform' (ThreatLens AI).",
      "Applied machine learning classification models on the 1.1M record EMBER binary dataset to detect zero-day exploits.",
      "Gained hands-on deployment exposure to Microsoft Azure cloud infrastructure, resource groups, and secure blob containers.",
      "Delivered complete engineering documentation and technical project defense within program deadlines."
    ],
    skills: ["Python", "XGBoost", "Microsoft Azure", "Cloud Computing", "Threat Intelligence"]
  },
  {
    id: "smartbridge",
    role: "AI & ML Intern",
    company: "SmartBridge Educational Services",
    location: "Virtual",
    period: "Jul 2026",
    badge: "120 Hours Intensive",
    description: "Completed intensive 120-hour technical internship spanning exploratory data engineering and model evaluation.",
    contributions: [
      "Built, trained, and evaluated supervised and unsupervised machine learning algorithms on diverse industry datasets.",
      "Conducted thorough exploratory data analysis (EDA), handling missing attributes, feature scaling, and correlation studies.",
      "Collaborated in agile peer sprints to document and present predictive model performance metrics."
    ],
    skills: ["Machine Learning", "Data Analysis", "Python", "Scikit-Learn", "Model Evaluation"]
  }
];

export const achievementsData = [
  {
    title: "Internal Smart India Hackathon (SIH 2026)",
    rank: "Top 20 Finalist",
    category: "Hackathon & Innovation",
    icon: "Trophy",
    year: "2026",
    description: "Selected among the Top 20 teams out of hundreds of institutional submissions for ideating and prototyping an AI-driven smart infrastructure solution.",
    tags: ["SIH 2026", "National Hackathon", "AI Innovation"]
  },
  {
    title: "Academic Excellence Distinction",
    rank: "9.09 / 10 CGPA",
    category: "Academic Merit",
    icon: "GraduationCap",
    year: "2023 – 2027",
    description: "Maintained a top-tier cumulative grade point average of 9.09 in B.Tech CSE (AI & ML) at Vignan's Lara Institute of Technology & Science.",
    tags: ["Top Tier", "B.Tech CSE (AI & ML)", "Vignan's Lara"]
  },
  {
    title: "Class Representative Leadership",
    rank: "2 Consecutive Years",
    category: "Leadership & Governance",
    icon: "Users2",
    year: "2024 – 2026",
    description: "Elected by faculty and peers to represent the CSE (AI & ML) cohort, coordinating academic schedules, resolving student matters, and liaising with department chairs.",
    tags: ["Leadership", "Student Advocacy", "Coordination"]
  },
  {
    title: "Flagship Event Anchor & Stage Lead",
    rank: "Host & Coordinator",
    category: "Public Speaking & Event Mgmt",
    icon: "Mic",
    year: "2024 – 2026",
    description: "Hosted institutional flagship events including college fresher's and farewell programs, authoring event scripts and coordinating stage operations for 1,000+ attendees.",
    tags: ["Anchoring", "Communication", "Event Management"]
  },
  {
    title: "Flipkart Runway & TCS CodeVita S13",
    rank: "National Competitor",
    category: "Coding & Competitions",
    icon: "Sparkles",
    year: "2025 – 2026",
    description: "Participated in high-stakes competitive programming rounds testing algorithmic efficiency, problem-solving, and time-constrained code execution.",
    tags: ["CodeVita", "Competitive Coding", "Flipkart Runway"]
  }
];

export const certificationsData = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "aiml",
    badge: "Elite / Gold Standard",
    date: "2025",
    description: "Comprehensive study of supervised, unsupervised learning, statistical decision theory, linear classifiers, SVMs, and neural models.",
    verified: true
  },
  {
    title: "Data Structures & Algorithms Using Java",
    issuer: "NPTEL (IIT)",
    category: "core",
    badge: "Core Engineering",
    date: "2025",
    description: "Advanced algorithmic complexity analysis, linked lists, binary trees, heaps, graphs, sorting algorithms, and hash tables.",
    verified: true
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "cloud",
    badge: "Infrastructure",
    date: "2026",
    description: "Virtualization, cloud architectures, distributed storage, resource provisioning, and cloud security frameworks.",
    verified: true
  },
  {
    title: "Microsoft Azure & Cloud Technologies",
    issuer: "Infosys Springboard",
    category: "cloud",
    badge: "Cloud Certified",
    date: "2026",
    description: "Hands-on foundation in Azure compute, virtual networks, storage, identity management, and cloud security standards.",
    verified: true
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Cisco Networking Academy",
    category: "aiml",
    badge: "Global Cisco Credential",
    date: "2026",
    description: "Core paradigms of machine intelligence, reasoning, machine learning applications, and ethical AI deployment.",
    verified: true
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "core",
    badge: "Security",
    date: "2026",
    description: "Principles of network defense, confidentiality, integrity, availability, threat detection, and mitigation strategies.",
    verified: true
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "data",
    badge: "Data",
    date: "2026",
    description: "Data lifecycle, statistical exploration, data storytelling, and transformation fundamentals.",
    verified: true
  },
  {
    title: "Python Programming Fundamentals",
    issuer: "Infosys Springboard",
    category: "languages",
    badge: "Programming",
    date: "2025",
    description: "Object-oriented programming, data structures, exception handling, and standard library module development.",
    verified: true
  },
  {
    title: "Power BI Workshop & Interactive Visuals",
    issuer: "Industry Workshop",
    category: "data",
    badge: "Workshop",
    date: "2026",
    description: "Interactive data visualization, DAX calculated columns, relationships, and business intelligence dashboards.",
    verified: true
  },
  {
    title: "Deloitte Cybersecurity Simulation",
    issuer: "Deloitte (Forage)",
    category: "core",
    badge: "Industry Simulation",
    date: "2026",
    description: "Practical simulation of incident response, malware analysis, and client security recommendations.",
    verified: true
  }
];

export const terminalCommands = {
  help: [
    "Available commands in deepthi-shell v2.4:",
    "  whoami       - Display personal introduction and background",
    "  skills       - Print key technical proficiencies and stack",
    "  projects     - List active research & production projects",
    "  education    - Display academic history and CGPA stats",
    "  contact      - Show direct communication channels",
    "  socials      - Print links to GitHub, LinkedIn, and Email",
    "  goals        - Display 2026-2027 technical and career milestones",
    "  stats        - Show quick portfolio statistics",
    "  clear        - Clear the terminal screen"
  ],
  whoami: [
    "Daggubati Deepthi Sai | Final-Year B.Tech CSE (AI & ML)",
    "Institution : Vignan's Lara Institute of Technology & Science",
    "Academic GPA: 9.09 / 10 (Distinction tier)",
    "Focus Areas : Applied AI/ML, Intelligent Digital Twins, Scalable Full Stack Engineering",
    "Philosophy  : 'Turning Ideas Into Intelligent Digital Experiences.'"
  ],
  skills: [
    "--- CORE TECHNICAL ARSENAL ---",
    "• Programming : Python, Java, C, C++, JavaScript (ES6+)",
    "• AI / ML     : Machine Learning, NLP, Graph WaveNet, SUMO/TraCI, Scikit-Learn",
    "• Frontend    : React.js, HTML5, CSS3, Tailwind CSS, Responsive Design",
    "• Backend & DB: Node.js, Express, MySQL, MongoDB, REST APIs",
    "• Cloud & Tool: Microsoft Azure, Git, GitHub, Power BI, VS Code"
  ],
  projects: [
    "1. Traffic Digital Twin        [Graph WaveNet + SUMO + TraCI + MPLight RL]",
    "2. StudyTwin AI               [Cognitive Retention + ML Regressors + React]",
    "3. ThreatLens AI              [EMBER 1.1M PE Files + XGBoost + YARA + Azure]",
    "4. Baby Monitoring System     [Acoustic Audio MFCC + OpenCV Computer Vision]",
    "5. SchedulaX                  [Constraint Satisfaction Clash-Free Timetabler]"
  ],
  education: [
    "• B.Tech CSE (AI & ML) - Vignan's Lara Institute (2023-2027) | CGPA: 9.09/10",
    "• Intermediate MPC     - Narayana Junior College (2021-2023) | 95.33%",
    "• SSC                  - Oxford High School (2021)           | GPA: 10.0/10"
  ],
  contact: [
    "Direct Channels for Daggubati Deepthi Sai:",
    "• Email    : deepthisaidaggubati@gmail.com",
    "• Phone    : +91 93819 71483",
    "• Location : Andhra Pradesh, India",
    "Status     : Actively interviewing for Full-Time & Internship positions."
  ],
  socials: [
    "• GitHub   : https://github.com/deepthisaidaggubati-commits",
    "• LinkedIn : https://linkedin.com/in/deepthisai-daggubati-05328b398",
    "• Mail     : mailto:deepthisaidaggubati@gmail.com"
  ],
  goals: [
    "• Deploy intelligent traffic simulation papers and open-source models.",
    "• Contribute to enterprise-scale distributed cloud systems & AI backends.",
    "• Continuously expand knowledge in Large Foundation Models and Edge AI."
  ],
  stats: [
    "• CGPA: 9.09/10  |  Hackathon: Top 20 SIH '26  |  Projects: 6+  |  Certifications: 10+"
  ]
};
