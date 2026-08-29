"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../shared/icons";
import { contact } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";

const contactCards = [
  { icon: GithubIcon, title: "GitHub", subtitle: "See what I made", href: contact.githubUrl },
  { icon: LinkedinIcon, title: "LinkedIn", subtitle: "See what I yap about", href: contact.linkedinUrl },
  { icon: InstagramIcon, title: "Instagram", subtitle: "See what I'm up to", href: contact.instagramUrl },
  { icon: Mail, title: "Email", subtitle: "Shoot me a mail", href: `mailto:${contact.email}` },
];

const systems = [
  { id: 1, x: 40, y: 40, title: "Recon", subtitle: "Nmap / Wireshark" },
  { id: 2, x: 230, y: 20, title: "AI Pipeline", subtitle: "Groq + RAG" },
  { id: 4, x: 420, y: 40, title: "Homelab", subtitle: "Tailscale" },
];

const hub = { x: 230, y: 180, title: "momibat", subtitle: "systems that don't leak" };

const BOX_WIDTH = 140;
const BOX_HEIGHT = 70;

function SystemDiagram() {
  const hubTop = { x: hub.x + BOX_WIDTH / 2, y: hub.y };

  return (
    <svg viewBox="0 0 600 400" className="w-full h-auto">
      {systems.map((s) => {
        const from = { x: s.x + BOX_WIDTH / 2, y: s.y + BOX_HEIGHT };
        return (
          <line
            key={`line-${s.id}`}
            x1={from.x}
            y1={from.y}
            x2={hubTop.x}
            y2={hubTop.y}
            stroke="#24262c"
            strokeWidth={1.5}
          />
        );
      })}

      {systems.map((s, i) => {
        const from = { x: s.x + BOX_WIDTH / 2, y: s.y + BOX_HEIGHT };
        return (
          <circle key={`dot-${s.id}`} r={4} fill="#8b5cf6">
            <animateMotion
              dur={`${1 + i * 0.25}s`}
              repeatCount="indefinite"
              path={`M ${from.x} ${from.y} L ${hubTop.x} ${hubTop.y}`}
            />
          </circle>
        );
      })}

      {systems.map((s) => (
        <g key={s.id}>
          <rect
            x={s.x}
            y={s.y}
            width={BOX_WIDTH}
            height={BOX_HEIGHT}
            rx={8}
            fill="#131418"
            stroke="#8b5cf6"
            strokeWidth={2}
          />
          <text
            x={s.x + BOX_WIDTH / 2}
            y={s.y + 30}
            textAnchor="middle"
            fill="#f2f1ec"
            fontSize={14}
            fontWeight={700}
          >
            {s.title}
          </text>
          <text
            x={s.x + BOX_WIDTH / 2}
            y={s.y + 48}
            textAnchor="middle"
            fill="#a3a3ad"
            fontSize={11}
          >
            {s.subtitle}
          </text>
        </g>
      ))}

      <g>
        <rect
          x={hub.x}
          y={hub.y}
          width={BOX_WIDTH}
          height={BOX_HEIGHT}
          rx={8}
          fill="#131418"
          stroke="#baff29"
          strokeWidth={2}
        />
        <text
          x={hub.x + BOX_WIDTH / 2}
          y={hub.y + 30}
          textAnchor="middle"
          fill="#f2f1ec"
          fontSize={14}
          fontWeight={700}
        >
          {hub.title}
        </text>
        <text
          x={hub.x + BOX_WIDTH / 2}
          y={hub.y + 48}
          textAnchor="middle"
          fill="#a3a3ad"
          fontSize={11}
        >
          {hub.subtitle}
        </text>
      </g>
    </svg>
  );
}

export function ContactSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="bg-[#08090b] scroll-mt-16 py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <p data-reveal className="text-[#baff29] font-mono text-xs font-semibold tracking-[0.2em] uppercase text-center mb-2">
          CONTACT ME
        </p>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          Get In Touch
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          Hey, I am always open to a good chat. Let&apos;s talk.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div data-reveal>
            <SystemDiagram />
          </div>

          <div className="space-y-4">
            {contactCards.map(({ icon: Icon, title, subtitle, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                data-reveal
                className="rounded-xl border border-[#24262c] bg-[#131418] p-5 flex items-center gap-4 rim-glow-hover"
              >
                <Icon size={24} className="text-[#8b5cf6]" />
                <div>
                  <p className="font-bold text-[#f2f1ec]">{title}</p>
                  <p className="text-sm text-[#a3a3ad]">{subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div data-reveal className="flex justify-center mt-12">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-lg font-bold px-8 py-4 text-base bg-[#8b5cf6] hover:bg-[#a78bfa] text-[#08090b] transition-colors"
          >
            Talk To Me Personally
          </a>
        </div>
      </div>
    </section>
  );
}
