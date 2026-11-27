import {
  SiJavascript, SiHtml5, SiTypescript,
  SiReact, SiTailwindcss, SiNextdotjs,
  SiGit, SiGithub, SiPostman,
  SiVite, SiNodedotjs, SiNestjs, SiMongodb,
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
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
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
    role: "Full Stack Developer",
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
    title: "Agelign",
    description:
      "Built a 50+ screen healthcare admin console for bookings, lab workflow queues, and patient records. Developed a medical review workspace to edit AI-generated reports, scores, and action plans before release. Designed REST APIs in NestJS with MongoDB and JWT auth, driving dynamic per-module role permissions. Implemented S3 media uploads, FCM push notifications, and client-side PDF report generation.",
    tech: ["React.js", "Next.js", "NestJS", "MongoDB"],
    demo: "https://admin.agelign.ai",
  },
  {
    title: "Royal York CRM",
    description:
      "Built a multi-role CRM dashboard for Royal York Property Management. Implemented real-time messaging (chats, calls, dialpad) and activity tracking. Integrated AI that auto-generates estimated time and cost based on user-filled work order form fields.",
    tech: ["React.js"],
    demo: "https://crm.royalyorkpropertymanagement.ca/",
  },
  {
    title: "Dr. B. Lal Clinical Laboratory",
    description:
      "Built a patient-facing website with test booking, home collection, and health score features. Developed an admin dashboard managing 371+ blogs, banners, FAQs, and careers section. Used Next.js SSR for SEO-optimized rendering of patient-facing pages.",
    tech: ["Next.js"],
    demo: "https://blallab.com/",
  },
  {
    title: "Innerbhakti",
    description:
      "Integrated APIs for handling payment status (paid/unpaid) and subscription details in real time. Implemented user management features: view, search, edit, delete, subscription tracking, and CSV export.",
    tech: ["React.js"],
    demo: "https://dashboard.innerbhakti.com/",
  },
];

export const certifications = [
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "/AWS_Certification.pdf",
  },
   {
    title: "Frontend Development",
    issuer: "Completion Certificate",
    date: "2024",
    link: "/Frontend.certification.pdf",
  },
  {
    title: "Gemini for Google Workspace",
    issuer: "Google",
    date: "2025",
    link: "/Gemini.certification.pdf",
  },
 
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/YuvrajSingh1811", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yuvraj-singh-62a6b1286/", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourusername", icon: "twitter" },
  { name: "Email", url: "mailto:yuvrajsingh18811@gmail.com", icon: "mail" },
];
