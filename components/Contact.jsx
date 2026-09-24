"use client";

import { useRef } from "react";
import { Github, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import useReveal from "@/hooks/useReveal";
import useMagnetic from "@/hooks/useMagnetic";

export default function Contact() {
  const sectionRef = useRef(null);

  useReveal(sectionRef);
  useMagnetic(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-[2] py-[130px]"
    >
      <div className="container mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-[24px] border border-line bg-gradient-to-br from-panel to-bg-soft px-6 py-[70px] text-center sm:px-[60px]">

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple/25 blur-[20px]" />

          {/* Heading */}
          <h2 className="relative mb-[18px] font-display text-[30px] font-semibold sm:text-[38px] lg:text-[48px]">
            Let&apos;s build something great together
          </h2>

          {/* Description */}
          <p className="relative mx-auto mb-[34px] max-w-[520px] text-base leading-[1.8] text-text-dim">
            Currently available for freelance projects and full-time
            opportunities. Reach out and let&apos;s talk about your next idea.
          </p>

          {/* Email Button */}
          <a
            href="mailto:norhanprogrammer@gmail.com"
            className="
              magnetic
              relative
              inline-flex
              items-center
              gap-[10px]
              rounded-xl
              border
              border-purple
              px-6
              py-4
              font-mono
              text-base
              text-text
              transition-all
              duration-300
              hover:bg-purple
              hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]
              sm:px-8
              sm:text-lg
            "
          >
            <Mail size={19} strokeWidth={1.8} />
            norhanprogrammer@gmail.com
          </a>

          {/* Social Icons */}
          <div className="relative mt-10 flex justify-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/nourhan-emara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-line
                text-text-mute
                transition-all
                duration-300
                hover:border-purple
                hover:bg-purple/10
                hover:text-purple-bright
                hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              "
            >
              <Github size={19} strokeWidth={1.7} />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  mb-2
                  -translate-x-1/2
                  scale-0
                  whitespace-nowrap
                  rounded-md
                  border
                  border-line
                  bg-panel
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-text
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/noorhan-mahmoud/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-line
                text-text-mute
                transition-all
                duration-300
                hover:border-purple
                hover:bg-purple/10
                hover:text-purple-bright
                hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              "
            >
              <FaLinkedinIn size={19} strokeWidth={1.7} />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  mb-2
                  -translate-x-1/2
                  scale-0
                  whitespace-nowrap
                  rounded-md
                  border
                  border-line
                  bg-panel
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-text
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:norhanprogrammer@gmail.com"
              aria-label="Email"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-line
                text-text-mute
                transition-all
                duration-300
                hover:border-purple
                hover:bg-purple/10
                hover:text-purple-bright
                hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
              "
            >
              <Mail size={19} strokeWidth={1.7} />

              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-full
                  left-1/2
                  mb-2
                  -translate-x-1/2
                  scale-0
                  whitespace-nowrap
                  rounded-md
                  border
                  border-line
                  bg-panel
                  px-2
                  py-1
                  font-mono
                  text-[10px]
                  text-text
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                Email
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}