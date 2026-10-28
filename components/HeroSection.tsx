"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const { profile } = portfolioData;

  return (
    <section
      className="flex flex-col md:flex-row items-start justify-between gap-8 pb-6 border-b-[1.5px] border-line relative"
      aria-labelledby="hero-title"
    >
      {/* Left Column: Heading, Bio, Actions */}
      <div className="flex-1 max-w-[680px] w-full">
        <span className="inline-block text-[21px] text-annotation border-b-[1.5px] border-dashed border-annotation pb-0.5 mb-2 max-w-full break-words">
          Working Sheet / Portfolio — {profile.school}
        </span>

        <h1
          id="hero-title"
          className="font-marker text-[clamp(2.1rem,5vw,3.6rem)] font-bold text-ink leading-[1.14] mb-5 tracking-tight break-words"
        >
          Hi, I&apos;m Godwyn. I engineer{" "}
          <span className="bg-highlight text-[#2b2200] px-1.5 rounded-scrap inline-block -rotate-[0.5deg]">
            full-stack web systems
          </span>
          , low-latency Windows utilities, and connected hardware.
        </h1>

        <div className="text-[23px] text-ink leading-relaxed mb-6">
          <p>{profile.summary}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-6 relative">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 bg-accent text-scrap border-[1.5px] border-ink rounded-control px-5 py-2.5 font-bold shadow-control hover:shadow-[1px_1px_0px_#38352f] hover:brightness-95 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[23px] min-h-[48px] w-full sm:w-auto"
          >
            <span>Contact Godwyn</span>
            <span aria-hidden="true">&rarr;</span>
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center justify-center gap-2 bg-scrap text-ink border-[1.5px] border-ink rounded-control px-5 py-2.5 font-bold shadow-control hover:bg-highlight hover:-rotate-[0.5deg] hover:shadow-[1px_1px_0px_#38352f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[23px] cursor-pointer min-h-[48px] w-full sm:w-auto"
          >
            <span>Preview Resume</span>
          </button>

          <div
            className="hidden sm:flex items-center gap-2 text-[21px] text-accent -rotate-1 select-none"
            aria-hidden="true"
          >
            <svg
              width="44"
              height="24"
              viewBox="0 0 44 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 14 C16 10, 28 8, 38 10 M32 4 C35 7, 39 10, 42 11 M33 18 C36 15, 40 12, 42 11" />
            </svg>
            <span>ready to build</span>
          </div>
        </div>
      </div>

      {/* Right Column: Taped Photo & Marginalia Note */}
      <aside
        className="w-full md:w-[300px] flex flex-col gap-6 shrink-0 items-center md:items-stretch"
        aria-label="Reference photo and quick facts"
      >
        {/* Taped Photo Mount */}
        <div className="relative bg-scrap border-[1.5px] border-line rounded-scrap p-4 pb-3 shadow-scrap rotate-1 self-center w-full max-w-[260px] sm:max-w-[280px]">
          {/* Translucent Yellow Tape Strip */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-[1.5deg] w-20 h-5 bg-highlight/75 border-l border-r border-dashed border-line/80 pointer-events-none z-10"
            aria-hidden="true"
          />

          <div className="w-full h-[220px] sm:h-[240px] overflow-hidden border border-line bg-[#e2ddd3] relative">
            <Image
              src="/photo.png"
              alt="Portrait photo of Godwyn O. Neri"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 260px, 280px"
            />
          </div>
          <p className="mt-2 text-[21px] text-ink-muted text-center leading-tight">
            {profile.name} &bull; BSIT (2027)
          </p>
        </div>

        {/* Blue Handwritten Marginalia Scrap */}
        <div className="relative bg-scrap border-[1.5px] border-line rounded-scrap p-3.5 sm:p-4 text-annotation -rotate-[0.75deg] shadow-scrap w-full max-w-[280px] sm:max-w-none">
          <div
            className="absolute -top-2 right-4 w-12 h-4 bg-white/70 border-l border-r border-dashed border-line rotate-3 pointer-events-none"
            aria-hidden="true"
          />
          <h2 className="font-marker text-xl sm:text-2xl font-bold mb-1 text-annotation">
            Quick Notes
          </h2>
          <ul className="text-[21px] leading-snug space-y-1">
            <li>
              &bull; <strong>Location:</strong> Parañaque City, Metro Manila
            </li>
            <li>
              &bull; <strong>Lead:</strong> Lumina LMS Capstone
            </li>
            <li>
              &bull; <strong>Stack:</strong> Rust, TypeScript, Supabase, C++
            </li>
            <li>
              &bull; <strong>Phone:</strong> {profile.phone}
            </li>
            <li>
              &bull; <strong>Status:</strong> Available for Internship / OJT
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
