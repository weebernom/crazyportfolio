"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, person } from "../root-8a5edab2/data";

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#131418] border-b border-[#24262c] backdrop-blur-sm">
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
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#8b5cf6] ${
                    active === id ? "text-[#8b5cf6]" : "text-[#a3a3ad]"
                  }`}
                >
                  {link}
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
