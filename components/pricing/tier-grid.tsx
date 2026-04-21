"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PlanMode } from "./plan-toggle";
import { IndividualCards } from "./individual-cards";
import { TeamCards } from "./team-cards";
import { IndividualCardsMobile } from "./individual-cards-mobile";
import { TeamCardsMobile } from "./team-cards-mobile";

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
        <div className="hidden md:block">
          {mode === "individual" ? <IndividualCards /> : <TeamCards />}
        </div>
        <div className="md:hidden">
          {mode === "individual" ? <IndividualCardsMobile /> : <TeamCardsMobile />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
