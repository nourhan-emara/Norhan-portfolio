"use client";

import { Github, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-[2] border-t border-line bg-bg-soft/40">
      <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8">

        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="font-display text-2xl font-semibold text-text">
              Norhan<span className="text-purple">.dev</span>
            </div>

            <p className="mt-2 font-mono text-xs text-text-mute">
              Designed with intention. Built with code.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/nourhan-emara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-mute transition-all duration-300 hover:border-purple hover:bg-purple/10 hover:text-purple-bright hover:shadow-[0_0_22px_rgba(139,92,246,0.2)]"
            >
              <Github size={17} strokeWidth={1.7} />
            </a>

            <a
              href="mailto:norhanprogrammer@gmail.com"
              aria-label="Email"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-mute transition-all duration-300 hover:border-purple hover:bg-purple/10 hover:text-purple-bright hover:shadow-[0_0_22px_rgba(139,92,246,0.2)]"
            >
              <Mail size={17} strokeWidth={1.7} />
            </a>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-line text-text-mute transition-all duration-300 hover:border-purple hover:bg-purple/10 hover:text-purple-bright hover:shadow-[0_0_22px_rgba(139,92,246,0.2)]"
            >
              <ArrowUp size={17} strokeWidth={1.7} />
            </button>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-line" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 font-mono text-[11px] text-text-mute sm:flex-row">

          <p>
            © 2026 Norhan. All rights reserved.
          </p>

          <p>
            React · Next.js · GSAP
          </p>

        </div>
      </div>
    </footer>
  );
}