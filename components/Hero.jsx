"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import useMagnetic from "@/hooks/useMagnetic";

const STATUSES = ['"available"', '"building..."', '"open_to_work"'];

const stats = [
  { label: "Years Experience", value: 3 },
  { label: "Projects Built", value: 20 },
  { label: "Core Technologies", value: 7 },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const typedRef = useRef(null);
  const statRefs = useRef([]);

  useMagnetic(sectionRef);

  // ==============================
  // Typing effect
  // ==============================
  useEffect(() => {
    let statusIndex = 0;
    let timeoutId;
    let intervalId;
    let cancelled = false;

    const typeStatus = (text, cb) => {
      let i = 0;

      if (typedRef.current) {
        typedRef.current.textContent = "";
      }

      intervalId = setInterval(() => {
        if (cancelled) {
          clearInterval(intervalId);
          return;
        }

        if (typedRef.current) {
          typedRef.current.textContent += text[i];
        }

        i++;

        if (i >= text.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(cb, 1400);
        }
      }, 60);
    };

    const eraseStatus = (cb) => {
      intervalId = setInterval(() => {
        if (cancelled) {
          clearInterval(intervalId);
          return;
        }

        const text = typedRef.current?.textContent || "";

        if (typedRef.current) {
          typedRef.current.textContent = text.slice(0, -1);
        }

        if (
          !typedRef.current ||
          typedRef.current.textContent.length === 0
        ) {
          clearInterval(intervalId);
          cb();
        }
      }, 30);
    };

    const loop = () => {
      if (cancelled) return;

      typeStatus(STATUSES[statusIndex], () => {
        eraseStatus(() => {
          statusIndex = (statusIndex + 1) % STATUSES.length;
          loop();
        });
      });
    };

    loop();

    return () => {
      cancelled = true;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  // ==============================
  // Entrance animation
  // ==============================
  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = titleRef.current;

      // Split heading into words
      if (title) {
        const walk = (node) => {
  Array.from(node.childNodes).forEach((child) => {
    // Don't split text inside gradient elements
    if (
  child.nodeType === 1 &&
  child.classList.contains("text-gradient")
) {
  const text = child.textContent.trim();

  const wrap = document.createElement("span");
  wrap.className = "inline-block overflow-hidden";

  const inner = document.createElement("span");
  inner.className = "inline-block word-inner text-gradient";
  inner.textContent = text;

  wrap.appendChild(inner);
  child.replaceWith(wrap);
  return;
}

    if (
      child.nodeType === 3 &&
      child.textContent.trim().length
    ) {
      const words = child.textContent
        .split(" ")
        .filter(Boolean);

      const frag = document.createDocumentFragment();

      words.forEach((word, i) => {
        const wrap = document.createElement("span");
        wrap.className = "inline-block overflow-hidden";

        const inner = document.createElement("span");
        inner.className = "inline-block word-inner";

        inner.textContent =
          word + (i < words.length - 1 ? "\u00A0" : "");

        wrap.appendChild(inner);
        frag.appendChild(wrap);
      });

      child.replaceWith(frag);
    } else if (child.nodeType === 1) {
      walk(child);
    }
  });
};

        walk(title);
      }

      // ==============================
      // Main timeline
      // ==============================
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.fromTo(
        ".hero-eyebrow",
        {
          opacity: 0,
          y: -14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }
      )
        .fromTo(
          ".hero-role",
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .fromTo(
          ".word-inner",
          {
            opacity: 0,
            yPercent: 120,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.9,
            stagger: 0.05,
          },
          "-=0.25"
        )
        .fromTo(
          ".hero-lead",
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.55"
        )
        .fromTo(
          ".hero-cta a",
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.45"
        )
        .fromTo(
          statRefs.current,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.35"
        )
        .fromTo(
          ".hero-terminal",
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          },
          "-=1.1"
        );

      // ==============================
      // Stats counters
      // ==============================
      statRefs.current.forEach((el) => {
        if (!el) return;

        const strong = el.querySelector("strong");

        if (!strong) return;

        const target = Number(strong.dataset.count);

        gsap.fromTo(
          strong,
          {
            innerText: 0,
          },
          {
            innerText: target,
            duration: 1.6,
            delay: 1.2,
            snap: "innerText",
            ease: "power2.out",
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[2] container mx-auto min-h-screen max-w-[1180px] px-5 pt-[120px] sm:px-8 sm:pt-[130px]"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[60px]">

        {/* ==============================
            Hero Content
        ============================== */}
        <div>

          {/* Availability */}
          <div className="hero-eyebrow mb-5 flex items-center gap-[10px] font-mono text-[13px] text-purple-bright">
            <span className="h-[7px] w-[7px] animate-pulse2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />

            Open to new opportunities
          </div>

          {/* Role */}
          <div className="hero-role mb-4 font-mono text-sm tracking-[0.08em] text-text-mute">
            FRONT-END DEVELOPER
          </div>

          {/* Main Heading */}
          <h1
          ref={titleRef}
          className="font-display text-[42px] font-bold tracking-[-0.025em] sm:text-[58px] lg:text-[80px]"
          style={{ lineHeight: "0.98" }}
          >
            <span className="block">I create interfaces</span>

            <span className="block">
              that{" "}
              <span className="text-gradient">move</span>.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-lead mt-6 max-w-[520px] text-[16px] leading-[1.8] text-text-dim sm:text-[17px]">
            I build responsive, interactive web experiences with
            React and Next.js — combining clean code, thoughtful UI,
            and purposeful motion.
          </p>

          {/* CTA */}
          <div className="hero-cta mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="magnetic inline-block rounded-[10px] bg-gradient-to-br from-purple to-[#6D28D9] px-7 py-[14px] font-mono text-sm text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(139,92,246,0.45)]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="magnetic inline-block rounded-[10px] border border-line px-7 py-[14px] font-mono text-sm text-text-dim transition-all duration-300 hover:border-purple hover:text-text"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-5 sm:mt-14 sm:gap-x-[34px]">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => (statRefs.current[i] = el)}
                className={`${
                  i !== 0
                    ? "border-l border-line pl-[18px]"
                    : ""
                }`}
              >
                <strong
                  data-count={stat.value}
                  className="block font-display text-[26px] text-purple-bright"
                >
                  0
                </strong>

                <span className="font-mono text-xs text-text-mute">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ==============================
            Developer Terminal
        ============================== */}
        <div className="hero-terminal relative overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(139,92,246,0.08)]">

          <div className="border-beam animate-beam" />

          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-[18px] py-[14px]">
            <span className="h-[11px] w-[11px] rounded-full bg-[#FF6159]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#FFC02E]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />

            <em className="ml-auto font-mono text-xs not-italic text-text-mute">
              ~/norhan/developer.js
            </em>
          </div>

          {/* Code */}
          <div className="min-h-[240px] px-4 py-5 font-mono text-xs leading-[1.9] sm:min-h-[260px] sm:px-[22px] sm:py-[26px] sm:text-sm sm:leading-[2]">

            <div>
              <span className="text-[#4ADE80]">const</span>{" "}
              <span className="text-pink-purple">
                developer
              </span>{" "}
              = {"{"}
            </div>

            <div>
              &nbsp;&nbsp;name:{" "}
              <span className="text-[#FBBF24]">
                &quot;Norhan&quot;
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;role:{" "}
              <span className="text-[#FBBF24]">
                &quot;Front-End Developer&quot;
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;focus: [
              <span className="text-[#FBBF24]">
                &quot;React&quot;
              </span>
              ,{" "}
              <span className="text-[#FBBF24]">
                &quot;Next.js&quot;
              </span>
              ],
            </div>

            <div>
              &nbsp;&nbsp;styling:{" "}
              <span className="text-[#FBBF24]">
                &quot;Tailwind CSS&quot;
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;motion:{" "}
              <span className="text-[#FBBF24]">
                &quot;GSAP&quot;
              </span>
              ,
            </div>

            <div>
              &nbsp;&nbsp;status:{" "}
              <span
                ref={typedRef}
                className="text-text-dim after:ml-[1px] after:animate-blink after:text-purple-bright after:content-['▍']"
              />
            </div>

            <div>{"}"};</div>

          </div>
        </div>
      </div>
    </section>
  );
}