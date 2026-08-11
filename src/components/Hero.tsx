import { profile } from "../data/content";
import TraceBar from "./TraceBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />

      <div className="container-page relative flex flex-col gap-12 py-24 md:py-32">
        <div className="fade-up max-w-3xl">
          <p className="eyebrow mb-5">[role] backend software engineer — distributed systems</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-6xl">
            I build backend systems that stay correct{" "}
            <span className="text-signal text-glow">when everything else fails.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-muted">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-signal px-6 py-3 font-mono text-[0.8rem] font-medium uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
            >
              View system work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-hairline-strong px-6 py-3 font-mono text-[0.8rem] uppercase tracking-wide text-text transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="fade-up grid gap-6 rounded-xl border border-hairline bg-surface/60 p-6 backdrop-blur sm:grid-cols-2 md:max-w-2xl" style={{ animationDelay: "0.15s" }}>
          <p className="eyebrow col-span-full -mb-2">trace :: report-service :: prod</p>
          <TraceBar
            label="report request latency"
            before="10s"
            after="<2s"
            beforeVal={10}
            afterVal={2}
          />
          <TraceBar
            label="full report generation"
            before="2min"
            after="30s"
            beforeVal={120}
            afterVal={30}
          />
        </div>
      </div>
    </section>
  );
}
