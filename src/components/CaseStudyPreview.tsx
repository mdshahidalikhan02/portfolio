import { Link } from "react-router-dom";
import { projects } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function CaseStudyPreview() {
  const p = projects.find((x) => x.featured && x.caseStudy);
  if (!p || !p.caseStudy) return null;
  const cs = p.caseStudy;

  return (
    <section id="case-study" className="border-b border-hairline bg-surface/40 py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[case-study] featured-project" title={p.name} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <Block heading="Problem" text={cs.problem} />
            <Block heading="Architecture" text={cs.architecture} />

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wide text-signal">
                Key engineering decisions
              </h4>
              <div className="mt-4 space-y-4">
                {cs.decisions.slice(0, 2).map((d) => (
                  <div key={d.heading} className="border-l-2 border-hairline-strong pl-4">
                    <p className="font-display text-sm font-semibold text-text">{d.heading}</p>
                    <p className="mt-1 text-[0.88rem] leading-relaxed text-text-muted">{d.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to={`/projects/${p.slug}`}
              className="inline-flex w-fit items-center gap-1.5 rounded-full border border-hairline-strong px-5 py-2.5 font-mono text-[0.78rem] uppercase tracking-wide text-text transition-colors hover:border-signal hover:text-signal"
            >
              Full case study: architecture, failure modes &amp; trade-offs →
            </Link>
          </div>

          <div className="card flex flex-col gap-6 p-7">
            <div>
              <p className="eyebrow mb-3">request flow</p>
              <WorkflowDiagram />
            </div>

            <div>
              <p className="eyebrow mb-2">outcome</p>
              <p className="text-[0.9rem] leading-relaxed text-text-muted">{cs.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ heading, text }: { heading: string; text: string }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wide text-signal">{heading}</h4>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-text-muted">{text}</p>
    </div>
  );
}

export function WorkflowDiagram() {
  const steps = [
    "Client request",
    "Rate limiter (Redis + Lua, atomic)",
    "Cache lookup (L1 in-memory / Redis L2)",
    "Kafka job queue (at-least-once)",
    "Worker pool (3–5, idempotent)",
    "Distributed lock (lease + fencing token)",
    "Leader election (cluster coordination)",
  ];
  return (
    <div className="space-y-0 font-mono text-[0.78rem]">
      {steps.map((s, i) => (
        <div key={s} className="relative flex items-center gap-3 py-2">
          <div className="flex flex-col items-center">
            <span
              className={`h-2 w-2 rounded-full ${i === 1 || i === 5 ? "bg-signal" : "bg-ok"}`}
            />
            {i < steps.length - 1 ? <span className="h-6 w-px bg-hairline-strong" /> : null}
          </div>
          <span className={i === 1 || i === 5 ? "text-signal" : "text-text-muted"}>{s}</span>
        </div>
      ))}
    </div>
  );
}
