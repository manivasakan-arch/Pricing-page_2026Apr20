"use client";

import clsx from "clsx";

function BuyTooltip({ text }: { text: string }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 -translate-x-1/2 opacity-0 transition-opacity group-hover/buy:opacity-100">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-[5px] border-transparent border-b-[#1a1a1a]" />
      <div className="w-[220px] rounded-[8px] bg-[#1a1a1a] px-3 py-2 text-center text-[12px] leading-[1.4] text-white">
        {text}
      </div>
    </div>
  );
}

type Tier = {
  name: string;
  strike?: string;
  price: string;
  priceSuffix?: string;
  subnote: string;
  cta: string;
  ctaVariant: "muted" | "primary" | "outline";
  bestValue?: boolean;
  tooltip: string;
};

const INDIVIDUAL_TIERS: Tier[] = [
  {
    name: "Basic",
    price: "₹374",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Now",
    ctaVariant: "outline",
    tooltip: "For those who want to make simple decks occasionally",
  },
  {
    name: "Pro",
    strike: "₹750",
    price: "₹675",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Now",
    ctaVariant: "primary",
    bestValue: true,
    tooltip: "For those who want AI to craft polished, on-brand decks regularly",
  },
  {
    name: "Gold",
    strike: "₹17,950",
    price: "₹8,975",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Now",
    ctaVariant: "outline",
    tooltip: "For those who want the best AI models to lead mission-critical decks",
  },
];

const TEAM_TIERS: Tier[] = [
  {
    name: "Free",
    price: "₹0",
    subnote: "7-day trial",
    cta: "Current Plan",
    ctaVariant: "muted",
    tooltip: "Your current trial plan",
  },
  {
    name: "Pro",
    strike: "₹1,500",
    price: "₹1,350",
    priceSuffix: "/user/mo",
    subnote: "billed yearly",
    cta: "Buy Now",
    ctaVariant: "primary",
    bestValue: true,
    tooltip: "For teams that want AI to craft polished, on-brand decks together",
  },
  {
    name: "Gold",
    strike: "₹35,900",
    price: "₹17,950",
    priceSuffix: "/user/mo",
    subnote: "billed yearly",
    cta: "Buy Now",
    ctaVariant: "outline",
    tooltip: "For teams that need frontier AI models for mission-critical decks",
  },
];

const COL_LABEL = 340;
const COL_TIER = 220;

export function PriceSummary({ mode = "individual" }: { mode?: "individual" | "team" }) {
  const TIERS = mode === "team" ? TEAM_TIERS : INDIVIDUAL_TIERS;
  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <div className="flex w-full items-end pb-4 pt-6">
        {/* Label column */}
        <div className="shrink-0 self-stretch pt-1" style={{ width: COL_LABEL }}>
          <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.01em] text-ink-primary">
            Compare
            <br />
            plans
          </h2>
        </div>

        {/* Tier columns */}
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={clsx(
              "relative flex shrink-0 flex-col items-start gap-3 self-stretch px-5",
              t.bestValue &&
                "rounded-t-[12px] bg-[#fff7f2] pb-4 pt-9 ring-1 ring-[#ffd9c2]",
            )}
            style={{ width: COL_TIER }}
          >
            {t.bestValue && (
              <span className="absolute left-5 top-3 inline-flex items-center rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.4px] text-white">
                Best Value
              </span>
            )}

            <p className="text-[18px] font-bold leading-[1.2] text-ink-primary">
              {t.name}
            </p>

            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline gap-1">
                {t.strike && (
                  <span className="text-[13px] font-medium leading-none text-ink-tertiary line-through">
                    {t.strike}
                  </span>
                )}
                <span className="text-[22px] font-bold leading-[1.1] text-ink-primary">
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

            <div className="group/buy relative w-full">
              <button
                type="button"
                className={clsx(
                  "flex h-9 w-full items-center justify-center rounded-[4px] text-[13px] font-semibold leading-[13px] transition",
                  t.ctaVariant === "muted" &&
                    "border border-line-primary text-ink-primary opacity-50",
                  t.ctaVariant === "primary" &&
                    "bg-brand text-white hover:brightness-110",
                  t.ctaVariant === "outline" &&
                    "border border-brand text-brand hover:bg-brand-50",
                )}
              >
                {t.cta}
              </button>
              <BuyTooltip text={t.tooltip} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
