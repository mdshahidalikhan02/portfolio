import { experience } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[log] professional-experience" title="Where the systems run" />

        <div className="mt-14 space-y-0">
          {experience.map((job, i) => (
            <div key={i} className="relative border-l border-hairline pl-8 pb-14 last:pb-0 sm:pl-10">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-signal bg-bg" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">
                  {job.role} <span className="text-text-muted">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-text-faint">{job.period}</span>
              </div>

              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-signal">
                {job.project} — {job.location}
              </p>

              <ul className="mt-5 space-y-3">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-[0.95rem] leading-relaxed text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.7rem] text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
