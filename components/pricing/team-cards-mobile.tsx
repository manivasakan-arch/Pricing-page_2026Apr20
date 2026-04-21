"use client";

import { useState } from "react";
import {
  Coin,
  StarFour,
  FilePpt,
  ChartBar,
  PaintBrushBroad,
  Files,
  CheckCircle,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { FIGMA_ASSETS as A } from "./figma-assets";
import { UserSelect } from "./user-select";

const ICON_MAP: Record<string, PhosphorIcon> = {
  [A.coinIcon]: Coin,
  [A.starFour]: StarFour,
  [A.filePpt]: FilePpt,
  [A.chartBar]: ChartBar,
  [A.paintBrushBroad]: PaintBrushBroad,
  [A.files]: Files,
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
                "linear-gradient(125deg, #ffffff 2.19%, #ffffff 41.38%, #ffeee5 98.14%)",
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

export function TeamCardsMobile() {
  const [proSeats, setProSeats] = useState(3);
  const [goldSeats, setGoldSeats] = useState(3);

  return (
    <div className="flex flex-col gap-3">
      {/* Pro (highlighted, first) */}
      <CardShell highlighted>
        <div className="mb-4 flex w-full items-end justify-between gap-3">
          <div className="flex flex-col items-start">
            <img src={A.rocketIcon} alt="" className="h-[44px] w-[44px] object-contain" />
            <p className="mt-3 text-[24px] font-bold leading-none text-ink-primary">Pro</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through">₹1,500</p>
            <p className="text-right leading-none">
              <span className="text-[24px] font-bold text-ink-primary">₹1,350</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
        </div>
        <div className="mb-3 w-full">
          <UserSelect value={proSeats} onChange={setProSeats} />
        </div>
        <button
          type="button"
          className="group relative h-[48px] w-full overflow-hidden rounded-[4px] transition hover:shadow-[0_6px_14px_-4px_rgba(255,85,0,0.45)]"
          style={{ backgroundImage: "linear-gradient(to bottom, #ff732d, #ff5500)" }}
        >
          <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10 group-active:bg-black/15" />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-bold leading-[16px] text-white">Buy Now</p>
        </button>
        <div className="mt-4 flex items-center justify-center gap-2">
          <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
          <p className="text-[12px] leading-[1.33] text-success">
            {proSeats >= 5
              ? `You'll save ₹${(proSeats * 3240).toLocaleString()} this year`
              : `Add ${5 - proSeats} more users to get 20% off`}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-start">
          <Row iconSrc={A.coinIcon} text={<><span className="text-ink-secondary">X,XXX </span><span>credits</span></>} />
          <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Basic features plus the following</p>
          <Row iconSrc={A.starFour} text="Advanced AI models and agents" />
          <Row iconSrc={A.filePpt} text="Export to PowerPoint and Google Slides" />
          <Row iconSrc={A.chartBar} text="Presentation tracking & analytics" />
          <Row iconSrc={A.paintBrushBroad} text="Basic brand customization" />
        </div>
      </CardShell>

      {/* Gold */}
      <CardShell>
        <div className="mb-4 flex w-full items-end justify-between gap-3">
          <div className="flex flex-col items-start">
            <img src={A.spaceshipIcon} alt="" className="h-[37.4px] w-[37.4px] object-contain" />
            <p className="mt-3 text-[24px] font-bold leading-none text-ink-primary">Gold</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through">₹35,900</p>
            <p className="text-right leading-none">
              <span className="text-[24px] font-bold text-ink-primary">₹17,950</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
        </div>
        <div className="mb-3 w-full">
          <UserSelect value={goldSeats} onChange={setGoldSeats} showDiscount={false} />
        </div>
        <button
          type="button"
          className="flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
        >
          <p className="text-[16px] font-bold leading-[16px] text-brand">Buy Now</p>
        </button>
        <div className="mt-4 flex items-center justify-center gap-2">
          <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
          <p className="text-[12px] leading-[1.33] text-success">{"You'll save ₹XX,XXX this year"}</p>
        </div>
        <div className="mt-4 flex flex-col gap-4 items-start">
          <Row iconSrc={A.coinIcon} text={<><span className="font-medium text-ink-primary">XX,XXX </span><span>credits</span></>} />
          <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Pro features plus the following:</p>
          <Row iconSrc={A.starFour} text="Frontier AI models and agents" />
          <Row iconSrc={A.paintBrushBroad} text="Advanced brand customization" />
          <Row iconSrc={A.files} text="Projects with a shared knowledge base" />
        </div>
      </CardShell>

      {/* Enterprise */}
      <CardShell>
        <div className="flex flex-col items-center">
          <img src="/enterprise-icon.png" alt="" className="h-[49.5px] w-[49.5px] object-contain" />
          <p className="mt-3 text-[24px] font-bold leading-none text-ink-primary">Enterprise</p>
          <div className="mt-6 flex w-full max-w-[270px] flex-col items-center gap-[8px]">
            <p className="text-center text-[12px] font-medium uppercase leading-none text-ink-secondary">Trusted by 1000+ Enterprises</p>
            <img src="/enterprise-logos.svg" alt="Google, Adobe, Notion" className="h-auto w-full object-contain" />
          </div>
          <button
            type="button"
            className="mt-5 flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
          >
            <p className="text-[16px] font-bold leading-[16px] text-brand">Talk to Sales</p>
          </button>
        </div>
      </CardShell>
    </div>
  );
}
