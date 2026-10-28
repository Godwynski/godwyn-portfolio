import React from "react";
import type { ProcessStep } from "@/data/portfolio";

interface ProcessStripProps {
  steps: ProcessStep[];
}

export function ProcessStrip({ steps }: ProcessStripProps) {
  return (
    <section
      className="bg-strip border-[1.5px] border-line rounded-[9px_14px_7px_11px/12px_6px_14px_8px] p-4 sm:p-6 md:p-7 shadow-scrap"
      aria-labelledby="process-heading"
    >
      <h2
        id="process-heading"
        className="font-marker text-xl sm:text-2xl font-bold text-ink mb-4 sm:mb-5"
      >
        Development & Engineering Workflow
      </h2>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4">
        {steps.map((step, idx) => (
          <React.Fragment key={step.number}>
            <div className="flex items-start gap-3 sm:gap-3.5 flex-1">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 border-2 border-ink rounded-[50%_45%_55%_48%/48%_54%_46%_52%] flex items-center justify-center font-marker text-xl sm:text-2xl font-bold bg-scrap text-accent select-none"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="text-[21px] leading-snug">
                <div className="font-bold text-ink text-[23px]">
                  {step.title}
                </div>
                <div className="text-ink-muted mt-0.5">{step.description}</div>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <>
                <div
                  className="hidden lg:block text-annotation font-marker text-2xl px-2 select-none"
                  aria-hidden="true"
                >
                  &rarr;
                </div>
                <div
                  className="lg:hidden text-center text-annotation font-marker text-xl -my-1 select-none"
                  aria-hidden="true"
                >
                  &darr;
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
