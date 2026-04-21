"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export type PlanMode = "individual" | "team";

export function PlanToggle({
  mode,
  onChange,
}: {
  mode: PlanMode;
  onChange: (m: PlanMode) => void;
}) {
  const options: { value: PlanMode; label: string }[] = [
    { value: "individual", label: "Individual" },
    { value: "team", label: "Team" },
  ];
  return (
    <div className="mt-5 flex justify-center">
      <div className="relative inline-flex items-center rounded-full border border-line-secondary bg-surface-secondary p-1">
        {options.map((opt) => {
          const active = mode === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={clsx(
                "relative z-10 px-5 py-1.5 text-sm font-medium transition-colors",
                active ? "text-white" : "text-ink-secondary hover:text-ink-primary",
              )}
            >
              {active && (
                <motion.span
                  layoutId="plan-toggle-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 z-[-1] rounded-full bg-brand shadow-sm"
                />
              )}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
