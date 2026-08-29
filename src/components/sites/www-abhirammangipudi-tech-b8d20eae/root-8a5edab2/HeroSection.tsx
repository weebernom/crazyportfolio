"use client";

import { useRef } from "react";
import { FileText } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { GithubIcon, LinkedinIcon } from "../shared/icons";
import { useMagnetic } from "../shared/useMagnetic";
import { person, contact } from "./data";

gsap.registerPlugin(SplitText);

const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-8 py-6 text-base font-semibold transition-colors";

export function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const {
    ref: resumeRef,
    onMouseMove: onResumeMouseMove,
    onMouseLeave: onResumeMouseLeave,
  } = useMagnetic<HTMLAnchorElement>();
  const {
    ref: githubRef,
    onMouseMove: onGithubMouseMove,
    onMouseLeave: onGithubMouseLeave,
  } = useMagnetic<HTMLAnchorElement>();
  const {
    ref: linkedinRef,
    onMouseMove: onLinkedinMouseMove,
    onMouseLeave: onLinkedinMouseLeave,
  } = useMagnetic<HTMLAnchorElement>();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!headingRef.current) return;

      const split = new SplitText(headingRef.current, { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 24,
        rotateX: -40,
        transformOrigin: "50% 100%",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.035,
        delay: 0.15,
      });

      return () => split.revert();
    },
    { scope: headingRef }
  );

  return (
    <section
      id="home"
      className="relative bg-[#08090b] flex items-center justify-center scroll-mt-16 min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid-bg pointer-events-none" />
      <div className="container max-w-4xl text-center animate-fadeInUp relative px-6">
        <div className="animate-pulse-glow inline-flex items-center rounded-md border text-xs font-mono font-semibold transition-colors mb-6 border-[#39d98a]/50 text-[#39d98a] bg-transparent px-4 py-2">
          {person.statusBadge}
        </div>
        <h1
          ref={headingRef}
          className="font-heading text-5xl md:text-7xl font-bold mb-6 text-[#f2f1ec]"
          style={{ fontFamily: "var(--font-heading)", perspective: 400 }}
        >
          I look for <span className="text-[#8b5cf6]">the gap</span> between
          what a system claims and what it{" "}
          <span className="text-[#8b5cf6]">actually does.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#a3a3ad] mb-12 max-w-2xl mx-auto">
          {person.subtitle}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            ref={resumeRef}
            onMouseMove={onResumeMouseMove}
            onMouseLeave={onResumeMouseLeave}
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClasses} bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b]`}
          >
            <FileText />
            Resume
          </a>
          <a
            ref={githubRef}
            onMouseMove={onGithubMouseMove}
            onMouseLeave={onGithubMouseLeave}
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClasses} border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 bg-transparent`}
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            ref={linkedinRef}
            onMouseMove={onLinkedinMouseMove}
            onMouseLeave={onLinkedinMouseLeave}
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBaseClasses} border border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 bg-transparent`}
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
