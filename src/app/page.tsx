"use client";

import { useEffect, useState } from "react";

const target = new Date("2026-07-10").getTime();

function timeLeft() {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

export default function Home() {
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex flex-col items-center">
        <h1
          className="rise text-[clamp(2.75rem,11vw,9rem)] font-bold leading-[0.92] tracking-tight"
          style={{ animationDelay: "120ms" }}
        >
          Flavortown
          <br />
          <span className="text-white/40">Hoodies</span>
        </h1>

        <div
          className="rise mt-12 flex items-start justify-center gap-4 font-mono sm:gap-10"
          style={{ animationDelay: "260ms" }}
        >
          {units.map((u) => (
            <div key={u.label} className="flex flex-col items-center">
              <span
                suppressHydrationWarning
                className="text-[clamp(2.5rem,9vw,6rem)] font-semibold leading-none tabular-nums"
              >
                {String(u.value).padStart(2, "0")}
              </span>
              <span className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        <p
          className="rise mt-14 max-w-md text-balance text-sm leading-relaxed text-white/50 sm:text-base"
          style={{ animationDelay: "400ms" }}
        >
          Production wraps{" "}
          <span className="text-white/80">Jul 10 – Jul 14</span> — then shipped to
          every Shipwright within the week.
        </p>
      </div>
    </main>
  );
}
