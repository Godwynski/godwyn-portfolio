import React from "react";
import type { Metric } from "@/data/portfolio";

interface MetricBracketsProps {
  metrics: Metric[];
}

export function MetricBrackets({ metrics }: MetricBracketsProps) {
  return (
    <section className="py-4" aria-labelledby="bracket-facts-title">
      <h2
        id="bracket-facts-title"
        className="font-marker text-2xl text-ink mb-3 flex items-center gap-2"
      >
        <span>[ Key Metrics & Systems Handled ]</span>
      </h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 border-l-[3px] border-b-[3px] border-ink pl-5 pb-4 rounded-bl-lg before:content-[''] before:absolute before:top-0 before:-left-[3px] before:w-4 before:h-[3px] before:bg-ink after:content-[''] after:absolute after:-bottom-[3px] after:right-0 after:w-[3px] after:h-4 after:bg-ink">
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-marker text-3xl font-bold text-accent leading-none">
              {metric.value}
            </span>
            <span className="text-[21px] text-ink-muted leading-snug mt-1">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
