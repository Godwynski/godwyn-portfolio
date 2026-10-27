import type { Metadata } from "next";
import { Caveat, Patrick_Hand } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Godwyn O. Neri — Full-Stack Developer & Systems Specialist",
  description: "Portfolio working sheet for Godwyn O. Neri, 4th-Year BSIT at STI College Alabang. Full-stack engineering, low-latency Windows systems, and IoT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${patrickHand.variable}`}>
      <body className="antialiased selection:bg-highlight selection:text-ink">
        {children}
      </body>
    </html>
  );
}
