"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PricingHeader } from "@/components/pricing/header";
import type { PlanMode } from "@/components/pricing/plan-toggle";
import { TierGrid } from "@/components/pricing/tier-grid";
import { Testimonials } from "@/components/pricing/testimonials";
import { PriceSummary } from "@/components/pricing/price-summary-v1";
import { ComparisonTable } from "@/components/pricing/comparison-table-v1";
import { ComplianceFooter } from "@/components/pricing/compliance-footer";
import { VersionToggle } from "@/components/pricing/version-toggle";

export default function PricingPageV1() {
  const [mode, setMode] = useState<PlanMode>("individual");

  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-[10px] pt-8 md:px-6 md:pt-12">
      <VersionToggle active="v1" />
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

      <section className="sticky top-0 z-30 mt-[104px] -mx-6 hidden bg-white/85 px-6 backdrop-blur-md backdrop-saturate-150 md:block">
        <PriceSummary mode={mode} />
      </section>

      <section className="mt-10 hidden md:block">
        <ComparisonTable mode={mode} />
      </section>

      <section className="mt-16">
        <ComplianceFooter />
      </section>
    </div>
  );
}
