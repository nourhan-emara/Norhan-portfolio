"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed left-0 top-0 z-[200] h-[2px] w-full origin-left scale-x-0"
      style={{
        background: "linear-gradient(90deg, var(--purple), var(--pink-purple))",
        boxShadow: "0 0 12px rgba(139,92,246,0.7)",
      }}
    />
  );
}
