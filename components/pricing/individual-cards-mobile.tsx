"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coin,
  StarFour,
  PresentationChart,
  FilePpt,
  ChartBar,
  PaintBrushBroad,
  Files,
  CheckCircle,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { FIGMA_ASSETS as A } from "./figma-assets";

const ICON_MAP: Record<string, PhosphorIcon> = {
  [A.coinIcon]: Coin,
  [A.starFour]: StarFour,
  [A.presentationChart]: PresentationChart,
  [A.filePpt]: FilePpt,
  [A.chartBar]: ChartBar,
  [A.paintBrushBroad]: PaintBrushBroad,
  [A.files]: Files,
  [A.checkCircle]: CheckCircle,
};

const Row = ({ iconSrc, text }: { iconSrc: string; text: React.ReactNode }) => {
  const Icon = ICON_MAP[iconSrc] ?? StarFour;
  return (
    <div className="flex w-full items-center gap-2">
      {iconSrc === A.coinIcon ? (
        <img src="/ai-credit-coin.svg" alt="" className="h-5 w-5 shrink-0" />
      ) : (
        <Icon size={20} weight="regular" className="shrink-0 text-ink-secondary" />
      )}
      <p className="flex-1 text-[14px] leading-[1.43] text-ink-secondary">{text}</p>
    </div>
  );
};

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

function YearlyToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={on}
      className="flex h-[28px] items-center gap-2 overflow-visible rounded-[8px] bg-surface-secondary pl-[4px] pr-[6px] py-[2px] shadow-[0_0_0_1px_rgba(26,26,26,0.09),0_1px_2px_1px_rgba(26,26,26,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)]"
    >
      <span
        className={`relative flex h-[20px] w-[32px] items-center rounded-[4px] border border-line-secondary p-[3px] transition-colors ${on ? "justify-end bg-brand" : "justify-start bg-surface-quaternary"}`}
      >
        <span className="h-[14px] w-[14px] rounded-[2px] bg-white shadow-[0_0_0_1px_rgba(26,26,26,0.06),0_1px_2px_0_rgba(26,26,26,0.09)]" />
      </span>
      <span className="text-[12px] font-medium leading-[1.33] text-ink-primary">Yearly</span>
    </button>
  );
}

function CardShell({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        highlighted
          ? "relative rounded-[24px] border-2 border-brand-border p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_10px_0px_rgba(0,0,0,0.06)]"
          : "relative rounded-[24px] border border-line-primary bg-white p-5"
      }
      style={
        highlighted
          ? {
              backgroundImage:
                "linear-gradient(127.06deg, #ffffff 2.19%, #ffffff 41.38%, #ffeee5 98.14%)",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

function HeaderRow({
  iconSrc,
  title,
  priceNode,
  rightAccessory,
}: {
  iconSrc: string;
  title: string;
  priceNode: React.ReactNode;
  rightAccessory?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex w-full items-end justify-between gap-3">
      <div className="flex flex-col items-start">
        <img src={iconSrc} alt="" className="h-[44px] w-[44px] object-contain" />
        <p className="mt-3 text-[24px] font-bold leading-none text-ink-primary">{title}</p>
      </div>
      <div className="flex flex-col items-end">
        {rightAccessory}
        {priceNode}
      </div>
    </div>
  );
}

export function IndividualCardsMobile() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="flex flex-col gap-3">
      {/* Pro (highlighted, first) */}
      <CardShell highlighted>
        <div className="mb-4 flex w-full items-end justify-between gap-3">
          <div className="flex flex-col items-start">
            <span
              className="mb-3 inline-flex items-center gap-1 rounded-full py-1 pl-[6px] pr-[10px]"
              style={{ backgroundImage: "linear-gradient(to right, #ffd1ba, #ffe9db)" }}
            >
              <img src={A.coinIconSmall} alt="" className="h-3 w-3 object-contain" />
              <p className="text-[10px] font-medium uppercase leading-none tracking-[0.5px] text-brand">Popular</p>
            </span>
            <img src={A.rocketIcon} alt="" className="h-[44px] w-[44px] object-contain" />
            <p className="mt-3 text-[24px] font-bold leading-none text-ink-primary">Pro</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through">₹750</p>
            <p className="text-right leading-none">
              <span className="text-[24px] font-bold text-ink-primary">₹675</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
        </div>
        <button
          type="button"
          className="group relative h-[48px] w-full overflow-hidden rounded-[4px] transition hover:shadow-[0_6px_14px_-4px_rgba(255,85,0,0.45)]"
          style={{ backgroundImage: "linear-gradient(to bottom, #ff732d, #ff5500)" }}
        >
          <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10 group-active:bg-black/15" />
          <p className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[16px] font-bold leading-[16px] text-white">Buy Now</p>
          <div className="absolute right-[6px] top-1/2 -translate-y-1/2 flex items-center justify-center rounded-[2px] bg-white px-[8px] py-[3px]">
            <p className="text-center text-[11px] leading-[1.3]">
              <span className="font-medium text-brand">SAVE 10%</span>
              <br aria-hidden />
              <span className="text-ink-tertiary">FOR</span> <Countdown />
            </p>
          </div>
        </button>
        <div className="mt-4 flex items-center gap-2">
          <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
          <p className="text-[12px] leading-[1.33] text-success">{"You'll save ₹900 this year"}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-start">
          <Row iconSrc={A.coinIcon} text={<><span className="text-ink-secondary">X,XXX </span><span>credits</span></>} />
          <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Free features plus the following:</p>
          <Row iconSrc={A.starFour} text="Advanced AI models and agents" />
          <Row iconSrc={A.filePpt} text="Export to PowerPoint and Google Slides" />
          <Row iconSrc={A.chartBar} text="Presentation tracking & analytics" />
          <Row iconSrc={A.paintBrushBroad} text="Basic brand customization" />
        </div>
      </CardShell>

      {/* Basic */}
      <CardShell>
        <HeaderRow
          iconSrc="/basic-plane-icon.png"
          title="Basic"
          priceNode={
            <>
              <p className="text-right leading-none">
                <span className="text-[24px] font-bold text-ink-primary">₹374</span>
                <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
              </p>
              <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
            </>
          }
        />
        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
        >
          <p className="text-[16px] font-bold leading-[16px] text-brand">Buy Now</p>
        </button>
        <p className="mt-4 text-center text-[12px] leading-[1.33] text-ink-tertiary">No offers available for this plan</p>
        <div className="mt-4 flex flex-col gap-4 items-start">
          <Row iconSrc={A.coinIcon} text={<><span className="font-medium text-ink-primary">X,XXX </span><span>credits</span></>} />
          <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Pro features plus the following:</p>
          <Row iconSrc={A.starFour} text="Frontier AI models and agents" />
          <Row iconSrc={A.paintBrushBroad} text="Advanced brand customization" />
          <Row iconSrc={A.files} text="Projects with a shared knowledge base" />
        </div>
      </CardShell>

      {/* Gold */}
      <CardShell>
        <HeaderRow
          iconSrc={A.rocketIcon}
          title="Gold"
          rightAccessory={
            <div className="mb-2">
              <YearlyToggle on={yearly} onToggle={() => setYearly((v) => !v)} />
            </div>
          }
          priceNode={
            <>
              <p
                className={`text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through transition-opacity duration-200 ${
                  yearly ? "opacity-100" : "opacity-0"
                }`}
              >
                ₹17,950
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={yearly ? "gold-y" : "gold-m"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-right leading-none"
                >
                  <span className="text-[24px] font-bold text-ink-primary">
                    {yearly ? "₹8,975" : "₹17,950"}
                  </span>
                  <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
                </motion.p>
              </AnimatePresence>
              <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">
                {yearly ? "billed yearly" : "billed monthly"}
              </p>
            </>
          }
        />
        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
        >
          <p className="text-[16px] font-bold leading-[16px] text-brand">Buy Now</p>
        </button>
        <div className="mt-4 flex items-center justify-center gap-2">
          {yearly ? (
            <>
              <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
              <p className="text-[12px] leading-[1.33] text-success">{"You'll save ₹107,664 this year"}</p>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setYearly(true)}
              className="text-[12px] leading-[1.33] text-ink-primary underline underline-offset-4 hover:text-brand"
            >
              Switch to yearly to save ₹107,664
            </button>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 items-start">
          <Row iconSrc={A.coinIcon} text={<><span className="font-medium text-ink-primary">XX,XXX </span><span>credits</span></>} />
          <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Pro features plus the following:</p>
          <Row iconSrc={A.starFour} text="Frontier AI models and agents" />
          <Row iconSrc={A.paintBrushBroad} text="Advanced brand customization" />
          <Row iconSrc={A.files} text="Projects with a shared knowledge base" />
        </div>
      </CardShell>
    </div>
  );
}
