"use client";

import { Briefcase } from "lucide-react";
import { experience } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";

export function ExperienceSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="bg-[#08090b] scroll-mt-16 py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <p data-reveal className="text-[#baff29] font-mono text-xs uppercase tracking-[0.2em] text-center mb-2">
          EXPERIENCE
        </p>
        <h2
          data-reveal
          className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Where I&apos;ve Worked
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          One real role so far — more soon.
        </p>

        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              data-reveal
              className="rounded-xl border border-[#24262c] bg-[#131418] p-6 rim-glow-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8b5cf6] flex items-center justify-center shrink-0">
                    <Briefcase size={24} className="text-[#08090b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f2f1ec]">
                      {job.role}
                    </h3>
                    <p className="text-[#8b5cf6] font-semibold">
                      {job.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-mono text-[#a3a3ad] whitespace-nowrap">
                  {job.dateRange}
                </span>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-[#e5e4de]">
                    <span className="text-[#baff29] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
