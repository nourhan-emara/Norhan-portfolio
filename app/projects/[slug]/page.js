"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { gsap } from "@/lib/gsap";
import projects from "@/lib/projects";

export default function ProjectCaseStudy() {
  const pageRef = useRef(null);
  const params = useParams();

  const project = projects[params.slug];

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".case-back",
        {
          opacity: 0,
          y: -15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      )
        .fromTo(
          ".case-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.2"
        )
        .fromTo(
          ".case-title",
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .fromTo(
          ".case-description",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .fromTo(
          ".case-actions",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .fromTo(
          ".case-image",
          {
            opacity: 0,
            y: 35,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
          },
          "-=0.2"
        );
    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg px-5 text-text">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
            404
          </span>

          <h1 className="mt-4 font-display text-4xl font-semibold">
            Project Not Found
          </h1>

          <Link
            href="/#projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.8px] text-text-dim transition-all duration-300 hover:border-purple/40 hover:text-purple-bright"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen overflow-hidden bg-bg text-text"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-purple/10 blur-[120px]" />

        <div className="absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-pink-purple/5 blur-[120px]" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-[1180px] px-5 pt-8 sm:px-8 sm:pt-10">
        <Link
          href="/#projects"
          className="
            case-back
            inline-flex
            items-center
            gap-2
            font-mono
            text-[11px]
            uppercase
            tracking-[1px]
            text-text-mute
            transition-colors
            duration-300
            hover:text-purple-bright
          "
        >
          <span>←</span>
          Back to Projects
        </Link>
      </div>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-[1180px] px-5 pb-20 pt-20 sm:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-[850px]">
          {/* Label */}
          <div className="case-label flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
              // {project.number} · Case Study
            </span>

            <span className="h-px w-10 bg-line" />
          </div>

          {/* Title */}
          <h1
            className="
              case-title
              mt-5
              font-display
              text-[52px]
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-[72px]
              lg:text-[100px]
            "
          >
            {project.title}
          </h1>

          {/* Subtitle */}
          <p
            className="
              case-description
              mt-6
              max-w-[650px]
              text-[17px]
              leading-[1.8]
              text-text-dim
              sm:text-[18px]
            "
          >
            {project.subtitle}
          </p>

          {/* Tech */}
          <div className="case-description mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-line
                  bg-white/[0.02]
                  px-3
                  py-1.5
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.8px]
                  text-text-dim
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="case-actions mt-9 flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-purple
                px-5
                py-3
                font-mono
                text-[11px]
                uppercase
                tracking-[0.8px]
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-purple-bright
              "
            >
              Live Demo
              <span>↗</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-line
                px-5
                py-3
                font-mono
                text-[11px]
                uppercase
                tracking-[0.8px]
                text-text-dim
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-purple/40
                hover:text-purple-bright
              "
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECT IMAGE ================= */}
      <section className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div
          className="
            case-image
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-line
            bg-panel
            shadow-[0_30px_100px_rgba(0,0,0,0.25)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-pink-purple/5" />

          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="relative h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main content */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
              // Overview
            </span>

            <h2 className="mt-4 font-display text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">
              {project.overviewTitle ||
                "Bringing essential resources into one experience."}
            </h2>

            <p className="mt-6 max-w-[700px] text-[15px] leading-[2] text-text-dim">
              {project.overview}
            </p>

            {project.overviewExtra && (
              <p className="mt-5 max-w-[700px] text-[15px] leading-[2] text-text-dim">
                {project.overviewExtra}
              </p>
            )}
          </div>

          {/* Project Info */}
          <aside
            className="
              h-fit
              rounded-2xl
              border
              border-line
              bg-panel
              p-6
            "
          >
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
              // Project Info
            </span>

            <div className="mt-6 space-y-5">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                  Type
                </span>

                <span className="mt-1 block text-sm text-text-dim">
                  {project.type || "Web Application"}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                  Framework
                </span>

                <span className="mt-1 block text-sm text-text-dim">
                  {project.framework || project.stack[0]}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                  Styling
                </span>

                <span className="mt-1 block text-sm text-text-dim">
                  {project.styling || project.stack[1]}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[1px] text-text-mute">
                  Data
                </span>

                <span className="mt-1 block text-sm text-text-dim">
                  {project.data || "API Integration"}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-y border-line bg-bg-soft/40">
        <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-28">
          <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
            // Key Features
          </span>

          <h2 className="mt-4 max-w-[650px] font-display text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">
            {project.featuresTitle || "Built around the needs of the user."}
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="
                  bg-panel
                  p-6
                  transition-colors
                  duration-300
                  hover:bg-purple/[0.04]
                  sm:p-7
                "
              >
                <span className="font-mono text-[10px] text-purple-bright">
                  ✦
                </span>

                <h3 className="mt-4 font-display text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.7] text-text-mute">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
              // Challenges
            </span>

            <h2 className="mt-4 font-display text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">
              {project.challengesTitle ||
                "Turning multiple resources into one focused experience."}
            </h2>
          </div>

          <div className="space-y-7">
            {project.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="border-l border-line pl-5"
              >
                <h3 className="font-display text-lg font-semibold">
                  {challenge.title}
                </h3>

                <p className="mt-2 text-sm leading-[1.8] text-text-dim">
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT I LEARNED ================= */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-5 py-24 sm:px-8 lg:py-32">
          <span className="font-mono text-xs uppercase tracking-[1.5px] text-purple-bright">
            // What I Learned
          </span>

          <h2 className="mt-4 max-w-[750px] font-display text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[44px]">
            {project.learnedTitle ||
              "Building this project strengthened my experience with larger applications and API-driven interfaces."}
          </h2>

          <p className="mt-6 max-w-[700px] text-[15px] leading-[2] text-text-dim">
            {project.learned}
          </p>
        </div>
      </section>

      {/* ================= NEXT PROJECT ================= */}
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-text-mute">
              Next Project
            </span>

            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {project.nextProject?.title || "Explore more work"}
            </h2>
          </div>

          <Link
            href={
              project.nextProject?.slug
                ? `/projects/${project.nextProject.slug}`
                : "/#projects"
            }
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-line
              px-5
              py-3
              font-mono
              text-[11px]
              uppercase
              tracking-[0.8px]
              text-text-dim
              transition-all
              duration-300
              hover:border-purple/40
              hover:text-purple-bright
            "
          >
            View Next Project
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}