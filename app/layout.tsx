import type { Metadata } from "next";
import { Inter, Hedvig_Letters_Serif } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";
import { StickySocialProof } from "@/components/sticky-social-proof";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hedvigSerif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-hedvig-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Pricing — Pick a plan that grows with you",
  description:
    "Plans for individuals and teams. Loved by 10M+ presenters at Microsoft, Google, Adobe, Meta, McKinsey, and Amazon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${hedvigSerif.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink-primary">
        <main className="pb-[120px]">{children}</main>
        <StickySocialProof />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
