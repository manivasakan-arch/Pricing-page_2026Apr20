"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";

export type TierCardProps = {
  name: string;
  icon: ReactNode;
  priceOriginal?: string;
  priceNow?: string;
  priceSuffix?: string;
  priceNote?: string;
  cta: ReactNode;
  savings?: string;
  credits?: string;
  featureHeading?: string;
  features: { icon?: ReactNode; label: string }[];
  popular?: boolean;
  highlight?: boolean;
  headerRight?: ReactNode;
  footer?: ReactNode;
};

export function TierCard(props: TierCardProps) {
  const {
    name,
    icon,
    priceOriginal,
    priceNow,
    priceSuffix = "/mo",
    priceNote,
    cta,
    savings,
    credits,
    featureHeading,
    features,
    popular,
    highlight,
    headerRight,
    footer,
  } = props;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={clsx(
        "relative flex h-full flex-col rounded-2xl border bg-white px-5 pb-5 pt-6 transition-shadow",
        highlight
          ? "border-brand-border bg-brand-50/40 shadow-card-hover"
          : "border-line-secondary shadow-card hover:shadow-card-hover",
      )}
    >
      {popular && (
        <div className="absolute -top-0 right-4 translate-y-[-50%] rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
          <span className="mr-1">✦</span>POPULAR
        </div>
      )}

      <div className="flex items-start justify-between">
        <div className="text-4xl leading-none">{icon}</div>
        {headerRight}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-3">
        <h3 className="text-xl font-semibold text-ink-primary">{name}</h3>
        {(priceNow || priceOriginal) && (
          <div className="text-right">
            {priceOriginal && (
              <span className="mr-1.5 text-sm text-ink-tertiary line-through">
                {priceOriginal}
              </span>
            )}
            {priceNow && (
              <span className="text-[22px] font-semibold tabular-nums text-ink-primary">
                {priceNow}
                <span className="text-sm font-medium text-ink-secondary">
                  {priceSuffix}
                </span>
              </span>
            )}
            {priceNote && (
              <div className="text-xs text-ink-tertiary">{priceNote}</div>
            )}
          </div>
        )}
      </div>

      <div className="mt-5">{cta}</div>

      {savings && (
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-success">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
          {savings}
        </div>
      )}

      <div className="mt-5 space-y-3">
        {credits && (
          <div className="flex items-center gap-2 text-sm text-ink-primary">
            <span className="text-brand">✦</span>
            <span className="font-medium">{credits}</span>
          </div>
        )}
        {featureHeading && (
          <p className="text-sm font-semibold text-ink-primary">{featureHeading}</p>
        )}
        <ul className="space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-secondary">
              <span className="mt-0.5 text-ink-tertiary">{f.icon ?? "•"}</span>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {footer && <div className="mt-auto pt-5">{footer}</div>}
    </motion.div>
  );
}
