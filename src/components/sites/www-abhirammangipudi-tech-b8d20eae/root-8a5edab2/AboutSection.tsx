"use client";

import { person, coreSkills } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";

const focusAreas = [
  "Cybersecurity",
  "Penetration Testing",
  "AI Security",
  "Hardware Hacking",
];

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="bg-[#0c0d10] scroll-mt-16 py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <p data-reveal className="font-mono text-[#baff29] text-xs font-semibold tracking-[0.2em] uppercase text-center mb-2">
          ABOUT ME
        </p>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          About Me
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          Here&apos;s the short version.
        </p>

        <div data-reveal className="flex flex-wrap gap-3 justify-center mb-8">
          {focusAreas.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border font-mono text-xs font-semibold px-4 py-2 border-[#24262c] text-[#a3a3ad] bg-[#131418]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div data-reveal className="space-y-4 mb-12 max-w-3xl mx-auto text-center">
          {person.bio.map((paragraph) => (
            <p key={paragraph} className="text-lg text-[#f2f1ec]">
              {paragraph}
            </p>
          ))}
        </div>

        <h3 data-reveal className="font-heading text-2xl font-bold text-[#f2f1ec] mb-6">
          Core Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSkills.map((skill) => (
            <div
              key={skill.title}
              data-reveal
              className="rim-glow-hover rounded-xl text-card-foreground p-6 border shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_8px_24px_-12px_rgba(0,0,0,0.6)]"
              style={{
                backgroundColor: skill.color + "1a",
                borderColor: skill.color,
              }}
            >
              <h4
                className="font-heading font-bold text-lg mb-2"
                style={{ color: skill.color }}
              >
                {skill.title}
              </h4>
              <p className="text-sm text-[#a3a3ad]">{skill.description}</p>
            </div>
          ))}
        </div>

        <p data-reveal className="text-center mt-10">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-[#8b5cf6] hover:text-[#a78bfa] font-semibold text-sm transition-colors"
          >
            See what I&apos;ve built →
          </a>
        </p>
      </div>
    </section>
  );
}
