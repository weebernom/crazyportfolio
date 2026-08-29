export const person = {
  name: "Muhammad Momin",
  shortName: "Momin",
  handle: "momibat",
  headline: "I look for the gap between what a system claims and what it actually does.",
  subtitle: "Second-year Cybersecurity student at GIKI, and team lead at QuantumLogics.",
  statusBadge: "Open to internships",
  bio: [
    "Aspiring cybersecurity engineer at Ghulam Ishaq Khan Institute with a focus on networking, penetration testing, and AI security. Hands-on across offensive security, AI/ML, and data analysis — I like tearing a system down to find out where it actually breaks.",
    "Outside of coursework I'm usually flashing an ESP32, running something on my homelab, or contributing to open source. TL;DR: I'm in love with computers.",
  ],
};

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "What I actually write code in.",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Security Tooling",
    description: "Recon, exploitation, and AI-facing red-teaming.",
    skills: ["Nmap", "Wireshark", "Metasploit", "Prompt Injection Testing", "Azure Pentest Labs"],
  },
  {
    title: "Backend & AI",
    description: "Services, auth, and LLM pipelines.",
    skills: ["Node.js", "Express", "JWT Auth", "Groq API", "Pinecone", "MongoDB", "LangChain.js"],
  },
  {
    title: "Automation",
    description: "Bots and pipelines that run without me.",
    skills: ["Playwright", "discord.js", "Ollama", "Meta Graph API"],
  },
  {
    title: "Hardware",
    description: "Recon and mods on real silicon.",
    skills: ["ESP32 (Marauder)", "Flipper Zero", "GPIO"],
  },
  {
    title: "Infrastructure",
    description: "Self-hosting without opening a single port.",
    skills: ["Tailscale", "Jellyfin", "SMB Networking"],
  },
];

export const interests: string[] = [
  "Offensive Security",
  "Hardware Hacking",
  "Open Source",
  "Homelabbing",
  "AI/ML",
];

export interface CoreSkill {
  title: string;
  description: string;
  color: string;
}

export const coreSkills: CoreSkill[] = [
  {
    title: "Offensive Security",
    description: "Nmap, Wireshark, Metasploit — finding the gap between what a system claims and what it does.",
    color: "#8b5cf6",
  },
  {
    title: "AI Security",
    description: "Auditing LLM pipelines for prompt injection before they ship to real users.",
    color: "#baff29",
  },
  {
    title: "Systems & Hardware",
    description: "ESP32 recon builds, Flipper Zero, and a homelab held together by Tailscale.",
    color: "#ff4d6d",
  },
  {
    title: "Automation",
    description: "Bots and pipelines that replace the manual work I got tired of doing.",
    color: "#39d98a",
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI/LLM Intern, Team Lead",
    company: "QuantumLogics",
    dateRange: "Jun 2026 - Present",
    bullets: [
      "Leading the team behind DLS Mentor, an AI chatbot for Digital Logic Studio integrating LLMs via the Groq API for low-latency, domain-specific responses.",
      "Deciding what gets built and reviewed, and auditing the AI-facing pipeline for prompt-injection risk so it doesn't leak data.",
      "Architecture: a Node.js/Express microservice on Groq's llama-3.3-70b, JWT-authenticated, with RAG over course material via Pinecone + LangChain.js and MongoDB-backed session memory.",
    ],
  },
];

export interface EducationEntry {
  dateRange: string;
  degree: string;
  institution: string;
  certifications: string[];
}

export const education: EducationEntry = {
  dateRange: "2024 - 2028",
  degree: "BS Cybersecurity (Class of '29)",
  institution: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  certifications: [
    "SQL for Data Science — UC Davis (Jul 2026)",
    "Critical Thinking Skills for the Professional — UC Davis (Apr 2026)",
  ],
};

export interface Project {
  name: string;
  status: "Active" | "Operational" | "Research" | "Field-Tested";
  description: string;
  tech: string[];
  codeUrl: string;
}

export const projects: Project[] = [
  {
    name: "DLS Mentor",
    status: "Active",
    description:
      "AI chatbot for Digital Logic Studio. Groq llama-3.3-70b microservice behind JWT, audited for prompt injection; RAG via Pinecone + LangChain.js over course material; MongoDB session memory.",
    tech: ["Node.js", "Express", "Groq", "JWT", "Pinecone", "MongoDB", "RAG"],
    codeUrl: "https://github.com/weebernom",
  },
  {
    name: "ig-quote-bot",
    status: "Operational",
    description:
      "Automated Instagram quote pipeline: Playwright scrapes Reddit, Gemini captions, Pillow renders, Meta Graph API posts. Runs on-demand locally after Reddit's datacenter-IP ban blocked the GitHub Actions version.",
    tech: ["Playwright", "Gemini", "Pillow", "Meta Graph API"],
    codeUrl: "https://github.com/weebernom",
  },
  {
    name: "Discord Bot",
    status: "Active",
    description:
      "Personal bot running gemma2:2b and llama3.2:3b locally via Ollama — replaced an earlier WhatsApp/Baileys + Meta API build.",
    tech: ["discord.js", "Ollama", "gemma2:2b", "llama3.2:3b"],
    codeUrl: "https://github.com/weebernom",
  },
  {
    name: "Android Modding Research",
    status: "Research",
    description:
      "Survey of rooting, GSI flashing, and DSU support across budget Android devices — hunting for cheap monitor-mode WiFi hardware.",
    tech: ["Rooting", "GSI", "DSU", "Android"],
    codeUrl: "https://github.com/weebernom",
  },
  {
    name: "Homelab Network",
    status: "Operational",
    description:
      "Self-hosted file and media sharing gated entirely behind Tailscale — no port forwarding. Runs this site's terminal companion.",
    tech: ["Tailscale", "SMB", "Jellyfin"],
    codeUrl: "https://github.com/weebernom",
  },
  {
    name: "ESP32 Marauder",
    status: "Field-Tested",
    description:
      "WiFi/BLE recon tool flashed to a DOIT DevKit V1 (MarauderV4 bootloader), paired with a Flipper Zero over GPIO.",
    tech: ["ESP32", "Flipper Zero", "GPIO"],
    codeUrl: "https://github.com/weebernom",
  },
];

export const contact = {
  email: "u2025581@giki.edu.pk",
  githubUrl: "https://github.com/weebernom",
  linkedinUrl: "https://www.linkedin.com/in/momibat",
  instagramUrl: "https://www.instagram.com/momi.bat/",
  resumeUrl:
    "https://drive.google.com/file/d/1yhsZL21pgnWYDa7EabhP1-jzr2WJKFXg/view?usp=sharing",
};

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "FAQ",
  "Contact",
] as const;

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What are you currently looking for?",
    answer:
      "Internships or entry-level roles in offensive security, AI security, or backend engineering. I'm open to remote and on-site work.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "Python and TypeScript day to day, Node.js/Express on the backend, and Nmap/Wireshark/Metasploit for security work. Full breakdown is in the Skills section above.",
  },
  {
    question: "Are you open to freelance or contract work?",
    answer:
      "Yes, especially for pentesting, AI pipeline security audits, or automation builds. Email me with scope and timeline and I'll get back to you.",
  },
  {
    question: "Where can I see your code?",
    answer:
      "GitHub is the best place — linked below. DLS Mentor and ig-quote-bot are the most complete write-ups.",
  },
  {
    question: "How fast do you respond to emails?",
    answer: "Usually within a day or two. If it's urgent, say so in the subject line.",
  },
];
