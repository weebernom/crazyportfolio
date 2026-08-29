"use client";

import { education } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";

export function EducationSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="education" ref={ref} className="bg-[#0c0d10] scroll-mt-16 py-24">
      <div className="container max-w-4xl mx-auto px-6">
        <p data-reveal className="text-[#baff29] font-mono text-xs font-semibold tracking-[0.2em] uppercase text-center mb-2">
          EDUCATION
        </p>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          Academia
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          Here&apos;s how I gained those skills.
        </p>

        <div data-reveal className="rounded-xl border border-[#24262c] bg-[#131418] p-6 md:p-8 rim-glow-hover">
          <span className="inline-block font-mono text-sm font-semibold text-[#baff29] mb-3">
            {education.dateRange}
          </span>
          <h3 className="font-heading text-xl font-bold text-[#f2f1ec] mb-1">
            {education.degree}
          </h3>
          <p className="text-[#8b5cf6] font-semibold mb-6">
            {education.institution}
          </p>
          <p className="text-sm text-[#a3a3ad] font-semibold mb-3">Certifications:</p>
          <div className="flex flex-wrap gap-2">
            {education.certifications.map((c) => (
              <span
                key={c}
                className="border border-[#24262c] text-[#a3a3ad] font-mono text-xs font-semibold px-3 py-1 rounded-md"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
