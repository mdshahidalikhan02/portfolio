import { SectionHeading } from "./Metrics";

type Node = { label: string; note?: string };

function DiagramColumn({ title, nodes, accent = "ok" }: { title: string; nodes: Node[]; accent?: "ok" | "signal" }) {
  const dot = accent === "ok" ? "bg-ok" : "bg-signal";
  return (
    <div className="card p-6">
      <p className="eyebrow mb-5">{title}</p>
      <div className="space-y-0">
        {nodes.map((n, i) => (
          <div key={n.label} className="relative">
            <div className="flex items-start gap-3 py-2.5">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot}`} />
              <div>
                <p className="font-mono text-[0.82rem] text-text">{n.label}</p>
                {n.note ? (
                  <p className="mt-0.5 text-[0.78rem] leading-snug text-text-faint">{n.note}</p>
                ) : null}
              </div>
            </div>
            {i < nodes.length - 1 ? (
              <span className="absolute left-[3px] top-8 h-[calc(100%-1.1rem)] w-px bg-hairline-strong" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SystemDesign() {
  return (
    <section id="system-design" className="border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[design] system-notes" title="How the systems are shaped" />
        <p className="mt-4 max-w-2xl text-text-muted">
          High-level request paths for the two systems above — modeled from the design decisions
          described in Experience and Projects, not exhaustive infrastructure diagrams.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <DiagramColumn
            accent="ok"
            title="risk analytics platform :: report request"
            nodes={[
              { label: "Client request", note: "NPV / GAP / NIM report parameters" },
              { label: "Report service (microservice)", note: "Evolved off a modular monolith" },
              { label: "L1 cache (in-memory)", note: "Hottest, most recent report fragments" },
              { label: "L2 cache (Redis, distributed)", note: "Shared across instances" },
              { label: "Kafka — async report job", note: "Enqueued instead of computed inline" },
              { label: "Consumer: retries → DLT on failure", note: "+ email alert on failed batch" },
              { label: "Report result", note: "10s → <2s · 2min → 30s" },
            ]}
          />

          <DiagramColumn
            accent="signal"
            title="workflow platform :: job request"
            nodes={[
              { label: "Client request", note: "Kind cluster, 3 nodes" },
              { label: "Redis + Lua atomic rate limiter", note: "4K+ RPS · 70ms P95 / 120ms P99 @ 5x load" },
              { label: "Cache lookup (L1 / Redis L2)", note: "90%+ hit ratio · 50ms → <5ms on hits" },
              { label: "Kafka job queue", note: "At-least-once delivery, 3–5 workers" },
              { label: "Idempotent job handler", note: "10,000+ jobs, zero duplicate side effects" },
              { label: "Lease lock + fencing token", note: "Rejects stale writes from paused nodes" },
              { label: "Leader election", note: "5–10s failover after leader pod kill" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
