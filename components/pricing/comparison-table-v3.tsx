"use client";

import { Info, Check, Minus } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SECTIONS, type Cell } from "./comparison-data";

function CellRender({ cell }: { cell: Cell }) {
  switch (cell.kind) {
    case "dash":
      return <Minus className="size-5 text-ink-tertiary" strokeWidth={2} />;
    case "check":
      return <Check className="size-[18px] text-ink-primary" strokeWidth={2.5} />;
    case "text":
      if (cell.tone === "magic") {
        return (
          <span className="text-gradient-magic text-center text-[14px] font-medium leading-[1.43]">
            {cell.value}
          </span>
        );
      }
      return (
        <span className="text-center text-[14px] font-normal leading-[1.43] text-ink-primary">
          {cell.value}
        </span>
      );
    case "iconText": {
      const isMagic = cell.tone === "magic";
      return (
        <span className="inline-flex items-center gap-2">
          <img
            src={cell.icon}
            width={cell.iconWidth}
            height={20}
            alt=""
            aria-hidden
            className="shrink-0"
          />
          <span
            className={
              isMagic
                ? "text-gradient-magic text-[14px] font-medium leading-[1.43]"
                : "text-[14px] font-normal leading-[1.43] text-ink-primary"
            }
          >
            {cell.value}
          </span>
        </span>
      );
    }
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-surface-quaternary px-2 py-0.5 text-[11px] font-medium uppercase leading-[1.33] tracking-[0.4px] text-ink-secondary">
      {children}
    </span>
  );
}

const DASH: Cell = { kind: "dash" };

const COL_LABEL = 340;
const COL_TIER = 220;

export function ComparisonTable({ mode = "individual" }: { mode?: "individual" | "team" }) {
  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <div className="relative w-full">
        {/* Pro column continuous highlight — connects with sticky summary card above */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 top-0 rounded-b-[12px] bg-[#fff7f2] ring-1 ring-[#ffd9c2]"
          style={{ left: COL_LABEL + COL_TIER, width: COL_TIER }}
        />

        <div className="relative flex w-full flex-col">
          {SECTIONS.map((section, si) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: si * 0.03, ease: "easeOut" }}
            className="flex w-full flex-col"
          >
            {/* Section title row — full width with thick underline */}
            <div
              className={clsx(
                "flex w-full items-center border-b-2 border-ink-primary pb-3",
                si === 0 ? "pt-0" : "pt-12",
              )}
            >
              <h3 className="text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-ink-primary">
                {section.title}
              </h3>
            </div>

            {/* Rows */}
            {section.rows.map((row) => (
              <div
                key={row.label}
                className="flex w-full items-center border-b border-line-secondary"
              >
                {/* Label */}
                <div
                  className="flex h-[60px] shrink-0 items-center gap-2 pr-4"
                  style={{ width: COL_LABEL }}
                >
                  <p className="text-[14px] leading-[1.43] text-ink-primary">
                    {row.label}
                  </p>
                  {row.info && (
                    <span
                      title={row.info}
                      className="inline-flex size-5 shrink-0 items-center justify-center"
                    >
                      <Info
                        className="size-[15px] text-ink-tertiary"
                        strokeWidth={1.75}
                      />
                    </span>
                  )}
                  {row.badge && <Badge>{row.badge}</Badge>}
                </div>

                {/* Basic / Free */}
                <div
                  className="flex h-[60px] shrink-0 items-center justify-center"
                  style={{ width: COL_TIER }}
                >
                  <CellRender
                    cell={mode === "team" ? (row.free ?? DASH) : row.basic}
                  />
                </div>

                {/* Pro */}
                <div
                  className="flex h-[60px] shrink-0 items-center justify-center"
                  style={{ width: COL_TIER }}
                >
                  <CellRender cell={row.pro} />
                </div>

                {/* Gold */}
                <div
                  className="flex h-[60px] shrink-0 items-center justify-center"
                  style={{ width: COL_TIER }}
                >
                  <CellRender cell={row.gold} />
                </div>
              </div>
            ))}
          </motion.section>
        ))}
        </div>
      </div>
    </div>
  );
}
