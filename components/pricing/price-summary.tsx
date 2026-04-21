"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

function Countdown() {
  const [s, setS] = useState(2839);
  useEffect(() => {
    const id = setInterval(() => setS((x) => (x > 0 ? x - 1 : 2839)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return <span className="text-[#171717] tabular-nums">{mm}:{ss}</span>;
}

type Tier = {
  name: string;
  savings?: React.ReactNode;
  price: string;
  priceSuffix?: string;
  subnote: string;
  cta: string;
  ctaVariant: "muted" | "primary" | "outline";
  savingsInvisible?: boolean;
  withTimer?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Basic",
    savings: <span className="line-through text-ink-tertiary">₹1,111</span>,
    savingsInvisible: true,
    price: "₹374",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Get Basic Plan",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    savings: (
      <p className="text-[14px] font-medium leading-[1.43] text-ink-secondary">
        <span className="line-through">₹750</span>{" "}
        <span className="text-success">· Save ₹900 yearly</span>
      </p>
    ),
    price: "₹675",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Get Pro Plan",
    ctaVariant: "primary",
    withTimer: true,
  },
  {
    name: "Gold",
    savings: (
      <p className="text-[14px] font-medium leading-[1.43] text-ink-secondary">
        <span className="line-through">₹1,500</span>{" "}
        <span className="text-brand">· Save ₹21,500 yearly</span>
      </p>
    ),
    savingsInvisible: true,
    price: "₹8,975",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Get Gold Plan",
    ctaVariant: "outline",
  },
];

export function PriceSummary() {
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-start">
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-center gap-[2px] py-3">
          {/* Label column — invisible spacer, matches comparison table label width */}
          <div className="invisible flex w-[192px] shrink-0 items-center gap-2">
            <div className="size-5 shrink-0" />
            <p className="flex-1 text-[14px] font-medium leading-none text-ink-primary">
              AI models
            </p>
          </div>

          {TIERS.map((t) => (
            <div
              key={t.name}
              className="flex w-[266px] shrink-0 flex-col items-center justify-center gap-4 px-3"
            >
              <div className="flex w-full flex-col items-center justify-center gap-3">
                <p className="whitespace-nowrap text-[18px] font-semibold leading-[1.55] text-ink-primary">
                  {t.name}
                </p>
                <div className="flex w-full flex-col items-center gap-0.5">
                  <div
                    className={clsx(
                      "flex items-center",
                      t.savingsInvisible && "opacity-0",
                    )}
                  >
                    {t.savings}
                  </div>
                  <div className="flex w-[126px] items-baseline justify-center font-medium">
                    <p className="text-[24px] leading-[1.3] tracking-[-0.24px] text-ink-primary">
                      {t.price}
                    </p>
                    {t.priceSuffix && (
                      <p className="text-[14px] leading-none text-ink-secondary">
                        {t.priceSuffix}
                      </p>
                    )}
                  </div>
                  <p className="w-full text-center text-[12px] leading-[1.33] text-ink-secondary">
                    {t.subnote}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className={clsx(
                  "relative flex h-9 w-full items-center justify-center overflow-clip rounded-[4px] px-5 text-[14px] font-medium leading-[1.43] transition",
                  t.ctaVariant === "muted" &&
                    "border border-[#0a0a0a] text-ink-primary opacity-40 shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)]",
                  t.ctaVariant === "primary" &&
                    "bg-brand text-white shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:brightness-110",
                  t.ctaVariant === "outline" &&
                    "border border-brand text-brand shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:bg-brand-50",
                )}
              >
                {t.cta}
                {t.withTimer && (
                  <div className="absolute right-[4px] top-1/2 flex -translate-y-1/2 items-center justify-center rounded-[2px] bg-white px-[6px] py-[2px]">
                    <p className="text-center text-[9px] leading-[1.2]">
                      <span className="font-medium text-brand">SAVE 10%</span>
                      <br aria-hidden />
                      <span className="text-ink-tertiary">FOR</span> <Countdown />
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-line-secondary" />
      </div>
    </div>
  );
}
