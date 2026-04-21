"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PlanMode } from "./plan-toggle";

export function PricingHeader({
  mode,
  onChange,
}: {
  mode: PlanMode;
  onChange: (m: PlanMode) => void;
}) {
  const next: PlanMode = mode === "individual" ? "team" : "individual";
  return (
    <header className="mx-auto flex max-w-3xl flex-col items-center pt-6 text-center">
      <h1 className="text-[24px] font-normal leading-[1.3] tracking-[-0.01em] text-ink-primary">
        Upgrade and get the most out of Presentations.ai
      </h1>
      <button
        type="button"
        onClick={() => onChange(next)}
        className="group mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand underline decoration-brand/40 underline-offset-4 transition hover:decoration-brand"
      >
        {mode === "individual"
          ? "Buying for a team? See team plans"
          : "Buying just for yourself? See individual plans"}
        <motion.span
          className="inline-flex"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </motion.span>
      </button>
    </header>
  );
}
