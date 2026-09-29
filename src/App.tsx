import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  X,
  Zap,
} from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  resume: string;
}

interface Competency {
  title: string;
  skills: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

interface ProjectWorkflowStep {
  stepNumber: string;
  title: string;
  summary: string;
  points?: string[];
}

interface ProjectPrinciple {
  title: string;
  description: string;
}

interface Project {
  title: string;
  link: string;
  description: string;
  impact: string[];
  tags: string[];
  tagline?: string;
  observation?: string;
  workflow?: ProjectWorkflowStep[];
  principles?: ProjectPrinciple[];
}

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
}

interface Certification {
  name: string;
  issuer: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

interface PMInsight {
  title: string;
  tag: string;
  description: string;
  link: string;
}

const CONTACT_INFO: ContactInfo = {
  email: "Prasadkaushal3@gmail.com",
  phone: "+91 8093786521",
  linkedin: "https://www.linkedin.com/in/kaushalprasadkaush7/",
  resume: "https://drive.google.com/file/d/1YOqS-q5v20SrX5p5X767GD7tMqhn_mCk/view?usp=sharing",
};

const CORE_COMPETENCIES: Competency[] = [
  {
    title: "Product Thinking",
    skills: [
      "Product Strategy & Roadmapping",
      "0→1 & MVP Development",
      "User Research & Empathy",
      "Stakeholder Management",
      "Agile & Scrum",
      "A/B Testing",
    ],
  },
  {
    title: "Data & Growth",
    skills: [
      "Funnel Analysis & Retention",
      "Growth Metrics & KPIs",
      "SQL",
      "Python",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      "Jira",
      "Confluence",
      "Notion",
      "Figma",
      "Mixpanel",
      "APIs & Postman",
      "GenAI",
      "Prompt Engineering",
    ],
  },
];

const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Worlder Team",
    role: "Product Manager (Remote)",
    duration: "Oct 2024 – Present",
    bullets: [
      "Led 0→1 launch of a RAG-based support agent; defined the retrieval and grounding approach and an eval set of 100 real queries, reducing support tickets by 28% over 3 months at 90% answer accuracy.",
      "Scoped and shipped an AI-powered Employee LMS MVP (personalized learning paths + performance analytics) that helped close a $0.5M enterprise contract with Hot Staff.",
      "Owned UAT and release gating across 4 AI products; introduced test checklists & eval gates, cutting release defects by 17%.",
      "Rebuilt onboarding for Improver (a video-conferencing product), removing unwanted steps; sign-up completion rose from 60% to 86%.",
    ],
  },
  {
    company: "Ultrahuman",
    role: "Product Specialist (Remote)",
    duration: "Feb 2024 – Jul 2024",
    bullets: [
      "Launched a WhatsApp-based AI support chatbot, deflecting 35% of repetitive queries; CSAT rose from 4.1 → 4.5.",
      "Diagnosed user drop-offs via funnel analysis & UX audits; shipped 3 fixes that lifted weekly retention by 20%.",
      "Improved internal efficiency through structured product documentation and usability guidelines.",
    ],
  },
  {
    company: "RewardWise",
    role: "Associate Product Manager (Remote)",
    duration: "Mar 2023 – Feb 2024",
    bullets: [
      "Owned the product 0→1: defined the roadmap, KPIs, and rollout plan from 200+ user interviews and competitor research.",
      "Acquired the first 100 customers through demos and outreach, turning their feedback into a specific roadmap change.",
      "Defined roadmap, KPIs, and rollout strategy from scratch.",
    ],
  },
];

const INTERNSHIPS: ExperienceItem[] = [
  {
    company: "Price Labs",
    role: "Product Management Intern (Remote)",
    duration: "Jan 2023 – Feb 2023",
    bullets: [
      "Conducted product demos showcasing feature value propositions to customers.",
      "Redesigned property listing flow, reducing drop-offs and friction by 12%.",
    ],
  },
  {
    company: "FANVIDEO",
    role: "Product Management Intern (Remote)",
    duration: "Mar 2022 – May 2022",
    bullets: [
      "Authored PRDs and collaborated with Engineering and Design to ship key UX improvements.",
      "Performed data-driven market and competitor research to prioritize features.",
      "Conducted interviews & surveys to align product decisions with user expectations.",
    ],
  },
];

const PROJECTS: Project[] = [
  {
    title: "Reqroot",
    link: "https://recruitflow-2cvt.vercel.app",
    description: "An AI screening tool where every hiring decision comes with evidence. AI does the reading. Humans make the calls. Every decision shows its reasoning.",
    impact: [
      "Evidence over scores: Every assessment is inspectable with explicit reasoning.",
      "Two-stage screening rubric with mandatory bias review.",
      "Deep candidate review: In-depth analysis of CV, portfolio, GitHub & responses.",
      "Full recruiting pipeline: Integrated with Google Forms, Gmail, Calendar & Meet.",
    ],
    tags: ["AI Screening", "HRTech", "GenAI", "Recruiting", "SaaS"],
    tagline: "AI does the reading. Humans make the calls. Every decision shows its reasoning.",
    observation: "This started with a simple observation: Hiring doesn't necessarily need another AI that 'replaces recruiters.' There may be more value in removing repetitive work while keeping humans responsible for the decisions that matter. That's what I'm experimenting with through Reqroot.",
    workflow: [
      {
        stepNumber: "1",
        title: "Create a job",
        summary: "Add the JD. Reqroot creates a Google Form or connects an existing one. Responses sync automatically.",
        points: [
          "Import or paste the Job Description (JD).",
          "Reqroot generates a tailored Google Form or links an existing form.",
          "Candidate responses synchronize automatically into the screening hub.",
        ],
      },
      {
        stepNumber: "2",
        title: "AI creates the screening rubric",
        summary: "AI drafts a two-stage rubric from the JD. Recruiters review, edit and approve it.",
        points: [
          "AI drafts a structured two-stage screening rubric grounded in role criteria.",
          "Recruiters review, customize, and approve the rubric before evaluation begins.",
          "Mandatory bias review flags potentially problematic criteria like graduation year or vague 'culture fit' requirements.",
        ],
      },
      {
        stepNumber: "3",
        title: "Stage 1: Screen every applicant",
        summary: "Exact checks and normalized AI grading with multi-model confidence and escalation.",
        points: [
          "Exact checks for structured answers (locations, visa status, prerequisites).",
          "AI normalization for variations like 'BLR', 'Bangalore', and 'Bengaluru'.",
          "AI grading for open-ended applicant responses.",
          "Jev makes the initial judgment and provides confidence scores.",
          "Uncertain cases route to OpenAI for a second review and are flagged for human attention.",
        ],
      },
      {
        stepNumber: "4",
        title: "Stage 2: Deep candidate review",
        summary: "Recruiters decide who moves forward, then inspect evidence-backed candidate dossiers.",
        points: [
          "Analyzes candidate CV, portfolio links, GitHub repositories, and application responses against JD.",
          "Returns score & verdict, clear strengths & concerns, and suggested interview questions.",
          "Evidence supporting each finding: Instead of just 'Candidate score: 82', you can see why.",
        ],
      },
      {
        stepNumber: "5",
        title: "From shortlist to interview",
        summary: "Actionable pipeline execution without switching platforms.",
        points: [
          "Move shortlisted candidates across pipeline stages.",
          "Send personalized emails directly through Gmail.",
          "Schedule interview rounds with Google Calendar + Meet links automatically.",
        ],
      },
    ],
    principles: [
      {
        title: "Evidence over scores",
        description: "Every assessment is inspectable. Numbers alone don't explain qualification—verifiable evidence does.",
      },
      {
        title: "Humans make the decisions",
        description: "AI does the reading and recommends; recruiters approve and execute every hiring action.",
      },
      {
        title: "Fairness is built in",
        description: "Mandatory bias review cannot be skipped, proactively flagging ageism or subjective criteria.",
      },
      {
        title: "Everything is traceable",
        description: "Rubric versions and screening evaluations are preserved for a transparent, auditable history.",
      },
      {
        title: "Cost-aware AI",
        description: "Built-in token usage tracking and monthly budget controls keep operations cost-efficient.",
      },
    ],
  },
  {
    title: "RAG Chatbot",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7393512749433184256/?originTrackingId=Nx1AKu6HQsuGlxTCCZrT%2Bw%3D%3D",
    description: "A no-code AI chatbot that turns personal documents into an interactive, context-aware knowledge assistant.",
    impact: [
      "Connects Google Drive, Pinecone & OpenAI.",
      "Automatically ingests, chunks & embeds documents.",
      "Answers questions using context retrieved from your own data.",
      "Built with n8n + Lovable.",
    ],
    tags: ["RAG AI", "NoCode AI", "GenAI", "Productivity", "SaaS"],
  },
  {
    title: "AI PRD Maker",
    link: "https://aiprdmaker.vercel.app/",
    description: "An AI-powered tool that helps PMs generate clear, structured PRDs in minutes.",
    impact: [
      "Saves ~2 hours per PRD.",
      "Generates previewable & downloadable PDFs.",
      "Standardizes documentation across teams.",
    ],
    tags: ["GenAI", "Productivity", "SaaS"],
  },
  {
    title: "The NooB PM",
    link: "https://www.thenoobpm.com",
    description: "Built and scaled a 3,000+ member PM community focused on career transitions and now building it as an end to end platform for Aspiring Product managers",
    impact: [
      "Building features: AI mock Interview, Structred course, tools like(Linkedin optimiser and Cv analyzer)",
      "₹2,00,000+ revenue generated.",
      "40+ successful job placements.",
      "scaled to 3,000+ aspiring PMs.",
    ],
    tags: ["Community", "Growth", "EdTech"],
  },
  {
    title: "GymPulse",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7401160825568423936/",
    description: "Real-time gym occupancy & equipment availability platform to optimize workouts.",
    impact: [
      "Reduced wait times for equipment.",
      "Predictive peak-hour insights.",
      "Improved user scheduling.",
    ],
    tags: ["IoT", "UX", "Real-time"],
  },
  {
    title: "REFEASE",
    link: "https://www.linkedin.com/company/refease/about/?viewAsMember=true",
    description: "On-demand job referral-based community connecting seekers with top-tier professionals.",
    impact: [
      "Built 2700+ member community in < 12mo.",
      "Facilitated 100+ job referrals & placements.",
      "Defined strategy & managed all operations.",
    ],
    tags: ["Community", "Growth", "Strategy"],
  },
  {
    title: "PM JOBS",
    link: "https://www.linkedin.com/company/pmjobs-in/",
    description: "One-stop solution for product management job roles, using web scraping for automation.",
    impact: [
      "Aggregated 200+ daily unique visitors.",
      "Automated job discovery & curation.",
      "Centralized PM role repository.",
    ],
    tags: ["Web Scraping", "Jobs", "Automation"],
  },
];

const EDUCATION: EducationItem[] = [
  {
    degree: "MSC in Information Technology",
    school: "Lovely Professional University",
    location: "Punjab",
    duration: "2022 – 2024",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "St. Joseph’s College",
    location: "Bangalore",
    duration: "2018 – 2021",
  },
];

const CERTIFICATIONS: Certification[] = [
  { name: "SQL for Data Science", issuer: "IBM" },
  { name: "Python for Data Science", issuer: "IBM" },
  { name: "Master Product Management by Building a Product", issuer: "Udemy/Self-Led" },
  { name: "AI Automation", issuer: "Self-Led" },
  { name: "Foundation of prompt engineering", issuer: "AWS" },
  { name: "Postman API Fundamentals", issuer: "Postman" },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mohammed Fahad F S",
    role: "Product Manager",
    text: "Kaushal has a profound understanding of product development and scaling. His ability to quickly grasp concepts and consistently deliver makes him one of the best collaborators I’ve worked with.",
  },
  {
    name: "Antony Wenisch",
    role: "Customer Success Manager",
    text: "Kaushal brings a rare mix of technical expertise and strategic thinking. His dedication, collaborative mindset, and execution excellence make him a standout product professional.",
  },
];

const PM_INSIGHTS: PMInsight[] = [
  {
    title: "The Rise of AI Evaluations (Evals) — and why they’re redefining Product Management",
    tag: "AI Evals & Quality",
    description: "Why traditional QA and unit tests fail for probabilistic LLMs, how to structure gold-standard eval datasets, and why modern AI Product Managers must own evaluation benchmarks before shipping.",
    link: "https://www.linkedin.com/posts/kaushalprasadkaush7_ai-eval-activity-7381923905923571713-tqt_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcjST0B1uRjC1RlnTFh2iI-0IVfZ52FWW0",
  },
  {
    title: "JSON Prompting – Quick Guide",
    tag: "Prompt Engineering",
    description: "A developer-ready guide for prompting LLMs to produce deterministic, schema-constrained JSON outputs for seamless downstream API parsing and UI rendering.",
    link: "https://www.linkedin.com/posts/kaushalprasadkaush7_json-prompting-activity-7368870370164006915-c44T?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcjST0B1uRjC1RlnTFh2iI-0IVfZ52FWW0",
  },
  {
    title: "Learn basics of A/B testing",
    tag: "Product Experimentation",
    description: "Core statistical principles of product experimentation: designing hypotheses, minimum detectable effects (MDE), sample sizing, and avoiding common pitfalls like peeking at p-values.",
    link: "https://www.linkedin.com/posts/kaushalprasadkaush7_ab-testing-activity-7399334837901373440-d0jh?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcjST0B1uRjC1RlnTFh2iI-0IVfZ52FWW0",
  },
  {
    title: "RAG, Fine-Tuning & LLMs",
    tag: "GenAI Architecture",
    description: "A clear PM decision matrix comparing prompt engineering, Retrieval-Augmented Generation (RAG), and model fine-tuning across cost, maintenance, data freshness, and accuracy.",
    link: "https://www.linkedin.com/posts/kaushalprasadkaush7_ai-terms-activity-7426484453088153601-3rik?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcjST0B1uRjC1RlnTFh2iI-0IVfZ52FWW0",
  },
  {
    title: "how would you evaluate a RAG application as a Product Manager?",
    tag: "RAG Evaluation Framework",
    description: "A tactical breakdown for evaluating enterprise RAG applications: measuring retrieval precision and recall, context relevance, faithfulness, and answer hallucination prevention.",
    link: "https://www.linkedin.com/posts/kaushalprasadkaush7_productmanagement-ai-rag-activity-7501145772390875136-ein8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACcjST0B1uRjC1RlnTFh2iI-0IVfZ52FWW0",
  },
];

/* Navbar Component */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Work Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "My PM Insights", href: "#insights" },
    { name: "Projects & Proof of Work", href: "#projects" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-2'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              id="brand-logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-black text-gray-900 tracking-tighter hover:opacity-70 transition-opacity"
            >
              KP<span className="text-gray-400">.</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-gray-600 hover:text-black transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
                </a>
              ))}
              <a
                id="nav-cta-talk"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all hover:shadow-lg active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-black focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-scale origin-top"
        >
          <div className="px-4 pt-4 pb-8 space-y-2 bg-white/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-5 text-lg font-bold text-gray-900 border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a
                id="mobile-nav-cta-talk"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block w-full text-center px-4 py-5 bg-black text-white text-lg font-black rounded-2xl hover:bg-gray-800 transition-all active:scale-95 shadow-xl"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* Hero Section */
const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6 animate-fade-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span>Available for PM / Senior PM Roles</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight max-w-4xl mx-auto animate-reveal"
          style={{ animationDelay: '0.1s' }}
        >
          I build <span className="gradient-text">AI-powered products</span> that scale users and revenue.
        </h1>

        <p
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-reveal"
          style={{ animationDelay: '0.2s' }}
        >
          Product Manager with hands-on experience across AI, SaaS, and HealthTech. Turning ambiguous problems into shipped products with measurable business impact.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-reveal"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            id="download-resume-hero-btn"
            href={CONTACT_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-bold flex items-center justify-center hover:bg-gray-800 transition-all shadow-xl active:scale-95 group cursor-pointer"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute top-0 -z-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-blue-100/30 blur-[120px] rounded-full animate-fade-slow" />
    </section>
  );
};

/* About Section */
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Profile Overview</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              About <span className="gradient-text">Kaushal</span>
            </h2>
            <div className="w-20 h-1.5 bg-black rounded-full" />
          </div>

          <div className="prose prose-xl text-gray-600 space-y-8 max-w-none">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              I’m a product-first thinker from India, working at the intersection of users, data, and technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              <div className="space-y-6">
                <p className="leading-relaxed">
                  Over the last few years, I’ve built and scaled products across HealthTech, AI-powered SaaS, employee platforms, and PM communities. I've owned everything from problem discovery and PRDs to launch, analytics, and iteration.
                </p>
                <p className="leading-relaxed">
                  I thrive in 0→1 environments where I can collaborate closely with engineering and design to ship products that move real metrics—not just features.
                </p>
              </div>
              <div className="space-y-6">
                <p className="leading-relaxed font-medium text-gray-800">
                  Currently, I’m specializing in AI Product Management, focusing on how LLMs and RAG systems can revolutionize user experiences.
                </p>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <p className="text-sm italic text-gray-500 mb-0">
                    "My philosophy is simple: identify the core user friction, validate with data, and ship high-quality solutions that balance business needs with technical feasibility."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Core Competencies */
const CompetenciesSection: React.FC = () => {
  return (
    <section id="competencies-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_COMPETENCIES.map((category, idx) => (
            <div
              key={idx}
              id={`competency-card-${idx}`}
              className="p-8 bg-[#fafafa] rounded-2xl border border-gray-100 card-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white border border-gray-200 text-sm font-medium text-gray-600 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Work Experience */
const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#fafafa] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-gray-600">Track record of building and scaling products in high-growth environments.</p>
          </div>

          <div className="space-y-16">
            {/* Professional Roles */}
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-px flex-grow bg-gray-200" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">
                  Professional Roles
                </span>
                <div className="h-px flex-grow bg-gray-200" />
              </div>

              <div className="space-y-12">
                {WORK_EXPERIENCE.map((item, idx) => (
                  <div
                    key={idx}
                    id={`job-exp-${idx}`}
                    className="relative pl-8 border-l-2 border-gray-200 last:border-0 pb-12 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black" />
                    <div className="mb-1">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.company}</h3>
                    <p className="text-lg font-semibold text-gray-600 mb-4">{item.role}</p>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-gray-600 leading-relaxed">
                          <span className="mr-3 text-black font-bold">→</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div className="pt-8">
              <div className="flex items-center space-x-4 mb-10">
                <div className="h-px flex-grow bg-gray-200" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] whitespace-nowrap">
                  Internships
                </span>
                <div className="h-px flex-grow bg-gray-200" />
              </div>

              <div className="space-y-12">
                {INTERNSHIPS.map((item, idx) => (
                  <div
                    key={idx}
                    id={`intern-exp-${idx}`}
                    className="relative pl-8 border-l-2 border-gray-100 last:border-0 pb-12 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300" />
                    <div className="mb-1">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.company}</h3>
                    <p className="text-base font-semibold text-gray-500 mb-4">{item.role}</p>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-gray-600 text-sm leading-relaxed">
                          <span className="mr-3 text-gray-400 font-bold">→</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Education & Certifications */
const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="mb-12">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Academic Path</p>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Education</h2>
              <div className="w-12 h-1 bg-black rounded-full" />
            </div>

            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  id={`edu-item-${idx}`}
                  className="group relative pl-10 border-l-2 border-gray-100 last:border-0 pb-12 last:pb-0"
                >
                  <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-white border-2 border-gray-200 group-hover:border-black transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-black transition-colors" />
                  </div>
                  <div className="mb-2">
                    <span className="inline-flex items-center text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-md">
                      <Calendar className="w-3 h-3 mr-2" />
                      {edu.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg font-bold text-gray-500 mb-4">{edu.school}</p>
                  <div className="flex items-center text-sm font-semibold text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 h-full">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-1">Certifications</h2>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Industry Recognized</p>
                </div>
                <Award className="w-10 h-10 text-gray-200" />
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div
                    key={idx}
                    id={`cert-item-${idx}`}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-gray-900 text-sm leading-tight mb-1 group-hover:text-black transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white/50 rounded-2xl border border-dashed border-gray-200 text-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Continuous Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* My PM Insights Section */
const PMInsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-24 bg-[#fafafa] scroll-mt-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg mb-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                Thought Leadership & Frameworks
              </p>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              My <span className="gradient-text">PM Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Essays, evaluation frameworks, and breakdown guides on AI Product Management, LLM evals, prompt engineering, and product experimentation.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              id="view-all-pm-insights-linkedin"
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-gray-700 hover:text-black transition-colors group"
            >
              <Linkedin className="w-4 h-4 mr-2 text-[#0077b5]" />
              Follow on LinkedIn
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PM_INSIGHTS.map((insight, idx) => (
            <a
              key={idx}
              id={`pm-insight-card-${idx}`}
              href={insight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white border border-gray-100 rounded-3xl card-shadow flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg tracking-wide">
                    {insight.tag}
                  </span>
                  <div className="p-2 bg-gray-50 rounded-xl text-gray-400 group-hover:text-[#0077b5] group-hover:bg-blue-50 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-black mb-3 leading-snug">
                  {insight.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {insight.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-900 group-hover:text-[#0077b5] transition-colors">
                <span>Read on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Projects & Proof of Work */
const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Proof of Work</h2>
            <p className="text-lg text-gray-600">Building products, tools, and communities outside the day job.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              id={`project-card-${idx}`}
              className="group p-8 bg-white border border-gray-100 rounded-3xl card-shadow flex flex-col h-full hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-black transition-colors"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>

              <div className="space-y-3 mb-8">
                {project.impact.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start text-sm font-medium text-gray-900 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2.5 mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-6 border-t border-gray-100 text-[11px] font-semibold text-gray-400">
                {project.tags.map((tag, tIdx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {tIdx < project.tags.length - 1 && (
                      <span className="text-gray-300" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Wall of Love Section */
const TestimonialsSection: React.FC = () => {
  return (
    <section id="wall-of-love" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">Wall of Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              id={`testimonial-card-${idx}`}
              className="relative p-10 bg-white/5 rounded-3xl border border-white/10"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="text-lg font-bold text-white">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Footer Section */
const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-32 pb-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-on-scroll">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter text-gray-900">
            Let’s build the <br /> <span className="gradient-text">future together.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 reveal-on-scroll">
          <a
            id="contact-email-link"
            href={`mailto:${CONTACT_INFO.email}`}
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Mail className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" />
            {CONTACT_INFO.email}
          </a>

          <a
            id="contact-linkedin-link"
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Linkedin className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-1" />
            LinkedIn
          </a>

          <a
            id="contact-phone-link"
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="group flex items-center px-8 py-5 bg-white border border-gray-200 rounded-full text-base md:text-lg font-bold shadow-sm hover:shadow-xl hover:bg-black hover:text-white hover:border-black transition-all active:scale-95 whitespace-nowrap"
          >
            <Phone className="mr-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </footer>
  );
};

/* Main App */
export default function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative bg-[#fafafa] text-[#1a1a1a]">
      <Navbar />
      <main>
        <div className="animate-reveal">
          <HeroSection />
        </div>
        <div className="reveal-on-scroll">
          <AboutSection />
        </div>
        <div className="reveal-on-scroll">
          <CompetenciesSection />
        </div>
        <div className="reveal-on-scroll">
          <ExperienceSection />
        </div>
        <div className="reveal-on-scroll">
          <EducationSection />
        </div>
        <div className="reveal-on-scroll">
          <PMInsightsSection />
        </div>
        <div className="reveal-on-scroll">
          <ProjectsSection />
        </div>
        <div className="reveal-on-scroll">
          <TestimonialsSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
