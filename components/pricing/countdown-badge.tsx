"use client";

import { useEffect, useState } from "react";

export function CountdownBadge({ seconds = 2839 }: { seconds?: number }) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((s) => (s > 0 ? s - 1 : seconds));
    }, 1000);
    return () => clearInterval(id);
  }, [seconds]);
  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  return (
    <span className="ml-3 rounded-md bg-white/20 px-2 py-1 text-[11px] font-semibold leading-none tracking-wide text-white">
      SAVE 10% <span className="opacity-80">FOR</span>{" "}
      <span className="tabular-nums">{mm}:{ss}</span>
    </span>
  );
}
