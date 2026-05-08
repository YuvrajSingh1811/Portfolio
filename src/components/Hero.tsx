import { ArrowRight, Github, Linkedin, Mail, MapPin, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-cream-100 dark:bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="animate-fade-in-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-ink-500 dark:text-dark-400">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink-900 dark:text-cream-100 leading-[1.1] mb-6">
              Hi, I'm<br />
              Yuvraj Singh
            </h1>

            <p className="text-lg text-ink-500 dark:text-dark-400 mb-3 font-medium">
              Frontend Developer
            </p>
            <p className="text-base text-ink-500 dark:text-dark-500 max-w-md leading-relaxed mb-10">
              Building responsive, modern web applications with React.js &
              Tailwind CSS. Passionate about clean UI and great user
              experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink-900 dark:bg-cream-100 text-white dark:text-ink-900 text-sm font-medium hover:opacity-80 transition-opacity"
              >
                View Projects
                <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink-900 dark:border-cream-300 text-ink-900 dark:text-cream-100 text-sm font-medium hover:bg-ink-900 dark:hover:bg-cream-100 hover:text-white dark:hover:text-ink-900 transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/YuvrajSingh1811"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-cream-300 dark:border-dark-700 text-ink-500 dark:text-dark-400 hover:border-ink-900 dark:hover:border-cream-300 hover:text-ink-900 dark:hover:text-cream-100 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvraj-singh-62a6b1286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-cream-300 dark:border-dark-700 text-ink-500 dark:text-dark-400 hover:border-ink-900 dark:hover:border-cream-300 hover:text-ink-900 dark:hover:text-cream-100 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:yuvrajsingh18811@gmail.com"
                className="p-2.5 rounded-full border border-cream-300 dark:border-dark-700 text-ink-500 dark:text-dark-400 hover:border-ink-900 dark:hover:border-cream-300 hover:text-ink-900 dark:hover:text-cream-100 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right — Info card */}
          <div className="animate-fade-in-up animation-delay-400 hidden lg:block">
            <div className="bg-ink-900 dark:bg-dark-800 rounded-3xl p-8 text-cream-100 relative overflow-hidden">
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />

              <div className="relative z-10 space-y-6">

                {/* Top — avatar + company */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <User size={24} className="text-cream-100" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-cream-400">Currently at</p>
                      <p className="text-cream-100 font-semibold text-sm">Viithiisys Technologies</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="border-t border-white/10" />

                {/* Stats — Experience · Role · Type */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { value: "1+", label: "Year Experience" },
                    { value: "4+", label: "Projects Built" },
                    { value: "FT", label: "Full-time" },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white/5 rounded-2xl py-4">
                      <p className="text-xl font-bold text-cream-100">{value}</p>
                      <p className="text-xs text-cream-400 mt-1">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10" />

                {/* Stack */}
                <div>
                  <p className="text-xs text-cream-400 mb-3 tracking-wide uppercase">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Git"].map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/10 text-cream-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10" />

                {/* Footer */}
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-cream-400" />
                  <span className="text-sm text-cream-400">Mohali, India</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
