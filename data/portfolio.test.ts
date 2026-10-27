import { describe, it, expect } from "vitest";
import { portfolioData } from "./portfolio";

describe("portfolioData", () => {
  it("contains verified profile data with updated phone number", () => {
    expect(portfolioData.profile.name).toBe("Godwyn O. Neri");
    expect(portfolioData.profile.phone).toBe("0934 770 7593");
    expect(portfolioData.profile.email).toBe("kuyagodwyn@gmail.com");
    expect(portfolioData.profile.location).toContain("Parañaque City");
    expect(portfolioData.profile.school).toBe("STI College Alabang");
  });

  it("contains all 4 key engineering projects with verified details", () => {
    expect(portfolioData.projects).toHaveLength(4);
    const titles = portfolioData.projects.map((p) => p.title);
    expect(titles).toContain("Lumina LMS — Library Ecosystem");
    expect(titles).toContain("VALORANT Performance Optimizer (val-opt)");
    expect(titles).toContain("BlotterSys — Barangay Records Portal");
    expect(titles).toContain("ESP32-S3 Remote Hardware Management Bridge");
  });

  it("contains 4 engineering process workflow steps", () => {
    expect(portfolioData.processSteps).toHaveLength(4);
    expect(portfolioData.processSteps[0].title).toBe("Model & Scope");
  });

  it("contains metrics and skills ledger", () => {
    expect(portfolioData.metrics).toHaveLength(3);
    expect(portfolioData.skillsLedger.featured.category).toBe("Core Specialization");
    expect(portfolioData.skillsLedger.rows.length).toBeGreaterThan(0);
  });

  it("does not expose any raw file download links", () => {
    const rawString = JSON.stringify(portfolioData);
    expect(rawString).not.toContain(".pdf");
    expect(rawString).not.toContain(".docx");
  });
});
