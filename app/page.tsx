"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { HeroSection } from "@/components/HeroSection";
import { MetricBrackets } from "@/components/MetricBrackets";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ProcessStrip } from "@/components/ProcessStrip";
import { SkillsLedger } from "@/components/SkillsLedger";
import { AcademicDisclosures } from "@/components/AcademicDisclosures";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <main className="max-w-[1060px] mx-auto px-4 py-8 sm:py-12 flex flex-col gap-12 sm:gap-14">
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Metric Brackets */}
        <MetricBrackets metrics={portfolioData.metrics} />

        {/* Featured Projects Grid */}
        <ProjectsGrid projects={portfolioData.projects} />

        {/* Engineering Process Strip */}
        <ProcessStrip steps={portfolioData.processSteps} />

        {/* Skills Ledger */}
        <SkillsLedger ledger={portfolioData.skillsLedger} />

        {/* Academic Disclosures */}
        <AcademicDisclosures items={portfolioData.academicDisclosures} />

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Accessible Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
