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
                {n.note ? <p className="mt-0.5 text-[0.78rem] leading-snug text-text-faint">{n.note}</p> : null}
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
            title="risk reporting platform :: report request"
            nodes={[
              { label: "Client / analyst request", note: "NPV, NIM, GAP, sensitivity, regulatory reports" },
              { label: "Spring Boot REST API", note: "Financial Risk Reporting Platform" },
              { label: "MDX query → ActivePivot OLAP cube", note: "via olap4j / qfs-olap4j, RafalQuery APIs" },
              { label: "Caffeine L1 cache", note: "Tuned keys/TTL/eviction — 10s→<2s, 2min→30s" },
              { label: "Kafka async report job", note: "Enqueued instead of computed inline" },
              { label: "Consumer: retry handling", note: "MessengerClient → email alert on failure" },
              { label: "Scheduled jobs + dedicated thread pools", note: "Report / export / cache-refresh, behind Resilience4j" },
            ]}
          />

          <DiagramColumn
            accent="signal"
            title="workflow platform :: job request"
            nodes={[
              { label: "Job submitted", note: "Persistent job lifecycle" },
              { label: "DB write + Outbox row — same txn", note: "Transactional Outbox pattern" },
              { label: "Relay → Kafka event", note: "At-least-once delivery" },
              { label: "Consumer group: atomic job claim", note: "Only one worker proceeds per job" },
              { label: "Cache-Aside (Caffeine L1 / Redis L2)", note: "App checks cache, populates on miss" },
              { label: "Redis + Lua rate limiter / lock (expiry)", note: "Behind a Resilience4j Circuit Breaker" },
              { label: "Idempotent execution", note: "Success — or nextAttemptAt retry / DLT" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
