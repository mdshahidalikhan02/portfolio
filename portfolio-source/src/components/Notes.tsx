import { Link } from "react-router-dom";
import { notes } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Notes() {
  return (
    <section id="notes" className="scroll-mt-20 border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[notes] engineering-log" title="Engineering notes" />
        <p className="mt-4 max-w-2xl text-text-muted">
          Written from the same production and project work above — not published elsewhere,
          not tutorial filler.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {notes.map((n) => (
            <Link
              key={n.slug}
              to={`/notes/${n.slug}`}
              className="card group flex flex-col p-7 transition-colors hover:border-signal/50"
            >
              <div className="flex flex-wrap gap-2">
                {n.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.68rem] uppercase tracking-wide text-signal">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-text group-hover:text-signal">
                {n.title}
              </h3>
              <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-text-muted">
                {n.summary}
              </p>
              <p className="mt-5 font-mono text-[0.72rem] text-text-faint">{n.readTime} read →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
