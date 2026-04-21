"use client";

import { Info, Check } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { SECTIONS, type Cell } from "./comparison-data";

function CellRender({ cell }: { cell: Cell }) {
  switch (cell.kind) {
    case "dash":
      return (
        <span
          aria-hidden
          className="relative inline-block size-5 opacity-50"
        >
          <span className="absolute inset-y-[46.25%] inset-x-1/4 rounded-full bg-ink-tertiary" />
        </span>
      );
    case "check":
      return (
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-success">
          <Check className="size-[14px] text-white" strokeWidth={3} />
        </span>
      );
    case "text":
      if (cell.tone === "magic") {
        return (
          <span className="text-gradient-magic text-[14px] font-medium leading-[1.43]">
            {cell.value}
          </span>
        );
      }
      return (
        <span className="text-[14px] font-normal leading-[1.43] text-ink-primary">
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
    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-surface-quaternary px-2 py-0.5 text-[12px] leading-[1.33] text-ink-primary">
      {children}
    </span>
  );
}

const DASH: Cell = { kind: "dash" };

export function ComparisonTable({ mode = "individual" }: { mode?: "individual" | "team" }) {
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-start gap-10">
      {SECTIONS.map((section, si) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: si * 0.04, ease: "easeOut" }}
          className="flex w-full flex-col items-start gap-3"
        >
          <h3 className="w-full text-[24px] font-semibold leading-[1.3] tracking-[-0.24px] text-ink-primary">
            {section.title}
          </h3>
          <div className="flex w-full items-stretch">
            <div className="flex w-[340px] shrink-0 flex-col bg-gray-50">
              {section.rows.map((row, ri) => (
                <div key={row.label} className="flex flex-col">
                  <div className="flex h-12 items-center gap-2 px-3">
                    <p className="whitespace-nowrap text-[14px] leading-[1.43] text-ink-primary">
                      {row.label}
                    </p>
                    {row.info && (
                      <span title={row.info} className="inline-flex size-5 shrink-0 items-center justify-center">
                        <Info
                          className="size-[15px] text-ink-tertiary"
                          strokeWidth={1.75}
                        />
                      </span>
                    )}
                    {row.badge && <Badge>{row.badge}</Badge>}
                  </div>
                  {ri < section.rows.length - 1 && (
                    <div className="h-px w-full bg-line-secondary" />
                  )}
                </div>
              ))}
            </div>
            {(["basic", "pro", "gold"] as const).map((key) => (
              <div
                key={key}
                className="flex w-[220px] shrink-0 flex-col border-l border-line-secondary"
              >
                {section.rows.map((row, ri) => {
                  const cell =
                    key === "basic"
                      ? mode === "team"
                        ? (row.free ?? DASH)
                        : row.basic
                      : key === "pro"
                        ? row.pro
                        : row.gold;
                  return (
                    <div key={row.label} className="flex flex-col">
                      <div className="flex h-12 items-center justify-center">
                        <CellRender cell={cell} />
                      </div>
                      {ri < section.rows.length - 1 && (
                        <div className="h-px w-full bg-line-secondary" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
