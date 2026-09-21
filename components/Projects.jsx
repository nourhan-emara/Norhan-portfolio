"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import projectsData from "@/lib/projects";

export default function Projects() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const rowRefs = useRef([]);

  const projects = Object.entries(projectsData).map(([slug, project]) => ({
    slug,
    idx: project.number,
    title: project.title,
    description: project.subtitle,
    tags: project.stack,
    image: project.image,
    live: project.live,
    github: project.github,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo(
        headRef.current,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Project rows reveal
      rowRefs.current.forEach((row, index) => {
        if (!row) return;

        gsap.fromTo(
          row,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-[2] py-[130px]"
    >
      <div className="container mx-auto max-w-[1180px] px-5 sm:px-8">

        {/* ================= HEADER ================= */}
        <div
          ref={headRef}
          className="mb-14 max-w-[680px] opacity-0 sm:mb-[60px]"
        >
          <span className="mb-[14px] block font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
            // Projects
          </span>

          <h2 className="font-display text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
            Selected work,{" "}
            <span className="text-gradient">built with purpose.</span>
          </h2>

          <p className="mt-4 max-w-[600px] text-base leading-[1.8] text-text-dim">
            A collection of interfaces, applications and interactive
            experiences built with a focus on clean code, thoughtful design
            and meaningful motion.
          </p>
        </div>

        {/* ================= PROJECT LIST ================= */}
        <div className="flex flex-col border-t border-line">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              className="
                group
                relative
                border-b
                border-line
                py-7
                opacity-0
                sm:py-8
                lg:py-9
              "
            >
              {/* Hover background */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  origin-left
                  scale-x-0
                  bg-purple/[0.035]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              <div
                className="
                  grid
                  items-center
                  gap-5
                  sm:grid-cols-[50px_150px_1fr_auto]
                  lg:grid-cols-[60px_190px_1fr_auto]
                "
              >
                {/* Number */}
                <span
                  className="
                    font-mono
                    text-[11px]
                    tracking-[1px]
                    text-text-mute
                    transition-colors
                    duration-300
                    group-hover:text-purple-bright
                  "
                >
                  {project.idx}
                </span>

                {/* Project image */}
                <div
                  className="
                    relative
                    h-[150px]
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-line
                    bg-bg-soft
                    sm:h-[92px]
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-purple-deep
                      via-bg-soft
                      to-panel
                    "
                  />

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="
                      relative
                      h-full
                      w-full
                      object-cover
                      opacity-75
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-[1.06]
                      group-hover:opacity-100
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-purple/[0.08]
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Project information */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3
                      className="
                        font-display
                        text-[21px]
                        font-semibold
                        tracking-[-0.01em]
                        transition-colors
                        duration-300
                        group-hover:text-purple-bright
                        sm:text-[22px]
                      "
                    >
                      {project.title}
                    </h3>

                    <span
                      className="
                        hidden
                        rounded-full
                        border
                        border-line
                        px-2
                        py-1
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[1px]
                        text-text-mute
                        sm:inline-flex
                      "
                    >
                      Project
                    </span>
                  </div>

                  <p
                    className="
                      mt-2
                      max-w-[560px]
                      text-[13.5px]
                      leading-[1.65]
                      text-text-mute
                      transition-colors
                      duration-300
                      group-hover:text-text-dim
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-line
                          bg-white/[0.015]
                          px-[10px]
                          py-[4px]
                          font-mono
                          text-[10px]
                          text-text-mute
                          transition-colors
                          duration-300
                          group-hover:border-purple/20
                          group-hover:text-text-dim
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">

                    {/* Case Study */}
                    <Link
                      href={`/projects/${project.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-[1px]
                        text-purple-bright
                        transition-colors
                        duration-300
                        hover:text-purple
                      "
                    >
                      Case Study
                      <span className="text-sm">↗</span>
                    </Link>

                    {/* Live Demo */}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[1px]
                          text-text-dim
                          transition-colors
                          duration-300
                          hover:text-purple-bright
                        "
                      >
                        Live Demo
                        <span className="text-sm">↗</span>
                      </a>
                    )}

                    {/* GitHub */}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[1px]
                          text-text-dim
                          transition-colors
                          duration-300
                          hover:text-purple-bright
                        "
                      >
                        GitHub
                        <span className="text-sm">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} case study`}
                  className="
                    hidden
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-line
                    text-lg
                    text-text-mute
                    transition-all
                    duration-300
                    group-hover:border-purple/30
                    group-hover:bg-purple/[0.08]
                    group-hover:text-purple-bright
                    sm:flex
                  "
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <div className="mt-8 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-text-mute">
            More projects on GitHub
          </span>

          <span className="h-px w-16 bg-line sm:w-24" />
        </div>
      </div>
    </section>
  );
}
