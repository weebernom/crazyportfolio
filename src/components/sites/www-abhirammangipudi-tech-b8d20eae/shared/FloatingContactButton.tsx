"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingContactButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      aria-label="Jump to contact section"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b] font-semibold px-5 py-3 shadow-[0_8px_24px_-8px_rgba(139,92,246,0.6)] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Contact</span>
    </a>
  );
}
