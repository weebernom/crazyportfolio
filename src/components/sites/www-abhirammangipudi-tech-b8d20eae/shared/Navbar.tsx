"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, person } from "../root-8a5edab2/data";

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActive(mostVisible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-[#131418]/95 border-b border-[#24262c] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
          : "bg-[#131418]/30 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-[#f2f1ec]">
              {person.shortName}
            </span>
            <span className="hidden sm:inline font-mono text-xs text-[#a3a3ad]">
              @{person.handle}
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const id = link.toLowerCase();
              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleClick(id)}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-[#8b5cf6] ${
                    active === id ? "text-[#8b5cf6]" : "text-[#a3a3ad]"
                  }`}
                >
                  {link}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#8b5cf6] transition-all duration-300 ${
                      active === id ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="md:hidden text-[#a3a3ad] hover:text-[#8b5cf6] transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => {
              const id = link.toLowerCase();
              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleClick(id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#8b5cf6] text-left ${
                    active === id ? "text-[#8b5cf6]" : "text-[#a3a3ad]"
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
