import { navLinks } from "../data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/YuvrajSingh1811", Icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yuvraj-singh-62a6b1286/", Icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:yuvrajsingh18811@gmail.com", Icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 dark:bg-dark-950 text-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div>
            <a href="#" className="font-serif text-xl font-semibold text-cream-100 mb-3 block">
              Yuvraj Singh
            </a>
            <p className="text-sm text-cream-400 leading-relaxed max-w-xs">
              Frontend Developer building modern, responsive web applications
              with clean UI and great user experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400 mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {socials.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream-300 hover:text-cream-100 transition-colors"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Yuvraj Singh. All rights reserved.
          </p>
          <p className="text-xs text-cream-400">
            Designed &amp; Built by{" "}
            <span className="font-serif text-cream-200">Yuvraj Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
