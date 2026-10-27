"use client";

import React, { useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { profile, resume, projects } = portfolioData;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-ink/50 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-ground border-2 border-ink rounded-scrap p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close resume"
          className="absolute top-4 right-4 w-9 h-9 border-[1.5px] border-ink bg-scrap rounded-control flex items-center justify-center font-bold text-ink hover:bg-highlight hover:shadow-control text-xl transition-all cursor-pointer"
        >
          &times;
        </button>

        {/* Header */}
        <header className="border-b-[1.5px] border-ink pb-4">
          <h2
            id="modal-resume-title"
            className="font-marker text-3xl sm:text-4xl font-bold text-ink"
          >
            {profile.name}
          </h2>
          <p className="text-[23px] font-bold text-accent">{profile.title}</p>
          <p className="text-[21px] text-ink-muted mt-1">
            {profile.location}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[21px] text-ink mt-2">
            <span>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="text-annotation underline">
                {profile.phone}
              </a>
            </span>
            <span>&bull;</span>
            <span>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${profile.email}`} className="text-annotation underline">
                {profile.email}
              </a>
            </span>
          </div>
        </header>

        {/* Career Objective */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Career Objective
          </h3>
          <p className="text-[21px] text-ink leading-relaxed">
            {resume.careerObjective}
          </p>
        </section>

        {/* Education */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Education
          </h3>
          <div>
            <strong className="block text-[23px] text-ink">
              {resume.education.institution}
            </strong>
            <span className="text-[21px] italic text-ink-muted block">
              {resume.education.degree} — {resume.education.status}
            </span>
            <p className="text-[21px] text-ink-muted mt-1">
              <strong>Coursework:</strong> {resume.education.coursework.join(", ")}.
            </p>
          </div>
          <div className="mt-3">
            <strong className="block text-[21px] text-ink">
              {resume.education.secondary.school}
            </strong>
            <span className="text-[21px] text-ink-muted">
              {resume.education.secondary.honors} ({resume.education.secondary.years})
            </span>
          </div>
        </section>

        {/* Technical Skills Profile */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Technical Skills Profile
          </h3>
          <ul className="text-[21px] space-y-1 text-ink">
            <li>
              <strong>Languages:</strong> {resume.skillsProfile.languages.join(", ")}
            </li>
            <li>
              <strong>Web Development:</strong> {resume.skillsProfile.webDev.join(", ")}
            </li>
            <li>
              <strong>Databases & Cloud:</strong> {resume.skillsProfile.databases.join(", ")}
            </li>
            <li>
              <strong>Systems & Hardware:</strong> {resume.skillsProfile.systemsHardware.join(", ")}
            </li>
            <li>
              <strong>Developer Tools:</strong> {resume.skillsProfile.tools.join(", ")}
            </li>
          </ul>
        </section>

        {/* Key Projects */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Key Technical Projects
          </h3>
          <div className="space-y-4">
            {projects.map((proj, pIdx) => (
              <div key={pIdx}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <strong className="text-[23px] text-ink">{proj.title}</strong>
                  <span className="text-[21px] text-annotation">{proj.period}</span>
                </div>
                <div className="text-[21px] italic text-ink-muted">{proj.stack}</div>
                <ul className="list-disc list-inside text-[21px] mt-1 space-y-0.5 text-ink">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work & Practical Experience */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Work & Practical Experience
          </h3>
          <div className="space-y-3">
            {resume.workExperience.map((work, wIdx) => (
              <div key={wIdx}>
                <strong className="text-[21px] text-ink block">{work.role}</strong>
                <span className="text-[21px] text-ink-muted italic block">
                  {work.company} &bull; {work.type}
                </span>
                <ul className="list-disc list-inside text-[21px] mt-1 space-y-0.5 text-ink">
                  {work.description.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Extracurricular Leadership */}
        <section>
          <h3 className="font-marker text-2xl font-bold text-ink border-b border-line pb-1 mb-2">
            Extracurricular Leadership
          </h3>
          {resume.extracurricular.map((extra, eIdx) => (
            <div key={eIdx}>
              <strong className="text-[21px] text-ink block">
                {extra.role} — {extra.organization}
              </strong>
              <span className="text-[21px] text-ink-muted italic block mb-1">
                {extra.period}
              </span>
              <ul className="list-disc list-inside text-[21px] space-y-0.5 text-ink">
                {extra.description.map((d, dIdx) => (
                  <li key={dIdx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Footer in Modal */}
        <div className="pt-4 border-t border-line flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-accent text-scrap border-[1.5px] border-ink rounded-control px-5 py-2 font-bold shadow-control hover:shadow-[1px_1px_0px_#38352f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[21px] cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
