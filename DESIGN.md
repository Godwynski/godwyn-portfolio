---
name: Sketch
description: Shared working sheet with warm paper, handwritten text, pencil-like drawings, blue notes, red corrections, and yellow highlights
colors:
  ground: "#f7f2e7"
  ink: "#38352f"
  ink-muted: "#514d44"
  line: "#b3ac9d"
  accent: "#9e3a2e"
  annotation: "#344c69"
  highlight: "#f0dfa0"
  scrap: "#fcf8ef"
typography:
  display:
    fontFamily: '"Sketch Working Marker", "Caveat", "Kalam", cursive'
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  headline:
    fontFamily: '"Sketch Working Marker", "Caveat", "Kalam", cursive'
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: '"Sketch Working Marker", "Caveat", "Kalam", cursive'
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: '"Sketch Working Hand", "Patrick Hand", cursive'
    fontSize: "24px"
    lineHeight: 1.5
  reading:
    fontFamily: '"Sketch Working Hand", "Patrick Hand", cursive'
    fontSize: "23px"
    lineHeight: 1.5
  detail:
    fontFamily: '"Sketch Working Hand", "Patrick Hand", cursive'
    fontSize: "21px"
    lineHeight: 1.4
rounded:
  control: "9px 4px 17px 5px / 4px 12px 5px 9px"
  scrap: "2px 4px 3px 5px / 4px 2px 5px 3px"
spacing:
  item-gap: "16px"
  loose: "24px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.scrap}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.highlight}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.scrap}"
    rounded: "{rounded.control}"
    padding: "10px 22px"
  note-card:
    backgroundColor: "{colors.scrap}"
    textColor: "{colors.ink}"
    rounded: "{rounded.scrap}"
    padding: "18px 24px"
  annotation-badge:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.annotation}"
    rounded: "{rounded.control}"
    padding: "4px 10px"
---

# Design System: Sketch

## Overview

**Creative North Star: "The Shared Working Sheet"**

The Sketch design system treats the digital surface as a living desk workspace—a shared working sheet composed of tactile warm paper, dark pencil ink, blue marginalia, red editorial revisions, and soft yellow highlights. It balances the immediate human intimacy of hand-drafted notes with rigorous underlying typography and structured information hierarchy.

Rather than sterile digital perfection or noisy skeuomorphism, Sketch uses intentional paper scraps, fine 1.5px pencil strokes, and slight organic rotations (-1° to 1.5°) to create a thoughtful craft aesthetic. Whitespace functions as open thought space, ensuring uninterrupted reading flow, instant scanability, and clear calls to action.

**Key Characteristics:**
- **Warm Living Paper:** An unbleached warm ground (`#f7f2e7`) supporting dark lead pencil ink (`#38352f`) and lighter reference scraps (`#fcf8ef`).
- **Original Handwritten Pairing:** Heavy-weight Working Marker for impactful titles paired with spacious, legible Working Hand for continuous reading.
- **Annotative Color Roles:** Blue for annotations and notes, red for urgent actions and corrections, pale yellow for focused highlights.
- **Organic Affordance:** Slightly uneven hand-drawn borders, tactile hard offsets, taped editorial mounts, and pencil-weight rules.
- **Accessible Foundations:** Semantic HTML controls underneath, clear dashed blue keyboard focus rings, and full respect for reduced-motion preferences.

## Colors

The Sketch palette evokes natural artist paper, graphite, draft ink, and revision marks. Every color serves a designated cognitive role on the page.

### Primary
- **Warm Paper Ground** (`#f7f2e7`): The foundational working sheet surface. Sets a warm, glare-free reading canvas.
- **Pencil Ink** (`#38352f`): Primary text, headings, and hand-drawn strokes. Deep graphite warmth rather than harsh digital black.

### Secondary
- **Pencil Red Accent** (`#9e3a2e`): High-priority actions, primary buttons, critical corrections, and strong emphasis.
- **Blue Annotation** (`#344c69`): Marginalia, secondary callouts, metadata tags, and accessible dashed focus indicators.

### Tertiary
- **Yellow Highlighter** (`#f0dfa0`): Selective text highlights, featured comparison cards, and active hover washes.
- **Paper Scrap** (`#fcf8ef`): Lighter cutout sheets used for notes, cards, editorial image mounts, and primary button faces.

### Neutral
- **Muted Ink** (`#514d44`): Secondary descriptions, dates, metadata, and supporting thoughts.
- **Erased-Line Grey** (`#b3ac9d`): Quiet divider rules, brackets, subtle borders, and structural guidelines.

### Named Rules
**The Paper & Pencil Rule.** White `#FFFFFF` is never used as an open canvas; all surfaces start on warm paper ground (`#f7f2e7`), and text uses graphite ink (`#38352f`) to maintain warm paper coherence.  
**The Red Correction Rule.** Red (`#9e3a2e`) is reserved for singular high-leverage actions and corrections. It appears on no more than 10% of any given view to maintain its urgency.  
**The Intentional Scrap Rule.** Lighter paper scraps (`#fcf8ef`) must never be stacked haphazardly; each scrap corresponds to a discrete thought, quote, or taped reference.

## Typography

**Display Font:** "Sketch Working Marker" (Fallbacks: "Caveat", "Kalam", cursive)  
**Body Font:** "Sketch Working Hand" (Fallbacks: "Patrick Hand", "Architects Daughter", cursive)  
**Annotation Font:** "Sketch Working Hand", cursive

**Character:** Bold, confident felt-marker strokes for display headings paired with spacious, natural, highly legible handwriting for reading. The base reading size is intentionally larger than typical sans-serif text to prevent letter crowding.

### Hierarchy
- **Display** (Bold 700, `clamp(2rem, 5vw, 3.5rem)`, line-height: 1.15): Primary hero statements and opening declarations.
- **Headline** (Bold 700, `2rem` / 32px, line-height: 1.2): Main section titles and key topic headers.
- **Title** (Semi-bold 600, `1.5rem` / 24px, line-height: 1.25): Card headers, feature titles, and prominent note headings.
- **Body** (Regular 400, `24px` / 1.5rem, line-height: 1.5): Standard paragraphs, open thought blocks, and narrative reading.
- **Reading** (Regular 400, `23px`, line-height: 1.5): Continuous long-form prose and reflections; comfortable 60–75ch measure.
- **Detail** (Regular 400, `21px`, line-height: 1.4): Captions, annotations, badge labels, and metadata.

### Named Rules
**The Breathing Room Rule.** Handwritten text runs together if tightly tracked or set in narrow line heights. Body handwriting must maintain `line-height: 1.5` and at least `23px` base size.  
**The Selective Tilt Rule.** Rotations are applied only to discrete notes, tape strips, or occasional standalone headings (-1° to 1.5°). Continuous paragraphs remain untransformed to preserve effortless reading.

## Layout

The layout simulates a continuous working desk sheet with generous vertical breathing room between open thought groups.

- **Spatial Rhythm:**
  - Item gap: `16px`
  - Group spacing: `24px`
  - Major section spacing: `48px` to `64px`
- **Opening Structure:** Opens with a prominent handwritten statement beside a smaller cluster of blue notes and an expressive line drawing or photo reference, with an irregular underline directing attention to the primary action.
- **Responsive Breakpoints:**
  - **Base (<680px):** Single-column working sheet. Facts stack vertically or in pairs; rotations and decorative offsets are dialed back to avoid horizontal overflow; notes stack cleanly.
  - **Medium (≥680px):** Two-column feature groups and reference mounts. Key facts expand across horizontal rows beneath drawn brackets. Comparisons form dual-column cards.
  - **Wide (≥1050px):** Full split opening layout with staggered reference mounts, horizontal process strip with circled steps, and a wide comparison ledger.

## Elevation & Depth

Sketch completely rejects soft digital Gaussian blurs and drop-shadow glow halos. Depth is tactile, physical, and paper-derived: layered paper scraps, translucent tape strips, and crisp, hard graphite or red offset shadows.

### Shadow Vocabulary
- **Control Pencil Offset** (`box-shadow: 2px 2px 0px var(--dp-color-ink)`): Standard rest elevation for primary buttons and interactive cards.
- **Control Accent Offset** (`box-shadow: 2px 2px 0px var(--dp-color-accent)`): High-priority action buttons and urgent callouts.
- **Scrap Paper Lift** (`box-shadow: 1px 2px 0px rgba(56, 53, 47, 0.15)`): Gentle paper sheet elevation for notes and taped mounts.
- **Pressed Settle** (`box-shadow: 0px 0px 0px transparent`): Active/pressed button state, settling flat onto the paper surface.

### Named Rules
**The Zero-Blur Rule.** Soft Gaussian shadows are strictly prohibited. Depth is rendered solely through crisp 1-2px hard offsets and physical tonal contrast.  
**The Paper Settle Rule.** Active/pressed controls physically compress down onto the sheet, collapsing their offset shadow to 0px.

## Shapes

Forms are organic and slightly asymmetrical, evoking lines drawn with a ruler and pencil by hand.

- **Control Radius:** `9px 4px 17px 5px / 4px 12px 5px 9px` on buttons, inputs, and badges.
- **Scrap Radius:** `2px 4px 3px 5px / 4px 2px 5px 3px` on notes, editorial mounts, and ledger sheets.
- **Fine Stroke:** `1.5px solid var(--dp-color-ink)` or `var(--dp-color-line)` for pencil-like perimeter outlines.
- **Tape Strip:** Semi-transparent pale tape (`rgba(240, 223, 160, 0.65)` or `rgba(255, 255, 255, 0.6)`) with torn/irregular ends positioned across photograph and scrap edges.

### Named Rules
**The Organic Edge Rule.** Buttons and containers must use asymmetric border-radius shorthand to avoid cold, machine-cut rectangular boxes.  
**The Restrained Texture Rule.** No heavy crumpled paper noise or distracting SVG turbulence. Clean, subtle grain or untextured flat warm sheets preserve legibility.

## Components

All components preserve standard semantic HTML elements (`<button>`, `<a>`, `<input>`, `<details>`) underneath their hand-drawn appearance.

### Buttons
- **Shape:** Organic control radius (`9px 4px 17px 5px / 4px 12px 5px 9px`), fine 1.5px pencil outline.
- **Primary:** Scrap paper surface (`#fcf8ef`), dark pencil text (`#38352f`), 2px hard pencil shadow. On hover, background shifts to yellow highlight (`#f0dfa0`), tilts slightly (-0.5°), and compresses shadow to 1px.
- **Accent:** Red ink surface (`#9e3a2e`), scrap paper text (`#fcf8ef`), 2px dark pencil shadow.
- **Focus State:** Clear `2px dashed var(--dp-color-annotation)` outline with `3px` offset.
- **Press State:** Transform `translate(2px, 2px)`, shadow collapses to `0px 0px 0px`.

### Notes & Paper Scraps
- **Surface:** Lighter scrap paper (`#fcf8ef`), 1.5px line border (`#b3ac9d`), subtle rotation (-1° to 1.5°).
- **Marginalia:** Blue ink (`#344c69`) handwritten annotations, pinned with a translucent tape strip.

### Features & Benefits
- **Layout:** Small line drawings or hand-drawn checkmarks beside notes, with subtle vertical staggering on wide layouts.
- **Typography:** Display title above reading-size body copy.

### Editorial Taped Mounts
- **Structure:** Pale paper backing scrap, containing photographic assets or illustrations with natural margins.
- **Mounting:** Translucent tape strip across the top or side edge, rotated -1° to 1°. Real photographs retain full clarity and color detail; photos are never converted into artificial doodles.

### Process Strip
- **Surface:** Slightly darker irregular paper strip (`#eee8da`).
- **Steps:** Circled hand-drawn numbers (1, 2, 3...) connected with directional pencil arrows.

### Comparison Ledger
- **Structure:** Broad horizontal rows comparing capabilities or tiers.
- **Highlight:** One featured choice rendered on a yellow highlight scrap (`#f0dfa0`) with bold marker accents.

### Disclosures (Accordions)
- **Markup:** Native `<details>` and `<summary>` elements.
- **Indicator:** Hand-drawn plus/minus or caret with smooth CSS state toggle; clear focus ring on summary.

## Do's and Don'ts

### Do:
- **Do** maintain authentic semantic controls (`<button>`, `<a>`, `<details>`, `<input>`) beneath all sketch styling.
- **Do** keep reading handwriting generously sized (minimum 23px for reading, 24px for body) to ensure continuous legibility.
- **Do** use a visible 2px dashed blue (`#344c69`) focus outline for all interactive elements to guarantee keyboard accessibility.
- **Do** preserve actual photograph detail inside pale paper mounts rather than post-processing pictures into fake drawings.
- **Do** respect `prefers-reduced-motion` by removing tilts and transforms while preserving state color and stroke feedback.
- **Do** use generous spacing between open thought sections to keep the working sheet uncluttered and comfortable to read.

### Don't:
- **Don't** use illegible, ornate cursive or script fonts that make words difficult to decipher.
- **Don't** apply heavy crumpled-paper textures, noisy skeuomorphic overlays, or dense doodle borders that distract from content.
- **Don't** use soft Gaussian drop shadows or polished geometric cards.
- **Don't** animate strokes drawing themselves across the page; keep drawings, handwriting, and paper still.
- **Don't** tilt entire paragraphs or large content blocks; limit small rotations to buttons, tape strips, and scrap notes.
- **Don't** obscure text or alter natural document reading order with decorative annotations.
