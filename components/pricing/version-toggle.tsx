"use client";

import Link from "next/link";
import clsx from "clsx";

export function VersionToggle({ active }: { active: "v1" | "v2" }) {
  return (
    <div className="absolute left-6 top-6 z-50 inline-flex items-center rounded-full border border-line-secondary bg-white p-0.5 text-[12px] font-medium shadow-sm">
      {(["v1", "v2"] as const).map((v) => (
        <Link
          key={v}
          href={v === "v2" ? "/" : "/v1"}
          className={clsx(
            "inline-flex h-7 items-center justify-center rounded-full px-3 transition",
            active === v
              ? "bg-ink-primary text-white"
              : "text-ink-secondary hover:text-ink-primary",
          )}
        >
          {v.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
