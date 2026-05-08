import { experience } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-cream-50 dark:bg-dark-900">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
            — Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-dark-800 border border-cream-300 dark:border-dark-700 rounded-2xl p-8 hover:border-ink-900 dark:hover:border-cream-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Role info */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-ink-900 dark:text-cream-100 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-ink-500 dark:text-dark-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-ink-900 dark:bg-cream-100 text-white dark:text-ink-900">
                  {exp.period}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ink-500 dark:text-dark-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink-300 dark:bg-dark-600 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
