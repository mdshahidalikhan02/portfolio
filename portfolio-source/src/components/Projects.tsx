import { Link } from "react-router-dom";
import { projects } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[repo] projects" title="Built outside the day job" />
        <p className="mt-4 max-w-2xl text-text-muted">
          Personal engineering work, kept clearly separate from client and employer projects.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.slug} className="card flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-text-faint">
                  {p.type}
                </span>
                {p.featured ? (
                  <span className="rounded-full border border-signal/40 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-signal">
                    Featured
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold text-text">{p.name}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-text-muted">{p.tagline}</p>

              <ul className="mt-5 space-y-2.5">
                {p.bullets.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex gap-3 text-[0.85rem] leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.68rem] text-text-muted">
                    {s}
                  </span>
                ))}
              </div>

              {p.caseStudy ? (
                <Link
                  to={`/projects/${p.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-[0.78rem] text-signal transition-colors hover:text-text"
                >
                  Read full case study →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
