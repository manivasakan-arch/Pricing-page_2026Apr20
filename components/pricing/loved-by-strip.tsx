"use client";

import { FIGMA_ASSETS as A } from "./figma-assets";

type LogoSpec = {
  key: string;
  container: string;
  inner: string;
  src: string;
  extra?: React.ReactNode;
};

const Microsoft = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.15px)] top-[calc(50%-0.5px)] -translate-x-1/2 -translate-y-1/2 h-[15.4px] w-[72.097px]",
  src: A.logoMicrosoft,
});

const Google = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.49px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 h-[17.778px] w-[52.545px]",
  src: A.logoGoogle,
});

const Meta = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.21px)] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[11.667px] w-[57.906px]",
  src: A.logoMeta,
});

const McKinseyScript = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.37px)] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[20px] w-[65.263px]",
  src: A.logoMcKinseyScript,
});

const Amazon = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.56px)] top-[calc(50%+3.25px)] -translate-x-1/2 -translate-y-1/2 h-[15.556px] w-[51.538px]",
  src: A.logoAmazon,
});

const Notion = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.09px)] top-[calc(50%+0.5px)] -translate-x-1/2 -translate-y-1/2 h-[17.6px] w-[48.389px]",
  src: A.logoNotion,
});

const EY = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[58.571px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%+0.27px)] top-1/2 -translate-x-1/2 -translate-y-1/2 h-[24px] w-[23.775px]",
  src: A.logoEY,
});

const BCG = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.09px)] top-[calc(50%+0.51px)] -translate-x-1/2 -translate-y-1/2 h-[15.714px] w-[39.212px]",
  src: A.logoBCG,
});

const Adobe = (key: string): LogoSpec => ({
  key,
  container: "h-[40px] w-[93.333px] overflow-clip relative shrink-0",
  inner:
    "absolute left-[calc(50%-0.52px)] top-[calc(50%-0.5px)] -translate-x-1/2 -translate-y-1/2 h-[15.4px] w-[58.448px] overflow-clip",
  src: "",
  extra: (
    <>
      <img
        src={A.logoAdobeMark}
        alt=""
        className="absolute inset-[0.1%_70.23%_-0.1%_0] block max-w-none"
      />
      <img
        src={A.logoAdobeWord}
        alt=""
        className="absolute inset-[17.91%_0_20.91%_38.54%] block max-w-none"
      />
    </>
  ),
});

const BASE_LOGOS: LogoSpec[] = [
  Microsoft("ms"),
  Google("gg"),
  Adobe("ad"),
  Meta("mt"),
  McKinseyScript("mk"),
  Amazon("az"),
  Notion("nt"),
  EY("ey"),
  BCG("bcg"),
];

function LogoCell({ spec }: { spec: LogoSpec }) {
  return (
    <div className={spec.container}>
      <div className={spec.inner}>
        {spec.extra ?? (
          <img
            src={spec.src}
            alt=""
            className="absolute inset-0 block size-full max-w-none object-contain"
          />
        )}
      </div>
    </div>
  );
}

export function LovedByStrip() {
  return (
    <div className="flex w-full flex-col items-start pt-6">
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex w-full flex-col items-center gap-3 pt-3 md:flex-row md:gap-4">
          <p className="shrink-0 whitespace-nowrap text-center text-[14px] font-medium uppercase leading-none tracking-[0.28px] text-ink-secondary md:text-left">
            <span aria-hidden>{"\u2665\uFE0F "}</span>
            <span>Loved by 10M+ presenters at</span>
          </p>

          <div className="marquee-wrap relative h-[56px] w-full max-w-[695px] overflow-hidden md:w-[695px]">
            <div className="marquee-track absolute left-0 top-0 flex h-[48px] w-max items-center gap-4">
              {[...BASE_LOGOS, ...BASE_LOGOS].map((spec, i) => (
                <LogoCell key={`${spec.key}-${i}`} spec={spec} />
              ))}
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-[56px] w-[96px] bg-gradient-to-r from-transparent to-white" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[56px] w-[120px] bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
