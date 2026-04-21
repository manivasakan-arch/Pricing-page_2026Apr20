import { FIGMA_ASSETS as A } from "./figma-assets";

const TESTIMONIALS = [
  {
    key: "patrick",
    quote: "Finally sleep well before big presentations. No more 3am panic!",
    name: "Patrick",
    role: "Marketing • Fortune 500 Tech",
    avatar: A.avatarPatrick,
    avatarBg: "#b5cfff",
    avatarWrapClass:
      "absolute left-1/2 top-[calc(50%+2px)] size-[44px] -translate-x-1/2 -translate-y-1/2",
    avatarImgClass: "absolute inset-0 size-full max-w-none object-cover",
  },
  {
    key: "angela",
    quote:
      "My presentation anxiety is completely gone. I actually look forward to board meetings now.",
    name: "Angela",
    role: "Sales VP • Food Delivery Startup",
    avatar: A.avatarAngela,
    avatarBg: "#ffcd95",
    avatarWrapClass: "absolute inset-0",
    avatarImgClass: "absolute inset-0 size-full max-w-none object-cover",
  },
  {
    key: "walter",
    quote:
      "Used to stress for weeks before investor pitches. Now I create stunning decks in 20 minutes.",
    name: "Walter",
    role: "Product Manager • Fintech Unicorn",
    avatar: A.avatarWalter,
    avatarBg: "#ffeaa8",
    avatarWrapClass: "absolute inset-[9.09%_0_-9.09%_0]",
    avatarImgClass: "absolute inset-0 size-full max-w-none object-cover",
  },
];

export function Testimonials() {
  return (
    <div className="flex items-center justify-center gap-5">
      {TESTIMONIALS.map((t) => (
        <figure
          key={t.key}
          className="flex w-[310px] shrink-0 flex-col items-start overflow-clip rounded-[12px] border border-[rgba(26,26,26,0.09)] bg-white p-5"
        >
          <div className="flex w-full flex-col items-start gap-[30px]">
            <blockquote className="w-[270px] text-[16px] italic leading-[1.5] text-ink-primary">
              {`\u201C${t.quote}\u201D`}
            </blockquote>
            <figcaption className="flex w-full items-center gap-[10px]">
              <div
                className="relative size-[44px] shrink-0 overflow-hidden rounded-full"
                style={{ backgroundColor: t.avatarBg }}
              >
                <div className={t.avatarWrapClass}>
                  <img src={t.avatar} alt="" className={t.avatarImgClass} />
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[14px] font-medium leading-[1.43] text-ink-primary opacity-80">
                  {t.name}
                </p>
                <p className="text-[12px] leading-[1.33] text-ink-secondary opacity-80">
                  {t.role}
                </p>
              </div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
