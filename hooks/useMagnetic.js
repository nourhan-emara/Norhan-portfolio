"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function useMagnetic(containerRef) {
  useEffect(() => {
    const root = containerRef?.current || document;

    // Magnetic effect is only useful on devices with a real pointer.
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) return;

    const els = root.querySelectorAll(".magnetic");

    const handlers = [];

    els.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.4,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const onLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
          overwrite: true,
        });
      };

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);

      handlers.push({
        btn,
        onMove,
        onLeave,
      });
    });

    return () => {
      handlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);

        // Make sure GSAP doesn't leave transforms behind.
        gsap.killTweensOf(btn);
        gsap.set(btn, { x: 0, y: 0 });
      });
    };
  }, [containerRef]);
}