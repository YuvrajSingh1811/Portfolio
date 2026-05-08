import { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navLinks } from "../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 dark:bg-dark-950/90 backdrop-blur-md border-b border-cream-300 dark:border-dark-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#"
            className="font-serif text-lg font-semibold text-ink-900 dark:text-cream-100"
          >
            Yuvraj Singh
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-500 dark:text-dark-400 hover:text-ink-900 dark:hover:text-cream-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium bg-ink-900 dark:bg-cream-100 text-white dark:text-ink-900 hover:opacity-80 transition-opacity"
            >
              <Download size={13} />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-ink-500 dark:text-dark-400 hover:text-ink-900 dark:hover:text-cream-100 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-ink-500 dark:text-dark-400 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-ink-500 dark:text-dark-400 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cream-300 dark:border-dark-800 bg-cream-100 dark:bg-dark-950 animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-ink-500 dark:text-dark-400 hover:text-ink-900 dark:hover:text-cream-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium bg-ink-900 dark:bg-cream-100 text-white dark:text-ink-900"
              >
                <Download size={13} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
