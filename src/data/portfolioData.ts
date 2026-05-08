import {
  SiJavascript, SiHtml5, SiTypescript,
  SiReact, SiTailwindcss, SiNextdotjs,
  SiGit, SiGithub, SiPostman,
  SiVite,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  ],
  Frontend: [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  ],
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Viithiisys Technologies",
    period: "Present",
    responsibilities: [
      "Developed responsive UI components using React.js and Tailwind CSS",
      "Integrated REST APIs for dynamic data handling",
      "Built dashboards and management panels for client applications",
      "Collaborated with backend developers for API integration",
    ],
  },
];

export const projects = [
  {
    title: "Royal York CRM",
    description:
      "Built a multi-role CRM dashboard for Royal York Property Management. Implemented real-time messaging (Chats, Calls, Dialpad) and activity tracking. Integrated AI that auto-generates estimated time and cost based on user-filled work order form fields.",
    tech: ["React.js", "Real-time Messaging", "AI Integration", "REST APIs"],
    demo: "https://crm.royalyorkpropertymanagement.ca/",
  },
  {
    title: "Dr. B. Lal Clinical Laboratory",
    description:
      "Built patient-facing website with test booking, home collection and health score features. Developed admin dashboard managing 371 blogs, banners, FAQs and careers section. Used Next.js SSR for SEO-optimized rendering of patient-facing pages.",
    tech: ["Next.js", "SSR", "Admin Dashboard", "SEO"],
    demo: "https://blallab.com/",
  },
  {
    title: "InnerBhakti Dashboard",
    description:
      "Integrated APIs for handling payment status (Paid/Unpaid) and subscription details in real time. Implemented user management features including view, search, edit, delete, subscription tracking, and CSV export.",
    tech: ["React.js", "REST APIs", "Payment Integration", "CSV Export"],
    demo: "https://dashboard.innerbhakti.com/",
  },
  {
    title: "Zeko Hotel Management",
    description:
      "Developed a Hotel Management Dashboard with analytics to manage hotel operations, orders, and departments. Built a complete hotel management system covering bookings, orders, staff, and guest services.",
    tech: ["React.js", "Next.js", "Analytics", "Dashboard"],
    demo: "https://dashboard.zeko.tech",
  },
];

export const certifications = [
  {
    title: "Frontend Development",
    issuer: "Relevant Platform",
    date: "2024",
    link: "#",
  },
  {
    title: "React.js Certification",
    issuer: "Relevant Platform",
    date: "2024",
    link: "#",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Relevant Platform",
    date: "2023",
    link: "#",
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/YuvrajSingh1811", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yuvraj-singh-62a6b1286/", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  { name: "Email", url: "mailto:yuvrajsingh18811@gmail.com", icon: "mail" },
];
