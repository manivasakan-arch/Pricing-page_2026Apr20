const TESTIMONIALS = [
  {
    key: "patrick",
    quote: "Finally sleep well before big presentations. No more 3am panic!",
    name: "Patrick",
    role: "Marketing • Fortune 500 Tech",
    avatar: "/testimonials/patrick.png",
  },
  {
    key: "angela",
    quote:
      "My presentation anxiety is completely gone. I actually look forward to board meetings now.",
    name: "Angela",
    role: "Sales VP • Food Delivery Startup",
    avatar: "/testimonials/angela.png",
  },
  {
    key: "walter",
    quote:
      "Used to stress for weeks before investor pitches. Now I create stunning decks in 20 minutes.",
    name: "Walter",
    role: "Product Manager • Fintech Unicorn",
    avatar: "/testimonials/walter.png",
  },
];

export function Testimonials() {
  return (
    <div className="flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-stretch md:gap-5">
      {TESTIMONIALS.map((t) => (
        <figure
          key={t.key}
          className="flex w-full shrink-0 flex-col items-start overflow-clip rounded-[12px] border border-[rgba(26,26,26,0.09)] bg-white p-5 md:w-[310px]"
        >
          <div className="flex w-full flex-1 flex-col items-start justify-between gap-[30px]">
            <blockquote className="w-full text-[16px] italic leading-[1.5] text-ink-primary md:w-[270px]" style={{ fontFamily: "var(--font-hedvig-serif), serif" }}>
              {`\u201C${t.quote}\u201D`}
            </blockquote>
            <figcaption className="flex w-full items-center gap-[10px]">
              <div className="relative size-[44px] shrink-0 overflow-hidden rounded-full border border-[rgba(26,26,26,0.09)]">
                <img
                  src={t.avatar}
                  alt=""
                  className="absolute left-[5.11%] top-[10.23%] size-[89.77%] max-w-none object-cover"
                />
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
