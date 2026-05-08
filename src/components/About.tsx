import { useScrollAnimation } from "../hooks/useScrollAnimation";

const cards = [
  {
    label: "Education",
    title: "B.Tech Computer Science",
    sub: "Chandigarh Group of Colleges, Mohali",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    label: "Current Role",
    title: "Frontend Developer",
    sub: "Viithiisys Technologies",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
  {
    label: "Focus",
    title: "React.js & Modern Frontend",
    sub: "TypeScript · Tailwind CSS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    label: "Location",
    title: "Mohali, India",
    sub: "Open to remote work",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-cream-50 dark:bg-dark-900">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500 mb-4">
              — About
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100 leading-[1.15] mb-8">
              Crafting interfaces<br />
              people love to use
            </h2>
            <p className="text-ink-500 dark:text-dark-400 leading-relaxed mb-5 text-base">
              I'm a Computer Science graduate currently working as a Frontend
              Developer at Viithiisys Technologies. I build responsive web
              applications using React.js, Tailwind CSS, and modern frontend
              tools.
            </p>
            <p className="text-ink-500 dark:text-dark-400 leading-relaxed text-base">
              I enjoy creating clean user interfaces and integrating APIs to
              deliver real-world functionality. I'm currently expanding my
              skills into backend development with Node.js and Express.js.
            </p>
          </div>

          {/* Right — Cards */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-default aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-ink-900/60 group-hover:bg-ink-900/50 transition-colors duration-300" />
                <div className="relative z-10 p-5 h-full flex flex-col justify-end">
                  <p className="text-xs tracking-widest uppercase text-cream-400 mb-1">
                    {card.label}
                  </p>
                  <h3 className="font-serif text-cream-100 font-semibold text-base leading-tight mb-0.5">
                    {card.title}
                  </h3>
                  <p className="text-cream-300 text-xs">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
