import React, { useState, useEffect } from 'react';
import {
  Award,
  Calendar,
  CircleAlert,
  CircleCheck,
  Download,
  ExternalLink,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  TrendingUp,
  X,
  Zap,
  ChevronRight,
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

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  problem: string;
  painPoints: string[];
  businessContext: string;
  role: string;
  hypotheses: string[];
  dataResearch: string;
  solution: string;
  tradeOffs: string[];
  impact: string[];
  improvements: string;
  driveLink: string;
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

const CONTACT_INFO: ContactInfo = {
  email: "Prasadkaushal3@gmail.com",
  phone: "+91 8093786521",
  linkedin: "https://www.linkedin.com/in/kaushalprasadkaush7/",
  resume: "https://drive.google.com/file/d/1MNAzsRsR7R6np39hwHMkelGHGZfeMeta/view?usp=sharing",
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
      "Built an AI-powered Employee LMS MVP with personalization & performance analytics, contributing to $0.5M funding from Hot Staff.",
      "Designed and deployed a RAG-based AI support chatbot, reducing support tickets by 28%.",
      "Redesigned onboarding for an internal product (Improver), increasing sign-ups by 15%.",
      "Led UAT across 4 in-house AI products, reducing release defects by 17%.",
    ],
  },
  {
    company: "Ultrahuman",
    role: "Product Specialist (Remote)",
    duration: "Feb 2024 – Jul 2024",
    bullets: [
      "Launched a WhatsApp-based AI support chatbot, improving CSAT from 4.1 → 4.5 (10% uplift).",
      "Diagnosed user drop-offs via data analysis & UX audits; shipped improvements that boosted weekly retention by 20%.",
      "Improved internal efficiency through structured product documentation and usability guidelines.",
    ],
  },
  {
    company: "Rewardwise",
    role: "Associate Product Manager (Remote)",
    duration: "Mar 2023 – Feb 2024",
    bullets: [
      "Owned end-to-end development of the Rewardwise app and onboarded the first 100 customers.",
      "Rebuilt onboarding using data insights, increasing sign-ups by 30%.",
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

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "finmo",
    title: "Finmo: Optimizing Business Cash Flow & Yield",
    subtitle: "Enabling businesses to manage fluctuating revenue and generate additional income through smart treasury management.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2011",
    tags: ["FinTech", "B2B", "Treasury Management"],
    problem: "Businesses often face challenges in managing their cash flow effectively, especially those with fluctuating revenue streams. Traditional payment solutions do not offer sufficient flexibility or opportunities for generating additional income.",
    painPoints: [
      "Idle cash sitting in current accounts without earning any yield or interest.",
      "High difficulty in predicting upcoming payables against irregular revenue peaks.",
      "Manual treasury management processes that are prone to error and time-consuming.",
    ],
    businessContext: "For SMEs, every bit of capital counts. In high-interest environments, leaving cash idle in a non-interest-bearing account represents a significant opportunity cost.",
    role: "Lead Product Manager for the Treasury & Yield optimization module.",
    hypotheses: [
      "Automating the 'sweep' of surplus cash into liquid funds will increase merchant retention by providing immediate visible value.",
      "Providing a visual cash flow forecast will reduce merchant reliance on high-interest short-term credit.",
    ],
    dataResearch: "Analyzed transaction patterns of 500+ merchants and interviewed 15 CFOs to identify the threshold of 'surplus' cash that remains untouched for 15+ days.",
    solution: "Developed 'Finmo Yield', an automated treasury engine that identifies surplus cash and allows merchants to earn market-linked returns with T+0 liquidity.",
    tradeOffs: [
      "Decided to prioritize liquid funds over higher-yield corporate bonds to ensure merchants never faced a liquidity crisis during unforeseen revenue dips.",
    ],
    impact: [
      "15% average increase in net income for early pilot merchants.",
      "25% reduction in time spent on manual treasury management by finance teams.",
      "Attained $2M+ in managed AUM within the first 100 days of launch.",
    ],
    improvements: "Introduce predictive AI that anticipates upcoming tax or payroll cycles to suggest optimal yield durations for every dollar.",
    driveLink: "https://drive.google.com/file/d/1QY-lMzFmoCOrgVhf8JiRHdJh8Mlt32F1/view?usp=sharing",
  },
  {
    id: "star-wars-strategy",
    title: "Product Strategy: Star Wars Community Commerce",
    subtitle: "Fostering vibrant communities between small retailers and fans through shared themed interests.",
    image: "https://images.unsplash.com/photo-1593488913916-292bb05050f2?auto=format&fit=crop&q=80&w=2070",
    tags: ["Strategy", "Community", "E-commerce"],
    problem: "Small retailers struggle to reach niche enthusiast communities effectively, while fans lack a centralized platform that combines community engagement with trusted local commerce.",
    painPoints: [
      "Merchants lack tools for niche group-selling and targeted campaigns.",
      "Fans experience fragmented engagement across multiple disconnected social and shopping platforms.",
      "Low visibility for small business 'specialized' inventory among local users.",
    ],
    businessContext: "The goal is to leverage the massive Star Wars fandom to drive merchant empowerment and small business growth through a dedicated platform.",
    role: "Lead Strategist defining vision, goals, and monetization frameworks.",
    hypotheses: [
      "Personalized experiences like custom avatars and mini-games will drive organic user base expansion.",
      "A dedicated space for merchant-user connection will foster resilient local community formation.",
    ],
    dataResearch: "Conducted market analysis on fan behavior and retailer pain points in the collectibles and themed merchandise space.",
    solution: "A hybrid community-commerce platform with social boards, merchant empowerment tools for group selling, and gamified engagement layers.",
    tradeOffs: [
      "Focused initially on community density and local merchant features rather than broad e-commerce logistics to ensure early 'stickiness'.",
    ],
    impact: [
      "25% target increase in Community Engagement metrics.",
      "15% reduction in merchant Customer Acquisition Costs.",
      "Scalable monetization through seamless payment integrations and premium merchant tools.",
    ],
    improvements: "Implement AI-driven merchant matching to connect users with the most relevant local shop campaigns based on their specific fandom sub-interests.",
    driveLink: "https://drive.google.com/file/d/1u8UyuoDzRWMUHCy4KmEnHse0-3HdpC1C/view?usp=sharing",
  },
  {
    id: "pazcare",
    title: "PAZcare: Revolutionizing Employee Health Benefits",
    subtitle: "Scaling healthtech infrastructure for enterprise transparency and efficiency.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    tags: ["HealthTech", "B2B SaaS", "Operational Efficiency"],
    problem: "Employee health benefits management was opaque, manually intensive, and suffered from high turnaround times for claims and policy adjustments.",
    painPoints: [
      "HR teams spent 20+ hours/month on manual policy updates.",
      "Employees were frustrated by lack of visibility into claim status.",
      "Insurance providers struggled with data fragmentation.",
    ],
    businessContext: "As health insurance costs rose, enterprises needed a way to optimize their spend while improving the employee experience to retain talent.",
    role: "Core PM owning the employer dashboard and claim tracking workflow.",
    hypotheses: [
      "Automating policy adjustments via a self-serve portal will reduce HR support tickets by 40%.",
      "A real-time claim tracker will increase employee trust and portal engagement.",
    ],
    dataResearch: "Conducted interviews with 15 HR managers and audited 500 support tickets. Found that 65% of queries were simple 'status check' requests.",
    solution: "Developed a centralized 'Benefits Command Center' for HRs and a simplified mobile interface for employees with push notifications for every claim stage.",
    tradeOffs: [
      "Chose to postpone advanced analytics for HRs to prioritize the claim tracker, as the latter addressed the most immediate user frustration point.",
    ],
    impact: [
      "40% reduction in benefits-related HR support tickets.",
      "12% decrease in drop-offs during the claim filing process.",
      "Average claim turnaround time visible to users reduced from 3 days to real-time updates.",
    ],
    improvements: "Integrate AI-driven claim estimation to set better user expectations before they even file a claim.",
    driveLink: "https://drive.google.com/file/d/1PBsoidwX4lPCj6KxAhfqG4EZHatFf04e/view?usp=sharing",
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
    { name: "Projects & Proof of Work", href: "#projects" },
    { name: "Case Studies", href: "#case-studies" },
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
            className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-bold flex items-center justify-center hover:bg-gray-800 transition-all shadow-xl active:scale-95 group"
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

/* Case Studies Section */
interface CaseStudiesSectionProps {
  onSelect: (study: CaseStudy) => void;
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelect }) => {
  return (
    <section id="case-studies" className="py-24 bg-[#fafafa] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 bg-gray-200 rounded-lg mb-4">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Deep Dives</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A technical look at problems I've solved, decisions I've made, and the measurable impact delivered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              className="group relative p-10 bg-white border border-gray-100 rounded-[2.5rem] card-shadow flex flex-col h-full transition-all hover:border-black/5"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-[10px] font-black uppercase tracking-wider rounded-full text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">{study.subtitle}</p>

              <div className="mt-auto space-y-6">
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Impact</p>
                    <p className="text-sm font-bold text-gray-900">{study.impact[0]}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Focus</p>
                    <p className="text-sm font-bold text-gray-900">{study.tags[0]}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    id={`read-narrative-${study.id}`}
                    onClick={() => onSelect(study)}
                    className="inline-flex items-center px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all active:scale-95 group/btn cursor-pointer"
                  >
                    Read Narrative
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  {study.driveLink && (
                    <a
                      href={study.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-300 hover:text-black transition-colors"
                      title="View Detailed Doc"
                      aria-label="View Detailed Doc"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Case Study Modal */
interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      id={`case-study-modal-${study.id}`}
      className={`fixed inset-0 z-[60] overflow-y-auto bg-white transition-transform duration-500 ease-out ${
        mounted ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <span className="font-black text-gray-900 tracking-tighter uppercase text-xs">Strategy Case Study</span>
        <button
          id="close-modal-btn"
          onClick={handleClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90 cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-reveal" style={{ animationDelay: '0.2s' }}>
        <header className="mb-16">
          <div className="flex gap-2 mb-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-[10px] font-black uppercase tracking-widest rounded-full text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
            {study.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 font-medium">{study.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            {study.driveLink && (
              <a
                href={study.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-lg active:scale-95"
              >
                Full PRD / Doc
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
            <div className="flex items-center px-6 py-4 bg-gray-50 rounded-full border border-gray-100">
              <CircleCheck className="w-5 h-5 mr-3 text-green-500" />
              <span className="text-sm font-bold text-gray-700">Ownership: {study.role.split(' ')[0]}</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <section className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-400">
              <CircleAlert className="w-4 h-4 mr-2" />
              The Problem
            </h2>
            <p className="text-gray-900 font-semibold leading-relaxed text-lg">{study.problem}</p>
          </section>

          <section className="p-8 bg-black rounded-[2rem]">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">
              <TrendingUp className="w-4 h-4 mr-2" />
              North Star Result
            </h2>
            <p className="text-white font-black leading-tight text-3xl">{study.impact[0]}</p>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest font-bold">Primary Success Metric</p>
          </section>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">User Pain Points</h2>
            <div className="grid grid-cols-1 gap-4">
              {study.painPoints.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-red-100"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-red-500 rounded-full flex items-center justify-center font-black text-xs mr-4">
                    0{pIdx + 1}
                  </div>
                  <span className="text-gray-800 font-bold leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50/30 p-10 rounded-[2.5rem] border border-blue-50">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Hypotheses & Assumptions</h2>
            <div className="space-y-6">
              {study.hypotheses.map((hyp, hIdx) => (
                <div key={hIdx} className="flex items-start">
                  <span className="text-blue-200 text-4xl font-serif mr-4">“</span>
                  <p className="text-blue-900 font-bold text-xl leading-relaxed italic">{hyp}”</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Solution Architecture</h2>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-900 font-medium mb-10 leading-relaxed">{study.solution}</p>
              <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-2xl">
                <h3 className="text-xs font-black text-amber-800 uppercase tracking-widest mb-4">Strategic Trade-offs</h3>
                <p className="text-amber-900/80 font-bold leading-relaxed">{study.tradeOffs}</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full" />
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.4em] mb-12 text-gray-500 relative z-10">
              Measurable Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {study.impact.map((imp, impIdx) => (
                <div key={impIdx} className="border-l border-white/10 pl-8 transition-all hover:border-green-500">
                  <p className="text-5xl font-black mb-3 text-white tracking-tighter">{imp.split(' ')[0]}</p>
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
                    {imp.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="pb-32 border-t border-gray-100 pt-16">
            <h2 className="flex items-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
              Future Improvements
            </h2>
            <div className="p-10 bg-[#fafafa] rounded-[2rem] border border-gray-100 italic text-gray-500 text-xl font-medium leading-relaxed">
              "{study.improvements}"
            </div>
          </section>
        </div>
      </div>
    </div>
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
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

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

  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedStudy]);

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
          <ProjectsSection />
        </div>
        <div className="reveal-on-scroll">
          <CaseStudiesSection onSelect={setSelectedStudy} />
        </div>
        <div className="reveal-on-scroll">
          <TestimonialsSection />
        </div>
      </main>

      <FooterSection />

      {selectedStudy && (
        <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </div>
  );
}
