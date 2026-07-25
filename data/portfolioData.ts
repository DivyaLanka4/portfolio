export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Data Analytics' | 'Database';
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  skillsUsed: string[];
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Divya Lanka",
  title: "Computer Science Graduate | Python Developer | SQL Developer | Data Analyst | AI Enthusiast",
  roles: [
    "Computer Science Graduate",
    "Python Developer",
    "SQL & Database Developer",
    "Data Analyst & Power BI Specialist",
    "Full Stack Web Developer",
    "AI Enthusiast"
  ],
  bio: "I am a passionate Computer Science graduate with strong skills in Python, SQL, Java, HTML, CSS, JavaScript, Power BI, and database management. I enjoy solving real-world problems using data and software development. I am continuously learning AI, Full Stack Development, and Cloud technologies while building practical projects.",
  location: "Warangal / Hyderabad, Telangana, India",
  email: "divyalanka004@gmail.com",
  phone: "+91 7013974108",
  cgpa: "8.76 / 10",
  graduationYear: "2026",
  degree: "Bachelor of Technology (Computer Science & Engineering)",
  college: "University College of Engineering",
  university: "Kakatiya University",
  socials: {
    linkedin: "https://www.linkedin.com/posts/divya-lanka-774901335",
    github: "https://github.com/divyalanka",
    email: "mailto:divyalanka004@gmail.com",
    leetcode: "https://leetcode.com/divyalanka",
    hackerrank: "https://hackerrank.com/divyalanka",
  },
  strengths: [
    "Logical Thinking & Problem Solving",
    "Data Analysis & Dashboard Visualization",
    "Relational Database Design & Complex SQL Querying",
    "Python Web Development & Scripting",
    "Effective Communication & Leadership",
    "Rapid Tech Adoption & Continuous Learning"
  ],
  careerGoals: "Aiming to secure a progressive position as a Software Development Engineer / Data Analyst in a high-impact organization where I can harness Python, SQL, and Full Stack capabilities to solve complex real-world challenges while advancing in Generative AI and Cloud Engineering."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core logic building and computational problem solving",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 90, icon: "FileCode" },
      { name: "SQL", level: 92, icon: "Database" },
      { name: "Java", level: 80, icon: "Coffee" },
      { name: "C", level: 78, icon: "Terminal" },
      { name: "JavaScript", level: 82, icon: "FileJson" },
    ]
  },
  {
    category: "Frontend Development",
    description: "Creating responsive, aesthetic, and accessible web interfaces",
    iconName: "Layout",
    skills: [
      { name: "HTML5", level: 95, icon: "Globe" },
      { name: "CSS3", level: 90, icon: "Palette" },
      { name: "React.js", level: 82, icon: "Atom" },
      { name: "Next.js", level: 80, icon: "Zap" },
      { name: "Tailwind CSS", level: 88, icon: "Sparkles" },
    ]
  },
  {
    category: "Database & Backend",
    description: "Relational database schema modeling, queries & object design",
    iconName: "Server",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "Database" },
      { name: "MySQL", level: 86, icon: "Server" },
      { name: "Flask / Python Backend", level: 84, icon: "Layers" },
      { name: "DBMS Concepts", level: 92, icon: "Workflow" },
      { name: "OOP Principles", level: 88, icon: "Box" },
    ]
  },
  {
    category: "Data Analytics & BI",
    description: "Transforming raw data into strategic insights & dashboards",
    iconName: "BarChart3",
    skills: [
      { name: "Power BI", level: 90, icon: "PieChart" },
      { name: "Advanced Excel", level: 88, icon: "Sheet" },
      { name: "Data Cleaning & Wrangling", level: 86, icon: "Filter" },
      { name: "Dashboard Design & KPIs", level: 90, icon: "TrendingUp" },
    ]
  },
  {
    category: "Developer Tools",
    description: "Environment setup, version control, and collaboration tools",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "GitBranch" },
      { name: "VS Code", level: 92, icon: "Code" },
      { name: "Jupyter Notebook", level: 86, icon: "BookOpen" },
    ]
  },
  {
    category: "Next-Gen Tech & Learning",
    description: "Current focus areas & emerging technology domains",
    iconName: "BrainCircuit",
    skills: [
      { name: "Artificial Intelligence", level: 75, icon: "Cpu" },
      { name: "Machine Learning", level: 72, icon: "Binary" },
      { name: "Generative AI", level: 74, icon: "Bot" },
      { name: "AWS Cloud Fundamentals", level: 70, icon: "Cloud" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "examination-result-portal",
    title: "Student Examination Management System",
    category: "Full Stack",
    description: "A complete Web Application developed to automate student academic administration, grade calculation, fee record tracking, and examination result generation with robust PostgreSQL backend integration.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "PostgreSQL"],
    features: [
      "Student Academic Record Management & Profiles",
      "Dynamic Marks Management & Automatic Grade Calculation",
      "Student Attendance Tracking System",
      "Fee Payment Status & Record Logs",
      "Class Timetable & Schedule Management",
      "Instant Result Generation & PDF Export Capability"
    ],
    featured: true,
    metrics: "Automates 100% manual mark-sheet processing",
    githubUrl: "https://github.com/divyalanka/examination-result-portal",
    liveUrl: "https://examination-portal-demo.vercel.app",
    image: "examination_portal.png"
  },
  {
    id: "ipl-player-analysis",
    title: "IPL Player Analysis Dashboard",
    category: "Data Analytics",
    description: "An interactive analytics dashboard leveraging Kaggle IPL datasets to evaluate player performances, strike rates, team trends, and match outcomes through SQL queries and Power BI visuals.",
    technologies: ["SQL", "Power BI", "Kaggle Dataset", "Data Modeling", "DAX"],
    features: [
      "Executive KPI Cards (Total Runs, Wickets, Strike Rate, Boundaries)",
      "Season-wise & Team-wise Dynamic Filter Slicers",
      "Detailed Top Batsmen & Bowlers Comparative Visualizations",
      "Custom SQL Queries for Data Aggregation & Cleansing",
      "Interactive Player Head-to-Head Statistics Breakdown"
    ],
    featured: true,
    metrics: "Analyzed 10+ Seasons of IPL Ball-by-Ball Data",
    githubUrl: "https://github.com/divyalanka/ipl-player-analysis",
    liveUrl: "https://powerbi-ipl-dashboard-demo.vercel.app",
    image: "ipl_analysis.png"
  },
  {
    id: "ecommerce-data-analysis",
    title: "E-Commerce Customer & Sales Analytics",
    category: "Database",
    description: "End-to-end data analytics project featuring SQL database design, data scrubbing, customer cohort classification, and sales performance dashboards to optimize business revenue decisions.",
    technologies: ["PostgreSQL", "SQL", "Microsoft Excel", "Power BI"],
    features: [
      "Comprehensive Raw Data Cleaning & Normalization in SQL",
      "Customer RFM (Recency, Frequency, Monetary) Segmentation Queries",
      "Monthly & Regional Sales Performance Power BI Dashboard",
      "Product Category Revenue Contribution & Inventory Trends"
    ],
    featured: true,
    metrics: "Identified Key Customer Retention Patterns",
    githubUrl: "https://github.com/divyalanka/ecommerce-data-analysis",
    liveUrl: "https://ecommerce-analytics-demo.vercel.app",
    image: "ecommerce_analysis.png"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python Course Completion Certificate",
    issuer: "Besant Technology",
    date: "2024",
    badgeColor: "from-blue-500 to-cyan-500",
    description: "Comprehensive practical training in Python programming, object-oriented principles, modules, and database connectivity.",
    tags: ["Python", "OOP", "DBMS Integration"]
  },
  {
    title: "Employability Skills Training Program",
    issuer: "Mahindra Pride Classroom / Naandi Foundation",
    date: "2024",
    badgeColor: "from-purple-500 to-pink-500",
    description: "Intensive training program focusing on soft skills, professional communication, leadership dynamics, critical thinking, and interview readiness.",
    tags: ["Leadership", "Communication", "Problem Solving"]
  },
  {
    title: "Campus Recruitment Training (CRT)",
    issuer: "University College of Engineering",
    date: "2024",
    badgeColor: "from-emerald-500 to-teal-500",
    description: "Structured program covering Quantitative Aptitude, Technical Problem Solving, Data Structures fundamentals, and Mock Assessments.",
    tags: ["Aptitude", "Data Structures", "Technical Problem Solving"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "University College of Engineering",
    university: "Kakatiya University",
    period: "2022 – 2026",
    cgpa: "8.76 / 10",
    highlights: [
      "Maintained consistent academic excellence with a CGPA of 8.76.",
      "Core Coursework: Data Structures & Algorithms, DBMS, OOP, Software Engineering, Computer Networks.",
      "Lead developer for university examination portal academic project.",
      "Active participant in technical workshops, hackathons, and placement training."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Python Full Stack Trainee",
    company: "Professional Technical Training Institute",
    type: "Traineeship",
    period: "Present",
    description: "Undergoing intensive hands-on practical training in Full Stack Software Development using Python, modern backend frameworks, PostgreSQL/MySQL database modeling, and frontend integration.",
    skillsUsed: ["Python", "Flask", "PostgreSQL", "HTML/CSS/JS", "RESTful APIs", "Git"],
    highlights: [
      "Building production-grade web applications with database CRUD workflows.",
      "Writing clean, modular code following MVC design patterns.",
      "Collaborating on real-world project scenarios and code reviews."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Outstanding Academic Record",
    description: "Secured a stellar 8.76 CGPA in Bachelor of Technology (CSE) at Kakatiya University.",
    icon: "Award"
  },
  {
    title: "Full-Stack Project Pioneer",
    description: "Successfully designed and deployed a end-to-end Examination Result Portal using Python, Flask & PostgreSQL.",
    icon: "Code"
  },
  {
    title: "Data Analytics Mastery",
    description: "Engineered interactive Power BI & SQL Dashboards analyzing over 10+ seasons of complex sports data.",
    icon: "BarChart"
  },
  {
    title: "Continuous Learner & AI Enthusiast",
    description: "Actively building knowledge in Generative AI, Machine Learning models, and AWS Cloud deployments.",
    icon: "Sparkles"
  }
];
