import React from "react";
import { portfolioData } from "@/data/portfolio";

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const { profile } = portfolioData;

  return (
    <footer className="mt-8 pt-8 border-t-[1.5px] border-line flex flex-col items-center gap-8">
      {/* Closing Statement */}
      <div className="text-center max-w-[820px] space-y-4">
        <h2 className="font-marker text-[clamp(2rem,4.5vw,3.2rem)] font-bold text-accent leading-[1.18] tracking-tight">
          &ldquo;Ready to contribute disciplined execution, rapid problem-solving, and reliable development to your engineering team.&rdquo;
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Godwyn"
            className="inline-flex items-center gap-2 bg-accent text-scrap border-[1.5px] border-ink rounded-control px-5 py-2.5 font-bold shadow-control hover:shadow-[1px_1px_0px_#38352f] hover:brightness-95 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[21px]"
          >
            <span>Email: {profile.email}</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-2 bg-scrap text-ink border-[1.5px] border-ink rounded-control px-4 py-2.5 font-bold shadow-control hover:bg-highlight hover:shadow-[1px_1px_0px_#38352f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[21px]"
          >
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2 bg-scrap text-ink border-[1.5px] border-ink rounded-control px-4 py-2.5 font-bold shadow-control hover:bg-highlight hover:shadow-[1px_1px_0px_#38352f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[21px]"
          >
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 bg-highlight text-[#2b2200] border-[1.5px] border-ink rounded-control px-4 py-2.5 font-bold shadow-control hover:brightness-95 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all text-[21px] cursor-pointer"
          >
            <span>Preview Resume</span>
          </button>
        </div>
      </div>

      {/* Lightly Divided Bottom Bar */}
      <div className="w-full pt-6 border-t border-dashed border-line grid grid-cols-1 md:grid-cols-2 gap-4 text-[21px] text-ink-muted">
        <div>
          <strong className="block text-ink text-[22px]">
            {profile.name} &bull; Developer Profile
          </strong>
          <span>{profile.location}</span>
        </div>
        <div className="md:text-right">
          <strong className="block text-ink text-[22px]">
            Direct Verification & Contact
          </strong>
          <span>
            Phone: <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="text-annotation underline">{profile.phone}</a> &bull; {profile.school}
          </span>
        </div>
      </div>
    </footer>
  );
}
