import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SkillsLedger } from "../SkillsLedger";
import { AcademicDisclosures } from "../AcademicDisclosures";
import { Footer } from "../Footer";
import { portfolioData } from "@/data/portfolio";

describe("SkillsLedger, AcademicDisclosures & Footer", () => {
  it("renders skills ledger with Core Specialization highlighted", () => {
    render(<SkillsLedger ledger={portfolioData.skillsLedger} />);

    expect(screen.getByText("Core Specialization")).toBeDefined();
    expect(screen.getByText(/Full-Stack Next.js/i)).toBeDefined();
    expect(screen.getByText("Languages")).toBeDefined();
    expect(screen.getByText(/Rust, TypeScript, JavaScript/i)).toBeDefined();
  });

  it("renders academic disclosures with course items", () => {
    render(<AcademicDisclosures items={portfolioData.academicDisclosures} />);

    expect(screen.getByText(/Relevant Coursework at STI College Alabang/i)).toBeDefined();
    expect(screen.getByText(/Leadership & Extracurricular Activities/i)).toBeDefined();
    expect(screen.getByText(/Practical IT Support & Hardware Experience/i)).toBeDefined();
  });

  it("renders footer with closing red statement, contact links, and updated phone number", () => {
    const handleOpen = vi.fn();
    render(<Footer onOpenResume={handleOpen} />);

    expect(
      screen.getByText(/Ready to contribute disciplined execution/i)
    ).toBeDefined();

    const emailLink = screen.getByRole("link", { name: /email/i });
    expect(emailLink.getAttribute("href")).toBe("mailto:kuyagodwyn@gmail.com");

    const phoneElement = screen.getByText(/0934 770 7593/);
    expect(phoneElement).toBeDefined();

    const resumeBtn = screen.getByRole("button", { name: /preview resume/i });
    fireEvent.click(resumeBtn);
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });
});
