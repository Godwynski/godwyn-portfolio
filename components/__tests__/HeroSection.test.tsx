import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { HeroSection } from "../HeroSection";
import { MetricBrackets } from "../MetricBrackets";
import { portfolioData } from "@/data/portfolio";

describe("HeroSection & MetricBrackets", () => {
  it("renders the hero statement, headline, and updated phone number", () => {
    render(<HeroSection onOpenResume={vi.fn()} />);

    expect(screen.getByText(/Hi, I'm Godwyn/i)).toBeDefined();
    expect(screen.getByText(/0934 770 7593/)).toBeDefined();
    expect(screen.getAllByText(/STI College Alabang/i).length).toBeGreaterThan(0);
  });

  it("renders the portrait image inside taped mount", () => {
    render(<HeroSection onOpenResume={vi.fn()} />);
    const img = screen.getByAltText("Portrait photo of Godwyn O. Neri") as HTMLImageElement;
    expect(img).toBeDefined();
    expect(img.src).toContain("photo.png");
  });

  it("triggers onOpenResume when clicking Preview Resume button", () => {
    const handleOpen = vi.fn();
    render(<HeroSection onOpenResume={handleOpen} />);

    const previewBtn = screen.getByRole("button", { name: /preview resume/i });
    fireEvent.click(previewBtn);
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  it("renders MetricBrackets with verified accomplishments", () => {
    render(<MetricBrackets metrics={portfolioData.metrics} />);

    expect(screen.getByText("4+")).toBeDefined();
    expect(screen.getByText("100%")).toBeDefined();
    expect(screen.getByText("180 hrs")).toBeDefined();
  });
});
