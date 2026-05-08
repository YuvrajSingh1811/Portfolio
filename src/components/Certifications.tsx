import { ArrowUpRight } from "lucide-react";
import { certifications } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Certifications() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 bg-cream-50 dark:bg-dark-900">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
            — Certifications
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100">
            Credentials &amp; achievements
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-dark-800 border border-cream-300 dark:border-dark-700 rounded-2xl p-7 hover:border-ink-900 dark:hover:border-cream-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-cream-100 dark:bg-dark-900 text-ink-500 dark:text-dark-400 border border-cream-300 dark:border-dark-700">
                  {cert.date}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full text-ink-300 dark:text-dark-600 hover:text-ink-900 dark:hover:text-cream-100 transition-colors"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <h3 className="font-serif text-xl font-semibold text-ink-900 dark:text-cream-100 mb-2 group-hover:text-ink-700 dark:group-hover:text-cream-200 transition-colors flex-1">
                {cert.title}
              </h3>
              <p className="text-sm text-ink-400 dark:text-dark-500">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
