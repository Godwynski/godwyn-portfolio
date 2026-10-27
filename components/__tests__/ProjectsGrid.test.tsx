import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ProjectsGrid } from "../ProjectsGrid";
import { ProcessStrip } from "../ProcessStrip";
import { portfolioData } from "@/data/portfolio";

describe("ProjectsGrid & ProcessStrip", () => {
  it("renders all 4 projects with tags and stack chips", () => {
    render(<ProjectsGrid projects={portfolioData.projects} />);

    expect(screen.getByText(/Lumina LMS — Library Ecosystem/i)).toBeDefined();
    expect(screen.getByText(/VALORANT Performance Optimizer/i)).toBeDefined();
    expect(screen.getByText(/BlotterSys — Barangay Records Portal/i)).toBeDefined();
    expect(screen.getByText(/ESP32-S3 Remote Hardware Management Bridge/i)).toBeDefined();
  });

  it("renders checkmark highlights for project items", () => {
    render(<ProjectsGrid projects={portfolioData.projects} />);
    expect(screen.getByText(/PostgreSQL Row-Level Security/i)).toBeDefined();
    expect(screen.getByText(/100% Riot Vanguard anti-cheat compliance/i)).toBeDefined();
  });

  it("renders all 4 process steps with circled numbers and titles", () => {
    render(<ProcessStrip steps={portfolioData.processSteps} />);

    expect(screen.getByText("Model & Scope")).toBeDefined();
    expect(screen.getByText("Architect & Code")).toBeDefined();
    expect(screen.getByText("Benchmark & Test")).toBeDefined();
    expect(screen.getByText("Document & Deploy")).toBeDefined();
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("4")).toBeDefined();
  });
});
