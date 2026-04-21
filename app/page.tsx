"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PricingHeader } from "@/components/pricing/header";
import type { PlanMode } from "@/components/pricing/plan-toggle";
import { TierGrid } from "@/components/pricing/tier-grid";
import { Testimonials } from "@/components/pricing/testimonials";
import { PriceSummary } from "@/components/pricing/price-summary";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { ComplianceFooter } from "@/components/pricing/compliance-footer";

export default function PricingPage() {
  const [mode, setMode] = useState<PlanMode>("individual");

  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-6">
      <button
        type="button"
        aria-label="Close"
        className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-line-secondary bg-white text-ink-secondary transition hover:border-line-primary hover:text-ink-primary"
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>

      <PricingHeader mode={mode} onChange={setMode} />

      <section className="mt-8 animate-fade-up">
        <TierGrid mode={mode} />
      </section>

      <section className="mt-16">
        <Testimonials />
      </section>

      <section className="sticky top-0 z-30 mt-16 -mx-6 bg-white/85 px-6 backdrop-blur-md backdrop-saturate-150">
        <PriceSummary />
      </section>

      <section className="mt-10">
        <ComparisonTable />
      </section>

      <section className="mt-16">
        <ComplianceFooter />
      </section>
    </div>
  );
}
