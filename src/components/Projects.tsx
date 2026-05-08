import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-cream-100 dark:bg-dark-950">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
            — Projects
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100">
            Things I've built
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-dark-800 border border-cream-300 dark:border-dark-700 rounded-2xl p-8 hover:border-ink-900 dark:hover:border-cream-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Number + link */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-4xl font-semibold text-cream-300 dark:text-dark-700 leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-cream-300 dark:border-dark-700 text-xs font-medium text-ink-500 dark:text-dark-400 hover:bg-ink-900 dark:hover:bg-cream-100 hover:text-white dark:hover:text-ink-900 hover:border-ink-900 dark:hover:border-cream-100 transition-all"
                >
                  Live Site
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-ink-900 dark:text-cream-100 mb-3 group-hover:text-ink-700 dark:group-hover:text-cream-200 transition-colors">
                {project.title}
              </h3>

              <p className="text-ink-500 dark:text-dark-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-200 dark:border-dark-700">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-cream-100 dark:bg-dark-900 text-ink-500 dark:text-dark-400 border border-cream-300 dark:border-dark-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
