import { education, achievements } from "../data/content";
import { SectionHeading } from "./Metrics";

export default function Education() {
  return (
    <section id="education" className="border-b border-hairline py-24">
      <div className="container-page grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="[edu] education" title="Education" />
          <div className="card mt-8 p-7">
            <p className="font-display text-lg font-semibold text-text">{education.school}</p>
            <p className="mt-1 text-sm text-text-muted">{education.location}</p>
            <p className="mt-4 text-[0.95rem] text-text">{education.degree}</p>
            <div className="mt-3 flex items-center gap-4 font-mono text-xs text-text-faint">
              <span>GPA {education.gpa}</span>
              <span>·</span>
              <span>{education.period}</span>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="[ach] achievements" title="Achievements" />
          <ul className="mt-8 space-y-4">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3 text-[0.92rem] leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
