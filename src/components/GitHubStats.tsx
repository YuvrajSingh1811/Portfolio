import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

const GITHUB_USERNAME = "yourusername";

export default function GitHubStats() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const t = theme === "dark" ? "dark" : "default";

  return (
    <section className="py-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark-900 dark:text-white mb-4">
          GitHub{" "}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            Stats
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-12" />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${t}&hide_border=true&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full max-w-md rounded-2xl border border-dark-200 dark:border-dark-700 p-2 bg-white dark:bg-dark-800"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=${t}&hide_border=true&bg_color=00000000`}
              alt="Top Languages"
              className="w-full max-w-md rounded-2xl border border-dark-200 dark:border-dark-700 p-2 bg-white dark:bg-dark-800"
            />
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${t}&hide_border=true&background=00000000`}
              alt="GitHub Streak"
              className="w-full max-w-2xl rounded-2xl border border-dark-200 dark:border-dark-700 p-2 bg-white dark:bg-dark-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
