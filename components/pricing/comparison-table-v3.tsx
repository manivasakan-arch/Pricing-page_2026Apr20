"use client";

import { Info, Check } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SECTIONS, type Cell } from "./comparison-data";

const CHECK_COLOR = "text-[#4d7ce0]";
const FEATURE_BG = "bg-[#f6f4ef]";
const BORDER = "border-[#e5e5e5]";

function CellRender({ cell }: { cell: Cell }) {
  switch (cell.kind) {
    case "dash":
      return <span className="text-[16px] leading-none text-ink-tertiary">–</span>;
    case "check":
      return <Check className={clsx("size-[18px]", CHECK_COLOR)} strokeWidth={2.25} />;
    case "text":
      if (cell.tone === "magic") {
        return (
          <span className="text-gradient-magic text-center text-[13px] font-medium leading-[1.43]">
            {cell.value}
          </span>
        );
      }
      return (
        <span className="text-center text-[13px] font-normal leading-[1.43] text-ink-primary underline decoration-dotted underline-offset-[3px] decoration-ink-tertiary/60">
          {cell.value}
        </span>
      );
    case "iconText": {
      const isMagic = cell.tone === "magic";
      return (
        <span className="inline-flex items-center gap-1.5">
          <img
            src={cell.icon}
            width={cell.iconWidth}
            height={18}
            alt=""
            aria-hidden
            className="shrink-0"
          />
          <span
            className={
              isMagic
                ? "text-gradient-magic text-[13px] font-medium leading-[1.43]"
                : "text-[13px] font-normal leading-[1.43] text-ink-primary"
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
    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-surface-quaternary px-2 py-0.5 text-[10px] font-medium uppercase leading-[1.33] tracking-[0.4px] text-ink-secondary">
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
      <div className={clsx("w-full overflow-hidden rounded-[8px] border", BORDER)}>
        {SECTIONS.map((section, si) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: si * 0.03, ease: "easeOut" }}
            className="flex w-full flex-col"
          >
            {/* Section title row — white bg across all cols */}
            <div
              className={clsx(
                "flex w-full items-center border-b bg-white",
                BORDER,
                si > 0 && "border-t",
              )}
            >
              <div
                className="flex h-[52px] shrink-0 items-center px-5"
                style={{ width: COL_LABEL }}
              >
                <h3 className="text-[15px] font-bold leading-[1.3] text-ink-primary">
                  {section.title}
                </h3>
              </div>
              <div className="h-[52px] flex-1" />
            </div>

            {/* Feature rows */}
            {section.rows.map((row, ri) => (
              <div
                key={row.label}
                className={clsx(
                  "flex w-full items-stretch",
                  ri < section.rows.length - 1 && "border-b",
                  ri < section.rows.length - 1 && BORDER,
                )}
              >
                {/* Label column — WHITE bg */}
                <div
                  className="flex min-h-[52px] shrink-0 items-center gap-2 bg-white px-5 py-3"
                  style={{ width: COL_LABEL }}
                >
                  <p className="text-[13px] leading-[1.43] text-ink-primary">
                    {row.label}
                  </p>
                  {row.info && (
                    <span
                      title={row.info}
                      className="inline-flex size-4 shrink-0 items-center justify-center"
                    >
                      <Info
                        className="size-[14px] text-ink-tertiary"
                        strokeWidth={1.75}
                      />
                    </span>
                  )}
                  {row.badge && <Badge>{row.badge}</Badge>}
                </div>

                {/* Feature cells — BEIGE bg */}
                <div
                  className={clsx(
                    "flex min-h-[52px] shrink-0 items-center justify-center px-3 py-3",
                    FEATURE_BG,
                  )}
                  style={{ width: COL_TIER }}
                >
                  <CellRender
                    cell={mode === "team" ? (row.free ?? DASH) : row.basic}
                  />
                </div>
                <div
                  className={clsx(
                    "flex min-h-[52px] shrink-0 items-center justify-center px-3 py-3",
                    FEATURE_BG,
                  )}
                  style={{ width: COL_TIER }}
                >
                  <CellRender cell={row.pro} />
                </div>
                <div
                  className={clsx(
                    "flex min-h-[52px] shrink-0 items-center justify-center px-3 py-3",
                    FEATURE_BG,
                  )}
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
  );
}
