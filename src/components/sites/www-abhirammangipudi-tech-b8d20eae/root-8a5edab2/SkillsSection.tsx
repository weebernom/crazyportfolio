"use client";

import { useRef } from "react";
import { skillCategories, interests } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fixed proficiency per category — all categories in this data set are hands-on/production skills.
const LEVEL_PERCENT = 88;

function SkillBar({ name }: { name: string }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!fillRef.current) return;

      gsap.fromTo(
        fillRef.current,
        { width: "0%" },
        {
          width: `${LEVEL_PERCENT}%`,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: fillRef.current,
            start: "top 90%",
          },
        }
      );
    },
    { scope: fillRef }
  );

  return (
    <div className="bg-[#131418] border border-[#24262c] p-4 rounded-lg rim-glow-hover">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[#f2f1ec] font-semibold">{name}</span>
        <span className="font-mono text-xs text-[#baff29]">{LEVEL_PERCENT}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#24262c] rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#baff29]"
          style={{ width: `${LEVEL_PERCENT}%` }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="bg-[#0c0d10] scroll-mt-16 py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div data-reveal className="flex items-center gap-4 mb-2">
          <div className="flex-1 h-px bg-[#24262c]" />
          <p className="text-[#baff29] font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            TECHNOLOGY
          </p>
          <div className="flex-1 h-px bg-[#24262c]" />
        </div>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          Skills And Tech
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-16">
          Here&apos;s all the tech I have used in my journey.
        </p>

        {skillCategories.map((category) => (
          <div key={category.title} data-reveal className="mb-16">
            <h3 className="text-2xl font-bold text-[#8b5cf6] mb-1">
              {category.title}
            </h3>
            <p className="text-[#a3a3ad] mb-6">{category.description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <SkillBar key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}

        <div data-reveal>
          <h3 className="text-2xl font-bold text-[#8b5cf6] mb-1">
            Interests
          </h3>
          <p className="text-[#a3a3ad] mb-6">
            This is what I do in my free time.
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center rounded-md border font-mono text-xs font-semibold px-4 py-2 border-[#24262c] text-[#a3a3ad] bg-[#131418]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
