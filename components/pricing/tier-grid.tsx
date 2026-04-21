"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PlanMode } from "./plan-toggle";
import { IndividualCards } from "./individual-cards";
import { TeamCards } from "./team-cards";

export function TierGrid({ mode }: { mode: PlanMode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {mode === "individual" ? <IndividualCards /> : <TeamCards />}
      </motion.div>
    </AnimatePresence>
  );
}
