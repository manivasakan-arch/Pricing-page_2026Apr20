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
  saveText?: string;
  price: string;
  priceSuffix?: string;
  subnote: string;
  cta: string;
  ctaVariant: "muted" | "primary" | "outline";
  withTimer?: boolean;
  tooltip: string;
};

const INDIVIDUAL_TIERS: Tier[] = [
  {
    name: "Basic",
    price: "₹374",
    priceSuffix: "/mo",
    subnote: "billed yearly",
    cta: "Buy Basic",
    ctaVariant: "outline",
    tooltip: "For those who want to make simple decks occasionally",
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
    withTimer: true,
    tooltip: "For those who want AI to craft polished, on-brand decks regularly",
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
    tooltip: "For those who want the best AI models to lead mission-critical decks",
  },
];

const TEAM_TIERS: Tier[] = [
  {
    name: "Free Starter",
    price: "0",
    subnote: "7-day trial only",
    cta: "Current Plan",
    ctaVariant: "muted",
    tooltip: "Your current trial plan",
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
    withTimer: true,
    tooltip: "For teams that want AI to craft polished, on-brand decks together",
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
    tooltip: "For teams that need frontier AI models for mission-critical decks",
  },
];

export function PriceSummary({ mode = "individual" }: { mode?: "individual" | "team" }) {
  const TIERS = mode === "team" ? TEAM_TIERS : INDIVIDUAL_TIERS;
  return (
    <div className="mx-auto flex w-full max-w-[1000px] flex-col items-start">
      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-center gap-[2px] py-3">
          {/* Label column — section title aligned with comparison table labels */}
          <div className="flex w-[340px] shrink-0 items-center self-stretch">
            <p className="text-[28px] font-semibold leading-[1.3] tracking-[-0.24px] text-ink-primary">
              Compare features
              <br />
              across all our plans
            </p>
          </div>

          {TIERS.map((t) => (
            <div
              key={t.name}
              className="flex w-[220px] shrink-0 flex-col items-center justify-center gap-2 self-stretch border-l border-line-secondary px-3"
            >
              <p className="whitespace-nowrap text-[16px] font-bold leading-[1.3] text-ink-primary">
                {t.name}
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-0.5">
                <p
                  className={clsx(
                    "text-[12px] font-medium leading-[1.33] text-success",
                    !t.saveText && "invisible",
                  )}
                >
                  {t.saveText ?? "placeholder"}
                </p>
                <div className="flex items-baseline justify-center gap-1">
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
                <p className="text-center text-[11px] leading-[1.3] text-ink-tertiary">
                  {t.subnote}
                </p>
              </div>

              <div className="group/buy relative w-full">
                <button
                  type="button"
                  className={clsx(
                    "relative flex h-9 w-full items-center justify-center overflow-clip rounded-[4px] text-[14px] font-semibold leading-[14px] transition",
                    t.ctaVariant === "muted" &&
                      "border border-[#0a0a0a] text-ink-primary opacity-40 shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)]",
                    t.ctaVariant === "primary" &&
                      "bg-brand text-white shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:brightness-110",
                    t.ctaVariant === "outline" &&
                      "border border-brand text-brand shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)] hover:bg-brand-50",
                  )}
                >
                  {t.cta}
                </button>
                <BuyTooltip text={t.tooltip} />
              </div>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-line-secondary" />
      </div>
    </div>
  );
}
