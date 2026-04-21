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

export function TeamCards() {
  const [proSeats, setProSeats] = useState(2);
  const [goldSeats, setGoldSeats] = useState(2);

  return (
    <div className="mx-auto w-full max-w-[864px]">
      <div className="relative h-[698px] w-full">
        {/* Pro (highlighted) */}
        <div
          className="absolute left-0 top-0 z-20 h-[698px] w-[288px] overflow-visible rounded-[24px] border-2 border-brand-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_10px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundImage: "linear-gradient(127.06deg, #ffffff 2.19%, #ffffff 41.38%, #ffeee5 98.14%)",
          }}
        >
          <div className="absolute left-[22px] top-[23px] h-[80px] w-[80px]">
            <img src={A.rocketIcon} alt="" className="h-full w-full object-contain" />
          </div>
          <p className="absolute left-[22px] top-[111px] text-[24px] font-bold leading-none text-ink-primary">Pro</p>
          <div className="absolute right-[22px] top-[86px] flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-primary line-through">₹1,500</p>
            <p className="text-right leading-none">
              <span className="text-[28px] font-bold text-ink-primary">₹1,350</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
          <div className="absolute left-[22px] top-[192px] w-[240px]">
            <UserSelect value={proSeats} onChange={setProSeats} />
          </div>
          <button
            type="button"
            className="group absolute left-[22px] top-[238px] h-[60px] w-[240px] overflow-hidden rounded-[4px] transition hover:shadow-[0_6px_14px_-4px_rgba(255,85,0,0.45)]"
            style={{ backgroundImage: "linear-gradient(to bottom, #ff732d, #ff5500)" }}
          >
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10 group-active:bg-black/15" />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-bold leading-[16px] text-white">Buy Now</p>
          </button>
          <div className="absolute left-[22px] top-[308px] flex w-[240px] items-center justify-center gap-2">
            <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
            <p className="text-[12px] leading-[1.33] text-success">
              {proSeats >= 5
                ? `You'll save ₹${(proSeats * 3240).toLocaleString()} this year`
                : `Add ${5 - proSeats} more users to get 20% off`}
            </p>
          </div>
          <div className="absolute left-1/2 top-[344px] flex w-[240px] -translate-x-1/2 flex-col gap-4 items-start">
            <Row iconSrc={A.coinIcon} text={<><span className="text-ink-secondary">X,XXX </span><span>credits</span></>} />
            <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Basic features plus the following:</p>
            <Row iconSrc={A.starFour} text="Advanced AI models and agents" />
            <Row iconSrc={A.filePpt} text="Export to PowerPoint and Google Slides" />
            <Row iconSrc={A.chartBar} text="Presentation tracking & analytics" />
            <Row iconSrc={A.paintBrushBroad} text="Basic brand customization" />
          </div>
        </div>

        {/* Gold */}
        <div className="absolute left-[288px] top-[21px] z-10 h-[597px] w-[288px] rounded-r-[24px] border border-line-primary bg-white">
          <div className="absolute left-[23px] top-[27px] flex items-center p-[4.5px]">
            <img src={A.spaceshipIcon} alt="" className="h-[51px] w-[51px] object-contain" />
          </div>
          <p className="absolute left-[23px] top-[95px] text-[24px] font-bold leading-none text-ink-primary">Gold</p>
          <div className="absolute right-[23px] top-[66px] flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-primary line-through">₹35,900</p>
            <p className="text-right leading-none">
              <span className="text-[28px] font-bold text-ink-primary">₹17,950</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
          <div className="absolute left-[23px] top-[172px] w-[240px]">
            <UserSelect value={goldSeats} onChange={setGoldSeats} />
          </div>
          <button
            type="button"
            className="absolute left-[23px] top-[218px] flex h-[60px] w-[240px] items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
          >
            <p className="text-[16px] font-bold leading-[16px] text-brand">Buy Now</p>
          </button>
          <div className="absolute left-[23px] top-[288px] flex w-[240px] items-center justify-center gap-2">
            <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
            <p className="text-[12px] leading-[1.33] text-success">{"You'll save ₹XX,XXX this year"}</p>
          </div>
          <div className="absolute left-1/2 top-[324px] flex w-[240px] -translate-x-1/2 flex-col gap-4 items-start">
            <Row iconSrc={A.coinIcon} text={<><span className="font-medium text-ink-primary">XX,XXX </span><span>credits</span></>} />
            <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Pro features plus the following:</p>
            <Row iconSrc={A.starFour} text="Frontier AI models and agents" />
            <Row iconSrc={A.paintBrushBroad} text="Advanced brand customization" />
            <Row iconSrc={A.files} text="Projects with a shared knowledge base" />
          </div>
        </div>

        {/* Enterprise */}
        <div className="absolute left-[552px] top-[21px] h-[597px] w-[312px] rounded-r-[24px] border border-line-primary bg-white">
          <div className="absolute left-[47px] top-[27px] flex h-[60px] w-[60px] items-center justify-center overflow-hidden">
            <img src="/enterprise-icon.png" alt="" className="h-[67.5px] w-[67.5px] object-contain" />
          </div>
          <p className="absolute left-[47px] top-[95px] text-[24px] font-bold leading-none text-ink-primary">Enterprise</p>

          <div className="absolute left-[47px] top-[149px] flex w-[240px] flex-col items-center gap-[8px]">
            <p className="text-center text-[12px] font-medium uppercase tracking-[0.05em] text-ink-secondary">Trusted by 1000+ Enterprises</p>
            <img src="/enterprise-logos.svg" alt="Google, Adobe, Notion" className="w-full h-auto object-contain" />
          </div>

          <button
            type="button"
            className="absolute left-[47px] top-[220px] flex h-[60px] w-[240px] items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
          >
            <p className="text-[16px] font-bold leading-[16px] text-brand">Talk to Sales</p>
          </button>
        </div>
      </div>
    </div>
  );
}
