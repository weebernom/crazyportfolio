"use client";

import { useState } from "react";
import { projects } from "./data";
import { GithubIcon } from "../shared/icons";
import { useScrollReveal } from "../shared/useScrollReveal";

const STATUS_COLOR: Record<string, string> = {
  Active: "#8b5cf6",
  Operational: "#baff29",
  Research: "#a3a3ad",
  "Field-Tested": "#39d98a",
};

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="bg-[#08090b] scroll-mt-16 py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <p data-reveal className="text-[#baff29] font-mono text-xs font-semibold tracking-[0.2em] uppercase text-center mb-2">
          PROJECTS
        </p>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          Systems I Built
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          Here&apos;s how I used all the above mentioned skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.name}
              data-reveal
              className="rounded-xl bg-[#131418] border border-[#24262c] rim-glow-hover p-6"
            >
              <span
                className="inline-block rounded-md border px-3 py-1 text-xs font-mono font-semibold mb-3"
                style={{
                  borderColor: `${STATUS_COLOR[project.status]}80`,
                  color: STATUS_COLOR[project.status],
                }}
              >
                {project.status}
              </span>
              <h3 className="font-heading text-xl font-bold text-[#f2f1ec] mb-2">{project.name}</h3>
              <p className="text-[#a3a3ad] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-[#24262c] text-[#a3a3ad] text-xs font-mono px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-end">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 px-4 py-2 text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="size-4" /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((v) => Math.min(v + 4, projects.length))
              }
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b] font-semibold px-8 py-6 text-base transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
