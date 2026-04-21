const SOC_BADGE_SRC =
  "https://cdn.prod.website-files.com/63ca9a05fdc83042565f605c/6835864964a3af6a8cafe738_soc_2.svg";
const GDPR_BADGE_SRC =
  "https://cdn.prod.website-files.com/63ca9a05fdc83042565f605c/683586476745dcccb58d441d_gdpr_badge.svg";

export function ComplianceFooter() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-ink-secondary sm:flex-row">
      <div className="flex items-center gap-2">
        <img
          src={SOC_BADGE_SRC}
          alt="AICPA SOC 2 Type II certified"
          width={60}
          height={60}
          className="h-[60px] w-[60px]"
        />
        <img
          src={GDPR_BADGE_SRC}
          alt="GDPR compliant"
          width={60}
          height={60}
          className="h-[60px] w-[60px]"
        />
      </div>
      <p className="text-base font-medium">
        {`We're a SOC 2 Type II, GDPR-compliant organization.`}
      </p>
    </div>
  );
}
