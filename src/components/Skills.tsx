import { useState, useRef, useEffect } from "react";
import { skills } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

const categories = Object.keys(skills) as (keyof typeof skills)[];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const [active, setActive] = useState<keyof typeof skills>(categories[0]);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const i = categories.indexOf(active);
    const btn = btnRefs.current[i];
    if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active]);

  return (
    <section id="skills" className="py-24 bg-cream-100 dark:bg-dark-950">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
            — Skills
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100">
            Technologies I work with
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex items-center p-1.5 rounded-full bg-cream-200 dark:bg-dark-800">
            {/* Sliding pill indicator */}
            <div
              className="absolute top-1.5 bottom-1.5 bg-ink-900 dark:bg-cream-100 rounded-full transition-all duration-300 ease-in-out"
              style={{ left: pill.left, width: pill.width }}
            />
            {categories.map((cat, i) => (
              <button
                key={cat}
                ref={(el) => { btnRefs.current[i] = el; }}
                onClick={() => setActive(cat)}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  active === cat
                    ? "text-white dark:text-ink-900"
                    : "text-ink-500 dark:text-dark-400 hover:text-ink-900 dark:hover:text-cream-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills[active].map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-dark-800 border border-cream-300 dark:border-dark-700 hover:border-ink-900 dark:hover:border-cream-300 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cream-100 dark:bg-dark-900 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    size={28}
                    color={skill.color}
                    style={{
                      filter:
                        (skill.color === "#000000" || skill.color === "#181717") &&
                        theme === "dark"
                          ? "invert(1)"
                          : undefined,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-ink-700 dark:text-dark-200 text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
