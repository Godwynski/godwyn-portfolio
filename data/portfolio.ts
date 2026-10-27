export interface Project {
  title: string;
  tag: string;
  period: string;
  stack: string;
  description: string;
  highlights: string[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface SkillsLedgerRow {
  category: string;
  skills: string;
}

export interface DisclosureItem {
  title: string;
  content: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    headline: string;
    summary: string;
    school: string;
    degree: string;
    year: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  metrics: Metric[];
  projects: Project[];
  processSteps: ProcessStep[];
  skillsLedger: {
    featured: SkillsLedgerRow;
    rows: SkillsLedgerRow[];
  };
  academicDisclosures: DisclosureItem[];
  resume: {
    careerObjective: string;
    education: {
      institution: string;
      degree: string;
      status: string;
      coursework: string[];
      secondary: {
        school: string;
        honors: string;
        years: string;
      };
    };
    skillsProfile: {
      languages: string[];
      webDev: string[];
      databases: string[];
      systemsHardware: string[];
      tools: string[];
    };
    workExperience: {
      role: string;
      company: string;
      type: string;
      description: string[];
    }[];
    extracurricular: {
      role: string;
      organization: string;
      period: string;
      description: string[];
    }[];
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Godwyn O. Neri",
    title: "Full-Stack Software Developer | IT Systems Specialist",
    headline: "Hi, I'm Godwyn. I engineer full-stack web systems, low-latency Windows utilities, and connected hardware.",
    summary:
      "4th-Year Bachelor of Science in Information Technology (BSIT) student at STI College Alabang seeking an On-the-Job Training (OJT) / IT Internship. Proven experience architecting full-stack web platforms, designing relational database schemas, programming IoT microcontrollers, and performing computer hardware diagnostics.",
    school: "STI College Alabang",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    year: "4th Year (Expected Graduation: 2027)",
    location: "12A Laos Street, Better Living Subdivision, Brgy. Don Bosco, Parañaque City, Metro Manila",
    phone: "0934 770 7593",
    email: "kuyagodwyn@gmail.com",
    github: "https://github.com/Godwynski",
    linkedin: "https://www.linkedin.com/in/godwyn-neri-296ab1407/",
  },

  metrics: [
    {
      value: "4+",
      label: "Full-stack web applications & desktop utilities architected and deployed",
    },
    {
      value: "100%",
      label: "Vanguard-compliant kernel ETW engine & telemetry monitor in Rust",
    },
    {
      value: "180 hrs",
      label: "Industry work immersion & hands-on IT client hardware diagnostics",
    },
  ],

  projects: [
    {
      title: "Lumina LMS — Library Ecosystem",
      tag: "Capstone Project",
      period: "2026 – Present",
      stack: "Next.js (App Router), TypeScript, Supabase, PostgreSQL, Azure SSO, Tailwind CSS",
      description:
        "Lead developer for an enterprise web platform modernizing book cataloging, library circulation, and student attendance tracking for STI College Alabang.",
      highlights: [
        "Microsoft Azure Single Sign-On (SSO) with role-based access control (Borrower, Staff, Admin)",
        "Dewey Decimal Classification (DDC) cataloging with barcode & QR code circulation scanning",
        "Strict PostgreSQL Row-Level Security (RLS) data policies ensuring multi-role data isolation",
      ],
    },
    {
      title: "VALORANT Performance Optimizer (val-opt)",
      tag: "Systems Engineering",
      period: "2026",
      stack: "Rust, Slint GUI, Windows Kernel ETW, Win32 API",
      description:
        "High-assurance native Windows performance utility purpose-built for ultra-low latency, input responsiveness, and sub-millisecond hardware telemetry.",
      highlights: [
        "Real-time Event Tracing for Windows (ETW) subscription with zero disk overhead",
        "Atomic registry and service state backups with one-click safe rollback",
        "100% Riot Vanguard anti-cheat compliance without hooking game memory",
      ],
    },
    {
      title: "BlotterSys — Barangay Records Portal",
      tag: "Web Application",
      period: "2024 – 2025",
      stack: "Next.js 14, React, TypeScript, SQL, Tailwind CSS",
      description:
        "Centralized digital records portal for local barangay administration, streamlining pre-blotter incident logging, summons scheduling, and dispute tracking.",
      highlights: [
        "Katarungang Pambarangay 3-hearing dispute resolution workflow and summons logs",
        "Automated Barangay Clearance generation with tamper-evident QR verification",
        "Encrypted evidence upload links for sensitive audio and photo documentation",
      ],
    },
    {
      title: "ESP32-S3 Remote Hardware Management Bridge",
      tag: "Embedded Systems",
      period: "2024",
      stack: "C++, PlatformIO, ESP32-S3 Microcontroller, Telegram Bot API, USB HID",
      description:
        "Custom microcontroller firmware monitoring PC system telemetry and controlling hardware power states remotely via Wi-Fi and Telegram bots.",
      highlights: [
        "Real-time temperature and fan telemetry alerts over secure Telegram webhooks",
        "Optocoupler-isolated relay switching for hardware power cycling and reset control",
        "USB HID automation for emergency diagnostic keystroke macros",
      ],
    },
  ],

  processSteps: [
    {
      number: 1,
      title: "Model & Scope",
      description: "Map relational schemas, API contracts, and kernel/hardware boundaries.",
    },
    {
      number: 2,
      title: "Architect & Code",
      description: "Build clean, type-safe Rust and TypeScript solutions with RLS policies.",
    },
    {
      number: 3,
      title: "Benchmark & Test",
      description: "Verify performance, sub-millisecond timers, and anti-cheat compliance.",
    },
    {
      number: 4,
      title: "Document & Deploy",
      description: "Deliver production packages with complete technical documentation.",
    },
  ],

  skillsLedger: {
    featured: {
      category: "Core Specialization",
      skills: "Full-Stack Next.js (App Router), TypeScript, Supabase/PostgreSQL (RLS), and Native Systems (Rust, Win32 API, C++)",
    },
    rows: [
      {
        category: "Languages",
        skills: "Rust, TypeScript, JavaScript, Python, C#, C/C++, SQL, HTML5, CSS3, Luau",
      },
      {
        category: "Databases & Auth",
        skills: "Supabase, PostgreSQL (RLS), Prisma ORM, Azure Active Directory SSO, REST APIs, Zod",
      },
      {
        category: "Systems & Hardware",
        skills: "PC Diagnostics & Assembly, OS Deployment (Windows/Linux), BIOS/UEFI Setup, PlatformIO (ESP32-S3), ETW Telemetry",
      },
      {
        category: "Developer Tooling",
        skills: "Git, GitHub, Cargo, VS Code, Postman, Electron, Vercel, Vite, Tailwind CSS",
      },
    ],
  },

  academicDisclosures: [
    {
      title: "Relevant Coursework at STI College Alabang",
      content:
        "Application Development, Enterprise Architecture, Network Technology, IT Service Management (ITSM), Information Assurance & Security, Game Development, and Data Structures & Algorithms.",
    },
    {
      title: "Leadership & Extracurricular Activities",
      content:
        "Served as Auditor of the Coder's Club during 3rd year at STI College Alabang, helping organize student programming workshops and mentoring peers in Git and web development fundamentals.",
    },
    {
      title: "Practical IT Support & Hardware Experience",
      content:
        "Active freelance PC technician conducting hardware diagnostics, component replacements, thermal maintenance, and OS recovery. Completed 180 hours of work immersion at Barato Family Restaurant assisting with digital promotional materials and operational coordination.",
    },
  ],

  resume: {
    careerObjective:
      "Proactive, detail-oriented 4th-Year Bachelor of Science in Information Technology (BSIT) student at STI College Alabang seeking an On-the-Job Training (OJT) / IT Internship. Proven experience architecting full-stack web platforms, designing relational database schemas, programming IoT microcontrollers, and performing computer hardware diagnostics. Eager to contribute disciplined development practices, rapid problem-solving, and reliable execution to high-impact technical teams.",
    education: {
      institution: "STI College Alabang",
      degree: "Bachelor of Science in Information Technology (BSIT)",
      status: "4th Year Student (1st Semester) | Expected Graduation: 2027",
      coursework: [
        "Application Development",
        "Enterprise Architecture",
        "Network Technology",
        "IT Service Management (ITSM)",
        "Information Assurance & Security",
        "Game Development",
      ],
      secondary: {
        school: "Siniloan Integrated National High School",
        honors: "Graduated with Academic Honors (2017 – 2023)",
        years: "2017 – 2023",
      },
    },
    skillsProfile: {
      languages: ["Rust", "TypeScript", "JavaScript", "Python", "C#", "C/C++", "SQL", "HTML5", "CSS3", "Luau"],
      webDev: ["Next.js (App Router)", "React", "Node.js", "Tailwind CSS", "Vite", "PWA"],
      databases: ["Supabase", "PostgreSQL", "Prisma ORM", "REST APIs", "Azure AD SSO", "Zod"],
      systemsHardware: ["PC Assembly", "Hardware Diagnostics", "OS Deployment", "BIOS/UEFI", "Network Setup", "ESP32-S3"],
      tools: ["Git", "GitHub", "Cargo", "PlatformIO", "VS Code", "Electron", "Vercel", "Postman"],
    },
    workExperience: [
      {
        role: "Freelance Computer Technician",
        company: "Self-Employed (Metro Manila & Laguna)",
        type: "2023 – Present",
        description: [
          "Assembled custom PC workstations for developers, video editors, and gamers.",
          "Diagnosed hardware failures (RAM, GPU, PSU, motherboard) with systematic troubleshooting.",
          "Deployed Windows and Linux installations with driver optimizations and thermal monitoring.",
        ],
      },
      {
        role: "Work Immersion Intern — Digital Operations",
        company: "Barato Family Restaurant (Siniloan, Laguna)",
        type: "180 Hours Completed",
        description: [
          "Assisted in daily operations, digital promotional designs, and basic POS/inventory support.",
          "Strengthened client communication, punctuality, and real-time operational troubleshooting.",
        ],
      },
    ],
    extracurricular: [
      {
        role: "Auditor",
        organization: "STI College Alabang Coder's Club",
        period: "3rd Year (2025 – 2026)",
        description: [
          "Audited club records and activity materials.",
          "Mentored junior IT students in programming fundamentals, Git, and collaborative development.",
        ],
      },
    ],
  },
};
