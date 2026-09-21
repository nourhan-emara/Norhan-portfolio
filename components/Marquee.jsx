
const techs = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
];

function TechItem({ tech }) {
  return (
    <span
      className="
        flex shrink-0 items-center gap-3
        whitespace-nowrap
        select-none
        font-mono text-[13px]
        text-text-mute
        transition-colors duration-300
        hover:text-purple-bright
      "
    >
      <span
        aria-hidden="true"
        className="
          h-[5px] w-[5px] shrink-0
          rounded-full
          bg-purple-bright
          shadow-[0_0_8px_rgba(167,139,250,0.5)]
        "
      />
      {tech}
    </span>
  );
}

function TechGroup({ duplicate = false }) {
  return (
    <div
  className="
    flex
    w-max
    animate-scroll-x
    will-change-transform
  "
>
  {/* First set */}
  <div
    className="
      flex
      shrink-0
      items-center
      gap-12
      pr-12
      sm:gap-[60px]
      sm:pr-[60px]
    "
  >
    {techs.map((tech) => (
      <TechItem key={tech} tech={tech} />
    ))}
  </div>

  {/* Duplicate set */}
  <div
    aria-hidden="true"
    className="
      flex
      shrink-0
      items-center
      gap-12
      pr-12
      sm:gap-[60px]
      sm:pr-[60px]
    "
  >
    {techs.map((tech) => (
      <TechItem
        key={`duplicate-${tech}`}
        tech={tech}
      />
    ))}
  </div>
</div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Technologies"
      className="
        relative z-[2]
        overflow-hidden
        border-y border-line
        bg-purple/[0.025]
        py-[22px]
        select-none
      "
    >
      {/* Left fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 left-0 z-10
          w-16
          bg-gradient-to-r
          from-[#09070d]
          to-transparent
          sm:w-24
        "
      />

      {/* Right fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 right-0 z-10
          w-16
          bg-gradient-to-l
          from-[#09070d]
          to-transparent
          sm:w-24
        "
      />

      {/* Moving track */}
      <div className="flex w-max animate-scroll-x will-change-transform">
        <TechGroup />
        <TechGroup duplicate />
      </div>
    </section>
  );
}
