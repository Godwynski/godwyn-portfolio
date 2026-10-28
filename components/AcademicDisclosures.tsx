import React from "react";
import type { DisclosureItem } from "@/data/portfolio";

interface AcademicDisclosuresProps {
  items: DisclosureItem[];
}

export function AcademicDisclosures({ items }: AcademicDisclosuresProps) {
  return (
    <section aria-labelledby="academic-heading" className="space-y-4">
      <h2
        id="academic-heading"
        className="font-marker text-[clamp(1.6rem,4.5vw,2.5rem)] font-bold text-ink flex items-center gap-2.5 sm:gap-3"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-annotation shrink-0"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <span>Academic Background & Practical Experience</span>
      </h2>

      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <details
            key={idx}
            className="group bg-scrap border-[1.5px] border-ink rounded-control p-3 sm:p-3.5 sm:px-5 shadow-control transition-all"
          >
            <summary className="font-marker text-xl sm:text-2xl font-bold text-ink cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-2.5 select-none min-h-[48px] py-1">
              <span>{item.title}</span>
              <span
                className="text-2xl text-accent transition-transform duration-100 group-open:rotate-45 shrink-0"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="mt-3 pt-3 border-t border-dashed border-line text-[23px] text-ink-muted leading-relaxed">
              {item.content}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
