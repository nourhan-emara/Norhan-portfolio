"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";

const skills = [
  {
    n: "01",
    title: "HTML5",
    desc: "Semantic, accessible structure built for real users.",
    level: 95,
    type: "Core",
  },
  {
    n: "02",
    title: "CSS3",
    desc: "Responsive layouts, Grid, Flexbox and polished UI.",
    level: 92,
    type: "Core",
  },
  {
    n: "03",
    title: "JavaScript",
    desc: "Interactive logic, APIs and dynamic experiences.",
    level: 90,
    type: "Core",
  },
  {
    n: "04",
    title: "React",
    desc: "Reusable components, state and scalable UI architecture.",
    level: 88,
    type: "Core",
  },
  {
    n: "05",
    title: "Next.js",
    desc: "Production-ready apps with routing and performance in mind.",
    level: 85,
    type: "Core",
  },
  {
    n: "06",
    title: "Tailwind CSS",
    desc: "Fast, consistent styling with responsive design systems.",
    level: 93,
    type: "Styling",
  },
  {
    n: "07",
    title: "GSAP",
    desc: "Scroll-driven motion, timelines and precise interactions.",
    level: 87,
    type: "Motion",
  },
  {
    n: "08",
    title: "Framer Motion",
    desc: "Smooth UI animations, transitions and interactive motion.",
    level: 88,
    type: "Motion",
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const cellRefs = useRef([]);

  useReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cellRefs.current.forEach((cell, index) => {
        if (!cell) return;

        const bar = cell.querySelector(".skill-bar-fill");

        gsap.set(bar, {
          width: 0,
        });

        ScrollTrigger.create({
          trigger: cell,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(bar, {
              width: `${bar.dataset.level}%`,
              duration: 1.1,
              delay: index * 0.05,
              ease: "power3.out",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cells = cellRefs.current.filter(Boolean);

    const handlers = cells.map((cell) => {
      const handleMove = (event) => {
        const rect = cell.getBoundingClientRect();

        cell.style.setProperty(
          "--x",
          `${event.clientX - rect.left}px`
        );

        cell.style.setProperty(
          "--y",
          `${event.clientY - rect.top}px`
        );
      };

      cell.addEventListener("mousemove", handleMove);

      return {
        cell,
        handleMove,
      };
    });

    return () => {
      handlers.forEach(({ cell, handleMove }) => {
        cell.removeEventListener("mousemove", handleMove);
      });
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-[2] py-[110px] sm:py-[130px]"
    >
      <div
        className="
          container mx-auto
          max-w-[1180px]
          px-5
          sm:px-8
        "
      >
        {/* ==============================
            Section Header
        ============================== */}

        <div className="reveal mb-10 max-w-[650px] sm:mb-[60px]">
          <span className="mb-[14px] block font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
            // Skills
          </span>

          <h2 className="font-display text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
            Tools I use to build{" "}
            <span className="text-gradient">better experiences.</span>
          </h2>

          <p className="mt-4 max-w-[590px] text-base leading-[1.8] text-text-dim">
            A focused toolkit for building responsive interfaces, scalable
            applications, and purposeful motion.
          </p>
        </div>

        {/* ==============================
            Skills Grid
        ============================== */}

        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            border border-line
            bg-line
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              ref={(el) => {
                cellRefs.current[index] = el;
              }}
              className="
                skill-glow
                reveal
                group
                relative
                overflow-hidden
                bg-bg-soft
                px-5
                py-7
                transition-colors
                duration-300
                hover:bg-panel
                sm:px-6
                sm:py-[30px]
              "
            >
              {/* Top row */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-mute">
                  {skill.n}
                </span>

                <span
                  className="
                    rounded-full
                    border border-line
                    px-2.5
                    py-1
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.8px]
                    text-text-mute
                    transition-colors
                    duration-300
                    group-hover:border-purple/30
                    group-hover:text-purple-bright
                  "
                >
                  {skill.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-display text-xl font-medium">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="min-h-[44px] text-[13px] leading-[1.65] text-text-mute">
                {skill.desc}
              </p>

              {/* Skill indicator */}
              <div className="mt-6">
  <span className="mb-2 block font-mono text-[9px] uppercase tracking-[1px] text-text-mute">
    Skill level
  </span>

  <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
    <div
      className="
        skill-bar-fill
        h-full
        w-0
        rounded-full
        bg-gradient-to-r
        from-purple
        to-pink-purple
      "
      data-level={skill.level}
    >
  </div>
</div>
                <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="
                      skill-bar-fill
                      h-full
                      w-0
                      rounded-full
                      bg-gradient-to-r
                      from-purple
                      to-pink-purple
                    "
                    data-level={skill.level}
                  />
                </div>
              </div>

              {/* Bottom accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-gradient-to-r
                  from-purple
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
