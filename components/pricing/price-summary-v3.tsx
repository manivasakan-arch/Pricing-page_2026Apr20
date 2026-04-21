"use client";

import clsx from "clsx";
import { Zap } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  priceSuffix: string;
  primaryCta: "Buy now" | "Try for free";
  secondaryLink?: string;
  bestValue?: boolean;
};

const INDIVIDUAL_TIERS: Tier[] = [
  { name: "Basic", price: "₹374", priceSuffix: "/ month", primaryCta: "Buy now" },
  {
    name: "Pro",
    price: "₹675",
    priceSuffix: "/ month",
    primaryCta: "Try for free",
    secondaryLink: "or buy now",
    bestValue: true,
  },
  {
    name: "Gold",
    price: "₹8,975",
    priceSuffix: "/ month",
    primaryCta: "Try for free",
    secondaryLink: "or buy now",
  },
];

const TEAM_TIERS: Tier[] = [
  { name: "Free", price: "₹0", priceSuffix: "/ 7-day trial", primaryCta: "Buy now" },
  {
    name: "Pro",
    price: "₹1,350",
    priceSuffix: "/ user / month",
    primaryCta: "Try for free",
    secondaryLink: "or buy now",
    bestValue: true,
  },
  {
    name: "Gold",
    price: "₹17,950",
    priceSuffix: "/ user / month",
    primaryCta: "Try for free",
    secondaryLink: "or buy now",
  },
];

const COL_LABEL = 340;
const COL_TIER = 220;
const BORDER = "border-[#e5e5e5]";

export function PriceSummary({ mode = "individual" }: { mode?: "individual" | "team" }) {
  const TIERS = mode === "team" ? TEAM_TIERS : INDIVIDUAL_TIERS;
  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <div className={clsx("overflow-hidden rounded-[8px] border bg-white", BORDER)}>
        <div className="flex w-full items-stretch">
          {/* Label column — empty, white */}
          <div
            className={clsx("shrink-0 border-r bg-white", BORDER)}
            style={{ width: COL_LABEL }}
          />

          {/* Tier columns */}
          {TIERS.map((t) => (
            <div
              key={t.name}
              className="relative flex shrink-0 flex-col gap-3 bg-white px-5 pb-5 pt-6"
              style={{ width: COL_TIER }}
            >
              {t.bestValue && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#c6f24e] px-2.5 py-1 text-[11px] font-semibold leading-none text-ink-primary shadow-sm">
                  <Zap className="size-3" strokeWidth={2.5} fill="currentColor" />
                  Best Value
                </span>
              )}

              <p className="text-[17px] font-semibold leading-[1.2] text-ink-primary">
                {t.name}
              </p>

              <p className="text-[14px] leading-[1.3] text-ink-primary">
                <span className="font-semibold">{t.price}</span>{" "}
                <span className="text-ink-secondary">{t.priceSuffix}</span>
              </p>

              <button
                type="button"
                className="flex h-9 w-full items-center justify-center rounded-[4px] bg-[#0061fe] text-[13px] font-semibold text-white transition hover:brightness-110"
              >
                {t.primaryCta}
              </button>

              {t.secondaryLink && (
                <a
                  href="#"
                  className="text-center text-[13px] leading-[1.3] text-ink-primary underline underline-offset-[3px] hover:text-[#0061fe]"
                >
                  {t.secondaryLink}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
