# Godwyn O. Neri — Personal Portfolio (Vercel) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a high-performance Next.js 15 personal portfolio web application executing the "Sketch" design system and ready for immediate deployment on Vercel.

**Architecture:** Single-page continuous working sheet built with Next.js 15 App Router and React 19. Core page layout uses React Server Components for zero-JS initial paint, with targeted client components for interactive dialogs (`ResumeModal`) and disclosures. All resume, project, and background details are embedded directly into type-safe data structures with zero raw file leaks.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Google Fonts (`Caveat`, `Patrick Hand` via `next/font`), Vitest / Testing Library.

**Spec:** [`docs/superpowers/specs/2026-10-28-portfolio-vercel-design.md`](../specs/2026-10-28-portfolio-vercel-design.md)

---

## Global Constraints

- **Phone Number:** Exactly `0934 770 7593` across all metadata, UI labels, and `tel:` links.
- **Color Ground:** `#f7f2e7` (warm paper ground) on all body and background elements.
- **Color Ink:** `#38352f` (graphite pencil ink) for headings and primary body text.
- **Color Accent:** `#9e3a2e` (pencil red) for critical actions and closing statements.
- **Color Annotation:** `#344c69` (blue marginalia) for notes, tags, and dashed focus rings.
- **Color Highlight:** `#f0dfa0` (yellow highlighter) for featured choices and text marks.
- **Color Scrap:** `#fcf8ef` (paper scrap) for cards and buttons.
- **Focus Rings:** `2px dashed #344c69` with `4px` offset on every interactive element.
- **No Raw File Leaks:** No `.md`, `.pdf`, or `.docx` files placed in `/public` or exposed as raw downloads.
- **Reduced Motion:** Fully disable transforms and hover tilts when `@media (prefers-reduced-motion: reduce)` is active.

---

## Review Focus

1. **Modal Keyboard Escape Trap:** Pressing `Escape` or clicking the backdrop must close the resume modal and restore focus to the triggering element.
2. **Contact Link Targets:** Email (`mailto:kuyagodwyn@gmail.com`), phone (`tel:09347707593`), and external links (`target="_blank"` with `rel="noopener noreferrer"`) must have valid attributes.
3. **Contrast Compliance:** Every foreground/background pairing must meet or exceed WCAG AA (minimum 4.5:1 body, 3:1 large).
4. **Portrait Aspect Ratio:** The taped mount portrait must load `photo.png` without layout shifts or stretched aspect ratios.
5. **Static Generation:** `npm run build` must produce a zero-error static build (`next build`) compatible with Vercel edge deployment.

---

### Task 1: Scaffolding, Next.js 15 & Sketch Styling Setup

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `vercel.json`

**Interfaces:**
- Produces: Base Next.js 15 App Router environment, Tailwind CSS with Sketch tokens, Google Fonts (`Caveat` & `Patrick Hand`), and Vercel configuration.

- [ ] **Step 1: Write `package.json` and install dependencies**

Setup scripts (`dev`, `build`, `start`, `test`), dependencies (`next`, `react`, `react-dom`), and devDependencies (`typescript`, `@types/node`, `@types/react`, `tailwindcss`, `postcss`, `autoprefixer`, `vitest`).

- [ ] **Step 2: Configure `tsconfig.json`, `tailwind.config.ts`, and `vercel.json`**

Map the exact Sketch design tokens from `DESIGN.md` in `tailwind.config.ts`:
```ts
colors: {
  ground: "#f7f2e7",
  ink: "#38352f",
  "ink-muted": "#514d44",
  line: "#b3ac9d",
  accent: "#9e3a2e",
  annotation: "#344c69",
  highlight: "#f0dfa0",
  scrap: "#fcf8ef",
  strip: "#eee8da",
}
```

- [ ] **Step 3: Create `app/globals.css` and `app/layout.tsx`**

Configure base paper grain overlay, font variables for `Caveat` and `Patrick Hand`, and global `:focus-visible` dashed blue rings.

- [ ] **Step 4: Verify initial build**

Run: `npm run build`
Expected: Next.js compiles successfully with standard empty root route.

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json tailwind.config.ts app/ vercel.json
git commit -m "chore: scaffold Next.js 15 app with Sketch design tokens"
```

---

### Task 2: Structured Portfolio Data Model & Unit Tests

**Files:**
- Create: `data/portfolio.ts`
- Test: `data/portfolio.test.ts`

**Interfaces:**
- Produces: `export interface PortfolioData`, `export const portfolioData: PortfolioData` containing profile, projects, metrics, skills ledger, and resume entries.

- [ ] **Step 1: Write the failing unit test in `data/portfolio.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { portfolioData } from "./portfolio";

describe("portfolioData", () => {
  it("contains verified profile data with updated phone number", () => {
    expect(portfolioData.profile.name).toBe("Godwyn O. Neri");
    expect(portfolioData.profile.phone).toBe("0934 770 7593");
    expect(portfolioData.profile.email).toBe("kuyagodwyn@gmail.com");
  });

  it("contains all 4 key engineering projects", () => {
    expect(portfolioData.projects).toHaveLength(4);
    const titles = portfolioData.projects.map(p => p.title);
    expect(titles).toContain("Lumina LMS — Library Ecosystem");
    expect(titles).toContain("VALORANT Performance Optimizer (val-opt)");
  });

  it("does not expose any raw file download links", () => {
    const rawString = JSON.stringify(portfolioData);
    expect(rawString).not.toContain(".pdf");
    expect(rawString).not.toContain(".docx");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run data/portfolio.test.ts`
Expected: FAIL with module `./portfolio` not found.

- [ ] **Step 3: Implement `data/portfolio.ts`**

Export typed `portfolioData` containing:
- `profile`: name, title, school, location, phone (`0934 770 7593`), email, github, linkedin.
- `metrics`: `4+` systems, `100%` Vanguard compliant, `180 hrs` hardware & IT support.
- `projects`: Lumina LMS, val-opt, BlotterSys, ESP32-S3 Bridge with details and tags.
- `skills`: categorized by Languages, Web Dev, Databases/Auth, Systems/Hardware, Tooling.
- `resumeSections`: Summary, Education, Experience, Extracurricular.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run data/portfolio.test.ts`
Expected: PASS (3/3 tests passing).

- [ ] **Step 5: Commit**

```bash
git add data/portfolio.ts data/portfolio.test.ts
git commit -m "feat(data): add structured portfolio data model and unit tests"
```

---

### Task 3: Hero Section, Metric Brackets & Taped Portrait

**Files:**
- Create: `components/HeroSection.tsx`
- Create: `components/MetricBrackets.tsx`
- Create: `public/photo.png`
- Test: `components/__tests__/HeroSection.test.tsx`

**Interfaces:**
- Consumes: `portfolioData` from `data/portfolio.ts`.
- Produces: `<HeroSection onOpenResume={() => void} />` and `<MetricBrackets />`.

- [ ] **Step 1: Copy `My photo.png` to `public/photo.png`**

Ensure the portrait asset is available at `/photo.png` with non-destructive copy.

- [ ] **Step 2: Write component test in `components/__tests__/HeroSection.test.tsx`**

Test that headline renders, phone `0934 770 7593` is present in marginalia, portrait photo renders with alt text, and clicking "Preview Resume" triggers `onOpenResume`.

- [ ] **Step 3: Implement `<HeroSection />` and `<MetricBrackets />`**

- `<HeroSection />`: Large marker statement, irregular hand-drawn SVG underline, pencil arrow, taped portrait mount (`photo.png`) with translucent yellow tape strip, blue marginalia notes scrap, and action buttons (`btn-accent` Contact, `btn-primary` Preview Resume).
- `<MetricBrackets />`: Crisp hand-drawn pencil brackets enclosing metrics (`4+`, `100%`, `180 hrs`).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/__tests__/HeroSection.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/HeroSection.tsx components/MetricBrackets.tsx public/photo.png components/__tests__/HeroSection.test.tsx
git commit -m "feat(ui): add HeroSection with taped portrait and MetricBrackets"
```

---

### Task 4: Projects Grid & Engineering Process Strip

**Files:**
- Create: `components/ProjectsGrid.tsx`
- Create: `components/ProcessStrip.tsx`
- Test: `components/__tests__/ProjectsGrid.test.tsx`

**Interfaces:**
- Consumes: `portfolioData.projects` and `portfolioData.processSteps`.
- Produces: `<ProjectsGrid />` and `<ProcessStrip />`.

- [ ] **Step 1: Write component test in `components/__tests__/ProjectsGrid.test.tsx`**

Verify all 4 projects render with titles, stack chips, and checkmark bullets. Verify ProcessStrip renders steps 1 through 4.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/__tests__/ProjectsGrid.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `<ProjectsGrid />` and `<ProcessStrip />`**

- `<ProjectsGrid />`: Staggered desktop layout (`md:grid-cols-2`, even items `mt-6`), pale paper scrap cards (`bg-scrap`), pencil checkmarks (`✓`), tags (`text-annotation`).
- `<ProcessStrip />`: Darker irregular paper container (`bg-strip`), circled hand-drawn step numbers (`1` to `4`), step labels, and directional arrows.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/__tests__/ProjectsGrid.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ProjectsGrid.tsx components/ProcessStrip.tsx components/__tests__/ProjectsGrid.test.tsx
git commit -m "feat(ui): add ProjectsGrid and ProcessStrip components"
```

---

### Task 5: Skills Ledger, Academic Disclosures & Footer

**Files:**
- Create: `components/SkillsLedger.tsx`
- Create: `components/AcademicDisclosures.tsx`
- Create: `components/Footer.tsx`
- Test: `components/__tests__/Footer.test.tsx`

**Interfaces:**
- Consumes: `portfolioData.skills`, `portfolioData.coursework`, `portfolioData.profile`.
- Produces: `<SkillsLedger />`, `<AcademicDisclosures />`, `<Footer onOpenResume={() => void} />`.

- [ ] **Step 1: Write component test in `components/__tests__/Footer.test.tsx`**

Verify that closing red statement is present, contact buttons link to `mailto:kuyagodwyn@gmail.com` and GitHub, and footer displays phone `0934 770 7593` and Parañaque City.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/__tests__/Footer.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `<SkillsLedger />`, `<AcademicDisclosures />`, and `<Footer />`**

- `<SkillsLedger />`: Broad horizontal rows with *Core Specializations* featured in yellow highlighter sheet (`bg-highlight`) with deep amber ink (`text-[#2b2200]`).
- `<AcademicDisclosures />`: Accessible `<details>`/`<summary>` with rotating `+` mark, STI College Alabang coursework, and Coder's Club leadership.
- `<Footer />`: Red statement in Caveat font, contact actions, divided pencil footer with updated phone `0934 770 7593`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/__tests__/Footer.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/SkillsLedger.tsx components/AcademicDisclosures.tsx components/Footer.tsx components/__tests__/Footer.test.tsx
git commit -m "feat(ui): add SkillsLedger, AcademicDisclosures, and Footer"
```

---

### Task 6: Accessible Resume Modal & Page Integration

**Files:**
- Create: `components/ResumeModal.tsx`
- Modify: `app/page.tsx`
- Test: `components/__tests__/ResumeModal.test.tsx`

**Interfaces:**
- Consumes: `isOpen: boolean`, `onClose: () => void`, `portfolioData`.
- Produces: `<ResumeModal isOpen={isOpen} onClose={onClose} />` and fully assembled `<HomePage />`.

- [ ] **Step 1: Write interaction test in `components/__tests__/ResumeModal.test.tsx`**

Test that modal is hidden when `isOpen={false}`, visible with `role="dialog"` and `aria-modal="true"` when `isOpen={true}`, calls `onClose` on close button click, and calls `onClose` when `Escape` key is pressed.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run components/__tests__/ResumeModal.test.tsx`
Expected: FAIL.

- [ ] **Step 3: Implement `<ResumeModal />` and integrate into `app/page.tsx`**

- `<ResumeModal />`: Render on-screen paper resume overlay with sections (Objective, Education, Technical Skills, Projects, Experience, Honors). Keyboard listeners for `Escape`, backdrop click, close button with `:focus-visible` dashed blue outline.
- `app/page.tsx`: Main page assembling `<HeroSection />`, `<MetricBrackets />`, `<ProjectsGrid />`, `<ProcessStrip />`, `<SkillsLedger />`, `<AcademicDisclosures />`, `<Footer />`, and `<ResumeModal />`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run components/__tests__/ResumeModal.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ResumeModal.tsx app/page.tsx components/__tests__/ResumeModal.test.tsx
git commit -m "feat(ui): implement accessible ResumeModal and assemble homepage"
```

---

### Task 7: Full Static Build, Vercel Readiness & Impeccable Audit

**Files:**
- Modify: `vercel.json`
- Verification: Entire project build & design detector

**Interfaces:**
- Produces: Production build artifact in `.next/` with zero errors, verified responsive layout, and design detector clean bill of health.

- [ ] **Step 1: Run comprehensive test suite**

Run: `npm test`
Expected: All unit and component tests PASS.

- [ ] **Step 2: Run production Next.js build**

Run: `npm run build`
Expected: Successful pre-rendering of `/` as static export (SSG), zero TypeScript errors, zero hydration errors.

- [ ] **Step 3: Verify zero file leaks in public output**

Run: `Get-ChildItem -Recurse public/`
Expected: Only `photo.png` and web assets. No `.pdf`, `.docx`, or `.md` files present.

- [ ] **Step 4: Run Impeccable Design Detector**

Run: `& "C:\Users\Godwyn\.gemini\antigravity-cli\skills\impeccable\scripts\impeccable.cmd" detect --json app/`
Expected: No contrast violations, valid Sketch tokens.

- [ ] **Step 5: Final Git Commit**

```bash
git add .
git commit -m "feat: complete portfolio web application ready for Vercel deployment"
```
