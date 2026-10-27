import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ResumeModal } from "../ResumeModal";

describe("ResumeModal", () => {
  it("renders nothing when isOpen is false", () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={false} onClose={handleClose} />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders accessible modal with resume content when isOpen is true", () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={handleClose} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeDefined();
    expect(dialog.getAttribute("aria-modal")).toBe("true");

    expect(screen.getByText(/CAREER OBJECTIVE/i)).toBeDefined();
    expect(screen.getAllByText(/STI College Alabang/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/0934 770 7593/)).toBeDefined();
    expect(screen.getByText(/Lumina LMS/i)).toBeDefined();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={handleClose} />);

    const closeBtn = screen.getByRole("button", { name: /close resume/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", () => {
    const handleClose = vi.fn();
    render(<ResumeModal isOpen={true} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: "Escape", code: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
