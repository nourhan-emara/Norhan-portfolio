"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let gx = window.innerWidth / 2;
    let gy = window.innerHeight / 2;
    let cx = gx;
    let cy = gy;

    const onMove = (e) => {
      gx = e.clientX;
      gy = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const ticker = () => {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    };
    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[3] hidden h-[420px] w-[420px] rounded-full opacity-100 sm:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.10), transparent 70%)",
      }}
    />
  );
}
