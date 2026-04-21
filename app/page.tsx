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
    <div className="relative mx-auto w-full max-w-[1280px] px-[10px] pt-8 md:px-6 md:pt-12">
      <button
        type="button"
        aria-label="Close"
        className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-line-secondary bg-white text-ink-secondary transition hover:border-line-primary hover:text-ink-primary"
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>

      <PricingHeader mode={mode} onChange={setMode} />

      <section className="mt-10 animate-fade-up md:mt-12">
        <TierGrid mode={mode} />
      </section>

      <section className="mt-[68px] md:mt-[84px]">
        <Testimonials />
      </section>

      <section className="mt-[104px] hidden text-center md:block">
        <h2 className="text-[24px] font-normal leading-[1.3] tracking-[-0.01em] text-ink-primary">
          Compare features across plans
        </h2>
      </section>

      <section className="sticky top-0 z-30 mt-[52px] -mx-6 hidden bg-white/85 px-6 backdrop-blur-md backdrop-saturate-150 md:block">
        <PriceSummary />
      </section>

      <section className="mt-10 hidden md:block">
        <ComparisonTable />
      </section>

      <section className="mt-16">
        <ComplianceFooter />
      </section>
    </div>
  );
}
