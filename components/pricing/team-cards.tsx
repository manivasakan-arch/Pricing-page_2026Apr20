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
  const [proSeats, setProSeats] = useState(3);
  const [goldSeats, setGoldSeats] = useState(3);

  return (
    <div className="mx-auto w-full max-w-[954px]">
      <div className="relative h-[638px] w-full">
        {/* Pro (highlighted) */}
        <div
          className="absolute left-0 top-0 z-20 h-[638px] w-[318px] overflow-visible rounded-[24px] border-2 border-brand-border shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08),0px_4px_10px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundImage: "linear-gradient(125deg, #ffffff 2.19%, #ffffff 41.38%, #ffeee5 98.14%)",
          }}
        >
          <div
            className="absolute left-[24px] top-[22px] inline-flex items-center gap-1 rounded-full py-1 pl-[6px] pr-[10px]"
            style={{ backgroundImage: "linear-gradient(to right, #ffd1ba, #ffe9db)" }}
          >
            <img src={A.coinIconSmall} alt="" className="h-3 w-3 object-contain" />
            <p className="text-[10px] font-medium uppercase leading-none tracking-[0.5px] text-brand">Popular</p>
          </div>
          <div className="absolute left-[24px] top-[61px] h-[44px] w-[44px]">
            <img src="/pro-jet-icon.png" alt="" className="h-full w-full object-contain" />
          </div>
          <p className="absolute left-[24px] top-[117px] text-[24px] font-bold leading-none text-ink-primary">Pro</p>
          <div className="absolute right-[24px] top-[88px] flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through">₹1,500</p>
            <p className="text-right leading-none">
              <span className="text-[24px] font-bold text-ink-primary">₹1,350</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
          <div className="absolute left-[24px] top-[200px] w-[270px]">
            <UserSelect value={proSeats} onChange={setProSeats} />
          </div>
          <div className="group/buy absolute left-[24px] top-[246px] w-[270px]">
            <button
              type="button"
              className="group relative h-[48px] w-full overflow-hidden rounded-[4px] transition hover:shadow-[0_6px_14px_-4px_rgba(255,85,0,0.45)]"
              style={{ backgroundImage: "linear-gradient(to bottom, #ff732d, #ff5500)" }}
            >
              <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10 group-active:bg-black/15" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-bold leading-[16px] text-white">Buy Now</p>
            </button>
            <BuyTooltip text="For teams that want AI to craft polished, on-brand decks together" />
          </div>
          <div className="absolute left-[24px] top-[304px] flex w-[270px] items-center justify-center gap-2">
            <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
            <p className="text-[12px] leading-[1.33] text-success">
              {proSeats >= 5
                ? `You'll save ₹${(proSeats * 3240).toLocaleString()} this year`
                : `Add ${5 - proSeats} more users to get 20% off`}
            </p>
          </div>
          <div className="absolute left-1/2 top-[352px] flex w-[270px] -translate-x-1/2 flex-col gap-4 items-start">
            <Row iconSrc={A.coinIcon} text={<><span className="text-ink-secondary">X,XXX </span><span>credits</span></>} />
            <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Basic features plus the following</p>
            <Row iconSrc={A.starFour} text="Advanced AI models and agents" />
            <Row iconSrc={A.filePpt} text="Export to PowerPoint and Google Slides" />
            <Row iconSrc={A.chartBar} text="Presentation tracking & analytics" />
            <Row iconSrc={A.paintBrushBroad} text="Basic brand customization" />
          </div>
        </div>

        {/* Gold */}
        <div className="absolute left-[318px] top-[21px] z-10 h-[597px] w-[318px] rounded-r-[24px] border border-line-primary bg-white">
          <div className="absolute left-[24px] top-[40px] flex h-[44px] w-[44px] items-center justify-center">
            <img src={A.rocketIcon} alt="" className="h-[44px] w-[44px] object-contain" />
          </div>
          <p className="absolute left-[24px] top-[96px] text-[24px] font-bold leading-none text-ink-primary">Gold</p>
          <div className="absolute right-[24px] top-[67px] flex flex-col items-end">
            <p className="text-right text-[16px] font-medium leading-[20px] text-ink-tertiary line-through">₹35,900</p>
            <p className="text-right leading-none">
              <span className="text-[24px] font-bold text-ink-primary">₹17,950</span>
              <span className="text-[14px] leading-[1.43] text-ink-tertiary">/mo</span>
            </p>
            <p className="text-right text-[14px] leading-[1.43] text-ink-tertiary">billed yearly</p>
          </div>
          <div className="absolute left-[24px] top-[180px] w-[270px]">
            <UserSelect value={goldSeats} onChange={setGoldSeats} showDiscount={false} />
          </div>
          <div className="group/buy absolute left-[24px] top-[226px] w-[270px]">
            <button
              type="button"
              className="flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
            >
              <p className="text-[16px] font-bold leading-[16px] text-brand">Buy Now</p>
            </button>
            <BuyTooltip text="For teams that need frontier AI models for mission-critical decks" />
          </div>
          <div className="absolute left-[24px] top-[284px] flex w-[270px] items-center justify-center gap-2">
            <CheckCircle size={14} weight="fill" className="shrink-0 text-success" />
            <p className="text-[12px] leading-[1.33] text-success">{"You'll save ₹XX,XXX this year"}</p>
          </div>
          <div className="absolute left-1/2 top-[332px] flex w-[270px] -translate-x-1/2 flex-col gap-4 items-start">
            <Row iconSrc={A.coinIcon} text={<><span className="font-medium text-ink-primary">XX,XXX </span><span>credits</span></>} />
            <p className="w-full text-[14px] font-medium leading-[1.43] text-ink-primary">All Pro features plus the following:</p>
            <Row iconSrc={A.starFour} text="Frontier AI models and agents" />
            <Row iconSrc={A.paintBrushBroad} text="Advanced brand customization" />
            <Row iconSrc={A.files} text="Projects with a shared knowledge base" />
          </div>
        </div>

        {/* Enterprise */}
        <div className="absolute left-[612px] top-[21px] h-[597px] w-[342px] rounded-r-[24px] border border-line-primary bg-white">
          <div className="absolute left-[55px] top-[35px] flex h-[44px] w-[44px] items-center justify-center overflow-hidden">
            <img src="/enterprise-icon.png" alt="" className="h-[49.5px] w-[49.5px] object-contain" />
          </div>
          <p className="absolute left-[47px] top-[91px] text-[24px] font-bold leading-none text-ink-primary">Enterprise</p>

          <div className="absolute left-[48px] top-[156px] flex w-[270px] flex-col items-center gap-[8px]">
            <p className="text-center text-[12px] font-medium uppercase leading-none text-ink-secondary">Trusted by 1000+ Enterprises</p>
            <img src="/enterprise-logos.svg" alt="Google, Adobe, Notion" className="w-full h-auto object-contain" />
          </div>

          <div className="group/buy absolute left-[48px] top-[227px] w-[270px]">
            <button
              type="button"
              className="flex h-[48px] w-full items-center justify-center rounded-[4px] border border-brand transition hover:bg-brand-50 active:bg-brand-100"
            >
              <p className="text-[16px] font-bold leading-[16px] text-brand">Talk to Sales</p>
            </button>
            <BuyTooltip text="For organizations that need dedicated support, SSO, and custom contracts" />
          </div>
        </div>
      </div>
    </div>
  );
}
