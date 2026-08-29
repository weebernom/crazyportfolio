"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "./data";
import { useScrollReveal } from "../shared/useScrollReveal";

export function FAQSection() {
  const ref = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="bg-[#08090b] scroll-mt-16 py-24">
      <div className="container max-w-3xl mx-auto px-6">
        <p data-reveal className="text-[#baff29] font-mono text-xs font-semibold tracking-[0.2em] uppercase text-center mb-2">
          FAQ
        </p>
        <h2 data-reveal className="font-heading text-4xl md:text-5xl font-bold text-center text-[#f2f1ec] mb-4">
          Frequently Asked
        </h2>
        <p data-reveal className="text-center text-[#a3a3ad] mb-12">
          The stuff people usually ask before reaching out.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                data-reveal
                className="rounded-xl border border-[#24262c] bg-[#131418] overflow-hidden rim-glow-hover"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-heading font-bold text-[#f2f1ec]">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#8b5cf6] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-[#a3a3ad]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
