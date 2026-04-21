"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const OPTIONS = [3, 5, 10, 25];
const DISCOUNT_THRESHOLD = 5;

export function UserSelect({
  value,
  onChange,
  showDiscount = true,
}: {
  value: number;
  onChange: (n: number) => void;
  showDiscount?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md border border-line-primary bg-white px-3 py-2 text-sm font-medium text-ink-primary transition hover:border-ink-secondary"
      >
        <span className="flex items-center gap-2">
          <span>
            {value} {value === 1 ? "user" : "users"}
          </span>
          {showDiscount && value >= DISCOUNT_THRESHOLD && (
            <span className="inline-flex h-[20px] items-center rounded-[6px] bg-success px-[8px] text-[11px] font-medium leading-none text-white">
              20% Off
            </span>
          )}
        </span>
        <ChevronDown
          className={clsx("h-4 w-4 text-ink-secondary transition", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-20 mt-1 flex flex-col gap-[4px] overflow-hidden rounded-[16px] bg-white p-[12px] shadow-[0px_0px_0px_1px_rgba(26,26,26,0.06),0px_1px_2px_0px_rgba(26,26,26,0.06),0px_4px_6px_0px_rgba(26,26,26,0.06),0px_24px_40px_0px_rgba(26,26,26,0.06),0px_40px_40px_-24px_rgba(26,26,26,0.06),0px_56px_56px_-32px_rgba(26,26,26,0.09)]"
          >
            {OPTIONS.map((n) => (
              <li key={n} className="flex flex-col gap-[4px]">
                {showDiscount && n === DISCOUNT_THRESHOLD && (
                  <>
                    <div className="h-px w-full bg-line-secondary" />
                    <span className="inline-flex h-[24px] w-fit items-center justify-center rounded-[6px] bg-success px-[10px] py-[2px] text-[12px] leading-[1.33] text-white">
                      20% Off
                    </span>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => {
                    onChange(n);
                    setOpen(false);
                  }}
                  className={clsx(
                    "flex h-[36px] w-full items-center justify-between rounded-[4px] px-[8px] py-[12px] text-[14px] leading-[1.43] text-ink-primary transition",
                    "hover:bg-surface-secondary",
                  )}
                >
                  <span>{n} {n === 1 ? "user" : "users"}</span>
                  {n === value && <Check className="h-4 w-4 text-ink-primary" strokeWidth={1.5} />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
