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
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    label: "Location",
    title: "Chandigarh, India",
    sub: "Open to work",
    image: "https://images.unsplash.com/photo-1588669494151-f4c6df6f715b?w=600&q=80",
  },
];

function RevealLine({ children, delay, className = "" }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-1">
      <span
        className={`block ${className}`}
        style={{
          transform: "translateY(110%)",
          animation: `text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-cream-50 dark:bg-dark-900">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — mask reveal per line */}
          <div>
            {/* Label */}
            <div className="overflow-hidden mb-4">
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase text-ink-300 dark:text-dark-500"
                style={{
                  transform: "translateY(110%)",
                  display: "block",
                  animation: isVisible ? "text-reveal 0.7s cubic-bezier(0.16,1,0.3,1) 0ms forwards" : "none",
                }}
              >
                — About
              </p>
            </div>

            {/* Heading — each line reveals separately */}
            <h2 className="font-serif text-4xl sm:text-5xl text-ink-900 dark:text-cream-100 leading-[1.15] mb-8">
              {isVisible ? (
                <>
                  <RevealLine delay={100}>Crafting interfaces</RevealLine>
                  <RevealLine delay={200}>people love to use</RevealLine>
                </>
              ) : (
                <span className="opacity-0">Crafting interfaces<br />people love to use</span>
              )}
            </h2>

            {/* Paragraphs */}
            <div
              className="text-ink-500 dark:text-dark-400 leading-relaxed mb-5 text-base"
              style={{
                opacity: 0,
                animation: isVisible ? "fade-in-up 0.7s ease forwards 400ms" : "none",
              }}
            >
              I'm a Computer Science graduate currently working as a Frontend
              Developer at Viithiisys Technologies. I build responsive web
              applications using React.js, Tailwind CSS, and modern frontend tools.
            </div>
            <div
              className="text-ink-500 dark:text-dark-400 leading-relaxed text-base"
              style={{
                opacity: 0,
                animation: isVisible ? "fade-in-up 0.7s ease forwards 520ms" : "none",
              }}
            >
              I enjoy creating clean user interfaces and integrating APIs to
              deliver real-world functionality. I'm currently expanding my
              skills into backend development with Node.js and Express.js.
            </div>
          </div>

          {/* Right — 3D perspective cards */}
          <div className="grid grid-cols-2 gap-3" style={{ perspective: "1000px" }}>
            {cards.map((card, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden group cursor-default aspect-square"
                style={{
                  opacity: 0,
                  animation: isVisible
                    ? `card-3d-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${180 + i * 120}ms forwards`
                    : "none",
                }}
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
