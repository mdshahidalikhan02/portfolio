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
            title="payment gateway :: transaction request"
            nodes={[
              { label: "Client request + idempotency key", note: "Card / UPI / Net Banking / Wallet" },
              { label: "Redis SETNX idempotency check", note: "Retry short-circuited if key exists" },
              { label: "Strategy adapter → payment rail", note: "One contract, per-rail implementation" },
              { label: "DB write + Outbox row (same txn)", note: "Transactional Outbox pattern" },
              { label: "Relay → Kafka event", note: "At-least-once, idempotent consumers" },
              { label: "SAGA compensation on failure", note: "Unwinds prior steps, not just retries" },
              { label: "Webhook delivery (HMAC-signed)", note: "Backoff → DLQ replay on failure" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
