import React from "react";
import type { PortfolioData } from "@/data/portfolio";

interface SkillsLedgerProps {
  ledger: PortfolioData["skillsLedger"];
}

export function SkillsLedger({ ledger }: SkillsLedgerProps) {
  return (
    <section aria-labelledby="skills-heading" className="space-y-4">
      <h2
        id="skills-heading"
        className="font-marker text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-ink flex items-center gap-3"
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
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <span>Technical Skills Profile & Comparison</span>
      </h2>

      <div className="flex flex-col gap-3.5">
        {/* Featured Highlighted Sheet */}
        <div className="flex flex-col md:flex-row md:items-center justify-between bg-highlight border-[1.5px] border-ink rounded-scrap p-4 md:px-5 gap-2 shadow-control -rotate-[0.5deg]">
          <div className="md:w-1/3">
            <span className="font-marker text-2xl font-bold text-[#2b2200]">
              {ledger.featured.category}
            </span>
          </div>
          <div className="md:w-2/3 text-[21px] text-[#2b2200] font-medium leading-snug">
            {ledger.featured.skills}
          </div>
        </div>

        {/* Regular Ledger Rows */}
        {ledger.rows.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center justify-between bg-scrap border-[1.5px] border-line rounded-scrap p-4 md:px-5 gap-2 shadow-scrap-sm"
          >
            <div className="md:w-1/3">
              <span className="font-marker text-2xl font-bold text-ink">
                {row.category}
              </span>
            </div>
            <div className="md:w-2/3 text-[21px] text-ink-muted leading-snug">
              {row.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
