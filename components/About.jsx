"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import useReveal from "@/hooks/useReveal";

const timeline = [
  {
    title: "Web Foundations",
    meta: "HTML · CSS · JavaScript",
  },
  {
    title: "React Application Development",
    meta: "Components · State · API integration",
  },
  {
    title: "Next.js for Production",
    meta: "SSR · Routing · Performance",
  },
  {
    title: "Motion Design",
    meta: "GSAP · ScrollTrigger · Framer Motion",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const lineRef = useRef(null);

  useReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax glow
      gsap.to(glowRef.current, {
        y: -45,
        x: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      // Timeline line reveal
      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-[2] py-[110px] sm:py-[130px]"
    >
      <div
        className="
          container mx-auto
          grid max-w-[1180px]
          items-center
          gap-14
          px-5
          sm:px-8
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-[70px]
        "
      >
        {/* ==============================
            Visual Card
        ============================== */}

        <div
          className="
            reveal
            relative
            aspect-[1/1.05]
            overflow-hidden
            rounded-[22px]
            border border-line
            bg-gradient-to-br
            from-purple-deep
            via-bg-soft
            to-bg
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
          "
        >
          {/* Grid */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              opacity-[0.07]
              [background-image:linear-gradient(rgba(167,139,250,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,.4)_1px,transparent_1px)]
              [background-size:38px_38px]
            "
          />

          {/* Glow */}
          <div
            ref={glowRef}
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[230px]
              w-[230px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-purple/20
              blur-[45px]
            "
          />

          {/* Code symbol */}
          <div
            aria-hidden="true"
            className="
              relative
              flex h-full
              items-center
              justify-center
              font-mono
              text-[58px]
              font-bold
              text-transparent
              sm:text-[72px]
            "
            style={{
              WebkitTextStroke: "1.5px rgba(167,139,250,0.55)",
            }}
          >
            &lt;/&gt;
          </div>

          {/* Top label */}
          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              border border-line
              bg-bg/50
              px-3
              py-1.5
              font-mono
              text-[10px]
              tracking-[1px]
              text-text-mute
              backdrop-blur-md
            "
          >
            FRONT-END.DEV
          </div>

          {/* Bottom info */}
          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              flex
              items-end
              justify-between
              gap-4
            "
          >
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                Experience
              </span>

              <strong className="font-display text-xl text-text">
                3+ Years
              </strong>
            </div>

            <div className="text-right">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                Focus
              </span>

              <strong className="font-mono text-xs text-purple-bright">
                React · Next.js
              </strong>
            </div>
          </div>
        </div>

        {/* ==============================
            Content
        ============================== */}

        <div>
          {/* Heading */}
          <div className="reveal mb-10 max-w-[650px] sm:mb-[55px]">
            <span className="mb-[14px] block font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
              // About Me
            </span>

            <h2 className="font-display text-[31px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[40px] lg:text-[44px]">
              I turn ideas into interfaces that{" "}
              <span className="text-gradient">feel intentional.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="reveal max-w-[650px]">
            <p className="mb-[22px] text-[16px] leading-[1.9] text-text-dim sm:text-[16.5px]">
              With <strong className="font-semibold text-text">3+ years of experience</strong>,
              I build responsive web experiences using{" "}
              <strong className="font-semibold text-text">
                React and Next.js
              </strong>
              , with a strong focus on clean structure, reusable components,
              and thoughtful user interfaces.
            </p>

            <p className="text-[16px] leading-[1.9] text-text-dim sm:text-[16.5px]">
              I use <strong className="font-semibold text-text">Tailwind CSS</strong>{" "}
              for precise styling and{" "}
              <strong className="font-semibold text-text">
                GSAP & Framer Motion
              </strong>{" "}
              to introduce motion where it improves the experience. For me,
              good frontend work is where clean code and polished design meet.
            </p>
          </div>

          {/* Timeline */}
          <div className="reveal relative mt-11 pl-[26px]">
            {/* Animated line */}
            <div
              ref={lineRef}
              aria-hidden="true"
              className="
                absolute
                left-0
                top-1
                h-[calc(100%-4px)]
                w-px
                bg-gradient-to-b
                from-purple-bright
                via-purple
                to-transparent
              "
            />

            <ol className="space-y-7">
              {timeline.map((item) => (
                <li
                  key={item.title}
                  className="relative"
                >
                  {/* Dot */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -left-[30px]
                      top-[3px]
                      h-[9px]
                      w-[9px]
                      rounded-full
                      bg-purple-bright
                      shadow-[0_0_0_4px_rgba(139,92,246,0.12),0_0_14px_rgba(167,139,250,0.35)]
                    "
                  />

                  <h4 className="mb-1 font-display text-[15px] font-medium text-text">
                    {item.title}
                  </h4>

                  <span className="font-mono text-[11px] text-text-mute">
                    {item.meta}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
