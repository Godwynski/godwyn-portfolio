import React from "react";
import type { Project } from "@/data/portfolio";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section aria-labelledby="projects-heading" className="space-y-6">
      <h2
        id="projects-heading"
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
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <span>Engineered Systems & Featured Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className={`bg-scrap border-[1.5px] border-line rounded-scrap p-6 shadow-scrap hover:-translate-y-0.5 transition-transform ${
              idx % 2 === 1 ? "md:mt-6" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[21px] text-annotation border-b-[1.5px] border-dashed border-annotation pb-0.5">
                {project.tag} &bull; {project.period}
              </span>
            </div>

            <h3 className="font-marker text-2xl font-bold text-ink mb-1.5 leading-snug">
              {project.title}
            </h3>

            <p className="text-[21px] text-ink-muted italic mb-3">
              {project.stack}
            </p>

            <p className="text-[23px] text-ink leading-relaxed mb-4">
              {project.description}
            </p>

            <ul className="text-[21px] leading-snug space-y-2">
              {project.highlights.map((item, hIdx) => (
                <li key={hIdx} className="flex items-baseline gap-2">
                  <span className="text-accent font-bold select-none" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
