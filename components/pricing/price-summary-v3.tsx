"use client";

import clsx from "clsx";
import { TIER_TINTS } from "./tier-tints-v3";

type Tier = {
  name: string;
  strike?: string;
  saveText?: string;
  price: string;
  priceSuffix?: string;
  subnote: string;
  cta: string;
  ctaVariant: "muted" | "primary" | "outline";
};

const INDIVIDUAL_TIERS: Tier[] = [
  {
    name: "Basic",
    price: "₹374",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Basic",
    ctaVariant: "outline",
  },
  {
    name: "Pro",
    strike: "₹750",
    saveText: "Save ₹900 yearly",
    price: "₹675",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Pro",
    ctaVariant: "primary",
  },
  {
    name: "Gold",
    strike: "₹17,950",
    saveText: "Save ₹107,664 yearly",
    price: "₹8,975",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Gold",
    ctaVariant: "outline",
  },
];

const TEAM_TIERS: Tier[] = [
  {
    name: "Free Starter",
    price: "0",
    subnote: "7-day trial only",
    cta: "Current Plan",
    ctaVariant: "muted",
  },
  {
    name: "Pro",
    strike: "₹1,500",
    saveText: "Save ₹1,800/user yearly",
    price: "₹1,350",
    priceSuffix: "/user/mo",
    subnote: "billed yearly",
    cta: "Buy Pro",
    ctaVariant: "primary",
  },
  {
    name: "Gold",
    strike: "₹35,900",
    saveText: "Save ₹215,400/user yearly",
    price: "₹17,950",
    priceSuffix: "/user/mo",
    subnote: "billed yearly",
    cta: "Buy Gold",
    ctaVariant: "outline",
  },
];

const COL_LABEL = 340;
const COL_TIER = 220;

export function PriceSummary({ mode = "individual" }: { mode?: "individual" | "team" }) {
  const TIERS = mode === "team" ? TEAM_TIERS : INDIVIDUAL_TIERS;
  return (
    <div className="flex w-full items-stretch">
      {/* Label column — section title */}
      <div
        className="flex shrink-0 items-end bg-white px-5 pb-5 pt-6"
        style={{ width: COL_LABEL }}
      >
        <p className="text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink-primary">
          Compare features
          <br />
          across all the plans
        </p>
      </div>

      {/* Tier columns — V2 DS style, left-aligned */}
      {TIERS.map((t, i) => (
        <div
          key={t.name}
          className="flex shrink-0 flex-col items-start gap-2 px-5 pb-5 pt-6"
          style={{ width: COL_TIER, background: TIER_TINTS[i] }}
        >
          <p className="text-[16px] font-bold leading-[1.3] text-ink-primary">
            {t.name}
          </p>

          <div className="flex flex-col items-start gap-0.5">
            <p
              className={clsx(
                "text-[12px] font-medium leading-[1.33] text-success",
                !t.saveText && "invisible",
              )}
            >
              {t.saveText ?? "placeholder"}
            </p>
            <div className="flex items-baseline gap-1">
              {t.strike && (
                <span className="text-[12px] font-medium leading-[1.33] text-ink-tertiary line-through">
                  {t.strike}
                </span>
              )}
              <span className="text-[20px] font-bold leading-[1.2] tracking-[-0.24px] text-ink-primary">
                {t.price}
              </span>
              {t.priceSuffix && (
                <span className="text-[12px] leading-none text-ink-secondary">
                  {t.priceSuffix}
                </span>
              )}
            </div>
            <p className="text-[11px] leading-[1.3] text-ink-tertiary">
              {t.subnote}
            </p>
          </div>

          <button
            type="button"
            className={clsx(
              "mt-1 flex h-9 w-full items-center justify-center rounded-[4px] text-[14px] font-semibold leading-[14px] transition",
              t.ctaVariant === "muted" &&
                "border border-[#0a0a0a] text-ink-primary opacity-40 shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)]",
              t.ctaVariant === "primary" &&
                "bg-brand text-white shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:brightness-110",
              t.ctaVariant === "outline" &&
                "border border-brand bg-white text-brand shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:bg-brand-50",
            )}
          >
            {t.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
