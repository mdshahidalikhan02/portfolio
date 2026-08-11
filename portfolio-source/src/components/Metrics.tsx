import { metrics } from "../data/content";
import TraceBar from "./TraceBar";

export default function Metrics() {
  return (
    <section id="impact" className="scroll-mt-20 border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[metrics] engineering-impact" title="Measured, not estimated" />
        <p className="mt-4 max-w-2xl text-text-muted">
          Every number below is a stated outcome from production or benchmark work —
          no percentages invented, no vanity metrics.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {metrics.map((m) => (
            <TraceBar
              key={m.label}
              label={m.label}
              before={m.before}
              after={m.after}
              beforeVal={m.beforeVal}
              afterVal={m.afterVal}
              detail={m.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
