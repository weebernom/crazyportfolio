"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { person } from "../root-8a5edab2/data";

const EMOJIS = ["🚀", "💻", "🔧", "⚙️", "✨", "🎓", "🔥", "💡"];

export function Footer() {
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setEmoji(EMOJIS[Math.floor(Math.random() * EMOJIS.length)]);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-[#0c0d10] border-t border-[#24262c] py-12">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <h3 className="font-heading text-2xl font-bold text-[#f2f1ec] mb-2">{person.name}</h3>
        <p className="text-[#a3a3ad] mb-8">
          Cybersecurity • AI Security • Systems That Don&apos;t Leak
        </p>
        <div className="border-t border-[#24262c] pt-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-sm text-[#a3a3ad]">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </span>
          <span className="text-2xl">{emoji}</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-md border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 px-4 py-2 text-sm font-semibold transition-colors"
          >
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
