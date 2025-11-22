import { Skill, Experience, Project, Service, BlogPost, Metric } from './types';

// =============================================================================
// INSTRUCTIONS FOR ANKESH:
// You can edit the text inside the quotes below to update your website.
// Do not remove the quotes ("") or the commas (,) at the end of lines.
// =============================================================================

export const ABOUT_TEXT = "I am a CA Article at GPHK & Associates in Hyderabad. I independently handle monthly GST filings, TDS returns, company incorporations, MCA compliances, ITRs for companies and individuals, and lead tax audit schedules for IT and wholesale/retail clients. I use Excel, Zoho Books, and Tally to prepare reconciliations and clean workpapers. I focus on accuracy, clear communication, and continuous learning.";

// --- KEY METRICS (Shows up under your photo) ---
export const METRICS: Metric[] = [
  {
    value: "50+",
    label: "GST Returns Filed"
  },
  {
    value: "12+",
    label: "Tax Audits Assisted"
  },
  {
    value: "100%",
    label: "Compliance Rate"
  },
  {
    value: "3",
    label: "Years Experience"
  }
];

export const SKILLS: Skill[] = [
  {
    name: "Audit & Accounting",
    items: ["Workpapers, vouching & verification", "Ledger scrutiny & reconciliations", "Financial Statement Analysis"]
  },
  {
    name: "Taxation",
    items: ["GST filings & GSTR-2B reconciliation", "TDS computations & e-filing", "Income Tax Returns (ITR)"]
  },
  {
    name: "Tools & Tech",
    items: ["Excel (Pivots, Lookups)", "Zoho Books", "Tally ERP 9 / Prime", "PowerPoint"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "CA Articled Assistant",
    company: "GPHK & Associates",
    duration: "Year 1 - Present",
    details: [
      "Handle monthly GST returns and reconciliations for multiple clients.",
      "Prepare TDS workings and file returns; reconcile challans.",
      "Manage company incorporations and MCA routine filings.",
      "Prepare and file ITRs for individuals & companies; validate against 26AS.",
      "Lead tax audit schedules for IT and wholesale/retail clients."
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: "GST Return Filing",
    description: "End-to-end monthly GST filing and GSTR-2B reconciliation.",
    icon: "📊"
  },
  {
    title: "TDS Compliance",
    description: "Computation, challan support and filing assistance.",
    icon: "💰"
  },
  {
    title: "Tax Audit Support",
    description: "Schedules, working papers and observations for tax audits.",
    icon: "📑"
  },
  {
    title: "MCA Compliances",
    description: "Company incorporation support and ROC filings.",
    icon: "🏢"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Retail Bookkeeping Revamp",
    description: "Standardized chart of accounts in Zoho Books and implemented monthly reconciliation checklist to reduce errors by 40%.",
    tags: ["Zoho Books", "Process Improvement"]
  },
  {
    title: "Audit Mapping Tool",
    description: "Built an Excel trial-balance to schedules template to reduce manual mapping time significantly.",
    tags: ["Excel", "Automation"]
  },
  {
    title: "HDFC Bank Analysis",
    description: "Profitability & liquidity study presented during academics, analyzing key financial ratios.",
    tags: ["Financial Analysis", "Case Study"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "🗂️ How I structure audit workpapers",
    excerpt: "Folder rules, naming conventions and checklist for quick reviews.",
    link: "#"
  },
  {
    title: "🔎 GST reconciliation: practical steps",
    excerpt: "My workflow for matching GSTR-2B and avoiding blocked credits.",
    link: "#"
  },
  {
    title: "⚡ Excel routines for CA Articles",
    excerpt: "Pivot-driven reconciliations and template tips.",
    link: "#"
  }
];

export const SOCIAL_LINKS = {
  email: "ankeshkumar9949@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankeshkumar9949",
  github: "#" // Placeholder if you add one
};