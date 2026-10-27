# Design Specification: Godwyn O. Neri — Personal Portfolio for Vercel

**Date:** 2026-10-28  
**Topic:** Personal Portfolio Web Application  
**Deployment Target:** Vercel  
**Design System:** Sketch (`DESIGN.md`)  
**Status:** Approved by User  

---

## 1. Overview & Goals

This specification details the architecture, design, and component hierarchy for a high-performance personal developer portfolio for **Godwyn O. Neri**, purpose-built to be deployed seamlessly on **Vercel**.

### Primary Objectives:
1. **Highlight Verified Engineering Capabilities:** Showcase Godwyn's capstone project (Lumina LMS), native systems utilities (val-opt ETW engine in Rust), web apps (BlotterSys), and embedded firmware (ESP32-S3 bridge).
2. **Execute the "Sketch" Visual Identity:** Bring the tactile working-sheet aesthetic documented in [`DESIGN.md`](../../DESIGN.md) to life—warm paper ground, graphite ink, blue marginalia, red editorial highlights, soft yellow washes, taped mounts, and hand-drawn accents.
3. **Embed Content Directly (Zero Raw File Exposure):** Retain all factual career details, resume bullets, and reflections directly embedded in structured, type-safe data structures—without copying or exposing raw `.md`, `.pdf`, or `.docx` files to public download directories.
4. **Accessible & Responsive by Default:** Comply with WCAG 2.2 AA/AAA guidelines, visible dashed focus indicators, ARIA modal dialog semantics, keyboard navigation, and full support for `prefers-reduced-motion`.
5. **Vercel Edge Ready:** Pure static pre-rendering (SSG) with zero backend runtime dependencies, instant global edge distribution, and sub-second initial paint.

---

## 2. Technical Stack & Architecture

### Core Technologies
* **Framework:** Next.js 15 (App Router) + React 19 + TypeScript.
* **Styling:** Tailwind CSS configured with custom tokens matching `DESIGN.md`.
* **Typography:** `next/font/google` loading:
  * Display / Marker: `Caveat` (weights: 600, 700)
  * Reading / Body Hand: `Patrick Hand` (weight: 400)
* **Image Optimization:** `next/image` with WebP/AVIF output for `My photo.png`.
* **Deployment & Hosting:** Vercel (Edge Network, Static Site Generation).

### File & Directory Layout
```text
├── app/
│   ├── layout.tsx              # Root HTML layout, font bindings, ambient grain, metadata
│   ├── page.tsx                # Server Component: Main single-page working sheet
│   └── globals.css             # Authoritative CSS tokens, selection, dashed focus outlines
├── components/
│   ├── HeroSection.tsx         # Statement, irregular underline SVG, pencil arrow, taped photo
│   ├── MetricBrackets.tsx      # Hand-drawn bracket with key systems facts
│   ├── ProjectsGrid.tsx        # Staggered cards with hand-drawn checkmarks
│   ├── ProcessStrip.tsx        # Darker irregular paper strip with circled steps (1-4)
│   ├── SkillsLedger.tsx        # Comparison rows with featured yellow highlight sheet
│   ├── AcademicDisclosures.tsx # Native accessible details/summary accordions
│   ├── ResumeModal.tsx         # Client Component: Accessible on-screen resume dialog
│   └── Footer.tsx              # Closing red statement, contact buttons, divided footer
├── data/
│   └── portfolio.ts            # Type-safe structured portfolio data embedded directly
├── public/
│   ├── photo.png               # High-res portrait (from My photo.png)
│   └── grain.svg               # Subtle paper grain overlay
├── vercel.json                 # Security headers and Edge caching rules
├── tailwind.config.ts          # Exact token mapping from DESIGN.md
├── package.json
└── tsconfig.json
```

---

## 3. Data Model & Information Integration

Per user instruction, no raw `.md`, `.pdf`, or `.docx` files will be served or added to public downloads. All facts are directly modeled into `data/portfolio.ts`:

### Profile & Contact Data
* **Name:** Godwyn O. Neri
* **Title:** Full-Stack Software Developer | IT Systems Specialist
* **Status:** 4th-Year BSIT Student, STI College Alabang (Expected Grad: 2027)
* **Location:** 12A Laos Street, Better Living Subdivision, Brgy. Don Bosco, Parañaque City, Metro Manila
* **Phone:** `0934 770 7593` (Updated per explicit request)
* **Email:** `kuyagodwyn@gmail.com`
* **GitHub:** `https://github.com/Godwynski`
* **LinkedIn:** `https://www.linkedin.com/in/godwyn-neri-296ab1407/`

### Project Case Studies
1. **Lumina LMS — Library Management & Attendance Ecosystem** *(Capstone, 2026–Present)*
   * *Stack:* Next.js (App Router), TypeScript, Supabase, PostgreSQL, Tailwind CSS, Azure Active Directory SSO.
   * *Accomplishments:* Modernized circulation and attendance; implemented institutional Azure SSO; Dewey Decimal Classification (DDC) cataloging; PostgreSQL Row-Level Security (RLS) data policies.
2. **VALORANT Performance Optimizer (val-opt)** *(2026)*
   * *Stack:* Rust, Windows Kernel Event Tracing for Windows (ETW), Win32 API, Slint GUI.
   * *Accomplishments:* Low-latency system optimization; real-time ETW event subscription; sub-millisecond timers; atomic registry auto-rollback; 100% Riot Vanguard anti-cheat compliance.
3. **BlotterSys — Barangay Incident & Records Management Portal** *(2024–2025)*
   * *Stack:* Next.js 14, React, TypeScript, SQL, Tailwind CSS.
   * *Accomplishments:* Centralized pre-blotter incident logging; Katarungang Pambarangay 3-hearing resolution workflows; automated clearance generation with QR codes; encrypted evidence uploads.
4. **ESP32-S3 Remote Hardware Management Bridge** *(2024)*
   * *Stack:* C++, PlatformIO, ESP32-S3 Microcontroller, Telegram Bot API, USB HID.
   * *Accomplishments:* Real-time hardware telemetry alerts over Telegram webhooks; optocoupler relay remote power switching; USB HID emergency diagnostic keystrokes.

---

## 4. Visual Design & Component Specifications

The interface executes the authoritative tokens established in [`DESIGN.md`](../../DESIGN.md):

### Authoritative Tokens
| Token | CSS Variable | Value | Purpose |
| :--- | :--- | :--- | :--- |
| Ground | `--dp-color-ground` | `#f7f2e7` | Warm unbleached paper sheet background |
| Ink | `--dp-color-ink` | `#38352f` | Dark graphite pencil ink for headings & text |
| Muted Ink | `--dp-color-ink-muted` | `#514d44` | Secondary text, captions, and dates |
| Line | `--dp-color-line` | `#b3ac9d` | Erased-line pencil rules and quiet borders |
| Accent | `--dp-color-accent` | `#9e3a2e` | Red felt-marker actions, high-leverage CTAs |
| Annotation | `--dp-color-annotation` | `#344c69` | Blue notes, marginalia, dashed focus rings |
| Highlight | `--dp-color-highlight` | `#f0dfa0` | Soft yellow highlighter wash for featured items |
| Scrap | `--dp-color-scrap` | `#fcf8ef` | Lighter paper scrap cards and button faces |
| Strip | `--dp-color-strip` | `#eee8da` | Slightly darker paper strip for process flow |
| Radius Control | `--dp-radius-control` | `9px 4px 17px 5px / 4px 12px 5px 9px` | Hand-drawn organic border curves |
| Radius Scrap | `--dp-radius-scrap` | `2px 4px 3px 5px / 4px 2px 5px 3px` | Subtle sheet corner irregularities |
| Stroke | `--dp-border-fine-stroke` | `1.5px` | Pencil-weight outline width |
| Motion | `--dp-motion-control` | `100ms ease` | Crisp physical state compression |

### Component Breakdown
1. **`<HeroSection />`:**
   * Headline in bold Caveat font (`clamp(2rem, 5vw, 3.5rem)`), with an irregular hand-drawn SVG underline.
   * Drawn pencil arrow directing attention to *Contact Godwyn* (`btn-accent`) and *Preview Resume* (`btn-primary`).
   * Taped portrait mount featuring `photo.png` inside an asymmetrical scrap frame with a translucent yellow tape strip (`rgba(240, 223, 160, 0.75)`).
   * Blue handwritten marginalia scrap pinned with tape for quick student details.
2. **`<MetricBrackets />`:**
   * Crisp drawn pencil brackets enclosing 3 key numbers: `4+` systems, `100%` Vanguard compliant, `180 hrs` immersion.
3. **`<ProjectsGrid />`:**
   * 2-column staggered layout on desktop (`md:grid-cols-2`, with even items having a slight vertical offset `mt-6`).
   * Each card features a blue category tag, title, tech stack list, narrative description, and hand-drawn checkmarks (`✓`).
4. **`<ProcessStrip />`:**
   * Irregular paper container (`#eee8da`) with circled steps 1 through 4 connected by pencil arrows.
5. **`<SkillsLedger />`:**
   * Horizontal ledger rows with the *Core Specialization* rendered on a yellow highlight sheet with dark amber text (`#2b2200`).
6. **`<AcademicDisclosures />`:**
   * Clean accessible `<details>`/`<summary>` components with a hand-drawn `+` toggle mark rotating 45° on open.
7. **`<ResumeModal />`:**
   * Client component controlled via `useState`.
   * When opened: displays an overlay with backdrop blur/darkening and renders a multi-section paper resume on screen.
   * Accessible keyboard navigation (`Escape` closes modal, focus trapped, focus restored on close).
8. **`<Footer />`:**
   * Prominent red statement: *"Ready to contribute disciplined execution, rapid problem-solving, and reliable development to your engineering team."*
   * Action buttons for Email, GitHub, and LinkedIn.
   * 2-column divided footer with location and contact information (`0934 770 7593`).

---

## 5. Accessibility & Motion

* **Color Contrast:**
  * Ground (`#f7f2e7`) to Ink (`#38352f`) = **8.5:1** (WCAG AAA).
  * Ground (`#f7f2e7`) to Accent (`#9e3a2e`) = **4.7:1** (WCAG AA).
  * Highlight (`#f0dfa0`) to Deep Amber (`#2b2200`) = **11:1** (WCAG AAA).
* **Keyboard Focus:**
  * All interactive elements (`<a>`, `<button>`, `<summary>`) use:
    ```css
    :focus-visible {
      outline: 2px dashed #344c69;
      outline-offset: 4px;
    }
    ```
* **Reduced Motion:**
  * Complete support for `@media (prefers-reduced-motion: reduce)`:
    * Disables all rotations (`rotate(-0.5deg)`), tilts, and transforms.
    * Retains instantaneous background and border color shifts for state confirmation.

---

## 6. Vercel Deployment & Build Configuration

* **`vercel.json` Configuration:**
  ```json
  {
    "framework": "nextjs",
    "buildCommand": "npm run build",
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "X-Content-Type-Options", "value": "nosniff" },
          { "key": "X-Frame-Options", "value": "DENY" },
          { "key": "X-XSS-Protection", "value": "1; mode=block" }
        ]
      }
    ]
  }
  ```
* **Static Generation:** Next.js pre-renders `page.tsx` as a static HTML export during `npm run build`.

---

## 7. Quality Gates & Verification Checklist

1. **Compilation Check:** Run `npm run build` to verify zero TypeScript errors and successful static page generation.
2. **Lint & Detector Check:** Run ESLint and the Impeccable design detector (`impeccable detect`) to ensure zero design drift.
3. **Responsive Verification:** Inspect layout at mobile (360px), tablet (768px), and wide desktop (1280px).
4. **Interactive Modal Test:** Verify opening, closing, `Escape` key handler, and focus restoration on `<ResumeModal />`.
5. **No File Leaks:** Confirm that no `.docx` or raw source documents exist in `/public`.
