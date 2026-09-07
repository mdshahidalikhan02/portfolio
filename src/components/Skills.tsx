import { skills } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-hairline py-24">
      <div className="container-page">
        <SectionHeading eyebrow="[stack] skills" title="Working set" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-signal">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-md border border-hairline bg-surface px-3 py-1.5 text-[0.85rem] text-text-muted">
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
