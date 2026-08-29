"use client";

import { useRef, type MouseEvent } from "react";
import gsap from "gsap";

export function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateX: -py * max,
      rotateY: px * max,
      transformPerspective: 800,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
  };

  return { ref, onMouseMove, onMouseLeave };
}
