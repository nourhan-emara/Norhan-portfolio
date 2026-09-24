"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import useMagnetic from "@/hooks/useMagnetic";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef(null);
  const navRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  // Magnetic effect for elements with .magnetic
  useMagnetic(navRef);

  // Header scroll state
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top -40",
      end: 99999,

      onUpdate: (self) => {
        if (!headerRef.current) return;

        headerRef.current.classList.toggle(
          "header-scrolled",
          self.scroll() > 40
        );
      },
    });

    return () => trigger.kill();
  }, []);

  // Close mobile menu after clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-[100] border-b border-line bg-[rgba(9,7,13,0.55)] backdrop-blur-[14px] transition-all duration-300"
    >
      <nav
        ref={navRef}
        className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8 sm:py-[18px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
  href="/"
  aria-label="Norhan Portfolio"
  className="inline-flex items-center"
>
  <img
    src="/logo-header1.png"
    alt="Norhan"
    className="h-11 w-auto object-contain sm:h-12"
  />
</Link>
        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-9 text-sm text-text-dim md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-2 transition-colors duration-300 hover:text-text"
              >
                {link.label}

                <span
                  className="absolute bottom-0 left-0 h-px w-0 bg-purple-bright transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="magnetic hidden rounded-full border border-purple px-[18px] py-[9px] font-mono text-[13px] text-purple-bright transition-all duration-300 hover:border-purple-bright hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] sm:inline-flex"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-text-dim transition-colors duration-300 hover:border-purple hover:text-text md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="flex flex-col gap-[5px]">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-line bg-[rgba(9,7,13,0.96)] backdrop-blur-[18px] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[360px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-[1180px] px-5 py-3 sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block border-b border-line py-4 font-mono text-sm text-text-dim transition-colors duration-300 last:border-b-0 hover:text-purple-bright"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="pt-2 pb-3 sm:hidden">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block rounded-lg border border-purple px-4 py-3 text-center font-mono text-sm text-purple-bright transition-all duration-300 hover:bg-purple/10 hover:text-white"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}